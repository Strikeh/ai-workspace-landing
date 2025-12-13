"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { blogPosts } from "@/data/blog-posts";

// Category badge colors
const categoryStyles: Record<
  string,
  { bg: string; border: string; text: string }
> = {
  Tutorial: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
  },
  Productivity: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
  },
  "Industry News": {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
  },
  Updates: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
  },
  Tips: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    text: "text-pink-400",
  },
};

const defaultCategoryStyle = {
  bg: "bg-slate-500/10",
  border: "border-slate-500/30",
  text: "text-slate-400",
};

export default function BlogIndex() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Get unique categories from blog posts
  const categories = useMemo(() => {
    const cats = new Set(blogPosts.map((post) => post.category));
    return ["All", ...Array.from(cats)];
  }, []);

  // Filter posts based on active filter and sort by date (newest first)
  const filteredPosts = useMemo(() => {
    const posts =
      activeFilter === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeFilter);

    return [...posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [activeFilter]);

  // Count posts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: blogPosts.length };
    blogPosts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

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
              <Link href="/blog" className="nav-link text-cyan-400">
                Blog
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
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span
                style={{
                  background: "var(--premium-title-gradient)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI Workflow Guides & Updates
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Practical tips, deep dives, and release notes — built for teams
              working across ChatGPT, Claude, and Grok.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = activeFilter === category;
                const style =
                  category === "All"
                    ? isActive
                      ? {
                          bg: "bg-white/10",
                          border: "border-white/20",
                          text: "text-white",
                        }
                      : defaultCategoryStyle
                    : categoryStyles[category] || defaultCategoryStyle;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`
                      inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium 
                      transition-all duration-200 border backdrop-blur-md cursor-pointer
                      ${
                        isActive
                          ? `${style.bg} ${style.border} ${
                              style.text
                            } ring-2 ring-offset-2 ring-offset-slate-900 ${
                              category === "Tutorial"
                                ? "ring-emerald-500/50"
                                : category === "All"
                                ? "ring-white/20"
                                : "ring-cyan-500/50"
                            }`
                          : `bg-slate-800/50 border-white/10 text-slate-400 hover:bg-slate-800 hover:text-slate-300`
                      }
                    `}
                  >
                    {category === "Tutorial" && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    )}
                    {category}
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-full ${
                        isActive ? "bg-white/10" : "bg-slate-700"
                      }`}
                    >
                      {categoryCounts[category] || 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tutorial Highlight Banner (only show on "All" filter) */}
          {activeFilter === "All" &&
            blogPosts.some((p) => p.category === "Tutorial") && (
              <div className="mb-10 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-emerald-400 font-medium">
                      New to AI Workspace?
                    </p>
                    <p className="text-slate-400 text-sm">
                      Check out our{" "}
                      <button
                        onClick={() => setActiveFilter("Tutorial")}
                        className="text-emerald-400 hover:underline font-medium cursor-pointer"
                      >
                        Tutorial guides
                      </button>{" "}
                      to get started quickly.
                    </p>
                  </div>
                </div>
              </div>
            )}

          {/* Results count */}
          <p className="text-sm text-slate-500 mb-6">
            Showing {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "article" : "articles"}
            {activeFilter !== "All" && ` in ${activeFilter}`}
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => {
              const style =
                categoryStyles[post.category] || defaultCategoryStyle;

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`
                    group relative flex flex-col overflow-hidden rounded-2xl border bg-slate-900/50 
                    transition-all hover:-translate-y-1 hover:shadow-2xl
                    ${
                      post.category === "Tutorial"
                        ? "border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-emerald-500/10"
                        : "border-white/10 hover:border-cyan-500/30 hover:shadow-cyan-500/10"
                    }
                  `}
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
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium backdrop-blur-md ${style.bg} ${style.border} ${style.text}`}
                      >
                        {post.category === "Tutorial" && (
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        )}
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
                    <h2
                      className={`mb-3 text-xl font-bold text-slate-100 transition-colors ${
                        post.category === "Tutorial"
                          ? "group-hover:text-emerald-400"
                          : "group-hover:text-cyan-400"
                      }`}
                    >
                      {post.title}
                    </h2>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">
                      {post.excerpt}
                    </p>
                    <div
                      className={`flex items-center gap-2 text-sm font-medium ${
                        post.category === "Tutorial"
                          ? "text-emerald-400"
                          : "text-cyan-400"
                      }`}
                    >
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
              );
            })}
          </div>

          {/* No results message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg">
                No articles found in this category.
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="mt-4 text-cyan-400 hover:underline cursor-pointer"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} AI Workspace. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
