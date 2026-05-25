import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import { Mail } from 'lucide-react';

const PeoplePage = () => {
  const facultyList = [
    { name: 'Dr. A. K. Sharma', designation: 'Professor & HOD, CSE', email: 'hod.cse@iiitp.ac.in', area: 'Artificial Intelligence' },
    { name: 'Dr. S. K. Verma', designation: 'Associate Professor, ECE', email: 'skverma@iiitp.ac.in', area: 'VLSI Design' },
    { name: 'Dr. Priya Desai', designation: 'Assistant Professor, CSE', email: 'p.desai@iiitp.ac.in', area: 'Data Science' },
    { name: 'Dr. R. N. Patil', designation: 'Assistant Professor, Mathematics', email: 'rnpatil@iiitp.ac.in', area: 'Cryptography' },
    { name: 'Dr. N. K. Singh', designation: 'Assistant Professor, CSE', email: 'nksingh@iiitp.ac.in', area: 'Cloud Computing' },
    { name: 'Dr. Anita Roy', designation: 'Assistant Professor, ECE', email: 'aroy@iiitp.ac.in', area: 'Wireless Comm.' },
  ];

  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="People @ IIIT Pune" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <section>
          <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-8 border-b pb-2 border-gray-200 dark:border-gray-800">
            Faculty Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyList.map((faculty, idx) => (
              <div key={idx} className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 relative">
                  <div className="absolute -bottom-10 left-6">
                    <div className="w-24 h-24 bg-gray-200 dark:bg-gray-600 rounded-full border-4 border-white dark:border-surface-dark flex items-center justify-center overflow-hidden">
                      <span className="text-xs text-gray-500 font-medium">Photo</span>
                    </div>
                  </div>
                </div>
                <div className="pt-14 pb-6 px-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">{faculty.name}</h3>
                  <p className="text-sm font-medium text-accent dark:text-accent-dark mb-2">{faculty.designation}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Area: {faculty.area}</p>
                  
                  <a href={`mailto:${faculty.email}`} className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
                    <Mail size={16} className="mr-2" /> {faculty.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default PeoplePage;
