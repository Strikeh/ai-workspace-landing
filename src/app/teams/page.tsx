"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Zap,
  BarChart3,
  Share2,
  ShieldCheck,
  Layout,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Building2,
} from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/Footer";

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-800 text-cyan-300 text-sm font-medium mb-8">
            <Users className="w-4 h-4" />
            <span>For Teams & Startups</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Standardize Your Team's
            <br />
            <span className="text-cyan-500">AI Workflow.</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop the chaos. Give your team a structured environment for ChatGPT.
            Organize projects, share best practices, and boost collective
            productivity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              Equip Your Team
            </Link>
          </div>

          {/* Mockup Container */}
          <div className="relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden">
            <div className="aspect-video bg-[#111] flex items-center justify-center border-b border-white/10">
              <div className="text-center p-10">
                <p className="text-gray-500 mb-2">
                  Place your screenshot here:
                </p>
                <code className="bg-black px-2 py-1 rounded text-cyan-400">
                  /images/landingpages/teams-hero.png
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Problem */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The "Wild West" of AI Adoption
            </h2>
            <p className="text-gray-400">
              Your team is using ChatGPT, but everyone is doing it differently.
              It's messy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-yellow-400" />,
                title: "Inconsistent Results",
                desc: "Junior devs using weak prompts while seniors use advanced ones. The output quality varies wildly.",
              },
              {
                icon: <Share2 className="w-6 h-6 text-cyan-400" />,
                title: "Siloed Knowledge",
                desc: "Your best prompt engineer figures out a breakthrough workflow, but no one else knows about it.",
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-red-400" />,
                title: "Low ROI",
                desc: "Paying for ChatGPT Plus seats but employees spend half their time searching for old chats.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-full w-fit">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
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
              A Unified Operating System
              <br />
              <span className="text-cyan-500">For Your Company</span>
            </h2>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-cyan-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                <div className="text-gray-500 italic">
                  Shared Library Screenshot
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Standardize Best Practices
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Create a "Company Standard" prompt library. Export your best
                  prompts and have every team member import them. Ensure
                  everyone speaks the same AI language.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Layout className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Structured Onboarding
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  New hire? Don't just give them a login. Give them a
                  pre-populated workspace with folders for "Internal Docs",
                  "Code Style", and "Marketing Voice".
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                <div className="text-gray-500 italic">
                  Workspace Structure Screenshot
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
              Departments That Benefit
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Engineering Teams",
                items: [
                  "Share debugging prompts",
                  "Standardize code review checklists",
                  "Store architecture decisions",
                ],
              },
              {
                title: "Marketing Teams",
                items: [
                  "Brand voice guidelines",
                  "Campaign structure templates",
                  "SEO keyword research workflows",
                ],
              },
              {
                title: "Sales Teams",
                items: [
                  "Objection handling scripts",
                  "Cold email generators",
                  "CRM update formatting",
                ],
              },
              {
                title: "Customer Support",
                items: [
                  "Response templates",
                  "Troubleshooting flows",
                  "Tone consistency checks",
                ],
              },
              {
                title: "Product Management",
                items: [
                  "User story formats",
                  "PRD generators",
                  "Competitor analysis frameworks",
                ],
              },
              {
                title: "Operations",
                items: [
                  "Process documentation",
                  "Meeting summary standards",
                  "Policy drafting",
                ],
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-cyan-400">
                  {useCase.title}
                </h3>
                <ul className="space-y-3">
                  {useCase.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
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
        <div className="absolute inset-0 bg-cyan-900/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your AI Operations?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Get your team organized and productive today.
          </p>
          <Link
            href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
            className="inline-block px-10 py-5 bg-white text-black rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
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
              question="Do you offer team billing?"
              answer="Currently, licenses are individual. However, we offer bulk discounts for teams of 5 or more. Contact support for details."
            />
            <FaqItem
              question="Is data shared between team members?"
              answer="By default, no. Data is local to each user's browser for privacy. Sharing is done via manual export/import of JSON files, ensuring you have full control over what is shared."
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
