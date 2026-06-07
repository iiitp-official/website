import React from "react";
import PageHeader from "../components/shared/PageHeader";

const AcademicCalendarPage = () => {
  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="Academic Calendar" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Year Calendar */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-6 border-b pb-3 border-gray-200 dark:border-gray-800">
                Academic Year 2025-2026
              </h2>

              {/* Odd Semester */}
              <div className="bg-white dark:bg-surface-dark p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 mb-8 transition-shadow hover:shadow-md">
                
                {/* Visual Label / Subheading above the main title */}
                <span className="block text-xs font-bold uppercase tracking-widest text-accent dark:text-accent-dark mb-2">
                  B.Tech, M.Tech, and Ph.D (Odd Semester AY 2025-26)
                </span>
                
                {/* Main Card Title */}
                <h3 className="text-2xl font-extrabold text-primary dark:text-white font-serif tracking-tight mb-4">
                  Odd Semester - Academic Calendar
                </h3>
                
                {/* Description Paragraph (Justified & small for contrast) */}
                <p className="text-gray-600 dark:text-gray-400 text-sm text-justify leading-relaxed mb-6 max-w-2xl">
                  Download the academic calendar for B.Tech 1st, 3rd, 5th, 7th Sem, M.Tech 3rd, and Ph.D (Odd Semester):
                </p>
                
                {/* Action Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-sm font-semibold py-2.5 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow active:scale-95"
                  >
                    Download Odd Semester Calendar
                  </a>
                  
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                    Last Updated: 25-04-2026
                  </span>
                </div>
              </div>

              {/* Even Semester */}
              <div className="bg-white dark:bg-surface-dark p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-shadow hover:shadow-md">
                
                {/* Visual Label / Subheading above the main title */}
                <span className="block text-xs font-bold uppercase tracking-widest text-accent dark:text-accent-dark mb-2">
                  B.Tech, M.Tech, and Ph.D (Even Semester AY 2025-26)
                </span>
                
                {/* Main Card Title */}
                <h3 className="text-2xl font-extrabold text-primary dark:text-white font-serif tracking-tight mb-4">
                  Even Semester - Academic Calendar
                </h3>
                
                {/* Description Paragraph (Justified & small for contrast) */}
                <p className="text-gray-600 dark:text-gray-400 text-sm text-justify leading-relaxed mb-6 max-w-2xl">
                  Download the academic calendar for B.Tech 2nd, 4th, 6th, 8th Sem, M.Tech 2nd, 4th, and Ph.D (Even Semester):
                </p>
                
                {/* Action Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-sm font-semibold py-2.5 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow active:scale-95"
                  >
                    Download Even Semester Calendar
                  </a>
                  
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                    Last Updated: 25-04-2026
                  </span>
                </div>
              </div>
            </section>

            {/* Important Notes */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-4 border-b pb-3 border-gray-200 dark:border-gray-800">
                Important Notes
              </h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-accent-dark p-6 rounded-r-lg">
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-dark font-bold">•</span>
                    <span>Dates are subject to change at the discretion of the Institute</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-dark font-bold">•</span>
                    <span>Public holidays may lead to adjustment in the schedule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-dark font-bold">•</span>
                    <span>Any changes to the calendar will be communicated well in advance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-dark font-bold">•</span>
                    <span>Students must maintain 75% attendance to be eligible for examinations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-dark font-bold">•</span>
                    <span>Late registrations will incur additional fees</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 sticky top-24">
              <h3 className="font-bold font-serif text-lg text-primary dark:text-white mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/academics" className="text-accent dark:text-accent-dark font-medium hover:underline">
                    ← Back to Academics
                  </a>
                </li>
                <li>
                  <a
                    href="/academics/btech"
                    className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-white transition-colors"
                  >
                    B.Tech Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/academics/mtech"
                    className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-white transition-colors"
                  >
                    M.Tech Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/academics/phd"
                    className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-white transition-colors"
                  >
                    PhD Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/academics/ordinance"
                    className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-white transition-colors"
                  >
                    Ordinance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendarPage;
