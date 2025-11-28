"use client";

import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { useEffect, useState } from "react";
import LogoCarousel from "@/components/LogoCarousel";
import DemoModal from "@/components/DemoModal";
import DemoHubButton from "@/components/DemoHubButton";

const browserInstallButtons = [
  {
    name: "Chrome",
    icon: "/images/browsers/chrome.svg",
    url: "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg",
    primary: true,
  },
  {
    name: "Edge",
    icon: "/images/browsers/edge.svg",
    url: "https://microsoftedge.microsoft.com/addons/detail/aiworkspace-pro/kbdckiagphjeldfdfeobdhcajkpidong",
  },
  {
    name: "Firefox",
    icon: "/images/browsers/firefox.svg",
    url: "https://addons.mozilla.org/en-GB/firefox/addon/aiworkspace-pro/",
  },
];

// Browser detection function
function detectBrowser() {
  if (typeof window === "undefined") return "chrome";

  const userAgent = navigator.userAgent.toLowerCase();

  // Check for Edge (must be before Chrome check as Edge includes Chrome in UA)
  if (userAgent.includes("edg/") || userAgent.includes("edge/")) {
    return "edge";
  }

  // Check for Firefox
  if (userAgent.includes("firefox")) {
    return "firefox";
  }

  // Default to Chrome (includes Chrome, Brave, Opera, and other Chromium browsers)
  return "chrome";
}

// Get install URL based on detected browser
function getBrowserInstallUrl() {
  const browser = detectBrowser();

  switch (browser) {
    case "edge":
      return "https://microsoftedge.microsoft.com/addons/detail/aiworkspace-pro/kbdckiagphjeldfdfeobdhcajkpidong";
    case "firefox":
      return "https://addons.mozilla.org/en-GB/firefox/addon/aiworkspace-pro/";
    case "chrome":
    default:
      return "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";
  }
}

const showcases = [
  {
    title: "Prompt Vault for instant recall",
    description:
      "Keep every ChatGPT prompt at your fingertips with a structured, searchable vault. Organize prompts into categories, mark favorites, or pin them for quick access — all locally stored and fully private.",
    highlights: [
      "Bulk actions to edit, archive, or link prompts in seconds",
      "Advanced search with filters and real-time results",
      "Favorites & pins for faster workflows across projects",
    ],
    image: "/images/prompts-overview.png",
    imageAlt: "AI Workspace Prompt Vault overview",
  },
  {
    title: "Image Gallery for your ChatGPT visuals",
    description:
      "Browse every image used or generated in your conversations — all in one secure gallery. Jump back into the original chat with one click, download files instantly, or organize them into folders for later use.",
    highlights: [
      "Unified view of local and generated images",
      "Direct links back to the source conversation",
      "Quick download, export, and organization tools",
    ],
    image: "/images/image-gallery.png",
    imageAlt: "AI Workspace image gallery overview",
  },
  {
    title: "Discover and launch custom GPTs",
    badge: "New",
    description:
      "Browse a curated store of GPTs across categories like writing, productivity, research, and more. Open any GPT to view details, explore its capabilities, and start a conversation instantly — all directly inside AI Workspace.",
    highlights: [
      "Filter by featured, trending, or category-specific GPTs",
      "Quick detail view with direct launch into a new chat",
      "Deep links keep every GPT accessible in one secure hub",
    ],
    image: "/images/gpt-store.png",
    imageAlt: "AI Workspace GPT Store overview",
  },
  {
    title: "Analytics Dashboard (beta)",
    badge: "Beta",
    description:
      "Get insights into how you work with prompts, vaults, and AI platforms. Track usage trends, export activity, and performance metrics — all processed locally for full privacy. This dashboard is still a work in progress, but already gives a preview of upcoming features like platform distribution, export statistics, and system health monitoring.",
    highlights: [
      "Local-first analytics, no external tracking",
      "Usage breakdown by prompts, vaults, and exports",
      "Early preview of performance & reliability stats",
    ],
    image: "/images/dashboard.png",
    imageAlt: "AI Workspace Analytics Dashboard (beta)",
  },
  {
    title: "Enhanced experience inside ChatGPT",
    badge: "Live",
    description:
      "AI Workspace extends ChatGPT with a powerful overlay that adds structure, shortcuts, and insights — without disrupting your flow. Organize conversations, track stats, and access tools directly where you work.",
    highlights: [
      "Sidebar with custom categories and vaults",
      "Floating action menu for instant access to core tools",
      "One-click print, message stats, and advanced export options",
    ],
    image: "/images/carousel/BrandBird 2025-11-20 11.36.08.png",
    imageAlt: "AI Workspace features injected into chatgpt.com UI",
  },
];

