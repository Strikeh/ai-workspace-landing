import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | AI Workspace",
  description: "Latest updates, guides, and productivity tips for ChatGPT, Claude, and AI Workspace.",
};

export default function BlogIndex() {
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
              <Link href="/#features" className="nav-link">
                Features
              </Link>
              <Link href="/#showcase" className="nav-link">
                Showcase
              </Link>
              <Link href="/#pricing" className="nav-link">
                Pricing
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
            className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span
                style={{
                  background: "var(--premium-title-gradient)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Blog & Updates
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Tips, tutorials, and insights to help you master your AI workflow and get the most out of ChatGPT.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-400 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-3 text-xs text-slate-500">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mb-3 text-xl font-bold text-slate-100 transition-colors group-hover:text-cyan-400">
                    {post.title}
                  </h2>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-cyan-400">
                    Read article
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} AI Workspace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
