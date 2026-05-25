import React from 'react';

const FacebookIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const TwitterIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const LinkedinIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;

const TopBar = () => {
  return (
    <div className="bg-surface dark:bg-surface-dark text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-text dark:text-text-dark font-medium">
          An Institute of National Importance
        </div>
        <div className="flex items-center space-x-4 text-text dark:text-text-dark">
          <div className="flex items-center space-x-2">
            <a href="#" aria-label="Facebook" className="hover:text-accent dark:hover:text-accent-dark transition-colors"><FacebookIcon size={16} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-accent dark:hover:text-accent-dark transition-colors"><TwitterIcon size={16} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent dark:hover:text-accent-dark transition-colors"><LinkedinIcon size={16} /></a>
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
