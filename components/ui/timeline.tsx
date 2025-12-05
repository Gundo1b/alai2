
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { TextRoll } from "../core/text-roll";
import { BackgroundLines } from "./background-lines";
import { EncryptedText } from "./encrypted-text";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <BackgroundLines className="w-full h-auto min-h-screen font-sans md:px-10 overflow-hidden flex flex-col justify-start">
      <div
        className="w-full relative z-20"
        ref={containerRef}
      >
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-slate-900 dark:text-white max-w-4xl font-display font-bold flex flex-wrap flex-col gap-2">
            <TextRoll className="inline-block text-2xl md:text-3xl text-slate-600 dark:text-slate-400">The Road to</TextRoll>
            <span className="text-brand-primary inline-block text-4xl md:text-6xl tracking-tight">
              <EncryptedText
                text="Unified Intelligence"
                revealedClassName="text-brand-primary font-bold"
                encryptedClassName="text-brand-primary/50"
                revealDelayMs={70}
              />
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base max-w-sm backdrop-blur-sm bg-white/5 p-2 rounded-lg">
            Our journey to build the ultimate creative workspace, from concept to reality.
          </p>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-slate-200 dark:border-slate-800">
                  <div className="h-4 w-4 rounded-full bg-brand-primary/20 border border-brand-primary p-2 animate-pulse" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-slate-400 dark:text-slate-500/50">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-500 dark:text-slate-500">
                  {item.title}
                </h3>
                <div className="text-slate-600 dark:text-slate-400">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-200 dark:via-slate-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-brand-accent via-brand-primary to-transparent from-[0%] via-[10%] rounded-full shadow-[0_0_15px_rgba(0,157,255,0.8)]"
            />
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
};
