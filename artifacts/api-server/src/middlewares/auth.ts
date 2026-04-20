import type { Request, Response, NextFunction } from "express";

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!(req.session as any).adminId) {
    res.status(401).json({ error: "Unauthorised" });
    return;
  }
  next();
}
