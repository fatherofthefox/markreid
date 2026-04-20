import { Router } from "express";
import healthRouter from "./health.js";
import authRouter from "./auth.js";
import publicRouter from "./public.js";
import postsRouter from "./admin/posts.js";
import frameworksRouter from "./admin/frameworks.js";
import contentRouter from "./admin/content.js";
import mediaRouter from "./admin/media.js";
import { requireAdmin } from "../middlewares/auth.js";
import { apiRateLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.use(apiRateLimiter);
router.use("/health", healthRouter);
router.use("/auth", authRouter);
router.use("/public", publicRouter);

router.use("/admin/posts", requireAdmin, postsRouter);
router.use("/admin/frameworks", requireAdmin, frameworksRouter);
router.use("/admin/content", requireAdmin, contentRouter);
router.use("/admin/media", requireAdmin, mediaRouter);

export default router;
