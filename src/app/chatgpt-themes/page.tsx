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
  ArrowRight,
  Eye,
  EyeOff,
  Link2,
  Maximize2,
  Moon,
  MousePointerClick,
  Paintbrush,
  Palette,
  Shield,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Type,
  Zap,
} from "lucide-react";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";

const customizationTabs = [
  {
    icon: Palette,
    title: "Color",
    description:
      "Pick your accent and background, recolor the entire ChatGPT interface, and make it genuinely yours — from soft pastels to deep dark modes.",
    accent: "text-pink-400",
    bg: "bg-pink-500/15",
  },
  {
    icon: Type,
    title: "Font",
    description:
      "Change the typeface and reading experience so long conversations feel comfortable instead of clinical.",
    accent: "text-cyan-400",
    bg: "bg-cyan-500/15",
  },
  {
    icon: SlidersHorizontal,
    title: "Layout",
    description:
      "Take control of the reading width, go full width, sync the prompt box, and hide UI you never use — all from one panel.",
    accent: "text-amber-400",
    bg: "bg-amber-500/15",
  },
];

const layoutControls = [
  {
    icon: Maximize2,
    title: "Chats & prompt width",
    description:
      "Fine-tune the chat reading width and prompt width with simple sliders, so messages aren't squeezed into a narrow column.",
  },
  {
    icon: Maximize2,
    title: "Chat full width",
    description:
      "Expand conversations to the screen's edge for a wider, more spacious view when you want maximum reading space.",
  },
  {
    icon: Link2,
    title: "Sync prompt width",
    description:
      "Match the prompt field to the chat width for a consistent, balanced layout from top to bottom.",
  },
  {
    icon: EyeOff,
    title: "Hide header & footer",
    description:
      "Remove the top header and the info below the message box to reclaim screen space and focus purely on the conversation.",
  },
];

const quickThemes = [
  {
    icon: Sun,
    title: "Light & bright",
    description:
      "Clean, high-contrast themes for daytime work and well-lit rooms.",
  },
  {
    icon: Moon,
    title: "Dark & dim",
    description:
      "Easy-on-the-eyes dark and dimmed themes for late-night sessions.",
  },
  {
    icon: Paintbrush,
    title: "Your own accent",
    description:
      "Build a signature look — like the pink theme above — and switch back to it any time from the floating theme button.",
  },
];

const whyCards = [
  {
    icon: MousePointerClick,
    text: "One-click theme switching from a floating button inside ChatGPT",
  },
  {
    icon: Zap,
    text: "Changes apply instantly — no reload, no flicker",
  },
  {
    icon: Eye,
    text: "Reduce eye strain and make long sessions more comfortable",
  },
  {
    icon: Shield,
    text: "Runs locally in your browser — no account, no data sent away",
  },
];

const faqItems = [
  {
    question: "Can I change the theme and colors of ChatGPT?",
    answer:
      "Yes. GPTheme, included in AI Workspace, lets you fully recolor ChatGPT — accent and background colors, fonts, and layout. You can build a custom look or switch between ready-made light and dark themes from a floating button inside ChatGPT.",
  },
  {
    question: "Can I make the ChatGPT chat wider?",
    answer:
      "Yes. The Layout tab includes a chats-width slider and a Chat Full Width toggle that expands conversations to the screen's edge, so messages are no longer locked to a narrow center column. You can also sync the prompt box width to match.",
  },
  {
    question: "Can I hide the ChatGPT header or footer?",
    answer:
      "Yes. GPTheme can hide the top header and the info bar below the message box, giving you a cleaner, more focused, distraction-free workspace with more room for the conversation itself.",
  },
  {
    question: "Does changing the ChatGPT theme affect my data or account?",
    answer:
      "No. GPTheme only restyles the page in your browser. It does not touch your conversations or your OpenAI account, it requires no login, and your theme settings stay local on your device.",
  },
  {
    question: "Is GPTheme free?",
    answer:
      "GPTheme is part of AI Workspace, which is free to start. You can install it from the Chrome Web Store and begin customizing ChatGPT immediately, with no credit card required.",
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

export default function ChatGptThemesPage() {
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
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <HeroConnectionLines />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1120]/80 to-[#0B1120]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-pink-300 backdrop-blur-sm">
                <Sparkles className="h-3 w-3" />
                GPTheme — make ChatGPT yours
              </div>
              <h1 className="mb-6 bg-gradient-to-r from-white via-pink-100 to-pink-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                Custom ChatGPT themes, colors, and layout
              </h1>
              <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
                ChatGPT looks the same for everyone. GPTheme — built into AI
                Workspace — lets you recolor it, change the font, widen the chat,
                hide the header and footer, and switch light or dark themes in
                one click. All from a floating button, right inside ChatGPT.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={INSTALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-pink-500/25 transition-all hover:scale-105"
                >
                  Add to Chrome - Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#layout"
                  className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
                >
                  See what you can change
                </a>
              </div>
            </FadeIn>

            {/* Demo video */}
            <ScaleUp className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-rose-500/10" />
              <div className="relative p-4 sm:p-6">
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-slate-800/50">
                  <video
                    src="/videos/gptheme-demo.mp4"
                    poster="/videos/gptheme-demo-poster.jpg"
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

      {/* Three tabs of customization */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] to-slate-900" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-pink-300">
                Three ways to customize
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
                Color, font, and layout — all in one panel
              </h2>
              <p className="text-lg text-slate-400">
                GPTheme gives you a clean customization panel with everything you
                need to reshape ChatGPT to match how you like to work.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {customizationTabs.map((card) => (
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

      {/* Layout controls deep-dive */}
      <section id="layout" className="relative bg-slate-900/50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
                Layout control
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
                Stop reading ChatGPT in a narrow column
              </h2>
              <p className="text-lg text-slate-400">
                The default ChatGPT layout wastes half your screen. GPTheme puts
                the width and the clutter under your control.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {layoutControls.map((card) => (
              <StaggerItem
                key={card.title}
                className="flex gap-5 rounded-3xl border border-white/10 bg-black/20 p-7"
              >
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-cyan-500/15">
                  <card.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {card.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Quick themes */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-[#0B1120]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-pink-300">
                Switch in one click
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
                A floating theme switcher, always one tap away
              </h2>
              <p className="text-lg text-slate-400">
                Jump between light, dim, dark, and your own custom look from a
                small floating button — without ever leaving the conversation.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {quickThemes.map((card) => (
              <StaggerItem
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center transition-colors hover:bg-white/[0.06]"
              >
                <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/15">
                  <card.icon className="h-6 w-6 text-pink-400" />
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

      {/* Why */}
      <section className="bg-slate-900/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              More than just a new coat of paint
            </h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              GPTheme is one feature of AI Workspace — the local-first workspace
              that also brings folders, prompts, highlights, and exports to
              ChatGPT, Claude, and Grok.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
              >
                <item.icon className="mb-4 h-10 w-10 text-pink-400" />
                <p className="font-medium text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] to-slate-900" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-pink-300">
                FAQ
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-5xl">
                ChatGPT theming, answered
              </h2>
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

      {/* Final CTA */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-[#0B1120]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              Give ChatGPT a look that's actually yours
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
              Install AI Workspace and start customizing ChatGPT with GPTheme —
              colors, fonts, layout, and one-click themes. Free to start, no
              account required.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={INSTALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-5 text-lg font-bold text-white shadow-lg shadow-pink-500/25 transition-all hover:scale-105"
              >
                Add to Chrome - Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
              >
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
