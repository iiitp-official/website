import React, { useState } from 'react';
import PageHeader from '../components/shared/PageHeader';
import alumniData from '../data/alumni.json';
import { motion, AnimatePresence } from 'framer-motion';

const AlumniPage = () => {
  const [activeBatch, setActiveBatch] = useState('all');

  const batches = [
    { id: 'all', name: 'All Batches', tag: 'Complete Directory' },
    { id: 'batch2017_2021', name: 'Batch 2017-2021', tag: 'B.Tech Program' },
    { id: 'batch2016_2020', name: 'Batch 2016-2020', tag: 'B.Tech Program' },
    { id: 'mtech2019_2021', name: 'M.Tech 2019-2021', tag: 'Postgraduate' },
  ];

  const getFilteredHigherEd = (list) => {
    if (activeBatch === 'all') return list;
    const yearRange = activeBatch === 'batch2017_2021' ? '2017-2021' : 
                      activeBatch === 'batch2016_2020' ? '2016-2020' : 
                      '2019-2021';
    return list.filter(alumnus => alumnus.branchYear.includes(yearRange));
  };

  const filteredAbroad = getFilteredHigherEd(alumniData.higherEducation.abroad);
  const filteredIndia = getFilteredHigherEd(alumniData.higherEducation.india);
  const hasHigherEd = filteredAbroad.length > 0 || filteredIndia.length > 0;

  const placementBatchesToShow = activeBatch === 'all' 
    ? ['batch2017_2021', 'batch2016_2020', 'mtech2019_2021'] 
    : [activeBatch];

  const placementTitles = {
    batch2017_2021: "Alumni working in MNCs (Batch 2017-2021)",
    batch2016_2020: "Alumni working in MNCs (Batch 2016-2020)",
    mtech2019_2021: "Alumni working in MNCs (M.Tech Batch 2019-2021)"
  };

  const TableHeader = ({ children }) => (
    <th className="px-6 py-4 text-left text-sm font-bold text-white tracking-wider bg-primary dark:bg-primary/95">
      {children}
    </th>
  );

  const TableCell = ({ children, isFirst }) => (
    <td className={`px-6 py-4 whitespace-nowrap text-sm ${isFirst ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
      {children}
    </td>
  );

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Our Alumni" 
        subtitle="The pride of IIIT Pune making global impact"
        backgroundImage="/campus-image.jpg"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Intro Section */}
        <section className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 mb-10">
          <h2 className="text-2xl font-serif font-bold text-primary dark:text-accent mb-6">
            Alumni Overview
          </h2>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 whitespace-pre-line text-lg">
            {alumniData.intro}
          </div>
        </section>

        {/* Directory & Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Sidebar Selection Directory */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl p-4 shadow-sm lg:sticky lg:top-44 self-start w-full space-y-4">
              <h3 className="text-gray-800 dark:text-white font-bold font-serif px-2 pb-2 border-b border-gray-200 dark:border-gray-800 text-sm">
                Alumni Directory
              </h3>
              <div className="flex flex-row overflow-x-auto gap-2 no-scrollbar lg:flex-col pb-1 lg:pb-0">
                {batches.map((b) => {
                  const isSelected = activeBatch === b.id;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setActiveBatch(b.id)}
                      className={`shrink-0 lg:shrink lg:w-full flex flex-row lg:flex-col items-center lg:items-start gap-2 lg:gap-0 px-4 py-2 lg:px-3.5 lg:py-2.5 rounded-full lg:rounded-xl text-left transition-all duration-200 border ${
                        isSelected
                          ? "bg-primary text-white border-primary shadow-sm"
                          : "text-gray-700 dark:text-gray-300 bg-transparent border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                      }`}
                    >
                      <div className="flex items-center gap-2 w-full">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? "bg-white" : "bg-primary"}`} />
                        <span className="font-bold text-xs lg:text-sm">{b.name}</span>
                      </div>
                      <span className={`hidden lg:block text-[10px] mt-0.5 ${isSelected ? "text-white/80" : "text-gray-400 dark:text-gray-500"}`}>
                        {b.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Main Content area */}
          <div className="lg:col-span-9 space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBatch}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-12"
              >
                {/* Higher Education Section */}
                {hasHigherEd && (
                  <section className="space-y-8">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white border-b-2 border-primary inline-block pb-2">Higher Education</h2>
                    
                    <div className="space-y-12">
                      {/* Abroad */}
                      {filteredAbroad.length > 0 && (
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                            Pursuing Higher Studies Abroad
                          </h3>
                          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-800">
                            <div className="overflow-x-auto">
                              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                  <tr>
                                    <TableHeader>Name of Alumni</TableHeader>
                                    <TableHeader>Branch-Year</TableHeader>
                                    <TableHeader>Name of the University</TableHeader>
                                    <TableHeader>Masters or PhD</TableHeader>
                                  </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-surface-dark divide-y divide-gray-200 dark:divide-gray-800">
                                  {filteredAbroad.map((alumnus, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                      <TableCell isFirst>{alumnus.name}</TableCell>
                                      <TableCell>{alumnus.branchYear}</TableCell>
                                      <TableCell>{alumnus.university}</TableCell>
                                      <TableCell>{alumnus.degree}</TableCell>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* India */}
                      {filteredIndia.length > 0 && (
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                            Pursuing Higher Studies in India
                          </h3>
                          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-800">
                            <div className="overflow-x-auto">
                              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                  <tr>
                                    <TableHeader>Name of Alumni</TableHeader>
                                    <TableHeader>Branch-Year</TableHeader>
                                    <TableHeader>Name of the University</TableHeader>
                                    <TableHeader>Masters or PhD</TableHeader>
                                  </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-surface-dark divide-y divide-gray-200 dark:divide-gray-800">
                                  {filteredIndia.map((alumnus, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                      <TableCell isFirst>{alumnus.name}</TableCell>
                                      <TableCell>{alumnus.branchYear}</TableCell>
                                      <TableCell>{alumnus.university}</TableCell>
                                      <TableCell>{alumnus.degree}</TableCell>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {/* Placements Section */}
                <section className="space-y-8">
                  <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white border-b-2 border-primary inline-block pb-2">Industry Placements</h2>
                  
                  <div className="space-y-12">
                    {placementBatchesToShow.map((batchKey) => {
                      const list = alumniData.placements[batchKey];
                      if (!list || list.length === 0) return null;
                      
                      return (
                        <div key={batchKey}>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                            {placementTitles[batchKey]}
                          </h3>
                          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-800">
                            <div className="overflow-x-auto">
                              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                  <tr>
                                    <TableHeader>Name of Alumni</TableHeader>
                                    <TableHeader>Company</TableHeader>
                                  </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-surface-dark divide-y divide-gray-200 dark:divide-gray-800">
                                  {list.map((alumnus, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                      <TableCell isFirst>{alumnus.name}</TableCell>
                                      <TableCell>{alumnus.company}</TableCell>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <div className="text-right text-sm text-gray-500 dark:text-gray-400 italic">
                  Last Updated: {alumniData.lastUpdated}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AlumniPage;
