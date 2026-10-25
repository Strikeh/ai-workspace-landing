import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import {
  ArrowRight,
  Tags,
  Sparkles,
  PencilLine,
  CheckCircle2,
  ListChecks,
  RefreshCw,
  Filter,
  Shield,
  Palette,
} from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";
const pageUrl = "https://getaiworkspace.com/chatgpt-ai-tags";

export const metadata: Metadata = {
  title: "AI Tags for ChatGPT: Auto-Tag Your Whole Chat History | AI Workspace",
  description:
    "Let AI tag your ChatGPT conversations by title in seconds. Generate a tag set, review it, apply it to hundreds of chats at once, and auto-tag new chats. Only titles are sent — never your conversations.",
  keywords: [
    "ChatGPT auto tag",
    "AI tags ChatGPT",
    "tag ChatGPT conversations",
    "organize ChatGPT history",
    "ChatGPT chat organizer",
    "auto categorize ChatGPT chats",
    "ChatGPT tags",
    "AI Workspace",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "AI Tags for ChatGPT: Auto-Tag Your Whole Chat History",
    description:
      "Generate tags from your chat titles, review them, and apply them to hundreds of ChatGPT chats at once. Then filter and find anything fast.",
    url: pageUrl,
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tags for ChatGPT: Auto-Tag Your Whole Chat History",
    description:
      "AI proposes tags from your chat titles; you review, then apply them to every chat in one click.",
  },
};

const faqs = [
  {
    q: "What are AI Tags?",
    a: "AI Tags organizes your ChatGPT history for you. Open your chat workspace, click AI Tags, and AI proposes a compact set of topic tags based on your chat titles — reusing the tags you already have. You review the list, rename, remove or add tags, then click Apply and every chat gets the tags that fit.",
  },
  {
    q: "Does AI read my conversations?",
    a: "No. Only chat titles are sent to our server to suggest and assign tags — never the content of your conversations. The tags themselves are stored locally in your browser, just like your folders, notes and bookmarks.",
  },
  {
    q: "Can I tag only some chats?",
    a: "Yes. Select chats and click AI Tags in the selection bar to tag just those, or use the AI Tags button in the toolbar to tag every chat in the current view (for example after filtering by project or GPT). By default only untagged chats are tagged, and existing tags are added to — never overwritten.",
  },
  {
    q: "What does 'Auto-tag new chats' do?",
    a: "Turn it on once and new chats get tags from your tag list automatically when you open your chat workspace. Chats that don't clearly fit any tag are left alone.",
  },
  {
    q: "Is AI Tags free?",
    a: "You can try it for free: the Free plan includes 3 tag generations and 50 AI-tagged chats per day, with up to 5 tags. Pro removes those limits (with a generous daily fair-use cap) so you can tag your whole chat history and use as many tags as you like.",
  },
  {
    q: "What if the AI picks the wrong tag?",
    a: "Tags are ordinary AI Workspace tags, so you can change them on any chat at any time. The AI only uses tags from the list you approved, gives each chat at most two, and skips chats whose title is too vague to tag.",
  },
  {
    q: "Which platforms are supported?",
    a: "AI Tags works with your ChatGPT conversations in the AI Workspace chat workspace. AI Workspace also supports Claude, Gemini and Grok across its other features.",
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
        { "@type": "ListItem", position: 3, name: "AI Tags", item: pageUrl },
      ],
    },
  ],
};

const mockTags = [
  { name: "History", color: "bg-emerald-500" },
  { name: "Philosophy", color: "bg-blue-500", isNew: true },
  { name: "Religion", color: "bg-amber-500", isNew: true },
  { name: "Science", color: "bg-violet-500", isNew: true },
  { name: "Programming", color: "bg-pink-500" },
  { name: "Mathematics", color: "bg-red-500", isNew: true },
];

const mockChats = [
  { title: "Roman Empire Collapse Reasons", tags: [["History", "text-emerald-300 bg-emerald-500/15"]] },
  {
    title: "Bhagavad Gita Summary",
    tags: [
      ["Religion", "text-amber-300 bg-amber-500/15"],
      ["Philosophy", "text-blue-300 bg-blue-500/15"],
    ],
  },
  { title: "Why is the sky blue", tags: [["Science", "text-violet-300 bg-violet-500/15"]] },
  { title: "Riemann Hypothesis Explained", tags: [["Mathematics", "text-red-300 bg-red-500/15"]] },
  { title: "Fix React useEffect loop", tags: [["Programming", "text-pink-300 bg-pink-500/15"]] },
  { title: "Kant categorical imperative", tags: [["Philosophy", "text-blue-300 bg-blue-500/15"]] },
];

