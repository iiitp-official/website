import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ customTitle }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex text-sm text-gray-500 dark:text-gray-400 py-2">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="hover:text-primary dark:hover:text-accent transition-colors">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          
          let title = customTitle && isLast ? customTitle : value.charAt(0).toUpperCase() + value.slice(1);
          
          return (
            <li key={to}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                {isLast ? (
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {title}
                  </span>
                ) : (
                  <Link to={to} className="hover:text-primary dark:hover:text-accent transition-colors">
                    {title}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
