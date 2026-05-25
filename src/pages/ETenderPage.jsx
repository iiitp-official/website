import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import { Download } from 'lucide-react';

const ETenderPage = () => {
  const tenders = [
    { id: 'T-2025/01', title: 'Supply and Installation of Desktop Computers for Programming Lab', date: '2025-05-15', deadline: '2025-06-05' },
    { id: 'T-2025/02', title: 'Providing Security Services for IIIT Pune Campus', date: '2025-05-10', deadline: '2025-05-30' },
    { id: 'T-2025/03', title: 'Empanelment of Agencies for Event Management Services', date: '2025-04-20', deadline: '2025-05-15' },
  ];

  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="E-Tender" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary text-white dark:bg-gray-800">
                <th className="p-4 font-semibold text-sm w-32">Tender No.</th>
                <th className="p-4 font-semibold text-sm">Description</th>
                <th className="p-4 font-semibold text-sm w-32">Publish Date</th>
                <th className="p-4 font-semibold text-sm w-32">Closing Date</th>
                <th className="p-4 font-semibold text-sm w-24 text-center">Doc</th>
              </tr>
            </thead>
            <tbody>
              {tenders.map((tender) => (
                <tr key={tender.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-sm font-medium text-gray-900 dark:text-gray-200">{tender.id}</td>
                  <td className="p-4 text-sm text-gray-800 dark:text-gray-300">{tender.title}</td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{tender.date}</td>
                  <td className="p-4 text-sm font-medium text-red-600 dark:text-red-400">{tender.deadline}</td>
                  <td className="p-4 text-center">
                    <button className="text-accent hover:text-blue-800 dark:text-accent-dark transition-colors inline-flex p-2 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
                      <Download size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ETenderPage;
