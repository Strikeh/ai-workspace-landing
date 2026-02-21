"use client";

import { useRef, useEffect } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./ScrollAnimation";
import { Briefcase, FolderTree, Sparkles } from "lucide-react";

const features = [
  {
    title: "Separate Contexts. Stay Focused.",
    description:
      "Create unlimited workspaces for different clients, projects, or personal use. Each workspace has its own conversations, folders, and prompts. Switch between them instantly \u2013 zero mental clutter, complete context isolation.",
    icon: Briefcase,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
  {
    title: "Organize Each Workspace",
    description:
      "Inside every workspace: nested folders, smart tags, and powerful search. Custom GPT conversations are automatically organized and linked. Whether you're managing 5 clients or 50 side projects, everything stays structured and findable.",
    icon: FolderTree,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    title: "Reuse Prompts with Variables",
    description:
      "Build a prompt library with dynamic variables. Customize outputs on the fly without rewriting. One prompt template, endless use cases across all your workspaces.",
    icon: Sparkles,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
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
              One ChatGPT.{" "}
              <span className="text-cyan-400">Multiple Workspaces.</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              For freelancers, consultants, and developers who need to separate
              client work, side projects, and personal chats \u2013 without the
              chaos.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <StaggerItem key={index} className="flex flex-col group">
              {/* Icon Container */}
              <div
                className={`w-16 h-16 rounded-2xl ${feature.bgColor} border ${feature.borderColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}
              >
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3
                  className={`text-2xl font-bold text-white mb-4 group-hover:${feature.color} transition-colors`}
                >
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
