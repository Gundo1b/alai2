import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';
import { LogoIcon, LogoText } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent pt-20 pb-10 relative overflow-hidden backdrop-blur-sm">
        {/* Brand Ribbon */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan via-brand-primary to-brand-accent" />
        
        {/* CTA Section */}
        <div className="container mx-auto px-6 mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-8">
                Ready to Shape the Future?
            </h2>
            <button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-cyan to-brand-primary opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="absolute inset-0 w-full h-full border border-brand-primary rounded-full animate-pulse-slow" />
                <span className="relative text-lg font-bold text-brand-primary group-hover:text-brand-cyan transition-colors uppercase tracking-widest">
                    Join Early Access
                </span>
            </button>
        </div>

        <div className="container mx-auto px-6 border-t border-slate-100 dark:border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
                <LogoIcon className="w-8 h-8" />
                <LogoText className="text-lg" />
            </div>
            
            <div className="text-sm text-slate-500 dark:text-slate-400">
                © 2024 Integen AI. All rights reserved.
            </div>

            <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Github size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Linkedin size={20} /></a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;