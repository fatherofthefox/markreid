import { pgTable, serial, text, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const frameworksTable = pgTable("frameworks", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  details: text("details").notNull(),
  letters: jsonb("letters"),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const insertFrameworkSchema = createInsertSchema(frameworksTable).omit({ id: true });
export type InsertFramework = z.infer<typeof insertFrameworkSchema>;
export type Framework = typeof frameworksTable.$inferSelect;
