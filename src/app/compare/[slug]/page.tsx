import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { comparePages } from "@/data/compare-pages";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Scale,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";

const installUrl =
  "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";

export function generateStaticParams() {
  return comparePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = comparePages.find((p) => p.slug === slug);
  if (!page) return {};
  const url = `https://getaiworkspace.com/compare/${page.slug}`;
  return {
    title: `${page.title} | AI Workspace`,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "AI Workspace",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = comparePages.find((p) => p.slug === slug);
  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
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
            name: "Compare",
            item: "https://getaiworkspace.com/compare",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.title,
            item: `https://getaiworkspace.com/compare/${page.slug}`,
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
          <Link href="/compare" className="hover:text-cyan-400 transition-colors">
            Compare
          </Link>
          <span>/</span>
          <span className="text-slate-400">{page.competitorName}</span>
        </div>

        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Scale className="w-3 h-3" />
            Honest Comparison
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
            {page.title}
          </h1>
          <p className="text-sm text-slate-500">
            Published {page.published} • Updated {page.updated} • Facts last
            verified {page.verified}
          </p>
        </header>

        {/* Quick Answer */}
        <div className="mb-12 p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
          <h2 className="text-lg font-bold text-cyan-400 mb-2 uppercase tracking-wide">
            Quick Answer
          </h2>
          <p className="text-slate-200 text-lg leading-relaxed m-0">
            {page.quickAnswer}
          </p>
        </div>

        {/* Intro */}
        <div
          className="text-lg leading-relaxed mb-12"
          dangerouslySetInnerHTML={{ __html: page.intro }}
        />

        {/* Comparison table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Feature comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900/80 text-left">
                  <th className="p-4 font-semibold text-slate-300">Feature</th>
                  <th className="p-4 font-semibold text-cyan-400">
                    AI Workspace Pro
                  </th>
                  <th className="p-4 font-semibold text-slate-300">
                    {page.competitorName}
                  </th>
                </tr>
              </thead>
              <tbody>
                {page.tableRows.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      i % 2 === 0 ? "bg-slate-900/30" : "bg-slate-900/60"
                    }
                  >
                    <td className="p-4 font-medium text-white">
                      {row.feature}
                    </td>
                    <td className="p-4 text-slate-300">{row.us}</td>
                    <td className="p-4 text-slate-400">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Their strengths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Where {page.competitorName} is stronger
          </h2>
          <div className="space-y-6">
            {page.theirStrengths.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/5 bg-slate-900/40"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  {item.title}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </section>

        {/* Our strengths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Where AI Workspace Pro is stronger
          </h2>
          <div className="space-y-6">
            {page.ourStrengths.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-cyan-500/20 bg-slate-900/40"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  {item.title}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Which one should you choose?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/40">
              <h3 className="text-lg font-bold text-slate-300 mb-4">
                Choose {page.competitorName} if…
              </h3>
              <ul className="space-y-3">
                {page.verdict.chooseThem.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-slate-400 text-sm"
                  >
                    <Check className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/5">
              <h3 className="text-lg font-bold text-cyan-400 mb-4">
                Choose AI Workspace Pro if…
              </h3>
              <ul className="space-y-3">
                {page.verdict.chooseUs.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-slate-300 text-sm"
                  >
                    <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {page.faqs.map((faq, i) => (
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

        {/* Bottom line */}
        <section className="mb-16 p-8 rounded-2xl border border-cyan-500/20 bg-slate-900/60">
          <h2 className="text-2xl font-bold text-white mb-4">Bottom line</h2>
          <div dangerouslySetInnerHTML={{ __html: page.bottomLine }} />
          <div className="mt-6">
            <a
              href={installUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 shadow-lg shadow-cyan-500/25 bg-gradient-to-r from-cyan-500 to-blue-600"
            >
              Try AI Workspace Pro – Free
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        <Link
          href="/compare"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All comparisons
        </Link>
      </article>

      <Footer />
    </main>
  );
}
