import React from "react";
import { motion } from "framer-motion";

interface TextRollProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function TextRoll({
  children,
  className,
  delay = 0,
  duration = 0.5,
}: TextRollProps) {
  const text = typeof children === 'string' ? children : String(children || '');
  const letters = text.split("");

  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: duration,
            ease: [0.33, 1, 0.68, 1], // easeOutCubic
            delay: delay + i * 0.035,
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}