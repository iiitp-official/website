import React from "react";
import PageHeader from "../components/shared/PageHeader";

const AcademicCalendarPage = () => {
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Academic Calendar" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold font-serif text-primary dark:text-white mb-6 border-b pb-4 border-gray-200 dark:border-gray-800">
                About the Academic Calendar
              </h2>
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  IIIT Pune follows a semester-based academic calendar with two semesters per year, one odd and one
                  even.
                </p>
              </div>
            </section>

            {/* Current Year Calendar */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-6 border-b pb-3 border-gray-200 dark:border-gray-800">
                Academic Year 2025-2026
              </h2>

              {/* Odd Semester */}
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 mb-8">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-4">
                  Odd Semester - Academic Calendars
                </h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-accent dark:text-accent-dark mb-3">
                    B.Tech, M.Tech, and Ph.D (Odd Semester AY 2025-26)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Download the academic calendar for B.Tech 1st, 3rd, 5th, 7th Sem, M.Tech 3rd, and Ph.D (Odd
                    Semester):
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-accent-dark hover:bg-accent-dark/90 dark:bg-accent-dark dark:hover:bg-accent-dark/80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Download Odd Semester Calendar
                  </a>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Last Updated: 25-04-2026</p>
              </div>

              {/* Even Semester */}
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-4">
                  Even Semester - Academic Calendars
                </h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-accent dark:text-accent-dark mb-3">
                    B.Tech, M.Tech, and Ph.D (Even Semester AY 2025-26)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Download the academic calendar for B.Tech 2nd, 4th, 6th, 8th Sem, M.Tech 2nd, 4th, and Ph.D (Even
                    Semester):
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-accent-dark hover:bg-accent-dark/90 dark:bg-accent-dark dark:hover:bg-accent-dark/80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Download Even Semester Calendar
                  </a>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Last Updated: 25-04-2026</p>
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
