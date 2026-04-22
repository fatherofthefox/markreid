import { Router } from "express";
import { pool } from "@workspace/db";

const router = Router();

router.get("/", async (_req, res) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      `SELECT id, name, organisation, email, context, created_at FROM inquiries ORDER BY created_at DESC`
    );
    res.json(rows);
  } finally {
    client.release();
  }
});

router.delete("/:id", async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query(`DELETE FROM inquiries WHERE id = $1`, [req.params.id]);
    res.json({ ok: true });
  } finally {
    client.release();
  }
});

export default router;
