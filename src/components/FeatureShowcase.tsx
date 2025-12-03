"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Folder,
  Palette,
  Tag,
  Search,
  Pin,
  Zap,
  Trash2,
  Highlighter,
  Scissors,
  Rocket,
  Bell,
  Compass,
  Library,
  Wrench,
  Link,
  History,
  Image as ImageIcon,
  FileText,
  Download,
  Eye,
  FolderOpen,
  MessageSquare,
  Sparkles,
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

type Tab = "organization" | "performance" | "prompts" | "advanced";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  video?: string;
  image?: string;
  isWip?: boolean;
}

const featureData: Record<Tab, { features: Feature[] }> = {
  organization: {
    features: [
      {
        icon: Folder,
        title: "Unlimited nested folders with drag & drop",
        description: "Create a hierarchy that matches your workflow",
        video: "https://www.youtube.com/embed/pDZD1maOWBA",
      },
      {
        icon: Palette,
        title: "Color-coded categories with custom icons",
        description: "Visual organization at a glance",
        image: "/images/carousel/BrandBird 2025-11-20 12.01.36.png",
      },
      {
        icon: Tag,
        title: "Multi-tag system with custom colors",
        description: "Tag conversations with multiple labels",
        image: "/images/carousel/BrandBird 2025-11-20 12.01.58.png",
      },
      {
        icon: Search,
        title: "Advanced search across all conversations",
        description: "Find any chat instantly with powerful filters",
        image: "/images/carousel/BrandBird 2025-11-20 12.04.10.png",
      },
      {
        icon: Pin,
        title: "Pin important chats to the top",
        description: "Keep your most-used conversations accessible",
        image: "/images/carousel/BrandBird 2025-11-20 19.37.47.png",
      },
      {
        icon: Zap,
        title: "Bulk operations (delete, archive, categorize)",
        description: "Manage hundreds of chats in seconds",
        image: "/images/carousel/BrandBird 2025-11-20 19.38.41.png",
      },
      {
        icon: Trash2,
        title: "Auto-delete old conversations",
        description: "Keep your workspace clean automatically",
        image: "/images/carousel/BrandBird 2025-11-20 19.39.10.png",
      },
    ],
  },
  performance: {
    features: [
      {
        icon: Highlighter,
        title: "Text Highlighting",
        description:
          "Mark important parts of conversations for quick reference",
        video: "https://www.youtube.com/embed/L3EXlMBB1zI",
      },
      {
        icon: Scissors,
        title: "Thread Trimming",
        description: "Auto-hide old messages in long conversations",
        image: "/images/carousel/BrandBird 2025-11-20 19.39.38.png",
      },
      {
        icon: Rocket,
        title: "73% Memory Saving",
        description: "Dramatically reduce browser memory usage",
        image: "/images/carousel/BrandBird 2025-11-20 19.40.43.png",
      },
      {
        icon: Bell,
        title: "Audio Notifications",
        description: "Get notified when AI responses are ready",
        image: "/images/carousel/BrandBird 2025-11-20 19.43.13.png",
      },
      {
        icon: Compass,
        title: "Smart Navigation",
        description: "Jump between highlighted sections instantly",
        image: "/images/carousel/BrandBird 2025-11-20 19.46.23.png",
      },
    ],
  },
  prompts: {
    features: [
      {
        icon: Library,
        title: "Library (200+)",
        description: "Save unlimited prompts with organization",
        image: "/images/prompt-library.png",
      },
      {
        icon: Zap,
        title: 'Quick "/" Access',
        description: "Type / to instantly insert saved prompts",
        image: "/images/prompt-quick-access.png",
      },
      {
        icon: Wrench,
        title: "Templates {{}}",
        description: "Use variables in prompts for dynamic content",
        image: "/images/prompt-templates.png",
      },
      {
        icon: Link,
        title: "Chains",
        description: "Link prompts together for complex workflows",
        image: "/images/prompt-chains.png",
        isWip: true,
      },
      {
        icon: History,
        title: "History",
        description: "Track all your prompt usage and iterations",
        image: "/images/prompt-history.png",
      },
    ],
  },
  advanced: {
    features: [
      {
        icon: ImageIcon,
        title: "Image Gallery",
        description: "Browse all images from your conversations",
        image: "/images/image-gallery.png",
      },
      {
        icon: FileText,
        title: "Notes System",
        description: "Add notes to any conversation",
        image: "/images/carousel/BrandBird 2025-11-20 19.48.31.png",
      },
      {
        icon: Download,
        title: "Export (JSON/TXT/MD)",
        description: "Export conversations in multiple formats",
        image: "/images/print.png",
      },
      {
        icon: Link,
        title: "Reference Chats",
        description: "Link related conversations together",
        image: "/images/dashboard.png",
      },
      {
        icon: Eye,
        title: "Conversation Preview",
        description: "Quick preview without opening the chat",
        image: "/images/gallery-preview.svg",
      },
    ],
  },
};

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState<Tab>("organization");
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "organization", label: "Organization", icon: FolderOpen },
    { id: "performance", label: "Performance", icon: Zap },
    { id: "prompts", label: "Prompts", icon: MessageSquare },
    { id: "advanced", label: "Advanced", icon: Sparkles },
  ];

  const currentData = featureData[activeTab];
  const activeFeature = currentData.features[activeFeatureIndex];

  const handleTabChange = (tabId: Tab) => {
    setActiveTab(tabId);
    setActiveFeatureIndex(0);
    setIsLightboxOpen(false);
  };

  return (
    <div className="space-y-12">
      {/* Lightbox Modal */}
      {isLightboxOpen && activeFeature.image && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200 cursor-pointer"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-7xl w-full max-h-[90vh] aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={activeFeature.image}
              alt={`${activeFeature.title} Full Preview`}
              fill
              className="object-contain"
              quality={100}
            />
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Tabs - Premium Pill Design */}
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap gap-1 p-1.5 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`
                flex-shrink-0 snap-center
                relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] border border-cyan-500/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                }
              `}
            >
              <span className="flex items-center gap-2">
                <tab.icon
                  className={`w-4 h-4 ${
                    activeTab === tab.id ? "scale-110 transition-transform" : ""
                  }`}
                />
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
        {/* Visual (Video or Image) - Mobile: Top, Desktop: Right/Sticky */}
        <div className="relative lg:sticky lg:top-24 lg:order-last order-first">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-[2rem] blur-2xl opacity-0 lg:opacity-100 transition-opacity duration-500" />

          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/90 shadow-2xl backdrop-blur-sm">
            {/* Browser Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="ml-4 flex-1 flex justify-center">
                <div className="px-3 py-1 rounded-md bg-black/20 border border-white/5 text-[10px] text-slate-500 font-mono truncate max-w-[150px]">
                  ai-workspace.extension
                </div>
              </div>
            </div>

            {/* Media Content */}
            <div className="relative aspect-video bg-black/50 group/media">
              {activeFeature.video ? (
                <iframe
                  key={activeFeature.video}
                  src={`${activeFeature.video}?autoplay=0&controls=1&rel=0&modestbranding=1&loop=1`}
                  title={`${activeFeature.title} Demo`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : activeFeature.image ? (
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setIsLightboxOpen(true)}
                >
                  <Image
                    key={activeFeature.image}
                    src={activeFeature.image}
                    alt={`${activeFeature.title} Screenshot`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/media:scale-105"
                  />
                  {/* Zoom Hint Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/media:bg-black/20 transition-colors duration-300">
                    <div className="opacity-0 group-hover/media:opacity-100 transform translate-y-4 group-hover/media:translate-y-0 transition-all duration-300 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium border border-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                      Click to enlarge
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50">
                  <div className="text-center space-y-2">
                    <span className="text-4xl">🚧</span>
                    <p className="text-slate-400 font-medium">
                      Preview coming soon
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <p className="mt-6 text-slate-500 text-sm text-center font-medium lg:hidden">
            <span className="inline-block animate-pulse mr-2">👇</span>
            Select a feature below to update preview
          </p>
          <p className="mt-6 text-slate-500 text-sm text-center font-medium hidden lg:block">
            <span className="inline-block animate-pulse mr-2">👆</span>
            Select a feature to see it in action
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-white tracking-tight">
              {tabs.find((t) => t.id === activeTab)?.label}
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
          </div>

          <div className="grid gap-4">
            {currentData.features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeatureIndex(index)}
                className={`group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 border text-left w-full cursor-pointer
                  ${
                    activeFeatureIndex === index
                      ? "bg-white/10 border-cyan-500/30 shadow-lg shadow-cyan-500/5"
                      : "hover:bg-white/5 border-transparent hover:border-white/5"
                  }
                `}
              >
                <div
                  className={`
                  flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 border
                  ${
                    activeFeatureIndex === index
                      ? "bg-cyan-500/20 border-cyan-500/30 scale-110"
                      : "bg-slate-800/50 border-white/5 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 group-hover:scale-110"
                  }
                `}
                >
                  <feature.icon
                    className={`w-6 h-6 transition-colors ${
                      activeFeatureIndex === index
                        ? "text-cyan-400"
                        : "text-slate-400 group-hover:text-cyan-400"
                    }`}
                  />
                </div>
                <div className="pt-1 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4
                      className={`font-semibold transition-colors ${
                        activeFeatureIndex === index
                          ? "text-cyan-400"
                          : "text-white group-hover:text-cyan-400"
                      }`}
                    >
                      {feature.title}
                    </h4>
                    {feature.isWip && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        WIP
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm leading-relaxed transition-colors ${
                      activeFeatureIndex === index
                        ? "text-slate-300"
                        : "text-slate-400 group-hover:text-slate-300"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
