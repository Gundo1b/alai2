import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Code, ImageIcon, Video } from 'lucide-react';

const features = [
  {
    name: 'Chat',
    description: 'Engage in natural conversations, ask complex questions, and get instant, intelligent responses. Powered by the most advanced language models.',
    icon: <MessageSquare className="w-12 h-12 text-blue-500" />,
  },
  {
    name: 'Code',
    description: 'Generate, debug, and optimize code in any language. From simple scripts to complex algorithms, boost your productivity and write better code, faster.',
    icon: <Code className="w-12 h-12 text-green-500" />,
  },
  {
    name: 'Image Generation',
    description: 'Bring your ideas to life with stunning AI-generated images. Describe your vision in plain text and watch as it\'s transformed into a visual masterpiece.',
    icon: <ImageIcon className="w-12 h-12 text-purple-500" />,
  },
  {
    name: 'Video Generation',
    description: 'Create compelling video content from text prompts. Produce anything from short clips to full-length narratives with our powerful video generation tools.',
    icon: <Video className="w-12 h-12 text-red-500" />,
  },
];

const ExplanationSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">What you can do with Integen AI</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Explore the powerful capabilities of our creative intelligence workspace.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="p-8 text-center bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center items-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplanationSection;
