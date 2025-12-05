"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Share2,
  Users,
  MessageCircle,
  Hash,
  Calendar,
  Layers,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/Footer";

export default function SocialMediaManagersPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-900/30 border border-orange-800 text-orange-300 text-sm font-medium mb-8">
            <Share2 className="w-4 h-4" />
            <span>For Social Media Managers</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Manage 10+ Brands
            <br />
            <span className="text-orange-500">Without Losing Your Mind.</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Keep every client's voice, hashtags, and content calendars perfectly
            separated. No more copy-pasting the wrong caption.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
            >
              Organize Your Clients
            </Link>
          </div>

          {/* Mockup Container */}
          <div className="relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden">
            <div className="aspect-video bg-[#111] flex items-center justify-center border-b border-white/10">
              <div className="text-center p-10">
                <p className="text-gray-500 mb-2">
                  Place your screenshot here:
                </p>
                <code className="bg-black px-2 py-1 rounded text-orange-400">
                  /images/landingpages/smm-hero.png
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
              The "Wrong Account" Nightmare
            </h2>
            <p className="text-gray-400">
              Juggling multiple brands in one ChatGPT window is a recipe for
              disaster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6 text-red-400" />,
                title: "Mixed Voices",
                desc: "Accidentally using a 'fun' tone for a corporate law firm client.",
              },
              {
                icon: <Hash className="w-6 h-6 text-orange-400" />,
                title: "Lost Hashtags",
                desc: "Searching through 50 chats to find that one hashtag set.",
              },
              {
                icon: <Calendar className="w-6 h-6 text-yellow-400" />,
                title: "Calendar Chaos",
                desc: "Drafts for next month mixed with random brainstorming.",
              },
              {
                icon: <MessageCircle className="w-6 h-6 text-blue-400" />,
                title: "Reply Fatigue",
                desc: "Rewriting the same 'Thanks for your comment!' variations manually.",
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
              One Workspace Per Brand
              <br />
              <span className="text-orange-500">Total Separation.</span>
            </h2>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-orange-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                <div className="text-gray-500 italic">
                  Client Workspaces Screenshot
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Dedicated Client Workspaces
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Create a separate workspace for each client. Keep their brand
                  guidelines, previous posts, and strategy docs completely
                  isolated.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Reusable Caption Templates
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Build a library of caption structures. "Educational Carousel",
                  "Meme Format", "Product Launch". Reuse them across clients
                  with one click.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                <div className="text-gray-500 italic">
                  Template Library Screenshot
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
              Built for Social Pros
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Content Calendars",
                items: [
                  "Brainstorm 30 days of content",
                  "Organize by content pillar",
                  "Draft captions in bulk",
                ],
              },
              {
                title: "Community Management",
                items: [
                  "Save standard reply templates",
                  "FAQ response bank",
                  "Crisis management scripts",
                ],
              },
              {
                title: "Strategy & Reporting",
                items: [
                  "Analyze competitor posts",
                  "Summarize monthly reports",
                  "Pitch deck outlines",
                ],
              },
              {
                title: "Influencer Outreach",
                items: [
                  "DM templates",
                  "Collaboration proposals",
                  "Contract review prompts",
                ],
              },
              {
                title: "Ad Copy",
                items: [
                  "A/B test variations",
                  "Hook generation",
                  "CTA optimization",
                ],
              },
              {
                title: "Trend Jacking",
                items: [
                  "Quickly adapt memes",
                  "Rewrite trending news",
                  "Viral hook formulas",
                ],
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-orange-400">
                  {useCase.title}
                </h3>
                <ul className="space-y-3">
                  {useCase.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
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
        <div className="absolute inset-0 bg-orange-900/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Agency?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Handle more clients with less stress.
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
              question="Can I share workspaces with my team?"
              answer="Team collaboration features are coming soon! For now, you can export your prompt libraries and share them with your team."
            />
            <FaqItem
              question="Does this work for LinkedIn and Twitter too?"
              answer="Yes! AI Workspace organizes your ChatGPT conversations, which you can use to generate content for any platform."
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
