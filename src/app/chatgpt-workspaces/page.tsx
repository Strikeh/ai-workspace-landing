import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  Layers,
  Lock,
  Shield,
  Briefcase,
  FolderTree,
  Sparkles,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";
const pageUrl = "https://getaiworkspace.com/chatgpt-workspaces";

export const metadata: Metadata = {
  title: "ChatGPT Workspaces: Separate Clients & Projects | AI Workspace",
  description:
    "Create unlimited isolated workspaces inside ChatGPT. Keep clients, projects, and personal chats completely separate — with optional AES-256 encryption.",
  keywords: [
    "ChatGPT workspaces",
    "ChatGPT workspace extension",
    "separate ChatGPT conversations",
    "ChatGPT for multiple clients",
    "ChatGPT context isolation",
    "AI Workspace",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "ChatGPT Workspaces: Separate Clients & Projects",
    description:
      "Create unlimited isolated workspaces inside ChatGPT. Keep clients, projects, and personal chats completely separate.",
    url: pageUrl,
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Workspaces: Separate Clients & Projects",
    description:
      "Create unlimited isolated workspaces inside ChatGPT. Keep clients, projects, and personal chats completely separate.",
  },
};

const faqs = [
  {
    q: "What is a ChatGPT workspace?",
    a: "A workspace is a fully isolated environment inside ChatGPT with its own folders, conversations, prompts, and notes. Switching workspaces switches your entire sidebar context — so client A's chats never appear next to client B's. ChatGPT does not offer this natively; AI Workspace adds it as a browser extension.",
  },
  {
    q: "Does ChatGPT have workspaces built in?",
    a: "No. ChatGPT offers Projects, which group chats with shared files and instructions, but everything still lives in one sidebar under one context. Workspaces in AI Workspace are fully isolated from each other and can be encrypted individually.",
  },
  {
    q: "What is the difference between workspaces and folders?",
    a: "Folders organize conversations within one context — everything is still visible in one list. Workspaces are separate contexts: each has its own folders, tags, prompts, and notes, and you only see one workspace at a time. Use folders to tidy up, use workspaces to truly separate clients or projects.",
  },
  {
    q: "Where is my workspace data stored?",
    a: "100% locally in your browser. AI Workspace is local-first: no cloud sync, no account, no telemetry. Sensitive workspaces can additionally be protected with AES-256 encrypted vaults.",
  },
  {
    q: "Are ChatGPT workspaces free?",
    a: "Yes — workspaces are part of the free core features. The free plan includes 1 vault; Pro ($9.99/month billed annually) adds unlimited vaults, encryption, and unlimited prompts and notes.",
  },
  {
    q: "Do workspaces work on Claude and Grok too?",
    a: "Yes. The same workspace system works on ChatGPT, Claude, and Grok, so you can keep one organization system across all the AI assistants you use.",
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
        { "@type": "ListItem", position: 3, name: "ChatGPT Workspaces", item: pageUrl },
      ],
    },
  ],
};

const comparisonRows = [
  {
    approach: "One long ChatGPT sidebar",
    isolation: false,
    effort: "None — but everything is mixed together",
    breaksAt: "≈50 conversations",
  },
  {
    approach: "ChatGPT Projects",
    isolation: false,
    effort: "Low — groups chats, but one shared sidebar and context",
    breaksAt: "Multiple clients or sensitive work",
  },
  {
    approach: "Multiple browser profiles / accounts",
    isolation: true,
    effort: "High — constant logging in and out, scattered history",
    breaksAt: "Daily context switching",
  },
  {
    approach: "AI Workspace workspaces",
    isolation: true,
    effort: "One click to switch, everything stays organized",
    breaksAt: "—",
  },
];

