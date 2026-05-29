import React, { useState, useEffect } from 'react';
import PageHeader from '../components/shared/PageHeader';
import { Search, Calendar } from 'lucide-react';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    import('../data/news.json')
      .then((data) => setNews(data.default))
      .catch(() => console.log('Error loading news'));
  }, []);

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Latest News & Announcements" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 mb-8 flex justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search news articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent outline-none transition-all"
            />
          </div>
          <div className="hidden md:block text-sm text-gray-500 dark:text-gray-400 font-medium">
            Showing {filteredNews.length} of {news.length} articles
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-150 dark:border-gray-800/80 overflow-hidden hover:-translate-y-1 hover:shadow-md hover:border-blue-600/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Sleek top accent line */}
              <div className="h-1 bg-gradient-to-r from-blue-700 to-indigo-800 w-full" />
              
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Row: Date */}
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 font-medium gap-1.5 mb-4 border-b border-gray-50 dark:border-gray-800/50 pb-3">
                  <Calendar size={13} className="text-gray-400 dark:text-gray-500" />
                  <span>{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-850 dark:text-white text-base leading-snug mb-3 hover:text-brand-red transition-colors font-serif">
                  {item.title}
                </h3>
                
                {/* Body Excerpt */}
                <p className="text-gray-600 dark:text-gray-450 text-sm flex-grow leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-surface-dark rounded-2xl border border-dashed border-gray-200 dark:border-gray-800">
            <Calendar size={48} className="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">No news articles found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Try refining your search keyword</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
