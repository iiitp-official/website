import React from 'react';
import PageHeader from '../components/shared/PageHeader';

const FeesPage = () => {
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Fees Structure" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 mb-8">
          <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            B.Tech Program (Per Semester)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="p-4 font-semibold text-sm border dark:border-gray-700">Particulars</th>
                  <th className="p-4 font-semibold text-sm border dark:border-gray-700 text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-sm border dark:border-gray-700 text-gray-700 dark:text-gray-300">Tuition Fee</td>
                  <td className="p-4 text-sm border dark:border-gray-700 text-gray-700 dark:text-gray-300 text-right">1,10,000</td>
                </tr>
                <tr>
                  <td className="p-4 text-sm border dark:border-gray-700 text-gray-700 dark:text-gray-300">Hostel Fee</td>
                  <td className="p-4 text-sm border dark:border-gray-700 text-gray-700 dark:text-gray-300 text-right">25,000</td>
                </tr>
                <tr>
                  <td className="p-4 text-sm border dark:border-gray-700 text-gray-700 dark:text-gray-300">Mess Advance</td>
                  <td className="p-4 text-sm border dark:border-gray-700 text-gray-700 dark:text-gray-300 text-right">20,000</td>
                </tr>
                <tr>
                  <td className="p-4 text-sm border dark:border-gray-700 text-gray-700 dark:text-gray-300">Other Fees (Library, IT, etc.)</td>
                  <td className="p-4 text-sm border dark:border-gray-700 text-gray-700 dark:text-gray-300 text-right">15,000</td>
                </tr>
                <tr className="bg-blue-50 dark:bg-gray-800 font-bold text-primary dark:text-white">
                  <td className="p-4 text-sm border dark:border-gray-700">Total</td>
                  <td className="p-4 text-sm border dark:border-gray-700 text-right">1,70,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-red-500 mt-4 font-medium">* One-time caution money of ₹10,000 is applicable at the time of admission (refundable).</p>
        </div>
      </div>
    </div>
  );
};

export default FeesPage;
