import React from 'react';
import PageHeader from '../components/shared/PageHeader';

const DirectorDeskPage = () => {
  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="Director's Desk" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
              <div className="w-48 h-48 shrink-0 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-md">
                <img src="/director.jpeg" alt="Director Prof. Vineet Kansal" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left pt-2">
                <h2 className="text-2xl font-bold font-serif text-[#164e63] dark:text-blue-400 mb-2 border-b-2 border-brand-red pb-2 inline-block">Prof. Vineet Kansal</h2>
                <h3 className="text-lg text-brand-red font-bold mt-1">Director</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 font-semibold mt-1">Indian Institute of Information Technology (IIIT) Pune</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-bold mt-1">Email: <a href="mailto:director@iiitp.ac.in" className="text-[#164e63] dark:text-blue-400 hover:underline">director@iiitp.ac.in</a></p>
              </div>
            </div>
          
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base text-justify">
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Prof. Vineet Kansal</span> has assumed charge as the Director of the <span className="font-semibold text-gray-900 dark:text-white">Indian Institute of Information Technology (IIIT) Pune</span> with effect from the forenoon of <span className="font-semibold text-gray-900 dark:text-white">April 4, 2026</span>, following his appointment by the Hon'ble President of India in his capacity as the Visitor of the Institute. The appointment order was issued by the Ministry of Education, Government of India.
              </p>
              <p>
                As Director, Prof. Kansal is committed to strengthening the Institute's academic and research ecosystem, fostering innovation, and guiding IIIT Pune in alignment with its vision and mission, while addressing emerging national priorities in higher education.
              </p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                All the very best!
              </p>
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800/50">
                <p className="font-bold text-gray-900 dark:text-white">Prof. Vineet Kansal</p>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Director</p>
                <p className="text-gray-600 dark:text-gray-400">IIIT Pune</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorDeskPage;
