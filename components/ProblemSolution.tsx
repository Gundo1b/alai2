import React from 'react';
import { motion } from 'framer-motion';
import { Layers, DollarSign, BrainCircuit, XCircle, CheckCircle2, MessageSquare, Terminal, Image, Clapperboard } from 'lucide-react';

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
            <div className="py-8 bg-red-50/95 dark:bg-red-900/30 rounded-3xl mx-4 mb-32 relative z-10">
                <section className="max-w-7xl mx-auto">
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
            </div>

            {/* SOLUTION SECTION */}
            <section className="max-w-7xl mx-auto relative py-8 bg-gradient-to-b from-slate-50/95 to-white/95 dark:from-slate-950/30 dark:to-black/30 backdrop-blur-sm rounded-3xl mx-4 -mt-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm mb-4"
                    >
                        The Solution
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6"
                    >
                        Integen <span className="text-gradient">Unifies Everything</span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.6
                            }
                        }
                    }}
                >
                    {solutions.map((sol, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 }
                            }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                            className={`group relative p-8 rounded-3xl overflow-hidden glass-card cursor-pointer`}
                        >
                            {/* Gradient Border Effect */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${sol.color} opacity-0`}
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.15 }}
                                transition={{ duration: 0.3 }}
                            />

                            <div className="relative z-10 flex flex-col h-full">
                                <motion.div
                                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sol.color} flex items-center justify-center mb-6 shadow-lg`}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <sol.icon className="text-white w-7 h-7" />
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                                    className="text-2xl font-bold text-slate-900 dark:text-white mb-2"
                                >
                                    {sol.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.3 }}
                                    className="text-slate-600 dark:text-slate-400"
                                >
                                    {sol.desc}
                                </motion.p>

                                <motion.div
                                    className="mt-auto pt-8 flex items-center text-sm font-semibold text-slate-400 group-hover:text-brand-primary transition-colors"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.4 }}
                                >
                                    Explore <CheckCircle2 className="w-4 h-4 ml-2" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
};

export default ProblemSolution;
