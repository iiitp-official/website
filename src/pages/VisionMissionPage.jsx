import React from 'react';
import PageHeader from '../components/shared/PageHeader';

const VisionMissionPage = () => {
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Vision & Mission" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          <section className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
            <h2 className="text-3xl font-bold font-serif text-primary dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-accent dark:text-accent-dark">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
              Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              To be a leading global Information Technology institute that imparts an innovative education to produce proficient and ethical professionals and leaders, disseminating novel knowledge in Information Technology and allied disciplines to serve as a valuable resource for society and the world.
            </p>
          </section>

          <section className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
            <h2 className="text-3xl font-bold font-serif text-primary dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Mission
            </h2>
            <ol className="list-decimal pl-5 space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed marker:font-bold marker:text-primary dark:marker:text-blue-400">
              <li className="pl-2">
                To provide academic excellence in Engineering and Technology by imparting quality as well as value-based education, and foster a collaborative environment open to the free exchange of ideas, where research capabilities could be leveraged to address the challenges of the present scenario.
              </li>
              <li className="pl-2">
                To develop competent and proficient youth imbued with the spirit of innovation and entrepreneurship with the social and environmental orientation further meeting the knowledge requisites and providing universal leadership in Information Technology and allied fields.
              </li>
              <li className="pl-2">
                To promote the significance of ethics and integrity in technical education further fostering learning with respect for individual human rights and an unyielding commitment to the principles of equal opportunity, equity, and justice.
              </li>
              <li className="pl-2">
                To endorse application and research in Indian languages for technical education, further edifying Indian traditional knowledge in technical education.
              </li>
            </ol>
          </section>

        </div>
      </div>
    </div>
  );
};

export default VisionMissionPage;
