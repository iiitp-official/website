import crypto from "crypto";
import { Request, Response, NextFunction } from "express";

const SAFE = new Set(["GET", "HEAD", "OPTIONS"]);
export function csrfToken(req: Request, res: Response, next: NextFunction) {
  if (!req.cookies?.csrfToken)
    res.cookie("csrfToken", crypto.randomBytes(32).toString("hex"), {
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
  if (
    SAFE.has(req.method) ||
    !req.path.startsWith("/v1/") ||
    req.path.startsWith("/v1/auth/")
  )
    return next();
  const cookie = req.cookies?.csrfToken;
  const header = req.get("x-csrf-token");
  if (
    !cookie ||
    !header ||
    cookie.length !== header.length ||
    !crypto.timingSafeEqual(Buffer.from(cookie), Buffer.from(header))
  )
    return res.status(403).json({ error: "CSRF validation failed." });
  next();
}
