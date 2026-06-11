import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { guides } from "@/data/guides";
import { Footer } from "@/components/Footer";
import { ArrowRight, BookOpen } from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";

export const metadata: Metadata = {
  title: "ChatGPT How-To Guides | AI Workspace",
  description:
    "Step-by-step guides for organizing ChatGPT conversations, saving prompts, bulk deleting chats, exporting conversations, and working with Claude & Grok.",
  alternates: { canonical: "https://getaiworkspace.com/guides" },
  openGraph: {
    title: "ChatGPT How-To Guides | AI Workspace",
    description:
      "Step-by-step guides for organizing ChatGPT conversations, saving prompts, bulk deleting chats, and more.",
    url: "https://getaiworkspace.com/guides",
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
};

export default function GuidesPage() {
  const categories = [...new Set(guides.map((g) => g.category))];

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
          <BookOpen className="w-3 h-3" />
          Guides
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400 max-w-3xl mx-auto">
          ChatGPT How-To Guides
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Practical, step-by-step answers to the most common ChatGPT, Claude
          and Grok workflow problems — organizing conversations, saving
          prompts, cleaning up your sidebar, and more.
        </p>
      </section>

      {/* Guides by category */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-6xl space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-white mb-6">
                {category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides
                  .filter((g) => g.category === category)
                  .map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      className="group flex flex-col p-6 rounded-2xl border border-white/5 bg-slate-900/40 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all"
                    >
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{guide.readTime}</span>
                        <span className="inline-flex items-center gap-1 text-cyan-400 font-semibold">
                          Read guide
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-[#0B1120]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Skip the workarounds
          </h2>
          <p className="text-slate-400 mb-8">
            Most of these guides come down to one step: install AI Workspace
            and get workspaces, folders, prompts, and search built into
            ChatGPT, Claude &amp; Grok.
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
            Free forever • No account required • 100% local-first
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
