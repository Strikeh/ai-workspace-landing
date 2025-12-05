"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Video,
  Lightbulb,
  PenTool,
  Youtube,
  Instagram,
  Mic,
  Sparkles,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  FolderOpen,
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

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-900/30 border border-pink-800 text-pink-300 text-sm font-medium mb-8">
            <Video className="w-4 h-4" />
            <span>For YouTubers, Writers & Influencers</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Your Second Brain for
            <br />
            <span className="text-pink-500">Content Creation.</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop losing your best video ideas and script drafts. Organize your
            entire creative process inside ChatGPT.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="px-8 py-4 bg-pink-600 hover:bg-pink-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
            >
              Start Creating
            </Link>
          </div>

          {/* Mockup Container */}
          <div className="relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden">
            <div className="aspect-video bg-[#111] flex items-center justify-center border-b border-white/10">
              <div className="text-center p-10">
                <p className="text-gray-500 mb-2">
                  Place your screenshot here:
                </p>
                <code className="bg-black px-2 py-1 rounded text-pink-400">
                  /images/landingpages/creators-hero.png
                </code>
              </div>
            </div>
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
            <p className="text-gray-400">
              Is your ChatGPT history a graveyard of lost ideas?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
                title: "Lost Ideas",
                desc: "That viral video concept you generated last week? Gone forever.",
              },
              {
                icon: <PenTool className="w-6 h-6 text-pink-400" />,
                title: "Script Mess",
                desc: "Drafts for YouTube, TikTok, and LinkedIn mixed together.",
              },
              {
                icon: <Sparkles className="w-6 h-6 text-purple-400" />,
                title: "Inconsistent Tone",
                desc: "Rewriting your 'Brand Voice' prompt every single time.",
              },
              {
                icon: <FolderOpen className="w-6 h-6 text-blue-400" />,
                title: "No Structure",
                desc: "Research, scripts, and emails all in one endless list.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Solution */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              From Chaos to
              <br />
              <span className="text-pink-500">Content Machine</span>
            </h2>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-pink-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                <div className="text-gray-500 italic">
                  Folder Structure Screenshot
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6">
                  <FolderOpen className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Organize by Platform
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Create dedicated folders for YouTube, Newsletter, Twitter, and
                  Sponsors. Keep your research separate from your scripts.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Your "Idea Bank" Prompt Library
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Save your best brainstorming prompts. "Generate 10 hooks",
                  "Rewrite for LinkedIn", "Summarize for Newsletter". Access
                  them in one click.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                <div className="text-gray-500 italic">
                  Prompt Library Screenshot
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
              Built for Creators
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "YouTubers",
                items: [
                  "Video script versions",
                  "Thumbnail idea generation",
                  "Sponsor email drafts",
                ],
              },
              {
                title: "Writers / Bloggers",
                items: [
                  "Article outlines",
                  "SEO keyword research",
                  "Editing workflows",
                ],
              },
              {
                title: "Podcasters",
                items: [
                  "Guest research",
                  "Interview question banks",
                  "Show note summaries",
                ],
              },
              {
                title: "Course Creators",
                items: [
                  "Curriculum planning",
                  "Lesson script organization",
                  "Marketing email sequences",
                ],
              },
              {
                title: "Social Media Influencers",
                items: [
                  "Caption libraries",
                  "Hashtag sets",
                  "Brand deal negotiation",
                ],
              },
              {
                title: "Newsletters",
                items: [
                  "Topic brainstorming",
                  "Draft archives",
                  "Subject line testing",
                ],
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-pink-400">
                  {useCase.title}
                </h3>
                <ul className="space-y-3">
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

      {/* SECTION 8 — Strong CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-pink-900/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create More?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Turn ChatGPT into your ultimate creative studio.
          </p>
          <Link
            href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
            className="inline-block px-10 py-5 bg-white text-black rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Free
          </Link>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <FaqItem
              question="Can I save my brand voice prompts?"
              answer="Yes! Create a 'Brand Voice' folder in your Prompt Library and access your tone guidelines instantly in any chat."
            />
            <FaqItem
              question="Is my content secure?"
              answer="Absolutely. All your data is stored locally on your device. We don't see your scripts, ideas, or drafts."
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
    <div className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-medium text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
          {answer}
        </div>
      )}
    </div>
  );
}
