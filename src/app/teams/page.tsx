"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Search,
  Star,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Zap,
  Shield,
  BookOpen,
  BarChart2,
  Target,
  Clock,
  Layers,
  FileText,
} from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/Footer";

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/images/logo-dark.svg" alt="AI Workspace Logo" width={40} height={40} className="h-10 w-10" />
            <span className="text-xl font-semibold text-white">AI Workspace</span>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-800 text-cyan-300 text-sm font-medium mb-8">
                <Users className="w-4 h-4" />
                <span>For Teams &amp; Startups</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">Your Team.{" "}</span>
                <span className="text-cyan-500">One Standard.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Stop every team member reinventing the wheel. Build shared AI workflows, onboard
                faster, and ensure consistent output quality across your entire team.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                  className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] whitespace-nowrap"
                >
                  Equip Your Team
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
                  {["/images/people/person 1.png", "/images/people/person 3.png", "/images/people/person 2.png"].map((src, i) => (
                    <Image key={i} src={src} alt="Team member using AI Workspace" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-black object-cover" />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-sm text-gray-400">Trusted by <span className="text-white font-medium">800+</span> teams</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-500/10 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/images/landingpages/teams-collab.jpg" alt="Team collaborating with AI tools" width={800} height={600} className="w-full h-80 object-cover object-center" priority />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                    <span className="text-sm text-white font-medium">Product team workspace active</span>
                    <span className="ml-auto text-xs text-gray-400">6 team members</span>
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
              { value: "800+", label: "Teams" },
              { value: "60 min", label: "Saved per Team Member/Day" },
              { value: "3\u00d7", label: "Faster New Hire Onboarding" },
              { value: "100%", label: "Local & Private" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">{stat.value}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Teams Fail at AI Adoption</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Every team member uses AI differently. The result is inconsistent, inefficient, and impossible to scale.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-6 h-6 text-red-400" />, title: "Inconsistent Output", desc: "10 team members with 10 different ChatGPT approaches. Quality varies wildly from person to person." },
              { icon: <Clock className="w-6 h-6 text-orange-400" />, title: "Slow Onboarding", desc: "New hires spend weeks figuring out how the team uses AI. No shared prompts, no documentation." },
              { icon: <FileText className="w-6 h-6 text-yellow-400" />, title: "No Shared Knowledge", desc: "Your best prompts and workflows exist only in individual chat histories. Knowledge leaves with the person." },
              { icon: <Shield className="w-6 h-6 text-purple-400" />, title: "IP & Security Risk", desc: "Team members using ChatGPT without standards. Company IP potentially being used as cloud AI training data." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
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
              <div className="absolute -inset-2 bg-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image src="/images/landingpages/nested-folders.png" alt="Team workflow standardization" width={700} height={500} className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-800/40 text-cyan-400 text-xs font-medium mb-6">
                <Layers className="w-3.5 h-3.5" /> Standardization
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Standardize Your Team&apos;s Best Practices</h2>
              <p className="text-gray-400 leading-relaxed mb-8">Create shared prompt templates that every team member uses. No more reinventing the wheel. Your best workflows become the team standard — organized in folders by function and role.</p>
              <ul className="space-y-4">
                {["Shared prompt templates per role", "Function-specific folder structures", "Consistent quality output", "One update, team-wide improvement"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-800/40 text-cyan-400 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" /> Onboarding
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Onboard New Hires in Hours, Not Weeks</h2>
              <p className="text-gray-400 leading-relaxed mb-8">Share your team&apos;s workspace structure and prompt library with new hires. They&apos;re instantly productive from day one — using the same tools, the same way, as the rest of the team.</p>
              <ul className="space-y-4">
                {["Pre-built onboarding workspace", "Role-specific prompt sets ready", "No ramp-up to full productivity", "Team process documentation as prompts"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image src="/images/landingpages/workspaces.png" alt="Team onboarding workspace" width={700} height={500} className="w-full object-cover" />
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
              <div className="absolute -inset-2 bg-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image src="/images/landingpages/instant-search.png" alt="Find any workflow standard" width={700} height={500} className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-800/40 text-cyan-400 text-xs font-medium mb-6">
                <Search className="w-3.5 h-3.5" /> Knowledge Retrieval
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Any Workflow Standard Instantly</h2>
              <p className="text-gray-400 leading-relaxed mb-8">Search across all team workspaces. That SOP your senior engineer built last quarter? The product spec template from 6 months ago? Find it in seconds instead of asking around.</p>
              <ul className="space-y-4">
                {["Search across all team workspaces", "Find SOPs and process docs instantly", "Build institutional knowledge base", "Stop asking colleagues where things are"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Every Team Function</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Target className="w-5 h-5" />, title: "Product Teams", items: ["PRD and spec templates", "User story frameworks", "Roadmap planning prompts"] },
              { icon: <BarChart2 className="w-5 h-5" />, title: "Sales Teams", items: ["Outreach email templates", "Objection handling prompts", "Proposal frameworks"] },
              { icon: <Zap className="w-5 h-5" />, title: "Marketing Teams", items: ["Campaign brief templates", "Brand copy guidelines", "Content calendar prompts"] },
              { icon: <FileText className="w-5 h-5" />, title: "Engineering Teams", items: ["Code review prompts", "Documentation templates", "Architecture analysis frameworks"] },
              { icon: <Users className="w-5 h-5" />, title: "HR & People Ops", items: ["Job description templates", "Interview question banks", "Performance review prompts"] },
              { icon: <Shield className="w-5 h-5" />, title: "Customer Success", items: ["Escalation response templates", "QBR presentation prompts", "Health score analysis frameworks"] },
            ].map((useCase, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 text-white">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Teams Love It</h2>
            <p className="text-gray-400 text-lg">Real results from growing teams</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { avatar: "/images/people/person 1.png", name: "Alex", role: "CTO, 30-person startup", quote: "Our engineering team was all using ChatGPT differently. Now everyone has the same workspace structure with shared code review and documentation prompts. Output quality jumped overnight." },
              { avatar: "/images/people/person 3.png", name: "Nina", role: "VP of Marketing", quote: "New marketing hires used to take 3 weeks to ramp up on our brand voice and workflows. Now I give them our workspace on day one and they're writing on-brand content by day two." },
              { avatar: "/images/people/person 2.png", name: "Sandra", role: "Head of People Ops", quote: "We treat our AI prompt library like institutional knowledge. When someone leaves, their best workflows stay with the team. That was impossible before AI Workspace." },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <blockquote className="text-gray-300 leading-relaxed flex-1 mb-6">&quot;{t.quote}&quot;</blockquote>
                <div className="flex items-center gap-3">
                  <Image src={t.avatar} alt={t.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover border-2 border-cyan-500/30" />
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
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
        <Image src="/images/landingpages/teams-collab.jpg" alt="Team using AI Workspace together" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <p className="text-cyan-400 font-semibold mb-3 tracking-wide uppercase text-sm">For Teams</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">One standard. Every team member. Zero exceptions.</h2>
              <p className="text-gray-300 text-lg">AI Workspace turns individual AI usage into a scalable team capability — organized, standardized, and transferable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/30 via-black to-black pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-800 text-cyan-300 text-sm font-medium mb-8">
            <span>Free to install \u2014 no account needed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Equip Your Team?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">800+ teams already use it. Consistent AI output from every team member from day one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_30px_rgba(8,145,178,0.4)] hover:shadow-[0_0_50px_rgba(8,145,178,0.6)]"
            >
              Equip Your Team
            </Link>
            <Link
              href="/#showcase"
              className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-bold text-lg transition-all"
            >
              See How It Works
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-600">Free Chrome extension \u00b7 No data sent to servers \u00b7 Uninstall anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="Is AI Workspace free for teams?" answer="Yes, each team member can use the core features for free. Every person installs their own Chrome extension and sets up their workspace. Team-wide shared libraries are on our roadmap." />
            <FaqItem question="How does each team member get the same setup?" answer="You can export your workspace structure and prompt library as a shareable setup guide. New hires follow it to replicate the team standard in minutes." />
            <FaqItem question="Is company data kept private?" answer="Yes. Everything is stored locally in each person's browser. Nothing is sent to our servers. Your company IP, process docs, and proprietary prompts stay completely private." />
            <FaqItem question="Can we use this for client-facing work?" answer="Absolutely. Create separate client workspaces per account. Your team members can all work in isolated client contexts with zero risk of cross-contamination." />
            <FaqItem question="What happens when a team member leaves?" answer="Their workspace structure can be exported and transferred. Institutional knowledge — prompts, frameworks, workflows — is preserved in the team's documented setup rather than lost with the person." />
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
