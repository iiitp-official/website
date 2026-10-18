import { Request, Response } from "express";
import prisma from "../config/prisma";
export async function listAuditLogs(req: Request, res: Response) {
  const page = Math.max(1, Number(req.query.page) || 1),
    limit = Math.min(100, Math.max(1, Number(req.query.limit) || 50));
  const where: any = {};
  if (req.query.action) where.action = String(req.query.action);
  if (req.query.resource) where.resource = String(req.query.resource);
  const [total, logs] = await Promise.all([
    prisma.auditLog.count({ where }),
    prisma.auditLog.findMany({
      where,
      orderBy: { created_at: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
  ]);
  res.json({
    logs,
    pagination: { page, limit, total, pages: Math.ceil(total / limit) },
  });
}
