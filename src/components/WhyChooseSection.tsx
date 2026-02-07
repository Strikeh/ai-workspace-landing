"use client";

import { useRef, useEffect } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./ScrollAnimation";

const features = [
  {
    title: "Stop Scrolling. Start Navigating.",
    description:
      "Lost in a 100-message conversation? Our Smart Conversation Outline gives you a floating sidebar with every message mapped out. Jump to any point with one click, filter by user or AI responses, and use keyboard shortcuts to navigate like a pro.",
    video: "/videos/organize like a pro.mp4",
  },
  {
    title: "Organize Like a Pro",
    description:
      "Structure your creative chaos with folders, tags, and categories. Custom GPT conversations are automatically organized into folders and linked to your active workspace. Whether you're juggling client projects or building a personal prompt library, everything stays searchable, sortable, and stupidly simple to use.",
    video: "/videos/organize like a pro.mp4",
  },
  {
    title: "Smarter Prompts with Variables",
    description:
      "Add dynamic variables to your prompts and reuse them across projects. Customize outputs on the fly without writing the same thing twice. One prompt, endless use cases.",
    video: "/videos/variables.mp4",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Why <span className="text-cyan-400">AI Workspace?</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Because your AI workflow shouldn't be a mess. Stop wrestling with
              spreadsheets and start building a second brain for your prompts.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <StaggerItem key={index} className="flex flex-col group">
              {/* Video Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900/50 border border-white/10 shadow-2xl mb-8 group-hover:border-cyan-500/30 group-hover:shadow-cyan-500/10 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent z-10" />
                <video
                  src={feature.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
