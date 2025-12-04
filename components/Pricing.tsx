import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const tiers = [
    {
      name: 'Pro',
      price: billing === 'monthly' ? '29' : '25',
      features: ['Unified Chat & Code', '1000 Image Gens', 'Standard Speed', 'Single User'],
      gradient: false,
    },
    {
      name: 'Ultra',
      price: billing === 'monthly' ? '69' : '60',
      features: ['Everything in Pro', 'Unlimited Video', 'Priority GPU Access', '3 Team Members'],
      gradient: true, // Recommended
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Full API Access', 'Private Cloud Deployment', 'SSO & Audit Logs', 'Dedicated Support'],
      gradient: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${billing === 'monthly' ? 'text-brand-primary' : 'text-slate-500'}`}>Monthly</span>
            <button
              onClick={() => setBilling(b => b === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 bg-slate-200 dark:bg-slate-700 rounded-full relative transition-colors"
            >
              <motion.div
                animate={{ x: billing === 'monthly' ? 4 : 28 }}
                className="w-5 h-5 bg-white rounded-full shadow-md absolute top-1.5 left-0"
              />
            </button>
            <span className={`text-sm font-medium ${billing === 'yearly' ? 'text-brand-primary' : 'text-slate-500'}`}>Yearly (Save 20%)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-3xl border backdrop-blur-xl ${tier.gradient ? 'border-brand-primary shadow-2xl shadow-brand-primary/20 bg-white/10' : 'border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5'}`}
            >
               {tier.gradient && (
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-cyan to-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                   Most Popular
                 </div>
               )}

               <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">{tier.name}</h3>
               <div className="flex items-baseline mb-6">
                 <span className="text-4xl font-bold text-slate-900 dark:text-white">{tier.price === 'Custom' ? '' : '$'}{tier.price}</span>
                 {tier.price !== 'Custom' && <span className="text-slate-500 ml-2">/mo</span>}
               </div>

               <ul className="space-y-4 mb-8">
                 {tier.features.map((f, i) => (
                   <li key={i} className="flex items-center text-slate-600 dark:text-slate-300 text-sm">
                     <Check className="w-4 h-4 text-brand-primary mr-3" />
                     {f}
                   </li>
                 ))}
               </ul>

               <button className={`w-full py-3 rounded-xl font-semibold transition-all ${tier.gradient 
                 ? 'bg-brand-primary text-white hover:bg-blue-600 shadow-lg shadow-brand-primary/25' 
                 : 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20'}`}>
                 {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
               </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;