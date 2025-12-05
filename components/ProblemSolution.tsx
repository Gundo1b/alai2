import React from 'react';
import { motion } from 'framer-motion';
import { Layers, DollarSign, BrainCircuit, XCircle, CheckCircle2, MessageSquare, Terminal, Image, Clapperboard } from 'lucide-react';
import { BackgroundLines } from './ui/background-lines';

const ProblemSolution: React.FC = () => {
    const problems = [
        { icon: Layers, text: "Juggling 10+ disconnected tools" },
        { icon: BrainCircuit, text: "Constant context switching" },
        { icon: DollarSign, text: "Stacking subscription costs" },
        { icon: XCircle, text: "Fragmented creative workflow" },
    ];

    const solutions = [
        { title: "Chat Intelligence", icon: MessageSquare, desc: "Advanced reasoning across models", color: "from-blue-400 to-cyan-400" },
        { title: "Code Engine", icon: Terminal, desc: "Full-stack generation & debugging", color: "from-indigo-400 to-purple-400" },
        { title: "Visual Design", icon: Image, desc: "Photorealistic image synthesis", color: "from-pink-400 to-rose-400" },
        { title: "Cinematic Video", icon: Clapperboard, desc: "Text-to-Video production", color: "from-orange-400 to-red-400" },
    ];

    return (
        <div className="relative py-24 px-4 overflow-hidden">
            {/* PROBLEM SECTION */}
            <BackgroundLines className="h-screen w-full mb-32">
                <section className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
                            Creativity is <span className="text-red-500 line-through decoration-4 decoration-red-500/50">Fragmented</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                            The modern AI stack is broken. You're wasting time connecting dots instead of creating masterpieces.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {problems.map((prob, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 10 - 5 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="p-6 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                            >
                                <prob.icon className="w-10 h-10 text-red-500 mb-4" />
                                <span className="font-medium text-slate-800 dark:text-red-100">{prob.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </BackgroundLines>

            {/* SOLUTION SECTION */}
            <section className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm mb-4">
                        The Solution
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">
                        Integen <span className="text-gradient">Unifies Everything</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((sol, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`group relative p-8 rounded-3xl overflow-hidden glass-card cursor-pointer`}
                        >
                            {/* Gradient Border Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${sol.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sol.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <sol.icon className="text-white w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{sol.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{sol.desc}</p>

                                <div className="mt-auto pt-8 flex items-center text-sm font-semibold text-slate-400 group-hover:text-brand-primary transition-colors">
                                    Explore <CheckCircle2 className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProblemSolution;