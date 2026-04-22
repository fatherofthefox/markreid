import { Router } from "express";
import { eq, asc } from "drizzle-orm";
import { db, blogPostsTable, frameworksTable } from "@workspace/db";
import { pool } from "@workspace/db";
import { logger } from "../lib/logger.js";
import { createRequire } from "module";

const _require = createRequire(import.meta.url);
const nodemailer = _require("nodemailer") as typeof import("nodemailer");

const router = Router();

router.get("/posts", async (_req, res) => {
  const posts = await db.select().from(blogPostsTable)
    .where(eq(blogPostsTable.published, true))
    .orderBy(blogPostsTable.createdAt);
  res.json(posts);
});

router.get("/posts/:slug", async (req, res) => {
  const [post] = await db.select().from(blogPostsTable)
    .where(eq(blogPostsTable.slug, req.params.slug));
  if (!post || !post.published) { res.status(404).json({ error: "Not found" }); return; }
  res.json(post);
});

router.get("/frameworks", async (_req, res) => {
  const rows = await db.select().from(frameworksTable).orderBy(asc(frameworksTable.sortOrder));
  res.json(rows);
});

// POST /api/public/inquiry — contact form submission
router.post("/inquiry", async (req, res) => {
  const { name, organisation, email, context } = req.body ?? {};

  if (!name?.trim() || !email?.trim()) {
    res.status(400).json({ error: "Name and email are required." });
    return;
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    res.status(400).json({ error: "Please provide a valid email address." });
    return;
  }

  try {
    const client = await pool.connect();
    try {
      await client.query(
        `INSERT INTO inquiries (name, organisation, email, context) VALUES ($1, $2, $3, $4)`,
        [name.trim(), organisation?.trim() || null, email.trim(), context?.trim() || null]
      );
    } finally {
      client.release();
    }

    // Send notification email if SMTP is configured
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: Number(SMTP_PORT ?? 587),
          secure: Number(SMTP_PORT ?? 587) === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
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

        logger.info(`[inquiry] Notification sent for ${email.trim()}`);
      } catch (mailErr) {
        logger.warn({ mailErr }, "[inquiry] Email notification failed — saved to DB only");
      }
    } else {
      logger.info(`[inquiry] SMTP not configured — inquiry saved to DB (name=${name.trim()}, email=${email.trim()})`);
    }

    res.json({ ok: true });
  } catch (err) {
    logger.error({ err }, "[inquiry] Failed to save inquiry");
    res.status(500).json({ error: "Something went wrong. Please try again or email mark@markreid.online directly." });
  }
});

export default router;
