import { Router } from "express";
import { eq, asc } from "drizzle-orm";
import { db, blogPostsTable, frameworksTable } from "@workspace/db";

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

export default router;
