
import React from "react";
import { Timeline } from "./ui/timeline";
import { Code2, MessageSquare, Sparkles, Zap } from "lucide-react";

export function TimelineSection() {
  const data = [
    {
      title: "Genesis",
      content: (
        <div className="glass-card p-6 rounded-2xl border border-white/10">
          <p className="text-base md:text-lg font-medium text-slate-900 dark:text-white mb-4">
            The concept of Unified Intelligence
          </p>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-8">
            We identified the fragmentation in the AI landscape. Developers and creatives were switching between 5+ tools daily. We started building the core engine to unify text, code, and image generation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-brand-primary/10 rounded-lg p-4 flex flex-col items-center justify-center gap-2 aspect-video border border-brand-primary/20">
              <MessageSquare className="text-brand-primary w-8 h-8" />
              <span className="text-xs font-mono text-brand-primary">Chat Engine</span>
            </div>
            <div className="bg-brand-accent/10 rounded-lg p-4 flex flex-col items-center justify-center gap-2 aspect-video border border-brand-accent/20">
              <Code2 className="text-brand-accent w-8 h-8" />
              <span className="text-xs font-mono text-brand-accent">Code Interpreter</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Alpha",
      content: (
        <div className="glass-card p-6 rounded-2xl border border-white/10">
          <p className="text-base md:text-lg font-medium text-slate-900 dark:text-white mb-4">
            Visual Intelligence Integration
          </p>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-8">
            Integrated state-of-the-art diffusion models directly into the chat workflow. Users could now describe UI components and generate assets in real-time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-brand-cyan/20 to-brand-primary/20 rounded-lg p-4 aspect-video border border-white/10 flex items-center justify-center">
              <Sparkles className="text-white w-10 h-10 drop-shadow-lg" />
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 aspect-video border border-white/10 flex flex-col justify-center space-y-2">
              <div className="h-2 w-3/4 bg-slate-700 rounded animate-pulse" />
              <div className="h-2 w-1/2 bg-slate-700 rounded animate-pulse" />
              <div className="h-2 w-full bg-slate-700 rounded animate-pulse" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Future",
      content: (
        <div className="glass-card p-6 rounded-2xl border border-white/10">
          <p className="text-base md:text-lg font-medium text-slate-900 dark:text-white mb-4">
            The path to AGI Workspaces
          </p>
          <div className="mb-8">

            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 mb-2">
              <Zap className="w-4 h-4 text-brand-primary" /> Autonomous Agents
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 mb-2">
              <Zap className="w-4 h-4 text-brand-primary" /> Enterprise Private Cloud
            </div>
          </div>
          <div className="h-32 w-full rounded-lg bg-gradient-to-r from-brand-cyan via-brand-primary to-brand-accent opacity-80 blur-2xl transform scale-90" />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
