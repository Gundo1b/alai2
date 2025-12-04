import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, GraduationCap, Building2 } from 'lucide-react';

const Personas: React.FC = () => {
  const personas = [
    {
      role: 'Creators',
      desc: 'For designers and artists pushing boundaries.',
      icon: PenTool,
    },
    {
      role: 'Developers',
      desc: 'For engineers building the next big thing.',
      icon: GraduationCap, // Metaphor for learning/dev
    },
    {
      role: 'Enterprise',
      desc: 'For organizations needing secure scale.',
      icon: Building2,
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-16"
        >
          Built for <span className="text-gradient">Visionaries</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {personas.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative w-full max-w-sm group"
            >
              {/* Glowing Ring Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-brand-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-light dark:bg-white/5 flex items-center justify-center mb-6 ring-1 ring-slate-900/5 dark:ring-white/10">
                  <p.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{p.role}</h3>
                <p className="text-slate-600 dark:text-slate-400">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;