const testimonials = [
  {
    quote:
      "AI Workspace is exceptional! The prompt library and folder organization have completely transformed how I work with ChatGPT. Everything I need is instantly accessible.",
    name: "Sarah Mitchell",
    role: "Product Designer",
    date: "Nov 15, 2024",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "I love everything about AI Workspace. It really helps keep my ChatGPT conversations organized and makes me so much more efficient and effective.",
    name: "David Chen",
    role: "Software Engineer",
    date: "Nov 10, 2024",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "This extension is the BEST! The ability to search through all my previous conversations and reuse prompts saves me hours every week. Absolutely essential.",
    name: "Emma Rodriguez",
    role: "Content Manager",
    date: "Oct 28, 2024",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "AI Workspace has become my default tool for managing my ChatGPT workflow. The local storage gives me peace of mind, and the organization features are incredibly powerful.",
    name: "Marcus Johnson",
    role: "Data Analyst",
    date: "Oct 15, 2024",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Of all the extensions I've tried for ChatGPT, this is the only one I actually use daily. The folder system and prompt vault are game-changers for productivity.",
    name: "Lisa Park",
    role: "Marketing Director",
    date: "Oct 5, 2024",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Finally, a proper way to organize ChatGPT conversations! AI Workspace makes it easy to find past chats and reuse effective prompts. Pure genius!",
    name: "James Wilson",
    role: "Freelance Writer",
    date: "Sep 20, 2024",
    rating: 5,
    verified: true,
  },
];

