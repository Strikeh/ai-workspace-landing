import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import {
  ArrowRight,
  Wand2,
  Sparkles,
  Columns2,
  Code2,
  Languages,
  CheckCircle2,
  Target,
  Shield,
  RefreshCw,
} from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";
const pageUrl = "https://getaiworkspace.com/chatgpt-prompt-optimizer";

export const metadata: Metadata = {
  title: "ChatGPT Prompt Optimizer: Rewrite Prompts for Better Answers | AI Workspace",
  description:
    "Turn rough drafts into sharp, high-performing prompts. One click rewrites your ChatGPT prompt for clarity, specificity and structure — compare side by side, then use it. A Pro feature powered by AI Workspace's backend.",
  keywords: [
    "ChatGPT prompt optimizer",
    "prompt optimizer",
    "improve ChatGPT prompts",
    "rewrite ChatGPT prompt",
    "AI prompt engineering tool",
    "optimize prompt",
    "prompt enhancer",
    "AI Workspace",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "ChatGPT Prompt Optimizer: Rewrite Prompts for Better Answers",
    description:
      "One click rewrites your ChatGPT prompt for clarity, specificity and structure. Compare original vs optimized side by side, then use it. A Pro feature.",
    url: pageUrl,
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Prompt Optimizer: Rewrite Prompts for Better Answers",
    description:
      "Turn rough drafts into sharp prompts. Compare original vs optimized, then use it — right inside ChatGPT.",
  },
};

const faqs = [
  {
    q: "What is the Prompt Optimizer?",
    a: "The Prompt Optimizer rewrites your draft prompt into a clearer, more effective version before you send it. Click Optimize in the ChatGPT composer, review the original and the optimized version side by side, then click 'Use this version' to drop it into the input. It improves clarity, specificity, structure and intent so ChatGPT gives you a noticeably better answer.",
  },
  {
    q: "How is this different from the built-in Optimize button?",
    a: "AI Workspace also ships a free, on-device quick-optimize for light touch-ups. The Prompt Optimizer is the Pro version: it uses a stronger AI model on our backend, shows a full before/after comparison, lets you re-optimize for a different angle, and tells you when your prompt is already good — so you stay in control of the rewrite.",
  },
  {
    q: "Does it keep my variables and placeholders?",
    a: "Yes. The optimizer preserves {{variables}}, [placeholders] and code blocks exactly, so your reusable templates from the Prompt Library keep working after optimization.",
  },
  {
    q: "What does 'Your prompt is already clear' mean?",
    a: "If your draft is already specific and well-formed, the optimizer says so instead of padding it with needless changes — and that result does not count against your weekly limit. You can edit the original and click Re-optimize to try a different angle.",
  },
  {
    q: "Is there a usage limit?",
    a: "Prompt Optimizer is a Pro feature with a generous weekly fair-use limit to prevent abuse. 'Already clear' results are free and never consume your allowance. The counter resets each week.",
  },
  {
    q: "Does it send my prompt anywhere?",
    a: "To generate the optimized version, your draft prompt is sent securely to our server, which calls the AI model and returns the rewrite. We don't store or log your prompt content. Your organizing data — folders, tags, notes, bookmarks — always stays local in your browser.",
  },
  {
    q: "Which platforms are supported?",
    a: "The Prompt Optimizer currently works inside ChatGPT. AI Workspace also supports Claude, Gemini and Grok across its other features.",
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
        { "@type": "ListItem", position: 3, name: "Prompt Optimizer", item: pageUrl },
      ],
    },
  ],
};

