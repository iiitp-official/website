import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Search, Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Social Icons
const FacebookIcon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("darkMode") === "true" ||
        (!("darkMode" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDark]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleDarkMode = () => setIsDark(!isDark);

  // Text size control
  const handleTextSize = (action) => {
    const root = document.documentElement;
    const current = parseFloat(getComputedStyle(root).fontSize);
    if (action === "increase")
      root.style.fontSize = Math.min(current + 1, 20) + "px";
    else if (action === "decrease")
      root.style.fontSize = Math.max(current - 1, 14) + "px";
    else root.style.fontSize = "16px";
  };

  const primaryLinks = [
    { name: "About Us", path: "/about", hasDropdown: true },
    { name: "Administration", path: "/administration", hasDropdown: true },
    { name: "Academics", path: "/academics", hasDropdown: true },
    { name: "Research", path: "/research", hasDropdown: true },
    { name: "People", path: "/people", hasDropdown: true },
    { name: "Life@IIITP", path: "/life", hasDropdown: true },
    { name: "Notice", path: "/notice", hasDropdown: false },
    { name: "E-TENDER", path: "/e-tender", hasDropdown: false },
    { name: "Library", path: "/library", hasDropdown: false },
  ];

  const secondaryLinks = [
    { name: "Careers", path: "/careers" },
    { name: "Placement", path: "/placement" },
    { name: "Contact Us", path: "/contact" },
    { name: "Fees", path: "/fees" },
    { name: "NIRF", path: "/nirf" },
    { name: "Report and Minutes", path: "/#" },
    { name: "RTI", path: "/#" },
    { name: "Sports & Gymnasium", path: "/#" },
    { name: "Suo-Motu Disclosure", path: "/#" },
    { name: "राजभाषा अनुभाग", path: "/#" },
    { name: "ACM Chapter", path: "/#" },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative py-2 px-3 text-sm font-medium transition-colors duration-200 group flex items-center ${
      isActive
        ? "text-accent-dark"
        : "text-white hover:text-accent-dark dark:text-gray-200 dark:hover:text-accent-dark"
    }`;

  const navLinkUnderline = ({ isActive }) => (
    <span
      className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-dark transform origin-left transition-transform duration-300 ${
        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  );

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-primary dark:bg-surface-dark transition-colors duration-200">
      {/* Row 1: Logo + Name + Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-blue-800/50 dark:border-gray-800">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo + Name */}
          <Link to="/" className="flex items-start space-x-3">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden flex items-center justify-center shrink-0">
              <img
                src="/iiitp-logo.png"
                alt="IIIT Pune Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-white dark:text-text-dark leading-tight">
              <h1 className="text-xl md:text-2xl font-bold font-serif">
                Indian Institute of Information Technology Pune
              </h1>
              <h2 className="text-sm md:text-2xl font-medium opacity-90 font-serif mt-1">
                भारतीय सूचना प्रौद्योगिकी संस्थान, पुणे
              </h2>
              <p className="text-[10px] md:text-sm opacity-80 mt-1">
                (An Institute of National Importance)
              </p>
              <p className="text-[8px] md:text-xs opacity-70 mt-0.5">
                Gat No. 5 &amp; 6, Village Nanoli-Tathawade, Tal. Maval, Pune -
                412106
              </p>
            </div>
          </Link>

          {/* Right Controls */}
          <div className="flex flex-col items-end gap-3">
            {/* Top Row: Dark mode + Language + Text Size + Mobile menu */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Dark Mode */}
              <button
                onClick={toggleDarkMode}
                className="flex items-center justify-center p-1.5 rounded-lg text-white hover:bg-blue-700 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                aria-label="Toggle dark mode"
                title={isDark ? "Light Mode" : "Dark Mode"}
              >
                {isDark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              <div className="hidden md:block h-5 w-px bg-blue-700 dark:bg-gray-600" />

              {/* Language Selector */}
              <div className="hidden md:flex items-center bg-blue-900/40 dark:bg-gray-800/40 rounded-lg px-1.5 py-1 gap-0.5">
                <button
                  className="px-1.5 py-0.5 rounded font-medium text-xs text-white hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors"
                  title="English"
                >
                  EN
                </button>
                <span className="text-gray-400 dark:text-gray-500 text-xs font-light">
                  |
                </span>
                <button
                  className="px-1.5 py-0.5 rounded font-medium text-xs text-white hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors"
                  title="Hindi"
                >
                  हिं
                </button>
              </div>

              <div className="hidden md:block h-5 w-px bg-blue-700 dark:bg-gray-600" />

              {/* Text Size */}
              <div className="hidden md:flex items-center bg-blue-900/40 dark:bg-gray-800/40 rounded-lg px-1.5 py-1 gap-0.5">
                <button
                  onClick={() => handleTextSize("decrease")}
                  className="px-1.5 py-0.5 rounded text-xs font-light text-white hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors leading-none"
                  title="Decrease Text Size"
                >
                  A-
                </button>
                <button
                  onClick={() => handleTextSize("reset")}
                  className="px-1.5 py-0.5 rounded text-xs font-medium text-white hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors leading-none"
                  title="Default Text Size"
                >
                  A
                </button>
                <button
                  onClick={() => handleTextSize("increase")}
                  className="px-1.5 py-0.5 rounded text-sm font-bold text-white hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors leading-none"
                  title="Increase Text Size"
                >
                  A+
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex items-center justify-center p-1.5 rounded-lg text-white hover:bg-blue-700 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Bottom Row: Social Icons + Search (Desktop only) */}
            <div className="hidden md:flex items-center gap-1.5">
              {/* Social Icons */}
              <div className="flex items-center gap-1">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-white hover:text-accent-dark transition-colors p-1.5"
                >
                  <FacebookIcon size={14} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-white hover:text-accent-dark transition-colors p-1.5"
                >
                  <TwitterIcon size={14} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-white hover:text-accent-dark transition-colors p-1.5"
                >
                  <LinkedinIcon size={14} />
                </a>
              </div>

              <div className="h-5 w-px bg-blue-700 dark:bg-gray-600" />

              {/* Search */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="flex items-center justify-center p-2 rounded-lg text-white hover:bg-blue-700 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                aria-label="Search"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {showSearch && (
                  <motion.input
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 160, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && console.log("Search:", searchQuery)
                    }
                    autoFocus
                    className="h-8 px-3 py-2 rounded-lg bg-blue-900/30 dark:bg-gray-800/50 text-white placeholder-gray-400 dark:placeholder-gray-500 border border-blue-700 dark:border-gray-700 focus:border-accent-dark focus:outline-none text-sm overflow-hidden"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Primary Nav Links (Desktop) */}
      <nav className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center py-2 gap-x-2 gap-y-1">
          {primaryLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={navLinkClass}>
              {({ isActive }) => (
                <>
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                  )}
                  {navLinkUnderline({ isActive })}
                </>
              )}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center py-1 pb-2 gap-x-4 gap-y-1 text-xs opacity-90 border-t border-blue-800/30 dark:border-gray-800 mt-1 pt-2">
          {secondaryLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-white hover:text-accent-dark dark:text-gray-300 transition-colors"
            >
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
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-primary dark:bg-surface-dark border-t border-blue-800/50 dark:border-gray-800 shadow-xl"
          >
            <div className="px-4 py-4 space-y-4 max-h-[70vh] overflow-y-auto">
              {/* Mobile Search */}
              <div className="flex items-center gap-2 px-3">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && console.log("Search:", searchQuery)
                  }
                  className="flex-1 h-8 px-3 py-2 rounded-lg bg-blue-900/30 dark:bg-gray-800/50 text-white placeholder-gray-400 border border-blue-700 dark:border-gray-700 focus:border-accent-dark focus:outline-none text-sm"
                />
                <Search className="w-4 h-4 text-white opacity-70" />
              </div>

              {/* Mobile Social + Language + Text Size */}
              <div className="flex items-center gap-3 px-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-white hover:text-accent-dark transition-colors"
                >
                  <FacebookIcon size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-white hover:text-accent-dark transition-colors"
                >
                  <TwitterIcon size={16} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-white hover:text-accent-dark transition-colors"
                >
                  <LinkedinIcon size={16} />
                </a>
                <div className="ml-auto flex items-center bg-blue-900/40 dark:bg-gray-800/40 rounded-lg px-1.5 py-1 gap-0.5">
                  <button className="px-1.5 py-0.5 rounded text-xs text-white hover:bg-blue-700 transition-colors">
                    EN
                  </button>
                  <span className="text-gray-400 text-xs">|</span>
                  <button className="px-1.5 py-0.5 rounded text-xs text-white hover:bg-blue-700 transition-colors">
                    हिं
                  </button>
                </div>
                <div className="flex items-center bg-blue-900/40 dark:bg-gray-800/40 rounded-lg px-1.5 py-1 gap-0.5">
                  <button
                    onClick={() => handleTextSize("decrease")}
                    className="px-1 py-0.5 rounded text-xs text-white hover:bg-blue-700 transition-colors"
                  >
                    A-
                  </button>
                  <button
                    onClick={() => handleTextSize("reset")}
                    className="px-1 py-0.5 rounded text-xs text-white hover:bg-blue-700 transition-colors"
                  >
                    A
                  </button>
                  <button
                    onClick={() => handleTextSize("increase")}
                    className="px-1 py-0.5 rounded text-xs font-bold text-white hover:bg-blue-700 transition-colors"
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Primary Links */}
              <div>
                <h3 className="text-blue-300 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 px-3">
                  Primary Links
                </h3>
                <div className="flex flex-col space-y-1">
                  {primaryLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                          isActive
                            ? "bg-blue-800 text-white dark:bg-gray-800"
                            : "text-white hover:bg-blue-800/50 dark:text-gray-300 dark:hover:bg-gray-800/50"
                        }`
                      }
                    >
                      <div className="flex items-center justify-between">
                        {link.name}
                        {link.hasDropdown && (
                          <ChevronDown className="w-4 h-4 opacity-70" />
                        )}
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Secondary Links */}
              <div className="border-t border-blue-800/50 dark:border-gray-800 pt-4">
                <h3 className="text-blue-300 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 px-3">
                  Other Links
                </h3>
                <div className="flex flex-wrap gap-2 px-3">
                  {secondaryLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `px-3 py-1.5 rounded-full text-xs font-medium transition-colors border border-blue-800/50 dark:border-gray-700 ${
                          isActive
                            ? "bg-blue-800 text-white dark:bg-gray-700"
                            : "text-gray-200 hover:bg-blue-800/50 dark:text-gray-400 dark:hover:bg-gray-800"
                        }`
                      }
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
