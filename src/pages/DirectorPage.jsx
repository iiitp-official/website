import React from 'react';
import PageHeader from '../components/shared/PageHeader';

const DirectorPage = () => {
  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="Director" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-48 shrink-0 mx-auto md:mx-0">
                <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
                  <img src="/director.jpeg" alt="Prof. Vineet Kansal" className="w-full h-auto object-cover block" />
                </div>
              </div>
              <div className="text-left flex-1">
                <h2 className="text-3xl font-bold font-serif text-primary dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Prof. Vineet Kansal
                </h2>
                
                <div className="space-y-2 mb-6 text-sm border-l-2 border-primary/30 dark:border-primary-dark/30 pl-4 py-1">
                  <p className="text-brand-red font-semibold text-base">Director</p>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Indian Institute of Information Technology (IIIT) Pune</p>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    <a href="mailto:director@iiitp.ac.in" className="text-primary dark:text-blue-400 font-medium hover:underline">
                      director@iiitp.ac.in
                    </a>
                  </p>
                </div>

                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify mt-6">
                  <p>
                    <span className="font-semibold text-gray-900 dark:text-white">Prof. Vineet Kansal</span> has assumed charge as the Director of the <span className="font-semibold text-gray-900 dark:text-white">Indian Institute of Information Technology (IIIT) Pune</span> with effect from the forenoon of <span className="font-semibold text-gray-900 dark:text-white">April 4, 2026</span>, following his appointment by the Hon'ble President of India in his capacity as the Visitor of the Institute. The appointment order was issued by the Ministry of Education, Government of India.
                  </p>
                  <p>
                    As Director, Prof. Kansal is committed to strengthening the Institute's academic and research ecosystem, fostering innovation, and guiding IIIT Pune in alignment with its vision and mission, while addressing emerging national priorities in higher education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorPage;
