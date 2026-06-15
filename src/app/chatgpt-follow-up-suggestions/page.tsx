import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { DemoVideoLightbox } from "@/components/DemoVideoLightbox";
import ImageLightbox from "@/components/ImageLightbox";
import {
  ArrowRight,
  Lightbulb,
  Send,
  Brain,
  Zap,
  Sparkles,
  Shield,
  SlidersHorizontal,
  CheckCircle2,
} from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";
const pageUrl = "https://getaiworkspace.com/chatgpt-follow-up-suggestions";

export const metadata: Metadata = {
  title:
    "ChatGPT Follow-up Suggestions: Smarter Next Prompts | AI Workspace",
  description:
    "Get suggested next prompts under every ChatGPT reply and click to send instantly. Heuristic suggestions free, plus 5 Smart (AI-powered) follow-ups every week free; unlimited Smart suggestions on Pro.",
  keywords: [
    "ChatGPT follow-up suggestions",
    "ChatGPT next prompt ideas",
    "suggested prompts ChatGPT",
    "ChatGPT follow up questions",
    "AI prompt suggestions",
    "AI Workspace",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "ChatGPT Follow-up Suggestions: Smarter Next Prompts",
    description:
      "Suggested next prompts under every ChatGPT reply — click to send instantly. Heuristic free plus 5 Smart AI follow-ups/week free; unlimited Smart on Pro.",
    url: pageUrl,
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Follow-up Suggestions: Smarter Next Prompts",
    description:
      "Suggested next prompts under every ChatGPT reply — click to send instantly.",
  },
};

const faqs = [
  {
    q: "What are Follow-up Suggestions?",
    a: "Follow-up Suggestions show a short list of next prompts under the latest ChatGPT reply. Each one is a ready-to-send question or instruction — click it and it's dropped into the composer and submitted immediately, so you keep your momentum without thinking up what to ask next.",
  },
  {
    q: "What's the difference between Heuristic and Smart (Enhanced)?",
    a: "Heuristic mode is free and unlimited — a useful set of generic next steps generated instantly on your device. Smart mode (called Enhanced on Pro) sends the latest reply's context to AI Workspace's servers and returns context-aware suggestions tailored to exactly what was just said — like the contextual follow-ups you'd write yourself. Free users get 5 Smart follow-ups every week to try it; Pro makes them unlimited.",
  },
  {
    q: "Can I turn it off?",
    a: "Yes. In Settings → Display & Interface → Follow-up Suggestions you can choose Off, Heuristic, or Smart. The gear icon on the Follow-ups panel jumps you straight to that setting.",
  },
  {
    q: "Does it send my conversation anywhere?",
    a: "Heuristic mode is 100% local — nothing leaves your browser. Enhanced mode sends the latest reply's context securely to our servers to generate context-aware suggestions; we don't store or log your conversation content. Every organizing feature (folders, tags, notes, bookmarks) stays local regardless.",
  },
  {
    q: "Is it free?",
    a: "Yes. Heuristic follow-up suggestions are free and unlimited, and every free user also gets 5 Smart (AI-powered, context-aware) follow-ups each week. Pro unlocks unlimited Smart suggestions, alongside unlimited prompts, vaults and notes, encrypted storage and more.",
  },
  {
    q: "Which platforms are supported?",
    a: "Follow-up Suggestions currently work inside ChatGPT. AI Workspace also supports Claude, Gemini and Grok across its other features.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getaiworkspace.com" },
        { "@type": "ListItem", position: 2, name: "Features", item: "https://getaiworkspace.com/features" },
        { "@type": "ListItem", position: 3, name: "Follow-up Suggestions", item: pageUrl },
      ],
    },
  ],
};

