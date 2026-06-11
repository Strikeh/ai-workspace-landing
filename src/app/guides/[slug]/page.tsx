import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "@/data/guides";
import { Footer } from "@/components/Footer";
import { ArrowRight, ArrowLeft, BookOpen, CheckCircle2, Clock } from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  const url = `https://getaiworkspace.com/guides/${guide.slug}`;
  return {
    title: `${guide.title} | AI Workspace`,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url,
      siteName: "AI Workspace",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const related = guides.filter((g) => guide.relatedGuides.includes(g.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: guide.title,
        description: guide.quickAnswer,
        step: guide.steps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: step.title,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://getaiworkspace.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Guides",
            item: "https://getaiworkspace.com/guides",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: guide.title,
            item: `https://getaiworkspace.com/guides/${guide.slug}`,
          },
        ],
      },
    ],
  };

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

      <article className="mx-auto max-w-4xl px-6 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-cyan-400 transition-colors">
            Guides
          </Link>
          <span>/</span>
          <span className="text-slate-400">{guide.category}</span>
        </div>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
            {guide.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-400" />
              {guide.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              {guide.category}
            </span>
            <span className="text-slate-500">Updated {guide.updated}</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="mb-12 p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
          <h2 className="text-lg font-bold text-cyan-400 mb-2 uppercase tracking-wide">
            Quick Answer
          </h2>
          <p className="text-slate-200 text-lg leading-relaxed m-0">
            {guide.quickAnswer}
          </p>
        </div>

        {/* Hero image */}
        {guide.heroImage && (
          <div className="mb-12 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={guide.heroImage}
              alt={guide.heroImageAlt ?? guide.title}
              width={1200}
              height={630}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Intro */}
        <div
          className="text-lg leading-relaxed mb-12"
          dangerouslySetInnerHTML={{ __html: guide.intro }}
        />

        {/* Native-first section */}
        {guide.nativeFirst && (
          <section className="mb-12 p-6 rounded-2xl border border-white/10 bg-slate-900/50">
            <h2 className="text-2xl font-bold text-white mb-4">
              What you can do without an extension
            </h2>
            <div dangerouslySetInnerHTML={{ __html: guide.nativeFirst }} />
          </section>
        )}

        {/* Steps */}
        <section className="space-y-10 mb-16">
          {guide.steps.map((step, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-start gap-3">
                <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg font-bold">
                  {i + 1}
                </span>
                {step.title}
              </h2>
              <div
                className="pl-12"
                dangerouslySetInnerHTML={{ __html: step.body }}
              />
            </div>
          ))}
        </section>

        {/* Mid CTA */}
        <div className="mb-16 p-8 rounded-2xl border border-cyan-500/20 bg-slate-900/60 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to fix this for good?
          </h2>
          <p className="text-slate-400 mb-6">
            AI Workspace works inside ChatGPT, Claude &amp; Grok. Free to
            install, no account required, 100% local-first.
          </p>
          <a
            href={installUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 shadow-lg shadow-cyan-500/25 bg-gradient-to-r from-cyan-500 to-blue-600"
          >
            Add to Chrome – Free
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-xs text-slate-500">
            4.5★ on Chrome Web Store • Free forever core features
          </p>
        </div>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {guide.faqs.map((faq, i) => (
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
        </section>

        {/* Related feature */}
        <section className="mb-16">
          <Link
            href={guide.relatedFeature.href}
            className="group flex items-center justify-between p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 hover:border-cyan-500/40 transition-all"
          >
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="text-sm text-slate-500 m-0">Related feature</p>
                <p className="text-lg font-bold text-white m-0 group-hover:text-cyan-400 transition-colors">
                  {guide.relatedFeature.label}
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        {/* Related guides */}
        {related.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Related guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/guides/${r.slug}`}
                  className="group p-5 rounded-2xl border border-white/5 bg-slate-900/40 hover:border-cyan-500/30 transition-all"
                >
                  <p className="text-xs text-cyan-400 uppercase tracking-wide font-bold mb-2 m-0">
                    {r.category}
                  </p>
                  <p className="text-white font-semibold m-0 group-hover:text-cyan-400 transition-colors">
                    {r.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <Link
          href="/guides"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All guides
        </Link>
      </article>

      <Footer />
    </main>
  );
}
