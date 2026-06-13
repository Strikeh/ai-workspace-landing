import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import {
  ArrowRight,
  FileText,
  MousePointerClick,
  Navigation,
  ListChecks,
  Lock,
  Shield,
  Layers,
  PenLine,
} from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";
const pageUrl = "https://getaiworkspace.com/chatgpt-message-notes";

export const metadata: Metadata = {
  title: "ChatGPT Message Notes: Pin a Note to Any Message | AI Workspace",
  description:
    "Attach notes to any individual ChatGPT message — prompt or reply — and jump straight back to them from a Notes sidebar. Anchored, searchable, 100% local.",
  keywords: [
    "ChatGPT notes",
    "annotate ChatGPT messages",
    "ChatGPT message notes",
    "take notes in ChatGPT",
    "ChatGPT note sidebar",
    "AI Workspace",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "ChatGPT Message Notes: Pin a Note to Any Message",
    description:
      "Attach notes to any individual ChatGPT message and jump straight back to them from a Notes sidebar. Anchored, searchable, 100% local.",
    url: pageUrl,
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Message Notes: Pin a Note to Any Message",
    description:
      "Attach notes to any individual ChatGPT message and jump back to them from a Notes sidebar.",
  },
};

const faqs = [
  {
    q: "What are Message Notes in ChatGPT?",
    a: "Message Notes let you attach a written note to a specific message in a ChatGPT conversation — either one of your prompts or one of the AI's replies. Each note is anchored to that exact message, so later you can click it in the Notes sidebar and jump straight back to where it belongs.",
  },
  {
    q: "How is this different from a regular notes app?",
    a: "A normal notes app lives outside your chat, so you lose the connection to what the note was about. Message Notes stay attached to the exact message inside ChatGPT. Clicking a note navigates to the right conversation and scrolls to the right message, with a brief highlight so you instantly see the context.",
  },
  {
    q: "Where do I see all my notes?",
    a: "A Notes sidebar has two tabs: ‘Current Chat’ shows the notes for the conversation you're in, and ‘All Notes’ groups every note by conversation title. From either tab you click a note to jump to its message.",
  },
  {
    q: "Is my note data private?",
    a: "Yes. Notes are stored 100% locally in your browser — they never leave your device. Adding and reading notes needs no server round-trip.",
  },
  {
    q: "Is it free?",
    a: "Yes — message notes & bookmarks are included on the free plan (with a generous limit). Pro removes the limit for unlimited notes, alongside unlimited prompts, vaults, encrypted storage, and the rest of the Pro feature set.",
  },
  {
    q: "Which platforms are supported?",
    a: "Message Notes currently work inside ChatGPT. The wider AI Workspace extension also supports Claude, Gemini and Grok.",
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
        { "@type": "ListItem", position: 3, name: "Message Notes", item: pageUrl },
      ],
    },
  ],
};

export default function MessageNotesPage() {
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
              <FileText className="w-3 h-3" />
              New
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
              Pin a note to any ChatGPT message
            </h1>
            <p className="text-lg leading-8 text-slate-400 mb-8 max-w-2xl mx-auto">
              Annotate the exact prompt or reply that matters — a to-do, a
              correction, a reminder — and jump straight back to it later from a
              dedicated Notes sidebar. Anchored, organized, and 100% local.
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
              {/* TODO: replace with a real screenshot of the Notes sidebar + per-message note button */}
              <FileText className="w-14 h-14 text-cyan-400/70 mb-4" />
              <p className="text-slate-400 text-sm m-0">
                Notes sidebar — Current Chat / All Notes
              </p>
            </div>
          </div>

          {/* Quick answer */}
          <div className="mt-16 p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 max-w-4xl">
            <h2 className="text-sm font-bold text-cyan-400 mb-2 uppercase tracking-wide">
              Quick Answer
            </h2>
            <p className="text-slate-200 leading-relaxed m-0">
              Message Notes is a feature in AI Workspace that lets you attach a
              note to any individual ChatGPT message. A small note button sits
              under each prompt and reply; your notes collect in a sidebar with
              ‘Current Chat’ and ‘All Notes’ tabs, and clicking one jumps you
              straight back to the message it belongs to. Notes stay 100% local
              in your browser.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-900/30">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            How Message Notes work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Click the note button",
                body: "A small note button appears under every message — your prompts and the AI's replies alike. Or select text and choose ‘Add note’.",
              },
              {
                step: "2",
                title: "Write your note",
                body: "Type your thought right there — the quoted message is shown above the field so the note keeps its context. Save when you're done.",
              },
              {
                step: "3",
                title: "Jump back anytime",
                body: "Open the Notes sidebar, click any note, and you land on the exact message — in the right chat — with a brief highlight.",
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
            Notes that stay where they belong
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: PenLine,
                title: "Anchored to the message",
                body: "Every note is tied to a specific prompt or reply — never an orphaned thought in a separate app.",
              },
              {
                icon: Navigation,
                title: "Click to jump",
                body: "From the sidebar, one click navigates to the right conversation and scrolls to the exact message.",
              },
              {
                icon: Layers,
                title: "Current Chat / All Notes",
                body: "See just this conversation's notes, or every note grouped by chat title across your whole history.",
              },
              {
                icon: MousePointerClick,
                title: "One click from any message",
                body: "The note button lives under each message — no menus, no copy-paste, no leaving the page.",
              },
              {
                icon: ListChecks,
                title: "Edit & organize inline",
                body: "Edit or delete a note right in the sidebar. Perfect for to-dos, corrections and reminders.",
              },
              {
                icon: Lock,
                title: "100% local & private",
                body: "Notes are stored in your browser and never sent anywhere. No account required to use them.",
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
              You're researching across a long ChatGPT thread and one reply has
              a claim you want to verify, while three messages up there's a step
              you still need to act on. Normally those reminders get lost the
              moment you scroll.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed m-0">
              With Message Notes you drop a note on each — “check this source”,
              “do this first” — and they wait for you in the sidebar. When
              you're ready, one click takes you straight back to the exact
              message. Pair it with{" "}
              <Link
                href="/chatgpt-bookmarks"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Bookmarks
              </Link>{" "}
              to flag the messages you'll return to most.
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
            Your notes live in your browser and never leave your device. Like
            folders, tags and highlights, Message Notes need no server — your
            annotations stay private to you.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Message Notes FAQ
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
              { href: "/chatgpt-bookmarks", label: "Feature: Bookmarks" },
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
          <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-white">
            Stop losing the messages that matter
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
            Free to install · Message Notes included
          </p>
        </div>
      </section>

      <Footer />
      <ImageLightbox />
    </main>
  );
}