export default function AiTagsPage() {
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
              <Sparkles className="w-3 h-3" />
              New
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
              Auto-tag your whole ChatGPT history with AI
            </h1>
            <p className="text-lg leading-8 text-slate-400 mb-8 max-w-2xl mx-auto">
              AI proposes tags from your chat titles. You review them, then apply
              them to hundreds of chats in one click — and filter your way to any
              conversation in seconds.
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
              4.5★ on Chrome Web Store · Try AI Tags free, unlimited on Pro
            </p>
          </div>

          {/* Hero visual — tag review + tagged chats mock */}
          <div className="relative mt-14 max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-3xl opacity-20" />
            <div className="relative grid md:grid-cols-5 gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-6">
              <div className="md:col-span-2 rounded-xl border border-white/10 bg-slate-950/60 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                  <Sparkles className="w-4 h-4 text-cyan-400" /> AI Tags
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                  Review tags
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {mockTags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs text-slate-200 ${
                        tag.isNew ? "border-cyan-500/50" : "border-white/10"
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${tag.color}`} />
                      {tag.name}
                      {tag.isNew && (
                        <span className="rounded-full bg-cyan-500 px-1.5 text-[9px] font-bold text-white">
                          new
                        </span>
                      )}
                    </span>
                  ))}
                </div>
                <span className="flex items-center justify-center gap-2 rounded-lg bg-cyan-500 py-2 text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4" /> Apply to 128 chats
                </span>
              </div>
              <div className="md:col-span-3 grid grid-cols-2 gap-3">
                {mockChats.map((chat) => (
                  <div
                    key={chat.title}
                    className="rounded-xl border border-white/10 bg-slate-950/60 p-3"
                  >
                    <p className="text-xs text-slate-200 m-0 mb-2 leading-snug">
                      {chat.title}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {chat.tags.map(([name, cls]) => (
                        <span
                          key={name}
                          className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium ${cls}`}
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick answer */}
          <div className="mt-16 p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 max-w-4xl">
            <h2 className="text-sm font-bold text-cyan-400 mb-2 uppercase tracking-wide">
              Quick Answer
            </h2>
            <p className="text-slate-200 leading-relaxed m-0">
              AI Tags is an AI Workspace feature that tags your ChatGPT
              conversations automatically. Open your chat workspace, click AI
              Tags, and AI suggests a set of topic tags based on your chat titles.
              Review and edit the list, click Apply, and every chat gets the tags
              that fit — so you can filter your history by topic instantly. Only
              titles are sent, never your conversations.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            How AI Tags works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Click Generate",
                body: "Open your chat workspace and click AI Tags. AI reads your chat titles and proposes a compact set of topic tags, reusing the ones you already have.",
              },
              {
                step: "2",
                title: "Review the tags",
                body: "Rename suggestions, remove the ones you don't want, or add your own. Nothing is saved until you apply.",
              },
              {
                step: "3",
                title: "Click Apply",
                body: "Every chat in view — or just your selection — gets the tags that fit, with a progress bar while it runs.",
              },
              {
                step: "4",
                title: "Filter & find",
                body: "Use the Tags filter to see every chat about a topic. Turn on auto-tagging and new chats stay organized too.",
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
            Hundreds of chats organized in seconds
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Tags from your own history",
                body: "Suggestions come from what you actually talk about, and reuse the tags you already created instead of inventing duplicates.",
              },
              {
                icon: PencilLine,
                title: "You stay in control",
                body: "Review every suggestion before it touches a chat. The AI only uses tags from the list you approve.",
              },
              {
                icon: ListChecks,
                title: "Your selection or everything",
                body: "Tag a handful of selected chats, or every chat in the current view. Only untagged chats by default.",
              },
              {
                icon: RefreshCw,
                title: "Auto-tag new chats",
                body: "Switch it on once and new conversations get tags from your list when you open your workspace.",
              },
              {
                icon: Palette,
                title: "Color-coded automatically",
                body: "New tags get their own colors, so topics stand out on every chat card at a glance.",
              },
              {
                icon: Filter,
                title: "Find anything fast",
                body: "Combine tags with the Project and GPT filters and search to jump straight to the conversation you need.",
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
              After a few months of ChatGPT you have hundreds of conversations,
              and the sidebar only sorts them by date. Tagging them by hand is
              the kind of chore nobody gets around to — so that great answer
              from March stays buried.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed m-0">
              With AI Tags you click Generate, glance over the suggested tags,
              and click Apply. A minute later your history is grouped by topic,
              and you can combine tags with{" "}
              <Link
                href="/organization"
                className="text-cyan-400 hover:text-cyan-300"
              >
                folders and filters
              </Link>{" "}
              or keep everything separate per{" "}
              <Link
                href="/chatgpt-workspaces"
                className="text-cyan-400 hover:text-cyan-300"
              >
                workspace
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">
            Only titles, never conversations
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto m-0">
            To suggest and assign tags, only your chat titles are sent securely
            to our server, which calls the AI model and returns tag names. Your
            conversation content never leaves ChatGPT, and the tags are stored
            locally in your browser.
          </p>
        </div>
      </section>

      {/* Free vs Pro */}
      <section className="py-16 bg-slate-900/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Free to try, unlimited on Pro
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/50">
              <h3 className="text-lg font-semibold text-white mb-3">Free</h3>
              <ul className="space-y-2 text-slate-400 text-sm m-0 p-0 list-none">
                <li>3 tag generations per day</li>
                <li>50 AI-tagged chats per day</li>
                <li>Up to 5 tags</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-cyan-500/30 bg-cyan-500/5">
              <h3 className="text-lg font-semibold text-white mb-3">Pro</h3>
              <ul className="space-y-2 text-slate-300 text-sm m-0 p-0 list-none">
                <li>Tag your whole chat history</li>
                <li>Unlimited tags</li>
                <li>Generous daily fair-use cap</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            AI Tags FAQ
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
              { href: "/organization", label: "Feature: Folders & Organization" },
              { href: "/chatgpt-workspaces", label: "Feature: Workspaces" },
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
          <Tags className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-white">
            Stop scrolling. Start finding.
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
            Free to install · Try AI Tags free, unlimited on Pro
          </p>
        </div>
      </section>

      <Footer />
      <ImageLightbox />
    </main>
  );
}
