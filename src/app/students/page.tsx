"use client";

import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Search,
  Clock,
  Star,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  BrainCircuit,
  FlaskConical,
  Code2,
  Languages,
  Zap,
  Library,
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

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-800 text-purple-300 text-sm font-medium mb-8">
                <GraduationCap className="w-4 h-4" />
                <span>For Students</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                  Study Smarter.{" "}
                </span>
                <span className="text-purple-500">Score Higher.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Stop drowning in scattered chats. Get a dedicated workspace per
                subject, saved study prompts that save hours, and instant
                retrieval of every past note.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] whitespace-nowrap"
                >
                  Start Studying Smarter
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
                      alt="Student using AI Workspace"
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
                  <span className="text-white font-medium">10,000+</span>{" "}
                  students
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-500/10 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/landingpages/students-study.jpg"
                  alt="Student studying with AI tools"
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover object-center"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <span className="text-sm text-white font-medium">
                      Biology Finals workspace active
                    </span>
                    <span className="ml-auto text-xs text-gray-400">
                      12 saved prompts
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
              { value: "10,000+", label: "Students" },
              { value: "45 min", label: "Saved per Day" },
              { value: "4\u00d7", label: "Better Study Sessions" },
              { value: "100%", label: "Local & Private" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">
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
              The Student AI Problem
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              You&apos;re using ChatGPT as a study buddy, but it&apos;s one
              giant mess of unrelated subjects and half-finished notes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Library className="w-6 h-6 text-red-400" />,
                title: "Scattered Everything",
                desc: "Biology notes mixed with history essays mixed with coding homework. One endless scroll of chaos.",
              },
              {
                icon: <Clock className="w-6 h-6 text-orange-400" />,
                title: "Lost Context",
                desc: "You start a new chat for every session. ChatGPT forgets who you are, what subject you\u2019re studying, what you covered last time.",
              },
              {
                icon: <BrainCircuit className="w-6 h-6 text-yellow-400" />,
                title: "Repeated Setup",
                desc: "Typing the same \u201cact as my tutor for...\u201d prompt every single morning before you can even start studying.",
              },
              {
                icon: <Zap className="w-6 h-6 text-purple-400" />,
                title: "Wrong Context",
                desc: "Your Physics homework prompt accidentally loaded with your English Literature essay tone. The AI gives useless answers.",
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
              <div className="absolute -inset-2 bg-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/landingpages/nested-folders.png"
                  alt="Folders for every subject"
                  width={700}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-800/40 text-purple-400 text-xs font-medium mb-6">
                <Library className="w-3.5 h-3.5" /> Subject Folders
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Folder for Every Subject
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Create nested folders per class. Keep your notes, essay drafts,
                and research in one place per subject. Switch between classes in
                a click — Bio, History, CS all perfectly separated.
              </p>
              <ul className="space-y-4">
                {[
                  "Subject-specific folders",
                  "Nested folders per assignment",
                  "Zero cross-subject contamination",
                  "Instant subject switching",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-800/40 text-purple-400 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" /> Saved Prompts
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Save Your Best Study Prompts Once
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Essay structure, grammar checker, problem breakdown, Socratic
                dialogue — save your best study prompts once and reuse with one
                click. Stop retyping the same setup from scratch every session.
              </p>
              <ul className="space-y-4">
                {[
                  "Tutor persona prompts per subject",
                  "Essay structure templates",
                  "Flashcard generation prompts",
                  "One-click reuse every session",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/landingpages/workspaces.png"
                  alt="Workspace per subject"
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
              <div className="absolute -inset-2 bg-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/landingpages/instant-search.png"
                  alt="Instant search across all study notes"
                  width={700}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-800/40 text-purple-400 text-xs font-medium mb-6">
                <Search className="w-3.5 h-3.5" /> Instant Search
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Any Note or Draft Instantly
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Search by keyword across all your subject folders. That essay
                outline you started for your midterm? Retrieved in 2 seconds.
                Build on your own past work instead of starting from scratch.
              </p>
              <ul className="space-y-4">
                {[
                  "Full-text search across all subjects",
                  "Filter by folder or date",
                  "Retrieve past essays and notes",
                  "Never lose a study session again",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
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
              Built for Every Student
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FlaskConical className="w-5 h-5" />,
                title: "STEM Students",
                items: [
                  "Step-by-step problem solving",
                  "Lab report structure prompts",
                  "Concept explanation templates",
                ],
              },
              {
                icon: <BookOpen className="w-5 h-5" />,
                title: "Humanities",
                items: [
                  "Essay structure frameworks",
                  "Argument development prompts",
                  "Source analysis templates",
                ],
              },
              {
                icon: <Library className="w-5 h-5" />,
                title: "Law Students",
                items: [
                  "Case brief templates",
                  "Legal argument frameworks",
                  "Statute interpretation prompts",
                ],
              },
              {
                icon: <BrainCircuit className="w-5 h-5" />,
                title: "Medical Students",
                items: [
                  "Clinical reasoning prompts",
                  "Anatomy study frameworks",
                  "Patient case analysis templates",
                ],
              },
              {
                icon: <Languages className="w-5 h-5" />,
                title: "Language Learners",
                items: [
                  "Grammar correction prompts",
                  "Vocabulary practice templates",
                  "Conversation practice personas",
                ],
              },
              {
                icon: <Code2 className="w-5 h-5" />,
                title: "CS Students",
                items: [
                  "Code debugging workflows",
                  "Algorithm explanation prompts",
                  "Data structure study templates",
                ],
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 mb-4">
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
                      <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
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
              Students Love It
            </h2>
            <p className="text-gray-400 text-lg">
              Real results from real students
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                avatar: "/images/people/person 1.png",
                name: "James",
                role: "Computer Science, Year 3",
                quote:
                  "I have a separate workspace for each module. My algorithms folder has all my past problem breakdowns. Before exams I can review months of study in minutes. It\u2019s like having a personal study database.",
              },
              {
                avatar: "/images/people/person 3.png",
                name: "Aisha",
                role: "Pre-Med, Year 2",
                quote:
                  "I saved my \u2018explain like a tutor\u2019 prompt for every subject. One click and ChatGPT knows exactly how to teach me. I used to spend 10 minutes on context setup before every session. Not anymore.",
              },
              {
                avatar: "/images/people/person 2.png",
                name: "Maria",
                role: "Law Student, Year 1",
                quote:
                  "I found a case brief I wrote 6 months ago in 5 seconds. I used it as a template for a new case with the same legal principle. That would have taken me an hour to redo from scratch.",
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
                    className="w-10 h-10 rounded-full object-cover border-2 border-purple-500/30"
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
          src="/images/landingpages/students-study.jpg"
          alt="Student studying with AI Workspace"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <p className="text-purple-400 font-semibold mb-3 tracking-wide uppercase text-sm">
                For Students
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Study harder. Remember more. Stress less.
              </h2>
              <p className="text-gray-300 text-lg">
                AI Workspace keeps every subject organized so you can spend less
                time on setup and more time on actual learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-800 text-purple-300 text-sm font-medium mb-8">
            <span>Free to install \u2014 no account needed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Study Smarter?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            10,000+ students already switched. Save 45 minutes a day from your
            very first study session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:shadow-[0_0_50px_rgba(147,51,234,0.6)]"
            >
              Start Studying Smarter
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
              question="Is AI Workspace free for students?"
              answer="Yes! The core features \u2014 folders, workspaces, saved prompts, and instant search \u2014 are all free to use. A Pro plan exists for power users who need unlimited everything."
            />
            <FaqItem
              question="Does it work with the free version of ChatGPT?"
              answer="Absolutely. AI Workspace works on top of any ChatGPT account, free or Plus. It enhances the interface without changing how ChatGPT works."
            />
            <FaqItem
              question="Will this help me with assignments?"
              answer="Yes \u2014 you can save proven prompts for essay structure, grammar checks, citation formatting, and more. Re-use them with one click instead of typing from scratch."
            />
            <FaqItem
              question="Is my data private?"
              answer="100% private. All your folders, prompts, and settings are stored locally in your browser. Nothing is sent to our servers. Your study notes stay yours."
            />
            <FaqItem
              question="Can I use it across multiple subjects?"
              answer="That\u2019s exactly what it\u2019s built for. Create a workspace per subject \u2014 Biology, History, CS \u2014 each with its own folders, prompts, and chats. Zero overlap."
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
