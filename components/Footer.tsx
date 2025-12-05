import React from 'react';
import { LogoIcon, LogoText } from './Logo';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    const footerSections = {
        Product: [
            { label: 'Overview', href: '#' },
            { label: 'Features', href: '#' },
            { label: 'API', href: '#' },
        ],
        Solutions: [
            { label: 'For Developers', href: '#' },
            { label: 'For Teams', href: '#' },
            { label: 'Case Studies', href: '#' },
        ],
        Pricing: [
            { label: 'Plans', href: '#' },
            { label: 'Compare', href: '#' },
            { label: 'FAQ', href: '#' },
        ],
        Languages: [
            { label: 'English', href: '#' },
            { label: 'Spanish', href: '#' },
            { label: 'French', href: '#' },
        ],
        Company: [
            { label: 'About', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Contact', href: '#' },
            { label: 'Blog', href: '#' },
        ],
    };

    return (
        <footer className="relative bg-slate-50 dark:bg-slate-950 py-8 overflow-hidden border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <div className="flex items-center space-x-2">
                        <LogoIcon className="w-6 h-6" />
                        <LogoText className="text-lg" />
                    </div>
                </div>

                {/* Footer Sections */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                    {Object.entries(footerSections).map(([section, links]) => (
                        <div key={section} className="flex flex-col">
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">{section}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-sm text-slate-600 dark:text-slate-300 hover:text-brand-primary transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors">
                        <Instagram size={20} />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-slate-500 dark:text-slate-400">
                    © 2025 Integen Portal. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
