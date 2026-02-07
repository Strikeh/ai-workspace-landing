"use client";

import Link from "next/link";
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
  const featureCategories = [
    {
      icon: FolderOpen,
      title: "ORGANIZATION",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "hover:border-orange-500/30",
      blobColor: "bg-orange-500/10",
      features: [
        "Folders (nested)",
        "Categories",
        "Tags & Colors",
        "Search & Filter",
        "Pin & Archive",
        "GPT Auto-Organize ✨",
      ],
    },
    {
      icon: Zap,
      title: "PERFORMANCE",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "hover:border-cyan-500/30",
      blobColor: "bg-cyan-500/10",
      features: [
        "Conversation Outline ✨",
        "Text Highlighting",
        "Thread Trimming",
        "73% Memory Saving",
        "Audio Notifications",
      ],
    },
    {
      icon: MessageSquare,
      title: "PROMPTS",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "hover:border-green-500/30",
      blobColor: "bg-green-500/10",
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
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "hover:border-purple-500/30",
      blobColor: "bg-purple-500/10",
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
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "hover:border-pink-500/30",
      blobColor: "bg-pink-500/10",
      features: [
        "Image Gallery",
        "Notes System",
        "Export (JSON/TXT/MD/PDF)",
        "Reference Chats",
        "Conversation Preview",
      ],
    },
    {
      icon: ShieldCheck,
      title: "PRIVACY",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "hover:border-blue-500/30",
      blobColor: "bg-blue-500/10",
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
    <section className="py-20 relative overflow-hidden bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Complete Feature Matrix
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Over 50+ features to supercharge your AI workflow
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative h-full bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 border border-white/5 ${category.borderColor} transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden`}
            >
              {/* Decorative blob background */}
              <div
                className={`absolute -top-24 -left-24 w-48 h-48 ${category.blobColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                  >
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3
                    className={`text-xl font-bold text-white group-hover:${category.color} transition-colors`}
                  >
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start gap-3 text-slate-400 group-hover:text-slate-300 transition-colors"
                    >
                      <div
                        className={`mt-1 p-0.5 rounded-full ${category.bgColor} ${category.color}`}
                      >
                        <CheckIcon className="h-3.5 w-3.5" />
                      </div>
                      {feature === "Text Highlighting" ||
                      feature === "Thread Trimming" ? (
                        <Link
                          href="/chatgpt-text-highlighter"
                          className={`hover:${category.color} hover:underline transition-colors`}
                        >
                          {feature}
                        </Link>
                      ) : feature === "Library (200+)" ||
                        feature === 'Quick "/" Access' ||
                        feature === "Templates {{}}" ||
                        feature === "History" ? (
                        <Link
                          href="/prompt-library"
                          className={`hover:${category.color} hover:underline transition-colors`}
                        >
                          {feature}
                        </Link>
                      ) : feature === "Folders (nested)" ||
                        feature === "Categories" ||
                        feature === "Tags & Colors" ||
                        feature === "Search & Filter" ||
                        feature === "Pin & Archive" ? (
                        <Link
                          href="/organization"
                          className={`hover:${category.color} hover:underline transition-colors`}
                        >
                          {feature}
                        </Link>
                      ) : (
                        <span>{feature}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Supported Platforms */}
        <div className="mt-16 text-center p-8 bg-slate-800/20 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">
              SUPPORTED PLATFORMS
            </h3>
          </div>
          <p className="text-slate-300 text-lg">ChatGPT • Claude.ai • Grok</p>
        </div>
      </div>
    </section>
  );
}
