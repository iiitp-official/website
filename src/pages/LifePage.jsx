import React from 'react';
import PageHeader from '../components/shared/PageHeader';

const LifePage = () => {
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Life @ IIIT Pune" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Life at IIIT Pune is a perfect blend of rigorous academics, cutting-edge research, and vibrant extracurricular activities. Our campus provides an ecosystem that nurtures creativity, leadership, and holistic development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
              [Hostel Image]
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold font-serif text-primary dark:text-white mb-2">Hostel & Mess</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Comfortable accommodation with high-speed Wi-Fi, common rooms, and a mess serving nutritious and hygienic food.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
              [Sports Image]
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold font-serif text-primary dark:text-white mb-2">Sports Facilities</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Well-equipped gymnasium, courts for basketball, volleyball, badminton, and a field for cricket and football.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
              [Cultural Image]
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold font-serif text-primary dark:text-white mb-2">Clubs & Societies</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Various active student clubs including Coding Club, Robotics Club, Cultural Society, and Literary Club.</p>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-800">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
              <div key={img} className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:scale-[1.02] transition-transform cursor-pointer">
                Photo {img}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default LifePage;
