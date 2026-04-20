import { Router } from "express";
import { eq, asc } from "drizzle-orm";
import { db, frameworksTable } from "@workspace/db";

const router = Router();

router.get("/", async (_req, res) => {
  const rows = await db.select().from(frameworksTable).orderBy(asc(frameworksTable.sortOrder));
  res.json(rows);
});

router.get("/:id", async (req, res) => {
  const [row] = await db.select().from(frameworksTable).where(eq(frameworksTable.id, Number(req.params.id)));
  if (!row) { res.status(404).json({ error: "Not found" }); return; }
  res.json(row);
});

router.post("/", async (req, res) => {
  const { slug, title, category, description, details, letters, sortOrder } = req.body;
  if (!slug || !title) { res.status(400).json({ error: "slug and title are required" }); return; }
  const [row] = await db.insert(frameworksTable).values({ slug, title, category, description, details, letters, sortOrder: sortOrder ?? 0 }).returning();
  res.status(201).json(row);
});

router.put("/:id", async (req, res) => {
  const { slug, title, category, description, details, letters, sortOrder } = req.body;
  const [row] = await db.update(frameworksTable)
    .set({ slug, title, category, description, details, letters, sortOrder })
    .where(eq(frameworksTable.id, Number(req.params.id)))
    .returning();
  if (!row) { res.status(404).json({ error: "Not found" }); return; }
  res.json(row);
});

router.delete("/:id", async (req, res) => {
  await db.delete(frameworksTable).where(eq(frameworksTable.id, Number(req.params.id)));
  res.json({ ok: true });
});

export default router;
