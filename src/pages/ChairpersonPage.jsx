import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import { User } from 'lucide-react';

const ChairpersonPage = () => {
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Chairperson" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="bg-primary dark:bg-primary-dark px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Chairperson</h2>
          </div>
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-gray-200 dark:border-gray-800 pb-8">
            <div className="w-48 h-48 shrink-0 bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-md flex items-center justify-center text-gray-400 dark:text-gray-600">
              {/* Empty placeholder image as requested */}
              <User className="w-24 h-24" />
            </div>
            <div className="text-center md:text-left flex-1 flex flex-col justify-center h-48">
              <h2 className="text-3xl font-bold font-serif text-primary dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 inline-block">
                Shri Vishad Mafatlal
              </h2>
              <div className="space-y-3">
                <p className="text-lg text-brand-red font-medium">Additional Charge, Chairperson (IIIT Pune)</p>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Indian Institute of Information Technology (IIIT) Pune</p>
                <p className="text-primary dark:text-gray-300 font-medium">
                  <span className="text-gray-600 dark:text-gray-400">Email:</span> chairman@iiitp.ac.in
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-gray-800 dark:text-gray-200 font-medium">
            <p>Stay tuned for the official profile of our Chairman.</p>
          </div>
          
          <div className="mt-16 text-right text-sm text-gray-500 dark:text-gray-400">
            Last Updated: 25-04-2026
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairpersonPage;
