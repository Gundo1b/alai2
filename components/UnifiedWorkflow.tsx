import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Image as ImageIcon, Video, Bot, Sparkles } from 'lucide-react';

import { RevealText } from './ui/reveal-text';
import WaveText from 'components/smoothui/components/wave-text';

const UnifiedWorkflow: React.FC = () => {
    return (
        <section className="relative w-full bg-slate-50 dark:bg-slate-950 py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
                        <div className="text-slate-900 dark:text-white mb-2">
                            <RevealText
                                direction="up"
                                delay={0}
                            >
                                One Conversation.
                            </RevealText>
                        </div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-primary">
                            <RevealText
                                direction="up"
                                delay={300}
                            >
                                Infinite Possibilities.
                            </RevealText>
                        </div>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                        Why switch tools? Access every top-tier model and generate any media type without ever leaving the chat.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Feature 1: Multi-Model */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative p-8 rounded-3xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 backdrop-blur-sm hover:border-brand-primary/50 transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                                <Bot size={32} />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                Multi-Model Intelligence
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Seamlessly switch between GPT-4, Claude 3, and Gemini within a single conversation. Use the best brain for every specific task.
                            </p>

                            <div className="flex items-center gap-3">
                                {['GPT-4', 'Claude 3', 'Gemini'].map((model, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                        {model}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 2: Multi-Modal */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="group relative p-8 rounded-3xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 backdrop-blur-sm hover:border-brand-primary/50 transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                                <Sparkles size={32} />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                Multi-Modal Creation
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Don't just talk. Create. Generate high-fidelity images and cinematic videos instantly alongside your code and text.
                            </p>

                            <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                                <div className="flex items-center gap-2">
                                    <MessageSquare size={16} /> Chat
                                </div>
                                <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                <div className="flex items-center gap-2 text-purple-500">
                                    <ImageIcon size={16} /> Image
                                </div>
                                <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                <div className="flex items-center gap-2 text-pink-500">
                                    <Video size={16} /> Video
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default UnifiedWorkflow;
