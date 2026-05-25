import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import { Briefcase } from 'lucide-react';

const CareersPage = () => {
  const jobs = [
    { id: 1, title: 'Assistant Professor (CSE)', type: 'Faculty', deadline: '2025-06-15', status: 'Open' },
    { id: 2, title: 'Assistant Professor (ECE)', type: 'Faculty', deadline: '2025-06-15', status: 'Open' },
    { id: 3, title: 'Registrar', type: 'Non-Teaching', deadline: '2025-06-01', status: 'Open' },
    { id: 4, title: 'System Administrator', type: 'Non-Teaching', deadline: '2025-05-20', status: 'Closed' },
  ];

  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Careers @ IIIT Pune" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary text-white dark:bg-gray-800">
                <th className="p-4 font-semibold text-sm w-16 text-center">#</th>
                <th className="p-4 font-semibold text-sm">Position / Title</th>
                <th className="p-4 font-semibold text-sm">Category</th>
                <th className="p-4 font-semibold text-sm w-32">Deadline</th>
                <th className="p-4 font-semibold text-sm w-24 text-center">Status</th>
                <th className="p-4 font-semibold text-sm w-24 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-sm text-gray-500 text-center">{job.id}</td>
                  <td className="p-4 text-sm font-medium text-gray-900 dark:text-gray-200">{job.title}</td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{job.type}</td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{job.deadline}</td>
                  <td className="p-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${job.status === 'Open' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button 
                      disabled={job.status === 'Closed'}
                      className="text-accent hover:text-blue-800 dark:text-accent-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Briefcase size={18} className="mx-auto" />
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

export default CareersPage;
