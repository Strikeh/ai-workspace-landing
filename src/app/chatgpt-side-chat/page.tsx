import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { DemoVideoLightbox } from "@/components/DemoVideoLightbox";
import ImageLightbox from "@/components/ImageLightbox";
import {
  ArrowRight,
  MessageSquare,
  Quote,
  Gauge,
  Code2,
  Brain,
  EyeOff,
  Shield,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";
const pageUrl = "https://getaiworkspace.com/chatgpt-side-chat";

export const metadata: Metadata = {
  title: "ChatGPT Side Chat: Ask Without Derailing Your Thread | AI Workspace",
  description:
    "Select any passage in ChatGPT and ask a follow-up in a side panel — with full context, streamed answers, and your main conversation left untouched.",
  keywords: [
    "ChatGPT side chat",
    "ask side question ChatGPT",
    "ChatGPT follow-up without new chat",
    "fact-check ChatGPT response",
    "ChatGPT side panel",
    "AI Workspace",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "ChatGPT Side Chat: Ask Without Derailing Your Thread",
    description:
      "Select any passage in ChatGPT and ask a follow-up in a side panel — with full context and your main conversation left untouched.",
    url: pageUrl,
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Side Chat: Ask Without Derailing Your Thread",
    description:
      "Select any passage in ChatGPT and ask a follow-up in a side panel — with full context and your main conversation left untouched.",
  },
};

const faqs = [
  {
    q: "What is Side Chat in ChatGPT?",
    a: "Side Chat lets you select any passage in a ChatGPT answer and ask a follow-up question about it in a separate right-hand panel. You get a focused answer — a definition, a fact-check, a simpler explanation — without adding messages to your main conversation, so your thread stays clean and on-topic.",
  },
  {
    q: "How is this different from just asking in the same chat?",
    a: "Asking inline pollutes your main thread with tangents and can pull the model off-topic. Starting a brand-new chat loses all your context. Side Chat keeps the surrounding context of the passage you selected, answers in a side panel, and leaves your main conversation exactly as it was.",
  },
  {
    q: "Does Side Chat send my conversation anywhere?",
    a: "To answer a question, the passage you selected plus your question are sent securely to AI Workspace's servers, which call the AI model and stream the answer back. We do not store or log your conversation content. This is the one AI Workspace feature that needs a server round-trip — organizing features like folders, tags, and highlights stay 100% local in your browser.",
  },
  {
    q: "Are the answers streamed?",
    a: "Yes. Answers stream in token by token, just like ChatGPT itself, so you start reading immediately instead of waiting for the full response. Formatting (lists, code blocks, bold) is rendered as proper markdown.",
  },
  {
    q: "Is Side Chat free?",
    a: "Side Chat is a Pro feature ($9.99/month billed annually). Pro also includes unlimited prompts, vaults and notes, encrypted storage, the full Image Gallery, and the Smart Conversation Outline. The core organization features of AI Workspace remain free forever.",
  },
  {
    q: "Which platforms support Side Chat?",
    a: "Side Chat currently works inside ChatGPT. The rest of AI Workspace also supports Claude and Grok, and bringing Side Chat to those platforms is on the roadmap.",
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
        { "@type": "ListItem", position: 3, name: "Side Chat", item: pageUrl },
      ],
    },
  ],
};

const comparisonRows = [
  {
    approach: "Ask inline in the same thread",
    clean: false,
    context: true,
    note: "Pollutes your conversation and can derail the model",
  },
  {
    approach: "Start a brand-new chat",
    clean: true,
    context: false,
    note: "Clean — but you lose all the surrounding context",
  },
  {
    approach: "Open a second ChatGPT tab",
    clean: true,
    context: false,
    note: "Context-free and constant tab juggling",
  },
  {
    approach: "Side Chat",
    clean: true,
    context: true,
    note: "One click, keeps context, main thread untouched",
  },
];

