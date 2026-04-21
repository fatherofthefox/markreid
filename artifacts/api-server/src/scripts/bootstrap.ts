/**
 * Bootstraps the database at server startup:
 *  1. Creates all tables (CREATE TABLE IF NOT EXISTS — fully idempotent).
 *  2. Seeds an initial admin user when ADMIN_INITIAL_PASSWORD is set and
 *     no admin user exists yet.
 *
 * Safe to run on every startup; it never drops or modifies existing data.
 */
import bcrypt from "bcryptjs";
import { pool } from "@workspace/db";
import { logger } from "../lib/logger.js";

const DDL = `
CREATE TABLE IF NOT EXISTS admin_users (
  id              SERIAL PRIMARY KEY,
  email           TEXT    NOT NULL UNIQUE,
  password_hash   TEXT    NOT NULL,
  mfa_secret      TEXT,
  mfa_enabled     BOOLEAN NOT NULL DEFAULT FALSE,
  created_at      TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id              SERIAL PRIMARY KEY,
  title           TEXT    NOT NULL,
  slug            TEXT    NOT NULL UNIQUE,
  excerpt         TEXT,
  body            TEXT    NOT NULL DEFAULT '',
  cover_image     TEXT,
  published       BOOLEAN NOT NULL DEFAULT FALSE,
  read_time       TEXT,
  created_at      TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS frameworks (
  id              SERIAL PRIMARY KEY,
  slug            TEXT    NOT NULL UNIQUE,
  title           TEXT    NOT NULL,
  category        TEXT    NOT NULL,
  description     TEXT    NOT NULL,
  details         TEXT    NOT NULL,
  letters         JSONB,
  sort_order      INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS content_sections (
  id              SERIAL PRIMARY KEY,
  section         TEXT    NOT NULL,
  key             TEXT    NOT NULL,
  value           TEXT    NOT NULL DEFAULT '',
  updated_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS media (
  id              SERIAL PRIMARY KEY,
  filename        TEXT    NOT NULL,
  original_name   TEXT    NOT NULL,
  mime_type       TEXT    NOT NULL,
  size            INTEGER NOT NULL,
  path            TEXT    NOT NULL,
  url             TEXT    NOT NULL,
  created_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id              SERIAL PRIMARY KEY,
  user_id         INTEGER NOT NULL REFERENCES admin_users(id) ON DELETE CASCADE,
  token_hash      TEXT    NOT NULL UNIQUE,
  expires_at      TIMESTAMP NOT NULL,
  used            BOOLEAN NOT NULL DEFAULT FALSE,
  created_at      TIMESTAMP NOT NULL DEFAULT NOW()
);
`;

export async function runBootstrap(): Promise<void> {
  const client = await pool.connect();

  try {
    logger.info("[bootstrap] Creating tables if not exists...");
    await client.query(DDL);
    logger.info("[bootstrap] Schema ready.");

    const adminEmail = process.env.ADMIN_INITIAL_EMAIL ?? "admin@markreid.online";
    const adminPassword = process.env.ADMIN_INITIAL_PASSWORD;

    if (adminPassword) {
      const { rows } = await client.query<{ id: number }>(
        "SELECT id FROM admin_users WHERE email = $1",
        [adminEmail]
      );
      if (rows.length === 0) {
        const hash = await bcrypt.hash(adminPassword, 12);
        await client.query(
          "INSERT INTO admin_users (email, password_hash) VALUES ($1, $2)",
          [adminEmail, hash]
        );
        logger.info(`[bootstrap] Admin user created: ${adminEmail}`);
      } else {
        logger.info(`[bootstrap] Admin user already exists: ${adminEmail}`);
      }
    } else {
      logger.info("[bootstrap] ADMIN_INITIAL_PASSWORD not set — skipping admin seed.");
    }
  } finally {
    client.release();
  }
}
