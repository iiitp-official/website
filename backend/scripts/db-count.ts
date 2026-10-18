import prisma from '../src/config/prisma';

async function main() {
  const [
    notices, noticesPub,
    news, newsPub,
    careers, careersLive, careersPast, careerButtons,
    etenders, etendersLive, etendersPast,
    faculty, pubs, projects, patents, seminars, supervisions,
    scholarships, staff, alumni, mous, press, users, invites,
  ] = await Promise.all([
    prisma.notice.count(), prisma.notice.count({ where: { status: 'published' } }),
    prisma.news.count(), prisma.news.count({ where: { status: 'published' } }),
    prisma.career.count(),
    prisma.career.count({ where: { career_type: 'live' } }),
    prisma.career.count({ where: { career_type: 'past' } }),
    prisma.careerButton.count(),
    prisma.etender.count(),
    prisma.etender.count({ where: { tender_type: 'live' } }),
    prisma.etender.count({ where: { tender_type: 'past' } }),
    prisma.facultyProfile.count(),
    prisma.facultyPublication.count(), prisma.facultyProject.count(),
    prisma.facultyPatent.count(), prisma.facultySeminar.count(),
    prisma.facultySupervision.count(),
    prisma.scholarship.count(), prisma.nonTeachingStaff.count(),
    prisma.alumni.count(), prisma.mou.count(), prisma.pressCoverage.count(),
    prisma.user.count(), prisma.invite.count(),
  ]);
  console.log(JSON.stringify({
    notices, noticesPub, news, newsPub,
    careers, careersLive, careersPast, careerButtons,
    etenders, etendersLive, etendersPast,
    faculty, pubs, projects, patents, seminars, supervisions,
    scholarships, staff, alumni, mous, press, users, invites,
  }, null, 1));
  await prisma.$disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
