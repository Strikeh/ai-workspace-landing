"use client";

import Image from "next/image";
import Link from "next/link";
import ImageLightbox from "@/components/ImageLightbox";
import { HeroConnectionLines } from "@/components/HeroConnectionLines";
import {
  FadeIn,
  ScaleUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimation";
import {
  Highlighter,
  Scissors,
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight,
  Layout,
  MousePointerClick,
  Sparkles,
} from "lucide-react";

export default function HighlighterPage() {
  const installUrl =
    "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";

  return (
    <main className="min-h-screen bg-[#0B1120] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo-dark.svg"
                alt="AI Workspace Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              AI Workspace
            </span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroConnectionLines />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1120]/80 to-[#0B1120]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
                <Sparkles className="w-3 h-3" />
                New Feature
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
                Make ChatGPT Organized & Fast with AI Workspace
              </h1>
              <p className="text-lg leading-8 text-slate-400 mb-10 max-w-2xl mx-auto">
                Highlight important text, trim long conversations, and organize
                your AI chats in seconds – all directly in your browser.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={installUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 rounded-xl px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 shadow-lg shadow-cyan-500/25 bg-gradient-to-r from-cyan-500 to-blue-600"
                >
                  Add to Chrome – Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </FadeIn>

            {/* Hero Visual */}
            <ScaleUp className="mt-16 relative rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10" />
              <div className="relative p-4 sm:p-8">
                {/* Placeholder for Screenshot of highlight toolbar + navigation */}
                <div className="aspect-video rounded-lg bg-slate-800/50 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                  <Image
                    src="/images/landingpages/highlighting.png"
                    alt="Smart Navigation & Highlighting"
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 zoomable-image cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end justify-center pb-8">
                    <p className="text-cyan-300 font-medium flex items-center gap-2">
                      <Highlighter className="w-4 h-4" /> Smart Highlighting &
                      Navigation
                    </p>
                  </div>
                </div>
              </div>
            </ScaleUp>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-slate-900/50 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Why ChatGPT becomes{" "}
                <span className="text-red-400">chaotic</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-lg">
                <p>
                  Long conversations become slow, important info gets lost, and
                  searching back becomes a frustration.
                </p>
                <p>
                  Without a highlight system or thread trimming, you lose
                  overview and every AI chat takes unnecessarily long.
                </p>
              </div>
            </FadeIn>
            <ScaleUp className="relative">
              <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-3xl opacity-20" />
              <div className="relative rounded-2xl border border-red-500/20 bg-slate-900/80 p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-500">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                      <span className="text-xs">1</span>
                    </div>
                    <div className="h-4 w-3/4 bg-slate-800 rounded" />
                  </div>
                  <div className="flex items-center gap-4 text-slate-500">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                      <span className="text-xs">2</span>
                    </div>
                    <div className="h-4 w-1/2 bg-slate-800 rounded" />
                  </div>
                  <div className="flex items-center gap-4 text-slate-500 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                      <span className="text-xs">...</span>
                    </div>
                    <div className="h-4 w-full bg-slate-800 rounded" />
                  </div>
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm text-center">
                    ⚠️ High Memory Usage & Slow Scroll
                  </div>
                </div>
              </div>
            </ScaleUp>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] to-slate-900" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl mb-6 text-white">
              Solution:{" "}
              <span className="text-cyan-400">Highlight, Trim & Organize</span>
            </h2>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem className="group p-8 rounded-3xl border border-white/5 bg-slate-800/50 hover:bg-slate-800/80 transition-all hover:border-cyan-500/30">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                <Highlighter className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Persistent Highlights
              </h3>
              <p className="text-slate-400">
                Mark important text and navigate back easily, even after
                reloading or streaming messages.
              </p>
            </StaggerItem>

            <StaggerItem className="group p-8 rounded-3xl border border-white/5 bg-slate-800/50 hover:bg-slate-800/80 transition-all hover:border-cyan-500/30">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Smart Thread Trimming
              </h3>
              <p className="text-slate-400">
                Auto-hide older messages and keep only relevant context for an
                80% faster scrolling experience.
              </p>
            </StaggerItem>

            <StaggerItem className="group p-8 rounded-3xl border border-white/5 bg-slate-800/50 hover:bg-slate-800/80 transition-all hover:border-cyan-500/30">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Performance Boost
              </h3>
              <p className="text-slate-400">
                Reduce memory usage by 70%+ in long conversations.
              </p>
            </StaggerItem>

            <StaggerItem className="group p-8 rounded-3xl border border-white/5 bg-slate-800/50 hover:bg-slate-800/80 transition-all hover:border-cyan-500/30">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Visual Feedback
              </h3>
              <p className="text-slate-400">
                Stay updated on new AI responses without constant scrolling
                using audio alerts.
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Visuals for Solution */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <ScaleUp className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="aspect-video relative bg-slate-900">
                {/* Placeholder for GIF of highlights */}
                <Image
                  src="/images/landingpages/highlighting.gif"
                  alt="Highlighting Demo"
                  fill
                  className="object-cover zoomable-image cursor-pointer"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-white">
                  Highlighting in Action
                </div>
              </div>
            </ScaleUp>
            <ScaleUp className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="aspect-video relative bg-slate-900">
                {/* Placeholder for GIF of trimming */}
                <Image
                  src="/images/carousel/BrandBird 2025-11-20 19.39.38.png"
                  alt="Thread Trimming Demo"
                  fill
                  className="object-cover zoomable-image cursor-pointer"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-white">
                  Thread Trimming
                </div>
              </div>
            </ScaleUp>
          </div>
        </div>
      </section>

      {/* Why AI Workspace Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why AI Workspace?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MousePointerClick,
                text: "Works directly in ChatGPT, Claude & Grok",
              },
              { icon: Shield, text: "Fully local & privacy-first" },
              {
                icon: CheckCircle2,
                text: "Easy installation, no account required",
              },
              { icon: Layout, text: "Professional UI & modern UX" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              >
                <item.icon className="w-10 h-10 text-cyan-400 mb-4" />
                <p className="text-slate-300 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-[#0B1120]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Start working efficiently with AI today
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={installUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 rounded-xl px-10 py-5 text-lg font-bold text-white transition-all hover:scale-105 shadow-lg shadow-cyan-500/25 bg-gradient-to-r from-cyan-500 to-blue-600"
            >
              Add to Chrome – Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Free forever • No credit card required • Install in seconds
          </p>
        </div>
      </section>
      <ImageLightbox />
    </main>
  );
}
