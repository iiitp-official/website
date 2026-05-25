import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Sun, Moon, Menu, X, ChevronDown, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
             (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDark]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleDarkMode = () => setIsDark(!isDark);

  const primaryLinks = [
    { name: 'About Us', path: '/about', hasDropdown: true },
    { name: 'Administration', path: '/administration', hasDropdown: true },
    { name: 'Academics', path: '/academics', hasDropdown: true },
    { name: 'Research', path: '/research', hasDropdown: true },
    { name: 'People', path: '/people', hasDropdown: true },
    { name: 'Life@IIITP', path: '/life', hasDropdown: true },
    { name: 'Notice', path: '/notice', hasDropdown: false },
    { name: 'E-TENDER', path: '/e-tender', hasDropdown: false },
    { name: 'Library', path: '/library', hasDropdown: false },
  ];

  const secondaryLinks = [
    { name: 'Careers', path: '/careers' },
    { name: 'Placement', path: '/placement' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Fees', path: '/fees' },
    { name: 'NIRF', path: '/nirf' },
    { name: 'Report and Minutes', path: '/#' },
    { name: 'RTI', path: '/#' },
    { name: 'Sports & Gymnasium', path: '/#' },
    { name: 'Suo-Motu Disclosure', path: '/#' },
    { name: 'राजभाषा अनुभाग', path: '/#' },
    { name: 'ACM Chapter', path: '/#' },
  ];

  // Helper for active styling
  const navLinkClass = ({ isActive }) =>
    `relative py-2 px-3 text-sm font-medium transition-colors duration-200 group flex items-center ${
      isActive ? 'text-accent-dark' : 'text-white hover:text-accent-dark dark:text-gray-200 dark:hover:text-accent-dark'
    }`;

  const navLinkStyle = ({ isActive }) => (
    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-dark transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
  );

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-primary dark:bg-surface-dark transition-colors duration-200">
      {/* Row 1: Logo, Name, Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-blue-800/50 dark:border-gray-800">
        <div className="flex justify-between items-center py-3 md:py-4">
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden shrink-0 shadow-sm">
              {/* Replace BookOpen with actual img tag when logo is available */}
              <BookOpen className="text-primary w-8 h-8" />
            </div>
            <div className="text-white dark:text-text-dark flex flex-col justify-center">
              <h1 className="text-lg md:text-2xl font-bold font-serif leading-tight">
                Indian Institute of Information Technology Pune
              </h1>
              <h2 className="text-sm md:text-base font-medium opacity-90 font-serif">
                भारतीय सूचना प्रौद्योगिकी संस्थान पुणे
              </h2>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-accent-dark dark:text-gray-300 dark:hover:text-white transition-colors hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={toggleDarkMode} 
              className="text-white hover:text-accent-dark dark:text-gray-300 dark:hover:text-white transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-accent-dark dark:text-gray-300 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Navigation Links (Desktop) */}
      <nav className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center py-2 gap-x-2 gap-y-1">
          {primaryLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={navLinkClass}>
              {({ isActive }) => (
                <>
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 ml-1 opacity-70" />}
                  {navLinkStyle({ isActive })}
                </>
              )}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center py-1 pb-2 gap-x-4 gap-y-1 text-xs opacity-90 border-t border-blue-800/30 dark:border-gray-800 mt-1 pt-2">
          {secondaryLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className="text-white hover:text-accent-dark dark:text-gray-300 transition-colors">
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-primary dark:bg-surface-dark border-t border-blue-800/50 dark:border-gray-800 shadow-xl"
          >
            <div className="px-4 py-4 space-y-4 max-h-[70vh] overflow-y-auto">
              <div>
                <h3 className="text-blue-300 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 px-3">Primary Links</h3>
                <div className="flex flex-col space-y-1">
                  {primaryLinks.map((link) => (
                    <NavLink 
                      key={link.name} 
                      to={link.path} 
                      className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? 'bg-blue-800 text-white dark:bg-gray-800' : 'text-white hover:bg-blue-800/50 dark:text-gray-300 dark:hover:bg-gray-800/50'}`}
                    >
                      <div className="flex items-center justify-between">
                        {link.name}
                        {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-70" />}
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="border-t border-blue-800/50 dark:border-gray-800 pt-4">
                <h3 className="text-blue-300 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 px-3">Other Links</h3>
                <div className="flex flex-wrap gap-2 px-3">
                  {secondaryLinks.map((link) => (
                    <NavLink 
                      key={link.name} 
                      to={link.path} 
                      className={({ isActive }) => `px-3 py-1.5 rounded-full text-xs font-medium transition-colors border border-blue-800/50 dark:border-gray-700 ${isActive ? 'bg-blue-800 text-white dark:bg-gray-700' : 'text-gray-200 hover:bg-blue-800/50 dark:text-gray-400 dark:hover:bg-gray-800'}`}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
