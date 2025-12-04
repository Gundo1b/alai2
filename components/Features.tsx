import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Maximize, MousePointer2 } from 'lucide-react';

const Features: React.FC = () => {
  const advantages = [
    {
      title: 'Speed',
      icon: Zap,
      desc: 'Generates assets 10x faster with parallel processing.',
      delay: 0,
    },
    {
      title: 'Ease of Use',
      icon: MousePointer2,
      desc: 'Intuitive natural language interface. No prompts engineering required.',
      delay: 0.1,
    },
    {
      title: 'Scalability',
      icon: Maximize,
      desc: 'Enterprise-grade infrastructure that grows with your team.',
      delay: 0.2,
    },
    {
      title: 'Security',
      icon: Shield,
      desc: 'SOC2 Compliant with private cloud options.',
      delay: 0.3,
    },
  ];

  return (
    <section className="py-24 bg-transparent relative">
      {/* Background Mesh - Optional enhancement over Vortex */}
      <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Why leading teams <br /> choose Integen
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed backdrop-blur-sm rounded-lg">
              We didn't just bundle tools together. We rebuilt the creative engine from the ground up to be faster, smarter, and more intuitive.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-primary rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: adv.delay }}
                className="bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-brand-primary/50 transition-all group backdrop-blur-md"
              >
                <div className="w-12 h-12 bg-slate-100 dark:bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <adv.icon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{adv.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {adv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;