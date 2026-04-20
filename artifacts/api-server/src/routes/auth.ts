import { Router } from "express";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { createRequire } from "module";
import { eq, and, gt } from "drizzle-orm";
import { db, adminUsersTable, passwordResetTokensTable } from "@workspace/db";
import { authRateLimiter } from "../middlewares/rateLimiter.js";

// otplib and qrcode are CJS-only — load via require for ESM compat
const _require = createRequire(import.meta.url);
const otplib = _require("otplib") as typeof import("otplib");
const QRCode = _require("qrcode") as typeof import("qrcode");
const authenticator = otplib.authenticator;

const router = Router();

// POST /api/auth/login
router.post("/login", authRateLimiter, async (req, res) => {
  const { email, password, totpCode } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required" });
    return;
  }
  try {
    const [user] = await db.select().from(adminUsersTable).where(eq(adminUsersTable.email, email));
    if (!user) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    if (user.mfaEnabled) {
      if (!totpCode) {
        res.status(200).json({ mfaRequired: true });
        return;
      }
      const ok = authenticator.verify({ token: totpCode, secret: user.mfaSecret! });
      if (!ok) {
        res.status(401).json({ error: "Invalid authenticator code" });
        return;
      }
    }
    (req.session as any).adminId = user.id;
    (req.session as any).adminEmail = user.email;
    res.json({ ok: true, email: user.email, mfaEnabled: user.mfaEnabled });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/auth/logout
router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("sid");
    res.json({ ok: true });
  });
});

// GET /api/auth/me
router.get("/me", (req, res) => {
  const session = req.session as any;
  if (!session.adminId) {
    res.status(401).json({ error: "Not authenticated" });
    return;
  }
  res.json({ id: session.adminId, email: session.adminEmail });
});

// POST /api/auth/mfa/setup
router.post("/mfa/setup", async (req, res) => {
  const session = req.session as any;
  if (!session.adminId) { res.status(401).json({ error: "Unauthorised" }); return; }
  try {
    const [user] = await db.select().from(adminUsersTable).where(eq(adminUsersTable.id, session.adminId));
    if (!user) { res.status(404).json({ error: "User not found" }); return; }
    const secret = authenticator.generateSecret();
    const otpauth = authenticator.keyuri(user.email, "Mark Reid CMS", secret);
    const qrDataUrl = await QRCode.toDataURL(otpauth);
    await db.update(adminUsersTable).set({ mfaSecret: secret }).where(eq(adminUsersTable.id, user.id));
    res.json({ qrDataUrl, secret });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/auth/mfa/enable
router.post("/mfa/enable", async (req, res) => {
  const session = req.session as any;
  if (!session.adminId) { res.status(401).json({ error: "Unauthorised" }); return; }
  const { totpCode } = req.body;
  try {
    const [user] = await db.select().from(adminUsersTable).where(eq(adminUsersTable.id, session.adminId));
    if (!user?.mfaSecret) { res.status(400).json({ error: "MFA not set up" }); return; }
    const ok = authenticator.verify({ token: totpCode, secret: user.mfaSecret });
    if (!ok) { res.status(400).json({ error: "Invalid code" }); return; }
    await db.update(adminUsersTable).set({ mfaEnabled: true }).where(eq(adminUsersTable.id, user.id));
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/auth/mfa/disable
router.post("/mfa/disable", async (req, res) => {
  const session = req.session as any;
  if (!session.adminId) { res.status(401).json({ error: "Unauthorised" }); return; }
  try {
    await db.update(adminUsersTable).set({ mfaEnabled: false, mfaSecret: null }).where(eq(adminUsersTable.id, session.adminId));
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/auth/forgot-password
router.post("/forgot-password", authRateLimiter, async (req, res) => {
  const { email } = req.body;
  // Always return 200 to prevent user enumeration
  res.json({ ok: true, message: "If that email exists, a reset link has been sent." });
  if (!email) return;
  try {
    const [user] = await db.select().from(adminUsersTable).where(eq(adminUsersTable.email, email));
    if (!user) return;
    const rawToken = crypto.randomBytes(32).toString("hex");
    const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
    await db.insert(passwordResetTokensTable).values({ userId: user.id, tokenHash, expiresAt });
    // In production: send rawToken via email. Log it for dev purposes.
    console.info(`[PASSWORD RESET] Token for ${email}: ${rawToken} (expires ${expiresAt.toISOString()})`);
  } catch (err) {
    console.error(err);
  }
});

// POST /api/auth/reset-password
router.post("/reset-password", authRateLimiter, async (req, res) => {
  const { token, newPassword } = req.body;
  if (!token || !newPassword || newPassword.length < 12) {
    res.status(400).json({ error: "Token and a password of at least 12 characters are required" });
    return;
  }
  try {
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
    const [record] = await db.select().from(passwordResetTokensTable)
      .where(and(
        eq(passwordResetTokensTable.tokenHash, tokenHash),
        eq(passwordResetTokensTable.used, false),
        gt(passwordResetTokensTable.expiresAt, new Date())
      ));
    if (!record) {
      res.status(400).json({ error: "Invalid or expired reset token" });
      return;
    }
    const passwordHash = await bcrypt.hash(newPassword, 12);
    await db.update(adminUsersTable).set({ passwordHash }).where(eq(adminUsersTable.id, record.userId));
    await db.update(passwordResetTokensTable).set({ used: true }).where(eq(passwordResetTokensTable.id, record.id));
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
