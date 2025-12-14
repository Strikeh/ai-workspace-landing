"use client";

import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { useEffect, useState } from "react";
import DemoModal from "@/components/DemoModal";
import DemoHubButton from "@/components/DemoHubButton";
import FeatureShowcase from "@/components/FeatureShowcase";
import CompleteFeatureMatrix from "@/components/CompleteFeatureMatrix";
import WhyChooseSection from "@/components/WhyChooseSection";
import { HeroConnectionLines } from "@/components/HeroConnectionLines";
import { Footer } from "@/components/Footer";
import {
  FadeIn,
  SlideUp,
  ScaleUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimation";

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
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setInstallUrl(getBrowserInstallUrl());

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["features", "pricing"];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
      <nav
        className={`site-nav sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex h-16 items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-3 cursor-pointer transition-opacity hover:opacity-80"
            >
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
            </a>
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#features"
                className={`nav-link transition-colors ${
                  activeSection === "features" ? "!text-cyan-400" : ""
                }`}
              >
                Features
              </a>
              <a
                href="#pricing"
                className={`nav-link transition-colors ${
                  activeSection === "pricing" ? "!text-cyan-400" : ""
                }`}
              >
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-300 hover:text-white cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
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
              ) : (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
            <a
              href="#features"
              className="text-lg font-medium text-slate-300 hover:text-cyan-400 py-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-lg font-medium text-slate-300 hover:text-cyan-400 py-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <Link
              href="/blog"
              className="text-lg font-medium text-slate-300 hover:text-cyan-400 py-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <a
              href={installUrl || "#pricing"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-cyan-500/20 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get started free
            </a>
          </div>
        )}
      </nav>

      <main>
        <section className="hero-section relative isolate overflow-hidden min-h-[90vh] flex items-center">
          {/* Premium Background Effects */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />

            {/* Animated Blobs */}
            <div
              className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] animate-blob"
              style={{
                background:
                  "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] animate-blob animation-delay-2000"
              style={{
                background:
                  "radial-gradient(circle, var(--color-text-blue-accent) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-10 blur-[80px] animate-blob animation-delay-4000"
              style={{
                background:
                  "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-16 pt-20 md:px-10 lg:px-16">
            <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
              <HeroConnectionLines />
              <SlideUp className="max-w-2xl space-y-6" delay={0.1}>
                {/* Social Proof Bar - First thing they see */}
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  {/* Multi-platform badge - key differentiator */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
                    <span className="text-purple-300 font-medium">
                      Stop scrolling through endless chats
                    </span>
                  </div>
                  {/* Rating badge */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3.5 h-3.5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-semibold text-yellow-200">5.0</span>
                    <span className="text-slate-400">on Chrome Web Store</span>
                  </div>
                </div>

                {/* Pain Point Headline */}
                <h1
                  className="hero-title text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                  style={{
                    color: "var(--color-text)",
                    lineHeight: "1.15",
                  }}
                >
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl block mb-3">
                    Turn ChatGPT into an
                  </span>
                  <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">
                    <span
                      className="relative inline-block"
                      style={{
                        background:
                          "linear-gradient(to right, #22d3ee, #3b82f6)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Organized Workspace
                    </span>
                  </span>
                </h1>

                {/* One-liner value prop */}
                <div className="space-y-4 max-w-2xl">
                  <p className="hero-subtitle text-xl leading-relaxed text-slate-300">
                    Folders, Tags, Search & a Prompt Library. Stop losing your
                    best ideas and work 10x faster.
                  </p>

                  <p className="text-lg font-medium text-cyan-400">
                    Built for power users who need clarity, structure, and
                    speed.
                  </p>

                  {/* Feature List */}
                  <ul className="grid grid-cols-1 gap-y-3 pt-4">
                    {[
                      "Organize chats with Folders & Tags",
                      "Sync across ChatGPT, Claude & Grok",
                      "Save prompts with variables",
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-lg text-slate-300"
                      >
                        <div className="p-1 rounded-full bg-emerald-500/10">
                          <svg
                            className="w-5 h-5 text-emerald-400 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full sm:w-auto">
                  {/* Primary CTA */}
                  <div className="relative group w-full sm:w-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                    <a
                      href={
                        installUrl ||
                        "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                      }
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
                      Start free
                    </a>
                  </div>
                  <DemoHubButton />
                </div>

                {/* Feature highlights */}
                <div className="text-sm text-slate-400 pt-2 leading-relaxed max-w-xl">
                  <span className="text-slate-300 font-medium">
                    Highlights:{" "}
                  </span>
                  Sidebar inside ChatGPT, nested folders, full‑text search,
                  prompt library, image gallery, GPT store manager, smart tags,
                  bulk actions, encrypted workspaces, and multiple export
                  formats — all in one place.
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 pt-3">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400">Available for:</span>
                    {browserInstallButtons.map((btn) => (
                      <a
                        key={btn.name}
                        href={btn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105"
                        title={`Install for ${btn.name}`}
                      >
                        <Image
                          src={btn.icon}
                          alt={btn.name}
                          width={16}
                          height={16}
                        />
                        <span className="text-xs text-slate-300">
                          {btn.name}
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-slate-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span>100% local storage</span>
                  </div>
                </div>
              </SlideUp>

              {/* Hero Video Section - Floating Glass Card */}
              <ScaleUp
                className="relative w-full max-w-2xl lg:max-w-xl perspective-1000"
                delay={0.3}
              >
                {/* Glow behind video */}
                <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full transform translate-y-10"></div>

                <div className="animate-float">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-xl transform transition-transform hover:scale-[1.01] duration-500">
                    {/* Video Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-slate-800 to-slate-900">
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
                        src="https://www.youtube.com/embed/pDZD1maOWBA?autoplay=0&controls=1&rel=0&vq=hd1080"
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
              </ScaleUp>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <WhyChooseSection />

        {/* Complete Feature Matrix Section */}
        <CompleteFeatureMatrix />

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
              className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] animate-blob"
              style={{
                background:
                  "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full opacity-20 blur-[100px] animate-blob animation-delay-2000"
              style={{
                background:
                  "radial-gradient(circle, var(--color-text-blue-accent) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                <SparklesIcon className="w-3 h-3" />
                Feature Showcase
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
                  master AI platforms
                </span>
              </h2>
              <p
                className="text-xl leading-relaxed max-w-2xl mx-auto"
                style={{ color: "var(--color-text-secondary)" }}
              >
                From prompt management to conversation organization, AI
                Workspace provides the missing tools for all AI platforms.
              </p>
            </div>

            {/* Tabbed Feature Showcase */}
            <FeatureShowcase />

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
              className="absolute left-[-15%] top-1/4 h-[400px] w-[500px] blur-3xl animate-blob"
              style={{
                background:
                  "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute right-[-15%] bottom-1/4 h-[400px] w-[500px] blur-3xl animate-blob animation-delay-2000"
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
                Supercharge your AI Experience
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Explore our intuitive interface designed to supercharge your
                workflow across ChatGPT, Claude, and Grok
              </p>
            </div>

            {/* Carousel Container */}
            <FadeIn className="relative">
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
            </FadeIn>
          </div>
        </section>

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
              className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-10 blur-[100px] animate-blob"
              style={{
                background:
                  "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-10 blur-[100px] animate-blob animation-delay-2000"
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

            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <StaggerItem
                  key={index}
                  className="group relative rounded-2xl bg-slate-900 p-[1px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  {/* Rotating Border Effect */}
                  <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#06b6d4_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Card Content */}
                  <div className="relative h-full rounded-2xl bg-slate-900/90 backdrop-blur-xl p-8 border border-white/5 group-hover:border-transparent transition-colors">
                    <div className="relative z-10 space-y-6 h-full flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="h-4 w-4 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]"
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

                      <p className="text-slate-300 leading-relaxed flex-1">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/20">
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
                </StaggerItem>
              ))}
            </StaggerContainer>
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

            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
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
                <StaggerItem
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
                </StaggerItem>
              ))}
            </StaggerContainer>

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

          <ScaleUp className="relative z-10 mx-auto max-w-4xl px-6 text-center">
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
                Start free
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Free forever • No credit card required • Install in seconds
            </p>
          </ScaleUp>
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

            <StaggerContainer className="space-y-4">
              {[
                {
                  q: "Can I use AI Workspace extension for free?",
                  a: "Yes! The core features are free forever. You get access to custom workspaces, basic prompt management, and local history without paying a dime.",
                },
                {
                  q: "What's the difference between Free and Pro?",
                  a: "Free includes limited prompts and notes, 1 vault, and no encryption. Pro ($9.99/month) offers unlimited prompts, vaults, and notes, encrypted storage, full Image Gallery, GPT Manager, and multi-platform support.",
                },
                {
                  q: "Can I install the extension on Microsoft Edge or Firefox?",
                  a: "Currently, AI Workspace is optimized for Google Chrome. We are working on support for Microsoft Edge and Firefox, which will be available soon.",
                },
                {
                  q: "Is my data stored securely?",
                  a: "Yes. All prompts, notes, and chats are saved locally in vaults. Private vaults are protected with AES-256 encryption. Nothing is sent to external servers unless you manually export.",
                },
                {
                  q: "Are my chats saved anywhere other than my personal device?",
                  a: "No. Unlike some other extensions (e.g., Superpower ChatGPT) that may sync your data to their servers, AI Workspace keeps 100% of your data locally on your device. We have zero access to your chats.",
                },
                {
                  q: "How can I request a feature or report a bug?",
                  a: (
                    <>
                      We love feedback! You can join our{" "}
                      <a
                        href="https://discord.gg/adx5DTrQEp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 underline"
                      >
                        Discord community
                      </a>{" "}
                      to chat directly with the developers, or send us an email
                      at{" "}
                      <a
                        href="mailto:support@getaiworkspace.com"
                        className="text-cyan-400 hover:text-cyan-300 underline"
                      >
                        support@getaiworkspace.com
                      </a>
                      .
                    </>
                  ),
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes, you can cancel your Pro subscription at any time via the Stripe customer portal. You'll keep your Pro features until the end of your billing period.",
                },
              ].map((item, i) => (
                <StaggerItem
                  key={i}
                  className="group rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm open:bg-slate-800/60 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.15)]"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {item.q}
                      </span>
                      <span className="ml-4 flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform duration-300 group-open:text-cyan-400">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {item.a}
                    </div>
                  </details>
                </StaggerItem>
              ))}
            </StaggerContainer>
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
              className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-[120px] animate-blob-slow"
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

            <StaggerContainer className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-stretch">
              {/* Free plan */}
              <StaggerItem className="relative p-8 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300 flex flex-col h-full">
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

                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    "Limited prompts & folders",
                    "1 Custom Workspace",
                    "Basic Notes Manager",
                    "Highlight text in chats",
                    "Trim long chat threads",
                    "Limited conversation themes",
                    "Community GPT Store",
                    "Local history log",
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
                  className="block w-full py-4 rounded-xl border border-white/10 bg-white/5 text-center font-semibold text-white hover:bg-white/10 transition-colors mt-auto"
                >
                  Get Started Free
                </a>
              </StaggerItem>

              {/* PRO plan */}
              <StaggerItem className="relative p-8 rounded-3xl border border-cyan-500/50 bg-slate-900/80 backdrop-blur-md shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)] flex flex-col h-full hover:shadow-[0_0_60px_-10px_rgba(6,182,212,0.4)] transition-all duration-500">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-bold text-white uppercase tracking-wider shadow-lg shadow-cyan-500/40">
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

                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    "Unlimited prompts, notes & vaults",
                    "AES-256 Encryption + Autolock",
                    "Variable injection in prompts",
                    "Quick access menus",
                    "Search inside chats & prompts",
                    "Full Image Gallery & Exports",
                    "Multi-platform Support",
                    "Advanced Thread Trimming",
                    "Audio Notifications",
                    "Prompt History & Chaining",
                    "Priority Support",
                    "Early Access to new features",
                    "Custom Themes & Colors",
                    "And many more...",
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
                  className="block w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-center font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-[1.02] mt-auto"
                >
                  Upgrade to PRO
                </a>
              </StaggerItem>
            </StaggerContainer>

            <div className="mt-12 text-center">
              <p className="text-sm text-slate-500">
                Secure payment via Stripe. Cancel anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Before Footer */}
        <section
          className="relative border-t py-32 overflow-hidden"
          style={{
            borderColor: "rgba(139, 92, 246, 0.1)",
            background:
              "linear-gradient(to bottom, rgba(15, 23, 42, 1), rgba(15, 23, 42, 0.8))",
          }}
        >
          {/* Purple/Pink Background Glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[120px]" />
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px]" />
          </div>

          <ScaleUp className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
              <span className="text-sm font-medium text-fuchsia-300">
                Ready to get started?
              </span>
            </div>

            <h2
              className="text-5xl md:text-6xl font-bold mb-8 tracking-tight"
              style={{
                background:
                  "linear-gradient(135deg, #e879f9 0%, #d946ef 50%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 40px rgba(217, 70, 239, 0.3)",
              }}
            >
              Start organizing your AI workflow today
            </h2>

            <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Free forever. No credit card required. <br />
              <span className="text-fuchsia-200/80">Install in seconds.</span>
            </p>

            <div className="flex flex-col items-center gap-8">
              <a
                href={
                  installUrl ||
                  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-2xl px-10 py-5 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.5)]"
                style={{
                  background:
                    "linear-gradient(135deg, #d946ef 0%, #8b5cf6 100%)",
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                Install AI Workspace Free
              </a>

              <div className="flex flex-wrap items-center justify-center gap-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
                {browserInstallButtons.map((browser) => (
                  <a
                    key={browser.name}
                    href={browser.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-fuchsia-300 transition-colors"
                  >
                    <Image
                      src={browser.icon}
                      alt={`${browser.name} icon`}
                      width={20}
                      height={20}
                      className="opacity-80"
                    />
                    {browser.name}
                  </a>
                ))}
              </div>
            </div>
          </ScaleUp>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative py-32 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <FadeIn className="mx-auto max-w-4xl px-6 text-center">
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
                href="mailto:support@getaiworkspace.com"
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
                href="https://discord.gg/adx5DTrQEp"
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
                  href="mailto:support@getaiworkspace.com"
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
          </FadeIn>
        </section>

        <Footer />
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
      <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-3.85-7-7.93V7z" />
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
      <path d="M12 4l1.2 3.6L17 9l-3.8 1.4L12 14l-1.2-3.6L7 9l3.8-1.4z" />
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
