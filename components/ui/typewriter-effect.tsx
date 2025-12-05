"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Word {
    text: string;
    className?: string;
}

interface TypewriterEffectSmoothProps {
    words: Word[];
    cursorClassName?: string;
    className?: string;
    delay?: number;
}

export function TypewriterEffectSmooth({
    words,
    cursorClassName = "ml-[1px] h-4 w-1 md:h-5 md:w-1.5 bg-slate-700 dark:bg-slate-200 inline-block animate-pulse",
    className,
    delay = 2000,
}: TypewriterEffectSmoothProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseDuration = delay;

        if (!isDeleting && textIndex < currentWord.text.length) {
            // Typing
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + currentWord.text[textIndex]);
                setTextIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(timeout);
        }

        if (!isDeleting && textIndex === currentWord.text.length) {
            // Pause before deleting
            const timeout = setTimeout(() => {
                setIsDeleting(true);
            }, pauseDuration);

            return () => clearTimeout(timeout);
        }

        if (isDeleting && textIndex > 0) {
            // Deleting
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
                setTextIndex((prev) => prev - 1);
            }, deletingSpeed);

            return () => clearTimeout(timeout);
        }

        if (isDeleting && textIndex === 0) {
            // Move to next word
            const timeout = setTimeout(() => {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                setTextIndex(0);
            }, 500);

            return () => clearTimeout(timeout);
        }
    }, [textIndex, isDeleting, currentWordIndex, words, delay]);

    return (
        <div className={`font-mono text-4xl md:text-6xl lg:text-7xl font-bold ${className}`}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className={words[currentWordIndex].className}
                >
                    {displayedText}
                    <span className={cursorClassName} />
                </motion.span>
            </AnimatePresence>
        </div>
    );
}
