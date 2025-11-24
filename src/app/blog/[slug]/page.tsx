import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | AI Workspace Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-slate-100 font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="site-nav relative z-50">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/logo-dark.svg"
                  alt="AI Workspace Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span
                  className="text-xl font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  AI Workspace
                </span>
              </Link>
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <Link href="/blog" className="nav-link text-cyan-400">
                ← Back to Blog
              </Link>
              <a
                href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
              >
                Get started free
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative pt-24 pb-32">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[-10%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 rounded-full opacity-10 blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            }}
          />
        </div>

        <article className="relative z-10 mx-auto max-w-3xl px-6">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="mb-6 flex items-center justify-center gap-3 text-sm text-slate-400">
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                {post.category}
              </span>
              <span>•</span>
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight mb-8 text-slate-100">
              {post.title}
            </h1>
            {post.image && (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none 
            prose-headings:font-bold prose-headings:text-slate-100
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-cyan-400
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-white
            prose-p:text-slate-300 prose-p:leading-relaxed
            prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline 
            prose-strong:text-white prose-strong:font-bold
            prose-ul:my-6 prose-li:my-2 prose-li:marker:text-cyan-500
            prose-code:text-cyan-300 prose-code:bg-slate-800/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:bg-slate-800/30 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-slate-200"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 to-slate-900/50 p-8 text-center backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to upgrade your workflow?
            </h3>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
              Join thousands of power users who trust AI Workspace to organize
              their prompts and conversations securely.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Install for Free
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
