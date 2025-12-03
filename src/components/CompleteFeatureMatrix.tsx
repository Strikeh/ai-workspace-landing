"use client";

import { useState } from "react";
import {
  FolderOpen,
  Zap,
  MessageSquare,
  Palette,
  Sparkles,
  ShieldCheck,
  Globe,
} from "lucide-react";

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function CompleteFeatureMatrix() {
  const [isExpanded, setIsExpanded] = useState(false);

  const featureCategories = [
    {
      icon: FolderOpen,
      title: "ORGANIZATION",
      features: [
        "Folders (nested)",
        "Categories",
        "Tags & Colors",
        "Search & Filter",
        "Pin & Archive",
      ],
    },
    {
      icon: Zap,
      title: "PERFORMANCE",
      features: [
        "Text Highlighting",
        "Thread Trimming",
        "73% Memory Saving",
        "Audio Notifications",
        "Smart Navigation",
      ],
    },
    {
      icon: MessageSquare,
      title: "PROMPTS",
      features: [
        "Library (200+)",
        'Quick "/" Access',
        "Templates {{}}",
        "Chains",
        "History",
      ],
    },
    {
      icon: Palette,
      title: "CUSTOMIZATION",
      features: [
        "Premium Themes",
        "Dark Mode",
        "Custom Colors",
        "Layout Adjustment",
        "Multi-language UI",
      ],
    },
    {
      icon: Sparkles,
      title: "ADVANCED",
      features: [
        "Image Gallery",
        "Notes System",
        "Export (JSON/TXT/MD)",
        "Reference Chats",
        "Conversation Preview",
      ],
    },
    {
      icon: ShieldCheck,
      title: "PRIVACY",
      features: [
        "100% Local-first",
        "Encrypted Vaults",
        "Zero Tracking",
        "GDPR Compliant",
        "No Data Collection",
      ],
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Complete Feature Matrix
          </h2>
          <p className="text-slate-400 text-lg">
            Over 50+ features to supercharge your AI workflow
          </p>
        </div>

        {/* Expand/Collapse Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-white/10 text-white font-semibold transition-all cursor-pointer"
          >
            <svg
              className={`w-5 h-5 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            {isExpanded ? "Hide all features" : "See all 50+ features"}
          </button>
        </div>

        {/* Expandable Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {featureCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-lg font-bold text-cyan-400">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start gap-2 text-slate-300"
                    >
                      <CheckIcon className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Supported Platforms */}
          <div className="mt-12 text-center p-8 bg-slate-800/20 rounded-2xl border border-white/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">
                SUPPORTED PLATFORMS
              </h3>
            </div>
            <p className="text-slate-300 text-lg">ChatGPT • Claude.ai • Grok</p>
          </div>
        </div>
      </div>
    </section>
  );
}