export default function PromptOptimizerPage() {
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
              <Wand2 className="w-3 h-3" />
              New · Pro
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
              Turn rough drafts into prompts that actually work
            </h1>
            <p className="text-lg leading-8 text-slate-400 mb-8 max-w-2xl mx-auto">
              One click rewrites your ChatGPT prompt for clarity, specificity and
              structure. Compare the original and the optimized version side by
              side, then use it — without leaving the composer.
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
              4.5★ on Chrome Web Store · Prompt Optimizer on Pro
            </p>
          </div>

          {/* Hero visual — before/after mock */}
          <div className="relative mt-14 max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-3xl opacity-20" />
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-slate-950/60 p-5">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                    Original
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed m-0">
                    write a blog post about productivity
                  </p>
                </div>
                <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-3">
                    Optimized
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed m-0">
                    Act as a productivity writer. Write a 900-word blog post for
                    remote knowledge workers on beating afternoon focus dips.
                    Include a hook, 4 tactics with concrete examples, and a
                    one-line takeaway per section. Tone: practical, no fluff.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 mt-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500 text-white text-sm font-semibold px-4 py-2">
                  <Sparkles className="w-4 h-4" /> Optimize
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 text-slate-300 text-sm font-medium px-4 py-2">
                  Use this version
                </span>
              </div>
            </div>
          </div>

          {/* Quick answer */}
          <div className="mt-16 p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 max-w-4xl">
            <h2 className="text-sm font-bold text-cyan-400 mb-2 uppercase tracking-wide">
              Quick Answer
            </h2>
            <p className="text-slate-200 leading-relaxed m-0">
              The Prompt Optimizer is a Pro feature in AI Workspace that rewrites
              your draft prompt into a clearer, more effective version. Click
              Optimize in the ChatGPT composer, review the original vs the
              optimized prompt side by side, then click "Use this version" to
              send it. It improves clarity, specificity and structure while
              preserving your {`{{variables}}`} — and tells you when a prompt is
              already good instead of changing it for no reason.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-900/50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            How the Prompt Optimizer works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Click Optimize",
                body: "Type your draft in the ChatGPT composer and hit the Optimize button. Your prompt opens in the optimizer, ready to improve.",
              },
              {
                step: "2",
                title: "Compare side by side",
                body: "See your original and the AI-rewritten version next to each other. Re-optimize for a different angle, or edit the original and try again.",
              },
              {
                step: "3",
                title: "Use this version",
                body: "Happy with it? Click 'Use this version' and the optimized prompt drops straight into the composer, ready to send.",
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
            Better prompts, less guesswork
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Columns2,
                title: "Side-by-side comparison",
                body: "Original and optimized prompts sit next to each other, so you always see exactly what changed before you commit.",
              },
              {
                icon: Target,
                title: "Clarity & specificity",
                body: "The optimizer adds role, context, format and constraints where they help — turning vague asks into precise instructions.",
              },
              {
                icon: Code2,
                title: "Keeps your variables",
                body: "{{variables}}, [placeholders] and code blocks are preserved exactly, so your Prompt Library templates keep working.",
              },
              {
                icon: RefreshCw,
                title: "Re-optimize on demand",
                body: "Not quite right? Re-optimize for a fresh, different angle — or tweak the original and run it again.",
              },
              {
                icon: CheckCircle2,
                title: "Knows when to stop",
                body: "If your prompt is already clear, it says so — and that result never counts against your weekly limit.",
              },
              {
                icon: Languages,
                title: "Stays in your language",
                body: "Write in any language and the optimized prompt comes back in the same one, ready to send.",
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
              You know what you want, but typing the perfect prompt every time is
              work — so most prompts come out short and vague, and the answer
              comes back short and vague too. The fix is usually the same: add a
              role, some context, the format you want, and a constraint or two.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed m-0">
              The Prompt Optimizer does that rewrite for you in a click, shows
              you the difference, and lets you send the stronger version. Save
              the ones you love to your{" "}
              <Link
                href="/prompt-library"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Prompt Library
              </Link>{" "}
              and reuse them with {`{{variables}}`} anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">
            Honest about your data
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto m-0">
            To generate an optimized version, your draft prompt is sent securely
            to our server, which calls the AI model and returns the rewrite. We
            don&apos;t store or log your prompt content. Everything else —
            folders, tags, notes and bookmarks — always stays local in your
            browser.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-900/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Prompt Optimizer FAQ
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
          <h2 className="text-2xl font-bold text-white mb-8">Keep exploring</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/prompt-library", label: "Feature: Prompt Library" },
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
          <Wand2 className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-white">
            Write less. Get better answers.
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
            Free to install · Prompt Optimizer on Pro
          </p>
        </div>
      </section>

      <Footer />
      <ImageLightbox />
    </main>
  );
}
