"use client";

import Image from "next/image";
import Link from "next/link";
import ImageLightbox from "@/components/ImageLightbox";
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
  Highlighter,
  Layout,
  MousePointerClick,
  Scissors,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

const highlightsSurvive = [
  "Page refreshes and browser restarts",
  "Extension updates and dynamic DOM changes",
  "Streaming AI responses while content is still loading",
];

const featureCards = [
  {
    icon: Highlighter,
    title: "Persistent highlights",
    description:
      "Mark important answers once and keep them available the next time you open the conversation.",
    accent: "text-cyan-400",
    bg: "bg-cyan-500/20",
  },
  {
    icon: Layout,
    title: "Navigation toolbar",
    description:
      "Jump between every saved highlight with a clear counter, previous/next controls, and a fast clear-all action.",
    accent: "text-blue-400",
    bg: "bg-blue-500/20",
  },
  {
    icon: MousePointerClick,
    title: "Two ways to capture",
    description:
      "Use Ctrl+Shift+H for speed or the context menu when you prefer a mouse-first workflow.",
    accent: "text-amber-400",
    bg: "bg-amber-500/20",
  },
  {
    icon: Zap,
    title: "Built for long threads",
    description:
      "Reduce the time spent scrolling through large conversations and bring key sections back into focus immediately.",
    accent: "text-green-400",
    bg: "bg-green-500/20",
  },
  {
    icon: Scissors,
    title: "Works with thread trimming",
    description:
      "Combine highlights with AI Workspace trimming tools to keep heavy chats readable without losing important context.",
    accent: "text-purple-400",
    bg: "bg-purple-500/20",
  },
  {
    icon: Shield,
    title: "Local and privacy-first",
    description:
      "The feature runs inside your browser workflow, so you can organize conversations without adding friction to your process.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/20",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Select any important passage",
    description:
      "Highlight key prompts, requirements, code snippets, research findings, or action items directly inside ChatGPT, Claude, or Grok.",
  },
  {
    step: "02",
    title: "Save it in one action",
    description:
      "Press Ctrl+Shift+H or use the context menu. AI Workspace stores the highlight and keeps it attached to the conversation.",
  },
  {
    step: "03",
    title: "Navigate without re-reading",
    description:
      "Use the bottom toolbar to move between highlights, keep track of your position, and return to the right section instantly.",
  },
];

const useCases = [
  {
    title: "Research and learning",
    description:
      "Capture the exact explanations, facts, or examples you want to revisit later instead of rescanning the full chat.",
  },
  {
    title: "Project management",
    description:
      "Mark requirements, decisions, blockers, and next steps during planning sessions so nothing disappears inside a long thread.",
  },
  {
    title: "Content creation",
    description:
      "Save strong hooks, outlines, and campaign ideas while brainstorming, then jump back to them when you start producing.",
  },
  {
    title: "Technical problem solving",
    description:
      "Keep the most relevant fixes, logs, and code snippets visible during debugging sessions that span dozens of messages.",
  },
];

const professionalWorkflows = [
  {
    title: "Agencies and consultants",
    description:
      "Keep client requirements, approved messaging, and strategic recommendations easy to revisit during long delivery conversations.",
  },
  {
    title: "Research and analysis teams",
    description:
      "Mark the strongest findings, supporting evidence, and comparison points so teams can move from exploration to synthesis faster.",
  },
  {
    title: "Operations and project leads",
    description:
      "Capture action items, process decisions, and working assumptions without letting them disappear into a large AI thread.",
  },
  {
    title: "Content and growth teams",
    description:
      "Save winning hooks, campaign angles, outlines, and editorial notes while reviewing ideas with AI across multiple iterations.",
  },
];

