import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const allPaths = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm font-medium text-blue-200 dark:text-gray-400 overflow-x-auto whitespace-nowrap no-scrollbar pb-1">
      <Link to="/" className="hover:text-brand-red dark:hover:text-brand-red-dark transition-colors flex items-center">
        <Home size={14} className="mr-1.5" />
        Home
      </Link>
      {allPaths.map((value, index) => {
        if (value.toLowerCase() === 'about' || value.toLowerCase() === 'academics' || value.toLowerCase() === 'administration') {
          return null;
        }

        const last = index === allPaths.length - 1;
        const to = `/${allPaths.slice(0, index + 1).join('/')}`;
        const specialNames = {
          'cse': 'CSE',
          'ece': 'ECE',
          'btech': 'B.Tech.',
          'mtech': 'M.Tech.',
          'phd': 'Ph.D.',
          'honors': 'Honours',
          'board-of-studies-cse': 'Board of Studies (CSE)',
          'board-of-studies-ece': 'Board of Studies (ECE)',
          'board-of-studies-ash': 'Board of Studies (AS&H)'
        };

        // Capitalize and format text, handling special acronyms
        let label = specialNames[value.toLowerCase()];
        if (!label) {
          label = value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }

        const isUnclickable = value.toLowerCase() === 'btech' || value.toLowerCase() === 'mtech';

        return (
          <React.Fragment key={to}>
            <ChevronRight size={14} className="mx-2 opacity-50 shrink-0" />
            {last || isUnclickable ? (
              <span className="text-white dark:text-gray-200 font-semibold">{label}</span>
            ) : (
              <Link to={to} className="hover:text-brand-red dark:hover:text-brand-red-dark transition-colors">
                {label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
