/**
 * scripts/bootstrap-admin.ts
 * One-time bootstrap: ensures 112415074@cse.iiitp.ac.in exists as active admin.
 * Run: npx tsx scripts/bootstrap-admin.ts
 */
import prisma from '../src/config/prisma';

const ADMIN_EMAIL = process.env.SUPER_ADMIN_EMAILS?.split(',')[0]?.trim() || '112415074@cse.iiitp.ac.in';

async function main() {
  const user = await prisma.user.upsert({
    where: { email: ADMIN_EMAIL },
    update: { role: 'admin', is_active: true },
    create: {
      email: ADMIN_EMAIL,
      name: 'Main Admin',
      role: 'admin',
      is_active: true,
      token_version: 0,
    },
  });
  console.log(`Bootstrapped admin: ${user.email} (id=${user.id}, role=${user.role})`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
