"use client";

import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { HeroConnectionLines } from "@/components/HeroConnectionLines";
import {
  FadeIn,
  ScaleUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimation";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Gauge,
  MessageSquare,
  RotateCcw,
  Scissors,
  Shield,
  Sparkles,
  TrendingDown,
  Zap,
} from "lucide-react";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";

const REDDIT_URL =
  "https://www.reddit.com/r/ChatGPT/comments/1p9y2d2/finally_solved_the_chatgpt_gets_slower_with_long/";

const symptoms = [
  "Typing lags behind your keystrokes",
  "Scrolling stutters and the page feels heavy",
  "The browser tab eats more and more memory",
  "Switching back to the tab takes seconds to respond",
];

const featureCards = [
  {
    icon: Scissors,
    title: "Trims older messages from the page",
    description:
      "Smart Thread Trimming removes older messages from the rendered page so the browser only has to keep the part you're actually working with responsive.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/15",
  },
  {
    icon: RotateCcw,
    title: "Fully reversible — nothing is deleted",
    description:
      "Messages are hidden, not deleted. Your conversation is untouched on OpenAI's side — bring trimmed messages back any time with one click.",
    accent: "text-cyan-400",
    bg: "bg-cyan-500/15",
  },
  {
    icon: Gauge,
    title: "Instant speed back",
    description:
      "Long threads that crawled become smooth again. Typing, scrolling, and tab switching feel like a fresh conversation.",
    accent: "text-amber-400",
    bg: "bg-amber-500/15",
  },
  {
    icon: Shield,
    title: "Private and local",
    description:
      "It all happens in your browser. No conversation data is sent anywhere, and there's no account to create.",
    accent: "text-pink-400",
    bg: "bg-pink-500/15",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "DOM manipulation, not deletion",
    description:
      "Trimmed messages are hidden from the page with CSS, so the process is reversible and your data is completely safe.",
  },
  {
    step: "02",
    title: "A mutation observer keeps it live",
    description:
      "As new messages stream in, trimming is applied in real time — you never have to think about it once it's on.",
  },
  {
    step: "03",
    title: "A watchdog keeps stats accurate",
    description:
      "A built-in safeguard makes sure counts and state never drift, so what you see always matches what's really rendered.",
  },
];

const results = [
  {
    icon: Cpu,
    stat: "Up to 73%",
    label: "less ChatGPT memory usage in long conversations",
  },
  {
    icon: Activity,
    stat: "~80%",
    label: "faster scrolling in heavy threads",
  },
  {
    icon: MessageSquare,
    stat: "Unlimited",
    label: "conversation length stays usable, not unusable",
  },
];

