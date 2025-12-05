"use client";

import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Library,
  Search,
  BrainCircuit,
  Highlighter,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Clock,
} from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/Footer";

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-800 text-purple-300 text-sm font-medium mb-8">
            <GraduationCap className="w-4 h-4" />
            <span>The Ultimate Study Hack</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Stop Drowning in
            <br />
            <span className="text-purple-500">ChatGPT Chaos.</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Organize your chats by subject, save your best study prompts, and
            find that one explanation from 3 weeks ago instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
            >
              Start Studying Smarter
            </Link>
          </div>

          {/* Mockup Container */}
          <div className="relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden">
            {/* Placeholder for user image */}
            <div className="aspect-video bg-[#111] flex items-center justify-center border-b border-white/10">
              <div className="text-center p-10">
                <p className="text-gray-500 mb-2">
                  Place your screenshot here:
                </p>
                <code className="bg-black px-2 py-1 rounded text-purple-400">
                  /images/landingpages/students-hero.png
                </code>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-2xl mx-auto opacity-50 pointer-events-none select-none">
                  <div className="p-4 border border-white/10 rounded bg-black">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mb-2"></div>
                    <div className="font-bold text-sm">Biology 101</div>
                  </div>
                  <div className="p-4 border border-white/10 rounded bg-black">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mb-2"></div>
                    <div className="font-bold text-sm">Thesis Research</div>
                  </div>
                  <div className="p-4 border border-white/10 rounded bg-black">
                    <div className="w-3 h-3 rounded-full bg-green-500 mb-2"></div>
                    <div className="font-bold text-sm">Coding Projects</div>
                  </div>
                </div>
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
              Why Studying with ChatGPT is Messy
            </h2>
            <p className="text-gray-400">
              You know the struggle. Does this look familiar?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BrainCircuit className="w-6 h-6 text-red-400" />,
                title: "Lost Explanations",
                desc: "That perfect explanation of Quantum Physics? Gone in a sea of 'New Chat's.",
              },
              {
                icon: <Clock className="w-6 h-6 text-orange-400" />,
                title: "Wasted Time",
                desc: "Rewriting the same 'Check my grammar' or 'Summarize this' prompt 100 times.",
              },
              {
                icon: <BookOpen className="w-6 h-6 text-yellow-400" />,
                title: "Mixed Subjects",
                desc: "History notes mixed with Python code. Total chaos.",
              },
              {
                icon: <Search className="w-6 h-6 text-red-400" />,
                title: "Unsearchable",
                desc: "Scrolling endlessly to find that one source you need for your paper.",
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
              Your Personal AI Study Hub
              <br />
              <span className="text-purple-500">
                Organized. Efficient. Smart.
              </span>
            </h2>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-purple-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                <div className="text-gray-500 italic">
                  Subject Folders Screenshot
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Library className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  One Workspace Per Subject
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Create a dedicated workspace for every course. Keep your
                  "Calculus" chats far away from your "Creative Writing" drafts.
                  Focus on one thing at a time.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <BrainCircuit className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Your "Cheat Sheet" Prompt Library
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Save your best prompts. "Explain like I'm 5", "Create
                  Flashcards", "Fix my citations". Click once, and you're ready
                  to learn.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                <div className="text-gray-500 italic">
                  Prompt Library Screenshot
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-green-900/20 to-black border border-white/10 rounded-2xl p-8 h-[300px] flex items-center justify-center">
                <div className="text-gray-500 italic">
                  Search Interface Screenshot
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Instant Search</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Remember that great explanation about mitochondria? Just type
                  "mitochondria" and find it instantly across all your chats. No
                  more scrolling.
                </p>
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
              Built for Every Major
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Research & Thesis",
                items: [
                  "Organize sources per chapter",
                  "Summarize long PDFs",
                  "Citation generator prompts",
                ],
              },
              {
                title: "Computer Science",
                items: [
                  "Store code snippets",
                  "Debug logs per project",
                  "Explain complex algorithms",
                ],
              },
              {
                title: "Language Learning",
                items: [
                  "Vocabulary lists",
                  "Conversation practice chats",
                  "Grammar correction workflows",
                ],
              },
              {
                title: "Med & Law",
                items: [
                  "Case study summaries",
                  "Memorization flashcards",
                  "Complex concept breakdowns",
                ],
              },
              {
                title: "Creative Arts",
                items: [
                  "Brainstorming boards",
                  "Feedback on drafts",
                  "Style & tone experiments",
                ],
              },
              {
                title: "Group Projects",
                items: [
                  "Shared meeting notes",
                  "Task lists",
                  "Project outlines",
                ],
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">
                  {useCase.title}
                </h3>
                <ul className="space-y-3">
                  {useCase.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
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
              The Old Way vs. The Smart Way
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Without */}
            <div className="p-8 rounded-2xl bg-red-900/5 border border-red-500/20">
              <h3 className="text-xl font-bold mb-6 text-red-400 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Messy ChatGPT
              </h3>
              <ul className="space-y-4">
                {[
                  "Endless scrolling to find notes",
                  "Rewriting prompts constantly",
                  "Losing important explanations",
                  "Distracted by other chats",
                  "No structure",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <XCircle className="w-5 h-5 text-red-500/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="p-8 rounded-2xl bg-purple-900/5 border border-purple-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>
              <h3 className="text-xl font-bold mb-6 text-purple-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> AI Workspace
              </h3>
              <ul className="space-y-4">
                {[
                  "Instant search across all chats",
                  "One-click reusable prompts",
                  "Folders for every subject",
                  "Laser focus",
                  "Total organization",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
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
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
              M
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
              "I used to lose all my good ChatGPT research. Now I have a folder
              for my Thesis and a folder for Biology. It saved my GPA."
            </blockquote>
            <div className="text-gray-400">
              <span className="text-white font-semibold">Mark</span> — Computer
              Science Student
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Strong CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Ace Your Exams?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Get organized before finals week hits.
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
              question="Is it free for students?"
              answer="Yes! You can start for free and get access to all the core organization features you need to survive the semester."
            />
            <FaqItem
              question="Does it work with the free version of ChatGPT?"
              answer="Absolutely. AI Workspace works on top of any ChatGPT account, free or Plus."
            />
            <FaqItem
              question="Can I export my notes?"
              answer="Yes. You can export your chats and notes to Markdown or JSON, so you can move them to Notion, Obsidian, or Word easily."
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
