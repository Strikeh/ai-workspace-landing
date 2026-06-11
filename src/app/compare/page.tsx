import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { comparePages } from "@/data/compare-pages";
import { Footer } from "@/components/Footer";
import { ArrowRight, Scale } from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";

export const metadata: Metadata = {
  title: "Compare AI Workspace Pro vs Alternatives | AI Workspace",
  description:
    "Honest comparisons of AI Workspace Pro vs Superpower ChatGPT, GPT Master, ChatGPT Projects, and manual organization. See which ChatGPT organizer fits you.",
  alternates: { canonical: "https://getaiworkspace.com/compare" },
  openGraph: {
    title: "Compare AI Workspace Pro vs Alternatives",
    description:
      "Honest comparisons of AI Workspace Pro vs Superpower ChatGPT, GPT Master, ChatGPT Projects, and manual organization.",
    url: "https://getaiworkspace.com/compare",
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
};

export default function CompareHubPage() {
  const cards = [
    {
      href: "/superpower-chatgpt-alternative",
      name: "Superpower ChatGPT",
      description:
        "The longest-standing ChatGPT extension vs the local-first alternative. Folders, prompts, cloud sync vs workspaces, encryption, and privacy.",
      tag: "Extension",
    },
    ...comparePages.map((page) => ({
      href: `/compare/${page.slug}`,
      name: page.competitorName,
      description: page.description,
      tag: page.slug === "manual-chatgpt-organization"
        ? "No extension"
        : page.slug === "chatgpt-projects"
          ? "Native feature"
          : "Extension",
    })),
  ];

  return (
    <main className="min-h-screen bg-[#0B1120] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="p-6 border-b border-white/5">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
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
      <section className="py-20 text-center px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
          <Scale className="w-3 h-3" />
          Compare
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400 max-w-3xl mx-auto">
          Compare the ways to organize ChatGPT
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Extensions, native features, or doing it by hand — honest, regularly
          verified comparisons so you can pick the right setup. Including where
          the alternatives beat us.
        </p>
      </section>

      {/* Cards */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col p-8 rounded-3xl border border-white/5 bg-slate-900/40 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all"
            >
              <span className="self-start text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 rounded-full px-3 py-1 mb-5">
                {card.tag}
              </span>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                AI Workspace Pro vs {card.name}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-cyan-400 font-semibold">
                Read the comparison
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-[#0B1120]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Or just try it yourself
          </h2>
          <p className="text-slate-400 mb-8">
            The core features are free forever, there is no account to create,
            and everything stays on your device. The fastest comparison is
            five minutes of real use.
          </p>
          <a
            href={installUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl px-10 py-5 text-lg font-bold text-white transition-all hover:scale-105 shadow-lg shadow-cyan-500/25 bg-gradient-to-r from-cyan-500 to-blue-600"
          >
            Add to Chrome – Free
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-6 text-sm text-slate-500">
            4.5★ on Chrome Web Store • Works with ChatGPT, Claude &amp; Grok
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
