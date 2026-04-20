import { Router } from "express";
import { eq, and } from "drizzle-orm";
import { db, contentSectionsTable } from "@workspace/db";

const router = Router();

router.get("/:section", async (req, res) => {
  const rows = await db.select().from(contentSectionsTable).where(eq(contentSectionsTable.section, req.params.section));
  const map: Record<string, string> = {};
  for (const r of rows) map[r.key] = r.value;
  res.json(map);
});

router.put("/:section", async (req, res) => {
  const { section } = req.params;
  const updates: Record<string, string> = req.body;
  for (const [key, value] of Object.entries(updates)) {
    const [existing] = await db.select().from(contentSectionsTable)
      .where(and(eq(contentSectionsTable.section, section), eq(contentSectionsTable.key, key)));
    if (existing) {
      await db.update(contentSectionsTable).set({ value: String(value), updatedAt: new Date() })
        .where(eq(contentSectionsTable.id, existing.id));
    } else {
      await db.insert(contentSectionsTable).values({ section, key, value: String(value) });
    }
  }
  res.json({ ok: true });
});

export default router;