export default function ChatGPTWorkspacesPage() {
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
              <Layers className="w-3 h-3" />
              Core Feature
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
              ChatGPT Workspaces: one account, completely separate worlds
            </h1>
            <p className="text-lg leading-8 text-slate-400 mb-8 max-w-2xl mx-auto">
              Create unlimited isolated workspaces inside ChatGPT, Claude &amp;
              Grok. Each client, project, or area of your life gets its own
              sidebar, folders, prompts, and notes — with zero overlap.
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
                ChatGPT has no built-in workspaces — every conversation lands
                in one shared sidebar. AI Workspace adds unlimited isolated
                workspaces on top of ChatGPT, Claude, and Grok, each with its
                own folders, tags, prompt library, and notes. Data stays 100%
                local in your browser, with optional AES-256 encrypted vaults
                for sensitive client work.
              </p>
            </div>

            {/* Hero Visual */}
            <div className="mt-12 relative rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl overflow-hidden">
              <Image
                src="/images/landingpages/workspaces.png"
                alt="Multiple isolated ChatGPT workspaces in the AI Workspace sidebar"
                width={1280}
                height={720}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-slate-900/50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            How people separate ChatGPT contexts today
          </h2>
          <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
            Most workarounds trade isolation for effort. Workspaces give you
            both.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900/80 text-left">
                  <th className="p-4 font-semibold text-slate-300">
                    Approach
                  </th>
                  <th className="p-4 font-semibold text-slate-300">
                    True isolation
                  </th>
                  <th className="p-4 font-semibold text-slate-300">
                    Daily effort
                  </th>
                  <th className="p-4 font-semibold text-slate-300">
                    Breaks down at
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      row.approach === "AI Workspace workspaces"
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
                      {row.isolation ? (
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400/70" />
                      )}
                    </td>
                    <td className="p-4 text-slate-400">{row.effort}</td>
                    <td className="p-4 text-slate-400">{row.breaksAt}</td>
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
            How workspaces work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create a workspace",
                body: "One click in the sidebar. Name it after a client, a project, or a part of your life — Work, Side Business, Personal.",
              },
              {
                step: "2",
                title: "Everything gets its own context",
                body: "Each workspace has its own folders, tags, pinned chats, prompt library, and notes. New conversations are filed where you are working.",
              },
              {
                step: "3",
                title: "Switch with one click",
                body: "Jump between workspaces from the sidebar. The full context switches with you — no logging out, no browser profiles, no mixing.",
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

      {/* Use case */}
      <section className="py-20 bg-slate-900/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-slate-900/60">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white m-0">
                What this looks like in practice
              </h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              A freelance marketer runs three client accounts plus her own
              business through ChatGPT. Before workspaces, every strategy
              session, draft, and brainstorm landed in one endless sidebar —
              and pasting the wrong client&apos;s context into a chat was one
              misclick away.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed m-0">
              Now each client is a workspace. Open &quot;Client A&quot; and
              only Client A&apos;s folders, prompts, and conversations exist.
              Her own business lives in an{" "}
              <Link
                href="/chatgpt-text-highlighter"
                className="text-cyan-400 hover:text-cyan-300"
              >
                annotated
              </Link>{" "}
              workspace of its own, and the sensitive client is locked in an
              AES-256 encrypted vault.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy strip */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "100% local-first",
                body: "All workspace data stays in your browser. No cloud, no account, zero telemetry.",
              },
              {
                icon: Lock,
                title: "AES-256 vaults",
                body: "Encrypt individual workspaces for client or confidential work.",
              },
              {
                icon: Sparkles,
                title: "ChatGPT, Claude & Grok",
                body: "One workspace system across every AI assistant you use.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/5"
              >
                <item.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 m-0">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-900/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            ChatGPT workspaces FAQ
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
                href: "/guides/how-to-organize-chatgpt-for-multiple-clients",
                label: "Guide: ChatGPT for multiple clients",
              },
              {
                href: "/organization",
                label: "Feature: Folders & Organization",
              },
              {
                href: "/blog/chatgpt-workspaces-complete-guide",
                label: "Blog: ChatGPT Workspaces – Complete Guide",
              },
              {
                href: "/guides/how-to-keep-chatgpt-conversations-private",
                label: "Guide: Keep ChatGPT conversations private",
              },
              {
                href: "/compare/chatgpt-projects",
                label: "Compare: vs ChatGPT Projects",
              },
              {
                href: "/freelancers",
                label: "For Freelancers",
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
          <FolderTree className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-white">
            Give every client its own ChatGPT
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
