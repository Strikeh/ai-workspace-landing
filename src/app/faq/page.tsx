import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ArrowRight, HelpCircle } from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";
const pageUrl = "https://getaiworkspace.com/faq";

export const metadata: Metadata = {
  title: "FAQ – AI Workspace for ChatGPT, Claude & Grok | AI Workspace",
  description:
    "Every question about AI Workspace answered: installation, features, pricing, privacy, comparisons with other extensions, and troubleshooting.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "AI Workspace FAQ",
    description:
      "Every question about AI Workspace answered: installation, features, pricing, privacy, comparisons, and troubleshooting.",
    url: pageUrl,
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
};

interface FaqCategory {
  name: string;
  items: { q: string; a: string }[];
}

const faqCategories: FaqCategory[] = [
  {
    name: "Getting Started",
    items: [
      {
        q: "What is AI Workspace?",
        a: "AI Workspace is a browser extension that adds workspaces, folders, a prompt library, navigation tools, and privacy features to ChatGPT, Claude, and Grok. It works directly inside the AI's website — no separate app, no account, and all data stays local in your browser.",
      },
      {
        q: "Is AI Workspace free?",
        a: "Yes. The core features are free forever: custom workspaces, basic prompt management, folders, and local history. Pro ($9.99/month billed annually, or $11.99/month billed monthly) adds unlimited prompts, vaults and notes, encrypted storage, the full Image Gallery, Smart Conversation Outline, unlimited folders and categories, pinned messages, and multi-platform support.",
      },
      {
        q: "Do I need a ChatGPT Plus subscription?",
        a: "No. AI Workspace works with free and paid ChatGPT accounts alike. It also works with Claude and Grok, free or paid.",
      },
      {
        q: "How do I install AI Workspace?",
        a: "Install it from the Chrome Web Store with one click — no account or signup needed. After installing, open ChatGPT and the AI Workspace sidebar appears automatically.",
      },
      {
        q: "Which browsers are supported?",
        a: "Chrome (and Chromium-based browsers), Microsoft Edge via the Edge Add-ons store, and Firefox via Firefox Add-ons.",
      },
      {
        q: "Does AI Workspace work on mobile?",
        a: "Browser extensions are a desktop technology, so AI Workspace runs on desktop browsers. Your underlying ChatGPT conversations are unaffected and remain available on mobile through the ChatGPT app.",
      },
      {
        q: "Does it slow ChatGPT down?",
        a: "No — it usually makes ChatGPT faster. Smart Thread Trimming hides old messages from the page (without deleting them), which delivers around 73% memory reduction and 80% faster scrolling in long conversations.",
      },
      {
        q: "Does AI Workspace work with Custom GPTs?",
        a: "Yes. Conversations with Custom GPTs can even be auto-organized into folders and linked to your active workspace.",
      },
    ],
  },
  {
    name: "Features",
    items: [
      {
        q: "What is a workspace?",
        a: "A workspace is an isolated environment with its own folders, conversations, prompts, and notes. Switching workspaces switches your entire context — ideal for separating clients, projects, and personal use. See the ChatGPT Workspaces page for details.",
      },
      {
        q: "How do folders work?",
        a: "You can create unlimited nested folders with drag-and-drop reordering, color coding, and custom icons. Conversations can also get multiple colored tags for cross-cutting organization.",
      },
      {
        q: "What is the Smart Conversation Outline?",
        a: "A floating sidebar that shows every message in your conversation, letting you jump to any point with one click. It includes a visual progress bar, smart filtering (only your questions or only AI responses), instant search, and a Cmd/Ctrl + . keyboard shortcut.",
      },
      {
        q: "What is Tangent View?",
        a: "Tangent View visualizes branched conversations (created by edits and regenerations) as an interactive graph with hover previews and path tracing. Open it with Ctrl/Cmd+Shift+Y.",
      },
      {
        q: "How does the prompt library work?",
        a: "Save prompts with tags, folders, and favorites, then insert them by typing / in the chat input. Prompts support {{variables}} that you fill in on insertion, and the library can be exported to JSON or CSV.",
      },
      {
        q: "Can I highlight text in conversations?",
        a: "Yes — select any text and highlight it in one of 7 colors. Highlights persist across reloads and work on ChatGPT, Claude, and Grok. The shortcut is Ctrl/Cmd + Shift + H.",
      },
      {
        q: "What is the Image Gallery?",
        a: "A single view of every image across all your conversations — both uploads and AI generations — including the original prompts. You can search, tag, and bulk-download everything.",
      },
      {
        q: "Can I export conversations?",
        a: "Yes, in four formats: JSON, plain text, Markdown, and PDF. Unlike ChatGPT's native account-wide export, you can export exactly the conversation you need.",
      },
      {
        q: "Can I add notes to conversations?",
        a: "Yes. Any conversation can carry notes for context, decisions, or follow-ups — stored locally with the rest of your data.",
      },
      {
        q: "Can I delete or archive many chats at once?",
        a: "Yes. Bulk operations let you select multiple conversations and delete, archive, or categorize them in one action. Auto-delete rules can clean up old chats automatically.",
      },
    ],
  },
  {
    name: "Privacy & Data",
    items: [
      {
        q: "Where is my data stored?",
        a: "100% locally in your browser. AI Workspace is local-first by design: no cloud sync, no external servers, no account. Nothing leaves your device unless you manually export it.",
      },
      {
        q: "Are my chats sent to AI Workspace servers?",
        a: "No. We have zero access to your chats. Unlike some other extensions that sync data to their servers, AI Workspace keeps everything on your device and sends no telemetry.",
      },
      {
        q: "What is an encrypted vault?",
        a: "A vault protects a workspace with AES-256 encryption — the same standard used by password managers. It's built for consultants, agencies, and anyone handling sensitive client data. Free includes 1 vault; Pro includes unlimited vaults.",
      },
      {
        q: "Can the extension read my conversations?",
        a: "Any extension that enhances ChatGPT needs permission to read the page — that's how folders and highlights work. What matters is what happens next: AI Workspace processes everything locally and transmits nothing. The code sends no conversation data anywhere.",
      },
      {
        q: "What happens to my data if I uninstall?",
        a: "Locally stored extension data is removed with the extension, so export anything you want to keep first. Your actual ChatGPT conversations are untouched — they live in your OpenAI account.",
      },
      {
        q: "Is AI Workspace GDPR compliant?",
        a: "Yes. Since no personal data is collected or processed on external servers, compliance is straightforward: your data simply never leaves your browser.",
      },
    ],
  },
  {
    name: "Comparisons",
    items: [
      {
        q: "How is AI Workspace different from Superpower ChatGPT?",
        a: "The main differences are isolated workspaces (Superpower uses a single workspace), local-first storage vs cloud sync, AES-256 encrypted vaults, and multi-platform support for Claude and Grok. See our full comparison at /superpower-chatgpt-alternative.",
      },
      {
        q: "How is AI Workspace different from GPT Master?",
        a: "GPT Master is a focused ChatGPT-only organizer with folders, bookmarks, and a minimap. AI Workspace adds isolated workspaces, Claude & Grok support, encrypted vaults, an image gallery, highlighting, and performance trimming. Both are local-first. See /compare/gpt-master for an honest side-by-side.",
      },
      {
        q: "Do I still need this if I use ChatGPT Projects?",
        a: "They solve different problems and work well together. Projects groups chats with shared files and instructions inside ChatGPT; AI Workspace gives you isolation, folders, tags, search, and prompts across your entire AI workflow — including Claude and Grok. See /compare/chatgpt-projects.",
      },
      {
        q: "Can I use AI Workspace alongside other extensions?",
        a: "Generally yes. Extensions that heavily modify the same ChatGPT interface elements can occasionally conflict; if you see layout issues, try disabling other ChatGPT extensions first. AI Workspace replaces most single-purpose tools (folders, prompts, export, highlighting) anyway.",
      },
      {
        q: "What is the best ChatGPT folder extension?",
        a: "It depends on what you need. If you want simple folders only, several lightweight options work. If you manage multiple clients or projects, need privacy guarantees, or use Claude and Grok too, AI Workspace's combination of workspaces, encryption, and multi-platform support is unique in the category.",
      },
    ],
  },
  {
    name: "Pricing & Support",
    items: [
      {
        q: "What's the difference between Free and Pro?",
        a: "Free includes limited prompts and notes, 1 vault, and no encryption. Pro ($9.99/month billed annually or $11.99/month billed monthly) offers unlimited prompts, vaults, and notes, encrypted storage, full Image Gallery, Smart Conversation Outline, unlimited folders & categories, pinned messages, and multi-platform support.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. You can cancel your Pro subscription at any time via the Stripe customer portal, and you keep Pro features until the end of your billing period.",
      },
      {
        q: "How do I request a feature or report a bug?",
        a: "Join our Discord community to talk directly with the developers, or email support@getaiworkspace.com. Feature requests from users drive our roadmap.",
      },
      {
        q: "My sidebar isn't showing — what should I do?",
        a: "First refresh the ChatGPT tab. If that doesn't help, check that the extension is enabled in your browser's extension settings, and disable other ChatGPT extensions to rule out conflicts. Still stuck? Email support@getaiworkspace.com — include your browser version.",
      },
      {
        q: "Who builds AI Workspace?",
        a: "AI Workspace is built by Christophe, an independent developer, with features shaped directly by user feedback on Discord. You can read verified user reviews on the Chrome Web Store.",
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: faqCategories.flatMap((cat) =>
        cat.items.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        }))
      ),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getaiworkspace.com" },
        { "@type": "ListItem", position: 2, name: "FAQ", item: pageUrl },
      ],
    },
  ],
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <nav className="p-6 border-b border-white/5">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
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
      <section className="py-16 text-center px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
          <HelpCircle className="w-3 h-3" />
          FAQ
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400 max-w-3xl mx-auto">
          Frequently asked questions
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          Everything about installing and using AI Workspace for ChatGPT,
          Claude &amp; Grok — features, pricing, privacy, and troubleshooting.
        </p>
        {/* Category jump links */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {faqCategories.map((cat) => (
            <a
              key={cat.name}
              href={`#${cat.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className="px-4 py-2 rounded-full border border-white/10 bg-slate-900/60 text-sm text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ sections — fully expanded for crawlability */}
      <div className="mx-auto max-w-4xl px-6 pb-24 space-y-16">
        {faqCategories.map((cat) => (
          <section
            key={cat.name}
            id={cat.name.toLowerCase().replace(/[^a-z]+/g, "-")}
          >
            <h2 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-white/10">
              {cat.name}
            </h2>
            <div className="space-y-8">
              {cat.items.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-400 leading-relaxed m-0">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-[#0B1120]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Still have a question?
          </h2>
          <p className="text-slate-400 mb-8">
            Join our Discord and ask the developers directly, or just try the
            extension — it&apos;s free and takes seconds to install.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={installUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 shadow-lg shadow-cyan-500/25 bg-gradient-to-r from-cyan-500 to-blue-600"
            >
              Add to Chrome – Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://discord.gg/adx5DTrQEp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl px-8 py-4 text-lg font-bold text-slate-300 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
