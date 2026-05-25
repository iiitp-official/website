import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import { BookMarked, Search, Book, Library } from 'lucide-react';

const LibraryPage = () => {
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Central Library" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-primary dark:text-accent-dark mb-4">
              <Book size={32} />
            </div>
            <h3 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">15,000+</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Print Books</p>
          </div>
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-primary dark:text-accent-dark mb-4">
              <BookMarked size={32} />
            </div>
            <h3 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">5,000+</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">E-Journals</p>
          </div>
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-primary dark:text-accent-dark mb-4">
              <Library size={32} />
            </div>
            <h3 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">24/7</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Reading Room Access</p>
          </div>
        </div>

        <div className="bg-primary dark:bg-gray-800 p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between text-white border border-blue-900/50 dark:border-gray-700">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-serif mb-2">Online Public Access Catalog (OPAC)</h2>
            <p className="text-blue-200 dark:text-gray-300">Search and reserve books, journals, and thesis from our entire collection online.</p>
          </div>
          <button className="bg-white text-primary dark:bg-surface-dark dark:text-white px-8 py-3 rounded-lg font-bold shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center whitespace-nowrap">
            <Search className="mr-2" size={18} /> Access OPAC
          </button>
        </div>

      </div>
    </div>
  );
};

export default LibraryPage;
