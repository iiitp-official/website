import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import lifePageData from '../../data/lifePageData.json';

const { EDITIONS } = lifePageData;

const MagazineTab = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold font-serif text-gray-800 dark:text-white mb-2">College Magazine</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl text-justify">
          The official college magazine is a testament to the literary, artistic, and technical spirit of IIIT Pune. 
          It encapsulates the year's events, achievements, student poems, articles, and club spotlights. 
          Browse through the digital editions below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {EDITIONS.map((ed, idx) => (
          <div key={idx} className="group flex flex-col bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className="aspect-[3/4] w-full bg-gray-50 dark:bg-gray-850 relative overflow-hidden border-b border-gray-100 dark:border-gray-800">
              <img 
                src={ed.cover} 
                alt={`${ed.title} Cover`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-60" />
            </div>
            
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h4 className="text-lg font-bold font-serif text-gray-800 dark:text-white mb-1">{ed.title}</h4>
                <p className="text-xs text-primary font-semibold mb-3">{ed.year}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-justify">
                  {ed.desc}
                </p>
              </div>
              <a 
                href={ed.link} 
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-primary hover:text-white text-gray-700 dark:text-gray-300 text-xs font-bold transition-colors border border-gray-200 dark:border-gray-700 hover:border-primary"
              >
                <BookOpen size={14} />
                <span>Read Edition</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagazineTab;
