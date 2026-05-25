import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-surface dark:bg-surface-dark text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-text dark:text-text-dark font-medium">
          An Institute of National Importance
        </div>
        <div className="flex items-center space-x-4 text-text dark:text-text-dark">
          <div className="flex items-center space-x-2">
            <a href="#" aria-label="Facebook" className="hover:text-accent dark:hover:text-accent-dark transition-colors"><Facebook size={14} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-accent dark:hover:text-accent-dark transition-colors"><Twitter size={14} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent dark:hover:text-accent-dark transition-colors"><Linkedin size={14} /></a>
          </div>
          <div className="h-3 w-px bg-gray-300 dark:bg-gray-700"></div>
          <div className="flex items-center space-x-2">
            <button className="hover:text-accent dark:hover:text-accent-dark transition-colors font-medium">EN</button>
            <span className="text-gray-400 dark:text-gray-600">|</span>
            <button className="hover:text-accent dark:hover:text-accent-dark transition-colors font-medium">हिं</button>
          </div>
          <div className="h-3 w-px bg-gray-300 dark:bg-gray-700"></div>
          <div className="flex items-center space-x-2">
            <button className="hover:text-accent dark:hover:text-accent-dark transition-colors font-medium">A-</button>
            <button className="hover:text-accent dark:hover:text-accent-dark transition-colors font-medium">A</button>
            <button className="hover:text-accent dark:hover:text-accent-dark transition-colors font-medium">A+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
