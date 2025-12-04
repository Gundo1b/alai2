import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '../types';
import { LogoIcon, LogoText } from './Logo';

interface NavigationProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ theme, toggleTheme }) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/5 rounded-2xl px-6 py-3 flex justify-between items-center shadow-lg">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group">
          <LogoIcon className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
          <LogoText className="hidden sm:block" />
        </div>

        {/* Links (Hidden on small mobile) */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          {['Product', 'Solutions', 'Pricing', 'Company'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-primary transition-colors uppercase tracking-wider text-xs">
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
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
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;