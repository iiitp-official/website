import React from 'react';
import PageHeader from '../components/shared/PageHeader';

const students = [
  {
    id: 1,
    name: 'Sanskar Hasija',
    degree: 'B.Tech in Computer Science & Engineering',
    graduationYear: '2023',
    currentAffiliation: 'Cloudbeds',
    role: 'Data Scientist',
    abroadDegree: 'MS in Data Science',
    university: 'University of Glasgow',
    country: 'United Kingdom',
    countryCode: '🇬🇧',
    avatar: 'S1',
  },
  {
    id: 2,
    name: 'Akash Peddaputha',
    degree: 'B.Tech in Computer Science & Engineering',
    graduationYear: '2023',
    currentAffiliation: 'Google',
    role: 'Software Engineer',
    abroadDegree: 'MS in Computer Science',
    university: 'University of London',
    country: 'United Kingdom',
    countryCode: '🇬🇧',
    avatar: 'S2',
  },
  {
    id: 3,
    name: 'Saksham Mahajan',
    degree: 'B.Tech in Computer Science & Engineering',
    graduationYear: '2020',
    currentAffiliation: 'Microsoft',
    role: 'Product Engineer',
    abroadDegree: 'MS in Computer Science',
    university: 'University of North Carolina at Charlotte',
    country: 'United States',
    countryCode: '🇺🇸',
    avatar: 'S3',
  },
  {
    id: 4,
    name: 'Bharadwaj Dhornala',
    degree: 'B.Tech in Computer Science & Engineering',
    graduationYear: '2021',
    currentAffiliation: 'University of Massachusetts Amherst',
    role: 'Graduate Student',
    abroadDegree: 'MS in Computer Science',
    university: 'University of Massachusetts Amherst',
    country: 'United States',
    countryCode: '🇺🇸',
    avatar: 'S4',
  },
];

const AlumniHallOfFamePage = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
      <PageHeader
        title="Hall of Fame"
        subtitle="Celebrating outstanding alumni who continue to lead, innovate, and inspire."
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 px-5 py-4 text-amber-900 dark:border-amber-700/60 dark:from-amber-900/20 dark:to-yellow-900/20 dark:text-amber-100">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">Featured Alumni</p>
            <h2 className="mt-1 text-2xl font-bold">4 Student Profiles</h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {students.map((student) => (
            <article
              key={student.id}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)] dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-blue-700 p-5 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),transparent_45%)]" />
                <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/25 bg-white/10 text-3xl font-bold tracking-wider shadow-2xl">
                    {student.avatar}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-50 backdrop-blur-sm">
                  Alumni Photograph
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{student.name}</h3>
                <p className="mt-2 text-base font-medium text-slate-600 dark:text-slate-300">
                  {student.degree} | Class of {student.graduationYear}
                </p>

                <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-base">🏢</span>
                    <span className="font-medium">{student.currentAffiliation}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-base">💼</span>
                    <span>{student.role}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-base">🎓</span>
                    <span>{student.abroadDegree}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-base">🏫</span>
                    <span>{student.university}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-base">{student.countryCode}</span>
                    <span>{student.country}</span>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  {/* <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                  >
                    View Profile
                    <span aria-hidden="true">→</span>
                  </button> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniHallOfFamePage;
