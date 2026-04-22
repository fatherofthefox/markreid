import { Router } from "express";
import { eq, asc } from "drizzle-orm";
import { db, blogPostsTable, frameworksTable, pool } from "@workspace/db";
import { logger } from "../lib/logger.js";
import { createRequire } from "module";

const _require = createRequire(import.meta.url);
const nodemailer = _require("nodemailer") as typeof import("nodemailer");

const router = Router();

// ─── Blog Posts ───────────────────────────────────────────────────────────────

router.get("/posts", async (_req, res) => {
  try {
    const posts = await db
      .select()
      .from(blogPostsTable)
      .where(eq(blogPostsTable.published, true))
      .orderBy(blogPostsTable.createdAt);
    res.json(posts);
  } catch (err) {
    logger.error({ err }, "[posts] Failed to fetch posts");
    res.status(500).json({ error: "Failed to load posts." });
  }
});

router.get("/posts/:slug", async (req, res) => {
  try {
    const [post] = await db
      .select()
      .from(blogPostsTable)
      .where(eq(blogPostsTable.slug, req.params.slug));
    if (!post || !post.published) {
      res.status(404).json({ error: "Not found" });
      return;
    }
    res.json(post);
  } catch (err) {
    logger.error({ err }, "[posts] Failed to fetch post by slug");
    res.status(500).json({ error: "Failed to load post." });
  }
});

// ─── Frameworks ───────────────────────────────────────────────────────────────

router.get("/frameworks", async (_req, res) => {
  try {
    const rows = await db
      .select()
      .from(frameworksTable)
      .orderBy(asc(frameworksTable.sortOrder));
    res.json(rows);
  } catch (err) {
    logger.error({ err }, "[frameworks] Failed to fetch frameworks");
    res.status(500).json({ error: "Failed to load frameworks." });
  }
});

// ─── Inquiry (Contact Form) ───────────────────────────────────────────────────

router.post("/inquiry", async (req, res) => {
  const { name, organisation, email, context } = req.body ?? {};

  // Validate required fields
  if (!name?.trim() || !email?.trim()) {
    res.status(400).json({ error: "Name and email are required." });
    return;
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    res.status(400).json({ error: "Please provide a valid email address." });
    return;
  }

  // ── 1. Save to database ──────────────────────────────────────────────────
  let client;
  try {
    // Acquire a connection with a hard 5-second timeout so we never hang
    client = await Promise.race([
      pool.connect(),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("DB connection timeout")), 5000)
      ),
    ]);

    await (client as import("pg").PoolClient).query(
      `INSERT INTO inquiries (name, organisation, email, context)
       VALUES ($1, $2, $3, $4)`,
      [
        name.trim(),
        organisation?.trim() || null,
        email.trim(),
        context?.trim() || null,
      ]
    );

    logger.info(`[inquiry] Saved to DB — name=${name.trim()}, email=${email.trim()}`);
  } catch (err) {
    logger.error({ err }, "[inquiry] Failed to save inquiry to DB");
    res.status(500).json({
      error:
        "Something went wrong saving your message. Please try again or email mark@markreid.online directly.",
    });
    return;
  } finally {
    // Always release the connection, even if the query threw
    if (client) {
      try {
        (client as import("pg").PoolClient).release();
      } catch (_) {
        // ignore release errors
      }
    }
  }

  // ── 2. Send notification email (best-effort, never blocks the response) ──
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT ?? 587),
        secure: Number(SMTP_PORT ?? 587) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
        connectionTimeout: 5_000,
        greetingTimeout: 5_000,
        socketTimeout: 10_000,
      });

      await transporter.sendMail({
        from: SMTP_FROM ?? SMTP_USER,
        to: "mark@markreid.online",
        replyTo: email.trim(),
        subject: `New inquiry from ${name.trim()}${organisation ? ` — ${organisation}` : ""}`,
        text: [
          `Name: ${name.trim()}`,
          `Organisation: ${organisation?.trim() || "—"}`,
          `Email: ${email.trim()}`,
          ``,
          `Message:`,
          context?.trim() || "(no message provided)",
        ].join("\n"),
      });

      logger.info(`[inquiry] Notification email sent for ${email.trim()}`);
    } catch (mailErr) {
      // Email failure is non-fatal — the inquiry is already in the DB
      logger.warn(
        { mailErr },
        "[inquiry] Email notification failed — inquiry saved to DB only"
      );
    }
  } else {
    logger.info(
      `[inquiry] SMTP not con