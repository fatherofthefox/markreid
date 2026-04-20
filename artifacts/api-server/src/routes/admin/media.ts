import { Router } from "express";
import { eq } from "drizzle-orm";
import fs from "fs";
import path from "path";
import { db, mediaTable } from "@workspace/db";
import { upload, UPLOADS_DIR } from "../../lib/uploads.js";

const router = Router();

router.get("/", async (_req, res) => {
  const rows = await db.select().from(mediaTable).orderBy(mediaTable.createdAt);
  res.json(rows);
});

router.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) { res.status(400).json({ error: "No file uploaded" }); return; }
  const url = `/uploads/${req.file.filename}`;
  const [media] = await db.insert(mediaTable).values({
    filename: req.file.filename,
    originalName: req.file.originalname,
    mimeType: req.file.mimetype,
    size: req.file.size,
    path: req.file.path,
    url,
  }).returning();
  res.status(201).json(media);
});

router.delete("/:id", async (req, res) => {
  const [media] = await db.select().from(mediaTable).where(eq(mediaTable.id, Number(req.params.id)));
  if (!media) { res.status(404).json({ error: "Not found" }); return; }
  const filePath = path.join(UPLOADS_DIR, media.filename);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  await db.delete(mediaTable).where(eq(mediaTable.id, media.id));
  res.json({ ok: true });
});

export default router;
