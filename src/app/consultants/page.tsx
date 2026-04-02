"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Search,
  Star,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  BookOpen,
  BarChart2,
  Users,
  Zap,
  Shield,
  FileText,
  Clock,
  Layers,
} from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/Footer";

export default function ConsultantsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-800 text-indigo-300 text-sm font-medium mb-8">
                <Briefcase className="w-4 h-4" />
                <span>For Consultants &amp; Advisors</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">Your Framework.</span>
                <span className="text-indigo-500"> Every Client.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Stop rebuilding your methodology from scratch. Store your consulting frameworks,
                client insights, and proven prompts — reuse them across every engagement.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] whitespace-nowrap"
                >
                  Professional Upgrade
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
                    <Image key={i} src={src} alt="Consultant using AI Workspace" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-black object-cover" />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-sm text-gray-400">Trusted by <span className="text-white font-medium">1,000+</span> consultants</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/10 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/images/landingpages/consultants-office.jpg" alt="Consultant working with AI tools" width={800} height={600} className="w-full h-80 object-cover object-center" priority />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                    <span className="text-sm text-white font-medium">Strategy engagement active</span>
                    <span className="ml-auto text-xs text-gray-400">14 frameworks saved</span>
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
              { value: "1,000+", label: "Consultants" },
              { value: "50 min", label: "Saved per Engagement" },
              { value: "4\u00d7", label: "Faster Deliverables" },
              { value: "100%", label: "Local & Private" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-1">{stat.value}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Consultants Waste Time on AI</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">You&apos;re rebuilding your intellectual property from scratch every engagement. That IP belongs to you.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Layers className="w-6 h-6 text-red-400" />, title: "Lost Frameworks", desc: "Your SWOT, Porter's Five Forces, or custom methodology prompts buried somewhere in 200 unnamed chats." },
              { icon: <Clock className="w-6 h-6 text-orange-400" />, title: "Repeated Context Setup", desc: "Copying client background into ChatGPT every morning before you can even start delivering value." },
              { icon: <FileText className="w-6 h-6 text-yellow-400" />, title: "No Client Separation", desc: "Insights from Client A visible alongside Client B. One careless moment and confidentiality is gone." },
              { icon: <Shield className="w-6 h-6 text-purple-400" />, title: "IP Not Protected", desc: "Your proprietary frameworks saving to a cloud AI that can use your methodology as training data." },
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
              <div className="absolute -inset-2 bg-indigo-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image src="/images/landingpages/nested-folders.png" alt="Client-specific workspaces for consultants" width={700} height={500} className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/20 border border-indigo-800/40 text-indigo-400 text-xs font-medium mb-6">
                <Layers className="w-3.5 h-3.5" /> Client Isolation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Separate Workspaces per Client Engagement</h2>
              <p className="text-gray-400 leading-relaxed mb-8">Each client gets their own workspace with isolated folders and prompts. Switch between engagements without carrying over context. NDA-level separation built in.</p>
              <ul className="space-y-4">
                {["Isolated folders per client", "Engagement-scoped context", "Zero confidentiality risk", "One-click client switching"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/20 border border-indigo-800/40 text-indigo-400 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" /> Framework Library
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Framework Library, Always Ready</h2>
              <p className="text-gray-400 leading-relaxed mb-8">Store your consulting frameworks as reusable prompts. SWOT analysis, stakeholder maps, project retrospectives — saved once, deployed instantly for any new engagement.</p>
              <ul className="space-y-4">
                {["Save and version frameworks", "One-click framework deployment", "Customize per engagement", "Build proprietary methodology prompts"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-indigo-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image src="/images/landingpages/workspaces.png" alt="Framework library in AI Workspace" width={700} height={500} className="w-full object-cover" />
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
              <div className="absolute -inset-2 bg-indigo-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                <Image src="/images/landingpages/instant-search.png" alt="Instant search across client insights" width={700} height={500} className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/20 border border-indigo-800/40 text-indigo-400 text-xs font-medium mb-6">
                <Search className="w-3.5 h-3.5" /> Instant Retrieval
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Any Client Insight in Seconds</h2>
              <p className="text-gray-400 leading-relaxed mb-8">That market sizing analysis from last quarter? The stakeholder interview synthesis from 6 months ago? Instant search retrieves it in seconds, ready to inform your next deliverable.</p>
              <ul className="space-y-4">
                {["Full-text search across engagements", "Filter by client or project phase", "Retrieve past deliverables instantly", "Build on previous analysis"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Every Consulting Practice</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <BarChart2 className="w-5 h-5" />, title: "Strategy Consultants", items: ["SWOT & PESTLE prompt sets", "Market sizing frameworks", "Competitive analysis prompts"] },
              { icon: <Users className="w-5 h-5" />, title: "Management Consultants", items: ["Change management templates", "Stakeholder map prompts", "Workshop facilitation guides"] },
              { icon: <Zap className="w-5 h-5" />, title: "Digital Consultants", items: ["Tech stack assessment prompts", "Digital maturity frameworks", "Roadmap structure templates"] },
              { icon: <FileText className="w-5 h-5" />, title: "Financial Advisors", items: ["Financial model prompts", "Risk assessment frameworks", "Client reporting templates"] },
              { icon: <BookOpen className="w-5 h-5" />, title: "HR Consultants", items: ["Culture assessment prompts", "Job description frameworks", "Talent mapping templates"] },
              { icon: <Shield className="w-5 h-5" />, title: "Risk & Compliance", items: ["Risk registry prompts", "Compliance audit templates", "Incident analysis frameworks"] },
            ].map((useCase, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 text-white">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Consultants Trust It</h2>
            <p className="text-gray-400 text-lg">Real results from advisory professionals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { avatar: "/images/people/person 1.png", name: "David", role: "Strategy Consultant, Big Four", quote: "I have my entire consulting toolkit saved as prompts. SWOT, Porter's Five Forces, stakeholder maps. I deploy any framework in seconds now instead of rebuilding from scratch." },
              { avatar: "/images/people/person 3.png", name: "Priya", role: "Independent Management Consultant", quote: "Client separation is the killer feature. I have 6 active engagements with zero risk of insight bleed. Every workspace is completely isolated. My clients would be horrified if they knew I used AI without this." },
              { avatar: "/images/people/person 2.png", name: "Margaret", role: "Executive Coach & Advisor", quote: "The local storage was what sold me. My frameworks and client notes are proprietary. Knowing nothing is sent to any server was the deciding factor in switching from other tools." },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <blockquote className="text-gray-300 leading-relaxed flex-1 mb-6">&quot;{t.quote}&quot;</blockquote>
                <div className="flex items-center gap-3">
                  <Image src={t.avatar} alt={t.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500/30" />
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
        <Image src="/images/landingpages/consultants-office.jpg" alt="Consultant with AI Workspace" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <p className="text-indigo-400 font-semibold mb-3 tracking-wide uppercase text-sm">For Consultants</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Your IP. Every engagement. Fully protected.</h2>
              <p className="text-gray-300 text-lg">Stop rebuilding your methodology. AI Workspace keeps your frameworks, insights, and frameworks organized and confidential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-black to-black pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-800 text-indigo-300 text-sm font-medium mb-8">
            <span>Free to install \u2014 no account needed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a Professional Upgrade?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">1,000+ consultants already use it. Your IP stays local, your clients stay separate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_50px_rgba(79,70,229,0.6)]"
            >
              Professional Upgrade
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
            <FaqItem question="Is AI Workspace free for consultants?" answer="Yes, core features are free. Workspaces, folders, framework prompt libraries, and instant search are included. A Pro plan gives you unlimited workspaces for multi-engagement practices." />
            <FaqItem question="How is client data kept confidential?" answer="Everything is stored locally in your browser. Nothing is sent to our servers. You can also password-protect individual workspaces for the most sensitive client engagements." />
            <FaqItem question="Can I build a library of my own frameworks?" answer="Yes. Save any prompt as a reusable template. Build your complete methodology as named prompts — SWOT, stakeholder maps, retrospectives — and deploy them with one click per engagement." />
            <FaqItem question="Is this suitable for solo practitioners vs firms?" answer="Both. Solo consultants use it to keep their entire practice organized. Firms have each team member set up their own client workspaces with shared prompt libraries on the roadmap." />
            <FaqItem question="Does it work alongside other consulting tools?" answer="Yes. AI Workspace enhances ChatGPT specifically. You can still use your regular tools — Notion, Miro, Excel — and use AI Workspace to run all your AI interactions with full organization." />
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
