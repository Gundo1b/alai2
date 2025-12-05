import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section 
      className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          {/* Pill Badge */}
          <motion.span 
            className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            New • Welcome to Integen AI
          </motion.span>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            {"Welcome to Integen AI – your all-in-one creative intelligence workspace.".split(" ").map((word, index) => (
              <motion.span
                key={word + index}
                initial={{ color: "#4B5563" }} // Default text color (gray-600, common for light/dark)
                animate={{ color: ["#4B5563", "#2563EB", "#4B5563"] }} // Animate to blue-600 and back
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.1,
                }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheading */}
          <motion.p 
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Integen AI brings chat, code, image, and video together in one unified platform. Orchestrated by the best
            LLMs, you get faster ideas, cleaner code, smarter visuals, and smoother workflows—without jumping between apps.
          </motion.p>

          {/* Feature List */}
          <motion.div 
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-gray-700 dark:text-gray-400 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <span className="flex items-center gap-1">Chat & reasoning</span>
            <span className="flex items-center gap-1">Code & automation</span>
            <span className="flex items-center gap-1">Image & video generation</span>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <button className="px-6 py-3 rounded-md text-white font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg">
              Join Early Access
            </button>
            <button className="px-6 py-3 rounded-md text-gray-800 dark:text-gray-200 font-semibold border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
              See how it works
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.p 
            className="mt-8 text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Built for creators, students, developers, and teams.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;