import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import {
  ArrowRight,
  Bookmark,
  MousePointerClick,
  Navigation,
  Layers,
  Lock,
  Shield,
  Zap,
  Search,
} from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";
const pageUrl = "https://getaiworkspace.com/chatgpt-bookmarks";

export const metadata: Metadata = {
  title: "ChatGPT Bookmarks: Save & Jump Back to Any Message | AI Workspace",
  description:
    "Bookmark any ChatGPT message with one click and jump straight back to it from a Bookmarks sidebar. Anchored to the exact message, grouped by chat, 100% local.",
  keywords: [
    "ChatGPT bookmarks",
    "save ChatGPT message",
    "bookmark ChatGPT reply",
    "ChatGPT saved messages",
    "ChatGPT bookmark sidebar",
    "AI Workspace",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "ChatGPT Bookmarks: Save & Jump Back to Any Message",
    description:
      "Bookmark any ChatGPT message with one click and jump straight back to it from a Bookmarks sidebar. Anchored, grouped by chat, 100% local.",
    url: pageUrl,
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Bookmarks: Save & Jump Back to Any Message",
    description:
      "Bookmark any ChatGPT message with one click and jump back to it from a Bookmarks sidebar.",
  },
};

const faqs = [
  {
    q: "What are Bookmarks in ChatGPT?",
    a: "Bookmarks let you flag any individual ChatGPT message — a prompt or a reply — with a single click. Every bookmark is anchored to that exact message and collected in a Bookmarks sidebar, so you can jump back to it instantly later.",
  },
  {
    q: "How are Bookmarks different from Message Notes?",
    a: "A bookmark is a lightweight flag — one click to save a message you'll want to return to, no typing. A note is for writing something about a message. Use bookmarks to mark key answers and notes to annotate them; both live in their own sidebar and both jump you back to the exact message.",
  },
  {
    q: "Where do my bookmarks live?",
    a: "In a Bookmarks sidebar with two tabs: ‘Current Chat’ shows bookmarks for the conversation you're in, and ‘All Bookmarks’ groups every bookmark by conversation title. Clicking one navigates to the right chat and scrolls to the message.",
  },
  {
    q: "Are bookmarks stored privately?",
    a: "Yes. Bookmarks are saved 100% locally in your browser and never leave your device — no server, no account required.",
  },
  {
    q: "Is it free?",
    a: "Yes — bookmarks are part of the free plan. Pro unlocks unlimited notes, the AI-powered Enhanced follow-up suggestions, encrypted storage, and the rest of the Pro feature set.",
  },
  {
    q: "Which platforms are supported?",
    a: "Bookmarks currently work inside ChatGPT. AI Workspace also supports Claude, Gemini and Grok across its other features.",
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
        { "@type": "ListItem", position: 3, name: "Bookmarks", item: pageUrl },
      ],
    },
  ],
};

export default function BookmarksPage() {
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
              <Bookmark className="w-3 h-3" />
              New
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
              Bookmark the ChatGPT messages that matter
            </h1>
            <p className="text-lg leading-8 text-slate-400 mb-8 max-w-2xl mx-auto">
              One click saves any prompt or reply to a Bookmarks sidebar — then
              jump straight back to it from any chat, anytime. No more endless
              scrolling to re-find that one great answer.
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
              4.5★ on Chrome Web Store · Free to use · Updated June 2026
            </p>
          </div>

          {/* Hero visual — placeholder (drop in a real screenshot later) */}
          <div className="relative mt-14 max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-3xl opacity-20" />
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 aspect-[16/9] flex flex-col items-center justify-center text-center p-8">
              {/* TODO: replace with a real screenshot of the Bookmarks sidebar + per-message bookmark icon */}
              <Bookmark className="w-14 h-14 text-cyan-400/70 mb-4" />
              <p className="text-slate-400 text-sm m-0">
                Bookmarks sidebar — Current Chat / All Bookmarks
              </p>
            </div>
          </div>

          {/* Quick answer */}
          <div className="mt-16 p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 max-w-4xl">
            <h2 className="text-sm font-bold text-cyan-400 mb-2 uppercase tracking-wide">
              Quick Answer
            </h2>
            <p className="text-slate-200 leading-relaxed m-0">
              Bookmarks is a feature in AI Workspace that lets you flag any
              ChatGPT message with one click. A bookmark icon sits under each
              message; saved messages collect in a Bookmarks sidebar with
              ‘Current Chat’ and ‘All Bookmarks’ tabs, and clicking one jumps you
              right back to it. Everything stays 100% local in your browser.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-900/30">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            How Bookmarks work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Click the bookmark icon",
                body: "A bookmark icon appears under every message. One click flags it — the icon fills in so you can see at a glance what's saved.",
              },
              {
                step: "2",
                title: "It lands in your sidebar",
                body: "The message is added to your Bookmarks sidebar, grouped under its conversation, with a short excerpt so you recognize it.",
              },
              {
                step: "3",
                title: "Jump back from any chat",
                body: "Open ‘All Bookmarks’, click one, and you're taken to the right conversation and scrolled to the exact message.",
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
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Save now, find instantly later
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "One-click save",
                body: "No typing, no menus — a single click on the bookmark icon flags a message and fills the icon so it's obvious what's saved.",
              },
              {
                icon: Navigation,
                title: "Jump straight back",
                body: "Click a bookmark in the sidebar to navigate to the right chat and scroll to the exact message, with a brief highlight.",
              },
              {
                icon: Layers,
                title: "Current Chat / All Bookmarks",
                body: "Focus on this conversation, or browse every bookmark grouped by chat title across your whole history.",
              },
              {
                icon: MousePointerClick,
                title: "Right under each message",
                body: "The bookmark icon lives next to the note button under every prompt and reply — always one click away.",
              },
              {
                icon: Search,
                title: "Re-find great answers",
                body: "Stop scrolling back through long threads to relocate that one perfect response — flag it once and it's a click away.",
              },
              {
                icon: Lock,
                title: "100% local & private",
                body: "Bookmarks are stored in your browser and never sent anywhere. No account needed to use them.",
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
              Halfway through a long session ChatGPT gives you the exact snippet
              of code — or the precise wording — you'll need again later. Twenty
              messages on, finding it means scrolling forever.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed m-0">
              Bookmark it the moment you see it, keep working, and when you need
              it again open ‘All Bookmarks’ and click — you're back on the exact
              message in a second. Add{" "}
              <Link
                href="/chatgpt-message-notes"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Message Notes
              </Link>{" "}
              when you also want to write something about it.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="py-16 bg-slate-900/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">
            100% local by design
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto m-0">
            Bookmarks are stored in your browser and never leave your device —
            just like folders, tags and highlights. No server, no tracking.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Bookmarks FAQ
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
              { href: "/chatgpt-message-notes", label: "Feature: Message Notes" },
              {
                href: "/chatgpt-follow-up-suggestions",
                label: "Feature: Follow-up Suggestions",
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
          <Bookmark className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-white">
            Never lose a great answer again
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
            Free to install · Bookmarks included
          </p>
        </div>
      </section>

      <Footer />
      <ImageLightbox />
    </main>
  );
}