export default function Home() {
  const [installUrl, setInstallUrl] = useState("");

  useEffect(() => {
    setInstallUrl(getBrowserInstallUrl());
  }, []);

  return (
    <div
      style={{ background: "var(--color-bg-primary)" }}
      className="text-slate-100"
    >
      {/* Demo Modal */}
      <DemoModal />
      {/* Ripple handler for primary CTA */}
      <ScriptHandler />
      {/* Navigation Header */}
      <nav className="site-nav relative z-50">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-dark.svg"
                alt="AI Workspace Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span
                className="text-xl font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                AI Workspace
              </span>
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#showcase" className="nav-link">
                Showcase
              </a>
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
              <a
                href={installUrl || "#pricing"}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
              >
                Get started free
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero-section relative isolate overflow-hidden min-h-[90vh] flex items-center">
          {/* Premium Background Effects */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
              style={{
                background:
                  "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
              style={{
                background:
                  "radial-gradient(circle, var(--color-text-blue-accent) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-10 blur-[80px]"
              style={{
                background:
                  "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-32 pt-20 md:px-10 lg:px-16">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-slate-300">
                  <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span>v2.0 Now Available</span>
                  <span className="mx-2 text-white/20">|</span>
                  <span className="text-cyan-400 font-medium">
                    100% Local Privacy
                  </span>
                </div>

                <h1
                  className="hero-title text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
                  style={{
                    color: "var(--color-text)",
                    lineHeight: "1.1",
                  }}
                >
                  Your ChatGPT Workspace <br />
                  <span
                    className="relative inline-block"
                    style={{
                      background: "var(--premium-title-gradient)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Reimagined
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-cyan-500 opacity-50"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5 Q 50 10 100 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </span>
                </h1>

                <p className="hero-subtitle text-xl leading-relaxed text-slate-400 max-w-xl">
                  The ultimate browser extension for{" "}
                  <span className="text-cyan-400 font-medium">power users</span>
                  . Take{" "}
                  <span className="text-white font-medium">
                    complete control
                  </span>{" "}
                  of your ChatGPT workflow.{" "}
                  <span className="text-cyan-400 font-medium">
                    Organize conversations
                  </span>{" "}
                  into folders, save and reuse prompts instantly, search across
                  all your chats, and export everything.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full sm:w-auto">
                  {/* Primary CTA */}
                  <div className="relative group w-full sm:w-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                    <a
                      href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-bold text-white transition-all hover:scale-[1.02] whitespace-nowrap w-full sm:w-auto"
                      style={{
                        background:
                          "linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)",
                      }}
                    >
                      <svg
                        className="h-6 w-6 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                      Add to Browser
                    </a>
                  </div>
                  <DemoHubButton />
                </div>

                <div className="flex items-center gap-6 text-sm text-slate-500 pt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/browsers/chrome.svg"
                      alt="Chrome"
                      width={20}
                      height={20}
                      className="opacity-70 grayscale hover:grayscale-0 transition-all"
                    />
                    <Image
                      src="/images/browsers/edge.svg"
                      alt="Edge"
                      width={20}
                      height={20}
                      className="opacity-70 grayscale hover:grayscale-0 transition-all"
                    />
                    <Image
                      src="/images/browsers/firefox.svg"
                      alt="Firefox"
                      width={20}
                      height={20}
                      className="opacity-70 grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="h-4 w-px bg-white/10"></div>
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-slate-400">4.9/5 Rating</span>
                  </div>
                </div>
              </div>

              {/* Hero Video Section - Floating Glass Card */}
              <div className="relative w-full max-w-2xl lg:max-w-xl perspective-1000">
                {/* Glow behind video */}
                <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full transform translate-y-10"></div>

                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-xl transform transition-transform hover:scale-[1.01] duration-500">
                  {/* Video Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-xs font-medium text-slate-300">
                        Live Demo
                      </span>
                    </div>
                  </div>

                  {/* YouTube Video Embed */}
                  <div className="relative aspect-video bg-black">
                    <iframe
                      src="https://www.youtube.com/embed/LI7teDw2qh4?autoplay=0&controls=1&rel=0"
                      title="AI Workspace Pro - Complete Overview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>

                  {/* Video Footer */}
                  <div className="px-6 py-4 bg-gradient-to-b from-slate-900/50 to-slate-900/80 backdrop-blur-md border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          Product Walkthrough
                        </h3>
                        <p className="text-xs text-slate-400">
                          See how AI Workspace transforms your workflow
                        </p>
                      </div>
                      <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                        <svg
                          className="w-5 h-5 text-cyan-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Companies Carousel Section */}
        <LogoCarousel />

        <section
          id="features"
          className="border-t py-32 section relative overflow-hidden"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-bg-secondary)",
          }}
        >
          {/* Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div
              className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
              style={{
                background:
                  "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
              style={{
                background:
                  "radial-gradient(circle, var(--color-text-blue-accent) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 relative z-10">
            <div className="max-w-3xl space-y-6 mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                <SparklesIcon className="w-3 h-3" />
                Platform Features
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight"
                style={{ color: "var(--color-text)" }}
              >
                Everything you need to{" "}
                <span
                  style={{
                    background: "var(--premium-title-gradient)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  master ChatGPT
                </span>
              </h2>
              <p
                className="text-xl leading-relaxed max-w-2xl"
                style={{ color: "var(--color-text-secondary)" }}
              >
                From prompt management to conversation organization, AI
                Workspace provides the missing tools for ChatGPT.
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="bento-grid">
              {/* Card 1: Save Time (Large) */}
              <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
                <div className="bento-card-content gap-8">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                      <SparkIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Save Time & Boost Productivity
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 h-full">
                    <div className="space-y-4">
                      <p className="text-slate-400 leading-relaxed">
                        Stop wasting time searching for lost prompts. Our
                        advanced vault system keeps your most effective
                        workflows just one click away.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-slate-300">
                          <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                            <CheckIcon className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span>Never retype prompts again</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                          <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                            <CheckIcon className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span>Instant search across all chats</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                          <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                            <CheckIcon className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span>Custom folders & tags</span>
                        </li>
                      </ul>
                    </div>
                    {/* Visual representation/mini-mockup */}
                    <a
                      href="#lightbox-savetime"
                      className="relative block rounded-xl overflow-hidden border border-white/5 bg-slate-900/50 aspect-video group/image cursor-zoom-in"
                    >
                      <Image
                        src="/images/carousel/BrandBird 2025-11-20 12.01.36.png"
                        alt="AI Workspace Prompt Vault Interface"
                        fill
                        className="object-cover opacity-90 group-hover/image:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

                      {/* Zoom indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/50 backdrop-blur-sm p-2 rounded-full border border-white/10">
                          <svg
                            className="w-6 h-6 text-white"
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
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Better AI Results */}
              <div className="bento-card col-span-1">
                <div className="bento-card-content gap-6">
                  <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center border border-white/10">
                    <SparklesIcon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Better ChatGPT Responses
                    </h3>
                    <p className="text-sm text-slate-400">
                      Build a library of your best-performing prompts and
                      iterate for consistent quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Never Lose Work */}
              <div className="bento-card col-span-1">
                <div className="bento-card-content gap-6">
                  <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center border border-white/10">
                    <ShieldIcon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Never Lose Work
                    </h3>
                    <p className="text-sm text-slate-400">
                      Automatic local backups ensure you own your data. Export
                      anytime in multiple formats.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card: Smart Thread Trimming */}
              <div className="bento-card col-span-1">
                <div className="bento-card-content gap-6">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Lightning Fast Chats
                    </h3>
                    <p className="text-sm text-slate-400">
                      Smart Thread Trimming auto-hides older messages in long conversations. Say goodbye to laggy 200+ message threads.
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                      Free Feature
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Power Users (Wide) */}
              <div className="bento-card col-span-1 md:col-span-2 lg:col-span-3">
                <div className="bento-card-content flex-row items-center justify-between gap-8 flex-wrap md:flex-nowrap">
                  <div className="max-w-xl space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center border border-white/10">
                        <LayersIcon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Built for Power Users
                      </h3>
                    </div>
                    <p className="text-slate-400">
                      Advanced filtering, nested folders, keyboard shortcuts for
                      ChatGPT, and a Universal Prompt Library for Claude & Grok.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-white/10 text-sm text-slate-300">
                      Chrome
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-white/10 text-sm text-slate-300">
                      Edge
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-white/10 text-sm text-slate-300">
                      Firefox
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Signals - Redesigned as a glass strip */}
            <div className="mt-20 p-1 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent">
              <div className="bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/5 p-8 grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-cyan-400 font-medium uppercase tracking-wider">
                    Secure & Private
                  </div>
                  <div className="text-xs text-slate-500">
                    Local storage only
                  </div>
                </div>
                <div className="space-y-2 border-l border-r border-white/5">
                  <div className="text-3xl font-bold text-white">4.9/5</div>
                  <div className="text-sm text-cyan-400 font-medium uppercase tracking-wider">
                    User Rating
                  </div>
                  <div className="text-xs text-slate-500">
                    Trusted by thousands
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">3+</div>
                  <div className="text-sm text-cyan-400 font-medium uppercase tracking-wider">
                    Supported AIs
                  </div>
                  <div className="text-xs text-slate-500">
                    For Prompt Library
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase Carousel */}
        <section className="relative py-24 overflow-hidden">
          {/* Background decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 opacity-30"
          >
            <div
              className="absolute left-[-15%] top-1/4 h-[400px] w-[500px] blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute right-[-15%] bottom-1/4 h-[400px] w-[500px] blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em] mb-4"
                style={{ color: "var(--color-accent)" }}
              >
                See It In Action
              </p>
              <h2
                className="text-3xl font-semibold sm:text-4xl mb-6"
                style={{
                  background: "var(--premium-title-gradient)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Supercharge your ChatGPT Experience
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Explore our intuitive interface designed to supercharge your
                ChatGPT workflow
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Main carousel viewport */}
              <div
                className="overflow-hidden rounded-3xl"
                style={{
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                  boxShadow: "0 25px 50px rgba(6, 182, 212, 0.15)",
                }}
              >
                <div className="carousel-track flex transition-transform duration-700 ease-in-out">
                  {/* Slide 1 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 11.36.08.png"
                      alt="AI Workspace - Prompt Library Management"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                  {/* Slide 2 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 12.01.36.png"
                      alt="AI Workspace - Advanced Features"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 3 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 12.01.58.png"
                      alt="AI Workspace - Workspace Management"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 4 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 12.04.10.png"
                      alt="AI Workspace - Custom Settings"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 5 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.37.47.png"
                      alt="AI Workspace - Prompt Templates"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 6 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.38.41.png"
                      alt="AI Workspace - Conversation Organization"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 7 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.39.10.png"
                      alt="AI Workspace - Folder System"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 8 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.39.38.png"
                      alt="AI Workspace - Search & Filter"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 9 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.40.43.png"
                      alt="AI Workspace - Export Options"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 10 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.43.13.png"
                      alt="AI Workspace - Settings & Customization"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 11 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.46.23.png"
                      alt="AI Workspace - Data Management"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 12 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.46.47.png"
                      alt="AI Workspace - Integration Options"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 13 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.47.27.png"
                      alt="AI Workspace - Advanced Tools"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 14 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.47.59.png"
                      alt="AI Workspace - Customization Panel"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 15 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.48.31.png"
                      alt="AI Workspace - Complete Overview"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                type="button"
                className="carousel-btn carousel-btn-prev absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(6, 182, 212, 0.2)",
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                }}
                aria-label="Previous slide"
              >
                <svg
                  className="h-6 w-6"
                  style={{ color: "var(--color-text)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="carousel-btn carousel-btn-next absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(6, 182, 212, 0.2)",
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                }}
                aria-label="Next slide"
              >
                <svg
                  className="h-6 w-6"
                  style={{ color: "var(--color-text)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-3 mt-8">
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "var(--color-accent)",
                  }}
                  aria-label="Go to slide 1"
                  data-slide="0"
                />
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 2"
                  data-slide="1"
                />
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 3"
                  data-slide="2"
                />
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 4"
                  data-slide="3"
                />
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 5"
                  data-slide="4"
                />
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 6"
                  data-slide="5"
                />
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 7"
                  data-slide="6"
                />
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 8"
                  data-slide="7"
                />
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 9"
                  data-slide="8"
                />
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 10"
                  data-slide="9"
                />
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 11"
                  data-slide="10"
                />
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 12"
                  data-slide="11"
                />
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 13"
                  data-slide="12"
                />
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 14"
                  data-slide="13"
                />
                <button
                  type="button"
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 15"
                  data-slide="14"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="showcase"
          className="border-t py-32 section relative overflow-hidden"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-bg-primary)",
          }}
        >
          {/* Background Glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
              style={{
                background:
                  "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 relative z-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-20">
              <div className="max-w-2xl space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                  <LayersIcon className="w-3 h-3" />
                  Showcase
                </div>
                <h2
                  className="text-3xl font-bold sm:text-5xl"
                  style={{ color: "var(--color-text)" }}
                >
                  Designed for{" "}
                  <span
                    style={{
                      background: "var(--premium-title-gradient)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Power Users
                  </span>
                </h2>
                <p className="text-xl leading-relaxed text-slate-400">
                  Control, privacy, and speed. All in one secure environment.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {showcases.map((showcase, index) => (
                <div
                  key={showcase.title}
                  className={`bento-card group ${
                    index === 0 || index === 3 ? "md:col-span-2" : "col-span-1"
                  }`}
                >
                  <div className="bento-card-content h-full justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                          <SparklesIcon className="h-5 w-5 text-cyan-400" />
                        </div>
                        {showcase.badge && (
                          <span className="px-2 py-1 rounded-md bg-cyan-500/20 border border-cyan-500/30 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                            {showcase.badge}
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {showcase.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {showcase.description}
                        </p>
                      </div>

                      <ul className="space-y-2">
                        {showcase.highlights.slice(0, 2).map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-slate-500"
                          >
                            <CheckIcon className="h-3.5 w-3.5 text-cyan-500/70 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`#lightbox-${index}`}
                      className="mt-6 block relative rounded-lg overflow-hidden border border-white/5 bg-black/20 aspect-video group-hover:border-white/10 transition-colors cursor-zoom-in"
                    >
                      <Image
                        src={showcase.image}
                        alt={showcase.imageAlt}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                      {/* Zoom indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/50 backdrop-blur-sm p-2 rounded-full border border-white/10">
                          <svg
                            className="w-6 h-6 text-white"
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
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Lightbox overlays for showcases (rendered outside the cards to prevent clipping) */}
        <div aria-hidden>
          {showcases.map((showcase, index) => (
            <a
              key={`lightbox-${index}`}
              id={`lightbox-${index}`}
              className="lightbox-overlay"
              href={`#sc-${index}`}
              aria-label="Close image"
            >
              <div className="lightbox-content">
                <Image
                  src={showcase.image}
                  alt={showcase.imageAlt}
                  width={1600}
                  height={900}
                  sizes="(max-width: 1600px) 96vw, 1600px"
                  priority={index === 0}
                  style={{
                    maxWidth: "min(1600px, 96vw)",
                    maxHeight: "88vh",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  className="lightbox-img"
                />
                <span className="lightbox-close" aria-hidden>
                  ×
                </span>
              </div>
            </a>
          ))}
          {/* Print showcase overlay */}
          <a
            id="lightbox-print"
            className="lightbox-overlay"
            href="#sc-print"
            aria-label="Close image"
          >
            <div className="lightbox-content">
              <Image
                src="/images/print.png"
                alt="AI Workspace print & export preview"
                width={1600}
                height={900}
                sizes="(max-width: 1600px) 96vw, 1600px"
                style={{
                  maxWidth: "min(1600px, 96vw)",
                  maxHeight: "88vh",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
                className="lightbox-img"
              />
              <span className="lightbox-close" aria-hidden>
                ×
              </span>
            </div>
          </a>
          {/* Save Time showcase overlay */}
          <a
            id="lightbox-savetime"
            className="lightbox-overlay"
            href="#features"
            aria-label="Close image"
          >
            <div className="lightbox-content">
              <Image
                src="/images/carousel/BrandBird 2025-11-20 12.01.36.png"
                alt="AI Workspace Prompt Vault Interface"
                width={1600}
                height={900}
                sizes="(max-width: 1600px) 96vw, 1600px"
                style={{
                  maxWidth: "min(1600px, 96vw)",
                  maxHeight: "88vh",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
                className="lightbox-img"
              />
              <span className="lightbox-close" aria-hidden>
                ×
              </span>
            </div>
          </a>
        </div>
        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="relative border-t py-32 section"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-bg-secondary)",
          }}
        >
          {/* Background Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
              style={{
                background:
                  "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
              style={{
                background:
                  "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                <SparklesIcon className="w-3 h-3" />
                Community Love
              </div>
              <h2
                className="text-3xl font-bold sm:text-5xl mb-6"
                style={{ color: "var(--color-text)" }}
              >
                Loved by{" "}
                <span
                  style={{
                    background: "var(--premium-title-gradient)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  thousands of users
                </span>
              </h2>
              <p className="text-xl leading-relaxed text-slate-400">
                Join the community of professionals who trust AI Workspace to
                organize their AI workflow.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-4 w-4 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-xs text-slate-500 font-mono">
                        {testimonial.date}
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          {testimonial.name}
                          {testimonial.verified && (
                            <svg
                              className="h-3 w-3 text-cyan-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="text-xs text-slate-500">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section
          id="roadmap"
          className="relative border-t py-32 section"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-bg-primary)",
          }}
        >
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                <SparkIcon className="w-3 h-3" />
                Roadmap
              </div>
              <h2
                className="text-3xl font-bold sm:text-5xl mb-6"
                style={{ color: "var(--color-text)" }}
              >
                Future Features
              </h2>
              <p className="text-xl leading-relaxed text-slate-400">
                We&apos;re constantly evolving AI Workspace with powerful new
                capabilities.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {[
                {
                  title: "Prompt Chaining",
                  desc: "Link multiple prompts together for complex automated workflows",
                },
                {
                  title: "Advanced Analytics",
                  desc: "Deep insights into your ChatGPT usage patterns and productivity metrics",
                },
                {
                  title: "Extended LLM Support",
                  desc: "Native integrations for Gemini, Perplexity, Llama, and more",
                },
                {
                  title: "Multi-Language",
                  desc: "Interface localization for Spanish, French, German, Japanese",
                },
                {
                  title: "Workflow Automation",
                  desc: "Trigger actions based on events: auto-categorize, smart-archive",
                },
                {
                  title: "Team Collaboration",
                  desc: "Share prompt libraries and vault templates with your team",
                },
                {
                  title: "Voice Processing",
                  desc: "Transcribe voice notes, organize audio conversations",
                },
                {
                  title: "Custom API",
                  desc: "Connect your own AI models and third-party tools via REST API",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30"
                >
                  <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <SparkIcon className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/50 border border-white/10 backdrop-blur-md">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-slate-300">
                  Active Development
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Middle */}

        {/* CTA Section - Middle */}
        <section className="py-32 section relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h2
              className="text-4xl font-bold mb-6"
              style={{
                background: "var(--premium-title-gradient)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ready to boost your productivity?
            </h2>
            <p className="text-xl mb-10 text-slate-400">
              Join thousands of users organizing their ChatGPT workflows with AI
              Workspace.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={
                  installUrl ||
                  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-bold text-white transition-all hover:scale-[1.02] shadow-lg shadow-cyan-500/25"
                style={{
                  background:
                    "linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)",
                }}
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                Add to Browser
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Free forever • No credit card required • Install in seconds
            </p>
          </div>
        </section>

        <section
          id="faq"
          className="border-t py-32 section relative"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-bg-secondary)",
          }}
        >
          <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-16">
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                FAQ
              </div>
              <h2
                className="text-3xl font-bold sm:text-5xl"
                style={{ color: "var(--color-text)" }}
              >
                Common Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Is my data stored securely?",
                  a: "Yes. All prompts, notes, and chats are saved locally in vaults. Private vaults are protected with AES-256 encryption. Nothing is sent to external servers unless you manually export.",
                },
                {
                  q: "Can I organize my prompts and chats?",
                  a: "Absolutely. The Prompt Manager lets you save, tag, and categorize prompts with a nested tree structure. Chats and notes can be linked, favorited, pinned, or searched with advanced filters.",
                },
                {
                  q: "What's the difference between Free and Pro?",
                  a: "Free includes limited prompts and notes, 1 vault, and no encryption. Pro ($9.99/month) offers unlimited prompts, vaults, and notes, encrypted storage, full Image Gallery, GPT Manager, and multi-platform support.",
                },
                {
                  q: "Which AI platforms are supported?",
                  a: "AI Workspace integrates with ChatGPT out of the box. You can run the same prompts across platforms, switch with one click, and in the future chain steps across multiple AIs.",
                },
                {
                  q: "Does it support images and GPTs too?",
                  a: "Yes. The Image Gallery collects both uploaded and AI-generated visuals. The GPT Manager lets you search, filter, and launch GPTs instantly from one central hub.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm open:bg-slate-800/60 transition-all duration-300"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {item.q}
                    </span>
                    <span className="ml-4 flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform duration-300">
                      <svg
                        className="w-5 h-5"
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
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="border-t py-32 section relative overflow-hidden"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-bg-primary)",
          }}
        >
          {/* Background Glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-[120px]"
              style={{
                background:
                  "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                <SparkIcon className="w-3 h-3" />
                Simple Pricing
              </div>
              <h2
                className="text-3xl font-bold sm:text-5xl mb-6"
                style={{ color: "var(--color-text)" }}
              >
                Start free.{" "}
                <span
                  style={{
                    background: "var(--premium-title-gradient)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Go PRO when ready.
                </span>
              </h2>
              <p className="text-xl leading-relaxed text-slate-400">
                Transparent pricing for everyone. No hidden fees.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
              {/* Free plan */}
              <div className="relative p-8 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
                  <p className="text-slate-400 text-sm">
                    Essential tools for individuals.
                  </p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$0</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Save & organize prompts",
                    "1 Secure Vault",
                    "Basic Notes Manager",
                    "Limited Image Gallery",
                    "Community GPT Store",
                    "Local history log",
                    "Dark/Light themes",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-300 text-sm"
                    >
                      <div className="h-5 w-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="h-3 w-3 text-slate-400" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={
                    installUrl ||
                    "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 rounded-xl border border-white/10 bg-white/5 text-center font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Get Started Free
                </a>
              </div>

              {/* PRO plan */}
              <div className="relative p-8 rounded-3xl border border-cyan-500/30 bg-slate-900/60 backdrop-blur-md shadow-2xl shadow-cyan-500/10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">PRO</h3>
                  <p className="text-cyan-200/70 text-sm">
                    Power tools for serious users.
                  </p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$9.99</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                  <p className="text-xs text-cyan-400 mt-2">
                    or $79.99/year (save 33%)
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Unlimited prompts, notes & vaults",
                    "AES-256 Encryption + Autolock",
                    "Variable injection in prompts",
                    "Quick access menus",
                    "Search inside chats & prompts",
                    "Full Image Gallery & Exports",
                    "Multi-platform Support",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-white text-sm"
                    >
                      <div className="h-5 w-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="h-3 w-3 text-cyan-400" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={
                    installUrl ||
                    "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-center font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-[1.02]"
                >
                  Upgrade to PRO
                </a>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-slate-500">
                Secure payment via Stripe. Cancel anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Before Footer */}
        <section
          className="border-t py-24 section section-primary-teal"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                background: "var(--premium-title-gradient)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Start organizing your ChatGPT workflow today
            </h2>
            <p
              className="text-xl mb-10"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Free forever. No credit card required. Install in seconds.
            </p>
            <a
              href={
                installUrl ||
                "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-bold transition-all hover:scale-105 shadow-xl"
              style={{
                background: "var(--color-accent)",
                color: "#ffffff",
              }}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              Install AI Workspace Free
            </a>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {browserInstallButtons.map((browser) => (
                <a
                  key={browser.name}
                  href={browser.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <Image
                    src={browser.icon}
                    alt={`${browser.name} icon`}
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                  {browser.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative py-32 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Get in Touch
            </div>

            <h2
              className="text-3xl font-bold sm:text-5xl mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Questions or{" "}
              <span
                style={{
                  background: "var(--premium-title-gradient)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Suggestions?
              </span>
            </h2>

            <p className="text-xl leading-relaxed text-slate-400 mb-12 max-w-2xl mx-auto">
              We&apos;d love to hear from you! Share your feedback, report
              issues, or suggest new features to help us improve.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <a
                href="mailto:ai.workspace.extension@gmail.com"
                className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105"
                style={{
                  background: "var(--premium-primary-gradient)",
                  boxShadow: "0 10px 30px -10px rgba(6, 182, 212, 0.5)",
                }}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Support
              </a>

              <a
                href="https://discord.gg/9wESDrQN"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                </svg>
                Join Discord
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Feature Requests",
                  icon: <SparkIcon className="w-5 h-5" />,
                },
                {
                  title: "Bug Reports",
                  icon: <ShieldIcon className="w-5 h-5" />,
                },
                {
                  title: "General Feedback",
                  icon: <CheckIcon className="w-5 h-5" />,
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href="mailto:ai.workspace.extension@gmail.com"
                  className="group flex items-center justify-center gap-3 p-4 rounded-xl border border-white/5 bg-slate-900/40 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer
          id="footer"
          className="border-t py-20 section relative overflow-hidden"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-bg-secondary)",
          }}
        >
          <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 relative z-10">
            <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo-dark.svg"
                    alt="AI Workspace Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      background: "var(--premium-title-gradient)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    AI Workspace
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-400 max-w-md">
                  The ultimate local-first extension for ChatGPT. Manage
                  prompts, conversations, images, notes, and GPTs securely —
                  without sending data to the cloud.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/Strikeh82"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Strikeh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dirk-lammers-345a26397/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://discord.gg/9wESDrQN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <span className="sr-only">Discord</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h4
                  className="text-sm font-bold uppercase tracking-widest mb-6"
                  style={{ color: "var(--color-accent)" }}
                >
                  Product
                </h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      href="#features"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      href="#showcase"
                    >
                      Showcase
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      href="#pricing"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      href="#roadmap"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <Link
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      href="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4
                  className="text-sm font-bold uppercase tracking-widest mb-6"
                  style={{ color: "var(--color-accent)" }}
                >
                  Support
                </h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      href="#faq"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      href="#contact"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      href="/privacy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      href="/terms"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                © 2025 AI Workspace. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                All systems operational
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function ScriptHandler() {
  useEffect(() => {
    // lightweight scroll variable for parallax
    const setScrollVar = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      document.documentElement.style.setProperty("--scroll-y", `${y}px`);
    };
    setScrollVar();
    window.addEventListener("scroll", setScrollVar, { passive: true });

    const btn = document.querySelector<HTMLAnchorElement>(
      ".install-buttons .cta-btn--primary"
    );
    if (btn && !btn.dataset.rippleInit) {
      btn.dataset.rippleInit = "true";
      btn.addEventListener("click", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e as MouseEvent).clientX - rect.left;
        const y = (e as MouseEvent).clientY - rect.top;
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        ripple.style.width = ripple.style.height = `${Math.max(
          rect.width,
          rect.height
        )}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        btn.appendChild(ripple);
        ripple.addEventListener("animationend", () => ripple.remove());
      });
    }

    // Carousel functionality
    const track = document.querySelector(".carousel-track") as HTMLElement;
    const dots = document.querySelectorAll(".carousel-dot");
    const prevBtn = document.querySelector(".carousel-btn-prev");
    const nextBtn = document.querySelector(".carousel-btn-next");

    if (track && dots.length > 0) {
      let currentSlide = 0;
      const totalSlides = dots.length;
      let autoplayInterval: NodeJS.Timeout | null = null;

      const updateCarousel = (index: number) => {
        currentSlide = (index + totalSlides) % totalSlides;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update dots
        dots.forEach((dot, i) => {
          const dotEl = dot as HTMLElement;
          if (i === currentSlide) {
            dotEl.style.background = "var(--color-accent)";
            dotEl.style.width = "2rem";
          } else {
            dotEl.style.background = "rgba(6, 182, 212, 0.3)";
            dotEl.style.width = "0.75rem";
          }
        });
      };

      const stopAutoplay = () => {
        if (autoplayInterval) {
          clearInterval(autoplayInterval);
          autoplayInterval = null;
        }
      };

      const startAutoplay = () => {
        stopAutoplay(); // Stop any existing interval first
        autoplayInterval = setInterval(() => {
          updateCarousel(currentSlide + 1);
        }, 5000);
      };

      // Next/Prev buttons
      nextBtn?.addEventListener("click", () => {
        updateCarousel(currentSlide + 1);
        startAutoplay(); // Restart interval
      });

      prevBtn?.addEventListener("click", () => {
        updateCarousel(currentSlide - 1);
        startAutoplay(); // Restart interval
      });

      // Dot navigation
      dots.forEach((dot) => {
        dot.addEventListener("click", () => {
          const slideIndex = parseInt(dot.getAttribute("data-slide") || "0");
          updateCarousel(slideIndex);
          startAutoplay(); // Restart interval
        });
      });

      // Pause on hover
      track.parentElement?.addEventListener("mouseenter", stopAutoplay);
      track.parentElement?.addEventListener("mouseleave", startAutoplay);

      // Image zoom functionality
      const slides = document.querySelectorAll(".carousel-slide img");
      slides.forEach((img) => {
        const imgEl = img as HTMLImageElement;
        imgEl.style.cursor = "zoom-in";

        imgEl.addEventListener("click", (e) => {
          e.stopPropagation();
          stopAutoplay();

          // Create modal overlay
          const modal = document.createElement("div");
          modal.className = "image-zoom-modal";
          modal.style.cssText = `
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.95);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
              cursor: zoom-out;
              animation: fadeIn 0.2s ease-in-out;
              padding: 2rem;
            `;

          // Create close button
          const closeBtn = document.createElement("button");
          closeBtn.innerHTML = "✕";
          closeBtn.style.cssText = `
              position: absolute;
              top: 1.5rem;
              right: 1.5rem;
              background: rgba(6, 182, 212, 0.2);
              border: 1px solid rgba(6, 182, 212, 0.3);
              color: white;
              width: 3rem;
              height: 3rem;
              border-radius: 50%;
              font-size: 1.5rem;
              cursor: pointer;
              backdrop-filter: blur(10px);
              transition: all 0.3s;
              z-index: 10000;
            `;
          closeBtn.addEventListener("mouseenter", () => {
            closeBtn.style.transform = "scale(1.1)";
            closeBtn.style.background = "rgba(6, 182, 212, 0.3)";
          });
          closeBtn.addEventListener("mouseleave", () => {
            closeBtn.style.transform = "scale(1)";
            closeBtn.style.background = "rgba(6, 182, 212, 0.2)";
          });

          // Clone image
          const zoomedImg = imgEl.cloneNode(true) as HTMLImageElement;
          zoomedImg.style.cssText = `
              max-width: 95%;
              max-height: 95%;
              object-fit: contain;
              border-radius: 1rem;
              box-shadow: 0 25px 50px rgba(6, 182, 212, 0.3);
              animation: zoomIn 0.3s ease-out;
            `;

          // Add CSS animations
          const style = document.createElement("style");
          style.textContent = `
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes zoomIn {
                from { 
                  transform: scale(0.9);
                  opacity: 0;
                }
                to { 
                  transform: scale(1);
                  opacity: 1;
                }
              }
            `;
          document.head.appendChild(style);

          // Close modal function
          const closeModal = () => {
            modal.style.animation = "fadeIn 0.2s ease-in-out reverse";
            setTimeout(() => {
              document.body.removeChild(modal);
              document.head.removeChild(style);
              startAutoplay();
            }, 200);
          };

          closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            closeModal();
          });

          modal.addEventListener("click", closeModal);

          // ESC key to close
          const escHandler = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
              closeModal();
              document.removeEventListener("keydown", escHandler);
            }
          };
          document.addEventListener("keydown", escHandler);

          modal.appendChild(closeBtn);
          modal.appendChild(zoomedImg);
          document.body.appendChild(modal);
        });
      });

      // Start autoplay
      startAutoplay();

      // Cleanup
      return () => {
        stopAutoplay();
      };
    }
  }, []);

  return null;
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12l5 5 9-9" />
    </svg>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7z" />
      <path d="M9.5 12.5l1.8 1.8 3.2-3.3" />
    </svg>
  );
}

function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
      <path d="M5 19l1-2 2-1-2-1-1-2-1 2-2 1 2 1z" />
      <path d="M17 19l.5-1.5L19 17l-1.5-.5L17 15l-.5 1.5L15 17l1.5.5z" />
    </svg>
  );
}

function LayersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3l9 4.5-9 4.5-9-4.5z" />
      <path d="M3 12l9 4.5 9-4.5" />
      <path d="M3 16.5l9 4.5 9-4.5" />
    </svg>
  );
}

function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 4l1.2 3.6L17 9l-3.8 1.4L12 14l-1.2-3.6L7 9l3.8-1.4z" />
    </svg>
  );
}
