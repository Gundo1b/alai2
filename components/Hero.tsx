import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Code2, Image as ImageIcon, Video, Sparkles, Cpu } from 'lucide-react';
import { LogoIcon } from './Logo';
import { CardDemo } from './ui/CardDemo';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  // Apply parallax to the entire visual block so pieces don't drift apart
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  const tools = [
    { icon: MessageCircle, color: '#64E1FF', label: 'Chat' },
    { icon: Code2, color: '#009DFF', label: 'Code' },
    { icon: ImageIcon, color: '#A78BFA', label: 'Image' },
    // Removed Voice as requested
    { icon: Video, color: '#F472B6', label: 'Video' },
  ];

  return (
    <section ref={containerRef} className="relative flex flex-col pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-8 sm:pb-12 md:pb-16 overflow-hidden h-auto">

      <div className="container mx-auto z-10 relative px-2 sm:px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-8 items-start">

          {/* Row/Col 1: Text Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-1">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-display font-bold mb-4 tracking-tight text-slate-900 dark:text-white leading-[1.1] flex flex-wrap justify-center lg:justify-start gap-x-1 sm:gap-x-2">
              <div className="flex flex-col items-center lg:items-start">
                <TypewriterEffectSmooth
                  words={[
                    { text: "One" },
                    { text: "Conversation." },
                  ]}
                  className="text-4xl md:text-6xl lg:text-7xl"
                />
                <span className="text-gradient block">
                  <TypewriterEffectSmooth
                    words={[
                      { text: "Infinite" },
                      { text: "Possibilities.", className: "text-gradient" },
                    ]}
                    delay={2000}
                    className="text-4xl md:text-6xl lg:text-7xl"
                  />
                </span>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xs sm:text-base md:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed max-w-2xl lg:max-w-xl backdrop-blur-sm rounded-lg"
            >
              Unify chat, code, image, and video into a single seamless workspace.
              Stop switching context. Start creating the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <button className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-brand-primary hover:bg-blue-600 text-white font-semibold text-sm sm:text-base shadow-[0_0_20px_rgba(0,157,255,0.4)] hover:shadow-[0_0_30px_rgba(0,157,255,0.6)] transition-all transform hover:-translate-y-1">
                Join Early Access
              </button>
              <button className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-brand-primary text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base transition-all hover:bg-slate-100 dark:hover:bg-slate-800 backdrop-blur-sm bg-white/5">
                Watch the Demo
              </button>
            </motion.div>

            {/* LLMs Section using CardDemo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-full max-w-md lg:max-w-none"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Sparkles size={14} className="text-brand-primary" />
                </motion.div>
                <span>Powered by best-in-class models</span>
              </div>

              {/* Integrated CardDemo */}
              <div className="relative w-full h-[150px] sm:h-[180px] md:h-[220px] lg:h-[250px] overflow-visible flex-shrink-0">
                <CardDemo />
              </div>
            </motion.div>
          </div>

          {/* Row/Col 2: Visual (Orbit + Logo) */}
          <div className="relative order-2 flex justify-center items-center h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-full flex-shrink-0">
            {/* 
                  We use a fixed size container (320px) to match the radius math (160px).
                  We use CSS transforms (scale) to make it responsive, ensuring icons stay perfectly on the ring.
                  We apply the parallax y2 to this whole wrapper so everything stays locked together.
              */}
            <motion.div
              style={{ y: y2 }}
              className="relative flex items-center justify-center w-[320px] h-[320px] scale-40 sm:scale-60 md:scale-80 lg:scale-100 xl:scale-125"
            >
              {/* Orbit Ring */}
              <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-40">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full rounded-full border border-dashed border-brand-primary/30 relative"
                >
                  {tools.map((tool, i) => {
                    const angle = (i * 360) / tools.length;
                    // Radius must match half the container width (160px) for icons to sit on the line
                    const radius = 160;

                    return (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 -ml-6 -mt-6"
                        style={{
                          transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                        }}
                      >
                        <motion.div
                          animate={{
                            y: [0, -8, 0],
                            scale: [1, 1.1, 1],
                            boxShadow: [
                              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                              `0 0 15px ${tool.color}60`,
                              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.75, // Staggered delay
                            ease: "easeInOut"
                          }}
                          className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900 border border-white/20 relative z-10"
                        >
                          <tool.icon style={{ color: tool.color }} size={24} />
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Central 3D Logo */}
              <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-cyan to-brand-accent opacity-50 blur-xl animate-pulse"></div>
                <div className="absolute inset-4 rounded-3xl bg-white dark:bg-black border border-white/50 dark:border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(100,225,255,0.4)] flex items-center justify-center z-10">
                  <LogoIcon className="w-24 h-24 md:w-32 md:h-32" />
                </div>
                <motion.div
                  animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-full border-t border-r border-brand-cyan/50"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Gradient Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-light dark:from-brand-dark to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
