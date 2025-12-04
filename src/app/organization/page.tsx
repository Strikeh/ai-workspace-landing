"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroConnectionLines } from "@/components/HeroConnectionLines";
import {
  FadeIn,
  ScaleUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimation";
import {
  FolderOpen,
  Search,
  Tag,
  Pin,
  Archive,
  ArrowRight,
  Shield,
  CheckCircle2,
  Layout,
  MousePointerClick,
  Sparkles,
  Filter,
} from "lucide-react";

export default function OrganizationPage() {
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
                Stay Organized
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
                Tame the Chaos of Your AI Conversations
              </h1>
              <p className="text-lg leading-8 text-slate-400 mb-10 max-w-2xl mx-auto">
                Organize thousands of chats with folders, tags, and powerful
                search. Stop scrolling, start finding.
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
                {/* Placeholder for Screenshot of Organization */}
                <div className="aspect-video rounded-lg bg-slate-800/50 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                  <Image
                    src="/images/organization-hero.png"
                    alt="Organization Interface"
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end justify-center pb-8">
                    <p className="text-cyan-300 font-medium flex items-center gap-2">
                      <FolderOpen className="w-4 h-4" /> Your Organized
                      Workspace
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
                The <span className="text-red-400">Endless Scroll</span> Problem
              </h2>
              <div className="space-y-6 text-slate-400 text-lg">
                <p>"Where was that code snippet from last week?"</p>
                <p>
                  ChatGPT's default sidebar is a flat list. Once a chat drops
                  off the screen, it's basically gone forever. Finding old
                  information is a nightmare.
                </p>
              </div>
            </FadeIn>
            <ScaleUp className="relative">
              <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-3xl opacity-20" />
              <div className="relative rounded-2xl border border-red-500/20 bg-slate-900/80 p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-white/5 text-slate-400 font-mono text-sm opacity-50">
                    New Chat
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-white/5 text-slate-400 font-mono text-sm opacity-60">
                    Marketing Plan v2
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-white/5 text-slate-400 font-mono text-sm opacity-70">
                    React Component Fix
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-white/5 text-slate-400 font-mono text-sm opacity-80">
                    ... 100+ more chats ...
                  </div>
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm text-center">
                    ⚠️ Impossible to find anything
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
              <span className="text-cyan-400">Structure & Clarity</span>
            </h2>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem className="group p-8 rounded-3xl border border-white/5 bg-slate-800/50 hover:bg-slate-800/80 transition-all hover:border-cyan-500/30">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                <FolderOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Nested Folders
              </h3>
              <p className="text-slate-400">
                Create unlimited folders and subfolders to group related
                conversations. Keep "Work", "Personal", and "Coding" separate.
              </p>
            </StaggerItem>

            <StaggerItem className="group p-8 rounded-3xl border border-white/5 bg-slate-800/50 hover:bg-slate-800/80 transition-all hover:border-cyan-500/30">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <Tag className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Tags & Colors
              </h3>
              <p className="text-slate-400">
                Label chats with custom tags and colors for quick visual
                scanning.
              </p>
            </StaggerItem>

            <StaggerItem className="group p-8 rounded-3xl border border-white/5 bg-slate-800/50 hover:bg-slate-800/80 transition-all hover:border-cyan-500/30">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Global Search
              </h3>
              <p className="text-slate-400">
                Instantly search through titles and content of all your
                conversations.
              </p>
            </StaggerItem>

            <StaggerItem className="group p-8 rounded-3xl border border-white/5 bg-slate-800/50 hover:bg-slate-800/80 transition-all hover:border-cyan-500/30">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform">
                <Pin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Pin Important Chats
              </h3>
              <p className="text-slate-400">
                Keep your most important active threads pinned to the top for
                easy access.
              </p>
            </StaggerItem>

            <StaggerItem className="group p-8 rounded-3xl border border-white/5 bg-slate-800/50 hover:bg-slate-800/80 transition-all hover:border-cyan-500/30">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                <Filter className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Smart Filters
              </h3>
              <p className="text-slate-400">
                Filter by date, tag, or folder to narrow down your view.
              </p>
            </StaggerItem>

            <StaggerItem className="group p-8 rounded-3xl border border-white/5 bg-slate-800/50 hover:bg-slate-800/80 transition-all hover:border-cyan-500/30">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform">
                <Archive className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Bulk Actions
              </h3>
              <p className="text-slate-400">
                Select multiple chats to move, archive, or delete them in one
                go.
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Visuals for Solution */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <ScaleUp className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="aspect-video relative bg-slate-900">
                {/* Placeholder for Folders */}
                <Image
                  src="/images/organization-folders.png"
                  alt="Nested Folders"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-white">
                  Nested Folders
                </div>
              </div>
            </ScaleUp>
            <ScaleUp className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="aspect-video relative bg-slate-900">
                {/* Placeholder for Search */}
                <Image
                  src="/images/organization-search.png"
                  alt="Powerful Search"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-white">
                  Instant Search
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
            Get your AI workspace organized today
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
    </main>
  );
}
