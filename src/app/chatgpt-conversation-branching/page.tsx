import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  GitBranch,
  MousePointerClick,
  Eye,
  Route,
  Shield,
  Keyboard,
} from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";
const pageUrl = "https://getaiworkspace.com/chatgpt-conversation-branching";

export const metadata: Metadata = {
  title: "ChatGPT Conversation Branching: See Every Path | AI Workspace",
  description:
    "Tangent View turns branched ChatGPT conversations into an interactive graph. See every edit and regeneration, preview branches, and jump to any path.",
  keywords: [
    "ChatGPT conversation branching",
    "ChatGPT branches",
    "ChatGPT tree view",
    "ChatGPT conversation graph",
    "ChatGPT edited message branches",
    "Tangent View",
    "AI Workspace",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "ChatGPT Conversation Branching: See Every Path",
    description:
      "Tangent View turns branched ChatGPT conversations into an interactive graph. Preview branches and jump to any path.",
    url: pageUrl,
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Conversation Branching: See Every Path",
    description:
      "Tangent View turns branched ChatGPT conversations into an interactive graph. Preview branches and jump to any path.",
  },
};

const faqs = [
  {
    q: "What happens when you edit a message in ChatGPT?",
    a: "ChatGPT creates a hidden branch: the original reply still exists, but you can only reach it through small < > arrows under the edited message. Every edit or 'regenerate' creates another branch. Long conversations can hide dozens of alternative paths this way.",
  },
  {
    q: "Can ChatGPT show all conversation branches natively?",
    a: "No. ChatGPT only shows < > arrows on individual messages, one branch point at a time. There is no overview of the full tree. Tangent View in AI Workspace draws the entire conversation as a connected graph so you can see and navigate every branch.",
  },
  {
    q: "How do I open Tangent View?",
    a: "Open any ChatGPT conversation and press Ctrl+Shift+Y (Cmd+Shift+Y on Mac), or use the AI Workspace toolbar. The graph opens instantly with your current path highlighted.",
  },
  {
    q: "Is my conversation data sent anywhere to build the graph?",
    a: "No. Tangent View stores branch data locally in your browser using IndexedDB. Nothing is uploaded — AI Workspace is fully local-first with zero telemetry.",
  },
  {
    q: "Is Tangent View free?",
    a: "Tangent View ships with AI Workspace, which is free to install with core features free forever. No account is required.",
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
        { "@type": "ListItem", position: 3, name: "Conversation Branching", item: pageUrl },
      ],
    },
  ],
};

export default function ConversationBranchingPage() {
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
              <GitBranch className="w-3 h-3" />
              New Feature
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
              ChatGPT conversation branching, finally visible
            </h1>
            <p className="text-lg leading-8 text-slate-400 mb-8 max-w-2xl mx-auto">
              Every edit and regeneration in ChatGPT creates a hidden branch.
              Tangent View draws your whole conversation as an interactive
              graph — so you never lose a good answer in a forgotten branch
              again.
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
                ChatGPT hides conversation branches behind tiny &lt; &gt;
                arrows — there is no native overview of edited or regenerated
                paths. Tangent View, part of the AI Workspace extension,
                visualizes the entire conversation tree as an interactive
                graph with hover previews and path tracing. Open it with
                Ctrl/Cmd+Shift+Y. All data stays local in your browser.
              </p>
            </div>

            {/* Hero Visual */}
            <div className="mt-12 relative rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl overflow-hidden">
              <Image
                src="/images/blog/tangent-view-graph-overview.png"
                alt="Tangent View interactive graph of a branched ChatGPT conversation"
                width={1280}
                height={720}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-slate-900/50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              The branch you can&apos;t find anymore
            </h2>
            <div className="space-y-4 text-slate-400 text-lg">
              <p>
                You edit a prompt to try a different angle. Then you regenerate
                a reply. Twenty minutes later you want that first version back
                — but where is it?
              </p>
              <p>
                ChatGPT keeps every branch, but only shows{" "}
                <span className="font-mono bg-slate-800 px-1.5 py-0.5 rounded text-cyan-300">
                  &lt; 2/3 &gt;
                </span>{" "}
                arrows on a single message. To explore the tree you have to
                click through every fork, one at a time, from memory.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/images/blog/tangent-view-hover-preview.png"
              alt="Hover preview of a branch in Tangent View"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What Tangent View gives you
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GitBranch,
                title: "Full conversation graph",
                body: "Every message, edit, and regeneration drawn as a connected, zoomable graph. Your current path is highlighted.",
              },
              {
                icon: Eye,
                title: "Hover previews",
                body: "Hover any node to preview that message's content without leaving your current spot in the conversation.",
              },
              {
                icon: Route,
                title: "Path tracing",
                body: "Follow any branch from root to leaf and see exactly where paths diverged — and which fork led to the best answer.",
              },
              {
                icon: MousePointerClick,
                title: "Jump to any branch",
                body: "Click a node to navigate ChatGPT straight to that branch. No more clicking through < > arrows from memory.",
              },
              {
                icon: Keyboard,
                title: "Keyboard shortcut",
                body: "Ctrl+Shift+Y (Cmd on Mac) opens the graph instantly in any conversation.",
              },
              {
                icon: Shield,
                title: "100% local",
                body: "Branch data is stored in your browser via IndexedDB. Nothing leaves your device.",
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
      <section className="py-20 bg-slate-900/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-slate-900/60">
            <h2 className="text-2xl font-bold text-white mb-6">
              What this looks like in practice
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              A developer is debugging with ChatGPT and tries four different
              framings of the same question, editing the prompt each time. One
              of the four answers contained the fix — but after an hour of
              back-and-forth, it&apos;s buried in a branch he can&apos;t
              reconstruct by clicking arrows.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed m-0">
              With Tangent View he opens the graph, sees all four forks side by
              side, hovers each one to preview the answers, and jumps straight
              to the branch with the working solution. Combined with{" "}
              <Link
                href="/chatgpt-text-highlighter"
                className="text-cyan-400 hover:text-cyan-300"
              >
                highlighting
              </Link>
              , the fix is marked and findable forever.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Conversation branching FAQ
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
          <h2 className="text-2xl font-bold text-white mb-8">
            Keep exploring
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                href: "/blog/tangent-view-chatgpt-branching-graph",
                label: "Blog: Tangent View deep dive",
              },
              {
                href: "/chatgpt-minimap",
                label: "Feature: Smart Conversation Outline",
              },
              {
                href: "/guides/how-to-navigate-long-chatgpt-conversations",
                label: "Guide: Navigate long conversations",
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
          <GitBranch className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-white">
            See your whole conversation tree
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
