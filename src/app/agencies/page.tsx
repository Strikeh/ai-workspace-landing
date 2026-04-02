"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Shield,
  Users,
  Layers,
  FileText,
  Search,
  Lock,
  Zap,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  Globe,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/Footer";

export default function AgenciesPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-sm font-medium mb-8">
                <Briefcase className="w-4 h-4" />
                <span>Built specifically for Agencies</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                  One AI tool.{" "}
                </span>
                <span className="text-blue-500">Every Client Separated.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Stop mixing client prompts. Get dedicated workspaces for every
                account, organized prompt libraries, and zero context bleed
                between clients.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] whitespace-nowrap"
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
                      alt="Agency professional using AI Workspace"
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
                  <span className="text-white font-medium">500+</span> agencies
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/landingpages/agencies-team.jpg"
                  alt="Agency team working with AI tools"
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover object-center"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-sm text-white font-medium">
                      Acme Corp workspace active
                    </span>
                    <span className="ml-auto text-xs text-gray-400">
                      8 separate clients
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
              { value: "500+", label: "Agency Teams" },
              { value: "4×", label: "Faster Client Work" },
              { value: "Zero", label: "Context Bleed" },
              { value: "100%", label: "Local & Private" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">
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
              Why Agencies Struggle with AI
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Great AI output is getting mixed with the wrong clients. Context
              bleed is silently killing quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6 text-red-400" />,
                title: "Mixed-Up Clients",
                desc: "Brand voice from Client A leaking into Client B's copy. One missed detail and you're rewriting everything.",
              },
              {
                icon: <Clock className="w-6 h-6 text-orange-400" />,
                title: "Wasted Ramp-Up Time",
                desc: "Pasting the same client brief every morning before getting anything useful out of ChatGPT.",
              },
              {
                icon: <FileText className="w-6 h-6 text-yellow-400" />,
                title: "Lost Approved Prompts",
                desc: "That prompt template your best copywriter built 3 months ago? Gone in the chat history.",
              },
              {
                icon: <Lock className="w-6 h-6 text-purple-400" />,
                title: "No Client Confidentiality",
                desc: "Sensitive client briefs floating in shared chat history with no separation or access control.",
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

      {/* SOLUTION — Feature 1 */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/landingpages/nested-folders.png"
                  alt="Client-specific folders in AI Workspace"
                  width={700}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-800/40 text-blue-400 text-xs font-medium mb-6">
                <Layers className="w-3.5 h-3.5" /> Client Isolation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Dedicated Workspace for Every Client
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Switch between clients in one click. Each workspace has its own
                folders, prompts, and chat history. No mixing. No leaking. No
                awkward explanations.
              </p>
              <ul className="space-y-4">
                {[
                  "Isolated folders per client account",
                  "Client brand voice always in context",
                  "Instant workspace switching",
                  "No accidental cross-contamination",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION — Feature 2 */}
      <section className="py-24 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-800/40 text-blue-400 text-xs font-medium mb-6">
                <FileText className="w-3.5 h-3.5" /> Prompt Libraries
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Separate Prompt Libraries Per Client
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Save your best-performing prompts for each client. Blog
                templates, ad copy frameworks, tone-of-voice guides — all stored
                separately and reusable with one click.
              </p>
              <ul className="space-y-4">
                {[
                  "Client-specific prompt templates",
                  "One-click prompt insertion",
                  "Save approved copy frameworks",
                  "Build your agency's IP over time",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/landingpages/workspaces.png"
                  alt="Workspace management in AI Workspace"
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

      {/* SOLUTION — Feature 3 */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/landingpages/instant-search.png"
                  alt="Instant search across client work"
                  width={700}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-800/40 text-blue-400 text-xs font-medium mb-6">
                <Search className="w-3.5 h-3.5" /> Instant Retrieval
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Any Client Asset in Seconds
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Stop digging through months of chat history. Search by keyword
                across all your client workspaces. That ad headline you wrote
                for Client C in January? Found in 2 seconds.
              </p>
              <ul className="space-y-4">
                {[
                  "Full-text search across all workspaces",
                  "Filter by client or project",
                  "Retrieve approved copy instantly",
                  "Stop rewriting from scratch",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
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
              Built for Every Agency Workflow
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="w-5 h-5" />,
                color: "blue",
                title: "Content Agencies",
                items: [
                  "Blog & article production",
                  "Client tone-of-voice prompts",
                  "SEO content frameworks",
                ],
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                color: "indigo",
                title: "Performance Marketing",
                items: [
                  "Ad copy per client account",
                  "A/B test prompt variants",
                  "Funnel copy templates",
                ],
              },
              {
                icon: <Users className="w-5 h-5" />,
                color: "sky",
                title: "Social Media Agencies",
                items: [
                  "Platform-specific captions",
                  "Brand hashtag libraries",
                  "Content calendar prompts",
                ],
              },
              {
                icon: <Briefcase className="w-5 h-5" />,
                color: "violet",
                title: "PR Agencies",
                items: [
                  "Press release templates",
                  "Client messaging guides",
                  "Crisis comms frameworks",
                ],
              },
              {
                icon: <Shield className="w-5 h-5" />,
                color: "cyan",
                title: "Brand Strategy",
                items: [
                  "Brand voice documents",
                  "Competitor analysis prompts",
                  "Positioning frameworks",
                ],
              },
              {
                icon: <Zap className="w-5 h-5" />,
                color: "blue",
                title: "Creative Studios",
                items: [
                  "Concept brief generators",
                  "Creative direction prompts",
                  "Client feedback loops",
                ],
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-4">
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
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
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
              Agencies Trust It
            </h2>
            <p className="text-gray-400 text-lg">
              Real results from agency teams
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                avatar: "/images/people/person 1.png",
                name: "James",
                role: "Founder, ContentCo Agency",
                quote:
                  "We manage 12 clients. Before this, our copywriters were accidentally mixing brand voices constantly. Now each client has its own workspace. Zero mix-ups in 6 months.",
              },
              {
                avatar: "/images/people/person 3.png",
                name: "Sara",
                role: "Head of Copy, Bravo Agency",
                quote:
                  "The prompt library feature alone saves us 2 hours a day. Our best-performing ad frameworks are saved per client. New hires are instantly productive.",
              },
              {
                avatar: "/images/people/person 2.png",
                name: "Patricia",
                role: "Agency Director",
                quote:
                  "Client confidentiality was a concern with shared AI tools. Now everything is local, separated, and secure. We can use AI at scale without the risk.",
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
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/30"
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
          src="/images/landingpages/agencies-team.jpg"
          alt="Agency team collaborating with AI Workspace"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <p className="text-blue-400 font-semibold mb-3 tracking-wide uppercase text-sm">
                For Agencies
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Every client. One tool. Zero bleed.
              </h2>
              <p className="text-gray-300 text-lg">
                Stop juggling tabs and mixing contexts. AI Workspace gives every
                client account the isolation it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-black to-black pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-sm font-medium mb-8">
            <span>Free to install — no account needed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Organize Your Clients?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            500+ agency teams already switched. Zero context bleed guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)]"
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
            Free Chrome extension · No data sent to servers · Uninstall anytime
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
              question="Is AI Workspace free for agencies?"
              answer="Yes, the core features are free. You get workspaces, folders, saved prompts, and instant search at no cost. A Pro plan unlocks unlimited workspaces and advanced features for larger teams."
            />
            <FaqItem
              question="How does it prevent context bleed between clients?"
              answer="Each client gets a completely isolated workspace. Prompts, folders, and chat history are never shared across workspaces. Switching clients means a fresh, isolated context every time."
            />
            <FaqItem
              question="Can our whole team use the same workspace?"
              answer="Currently AI Workspace runs as a Chrome extension per user. Each team member can set up their own workspaces. Shared team libraries are on our roadmap."
            />
            <FaqItem
              question="Is client data secure?"
              answer="Absolutely. All your workspace data — folders, prompts, saved chats — is stored locally in your browser. Nothing is sent to our servers. Client data never leaves your machine."
            />
            <FaqItem
              question="Does it work with ChatGPT Teams or Enterprise?"
              answer="Yes. AI Workspace enhances any ChatGPT account, including Teams and Enterprise plans. It works as an overlay on top of the ChatGPT interface."
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