const faqItems = [
  {
    question:
      "What is the best ChatGPT text highlighter for long conversations?",
    answer:
      "AI Workspace is built specifically for long AI conversations. It lets you highlight important text in ChatGPT, navigate between highlights, and keep critical context accessible instead of buried in the thread.",
  },
  {
    question: "Does this ChatGPT highlighter also work on Claude and Grok?",
    answer:
      "Yes. AI Workspace text highlighting works across ChatGPT, Claude, and Grok, so teams can keep a consistent workflow even when they switch between AI tools.",
  },
  {
    question: "Do my highlights stay saved after I refresh the page?",
    answer:
      "Yes. Highlights are designed to persist across page refreshes, browser restarts, extension updates, and dynamic content changes, which makes them practical for real ongoing work.",
  },
  {
    question:
      "Can teams use AI Workspace for client work, research, or operations?",
    answer:
      "Yes. Teams use AI Workspace to mark requirements, decisions, code snippets, insights, and action items inside long AI conversations so client delivery and internal workflows stay organized.",
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

const platformCards = [
  {
    icon: MousePointerClick,
    text: "Works directly in ChatGPT, Claude, and Grok",
  },
  {
    icon: Shield,
    text: "No account required to start using the extension",
  },
  {
    icon: CheckCircle2,
    text: "Professional visual states for active and inactive highlights",
  },
  {
    icon: Layout,
    text: "Fast workflow for both keyboard users and mouse users",
  },
];

export default function HighlighterPage() {
  const installUrl =
    "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0B1120] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
        </div>
      </nav>

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
                Chat Highlighting for Professional AI Workflows
              </div>
              <h1 className="mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                A professional ChatGPT text highlighter for serious AI work
              </h1>
              <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
                AI Workspace helps consultants, researchers, operators, and
                growth teams highlight important text, navigate faster, and keep
                critical context visible across ChatGPT, Claude, and Grok.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={installUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
                >
                  Add to Chrome - Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="/blog/text-highlighting-feature"
                  className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
                >
                  Read the full feature story
                </Link>
              </div>
            </FadeIn>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "Persistent highlights across refreshes, restarts, and updates",
                "Previous / next navigation toolbar with live highlight counter",
                "Keyboard shortcut plus context menu for fast capture",
              ].map((item) => (
                <FadeIn key={item}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300 backdrop-blur-sm">
                    {item}
                  </div>
                </FadeIn>
              ))}
            </div>

            <ScaleUp className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10" />
              <div className="relative p-4 sm:p-8">
                <div className="group relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-slate-800/50">
                  <Image
                    src="/images/blog/highlight-hero.png"
                    alt="AI Workspace text highlighting overview"
                    fill
                    className="zoomable-image cursor-pointer object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent px-6 py-6 text-left">
                    <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      <Highlighter className="h-4 w-4" />
                      Highlight Anything, Anywhere
                    </p>
                    <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
                      Save important text in your AI conversations and return to
                      it instantly with professional highlight states and fast
                      navigation controls.
                    </p>
                  </div>
                </div>
              </div>
            </ScaleUp>
          </div>
        </div>
      </section>

      <section className="relative bg-slate-900/50 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <FadeIn>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-300">
              The problem
            </div>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
              AI chats get valuable fast, then unreadable even faster
            </h2>
            <div className="space-y-5 text-lg text-slate-400">
              <p>
                Long ChatGPT threads often contain strong analysis, useful
                answers, and decisions worth keeping, but that value quickly
                disappears inside follow-up prompts, revisions, and side paths.
              </p>
              <p>
                For professional users, that means slower delivery, weaker
                handoffs, and unnecessary rework. Good output is not enough if
                the important parts are hard to recover when you need them.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Important code snippets get buried",
                "Requirements vanish in long planning chats",
                "Research notes are hard to revisit",
                "Useful answers are easy to lose after reload",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/5 bg-black/20 px-4 py-4 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>

          <ScaleUp className="relative">
            <div className="absolute -inset-4 rounded-full bg-red-500/20 blur-3xl opacity-20" />
            <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-slate-950/80 p-8 backdrop-blur-sm">
              <div className="space-y-4">
                {[
                  "Where was that final answer again?",
                  "Which message had the code I needed?",
                  "I know ChatGPT already explained this...",
                  "Now I need to scroll through everything again",
                ].map((line, index) => (
                  <div
                    key={line}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 text-slate-400"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xs text-slate-300">
                      {index + 1}
                    </div>
                    <div className="text-sm sm:text-base">{line}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-4 text-center text-sm text-red-200">
                Lost context creates slower decisions, duplicated work, and more
                friction in every long conversation.
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] to-slate-900" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
                Core features
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
                A cleaner way to work inside long AI conversations
              </h2>
              <p className="text-lg text-slate-400">
                The highlighting system is designed to do more than add color.
                It preserves important context, improves navigation, and gives
                professional users a more reliable way to work inside long AI
                conversations.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((card) => (
              <StaggerItem
                key={card.title}
                className="group rounded-3xl border border-white/5 bg-slate-800/50 p-8 transition-all hover:border-cyan-500/30 hover:bg-slate-800/80"
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${card.bg} ${card.accent} transition-transform group-hover:scale-110`}
                >
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="text-slate-400">{card.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-slate-950/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-300">
                How it works
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-5xl">
                Save the right information in three quick steps
              </h2>
              <p className="text-lg text-slate-400">
                The workflow is intentionally lightweight: no extra dashboard,
                no manual note-taking, and no context switching away from the AI
                tool your team is already using for research, delivery, or daily
                execution.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {workflowSteps.map((step) => (
              <ScaleUp
                key={step.step}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
              >
                <div className="mb-5 text-sm font-bold tracking-[0.25em] text-cyan-400">
                  {step.step}
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-slate-400">{step.description}</p>
              </ScaleUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <FadeIn className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
                Real interface
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-5xl">
                Professional visual feedback from first highlight to final
                review
              </h2>
            </FadeIn>
            <p className="max-w-2xl text-slate-400">
              The feature is built to feel native and dependable: subtle when
              you are reading, clear when you are navigating, and fast when you
              need to return to the exact passage that matters.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <ScaleUp className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/blog/highlight-creation.png"
                  alt="Creating a highlight inside an AI conversation"
                  fill
                  className="zoomable-image cursor-pointer object-cover"
                />
              </div>
              <div className="border-t border-white/10 px-6 py-5">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Highlight creation in context
                </h3>
                <p className="text-slate-400">
                  Select text and save it instantly without breaking your flow.
                  The interaction stays inside the conversation instead of
                  moving you into another tool.
                </p>
              </div>
            </ScaleUp>

            <div className="grid gap-8">
              <ScaleUp className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/blog/navigation-toolbar.png"
                    alt="Navigation toolbar for browsing highlights"
                    fill
                    className="zoomable-image cursor-pointer object-cover"
                  />
                </div>
                <div className="border-t border-white/10 px-6 py-5">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Bottom navigation toolbar
                  </h3>
                  <p className="text-sm text-slate-400">
                    See your current position, move back and forward, and clear
                    highlights when the task is finished.
                  </p>
                </div>
              </ScaleUp>

              <ScaleUp className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/blog/highlight-styles.png"
                    alt="Active and inactive highlight states"
                    fill
                    className="zoomable-image cursor-pointer object-cover"
                  />
                </div>
                <div className="border-t border-white/10 px-6 py-5">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Clear active and inactive states
                  </h3>
                  <p className="text-sm text-slate-400">
                    Subtle yellow for passive reading, stronger blue styling for
                    the active highlight you are currently reviewing.
                  </p>
                </div>
              </ScaleUp>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-300">
                Reliability
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
                Highlights that stay useful after the first session
              </h2>
              <p className="mb-8 text-lg text-slate-400">
                This feature is valuable because it keeps working after the
                moment you create the highlight. It is designed for real usage
                across ongoing conversations, not just a one-time annotation.
              </p>
              <div className="space-y-3">
                {highlightsSurvive.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/5 bg-black/20 px-4 py-4 text-slate-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <ScaleUp className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/blog/context-menu.png"
                  alt="Context menu highlighting access"
                  fill
                  className="zoomable-image cursor-pointer object-cover"
                />
              </div>
              <div className="grid gap-6 border-t border-white/10 px-6 py-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                    Keyboard shortcut
                  </div>
                  <p className="font-semibold text-white">Ctrl+Shift+H</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Fastest option for heavy users who capture important text
                    all day.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                    Context menu
                  </div>
                  <p className="font-semibold text-white">
                    AI Workspace → Highlight Selection
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Clear mouse-based access for users who prefer discoverable
                    UI actions.
                  </p>
                </div>
              </div>
            </ScaleUp>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
                Use cases
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-5xl">
                Built for real work, not just visual markup
              </h2>
              <p className="text-lg text-slate-400">
                Text highlighting becomes more valuable as conversations become
                longer, more collaborative, and more operational across teams.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((item) => (
              <ScaleUp
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-8"
              >
                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-slate-400">{item.description}</p>
              </ScaleUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
                Professional workflows
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-5xl">
                Built for teams that turn AI output into actual deliverables
              </h2>
              <p className="text-lg text-slate-400">
                This is not just a reading aid. It is a practical ChatGPT text
                highlighter for people who need to retain decisions, findings,
                instructions, and approved language during serious work.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {professionalWorkflows.map((item) => (
              <ScaleUp
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-8"
              >
                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-slate-400">{item.description}</p>
              </ScaleUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-300">
                FAQ
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-5xl">
                Frequently asked questions about the ChatGPT text highlighter
              </h2>
              <p className="text-lg text-slate-400">
                Clear answers for teams evaluating AI Workspace as a practical
                way to organize long AI conversations.
              </p>
            </FadeIn>
          </div>

          <div className="mx-auto grid max-w-4xl gap-5">
            {faqItems.map((item) => (
              <ScaleUp
                key={item.question}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-7"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {item.question}
                </h3>
                <p className="text-slate-400">{item.answer}</p>
              </ScaleUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Why AI Workspace?
            </h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              The highlighting feature is part of a broader workspace designed
              to make AI tools easier to operate professionally every day.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platformCards.map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
              >
                <item.icon className="mb-4 h-10 w-10 text-cyan-400" />
                <p className="font-medium text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-[#0B1120]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              Start highlighting the parts that actually matter
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
              Install AI Workspace and give your team a faster, more reliable
              way to review long AI conversations, preserve key decisions, and
              work with confidence.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={installUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 text-lg font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
              >
                Add to Chrome - Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Free forever • No credit card required • Ready in seconds
            </p>
          </FadeIn>
        </div>
      </section>

      <ImageLightbox />
    </main>
  );
}
