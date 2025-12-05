"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  DollarSign,
  Clock,
  FileText,
  Coffee,
  Laptop,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  FolderOpen,
} from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/Footer";

export default function FreelancersPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-300 text-sm font-medium mb-8">
            <Laptop className="w-4 h-4" />
            <span>For Freelancers & Solopreneurs</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            The Solo Business OS
            <br />
            <span className="text-emerald-500">for ChatGPT.</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Juggle 5 clients, admin work, and your own marketing without losing
            your mind. Keep every project perfectly organized.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              Get Organized
            </Link>
          </div>

          {/* Mockup Container */}
          <div className="relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden">
            <div className="aspect-video bg-[#111] flex items-center justify-center border-b border-white/10">
              <div className="text-center p-10">
                <p className="text-gray-500 mb-2">
                  Place your screenshot here:
                </p>
                <code className="bg-black px-2 py-1 rounded text-emerald-400">
                  /images/landingpages/freelancers-hero.png
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
              The "Context Switching" Trap
            </h2>
            <p className="text-gray-400">
              Switching between Client A, Client B, and your taxes kills your
              flow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
                title: "Project Mix-up",
                desc: "Sending code for Project A to the chat for Project B.",
              },
              {
                icon: <Clock className="w-6 h-6 text-orange-400" />,
                title: "Lost Time",
                desc: "Spending 15 minutes finding that one prompt you used last week.",
              },
              {
                icon: <FileText className="w-6 h-6 text-blue-400" />,
                title: "Admin Chaos",
                desc: "Invoices, proposals, and contracts scattered everywhere.",
              },
              {
                icon: <Coffee className="w-6 h-6 text-yellow-400" />,
                title: "Burnout",
                desc: "Mental fatigue from constantly re-explaining context to AI.",
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
              Your Entire Business
              <br />
              <span className="text-emerald-500">In One Place</span>
            </h2>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-emerald-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                <div className="text-gray-500 italic">
                  Project Folders Screenshot
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                  <FolderOpen className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Folders for Every Project
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Create a folder for "Web Design Client", "Copywriting Gig",
                  and "My Taxes". Switch contexts instantly without confusing
                  the AI.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Admin & Sales Prompts
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Save prompts for "Write Invoice Email", "Draft Proposal", and
                  "Cold Outreach". Spend less time on admin and more time
                  getting paid.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
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
              Built for Solopreneurs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Developers",
                items: [
                  "Store code snippets per project",
                  "Debug logs organization",
                  "Documentation generators",
                ],
              },
              {
                title: "Designers",
                items: [
                  "Client feedback summaries",
                  "Design rationale generator",
                  "Portfolio copy drafts",
                ],
              },
              {
                title: "Virtual Assistants",
                items: [
                  "Email templates per client",
                  "Scheduling workflows",
                  "Meeting summary formats",
                ],
              },
              {
                title: "Consultants",
                items: [
                  "Strategy framework prompts",
                  "Client research folders",
                  "Report generators",
                ],
              },
              {
                title: "Translators",
                items: [
                  "Glossary storage",
                  "Tone guidelines per client",
                  "Quality check prompts",
                ],
              },
              {
                title: "Coaches",
                items: [
                  "Session plan templates",
                  "Client progress notes",
                  "Marketing content",
                ],
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-emerald-400">
                  {useCase.title}
                </h3>
                <ul className="space-y-3">
                  {useCase.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
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
        <div className="absolute inset-0 bg-emerald-900/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Take Control of Your Freelance Business
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Stop wasting billable hours searching for chats.
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
              question="Is it tax deductible?"
              answer="If you purchase the Pro plan for your business, it is likely a tax-deductible software expense. Consult your accountant."
            />
            <FaqItem
              question="Can I export my chats for clients?"
              answer="Yes! You can export entire conversations to Markdown or JSON to share your AI research or drafts with clients."
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
