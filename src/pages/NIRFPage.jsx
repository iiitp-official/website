import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import { Download } from 'lucide-react';

const NIRFPage = () => {
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="NIRF Rankings" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 mb-8">
          <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            National Institutional Ranking Framework (NIRF) 2024
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            The National Institutional Ranking Framework (NIRF) outlines a methodology to rank institutions across the country. IIIT Pune has been actively participating in the rankings to maintain transparency and showcase its academic and research excellence.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="p-4 font-semibold text-sm border-b dark:border-gray-700">Document / Category</th>
                  <th className="p-4 font-semibold text-sm border-b dark:border-gray-700 text-center w-32">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-sm border-b dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium">NIRF 2024 Engineering Data (Full Report)</td>
                  <td className="p-4 text-sm border-b dark:border-gray-700 text-center">
                    <button className="text-accent hover:text-blue-800 dark:text-accent-dark transition-colors inline-flex p-2 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
                      <Download size={16} />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-sm border-b dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium">NIRF 2023 Engineering Data</td>
                  <td className="p-4 text-sm border-b dark:border-gray-700 text-center">
                    <button className="text-accent hover:text-blue-800 dark:text-accent-dark transition-colors inline-flex p-2 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
                      <Download size={16} />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-sm border-b dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium">Placement Data for NIRF</td>
                  <td className="p-4 text-sm border-b dark:border-gray-700 text-center">
                    <button className="text-accent hover:text-blue-800 dark:text-accent-dark transition-colors inline-flex p-2 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
                      <Download size={16} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NIRFPage;
