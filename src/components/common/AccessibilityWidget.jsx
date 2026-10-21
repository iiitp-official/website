import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accessibility,
  Sun,
  Moon,
  Type,
  Languages,
  RotateCcw,
  X,
  Check,
  ZoomIn,
  ZoomOut,
  Sliders,
} from "lucide-react";

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  // Theme state
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  // Font size state (default 16px)
  const [fontSize, setFontSize] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("fontSize");
      if (saved) {
        const val = parseFloat(saved);
        if (!isNaN(val) && val >= 14 && val <= 20) return val;
      }
    }
    return 16;
  });

  // Language state
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof document !== "undefined") {
      const cookieMatch = document.cookie.match(/googtrans=\/en\/([a-z]{2})/i);
      if (cookieMatch && cookieMatch[1]) {
        return cookieMatch[1].toLowerCase();
      }
      if (sessionStorage.getItem("langSet") === "true") {
        return "hi";
      }
    }
    return "en";
  });

  // Apply dark mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDark]);

  // Apply font size on mount and change
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem("fontSize", fontSize.toString());
  }, [fontSize]);

  // Close on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleDarkMode = (targetMode) => {
    if (targetMode === undefined) {
      setIsDark((prev) => !prev);
    } else {
      setIsDark(targetMode);
    }
  };

  const handleTextSize = (action) => {
    if (action === "increase") {
      setFontSize((prev) => Math.min(prev + 1, 20));
    } else if (action === "decrease") {
      setFontSize((prev) => Math.max(prev - 1, 14));
    } else {
      setFontSize(16);
    }
  };

  const changeLanguage = (lang) => {
    if (lang === currentLang) return;
    const host = window.location.hostname;
    const currentPath = window.location.pathname;
    const pathsToClear = ["/", currentPath];

    if (lang === "en") {
      pathsToClear.forEach((p) => {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${p};`;
        if (host !== "localhost" && host !== "127.0.0.1") {
          document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${host}; path=${p};`;
          document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${host}; path=${p};`;
        }
      });
      sessionStorage.removeItem("langSet");
    } else {
      document.cookie = `googtrans=/en/${lang}; path=/`;
      if (host !== "localhost" && host !== "127.0.0.1") {
        document.cookie = `googtrans=/en/${lang}; domain=${host}; path=/`;
        document.cookie = `googtrans=/en/${lang}; domain=.${host}; path=/`;
      }
      sessionStorage.setItem("langSet", "true");
    }

    setCurrentLang(lang);
    window.location.reload();
  };

  const handleResetAll = () => {
    setFontSize(16);
    document.documentElement.style.fontSize = "16px";
    localStorage.removeItem("fontSize");

    if (isDark) {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }

    if (currentLang !== "en") {
      changeLanguage("en");
    }
  };

  // Check if any non-default setting is applied
  const isCustomized = isDark || fontSize !== 16 || currentLang !== "en";

  // Calculate percentage of font scale
  const fontPercent = Math.round((fontSize / 16) * 100);

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 notranslate select-none"
      aria-label="Accessibility settings"
    >
      {/* Settings Popover Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-16 right-0 mb-3 w-[310px] sm:w-[350px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl shadow-black/20 p-4 sm:p-5 text-gray-800 dark:text-gray-100"
            role="dialog"
            aria-modal="true"
            aria-labelledby="accessibility-panel-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-primary dark:text-accent">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h3
                    id="accessibility-panel-title"
                    className="font-bold text-sm text-gray-900 dark:text-white"
                  >
                    Accessibility Settings
                  </h3>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    अभिगम्यता विकल्प
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {isCustomized && (
                  <button
                    onClick={handleResetAll}
                    title="Reset all settings to default"
                    className="flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-md text-gray-500 hover:text-brand-red dark:text-gray-400 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close accessibility menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Controls List */}
            <div className="space-y-4">
              {/* 1. Theme / Dark Mode Control */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {isDark ? (
                    <Moon className="w-3.5 h-3.5 text-blue-400" />
                  ) : (
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                  )}
                  <span>Display Theme / थीम</span>
                </label>
                <div className="grid grid-cols-2 gap-2 bg-gray-100 dark:bg-gray-800/60 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => toggleDarkMode(false)}
                    className={`flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs font-medium transition-all duration-200 ${
                      !isDark
                        ? "bg-white text-gray-900 shadow-sm font-semibold"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span>Light Mode</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleDarkMode(true)}
                    className={`flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs font-medium transition-all duration-200 ${
                      isDark
                        ? "bg-primary text-white shadow-sm font-semibold"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5 text-blue-300" />
                    <span>Dark Mode</span>
                  </button>
                </div>
              </div>

              {/* 2. Language Control */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <Languages className="w-3.5 h-3.5 text-primary dark:text-accent" />
                  <span>Language / भाषा</span>
                </label>
                <div className="grid grid-cols-2 gap-2 bg-gray-100 dark:bg-gray-800/60 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => changeLanguage("en")}
                    className={`flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs font-medium transition-all duration-200 ${
                      currentLang === "en"
                        ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm font-semibold"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <span>English (EN)</span>
                    {currentLang === "en" && (
                      <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => changeLanguage("hi")}
                    className={`flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs font-medium transition-all duration-200 ${
                      currentLang === "hi"
                        ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm font-semibold"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <span>हिन्दी (HI)</span>
                    {currentLang === "hi" && (
                      <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* 3. Text Size Control */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300">
                    <Type className="w-3.5 h-3.5 text-primary dark:text-accent" />
                    <span>Font Size / अक्षर आकार</span>
                  </label>
                  <span className="text-[11px] font-mono font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                    {fontPercent}% {fontSize === 16 ? "(Default)" : ""}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 bg-gray-100 dark:bg-gray-800/60 p-1.5 rounded-xl">
                  <button
                    type="button"
                    onClick={() => handleTextSize("decrease")}
                    disabled={fontSize <= 14}
                    title="Decrease font size"
                    className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 disabled:opacity-40 disabled:hover:bg-transparent transition-all shadow-xs"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                    <span>A-</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTextSize("reset")}
                    title="Default font size"
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all shadow-xs ${
                      fontSize === 16
                        ? "bg-white dark:bg-gray-700 text-primary dark:text-accent"
                        : "text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700"
                    }`}
                  >
                    A
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTextSize("increase")}
                    disabled={fontSize >= 20}
                    title="Increase font size"
                    className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 disabled:opacity-40 disabled:hover:bg-transparent transition-all shadow-xs"
                  >
                    <span>A+</span>
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Helper Footer */}
            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
              <span>Settings persist across all pages</span>
              <span className="font-mono text-[10px] text-gray-400">IIIT Pune</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50 hover:scale-105 active:scale-95 ${
          isOpen
            ? "bg-primary text-white ring-4 ring-blue-500/30"
            : "bg-primary dark:bg-blue-600 text-white"
        }`}
        aria-label="Toggle accessibility menu"
        aria-expanded={isOpen}
        title="Accessibility Settings / अभिगम्यता"
      >
        <span className="sr-only">Accessibility Settings</span>
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-200 rotate-90" />
        ) : (
          <Accessibility className="w-6 h-6 transition-transform duration-200" />
        )}

        {/* Status indicator dot if custom settings are active */}
        {isCustomized && !isOpen && (
          <span
            className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 dark:bg-amber-300 border-2 border-white dark:border-gray-900 rounded-full animate-pulse"
            title="Custom accessibility preferences active"
          />
        )}
      </button>
    </div>
  );
};

export default AccessibilityWidget;
