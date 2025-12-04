import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { Theme } from '../types';
import { LogoIcon, LogoText } from './Logo';

interface NavigationProps {
  theme: Theme;
  toggleTheme: () => void;
}

const languages = [
  "English", "Spanish", "French", "German", "Chinese",
  "Japanese", "Korean", "Russian", "Portuguese", "Italian",
  "Dutch", "Swedish", "Turkish", "Arabic", "Hindi",
  "Bengali", "Vietnamese", "Thai", "Greek", "Polish"
];

const Navigation: React.FC<NavigationProps> = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false); // Mobile accordion
  const [isDesktopLanguagesOpen, setIsDesktopLanguagesOpen] = useState(false); // Desktop hover/click

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/5 rounded-2xl px-4 md:px-6 py-3 flex justify-between items-center shadow-lg relative">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group z-50">
          <LogoIcon className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300" />
          <LogoText className="hidden sm:block" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300 items-center">
          {['Product', 'Solutions', 'Pricing'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-primary transition-colors uppercase tracking-wider text-xs">
              {item}
            </a>
          ))}

          {/* Desktop Languages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDesktopLanguagesOpen(true)}
            onMouseLeave={() => setIsDesktopLanguagesOpen(false)}
          >
            <button
              className="flex items-center hover:text-brand-primary transition-colors uppercase tracking-wider text-xs"
            >
              Languages <ChevronDown size={14} className={`ml-1 transition-transform ${isDesktopLanguagesOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDesktopLanguagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="max-h-80 overflow-y-auto py-2 custom-scrollbar">
                    {languages.map((language) => (
                      <a
                        key={language}
                        href="#"
                        className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-brand-primary transition-colors"
                      >
                        {language}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#company" className="hover:text-brand-primary transition-colors uppercase tracking-wider text-xs">
            Company
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 md:space-x-4 z-50">
          <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 transition-all overflow-hidden"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === Theme.DARK ? 180 : 0 }}
              transition={{ duration: 0.4 }}
            >
              {theme === Theme.DARK ? <Moon size={20} /> : <Sun size={20} />}
            </motion.div>
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block px-6 py-2 bg-gradient-to-r from-brand-cyan to-brand-primary text-white rounded-full text-sm font-bold tracking-wide shadow-[0_0_15px_rgba(0,157,255,0.3)] hover:shadow-[0_0_25px_rgba(0,157,255,0.5)] transition-all"
          >
            GET ACCESS
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-slate-800 dark:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="absolute top-full left-0 right-0 mt-2 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl md:hidden flex flex-col space-y-4 overflow-hidden max-h-[80vh] overflow-y-auto"
            >
              {['Product', 'Solutions', 'Pricing'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-600 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-primary font-medium text-lg py-2 border-b border-slate-100 dark:border-white/5 last:border-0"
                >
                  {item}
                </a>
              ))}

              {/* Mobile Languages Accordion */}
              <div className="border-b border-slate-100 dark:border-white/5">
                <button
                  onClick={() => setIsLanguagesOpen(!isLanguagesOpen)}
                  className="flex items-center justify-between w-full text-slate-600 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-primary font-medium text-lg py-2"
                >
                  Languages <ChevronDown size={20} className={`transition-transform ${isLanguagesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isLanguagesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 py-2 space-y-2 border-l-2 border-slate-100 dark:border-white/5 ml-2">
                        {languages.map((language) => (
                          <a
                            key={language}
                            href="#"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-slate-500 dark:text-slate-400 hover:text-brand-primary text-base"
                          >
                            {language}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#company"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-primary font-medium text-lg py-2 border-b border-slate-100 dark:border-white/5 last:border-0"
              >
                Company
              </a>

              <button className="w-full py-3 bg-gradient-to-r from-brand-cyan to-brand-primary text-white rounded-xl font-bold tracking-wide shadow-lg mt-4">
                GET ACCESS
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;