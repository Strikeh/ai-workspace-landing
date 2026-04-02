"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Video,
  Lightbulb,
  PenTool,
  Youtube,
  Mic,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FolderOpen,
  Zap,
  Star,
  TrendingUp,
  Users,
  BookOpen,
  FileText,
} from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/Footer";

export default function CreatorsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-pink-500/30">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/logo-dark.svg"
              alt="AI Workspace Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-semibold text-white">
              AI Workspace
            </span>
          </Link>
        </div>
      </nav>

      {/* SECTION 1 — Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900/20 via-black to-black pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-900/30 border border-pink-800 text-pink-300 text-sm font-medium mb-8">
                <Video className="w-4 h-4" />
                <span>For YouTubers, Writers & Influencers</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                  Your Second Brain
                  <br />
                  for{" "}
                </span>
                <span className="text-pink-500">Content Creation.</span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Stop losing your best video ideas and script drafts. Organize
                your entire creative process — prompts, research, and drafts —
                inside ChatGPT.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                  className="px-8 py-4 bg-pink-600 hover:bg-pink-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] whitespace-nowrap"
                >
                  Start Creating — Free
                </Link>
                <Link
                  href="/#showcase"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold transition-all whitespace-nowrap"
                >
                  See How It Works
                </Link>
              </div>

              {/* Social proof row */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <Image
                    src="/images/people/person 1.png"
                    alt="Creator using AI Workspace"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-black object-cover"
                  />
                  <Image
                    src="/images/people/person 3.png"
                    alt="Creator using AI Workspace"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-black object-cover"
                  />
                  <Image
                    src="/images/people/person 2.png"
                    alt="Creator using AI Workspace"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-black object-cover"
                  />
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  Loved by{" "}
                  <span className="text-white font-medium">2,000+</span>{" "}
                  creators
                </span>
              </div>
            </div>

            {/* Right — hero visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-pink-500/10 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/landingpages/creators-camera.jpg"
                  alt="Content creator workspace setup"
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover object-center"
                  priority
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                    <span className="text-sm text-white font-medium">
                      AI Workspace active
                    </span>
                    <span className="ml-auto text-xs text-gray-400">
                      48 prompts saved today
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — Stats */}
      <section className="py-16 border-y border-white/5 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2,000+", label: "Active Creators" },
              { value: "47 min", label: "Saved per Day" },
              { value: "10×", label: "Faster Content Flow" },
              { value: "100%", label: "Local & Private" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — Pain Points */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The "Creative Chaos" Problem
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              You're generating great content with AI — but then you can't find
              it when you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
                title: "Lost Ideas",
                desc: "That viral video concept you crafted last week? Buried in an endless ChatGPT history.",
                color: "yellow",
              },
              {
                icon: <PenTool className="w-6 h-6 text-pink-400" />,
                title: "Script Mess",
                desc: "YouTube scripts, TikTok hooks, and LinkedIn posts all mixed in the same conversation.",
                color: "pink",
              },
              {
                icon: <Sparkles className="w-6 h-6 text-purple-400" />,
                title: "Inconsistent Tone",
                desc: "Rewriting your brand voice prompt from memory — every single time you open ChatGPT.",
                color: "purple",
              },
              {
                icon: <FolderOpen className="w-6 h-6 text-blue-400" />,
                title: "Zero Structure",
                desc: "Research, first drafts, and sponsor emails all dumped into one endless, unsearchable list.",
                color: "blue",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors group"
              >
                <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Solution */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-pink-400 font-medium mb-3 uppercase tracking-widest text-sm">
              The Fix
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              From Chaos to
              <br />
              <span className="text-pink-500">Content Machine</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              AI Workspace turns ChatGPT into a properly organised creative
              studio. Everything in its place. Always one click away.
            </p>
          </div>

          <div className="space-y-24">
            {/* Feature 1 — Folders */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
                <Image
                  src="/images/landingpages/nested-folders.png"
                  alt="AI Workspace folder structure for creators"
                  width={800}
                  height={500}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6">
                  <FolderOpen className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Organize by Platform &amp; Campaign
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Create dedicated folders for YouTube, Newsletter, Twitter, and
                  Sponsors. Keep your research separate from your scripts.
                  Nested sub-folders mean no idea ever gets lost.
                </p>
                <ul className="space-y-3">
                  {[
                    "YouTube — Scripts, Hooks, Thumbnails",
                    "Newsletter — Drafts, Subject Lines, Topics",
                    "Sponsors — Outreach, Briefs, Rates",
                    "Brand Voice — Tone library, Bio templates",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 2 — Prompt Library */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Your Personal Idea Bank
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Save your best brainstorming prompts once. "Generate 10
                  scroll-stopping hooks", "Rewrite for LinkedIn tone", "Turn
                  this into a short-form script". Fire them in a single click —
                  no more typing the same thing every session.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: <Zap className="w-4 h-4 text-yellow-400" />,
                      label: "One-click prompts",
                    },
                    {
                      icon: <BookOpen className="w-4 h-4 text-blue-400" />,
                      label: "Unlimited library",
                    },
                    {
                      icon: <FileText className="w-4 h-4 text-pink-400" />,
                      label: "Draft templates",
                    },
                    {
                      icon: <TrendingUp className="w-4 h-4 text-green-400" />,
                      label: "Track what works",
                    },
                  ].map((chip, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"
                    >
                      {chip.icon}
                      {chip.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
                <Image
                  src="/images/landingpages/workspaces.png"
                  alt="AI Workspace prompt library for content creators"
                  width={800}
                  height={500}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Feature 3 — Instant Search */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
                <Image
                  src="/images/landingpages/instant-search.png"
                  alt="Instant search through all your Creator content"
                  width={800}
                  height={500}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Find Anything in Seconds
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Every conversation, script draft, and saved prompt is
                  instantly searchable. Type part of a title or keyword and jump
                  straight to the content — no scrolling, no hunting.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm text-gray-400 mb-2 font-medium">
                    Example search:
                  </p>
                  <p className="text-pink-400 font-mono text-sm">
                    "world events" → finds 4 conversations instantly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Use Cases */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Every Type of Creator
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Whether you publish daily or weekly, AI Workspace adapts to your
              creative process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Youtube className="w-5 h-5" />,
                title: "YouTubers",
                color: "text-red-400",
                bg: "bg-red-900/20",
                border: "hover:border-red-500/30",
                items: [
                  "Full video script versions A/B",
                  "Thumbnail concept brainstorms",
                  "Sponsor email template library",
                  "SEO title & description drafts",
                ],
              },
              {
                icon: <PenTool className="w-5 h-5" />,
                title: "Writers & Bloggers",
                color: "text-pink-400",
                bg: "bg-pink-900/20",
                border: "hover:border-pink-500/30",
                items: [
                  "Article outlines & first drafts",
                  "SEO keyword research context",
                  "Editing & rewriting workflows",
                  "Publication scheduling notes",
                ],
              },
              {
                icon: <Mic className="w-5 h-5" />,
                title: "Podcasters",
                color: "text-purple-400",
                bg: "bg-purple-900/20",
                border: "hover:border-purple-500/30",
                items: [
                  "Guest research & bio banks",
                  "Interview question libraries",
                  "Show note auto-summaries",
                  "Episode descriptions & clips",
                ],
              },
              {
                icon: <BookOpen className="w-5 h-5" />,
                title: "Course Creators",
                color: "text-blue-400",
                bg: "bg-blue-900/20",
                border: "hover:border-blue-500/30",
                items: [
                  "Curriculum planning & modules",
                  "Lesson script organisation",
                  "Email marketing sequences",
                  "Student FAQ prompt banks",
                ],
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "Social Influencers",
                color: "text-orange-400",
                bg: "bg-orange-900/20",
                border: "hover:border-orange-500/30",
                items: [
                  "Caption & hook libraries",
                  "Hashtag set management",
                  "Brand deal negotiation scripts",
                  "Content calendar prompts",
                ],
              },
              {
                icon: <FileText className="w-5 h-5" />,
                title: "Newsletter Authors",
                color: "text-green-400",
                bg: "bg-green-900/20",
                border: "hover:border-green-500/30",
                items: [
                  "Topic ideation & brainstorms",
                  "Draft archive by edition",
                  "Subject line A/B testing",
                  "Sponsor copy templates",
                ],
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl bg-white/5 border border-white/10 transition-colors ${useCase.border}`}
              >
                <div
                  className={`inline-flex items-center gap-2 mb-4 ${useCase.color}`}
                >
                  <div className={`p-2 rounded-lg ${useCase.bg}`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-bold">{useCase.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {useCase.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Creators Love It
            </h2>
            <p className="text-gray-400">
              Join thousands who stopped losing their best ideas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I used to spend 20 minutes at the start of every session just setting context. Now I open AI Workspace, click my YouTube folder, and I'm writing in seconds.",
                name: "Alex M.",
                role: "YouTuber, 180K subscribers",
                avatar: "/images/people/person 1.png",
              },
              {
                quote:
                  "My 'Brand Voice' prompt lives in a pinned folder. Every piece of content I publish now actually sounds like me — not like a generic AI.",
                name: "Sophie L.",
                role: "Newsletter Writer · 12K readers",
                avatar: "/images/people/person 3.png",
              },
              {
                quote:
                  "The instant search alone is worth it. I had 400+ chats in ChatGPT and no way to find anything. Now I search a keyword and I'm there in one second.",
                name: "Daniela R.",
                role: "Content Strategist & Blogger",
                avatar: "/images/people/person 2.png",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-5"
              >
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — Creator studio visual */}
      <section className="py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/images/landingpages/creators-studio.jpg"
              alt="Creator workspace – organised and ready"
              width={1600}
              height={600}
              className="w-full object-cover object-center"
              style={{ maxHeight: "400px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Your Creative Studio,{" "}
                  <span className="text-pink-400">Organised at Last</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-xl mx-auto">
                  Everything you create with AI — in one searchable, structured
                  place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Strong CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-black to-black pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-900/30 border border-pink-800 text-pink-300 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>Free to install — no account needed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your
            <br />
            <span className="text-pink-500">Content Machine?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            Install AI Workspace in 30 seconds and turn ChatGPT into your
            ultimate creative studio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="inline-block px-10 py-5 bg-pink-600 hover:bg-pink-500 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.5)]"
            >
              Add to Chrome — Free
            </Link>
            <Link
              href="/blog"
              className="inline-block px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-bold text-lg transition-all"
            >
              Read Creator Tips
            </Link>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            No sign-up. No sync to cloud. Works 100% on your device.
          </p>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem
              question="Can I save my brand voice prompts?"
              answer="Yes! Create a 'Brand Voice' folder in your Prompt Library and access your tone guidelines instantly in any chat. Many creators keep one pinned folder just for this."
            />
            <FaqItem
              question="Is my content secure?"
              answer="Absolutely. All your data is stored locally on your device — we never send your scripts, ideas, or drafts to any server. Your content belongs only to you."
            />
            <FaqItem
              question="Does it work with my existing ChatGPT chats?"
              answer="Yes. You can link existing conversations to folders and immediately bring structure to your history. No need to start over."
            />
            <FaqItem
              question="Do I need a paid ChatGPT plan?"
              answer="No. AI Workspace works with the free version of ChatGPT. A Pro ChatGPT subscription unlocks more AI power, but the organisation layer works on any plan."
            />
            <FaqItem
              question="What content platforms does it support?"
              answer="AI Workspace is platform-agnostic: YouTube scripts, newsletter drafts, TikTok hooks, LinkedIn posts, podcast notes, blog outlines — anything you write with ChatGPT can be organised inside."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl bg-white/5 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-medium text-base md:text-lg pr-4">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}
