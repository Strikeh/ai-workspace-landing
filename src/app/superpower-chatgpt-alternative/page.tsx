"use client";

import Image from "next/image";
import Link from "next/link";
import CompetitorComparison from "@/components/CompetitorComparison";
import { Footer } from "@/components/Footer";
import { HeroConnectionLines } from "@/components/HeroConnectionLines";
import {
  FadeIn,
  ScaleUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimation";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  FileDown,
  FolderTree,
  Globe,
  Highlighter,
  Images,
  Lock,
  MessageSquare,
  Palette,
  Scissors,
  Server,
  Shield,
  Sparkles,
  StickyNote,
  Tags,
  Wand2,
  Zap,
} from "lucide-react";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";

const switchReasons = [
  {
    icon: Server,
    title: "Your data never leaves your browser",
    description:
      "Cloud-synced extensions send your conversations and prompts to their servers. AI Workspace stores everything locally — your chats, prompts, and notes stay on your device.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/15",
  },
  {
    icon: Lock,
    title: "AES-256 encrypted workspaces",
    description:
      "Keep client work, personal chats, and research separated and encrypted. No account, no login, no data sitting in someone else's database.",
    accent: "text-cyan-400",
    bg: "bg-cyan-500/15",
  },
  {
    icon: Globe,
    title: "Works across ChatGPT, Claude & Grok",
    description:
      "One consistent workspace for every major AI tool, instead of an extension that is locked to a single platform.",
    accent: "text-blue-400",
    bg: "bg-blue-500/15",
  },
  {
    icon: Zap,
    title: "Actively maintained & fast",
    description:
      "Frequent updates, a responsive sidebar, and a feature set that keeps growing — without bloating or slowing down ChatGPT.",
    accent: "text-amber-400",
    bg: "bg-amber-500/15",
  },
];

const whatYouGet = [
  {
    icon: FolderTree,
    title: "Workspaces & folders",
    description:
      "Create unlimited workspaces with full context isolation and organize chats into nested folders. A gentle nudge even helps you sort uncategorized chats.",
  },
  {
    icon: Wand2,
    title: "Prompt library & chains",
    description:
      "Save reusable prompts, inject variables, and run multi-step prompt chains directly inside the composer.",
  },
  {
    icon: Highlighter,
    title: "Persistent highlights",
    description:
      "Mark important answers and navigate between them. Highlights survive refreshes, restarts, and updates.",
  },
  {
    icon: Scissors,
    title: "Smart thread trimming",
    description:
      "Keep heavy conversations fast and readable by trimming context you no longer need — without losing the important parts.",
  },
  {
    icon: Images,
    title: "Image gallery & bulk export",
    description:
      "Browse every image from your conversations in one gallery and download them in bulk.",
  },
  {
    icon: StickyNote,
    title: "Notes on any chat",
    description:
      "Attach private notes to conversations so your thinking lives right next to the thread it belongs to.",
  },
  {
    icon: FileDown,
    title: "Export to PDF, Markdown & JSON",
    description:
      "Export single chats or whole workspaces in the format you need for hand-offs, archives, or backups.",
  },
  {
    icon: Tags,
    title: "Tags & GPT discovery",
    description:
      "Tag conversations for fast retrieval and discover useful GPTs without leaving your workflow.",
  },
  {
    icon: Palette,
    title: "Themes & customization",
    description:
      "Reskin ChatGPT with themes and conversation styles that match how you like to work.",
  },
];

const switchSteps = [
  {
    step: "01",
    title: "Install AI Workspace",
    description:
      "Add the extension to Chrome in one click. No account, no credit card, no onboarding wall.",
  },
  {
    step: "02",
    title: "Open ChatGPT",
    description:
      "The AI Workspace sidebar appears right inside ChatGPT, Claude, or Grok — your existing chats stay exactly where they are.",
  },
  {
    step: "03",
    title: "Organize & keep working",
    description:
      "Create workspaces, sort chats into folders, save prompts, and pick up where you left off — now fully organized and private.",
  },
];

