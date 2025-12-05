import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';
import { LogoIcon, LogoText } from './Logo';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Integrations', href: '#' },
            { label: 'Changelog', href: '#' },
            { label: 'Roadmap', href: '#roadmap' },
        ],
        company: [
            { label: 'About Us', href: '#company' },
            { label: 'Careers', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Contact', href: '#' },
            { label: 'Partners', href: '#' },
        ]
    };

    return (
        <footer className="relative bg-slate-50 dark:bg-slate-950 py-8 overflow-hidden border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo & Copyright */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <LogoIcon className="w-6 h-6" />
                        <LogoText className="text-lg" />
                    </div>
                    <span className="text-sm text-slate-400 hidden md:inline-block">|</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">© {currentYear} Integen AI</span>
                </div>

                {/* Links - Single Line */}
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {footerLinks.product.map((link) => (
                        <a key={link.label} href={link.href} className="hover:text-brand-primary transition-colors">
                            {link.label}
                        </a>
                    ))}
                    <span className="hidden md:block w-px h-4 bg-slate-300 dark:bg-slate-700 self-center" />
                    {footerLinks.company.map((link) => (
                        <a key={link.label} href={link.href} className="hover:text-brand-primary transition-colors">
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Socials */}
                <div className="flex items-center gap-4">
                    <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Twitter size={18} /></a>
                    <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Github size={18} /></a>
                    <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Linkedin size={18} /></a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;