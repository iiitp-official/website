/**
 * scripts/backfill-archives.ts
 * Non-destructive backfill: inserts careers/etenders rows from JSON that are
 * missing in the DB (matched by exact title). Never deletes anything, so CMS
 * content created via the dashboard is preserved.
 *
 * JSON uses `live`/`archive`; DB uses career_type/tender_type `live`/`past`.
 * Run: npx tsx scripts/backfill-archives.ts
 */
import path from 'path';
import fs from 'fs';
import prisma from '../src/config/prisma';

function parseDateDMY(s?: string): Date | null {
  if (!s) return null;
  const parts = s.split(/[-./]/);
  if (parts.length === 3) {
    const day = +parts[0], month = +parts[1] - 1, year = +parts[2];
    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) return new Date(Date.UTC(year, month, day));
  }
  const p = new Date(s);
  return isNaN(p.getTime()) ? null : p;
}

async function backfillCareers() {
  const file = path.resolve(process.cwd(), '../src/data/careers.json');
  const raw = JSON.parse(fs.readFileSync(file, 'utf-8'));
  const groups: { items: any[]; type: 'live' | 'past' }[] = [
    { items: raw.live || [], type: 'live' },
    { items: raw.past || raw.archive || [], type: 'past' },
  ];
  let inserted = 0, skipped = 0, dateFilled = 0;
  for (const { items, type } of groups) {
    for (const item of items) {
      if (!item.title) continue;
      const title = item.title.trim();
      const lastDate = parseDateDMY(item.lastDate);
      const postDate = parseDateDMY(item.date);
      const same = (d: any) => (d ? new Date(d).toISOString().slice(0, 10) : null);
      // Match pool: same title + type. Disambiguate re-postings by dates;
      // claim a row with null post_date when the JSON item provides one.
      const pool = await prisma.career.findMany({ where: { title, career_type: type } });
      const poolByLast = pool.filter((c) => same(c.last_date) === same(lastDate));
      let exists = poolByLast.find((c) => same(c.post_date) === same(postDate));
      if (!exists) exists = poolByLast.find((c) => !c.post_date && postDate);
      // Same title+dates but different button sets = distinct re-posting (e.g. SMDP)
      if (exists && Array.isArray(item.buttons) && item.buttons.length > 0) {
        const rowBtns = await prisma.careerButton.findMany({
          where: { career_id: exists.id }, select: { label: true },
        });
        const sameBtns =
          rowBtns.map((b) => b.label).sort().join('|') ===
          item.buttons.map((b: any) => b.label || 'Details').sort().join('|');
        if (!sameBtns) exists = undefined;
      }
      if (exists) {
        skipped++;
        // Fill post_date gaps left by the original seed (it never set post_date)
        if (!exists.post_date && postDate) {
          await prisma.career.update({ where: { id: exists.id }, data: { post_date: postDate } });
          dateFilled++;
        }
        continue;
      }
      const career = await prisma.career.create({
        data: {
          title, career_type: type, post_date: postDate, last_date: lastDate,
          status: 'published', draft_title: title,
          draft_last_date: lastDate, has_unpublished_draft: false,
        },
      });
      if (Array.isArray(item.buttons)) {
        let order = 0;
        for (const btn of item.buttons) {
          await prisma.careerButton.create({
            data: {
              career_id: career.id, label: btn.label || 'Details',
              url: (btn.file || btn.link || '#').trim(), display_order: order++,
            },
          });
        }
      }
      inserted++;
    }
  }
  console.log(`careers: inserted=${inserted} skipped(existing)=${skipped} post_dates_filled=${dateFilled}`);
}

async function backfillEtenders() {
  const file = path.resolve(process.cwd(), '../src/data/etenders.json');
  const raw = JSON.parse(fs.readFileSync(file, 'utf-8'));
  const groups: { items: any[]; type: 'live' | 'past' }[] = [
    { items: raw.live || [], type: 'live' },
    { items: raw.past || raw.archive || [], type: 'past' },
  ];
  let inserted = 0, skipped = 0;
  for (const { items, type } of groups) {
    for (const item of items) {
      if (!item.title) continue;
      const title = item.title.trim();
      const tenderNo = item.tenderNumber?.trim() || null;
      const subDate = item.submissionDate?.trim() || null;
      // Match on title + tender_number (+ submission date) — titles repeat across re-issues
      const candidates = await prisma.etender.findMany({ where: { title } });
      const exists = candidates.some(
        (c) => (c.tender_number || null) === tenderNo && (c.submission_date || null) === subDate
      );
      if (exists) { skipped++; continue; }
      await prisma.etender.create({
        data: {
          title, tender_number: item.tenderNumber?.trim() || null,
          tender_type: type, file_url: item.fileUrl?.trim() || null,
          corrigendum_url: item.corrigendumUrl?.trim() || null,
          submission_date: item.submissionDate?.trim() || null,
          status: 'published', draft_title: title,
          draft_file_url: item.fileUrl?.trim() || null,
          draft_corrigendum_url: item.corrigendumUrl?.trim() || null,
          has_unpublished_draft: false,
        },
      });
      inserted++;
    }
  }
  console.log(`etenders: inserted=${inserted} skipped(existing)=${skipped}`);
}

async function main() {
  await backfillCareers();
  await backfillEtenders();
  await prisma.$disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
