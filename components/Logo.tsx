import React from 'react';

export const LogoIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#64E1FF" />
        <stop offset="1" stopColor="#009DFF" />
      </linearGradient>
    </defs>
    
    {/* Container Box */}
    <rect x="5" y="5" width="90" height="90" rx="20" stroke="url(#logo-gradient)" strokeWidth="6" />
    
    {/* The 'A' Shape */}
    {/* Right diagonal (solid) */}
    <path d="M45 25 L65 75" stroke="url(#logo-gradient)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Left diagonal (broken) */}
    {/* Top part */}
    <path d="M45 25 L35 50" stroke="url(#logo-gradient)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    {/* Bottom part */}
    <path d="M29 65 L25 75" stroke="url(#logo-gradient)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* The 'i' Shape - Vertical Bar */}
    <path d="M80 30 L80 75" stroke="url(#logo-gradient)" strokeWidth="7" strokeLinecap="round" />
    
    {/* The dot of the i (connected to line in this stylized version to match the sleek look) */}
  </svg>
);

export const LogoText: React.FC<{ className?: string }> = ({ className = "text-xl" }) => (
  <span className={`font-display font-medium uppercase tracking-[0.2em] text-slate-900 dark:text-white ${className}`}>
    Integen
  </span>
);
