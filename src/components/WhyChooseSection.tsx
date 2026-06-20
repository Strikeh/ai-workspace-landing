"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./ScrollAnimation";
import { BorderBeam } from "./ui/border-beam";
import { FolderTree, Compass, Wand2 } from "lucide-react";

const pillars = [
  {
    title: "Organize everything",
    description:
      "Nested folders, smart tags, color categories and full-text search across every chat. Bulk-archive or delete hundreds at once, and keep clients and projects apart with separate workspaces.",
    icon: FolderTree,
    color: "text-cyan-400",
    glow: "bg-cyan-500/20",
    border: "hover:border-cyan-500/40",
    beamFrom: "#06b6d4",
    beamTo: "#3b82f6",
  },
  {
    title: "Structure & navigate",
    description:
      "Fly through long chats with the Smart Conversation Outline, highlight key answers in seven colors, map branches in Tangent View, and browse every generated image in one gallery. Thread trimming keeps it all fast.",
    icon: Compass,
    color: "text-violet-400",
    glow: "bg-violet-500/20",
    border: "hover:border-violet-500/40",
    beamFrom: "#8b5cf6",
    beamTo: "#d946ef",
  },
  {
    title: "Reuse & export",
    description:
      "Build a prompt library with reusable templates, sharpen drafts with the Prompt Optimizer, and drop in prompts with a slash command. Export any conversation to Markdown, PDF, JSON or TXT — your data, on your device.",
    icon: Wand2,
    color: "text-emerald-400",
    glow: "bg-emerald-500/20",
    border: "hover:border-emerald-500/40",
    beamFrom: "#10b981",
    beamTo: "#06b6d4",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ambient background video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          src="/videos/contact-ambient-bg.mp4"
          poster="/videos/contact-ambient-bg-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/45 to-slate-950/90" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
              Everything in one place
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              One extension.{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Your whole AI workflow.
              </span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Organize, structure, and export everything you do with ChatGPT,
              Claude and Grok — turning a messy chat list into a system that
              actually scales with you.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <StaggerItem key={index} className="group h-full">
              <div
                className={`relative h-full overflow-hidden rounded-2xl border border-white/10 ${pillar.border} bg-slate-900/60 backdrop-blur-md p-8 transition-all duration-500 hover:-translate-y-1.5`}
              >
                <BorderBeam
                  size={200}
                  duration={9}
                  delay={index * 3}
                  colorFrom={pillar.beamFrom}
                  colorTo={pillar.beamTo}
                />

                {/* Icon */}
                <div className="relative mb-6 w-fit">
                  <div
                    className={`absolute -inset-3 ${pillar.glow} blur-2xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <pillar.icon className={`w-7 h-7 ${pillar.color}`} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
