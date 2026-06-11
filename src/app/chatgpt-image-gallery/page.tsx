import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  Images,
  Download,
  Search,
  Shield,
  Sparkles,
} from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";
const pageUrl = "https://getaiworkspace.com/chatgpt-image-gallery";

export const metadata: Metadata = {
  title: "ChatGPT Image Gallery: All Your Images in One Place | AI Workspace",
  description:
    "Browse every image you uploaded or generated in ChatGPT — across all conversations — with original prompts, search, tags, and bulk download.",
  keywords: [
    "ChatGPT image gallery",
    "find images in ChatGPT",
    "download ChatGPT images",
    "ChatGPT image history",
    "DALL-E image history",
    "bulk download ChatGPT images",
    "AI Workspace",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "ChatGPT Image Gallery: All Your Images in One Place",
    description:
      "Browse every image you uploaded or generated in ChatGPT with original prompts, search, tags, and bulk download.",
    url: pageUrl,
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Image Gallery: All Your Images in One Place",
    description:
      "Browse every image you uploaded or generated in ChatGPT with original prompts, search, tags, and bulk download.",
  },
};

const faqs = [
  {
    q: "Where do my ChatGPT images go?",
    a: "They stay inside the conversation where they were created or uploaded. ChatGPT has no native gallery — to find an old image you have to remember which chat it was in and scroll. AI Workspace adds a gallery that collects every image from every conversation in one browsable view.",
  },
  {
    q: "Does the gallery include DALL-E / generated images?",
    a: "Yes. The gallery retrieves both images you uploaded and images ChatGPT generated for you, and it keeps the original prompt used to generate each image.",
  },
  {
    q: "Can I download all my ChatGPT images at once?",
    a: "Yes. Bulk download saves all images from your conversations in one action, including text files with the original prompts, so your visual work is backed up and reusable.",
  },
  {
    q: "Is my image data uploaded anywhere?",
    a: "No. Like everything in AI Workspace, the gallery runs locally in your browser. No images or prompts are sent to external servers, and no account is required.",
  },
  {
    q: "Is the image gallery free?",
    a: "The core gallery is included free. The full Image Gallery experience is part of Pro ($9.99/month billed annually), alongside unlimited prompts, notes, vaults, and encrypted storage.",
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
        { "@type": "ListItem", position: 3, name: "Image Gallery", item: pageUrl },
      ],
    },
  ],
};

export default function ImageGalleryPage() {
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
              <Images className="w-3 h-3" />
              Media Management
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
              ChatGPT Image Gallery: every image, one place
            </h1>
            <p className="text-lg leading-8 text-slate-400 mb-8 max-w-2xl mx-auto">
              Stop scrolling through old chats to find that one image. Browse
              your complete upload and generation history — with the original
              prompts — and download everything in bulk.
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
                ChatGPT has no built-in image gallery — images live inside
                individual conversations and finding them again means
                scrolling. The AI Workspace Image Gallery collects every
                uploaded and generated image from all your conversations into
                one searchable view, keeps the original generation prompts,
                and lets you download everything in bulk. All locally in your
                browser.
              </p>
            </div>

            {/* Hero Visual */}
            <div className="mt-12 relative rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl overflow-hidden">
              <Image
                src="/images/blog/image-gallery-hero.png"
                alt="AI Workspace image gallery showing all ChatGPT images in one grid"
                width={1280}
                height={720}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What the gallery gives you
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Images,
                title: "Complete history",
                body: "Every image from every conversation — uploads and AI generations — in one chronological, browsable grid.",
              },
              {
                icon: Sparkles,
                title: "Original prompts included",
                body: "Each generated image keeps the prompt that created it. Recreate, iterate, or reuse your best prompts instantly.",
              },
              {
                icon: Download,
                title: "Bulk download",
                body: "Save all images at once, with prompt text files included — perfect for backups and creative workflows.",
              },
              {
                icon: Search,
                title: "Search & tags",
                body: "Find images by searching prompts or adding your own tags. No more scrolling through months of chats.",
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

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/blog/image-gallery-search.png"
                alt="Searching ChatGPT images by prompt in the gallery"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/blog/image-gallery-batch.png"
                alt="Bulk downloading ChatGPT images with prompts"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
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
              A content creator generates dozens of images a week for thumbnails
              and social posts. Three weeks later a client asks for &quot;that
              blue gradient version from the first draft.&quot; Natively, that
              means opening chat after chat and scrolling.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed m-0">
              With the gallery she searches the prompt, finds all variations
              side by side, downloads the set in one click — prompts included —
              and drops the exact wording back into a new generation. Paired
              with{" "}
              <Link
                href="/prompt-library"
                className="text-cyan-400 hover:text-cyan-300"
              >
                the prompt library
              </Link>
              , her best image prompts become reusable templates.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy strip */}
      <section className="py-16 bg-slate-900/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">
            Your images never leave your browser
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto m-0">
            The gallery is built local-first: images and prompts are indexed in
            your browser, nothing is uploaded, and there is no account. Zero
            telemetry, GDPR compliant.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Image gallery FAQ
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
                href: "/blog/chatgpt-image-gallery-complete-history-uploaded-generated-images",
                label: "Blog: Image Gallery deep dive",
              },
              {
                href: "/features",
                label: "All features",
              },
              {
                href: "/guides/how-to-export-chatgpt-conversations",
                label: "Guide: Export ChatGPT conversations",
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
          <Images className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-white">
            Find every image you ever made
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
