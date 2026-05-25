import React, { useState } from 'react';
import { ExternalLink, Download } from 'lucide-react';

const TwitterIcon = ({ size, className }) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
import { motion, AnimatePresence } from 'framer-motion';

const ImportantLinks = () => {
  const [activeTab, setActiveTab] = useState('links');

  return (
    <section className="py-16 bg-bg dark:bg-bg-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col lg:flex-row min-h-[450px]">
          
          {/* Sidebar / Tabs */}
          <div className="lg:w-1/4 bg-primary dark:bg-gray-900 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar border-b lg:border-b-0 border-gray-200 dark:border-gray-800">
            <button 
              onClick={() => setActiveTab('links')}
              className={`flex-shrink-0 text-left px-6 py-5 font-bold font-serif border-b-4 lg:border-b-0 lg:border-l-4 transition-colors whitespace-nowrap text-lg ${activeTab === 'links' ? 'text-white border-accent lg:bg-blue-800/50 dark:lg:bg-gray-800' : 'text-blue-300 border-transparent hover:text-white hover:bg-blue-800/20 dark:hover:bg-gray-800/50'}`}
            >
              Important Links
            </button>
            <button 
              onClick={() => setActiveTab('downloads')}
              className={`flex-shrink-0 text-left px-6 py-5 font-bold font-serif border-b-4 lg:border-b-0 lg:border-l-4 transition-colors whitespace-nowrap text-lg ${activeTab === 'downloads' ? 'text-white border-accent lg:bg-blue-800/50 dark:lg:bg-gray-800' : 'text-blue-300 border-transparent hover:text-white hover:bg-blue-800/20 dark:hover:bg-gray-800/50'}`}
            >
              Downloads
            </button>
            <button 
              onClick={() => setActiveTab('twitter')}
              className={`flex-shrink-0 text-left px-6 py-5 font-bold font-serif border-b-4 lg:border-b-0 lg:border-l-4 transition-colors whitespace-nowrap text-lg ${activeTab === 'twitter' ? 'text-white border-accent lg:bg-blue-800/50 dark:lg:bg-gray-800' : 'text-blue-300 border-transparent hover:text-white hover:bg-blue-800/20 dark:hover:bg-gray-800/50'}`}
            >
              Twitter / Updates
            </button>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4 p-6 md:p-10">
            <AnimatePresence mode="wait">
              {activeTab === 'links' && (
                <motion.div key="links" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-2xl font-bold font-serif text-primary dark:text-white mb-8 flex items-center">
                    <ExternalLink className="mr-3 text-accent dark:text-accent-dark" /> Institutional Links
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {[
                      { name: 'Ministry of Education', url: '#' },
                      { name: 'National Informatics Centre (NIC)', url: '#' },
                      { name: 'National Testing Agency (NTA)', url: '#' },
                      { name: 'JoSAA / CSAB', url: '#' },
                      { name: 'AICTE', url: '#' },
                      { name: 'National Scholarship Portal', url: '#' },
                      { name: 'Swayam Portal', url: '#' },
                      { name: 'National Digital Library', url: '#' },
                    ].map((link, idx) => (
                      <a key={idx} href={link.url} className="flex items-center text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent-dark group font-medium border-b border-gray-100 dark:border-gray-800/50 pb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 mr-3 group-hover:bg-accent dark:group-hover:bg-accent-dark transition-colors"></span>
                        {link.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'downloads' && (
                <motion.div key="downloads" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-2xl font-bold font-serif text-primary dark:text-white mb-8 flex items-center">
                    <Download className="mr-3 text-accent dark:text-accent-dark" /> Forms & Documents
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Academic Calendar 2024-25',
                      'Leave Application Form for Students',
                      'No Dues Certificate Format',
                      'Medical Certificate Format',
                      'Anti-Ragging Affidavit',
                    ].map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all group">
                        <span className="text-base font-medium text-gray-700 dark:text-gray-300 flex items-center">
                          <span className="w-10 h-10 rounded bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mr-4 font-bold text-xs uppercase">PDF</span>
                          {doc}
                        </span>
                        <button className="text-gray-400 hover:text-accent dark:text-gray-500 dark:hover:text-accent-dark p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm group-hover:bg-blue-50 dark:group-hover:bg-gray-700 transition-colors">
                          <Download size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'twitter' && (
                <motion.div key="twitter" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold font-serif text-primary dark:text-white flex items-center">
                      <TwitterIcon className="mr-3 text-[#1DA1F2]" /> Recent Updates
                    </h3>
                    <a href="#" className="text-blue-500 flex items-center hover:underline text-sm font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full">
                      Follow @IIITPune
                    </a>
                  </div>
                  <div className="space-y-5">
                    {[1, 2, 3].map((tweet) => (
                      <div key={tweet} className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-white dark:bg-surface-dark shadow-sm">
                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-primary dark:text-blue-300 font-bold mr-4 shrink-0 shadow-inner">
                            IIIT
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <span className="font-bold text-base text-gray-900 dark:text-white mr-2">IIIT Pune</span>
                              <span className="text-sm text-gray-500">@IIITPune · {tweet}h</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              Exciting times ahead! We are organizing a national level symposium on Artificial Intelligence next week. Stay tuned for registration details. #IIITP #TechEvent
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;
