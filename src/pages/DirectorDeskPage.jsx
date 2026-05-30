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
                <h3 className="text-lg text-brand-red font-bold mt-1">Director</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 font-semibold mt-1">Indian Institute of Information Technology (IIIT) Pune</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-bold mt-1">Email: <a href="mailto:director@iiitp.ac.in" className="text-[#164e63] dark:text-blue-400 hover:underline">director@iiitp.ac.in</a></p>
              </div>
            </div>
          
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base text-justify">
              <p>
                Indian Institute of Information Technology Pune, established in 2016, is one of the fastest-growing IIITs among 20 newly established IIITs by the MOE, Government of India, and industry partners as a Not-for-profit Public-Private Partnership (N-PPP) Institution. IIIT Pune is committed to imparting high-quality technical education and instilling a long-term vision among students. Our focus lies not just on academic brilliance but also on the knowledge that is pervasive in areas of emerging technologies. Through our learning and research programs, we aim at building applications of Information Technology whose benefits percolate even to the grassroots level.
              </p>
              <p>
                We believe in nurturing graduates as proficient scholars and responsible members of society. Our institute is endowed with state-of-the-art facilities and provides an environment conducive to learning and exploration. Every department in the institute has cutting-edge laboratories. IIIT Pune emphasizes collaboration with leading institutes nationally and internationally through academic exchange programs and fosters industry-academia partnerships, among others.
              </p>
              <p>
                Several Industry-Institute Partnership Programs, Soft-Skill Trainings, competitions, internships, and student projects are organized to enhance communication skills, commitment, and ethics for comprehensive individual growth. The institute promotes innovation and entrepreneurship by encouraging and supporting creative ideas. Transformation requires a plan and a support system. At Indian Institute of Information Technology Pune, students are expected to work hard and develop the right attitude in their chosen fields. As you embark on this exciting and fruitful journey of your life, walk boldly and diligently.
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
