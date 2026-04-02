"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Search,
  Star,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Calendar,
  Zap,
  Users,
  BarChart2,
  MessageSquare,
  Clock,
  Layers,
  FileText,
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

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-900/30 border border-orange-800 text-orange-300 text-sm font-medium mb-8">
                <Instagram className="w-4 h-4" />
                <span>For Social Media Managers</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                  10 Clients.{" "}
                </span>
                <span className="text-orange-500">Zero Brand Mixups.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Stop writing captions for Client A in Client B&apos;s tone. Get
                a dedicated workspace per brand, platform-specific templates,
                and instant content retrieval.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                  className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] whitespace-nowrap"
                >
                  Organize Your Clients
                </Link>
                <Link
                  href="/#showcase"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold transition-all whitespace-nowrap"
                >
                  See How It Works
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "/images/people/person 1.png",
                    "/images/people/person 3.png",
                    "/images/people/person 2.png",
                  ].map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt="Social media manager using AI Workspace"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-black object-cover"
                    />
                  ))}
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
                  Trusted by{" "}
                  <span className="text-white font-medium">3,000+</span> social
                  media managers
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/10 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/landingpages/smm-social.jpg"
                  alt="Social media manager at work"
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover object-center"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                    <span className="text-sm text-white font-medium">
                      @BrandX workspace active
                    </span>
                    <span className="ml-auto text-xs text-gray-400">
                      28 caption templates
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-white/5 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "3,000+", label: "Social Media Managers" },
              { value: "45 min", label: "Saved per Day" },
              { value: "5\u00d7", label: "Faster Content Creation" },
              { value: "100%", label: "Local & Private" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Managing Multiple Brands is a Mess
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              You know the brand voice for every client in your head. ChatGPT
              doesn&apos;t — and it mixes them all up.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6 text-red-400" />,
                title: "Brand Voice Bleed",
                desc: "Client A's playful Gen-Z tone accidentally injected into Client B's corporate LinkedIn copy.",
              },
              {
                icon: <Clock className="w-6 h-6 text-orange-400" />,
                title: "Slow Daily Startup",
                desc: "Pasting brand guidelines into ChatGPT every morning before you can write a single caption.",
              },
              {
                icon: <FileText className="w-6 h-6 text-yellow-400" />,
                title: "Lost Caption Templates",
                desc: "That perfect Instagram hook formula you built last month? Gone in your chat history.",
              },
              {
                icon: <Calendar className="w-6 h-6 text-purple-400" />,
                title: "No Content Calendar View",
                desc: "Your AI output is scattered across random chats with no platform or client context attached.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION Feature 1 */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/landingpages/nested-folders.png"
                  alt="Dedicated client workspaces for social media"
                  width={700}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-900/20 border border-orange-800/40 text-orange-400 text-xs font-medium mb-6">
                <Layers className="w-3.5 h-3.5" /> Brand Isolation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                One Workspace. One Brand Voice.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Each client brand gets its own workspace pre-loaded with their
                tone, guidelines, and persona. Switch brands in one click —
                different world, zero bleed.
              </p>
              <ul className="space-y-4">
                {[
                  "Brand voice stored per client",
                  "Platform-specific context",
                  "Hashtag & keyword libraries",
                  "Immediate brand context on startup",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION Feature 2 */}
      <section className="py-24 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-900/20 border border-orange-800/40 text-orange-400 text-xs font-medium mb-6">
                <MessageSquare className="w-3.5 h-3.5" /> Caption Templates
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Reusable Caption Templates per Platform
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Save your best-performing caption formulas as reusable prompts
                per platform. Instagram hook templates, LinkedIn thought
                leadership prompts, TikTok hooks — ready with one click per
                client.
              </p>
              <ul className="space-y-4">
                {[
                  "Instagram, LinkedIn, TikTok templates",
                  "Platform-specific tone adjustments",
                  "Save best-performing formulas",
                  "Plug in new content to any template",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/landingpages/workspaces.png"
                  alt="Caption template library"
                  width={700}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION Feature 3 */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/landingpages/instant-search.png"
                  alt="Find any content asset instantly"
                  width={700}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-900/20 border border-orange-800/40 text-orange-400 text-xs font-medium mb-6">
                <Search className="w-3.5 h-3.5" /> Content Retrieval
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Any Content Asset by Keyword
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Search across all client workspaces instantly. That viral hook
                you wrote for a beauty brand 3 months ago? Adapt it for a new
                campaign in 30 seconds instead of starting over.
              </p>
              <ul className="space-y-4">
                {[
                  "Search by keyword or hashtag",
                  "Filter by client or platform",
                  "Repurpose past content instantly",
                  "Build a growing content database",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Every SMM Workflow
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Instagram className="w-5 h-5" />,
                title: "Instagram Management",
                items: [
                  "Caption formulas per brand",
                  "Story & reel prompts",
                  "Bio optimization templates",
                ],
              },
              {
                icon: <MessageSquare className="w-5 h-5" />,
                title: "LinkedIn Content",
                items: [
                  "Thought leadership prompts",
                  "Company update templates",
                  "Engagement comment starters",
                ],
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "TikTok & Reels",
                items: [
                  "Hook formula library",
                  "Trending audio script prompts",
                  "Description & CTA templates",
                ],
              },
              {
                icon: <Calendar className="w-5 h-5" />,
                title: "Content Planning",
                items: [
                  "Monthly theme prompts",
                  "Campaign brief templates",
                  "Content repurposing workflows",
                ],
              },
              {
                icon: <BarChart2 className="w-5 h-5" />,
                title: "Analytics & Reporting",
                items: [
                  "Performance analysis prompts",
                  "Client report templates",
                  "Insights summary frameworks",
                ],
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "Community Management",
                items: [
                  "Comment response templates",
                  "DM reply frameworks",
                  "Crisis response prompts",
                ],
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 text-white">
                  {useCase.title}
                </h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SMMs Love It
            </h2>
            <p className="text-gray-400 text-lg">
              Real results from social media professionals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                avatar: "/images/people/person 1.png",
                name: "Carlos",
                role: "Social Media Manager, 12 clients",
                quote:
                  "I used to accidentally write in the wrong brand voice constantly. Now each client has their own workspace. I switch in one click and the entire context changes. Changed my career.",
              },
              {
                avatar: "/images/people/person 3.png",
                name: "Lily",
                role: "Content Creator & SMM",
                quote:
                  "My Instagram hook formula is saved as a prompt. I paste new content into it and get 5 caption options in 30 seconds. I used to spend an hour per post. Not anymore.",
              },
              {
                avatar: "/images/people/person 2.png",
                name: "Rachel",
                role: "Agency SMM Lead",
                quote:
                  "Finding past content was a nightmare. Now I search 'luxury brand holiday' and get every caption and strategy I wrote for holiday seasons. The database just keeps growing.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-300 leading-relaxed flex-1 mb-6">
                  &quot;{t.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border-2 border-orange-500/30"
                  />
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {t.name}
                    </div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WIDE VISUAL BANNER */}
      <section className="relative h-[380px] overflow-hidden">
        <Image
          src="/images/landingpages/smm-social.jpg"
          alt="Social media content creation with AI Workspace"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <p className="text-orange-400 font-semibold mb-3 tracking-wide uppercase text-sm">
                For Social Media Managers
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Every brand. Every platform. Zero mixups.
              </h2>
              <p className="text-gray-300 text-lg">
                AI Workspace keeps every client brand isolated so you can create
                faster and never worry about voice contamination again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/30 via-black to-black pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-900/30 border border-orange-800 text-orange-300 text-sm font-medium mb-8">
            <span>Free to install \u2014 no account needed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Organize Your Brands?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            3,000+ social media managers already switched. Zero brand mixups
            from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:shadow-[0_0_50px_rgba(234,88,12,0.6)]"
            >
              Organize Your Clients
            </Link>
            <Link
              href="/#showcase"
              className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-bold text-lg transition-all"
            >
              See How It Works
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Free Chrome extension \u00b7 No data sent to servers \u00b7
            Uninstall anytime
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem
              question="Is AI Workspace free for social media managers?"
              answer="Yes, the core features are free. You get client workspaces, caption template libraries, and instant search at no cost."
            />
            <FaqItem
              question="How does it prevent brand voice mixups?"
              answer="Each brand gets a completely isolated workspace. When you switch to a client's workspace, you get a fresh context with only that brand's voice, guidelines, and templates loaded."
            />
            <FaqItem
              question="Can I save caption templates for different platforms?"
              answer="Yes. Create separate prompt folders for Instagram, LinkedIn, TikTok, and any other platform. Each template can be platform-specific and reused with one click."
            />
            <FaqItem
              question="Is client content kept private?"
              answer="Completely. All data is stored locally in your browser. Nothing is sent to our servers. Your clients' brand guidelines and content strategies stay on your machine."
            />
            <FaqItem
              question="Can I search across all clients' past content?"
              answer="Yes. The instant search scans all your workspaces simultaneously. You can find any caption, strategy, or content piece across all clients in seconds with a keyword search."
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