const faqItems = [
  {
    question: "What is the best Superpower ChatGPT alternative?",
    answer:
      "AI Workspace is a privacy-first alternative to Superpower ChatGPT. It adds workspaces, folders, a prompt library, persistent highlights, thread trimming, an image gallery, notes, and exports to ChatGPT, Claude, and Grok — while keeping all of your data stored 100% locally in your browser instead of syncing it to a server.",
  },
  {
    question: "Is AI Workspace more private than Superpower ChatGPT?",
    answer:
      "Yes. AI Workspace stores your conversations, prompts, and notes locally on your device with optional AES-256 encryption and zero telemetry. There is no account to create and no data sent to external servers, which makes it a strong choice for anyone handling client or sensitive work.",
  },
  {
    question: "Can I switch from Superpower ChatGPT without losing my chats?",
    answer:
      "Yes. AI Workspace works on top of your existing ChatGPT conversations — installing it does not delete or move anything. Your chats stay in place and AI Workspace simply lets you organize them into workspaces and folders.",
  },
  {
    question: "Is AI Workspace free?",
    answer:
      "AI Workspace is free to start, with core organization and productivity features available at no cost. A Pro plan unlocks advanced features for power users. No credit card is required to begin.",
  },
  {
    question: "Does AI Workspace work with Claude and Grok too?",
    answer:
      "Yes. Unlike single-platform extensions, AI Workspace works across ChatGPT, Claude, and Grok, so you get one consistent workspace no matter which AI tool you are using.",
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

export default function SuperpowerAlternativePage() {
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
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <HeroConnectionLines />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1120]/80 to-[#0B1120]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-400 backdrop-blur-sm">
                <Sparkles className="h-3 w-3" />
                The privacy-first Superpower ChatGPT alternative
              </div>
              <h1 className="mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                A Superpower ChatGPT alternative that keeps your data on your
                device
              </h1>
              <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
                AI Workspace gives you everything you loved about Superpower
                ChatGPT — workspaces, folders, prompts, highlights, and exports
                — across ChatGPT, Claude, and Grok. The difference: nothing is
                synced to a server. Your conversations stay 100% local and
                encrypted.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={INSTALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
                >
                  Add to Chrome - Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#compare"
                  className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
                >
                  See the full comparison
                </a>
              </div>
            </FadeIn>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "100% local storage — no cloud sync",
                "AES-256 encrypted, zero telemetry",
                "Works with ChatGPT, Claude & Grok",
              ].map((item) => (
                <FadeIn key={item}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300 backdrop-blur-sm">
                    {item}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why switch */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] to-slate-900" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
                Why people switch
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
                Same superpowers, without handing over your data
              </h2>
              <p className="text-lg text-slate-400">
                If you rely on ChatGPT for real work, where your conversations
                live matters. AI Workspace was built so you never have to choose
                between powerful features and privacy.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {switchReasons.map((card) => (
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

      {/* Comparison table (reused component) */}
      <div id="compare">
        <CompetitorComparison />
        <div className="mx-auto -mt-12 mb-4 flex flex-wrap items-center justify-center gap-4 px-6 pb-16">
          <Link
            href="/blog/ai-workspace-vs-superpower-chatgpt-workspaces"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
          >
            Full comparison: AI Workspace vs Superpower ChatGPT
          </Link>
          <Link
            href="/blog/is-superpower-chatgpt-safe"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
          >
            Is Superpower ChatGPT safe? Read the privacy guide
          </Link>
        </div>
      </div>

      {/* What you get */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-[#0B1120]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
                Everything in one extension
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
                A full ChatGPT workspace, not just a toolbar
              </h2>
              <p className="text-lg text-slate-400">
                AI Workspace replaces a stack of single-purpose extensions with
                one cohesive, privacy-first workspace.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {whatYouGet.map((card) => (
              <StaggerItem
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:bg-white/[0.06]"
              >
                <card.icon className="mb-4 h-9 w-9 text-cyan-400" />
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {card.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How to switch */}
      <section className="relative bg-slate-900/50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-300">
                Switching is effortless
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
                Move over in under a minute
              </h2>
              <p className="text-lg text-slate-400">
                AI Workspace runs on top of your existing chats — installing it
                never deletes or moves a single conversation.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {switchSteps.map((item) => (
              <FadeIn key={item.step}>
                <div className="h-full rounded-3xl border border-white/10 bg-black/20 p-8">
                  <div className="mb-5 text-3xl font-bold text-cyan-400/80">
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
        </div>
      </section>

      {/* Privacy reassurance band */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] to-slate-900" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-cyan-500/20 bg-cyan-500/[0.06] p-8 sm:flex-row sm:items-center sm:p-10">
            <div className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-cyan-500/15">
              <Shield className="h-7 w-7 text-cyan-400" />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-white">
                Privacy by design — not by policy
              </h3>
              <p className="text-slate-400">
                There is no account to create and no server storing your
                conversations. AI Workspace keeps your data local, with optional
                AES-256 encryption and zero telemetry, so privacy is guaranteed
                by how the extension is built — not by a promise in a privacy
                page.{" "}
                <Link
                  href="/privacy"
                  className="text-cyan-400 underline hover:text-cyan-300"
                >
                  Read our privacy policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
                FAQ
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-5xl">
                Switching from Superpower ChatGPT
              </h2>
              <p className="text-lg text-slate-400">
                Clear answers for anyone evaluating AI Workspace as their next
                ChatGPT extension.
              </p>
            </FadeIn>
          </div>

          <div className="mx-auto grid max-w-4xl gap-5">
            {faqItems.map((item) => (
              <ScaleUp
                key={item.question}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-7"
              >
                <h3 className="mb-3 flex items-start gap-3 text-xl font-semibold text-white">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
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
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-[#0B1120]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300">
              <Database className="h-3.5 w-3.5 text-cyan-400" />
              Your conversations. Your device. Your control.
            </div>
            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              Give ChatGPT superpowers — keep your data private
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
              Make the switch to a faster, more private workspace for ChatGPT,
              Claude, and Grok. Free to start, no account required.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={INSTALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 text-lg font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
              >
                Add to Chrome - Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
              >
                <MessageSquare className="h-4 w-4" />
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
