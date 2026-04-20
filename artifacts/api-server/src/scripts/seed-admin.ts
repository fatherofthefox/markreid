/**
 * Run once to create the initial admin user.
 * Usage: PASSWORD=your_password EMAIL=admin@example.com npx tsx src/scripts/seed-admin.ts
 */
import bcrypt from "bcryptjs";
import { db, adminUsersTable } from "@workspace/db";

const email = process.env.EMAIL ?? "admin@markreid.online";
const password = process.env.PASSWORD;

if (!password) {
  console.error("PASSWORD environment variable required");
  process.exit(1);
}

const passwordHash = await bcrypt.hash(password, 12);
const [user] = await db.insert(adminUsersTable).values({ email, passwordHash }).returning();
console.log(`Admin user created: ${user.email} (id: ${user.id})`);
process.exit(0);
