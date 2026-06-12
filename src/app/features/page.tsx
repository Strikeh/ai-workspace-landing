import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  Layers,
  FolderTree,
  Library,
  Highlighter,
  Palette,
  Zap,
  GitBranch,
  Images,
  Map,
  MessageSquare,
  StickyNote,
  Download,
  Search,
  Tags,
  Pin,
  Bell,
  Lock,
  Sparkles,
} from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";

export const metadata: Metadata = {
  title: "Features – Everything ChatGPT Should Have Built In | AI Workspace",
  description:
    "Explore all AI Workspace features: isolated workspaces, folders, prompt library, conversation outline, image gallery, highlighting, branching graph and more.",
  alternates: { canonical: "https://getaiworkspace.com/features" },
  openGraph: {
    title: "AI Workspace Features – Everything ChatGPT Should Have Built In",
    description:
      "Isolated workspaces, folders, prompt library, conversation outline, image gallery, highlighting, branching graph and more — for ChatGPT, Claude & Grok.",
    url: "https://getaiworkspace.com/features",
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
};

const mainFeatures = [
  {
    href: "/chatgpt-workspaces",
    icon: Layers,
    title: "Isolated Workspaces",
    description:
      "Unlimited separate workspaces with complete context isolation between clients, projects, and personal chats. Our core differentiator.",
    badge: "Differentiator",
  },
  {
    href: "/organization",
    icon: FolderTree,
    title: "Folders & Organization",
    description:
      "Unlimited nested folders with drag & drop, color-coded categories, multi-tag system, pins, and bulk operations.",
  },
  {
    href: "/prompt-library",
    icon: Library,
    title: "Prompt Library",
    description:
      "Save prompts with tags and folders, insert them instantly with the / shortcut, and use {{variables}} for dynamic templates.",
  },
  {
    href: "/chatgpt-minimap",
    icon: Map,
    title: "Smart Conversation Outline",
    description:
      "A minimap for your AI chats: jump to any message in long conversations with an interactive sidebar table of contents.",
  },
  {
    href: "/chatgpt-side-chat",
    icon: MessageSquare,
    title: "Side Chat",
    description:
      "Select any passage and ask a follow-up in a side panel — with context, streamed answers, and your main thread left untouched.",
    badge: "New",
  },
  {
    href: "/chatgpt-conversation-branching",
    icon: GitBranch,
    title: "Tangent View",
    description:
      "Visualize branched ChatGPT conversations as an interactive graph. See every edit and regeneration path at a glance.",
    badge: "New",
  },
  {
    href: "/chatgpt-image-gallery",
    icon: Images,
    title: "Image Gallery",
    description:
      "Browse every image you uploaded or generated across all conversations, with original prompts and bulk download.",
  },
  {
    href: "/chatgpt-text-highlighter",
    icon: Highlighter,
    title: "Text Highlighting",
    description:
      "Mark important parts of any conversation with 7 colors. Highlights persist across reloads and sync to your notes.",
  },
  {
    href: "/fix-chatgpt-lag",
    icon: Zap,
    title: "Smart Thread Trimming",
    description:
      "Fix ChatGPT lag in long conversations: 73% memory reduction and 80% faster scrolling without deleting anything.",
  },
  {
    href: "/chatgpt-themes",
    icon: Palette,
    title: "Themes (GPTheme)",
    description:
      "Premium themes, custom colors, and layout adjustments to make ChatGPT look the way you want.",
  },
];

const moreFeatures = [
  { icon: Search, label: "Full-text search across all conversations" },
  { icon: Tags, label: "Multi-tag system with custom colors" },
  { icon: Pin, label: "Pin important chats and prompts" },
  { icon: StickyNote, label: "Notes on any conversation" },
  { icon: Download, label: "Export to JSON, TXT, Markdown & PDF" },
  { icon: Bell, label: "Audio notifications for AI responses" },
  { icon: Lock, label: "AES-256 encrypted vaults" },
  { icon: Sparkles, label: "Auto-organize Custom GPT conversations" },
];

export default function FeaturesPage() {
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
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400 max-w-4xl mx-auto">
          Everything ChatGPT should have built in
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          One extension adds workspaces, folders, prompts, navigation, and
          privacy tools to ChatGPT, Claude &amp; Grok — 100% local-first, no
          account required.
        </p>
      </section>

      {/* Main feature cards */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainFeatures.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group relative flex flex-col p-8 rounded-3xl border border-white/5 bg-slate-900/40 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all"
            >
              {feature.badge && (
                <span className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 rounded-full px-2.5 py-1">
                  {feature.badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                {feature.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-cyan-400 font-semibold">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* More features */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            And there&apos;s more
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {moreFeatures.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/5"
              >
                <item.icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <p className="text-sm text-slate-300 font-medium m-0">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-[#0B1120]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            One install. Every feature.
          </h2>
          <p className="text-slate-400 mb-8">
            Stop stacking single-purpose extensions. AI Workspace replaces a
            folder extension, a prompt manager, an exporter, and a highlighter
            — and keeps everything on your device.
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
            Free forever • No account required • Works with ChatGPT, Claude
            &amp; Grok
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
