import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x && x.toLowerCase() !== 'about');

  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm font-medium text-blue-200 dark:text-gray-400 overflow-x-auto whitespace-nowrap no-scrollbar pb-1">
      <Link to="/" className="hover:text-white transition-colors flex items-center">
        <Home size={14} className="mr-1.5" />
        Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        // Capitalize and format text (e.g., e-tender -> E-Tender)
        const label = value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        return (
          <React.Fragment key={to}>
            <ChevronRight size={14} className="mx-2 opacity-50 shrink-0" />
            {last ? (
              <span className="text-white dark:text-gray-200 font-semibold">{label}</span>
            ) : (
              <Link to={to} className="hover:text-white transition-colors">
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