const faqItems = [
  {
    question: "Why does ChatGPT get slower with long conversations?",
    answer:
      "The longer a conversation gets, the more messages your browser has to keep rendered on the page at once. Every message stays in the page's memory, so a very long thread can use hundreds of megabytes and make typing, scrolling, and tab switching lag. It's a browser-rendering problem, not your internet connection.",
  },
  {
    question: "How do I fix ChatGPT lag in long chats?",
    answer:
      "Smart Thread Trimming in AI Workspace fixes it by trimming older messages out of the rendered page so the browser only keeps the relevant part responsive. The conversation itself is never deleted — messages are hidden and can be restored instantly, so ChatGPT stays fast without losing anything.",
  },
  {
    question: "Will trimming delete my messages?",
    answer:
      "No. Trimming hides messages from the page using CSS; it does not delete them and does not touch your conversation on OpenAI's side. You can bring trimmed messages back with one click at any time.",
  },
  {
    question: "Is Smart Thread Trimming safe and private?",
    answer:
      "Yes. Everything happens locally in your browser. No conversation content is sent to any server, there is no account to create, and AI Workspace stores its data on your device.",
  },
  {
    question: "Is it free?",
    answer:
      "Smart Thread Trimming is part of AI Workspace, which is free to start. Install it from the Chrome Web Store and you can speed up long ChatGPT conversations right away.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FixChatGptLagPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0B1120] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Nav */}
      <nav className="absolute left-0 right-0 top-0 z-50 p-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image
                src="/images/logo-dark.svg"
                alt="AI Workspace Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-cyan-400">
              AI Workspace
            </span>
          </Link>
          <a
            href={INSTALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10 sm:inline-flex"
          >
            Add to Chrome
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <HeroConnectionLines />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1120]/80 to-[#0B1120]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-sm">
                <Sparkles className="h-3 w-3" />
                Smart Thread Trimming
              </div>
              <h1 className="mb-6 bg-gradient-to-r from-white via-emerald-100 to-emerald-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                Finally fix ChatGPT getting slower with long conversations
              </h1>
              <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
                Long ChatGPT threads slow to a crawl — typing lags, scrolling
                stutters, the tab hogs memory. Smart Thread Trimming in AI
                Workspace trims older messages out of the page so ChatGPT stays
                fast. Nothing is deleted, and it's reversible in one click.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={INSTALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
                >
                  Add to Chrome - Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
                >
                  See how it works
                </a>
              </div>
            </FadeIn>

            {/* Demo video */}
            <ScaleUp className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-teal-500/10" />
              <div className="relative p-4 sm:p-6">
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-slate-800/50">
                  <video
                    src="/videos/thread-trimming-demo.mp4"
                    poster="/videos/thread-trimming-demo-poster.jpg"
                    preload="metadata"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </ScaleUp>
          </div>
        </div>
      </section>

      {/* Reddit social proof */}
      <section className="relative py-10">
        <div className="mx-auto max-w-4xl px-6">
          <a
            href={REDDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 rounded-2xl border border-orange-500/20 bg-orange-500/[0.06] p-6 text-center transition-colors hover:bg-orange-500/10 sm:flex-row sm:text-left"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-2xl">
              👍
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">
                Featured on r/ChatGPT — 244k+ views and counting
              </p>
              <p className="text-sm text-slate-400">
                The ChatGPT community called this the fix for slow, laggy long
                conversations. Read the original thread →
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* The problem */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] to-slate-900" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <FadeIn>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-300">
              The problem
            </div>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
              It's not your internet — it's your browser
            </h2>
            <div className="space-y-5 text-lg text-slate-400">
              <p>
                Every message in a ChatGPT conversation stays rendered on the
                page. The longer the thread, the more your browser has to hold
                in memory at once — until a single conversation is using hundreds
                of megabytes and the whole tab grinds.
              </p>
              <p>
                That's why your most valuable, longest-running conversations are
                exactly the ones that become painful to use. The fix isn't a
                faster computer — it's rendering less at a time.
              </p>
            </div>
          </FadeIn>

          <ScaleUp className="relative">
            <div className="absolute -inset-4 rounded-full bg-red-500/20 opacity-20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-slate-950/80 p-8 backdrop-blur-sm">
              <div className="space-y-4">
                {symptoms.map((line, index) => (
                  <div
                    key={line}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 text-slate-300"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xs text-slate-300">
                      {index + 1}
                    </div>
                    <div className="text-sm sm:text-base">{line}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>

      {/* The solution — feature cards */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-[#0B1120]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-300">
                The fix
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
                Keep long conversations fast — without losing a word
              </h2>
              <p className="text-lg text-slate-400">
                Smart Thread Trimming gives you back the speed of a fresh chat,
                while keeping your full conversation intact and one click away.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {featureCards.map((card) => (
              <StaggerItem
                key={card.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.06]"
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${card.bg}`}
                >
                  <card.icon className={`h-6 w-6 ${card.accent}`} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-slate-400">{card.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Results */}
      <section className="relative bg-slate-900/50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {results.map((item) => (
              <FadeIn key={item.label}>
                <div className="rounded-3xl border border-emerald-500/15 bg-emerald-500/[0.05] p-8 text-center">
                  <item.icon className="mx-auto mb-4 h-8 w-8 text-emerald-400" />
                  <div className="mb-2 text-4xl font-bold text-white">
                    {item.stat}
                  </div>
                  <p className="text-sm text-slate-400">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            Figures based on AI Workspace usage in long conversations; results
            vary by thread length and device.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] to-slate-900" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
                How it works
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
                Fast, reversible, and completely safe
              </h2>
              <p className="text-lg text-slate-400">
                Smart Thread Trimming is built to speed things up without ever
                risking your conversation data.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {howItWorks.map((item) => (
              <FadeIn key={item.step}>
                <div className="h-full rounded-3xl border border-white/10 bg-black/20 p-8">
                  <div className="mb-5 text-3xl font-bold text-emerald-400/80">
                    {item.step}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-4">
            <Link
              href="/blog/why-chatgpt-gets-slow-and-how-to-fix-it"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
            >
              Deep dive: why ChatGPT gets slow and how to fix it
            </Link>
            <Link
              href="/blog/smart-thread-trimming"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
            >
              The Smart Thread Trimming feature story
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-300">
                FAQ
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-5xl">
                ChatGPT slowdowns, explained
              </h2>
            </FadeIn>
          </div>

          <div className="mx-auto grid max-w-4xl gap-5">
            {faqItems.map((item) => (
              <ScaleUp
                key={item.question}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-7"
              >
                <h3 className="mb-3 flex items-start gap-3 text-xl font-semibold text-white">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-400" />
                  {item.question}
                </h3>
                <p className="pl-8 text-slate-400">{item.answer}</p>
              </ScaleUp>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-[#0B1120]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300">
              <Zap className="h-3.5 w-3.5 text-emerald-400" />
              Long chats, fresh-chat speed
            </div>
            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              Make ChatGPT fast again
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
              Install AI Workspace and turn on Smart Thread Trimming — your
              longest conversations stay quick, and nothing is ever lost. Free to
              start, no account required.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={INSTALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-10 py-5 text-lg font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
              >
                Add to Chrome - Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
              >
                <TrendingDown className="h-4 w-4" />
                Explore all features
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Free forever • No credit card required • Ready in seconds
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
