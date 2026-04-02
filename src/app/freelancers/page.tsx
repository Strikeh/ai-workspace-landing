"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Folder,
  Search,
  Clock,
  Star,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Laptop,
  DollarSign,
  Users,
  Zap,
  Shield,
  FileText,
} from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/Footer";

export default function FreelancersPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-300 text-sm font-medium mb-8">
                <Briefcase className="w-4 h-4" />
                <span>For Freelancers &amp; Solopreneurs</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">Every Client.{" "}</span>
                <span className="text-emerald-500">Perfectly Organized.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Stop mixing projects in one ChatGPT window. Get a dedicated workspace per client,
                saved prompts that scale your output, and instant retrieval of every past deliverable.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:shadow-[0_0_30px_rgba(5,150,105,0.5)] whitespace-nowrap"
                >
                  Get Organized
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
                    <Image key={i} src={src} alt="Freelancer using AI Workspace" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-black object-cover" />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-sm text-gray-400">Trusted by <span className="text-white font-medium">2,000+</span> freelancers</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/images/landingpages/freelancers-desk.jpg" alt="Freelancer working with AI tools" width={800} height={600} className="w-full h-80 object-cover object-center" priority />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-sm text-white font-medium">Client Alpha workspace active</span>
                    <span className="ml-auto text-xs text-gray-400">5 active projects</span>
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
              { value: "2,000+", label: "Freelancers" },
              { value: "40 min", label: "Saved per Day" },
              { value: "3\u00d7", label: "Faster Deliverables" },
              { value: "100%", label: "Local & Private" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">{stat.value}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Freelancer AI Problem</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">You&apos;re using ChatGPT as a second brain, but it&apos;s one giant mess of unrelated client work.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Folder className="w-6 h-6 text-red-400" />, title: "Zero Organization", desc: "100 chats from 10 different clients with no labels, no folders, no structure." },
              { icon: <Clock className="w-6 h-6 text-orange-400" />, title: "Repeated Setup", desc: "Typing the same project context every single morning before you can even start working." },
              { icon: <FileText className="w-6 h-6 text-yellow-400" />, title: "Lost Deliverables", desc: "That great email draft for Client B is buried 3 months deep in your chat history." },
              { icon: <DollarSign className="w-6 h-6 text-purple-400" />, title: "Slow = Less Revenue", desc: "Every minute you waste on setup is a minute you&apos;re not billing for real work." },
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
              <div className="absolute -inset-2 bg-emerald-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image src="/images/landingpages/nested-folders.png" alt="Folders for every project" width={700} height={500} className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-800/40 text-emerald-400 text-xs font-medium mb-6">
                <Folder className="w-3.5 h-3.5" /> Project Folders
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Folder for Every Client &amp; Project</h2>
              <p className="text-gray-400 leading-relaxed mb-8">Create nested folders per client. Keep their deliverables, research, and drafts in one place. Switch between clients in a click — no more digging through chat history.</p>
              <ul className="space-y-4">
                {["Client-specific folders", "Nested subfolders per project", "Zero cross-contamination", "Instant client switching"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-800/40 text-emerald-400 text-xs font-medium mb-6">
                <FileText className="w-3.5 h-3.5" /> Saved Prompts
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Save Admin Prompts Once, Use Forever</h2>
              <p className="text-gray-400 leading-relaxed mb-8">Invoice emails, project briefs, proposal templates, cold outreach — save your best prompts once and reuse them with one click. Stop rewriting the same thing from scratch.</p>
              <ul className="space-y-4">
                {["Invoice & reminder prompts", "Proposal and brief templates", "Follow-up email frameworks", "One-click reuse on any project"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-emerald-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image src="/images/landingpages/workspaces.png" alt="Workspace management for freelancers" width={700} height={500} className="w-full object-cover" />
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
              <div className="absolute -inset-2 bg-emerald-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image src="/images/landingpages/instant-search.png" alt="Instant search across all client files" width={700} height={500} className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-800/40 text-emerald-400 text-xs font-medium mb-6">
                <Search className="w-3.5 h-3.5" /> Instant Search
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Any Past Deliverable Instantly</h2>
              <p className="text-gray-400 leading-relaxed mb-8">Search by keyword across all your client workspaces. That pitch you wrote for a SaaS client 6 months ago? Retrieved in 2 seconds. Use it as a head start for the next one.</p>
              <ul className="space-y-4">
                {["Full-text search across all projects", "Filter by client workspace", "Retrieve past drafts instantly", "Never start from zero"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Every Freelance Niche</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FileText className="w-5 h-5" />, title: "Copywriters", items: ["Client brand voice per workspace", "Reusable ad copy frameworks", "Proposal & brief templates"] },
              { icon: <Laptop className="w-5 h-5" />, title: "Developers", items: ["Code snippet libraries", "Stack-specific prompt sets", "Debug workflow templates"] },
              { icon: <Users className="w-5 h-5" />, title: "Designers", items: ["Creative brief prompts", "Feedback request templates", "Client presentation outlines"] },
              { icon: <DollarSign className="w-5 h-5" />, title: "Consultants", items: ["Strategy framework prompts", "Report structure templates", "Client ROI analysis prompts"] },
              { icon: <Zap className="w-5 h-5" />, title: "Marketers", items: ["Campaign brief templates", "Platform-specific content", "Competitor analysis prompts"] },
              { icon: <Shield className="w-5 h-5" />, title: "VAs & Ops", items: ["SOPs & process docs", "Email template libraries", "Scheduling prompt workflows"] },
            ].map((useCase, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 text-white">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Freelancers Love It</h2>
            <p className="text-gray-400 text-lg">Real results from solo professionals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { avatar: "/images/people/person 1.png", name: "Tom", role: "Freelance Copywriter", quote: "I manage 8 clients. Having a separate workspace for each one changed everything. I switch context instantly and never mix up brand voices anymore." },
              { avatar: "/images/people/person 3.png", name: "Mei", role: "UX Designer & Consultant", quote: "My proposal template prompt saves me an hour per pitch. I just swap client details and I have a professional brief ready in minutes instead of an hour." },
              { avatar: "/images/people/person 2.png", name: "Helen", role: "Marketing Freelancer", quote: "The instant search is incredible. I found a full campaign strategy I wrote 4 months ago in 10 seconds. It would have taken me 20 minutes to find otherwise." },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <blockquote className="text-gray-300 leading-relaxed flex-1 mb-6">&quot;{t.quote}&quot;</blockquote>
                <div className="flex items-center gap-3">
                  <Image src={t.avatar} alt={t.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500/30" />
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
        <Image src="/images/landingpages/freelancers-desk.jpg" alt="Freelancer at desk with AI Workspace" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <p className="text-emerald-400 font-semibold mb-3 tracking-wide uppercase text-sm">For Freelancers</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Work faster. Earn more. Stress less.</h2>
              <p className="text-gray-300 text-lg">AI Workspace keeps your client work organized so you can spend less time on admin and more time on billable hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/30 via-black to-black pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-300 text-sm font-medium mb-8">
            <span>Free to install \u2014 no account needed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Organized?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">2,000+ freelancers already switched. Start saving 40 minutes a day from day one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_30px_rgba(5,150,105,0.4)] hover:shadow-[0_0_50px_rgba(5,150,105,0.6)]"
            >
              Get Organized
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
            <FaqItem question="Is AI Workspace free for freelancers?" answer="Yes, the core features are completely free. Folders, workspaces, saved prompts, and instant search are all included at no cost." />
            <FaqItem question="How many client workspaces can I create?" answer="The free plan includes multiple workspaces. A Pro plan gives you unlimited workspaces for freelancers managing many clients simultaneously." />
            <FaqItem question="Can I import my existing ChatGPT chats?" answer="Yes, you can organize your existing chats into folders and workspaces. The search also indexes all your past conversations, not just new ones." />
            <FaqItem question="Is my client data private?" answer="Completely. All data is stored locally in your browser. Nothing is sent to our servers. Your client files, prompts, and chats never leave your machine." />
            <FaqItem question="Does it work with Claude or other AI tools?" answer="Currently AI Workspace is optimized for ChatGPT. Support for Claude, Gemini, and other models is on our roadmap." />
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
