"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Briefcase,
  BrainCircuit,
  FileText,
  Users,
  Lock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Library,
} from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/Footer";

export default function ConsultantsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-800 text-indigo-300 text-sm font-medium mb-8">
            <Briefcase className="w-4 h-4" />
            <span>For Consultants & Advisors</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Turn ChatGPT Into Your
            <br />
            <span className="text-indigo-500">Research Analyst.</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Organize client insights, build reusable strategy frameworks, and
            keep confidential data segmented. The professional layer for AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]"
            >
              Professional Upgrade
            </Link>
          </div>

          {/* Mockup Container */}
          <div className="relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden">
            <div className="aspect-video bg-[#111] flex items-center justify-center border-b border-white/10">
              <div className="text-center p-10">
                <p className="text-gray-500 mb-2">
                  Place your screenshot here:
                </p>
                <code className="bg-black px-2 py-1 rounded text-indigo-400">
                  /images/landingpages/consultants-hero.png
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
              The "Messy Desk" Problem
            </h2>
            <p className="text-gray-400">
              You wouldn't mix client files on your desk. Why do it in ChatGPT?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="w-6 h-6 text-red-400" />,
                title: "Data Leakage Risk",
                desc: "Accidentally pasting Client A's financials into a chat history full of Client B's strategy.",
              },
              {
                icon: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
                title: "Lost Intellectual Property",
                desc: "Your best prompts and frameworks get buried under hundreds of 'write me an email' chats.",
              },
              {
                icon: <Users className="w-6 h-6 text-blue-400" />,
                title: "Context Amnesia",
                desc: "Wasting billable hours re-teaching the AI about your client's industry every single time.",
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
              Build Your
              <br />
              <span className="text-indigo-500">Consulting Brain</span>
            </h2>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-indigo-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                <div className="text-gray-500 italic">
                  Client Folders Screenshot
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Client-Specific Workspaces
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Keep every client's data strictly separated. Create a folder
                  for "Acme Corp" and another for "Stark Industries". Never mix
                  up contexts again.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Library className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Framework Library</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Turn your methodology into a prompt library. Save your "SWOT
                  Analysis", "Market Entry Strategy", or "Code Audit" prompts
                  and reuse them across clients.
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
              For Every Type of Advisor
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Management Consultants",
                items: [
                  "Market research synthesis",
                  "Slide deck outlining",
                  "Meeting minute analysis",
                ],
              },
              {
                title: "Financial Advisors",
                items: [
                  "Report generation",
                  "Regulatory compliance checks",
                  "Client communication drafts",
                ],
              },
              {
                title: "Legal Consultants",
                items: [
                  "Contract clause review",
                  "Case law summarization",
                  "Drafting legal memos",
                ],
              },
              {
                title: "Marketing Strategists",
                items: [
                  "Competitor analysis",
                  "Campaign ideation",
                  "Copywriting frameworks",
                ],
              },
              {
                title: "HR Consultants",
                items: [
                  "Policy drafting",
                  "Job description optimization",
                  "Employee survey analysis",
                ],
              },
              {
                title: "IT Consultants",
                items: [
                  "Code review",
                  "Architecture documentation",
                  "Technical requirement gathering",
                ],
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-indigo-400">
                  {useCase.title}
                </h3>
                <ul className="space-y-3">
                  {useCase.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
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
        <div className="absolute inset-0 bg-indigo-900/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Elevate Your Consulting Practice
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Deliver better insights, faster. Organize your AI workflow today.
          </p>
          <Link
            href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
            className="inline-block px-10 py-5 bg-white text-black rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Install for Free
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
              question="Is my client data safe?"
              answer="AI Workspace runs locally in your browser. We do not store your chat data or prompts on our servers. Your client confidentiality is preserved."
            />
            <FaqItem
              question="Can I share prompts with my team?"
              answer="Currently, prompts are stored locally. We are working on a team sync feature for the near future."
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
