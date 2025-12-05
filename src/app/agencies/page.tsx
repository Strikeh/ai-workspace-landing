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
} from "lucide-react";
import { useState } from "react";

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

      {/* SECTION 1 — Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-sm font-medium mb-8">
            <Briefcase className="w-4 h-4" />
            <span>Built specifically for Agencies</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            The AI Workspace for Agencies
            <br />
            <span className="text-blue-500">
              One workspace per client.
            </span>{" "}
            Zero chaos.
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Keep every client’s prompts, chats, workflows and brand guidelines
            fully separated — secure, organized and instantly accessible inside
            your browser.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              Try Free
            </Link>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold transition-all backdrop-blur-sm">
              View Screenshots
            </button>
          </div>

          {/* Mockup Container */}
          <div className="relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden">
            <Image
              src="/images/landingpages/workspaces.png"
              alt="AI Workspace for Agencies"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — Pain Points */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Real Problem: AI Chaos Across All Your Clients
            </h2>
            <p className="text-gray-400">
              Agencies are frustrated by ChatGPT chaos. Does this sound
              familiar?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6 text-red-400" />,
                title: "Client Data Mix-ups",
                desc: "Ads for Client A ending up in Client B's chat history.",
              },
              {
                icon: <FileText className="w-6 h-6 text-orange-400" />,
                title: "Inconsistent Quality",
                desc: "Team uses different prompts, leading to varied results.",
              },
              {
                icon: <Layers className="w-6 h-6 text-yellow-400" />,
                title: "No Shared Workflows",
                desc: "Every team member has to 'figure it out' themselves.",
              },
              {
                icon: <Shield className="w-6 h-6 text-red-400" />,
                title: "Security Risks",
                desc: "Sensitive client info scattered across random chats.",
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
              One Workspace per Client
              <br />
              <span className="text-blue-500">
                Organized, Secure, Consistent
              </span>
            </h2>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-blue-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                {/* Placeholder for Screenshot */}
                <div className="text-gray-500 italic">
                  Workspace Tabs Screenshot
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Client-specific AI Workspaces
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Keep prompts, chats, outputs and workflows fully separated per
                  client — no more mix-ups or lost guidelines. Switch between
                  client contexts instantly.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Separate Prompt Libraries
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Store, tag and reuse the exact prompts that belong to each
                  client. Never accidentally use a "playful" tone prompt for a
                  "corporate" client again.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                <div className="text-gray-500 italic">
                  Prompt Library Screenshot
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-green-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                <div className="text-gray-500 italic">
                  Lock & Password Modal Screenshot
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Encrypted Workspaces for NDA Clients
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Lock private projects behind a password. Perfect for sensitive
                  or confidential client work where data security is
                  non-negotiable.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Reusable AI Workflows
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Build your own workflows for Social, Ads, Email & More. Start
                  from templates and reuse them across all clients with one
                  click.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                <div className="text-gray-500 italic">
                  Workflow Template List Screenshot
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
              Built for the Way Agencies Actually Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Social Media Agency",
                items: [
                  "Content calendars per client",
                  "Reusable IG/TikTok workflows",
                  "Tone-of-voice stored per workspace",
                ],
              },
              {
                title: "Ad Agencies",
                items: [
                  "Ad copy iterations per client",
                  "Save best-performing angles",
                  "Compare outputs side-by-side",
                ],
              },
              {
                title: "Copywriting Agencies",
                items: [
                  "Standardized writing frameworks",
                  "Client brandbooks saved",
                  "Keep version history organized",
                ],
              },
              {
                title: "Creative Agencies",
                items: [
                  "Brainstorm rooms per client",
                  "Idea tracking",
                  "AI concept generation shared",
                ],
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  {useCase.title}
                </h3>
                <ul className="space-y-3">
                  {useCase.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Comparison */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Without AI Workspace vs With AI Workspace
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Without */}
            <div className="p-8 rounded-2xl bg-red-900/5 border border-red-500/20">
              <h3 className="text-xl font-bold mb-6 text-red-400 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Without AI Workspace
              </h3>
              <ul className="space-y-4">
                {[
                  "Mixed chats & confusion",
                  "Lost prompts & ideas",
                  "Zero structure",
                  "Risk of leaking client data",
                  "No team consistency",
                  "No workflow reuse",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <XCircle className="w-5 h-5 text-red-500/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="p-8 rounded-2xl bg-green-900/5 border border-green-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full pointer-events-none"></div>
              <h3 className="text-xl font-bold mb-6 text-green-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> With AI Workspace
              </h3>
              <ul className="space-y-4">
                {[
                  "Clear client boundaries",
                  "Everything categorized",
                  "Encrypted for NDAs",
                  "One-click workflows",
                  "Reusable prompts",
                  "Team reliability",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Testimonials */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
              S
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
              "Since using AI Workspace, our client work is twice as fast. We
              finally have structure — no more hunting for prompts."
            </blockquote>
            <div className="text-gray-400">
              <span className="text-white font-semibold">Sofie</span> — Agency
              Owner
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Strong CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Organize Your Client Workflows?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Create your first client workspace today.
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
              question="Can my team collaborate in the same workspace?"
              answer="Yes — multiple users per workspace is a core feature we are rolling out to ensure your entire agency stays on the same page."
            />
            <FaqItem
              question="Is client data secure?"
              answer="Absolutely. We use encrypted workspaces, local encryption, and password-locks to ensure sensitive client data never leaks."
            />
            <FaqItem
              question="Is this better than using ChatGPT directly?"
              answer="Yes. While ChatGPT mixes all your data together, AI Workspace separates everything per client, preventing cross-contamination and confusion."
            />
          </div>
        </div>
      </section>
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
