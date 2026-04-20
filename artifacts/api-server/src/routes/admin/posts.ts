import { Router } from "express";
import { eq } from "drizzle-orm";
import { db, blogPostsTable } from "@workspace/db";

const router = Router();

router.get("/", async (_req, res) => {
  const posts = await db.select().from(blogPostsTable).orderBy(blogPostsTable.createdAt);
  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const [post] = await db.select().from(blogPostsTable).where(eq(blogPostsTable.id, Number(req.params.id)));
  if (!post) { res.status(404).json({ error: "Not found" }); return; }
  res.json(post);
});

router.post("/", async (req, res) => {
  const { title, slug, excerpt, body, coverImage, published, readTime } = req.body;
  if (!title || !slug) { res.status(400).json({ error: "title and slug are required" }); return; }
  const [post] = await db.insert(blogPostsTable).values({ title, slug, excerpt, body: body ?? "", coverImage, published: published ?? false, readTime }).returning();
  res.status(201).json(post);
});

router.put("/:id", async (req, res) => {
  const { title, slug, excerpt, body, coverImage, published, readTime } = req.body;
  const [post] = await db.update(blogPostsTable)
    .set({ title, slug, excerpt, body, coverImage, published, readTime, updatedAt: new Date() })
    .where(eq(blogPostsTable.id, Number(req.params.id)))
    .returning();
  if (!post) { res.status(404).json({ error: "Not found" }); return; }
  res.json(post);
});

router.delete("/:id", async (req, res) => {
  await db.delete(blogPostsTable).where(eq(blogPostsTable.id, Number(req.params.id)));
  res.json({ ok: true });
});

export default router;