export default function SideChatPage() {
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
              <MessageSquare className="w-3 h-3" />
              New · Pro Feature
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
              Ask a side question without derailing your chat
            </h1>
            <p className="text-lg leading-8 text-slate-400 mb-8 max-w-2xl mx-auto">
              Select any passage in a ChatGPT answer and ask a follow-up in a
              side panel — a definition, a fact-check, a simpler explanation.
              You keep the context, your main conversation stays untouched.
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
              4.5★ on Chrome Web Store · Pro feature · Updated June 2026
            </p>
          </div>

          {/* Hero visual — live demo video (click to expand) */}
          <div className="relative mt-14 max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-3xl opacity-20" />
            <div className="relative">
              <DemoVideoLightbox
                src="/videos/demo-side-chat.mp4"
                poster="/videos/demo-side-chat-poster.jpg"
                label="Side Chat demo: select a passage in ChatGPT and ask a follow-up in the side panel"
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
              Side Chat is a Pro feature in AI Workspace that lets you highlight
              any passage in a ChatGPT answer and ask a follow-up question in a
              separate side panel. It keeps the context of what you selected,
              streams the answer in real time, and renders it as clean markdown
              — all without adding a single message to your main conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-slate-900/50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            How people ask a quick side question today
          </h2>
          <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
            Every workaround forces a trade-off between keeping your thread
            clean and keeping your context. Side Chat gives you both.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900/80 text-left">
                  <th className="p-4 font-semibold text-slate-300">Approach</th>
                  <th className="p-4 font-semibold text-slate-300">
                    Main thread stays clean
                  </th>
                  <th className="p-4 font-semibold text-slate-300">
                    Keeps your context
                  </th>
                  <th className="p-4 font-semibold text-slate-300">Notes</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      row.approach === "Side Chat"
                        ? "bg-cyan-500/10 border-t border-cyan-500/20"
                        : i % 2 === 0
                          ? "bg-slate-900/30"
                          : "bg-slate-900/60"
                    }
                  >
                    <td className="p-4 font-medium text-white">
                      {row.approach}
                    </td>
                    <td className="p-4">
                      {row.clean ? (
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400/70" />
                      )}
                    </td>
                    <td className="p-4">
                      {row.context ? (
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400/70" />
                      )}
                    </td>
                    <td className="p-4 text-slate-400">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            How Side Chat works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Select any passage",
                body: "Highlight a sentence or paragraph in any ChatGPT answer. A “Side Chat” button appears right under your selection.",
              },
              {
                step: "2",
                title: "Ask your question",
                body: "Click it and the side panel opens with your passage quoted. Ask anything about it — Side Chat keeps the surrounding context.",
              },
              {
                step: "3",
                title: "Read the streamed answer",
                body: "The answer streams in instantly as markdown. Ask follow-ups in the same panel. Your main thread never changes.",
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

      {/* Screenshots */}
      <section className="py-20 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-3 text-center">
            See it in action
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Highlight a passage, click the button, and your answer appears in
            the panel — your main thread never moves. Click a screenshot to
            enlarge it.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <figure className="m-0">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B1120]">
                <Image
                  src="/images/demo-sidechat.png"
                  alt="Selecting text in a ChatGPT answer shows the Side Chat button"
                  width={2424}
                  height={1948}
                  className="w-full h-auto zoomable-image cursor-zoom-in"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-slate-500">
                1. Select any passage → the Side Chat button appears
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B1120]">
                <Image
                  src="/images/demo-sidechat2.png"
                  alt="The Side Chat panel answering a follow-up question about the selected passage"
                  width={955}
                  height={601}
                  className="w-full h-auto zoomable-image cursor-zoom-in"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-slate-500">
                2. Ask a follow-up → the answer streams in the side panel
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Built to keep you in flow
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: EyeOff,
                title: "Main thread untouched",
                body: "Side questions live in the panel, not your conversation. No tangents, no clutter, no derailing the model.",
              },
              {
                icon: Brain,
                title: "Context-aware",
                body: "Side Chat sees the passage you selected and the message it came from, so answers actually fit what you're reading.",
              },
              {
                icon: Gauge,
                title: "Streamed in real time",
                body: "Answers stream token by token, just like ChatGPT, so you start reading immediately.",
              },
              {
                icon: Code2,
                title: "Clean markdown",
                body: "Lists, code blocks, tables, and bold all render properly — not a wall of plain text.",
              },
              {
                icon: MessageSquare,
                title: "Follow-up friendly",
                body: "Keep the thread going in the side panel. Each selection starts its own focused mini-conversation.",
              },
              {
                icon: Quote,
                title: "One-click from any answer",
                body: "Highlight text and the Side Chat button appears right there. No menus, no copy-paste.",
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
              You&apos;re deep in a long planning thread with ChatGPT and it
              drops a term you don&apos;t fully know. Normally you&apos;d either
              break your flow to ask inline — cluttering the plan — or open a
              new chat and re-explain everything.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed m-0">
              With Side Chat you highlight the term, ask &quot;explain this in
              one line,&quot; read the streamed answer in the panel, and get
              straight back to your plan. The main thread reads exactly as you
              intended — no detours. Pair it with the{" "}
              <Link
                href="/chatgpt-text-highlighter"
                className="text-cyan-400 hover:text-cyan-300"
              >
                highlighter
              </Link>{" "}
              to mark the parts that matter most.
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
            Answering a question needs an AI model, so the passage you select
            and your question are sent securely to our servers to generate the
            reply. We don&apos;t store or log your conversation content. Every
            other AI Workspace feature — folders, tags, highlights, the image
            gallery — stays 100% local in your browser.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Side Chat FAQ
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
              {
                href: "/chatgpt-text-highlighter",
                label: "Feature: Text Highlighter",
              },
              {
                href: "/chatgpt-minimap",
                label: "Feature: Conversation Outline",
              },
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
          <MessageSquare className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-white">
            Stop derailing your best conversations
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
            Free to install · Side Chat included with Pro
          </p>
        </div>
      </section>

      <Footer />
      <ImageLightbox />
    </main>
  );
}
