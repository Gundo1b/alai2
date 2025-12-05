
import React, { useState, useEffect } from 'react';
import { Theme } from './types';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Personas from './components/Personas';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { Vortex } from './components/ui/Vortex';
import UnifiedWorkflow from './components/UnifiedWorkflow';
import { TimelineSection } from './components/TimelineSection';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  // Initial theme check
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme(Theme.LIGHT);
    }
  }, []);

  // Update HTML class for Tailwind
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === Theme.DARK ? 'bg-brand-dark' : 'bg-brand-light'} relative`}>
      {/* Global Vortex Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Vortex
          backgroundColor="transparent"
          rangeY={800}
          particleCount={500}
          baseHue={200}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10">
        <Navigation theme={theme} toggleTheme={toggleTheme} />

        <main className="relative">
          <Hero />
          <UnifiedWorkflow />
          {/* <ProblemSolution /> */}
          <Features />
          <TimelineSection />
          <Personas />
          <Pricing />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
