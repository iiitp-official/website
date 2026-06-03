import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Social Icons
const FacebookIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InternationalHeader = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("darkMode") === "true" ||
        (!("darkMode" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

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
    setOpenDropdowns({});
  }, [location.pathname]);

  const toggleDarkMode = () => setIsDark(!isDark);

  const toggleDropdown = (name, e) => {
    e.preventDefault();
    setOpenDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Text size control
  const handleTextSize = (action) => {
    const root = document.documentElement;
    const current = parseFloat(getComputedStyle(root).fontSize);
    if (action === "increase") root.style.fontSize = Math.min(current + 1, 20) + "px";
    else if (action === "decrease") root.style.fontSize = Math.max(current - 1, 14) + "px";
    else root.style.fontSize = "16px";
  };

  const primaryLinks = [
    { name: "Overview", path: "/international" },
    { name: "About Us", path: "/international/about" },
    { name: "Academic Offerings", path: "/international/academics" },
    { name: "Partnership & Exchange", path: "/international/collaborations" },
    { name: "Contact Us", path: "/international/contact" },
    { name: "Main Website Portal", path: "/", isExternal: false }
  ];

  const navLinkClass = ({ isActive }) =>
    `relative py-1.5 px-3 text-xs md:text-sm font-semibold transition-colors duration-200 group flex items-center text-white hover:text-brand-red dark:text-gray-200 dark:hover:text-brand-red-dark`;

  const navLinkUnderline = ({ isActive }) => (
    <span
      className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-red dark:bg-brand-red-dark transform origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
    />
  );

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-primary dark:bg-surface-dark transition-colors duration-200">
      {/* Row 1: Logo + Name + Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-blue-800/50 dark:border-gray-800">
        <div className="flex justify-between items-center py-1 md:py-2">
          {/* Logo + Name */}
          <Link 
            to="/international" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 md:space-x-3"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex items-center justify-center shrink-0 bg-white">
              <img src="/Logo/iiitp_logo.png" alt="IIIT Pune Logo" className="w-full h-full object-contain mix-blend-multiply scale-[1.6]" />
            </div>
            <div className="text-white dark:text-text-dark leading-tight">
              <h1 className="text-sm md:text-base lg:text-lg font-bold font-serif">
                Indian Institute of Information Technology Pune
              </h1>
              <h2 className="text-xs md:text-sm lg:text-base font-medium opacity-90 font-serif mt-0.5">
                International Relations Office
              </h2>
              <p className="text-[9px] md:text-[11px] opacity-80 mt-0.5">(An Institute of National Importance)</p>
            </div>
          </Link>

          {/* Right Controls */}
          <div className="flex flex-col items-end gap-1 md:gap-1.5">
            <div className="flex items-center gap-2 md:gap-3">
              {/* Dark Mode */}
              <button
                onClick={toggleDarkMode}
                className="flex items-center justify-center p-1.5 rounded-lg text-white hover:bg-blue-700 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                aria-label="Toggle dark mode"
                title={isDark ? "Light Mode" : "Dark Mode"}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <div className="hidden md:block h-5 w-px bg-blue-700 dark:bg-gray-600" />

              {/* Social Icons */}
              <div className="hidden md:flex items-center gap-2">
                <a
                  href="https://www.facebook.com/iiitpune"
                  aria-label="Facebook"
                  className="opacity-80 hover:opacity-100 transition-opacity p-1.5 text-white"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="https://x.com/IIIT_PUNE"
                  aria-label="Twitter"
                  className="opacity-80 hover:opacity-100 transition-opacity p-1.5 text-white"
                >
                  <TwitterIcon size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/school/iiitpune/posts/?feedView=all"
                  aria-label="LinkedIn"
                  className="opacity-80 hover:opacity-100 transition-opacity p-1.5 text-white"
                >
                  <LinkedinIcon size={18} />
                </a>
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
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Navigation Links (Desktop) */}
      <nav className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-2 gap-x-6">
          {primaryLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/international"}
              className={({ isActive }) => navLinkClass({ isActive })}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {navLinkUnderline({ isActive })}
                </>
              )}
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
              <div className="flex items-center gap-4 px-3">
                <a href="https://www.facebook.com/iiitpune" className="opacity-80 hover:opacity-100 text-white"><FacebookIcon size={20} /></a>
                <a href="https://x.com/IIIT_PUNE" className="opacity-80 hover:opacity-100 text-white"><TwitterIcon size={20} /></a>
                <a href="https://www.linkedin.com/school/iiitpune/" className="opacity-80 hover:opacity-100 text-white"><LinkedinIcon size={20} /></a>
              </div>

              <div className="flex flex-col space-y-2">
                {primaryLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.path === "/international"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-semibold text-white ${isActive ? "bg-brand-red" : "hover:bg-blue-800/50"}`}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default InternationalHeader;
