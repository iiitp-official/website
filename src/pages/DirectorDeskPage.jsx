import React from 'react';
import PageHeader from '../components/shared/PageHeader';

const DirectorDeskPage = () => {
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Director's Desk" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="bg-primary dark:bg-primary-dark px-6 py-4">
            <h2 className="text-xl font-bold text-white">Director's Desk</h2>
          </div>
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
              <div className="w-48 h-48 shrink-0 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-md">
                <img src="/director.jpeg" alt="Director Prof. Vineet Kansal" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left pt-2">
                <h2 className="text-2xl font-bold font-serif text-[#164e63] dark:text-blue-400 mb-2 border-b-2 border-brand-red pb-2 inline-block">Prof. Vineet Kansal</h2>
                <h3 className="text-lg text-brand-red font-bold mt-2">Director</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 font-semibold mt-4">Indian Institute of Information Technology (IIIT) Pune</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-bold mt-4">Email: <a href="mailto:director@iiitp.ac.in" className="text-[#164e63] dark:text-blue-400 hover:underline">director@iiitp.ac.in</a></p>
              </div>
            </div>
          
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base text-justify">
              <p>
                <strong>Prof. Vineet Kansal</strong> has assumed charge as the Director of the <strong>Indian Institute of Information Technology (IIIT) Pune</strong> with effect from the forenoon of <strong>April 4, 2026</strong>, following his appointment by the Hon'ble President of India in his capacity as the Visitor of the Institute. The appointment order was issued by the Ministry of Education, Government of India.
              </p>
              <p>
                As Director, Prof. Kansal is committed to strengthening the Institute's academic and research ecosystem, fostering innovation, and guiding IIIT Pune in alignment with its vision and mission, while addressing emerging national priorities in higher education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorDeskPage;