export default function FollowUpSuggestionsPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <nav className="p-6">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo-dark.svg"
                alt="AI Workspace Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              AI Workspace
            </span>
          </Link>
          <a
            href={installUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all"
          >
            Add to Chrome – Free
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-16 pb-20 lg:pt-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Lightbulb className="w-3 h-3" />
              New · Free &amp; Pro
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
              Never wonder what to ask ChatGPT next
            </h1>
            <p className="text-lg leading-8 text-slate-400 mb-8 max-w-2xl mx-auto">
              Smart suggested next prompts appear under the latest reply. Click
              one and it's sent instantly. Choose fast on-device suggestions, or
              AI-powered context-aware ones with Smart mode — 5 free every week,
              unlimited on Pro.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <a
                href={installUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 shadow-lg shadow-cyan-500/25 bg-gradient-to-r from-cyan-500 to-blue-600"
              >
                Add to Chrome – Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="text-xs text-slate-500">
              4.5★ on Chrome Web Store · Heuristic free · 5 Smart AI/week free
            </p>
          </div>

          {/* Hero visual — live demo video (click to expand) */}
          <div className="relative mt-14 max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-3xl opacity-20" />
            <div className="relative">
              <DemoVideoLightbox
                src="/videos/following-up-prompts.mp4"
                poster="/videos/following-up-prompts-poster.jpg"
                label="Follow-up Suggestions demo: suggested next prompts appear under the latest ChatGPT reply — click one to send it instantly"
              />
              <p className="mt-3 text-center text-xs text-slate-500">
                Click the video to expand
              </p>
            </div>
          </div>

          {/* Quick answer */}
          <div className="mt-16 p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 max-w-4xl">
            <h2 className="text-sm font-bold text-cyan-400 mb-2 uppercase tracking-wide">
              Quick Answer
            </h2>
            <p className="text-slate-200 leading-relaxed m-0">
              Follow-up Suggestions is a feature in AI Workspace that shows
              ready-to-send next prompts under ChatGPT's latest reply. Click a
              suggestion to send it instantly. Heuristic mode is free and
              on-device; Smart mode uses AI to generate context-aware
              suggestions tailored to what was just said — 5 free every week,
              unlimited on Pro.
            </p>
          </div>
        </div>
      </section>

      {/* Modes */}
      <section className="py-20 bg-slate-900/50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Three modes, your choice
          </h2>
          <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
            Pick how much help you want from the Follow-ups panel — change it
            anytime in Settings → Display &amp; Interface.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Off",
                tag: "",
                body: "No suggestions. The cleanest possible view if you'd rather not see them.",
                accent: false,
              },
              {
                name: "Heuristic",
                tag: "Free",
                body: "Fast, useful next-step prompts generated instantly on your device — no server, no waiting.",
                accent: false,
              },
              {
                name: "Smart",
                tag: "5/week free",
                body: "AI-powered, context-aware suggestions tailored to the exact reply you just received. 5 free every week — unlimited on Pro.",
                accent: true,
              },
            ].map((mode) => (
              <div
                key={mode.name}
                className={`p-7 rounded-3xl border ${
                  mode.accent
                    ? "border-cyan-500/40 bg-cyan-500/5"
                    : "border-white/10 bg-slate-800/40"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white m-0">
                    {mode.name}
                  </h3>
                  {mode.tag && (
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        mode.tag === "Pro"
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                          : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      }`}
                    >
                      {mode.tag}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 m-0">{mode.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            How Follow-up Suggestions work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Get suggestions",
                body: "After each reply, a Follow-ups panel shows a few suggested next prompts right under the message.",
              },
              {
                step: "2",
                title: "Click to send",
                body: "Pick the one you want — it drops into the composer and submits instantly, so you never break stride.",
              },
              {
                step: "3",
                title: "Tune the mode",
                body: "Use the gear to jump to Settings and switch between Off, Heuristic and Enhanced whenever you like.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-8 rounded-3xl border border-white/5 bg-slate-800/50"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 m-0">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-20 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Keep your momentum
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Send,
                title: "Click to send instantly",
                body: "Each suggestion is a real prompt — one click fills the composer and submits, no copy-paste.",
              },
              {
                icon: Brain,
                title: "Context-aware (Enhanced)",
                body: "Pro's Enhanced mode reads the latest reply and proposes follow-ups grounded in what was actually said.",
              },
              {
                icon: Zap,
                title: "Instant & local (Heuristic)",
                body: "The free Heuristic mode generates useful next steps on your device — zero latency, zero server.",
              },
              {
                icon: SlidersHorizontal,
                title: "Off / Heuristic / Enhanced",
                body: "Full control in Settings. The panel's gear deep-links you straight to the right setting.",
              },
              {
                icon: Sparkles,
                title: "Regenerate on demand",
                body: "Not quite right? Hit refresh for a fresh set of suggestions tuned to the same reply.",
              },
              {
                icon: CheckCircle2,
                title: "Under the latest reply",
                body: "Suggestions appear exactly where you need them — beneath the newest answer, never in the way.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl border border-white/5 bg-slate-800/50 hover:bg-slate-800/80 transition-all hover:border-cyan-500/30"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 m-0">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use case */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-slate-900/60">
            <h2 className="text-2xl font-bold text-white mb-6">
              What this looks like in practice
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              ChatGPT just gave you a solid answer and you know there's a good
              next question in there — but framing it well takes a moment, and
              that friction adds up over a long session.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed m-0">
              With Enhanced follow-ups, the next prompts are already written for
              you, grounded in the reply you just read. Click the one you want
              and you're moving again. Pair it with{" "}
              <Link
                href="/chatgpt-side-chat"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Side Chat
              </Link>{" "}
              when you'd rather explore a tangent without touching the main
              thread.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="py-16 bg-slate-900/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">
            Honest about your data
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto m-0">
            Heuristic mode is 100% local — nothing leaves your browser. Enhanced
            mode sends the latest reply's context securely to our servers to
            generate context-aware suggestions; we don't store or log your
            conversation content. Folders, tags, notes and bookmarks always stay
            local.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Follow-up Suggestions FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/5 bg-slate-900/40"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-slate-400 leading-relaxed m-0">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-slate-900/30">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Keep exploring</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/chatgpt-side-chat", label: "Feature: Side Chat" },
              { href: "/chatgpt-message-notes", label: "Feature: Message Notes" },
              { href: "/features", label: "All features" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-slate-900/40 hover:border-cyan-500/30 transition-all"
              >
                <span className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors font-medium">
                  {item.label}
                </span>
                <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-[#0B1120]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Lightbulb className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-white">
            Keep every conversation moving
          </h2>
          <a
            href={installUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl px-10 py-5 text-lg font-bold text-white transition-all hover:scale-105 shadow-lg shadow-cyan-500/25 bg-gradient-to-r from-cyan-500 to-blue-600"
          >
            Add to Chrome – Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-6 text-sm text-slate-500">
            Free to install · Heuristic free · Enhanced on Pro
          </p>
        </div>
      </section>

      <Footer />
      <ImageLightbox />
    </main>
  );
}
