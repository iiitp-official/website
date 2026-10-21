import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import prisma from "../config/prisma";
import { createAuditLog } from "../middlewares/audit";
import { isAllowedInstituteEmail } from "../utils/auth";

const models = {
  publications: "facultyPublication",
  projects: "facultyProject",
  patents: "facultyPatent",
  seminars: "facultySeminar",
  supervisions: "facultySupervision",
} as const;
const include = {
  publications: { orderBy: { display_order: "asc" as const } },
  projects: { orderBy: { display_order: "asc" as const } },
  patents: { orderBy: { display_order: "asc" as const } },
  seminars: { orderBy: { display_order: "asc" as const } },
  supervisions: { orderBy: { display_order: "asc" as const } },
};

export async function listFaculty(req: Request, res: Response) {
  const page = Math.max(1, Number(req.query.page) || 1),
    limit = Math.min(100, Math.max(1, Number(req.query.limit) || 50));
  const search = String(req.query.search || "").trim();
  const where: Prisma.FacultyProfileWhereInput =
    req.user?.role === "admin" ? {} : { is_published: true };
  if (search)
    where.OR = [
      { name: { contains: search } },
      { department: { contains: search } },
    ];
  const [total, faculty] = await Promise.all([
    prisma.facultyProfile.count({ where }),
    prisma.facultyProfile.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { name: "asc" },
      select: {
        id: true,
        slug: true,
        name: true,
        designation: true,
        department: true,
        photo_url: true,
        email: true,
      },
    }),
  ]);
  res.json({
    faculty,
    pagination: { page, limit, total, pages: Math.ceil(total / limit) },
  });
}
export async function getFaculty(req: Request, res: Response) {
  const faculty = await prisma.facultyProfile.findUnique({
    where: { slug: String(req.params.slug) },
    include,
  });
  if (!faculty || (!faculty.is_published && req.user?.role !== "admin"))
    return void res.status(404).json({ error: "Faculty profile not found." });
  res.json({ faculty });
}
async function canEdit(req: Request, id: number) {
  const p = await prisma.facultyProfile.findUnique({
    where: { id },
    select: { email: true },
  });
  if (!p) return { error: "Faculty profile not found.", status: 404 } as const;
  if (
    req.user?.role !== "admin" &&
    req.user?.email.toLowerCase() !== p.email.toLowerCase()
  )
    return {
      error: "You may only edit your own faculty profile.",
      status: 403,
    } as const;
  return null;
}
export async function updateFaculty(req: Request, res: Response) {
  const id = Number(req.params.id),
    denied = await canEdit(req, id);
  if (denied)
    return void res.status(denied.status).json({ error: denied.error });
  const allowed = [
    "name",
    "designation",
    "department",
    "bio",
    "education",
    "expertise",
    "phone",
    "linkedin_url",
    "google_scholar",
    "orcid",
    "scopus_url",
    "resume_url",
    "photo_url",
    "is_published",
  ];
  const data: Record<string, unknown> = {};
  for (const key of allowed)
    if (req.body[key] !== undefined) data[key] = req.body[key];
  const before = await prisma.facultyProfile.findUnique({ where: { id }, include });
  const faculty = await prisma.facultyProfile.update({
      where: { id },
      data,
      include,
    });
  await createAuditLog({ req, action: "UPDATE", resource: "faculty_profile", resourceId: id, oldValue: before, newValue: faculty });
  res.json({ faculty });
}

export async function createFaculty(req: Request, res: Response) {
  const { email, name, slug, ...rest } = req.body || {};
  if (typeof email !== "string" || typeof name !== "string" || !email.trim() || !name.trim()) return void res.status(400).json({ error: "Name and email are required." });
  const cleanEmail = email.trim().toLowerCase();
  if (!isAllowedInstituteEmail(cleanEmail)) return void res.status(400).json({ error: "Faculty email must use @iiitp.ac.in or an institute subdomain." });
  const generatedSlug = String(slug || name).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  try {
    const linkedUser = await prisma.user.findUnique({ where: { email: cleanEmail }, select: { id: true } });
    const faculty = await prisma.facultyProfile.create({ data: { email: cleanEmail, name: name.trim(), slug: generatedSlug, user_id: linkedUser?.id, ...rest }, include });
    await createAuditLog({ req, action: "CREATE", resource: "faculty_profile", resourceId: faculty.id, newValue: faculty });
    res.status(201).json({ faculty });
  } catch (err: any) { if (err?.code === "P2002") return void res.status(409).json({ error: "A faculty profile with this email or slug already exists." }); throw err; }
}
export async function updateFacultyChild(req: Request, res: Response) {
  const model = models[req.params.resource as keyof typeof models];
  if (!model)
    return void res
      .status(404)
      .json({ error: "Unknown faculty sub-resource." });
  const id = Number(req.params.id),
    denied = await canEdit(req, id);
  if (denied)
    return void res.status(denied.status).json({ error: denied.error });
  const client = (prisma as any)[model],
    data = { ...req.body, faculty_id: id };
  const item = req.params.childId
    ? await client.update({ where: { id: Number(req.params.childId) }, data })
    : await client.create({ data });
  res.status(req.params.childId ? 200 : 201).json({ item });
}
export async function deleteFacultyChild(req: Request, res: Response) {
  const model = models[req.params.resource as keyof typeof models];
  if (!model)
    return void res
      .status(404)
      .json({ error: "Unknown faculty sub-resource." });
  const denied = await canEdit(req, Number(req.params.id));
  if (denied)
    return void res.status(denied.status).json({ error: denied.error });
  await (prisma as any)[model].delete({
    where: { id: Number(req.params.childId) },
  });
  res.status(204).send();
}
