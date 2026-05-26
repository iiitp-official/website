import React from 'react';
import PageHeader from '../components/shared/PageHeader';

const AcademicsPage = () => {
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Academics" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-2">
            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-4 sticky top-24">
              <h3 className="font-bold font-serif text-lg text-primary dark:text-white mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><a href="#btech" className="text-accent dark:text-accent-dark font-medium hover:underline">B.Tech (CSE & ECE)</a></li>
                <li><a href="#mtech" className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-white transition-colors">M.Tech</a></li>
                <li><a href="#phd" className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-white transition-colors">PhD Programs</a></li>
                <li><a href="#curriculum" className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-white transition-colors">Curriculum</a></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-12">
            <section id="btech">
              <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-800">
                B.Tech Programs
              </h2>
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Institute offers 4-year B.Tech programs in Computer Science and Engineering (CSE) and Electronics and Communication Engineering (ECE). Admissions are based on JEE Main scores via JoSAA / CSAB counseling.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-blue-100 dark:border-gray-700 p-4 rounded-lg bg-blue-50/50 dark:bg-gray-800/50">
                    <h4 className="font-bold text-primary dark:text-white">Computer Science & Engg.</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Intake: 225 Students</p>
                  </div>
                  <div className="border border-blue-100 dark:border-gray-700 p-4 rounded-lg bg-blue-50/50 dark:bg-gray-800/50">
                    <h4 className="font-bold text-primary dark:text-white">Electronics & Comm. Engg.</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Intake: 75 Students</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="curriculum">
              <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-800">
                Curriculum Structure (B.Tech CSE - 1st Year)
              </h2>
              <div className="w-full overflow-x-auto bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800/80">
                      <th className="p-4 font-semibold text-sm text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">Course Code</th>
                      <th className="p-4 font-semibold text-sm text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">Course Title</th>
                      <th className="p-4 font-semibold text-sm text-gray-700 dark:text-gray-200 border-b dark:border-gray-700 text-center">L-T-P</th>
                      <th className="p-4 font-semibold text-sm text-gray-700 dark:text-gray-200 border-b dark:border-gray-700 text-center">Credits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700/50">
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400">CS101</td>
                      <td className="p-4 text-sm font-medium text-gray-800 dark:text-gray-200">Introduction to Programming</td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400 text-center">3-0-2</td>
                      <td className="p-4 text-sm font-bold text-primary dark:text-accent-dark text-center">4</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700/50">
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400">MA101</td>
                      <td className="p-4 text-sm font-medium text-gray-800 dark:text-gray-200">Engineering Mathematics I</td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400 text-center">3-1-0</td>
                      <td className="p-4 text-sm font-bold text-primary dark:text-accent-dark text-center">4</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700/50">
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400">PH101</td>
                      <td className="p-4 text-sm font-medium text-gray-800 dark:text-gray-200">Engineering Physics</td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400 text-center">3-0-2</td>
                      <td className="p-4 text-sm font-bold text-primary dark:text-accent-dark text-center">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AcademicsPage;
