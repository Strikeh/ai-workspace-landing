import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  Map,
  MousePointerClick,
  Filter,
  Search,
  Keyboard,
  Gauge,
} from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";
const pageUrl = "https://getaiworkspace.com/chatgpt-minimap";

export const metadata: Metadata = {
  title: "ChatGPT Minimap: Navigate Long Chats Instantly | AI Workspace",
  description:
    "Smart Conversation Outline is a minimap for ChatGPT: jump to any message in long conversations with a clickable sidebar, filters, and instant search.",
  keywords: [
    "ChatGPT minimap",
    "navigate long ChatGPT conversations",
    "ChatGPT conversation outline",
    "ChatGPT table of contents",
    "jump to message ChatGPT",
    "ChatGPT scroll fix",
    "AI Workspace",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "ChatGPT Minimap: Navigate Long Chats Instantly",
    description:
      "A minimap for ChatGPT: jump to any message in long conversations with a clickable sidebar, filters, and instant search.",
    url: pageUrl,
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Minimap: Navigate Long Chats Instantly",
    description:
      "A minimap for ChatGPT: jump to any message in long conversations with a clickable sidebar, filters, and instant search.",
  },
};

const faqs = [
  {
    q: "Does ChatGPT have a minimap or outline?",
    a: "No. ChatGPT offers no overview of a conversation — the only way to move through a long thread is scrolling. Smart Conversation Outline in AI Workspace adds a floating sidebar that lists every message and lets you jump to any point with one click.",
  },
  {
    q: "How does the Smart Conversation Outline work?",
    a: "It reads the messages in your open conversation and builds an interactive table of contents with a visual progress bar. Click any entry to jump there instantly. You can filter to show only your questions or only AI responses, and search within the thread.",
  },
  {
    q: "Is there a keyboard shortcut?",
    a: "Yes — press Cmd/Ctrl + . to toggle the outline in any conversation.",
  },
  {
    q: "Does the outline slow down long conversations?",
    a: "No — the opposite. Pair it with Smart Thread Trimming and long conversations get dramatically faster: 73% memory reduction and 80% faster scrolling, because old messages are hidden from the page (not deleted) while the outline keeps them reachable.",
  },
  {
    q: "Which platforms does it work on?",
    a: "Smart Conversation Outline works on ChatGPT, Claude, and Grok, with the same shortcut and interface everywhere.",
  },
  {
    q: "Is the minimap free?",
    a: "AI Workspace is free to install and the core features are free forever. The full Smart Conversation Outline is part of the Pro plan ($9.99/month billed annually), together with unlimited prompts, notes, vaults, and encrypted storage.",
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
        { "@type": "ListItem", position: 3, name: "ChatGPT Minimap", item: pageUrl },
      ],
    },
  ],
};

export default function ChatGPTMinimapPage() {
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
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Map className="w-3 h-3" />
              Navigation
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
              A minimap for ChatGPT: skim and jump, never scroll
            </h1>
            <p className="text-lg leading-8 text-slate-400 mb-8 max-w-2xl mx-auto">
              Smart Conversation Outline shows every message in your
              conversation as a clickable sidebar. Jump to any point in a
              300-message thread in one click — on ChatGPT, Claude &amp; Grok.
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
              4.5★ on Chrome Web Store • No account required • Updated June
              2026
            </p>

            {/* Quick answer */}
            <div className="mt-12 p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 text-left">
              <h2 className="text-sm font-bold text-cyan-400 mb-2 uppercase tracking-wide">
                Quick Answer
              </h2>
              <p className="text-slate-200 leading-relaxed m-0">
                ChatGPT has no minimap or outline — long conversations mean
                endless scrolling. Smart Conversation Outline, part of the AI
                Workspace extension, adds a floating sidebar with every
                message, a visual progress bar, filters (your questions vs AI
                answers), and instant in-thread search. Toggle it with
                Cmd/Ctrl + . and click any entry to jump straight there.
              </p>
            </div>

            {/* Hero Visual */}
            <div className="mt-12 relative rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl overflow-hidden">
              <Image
                src="/images/blog/conversation-outline-hero.png"
                alt="Smart Conversation Outline sidebar showing a clickable map of a long ChatGPT conversation"
                width={1280}
                height={720}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Built for long conversations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MousePointerClick,
                title: "Jump to any message",
                body: "Every message becomes a clickable entry in the outline. One click and you're there — no scrolling.",
              },
              {
                icon: Filter,
                title: "Smart filtering",
                body: "Show only your questions, or only the AI's responses, to skim the structure of a long session.",
              },
              {
                icon: Search,
                title: "Instant search",
                body: "Search within the thread and jump straight to the matching message.",
              },
              {
                icon: Gauge,
                title: "Visual progress bar",
                body: "Always know where you are in the conversation, even hundreds of messages deep.",
              },
              {
                icon: Keyboard,
                title: "Keyboard-first",
                body: "Cmd/Ctrl + . toggles the outline. Built for power users who live in AI chats.",
              },
              {
                icon: Map,
                title: "ChatGPT, Claude & Grok",
                body: "The same outline works on every major AI assistant — one navigation habit everywhere.",
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
              A researcher runs a literature-review thread that has grown past
              300 messages over two weeks. The summary she needs is
              &quot;somewhere in the middle&quot; — natively, that means
              minutes of scrolling and skimming every time.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed m-0">
              With the outline open she filters to her own questions, spots the
              section instantly, and jumps there in one click. Combined with{" "}
              <Link
                href="/fix-chatgpt-lag"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Smart Thread Trimming
              </Link>{" "}
              the same thread also stops lagging — 73% less memory, 80% faster
              scrolling.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-900/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            ChatGPT minimap FAQ
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
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            Keep exploring
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                href: "/guides/how-to-navigate-long-chatgpt-conversations",
                label: "Guide: Navigate long conversations",
              },
              {
                href: "/fix-chatgpt-lag",
                label: "Feature: Fix ChatGPT lag",
              },
              {
                href: "/chatgpt-conversation-branching",
                label: "Feature: Tangent View branching",
              },
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
          <Map className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-white">
            Stop scrolling. Start jumping.
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
            Free forever • No credit card required • Install in seconds
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
