import Image from "next/image";
import type { ReactNode, SVGProps } from "react";
import LogoCarousel from "@/components/LogoCarousel";
import DemoModal from "@/components/DemoModal";

const browserInstallButtons = [
  {
    name: "Chrome",
    icon: "/images/browsers/chrome.svg",
    url: "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg",
    primary: true,
  },
  {
    name: "Edge",
    icon: "/images/browsers/edge.svg",
    url: "https://microsoftedge.microsoft.com/addons/detail/aiworkspace-pro/kbdckiagphjeldfdfeobdhcajkpidong",
  },
  {
    name: "Firefox",
    icon: "/images/browsers/firefox.svg",
    url: "https://addons.mozilla.org/en-GB/firefox/addon/aiworkspace-pro/",
  },
];

const showcases = [
  {
    title: "Prompt Vault for instant recall",
    description:
      "Keep every ChatGPT prompt at your fingertips with a structured, searchable vault. Organize prompts into categories, mark favorites, or pin them for quick access — all locally stored and fully private.",
    highlights: [
      "Bulk actions to edit, archive, or link prompts in seconds",
      "Advanced search with filters and real-time results",
      "Favorites & pins for faster workflows across projects",
    ],
    image: "/images/prompts-overview.png",
    imageAlt: "AI Workspace Prompt Vault overview",
  },
  {
    title: "Image Gallery for all your AI visuals",
    description:
      "Browse every image used or generated in your conversations — all in one secure gallery. Jump back into the original chat with one click, download files instantly, or organize them into folders for later use.",
    highlights: [
      "Unified view of local and generated images",
      "Direct links back to the source conversation",
      "Quick download, export, and organization tools",
    ],
    image: "/images/image-gallery.png",
    imageAlt: "AI Workspace image gallery overview",
  },
  {
    title: "Discover and launch custom GPTs",
    badge: "New",
    description:
      "Browse a curated store of GPTs across categories like writing, productivity, research, and more. Open any GPT to view details, explore its capabilities, and start a conversation instantly — all directly inside AI Workspace.",
    highlights: [
      "Filter by featured, trending, or category-specific GPTs",
      "Quick detail view with direct launch into a new chat",
      "Deep links keep every GPT accessible in one secure hub",
    ],
    image: "/images/gpt-store.png",
    imageAlt: "AI Workspace GPT Store overview",
  },
  {
    title: "Analytics Dashboard (beta)",
    badge: "Beta",
    description:
      "Get insights into how you work with prompts, vaults, and AI platforms. Track usage trends, export activity, and performance metrics — all processed locally for full privacy. This dashboard is still a work in progress, but already gives a preview of upcoming features like platform distribution, export statistics, and system health monitoring.",
    highlights: [
      "Local-first analytics, no external tracking",
      "Usage breakdown by prompts, vaults, and exports",
      "Early preview of performance & reliability stats",
    ],
    image: "/images/dashboard.png",
    imageAlt: "AI Workspace Analytics Dashboard (beta)",
  },
  {
    title: "Enhanced experience inside ChatGPT",
    badge: "Live",
    description:
      "AI Workspace extends ChatGPT with a powerful overlay that adds structure, shortcuts, and insights — without disrupting your flow. Organize conversations, track stats, and access tools directly where you work.",
    highlights: [
      "Sidebar with custom categories and vaults",
      "Floating action menu for instant access to core tools",
      "One-click print, message stats, and advanced export options",
    ],
    image: "/images/chatgpt.png",
    imageAlt: "AI Workspace features injected into chatgpt.com UI",
  },
];

const testimonials = [
  {
    quote:
      "AI Workspace is exceptional! The prompt library and folder organization have completely transformed how I work with ChatGPT. Everything I need is instantly accessible.",
    name: "Sarah Mitchell",
    role: "Product Designer",
    date: "Nov 15, 2024",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "I love everything about AI Workspace. It really helps keep my ChatGPT conversations organized and makes me so much more efficient and effective.",
    name: "David Chen",
    role: "Software Engineer",
    date: "Nov 10, 2024",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "This extension is the BEST! The ability to search through all my previous conversations and reuse prompts saves me hours every week. Absolutely essential.",
    name: "Emma Rodriguez",
    role: "Content Manager",
    date: "Oct 28, 2024",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "AI Workspace has become my default tool for managing AI interactions. The local storage gives me peace of mind, and the organization features are incredibly powerful.",
    name: "Marcus Johnson",
    role: "Data Analyst",
    date: "Oct 15, 2024",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Of all the extensions I've tried for ChatGPT, this is the only one I actually use daily. The folder system and prompt vault are game-changers for productivity.",
    name: "Lisa Park",
    role: "Marketing Director",
    date: "Oct 5, 2024",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Finally, a proper way to organize ChatGPT conversations! AI Workspace makes it easy to find past chats and reuse effective prompts. Pure genius!",
    name: "James Wilson",
    role: "Freelance Writer",
    date: "Sep 20, 2024",
    rating: 5,
    verified: true,
  },
];

export default function Home() {
  return (
    <div
      style={{ background: "var(--color-bg-primary)" }}
      className="text-slate-100"
    >
      {/* Demo Modal */}
      <DemoModal />
      {/* Ripple handler for primary CTA */}
      <ScriptHandler />
      {/* Navigation Header */}
      <nav className="site-nav relative z-50">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
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
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#showcase" className="nav-link">
                Showcase
              </a>
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
              <a href="#pricing" className="nav-cta">
                Get started free
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero-section relative isolate overflow-hidden">
          {/* Lighter, more subtle gradient orbs */}
          <div
            className="absolute inset-x-0 top-[-20%] z-0 h-[420px] opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-x-0 top-[-10%] z-0 h-[320px] opacity-25 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)",
            }}
          />
          {/* Subtle accent line */}
          <div
            className="absolute inset-x-0 top-0 z-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.2) 50%, transparent)",
            }}
          />
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-32 pt-20 md:px-10 lg:px-16">
            <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-10">
                <div
                  className="flex flex-wrap items-center gap-3 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <Badge icon={ShieldIcon}>Local only. Zero telemetry.</Badge>
                  <Badge icon={SparklesIcon}>ChatGPT — Claude — Grok</Badge>
                </div>
                <h1
                  className="hero-title text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                  style={{
                    color: "var(--color-text)",
                    lineHeight: "1.2",
                  }}
                >
                  Supercharge Your{" "}
                  <span
                    style={{
                      background: "var(--premium-title-gradient)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ChatGPT Productivity
                  </span>{" "}
                  with Powerful{" "}
                  <span
                    style={{
                      background: "var(--premium-title-gradient)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Organization Tools
                  </span>
                </h1>
                <p
                  className="hero-subtitle text-lg leading-relaxed sm:text-xl"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Take complete control of your ChatGPT workflow. Organize
                  conversations into folders, save and reuse prompts instantly,
                  search across all your chats, and export everything — all with{" "}
                  <span
                    style={{ color: "var(--color-accent)", fontWeight: 600 }}
                  >
                    local-first privacy
                  </span>
                  . The browser extension that makes ChatGPT work the way{" "}
                  <span
                    style={{ color: "var(--color-accent)", fontWeight: 600 }}
                  >
                    you
                  </span>{" "}
                  do.
                </p>
                <div className="space-y-8">
                  {/* Primary CTA */}
                  <div className="flex flex-wrap items-center gap-4 relative">
                    <div className="ambient-glow" aria-hidden />
                    <a
                      href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-bold transition-all hover:scale-105 shadow-xl"
                      style={{
                        background: "var(--color-accent)",
                        color: "#ffffff",
                      }}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                      Install AI Workspace Free
                    </a>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      For Chrome, Edge & Firefox
                    </p>
                  </div>

                  {/* Browser Installation Buttons - Secondary */}
                  <div className="space-y-3">
                    <div className="install-buttons flex flex-wrap items-center gap-3">
                      {browserInstallButtons.map((browser) => (
                        <a
                          key={browser.name}
                          href={browser.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Add AI Workspace to ${browser.name}`}
                          className="browser-install-btn"
                        >
                          <Image
                            src={browser.icon}
                            alt={`${browser.name} icon`}
                            width={20}
                            height={20}
                            className="h-5 w-5"
                          />
                          <span>Add to {browser.name}</span>
                        </a>
                      ))}
                    </div>

                    {/* Social Proof Badge */}
                    <div
                      className="inline-flex items-center gap-3 rounded-full px-4 py-2.5"
                      style={{
                        background: "rgba(6, 182, 212, 0.08)",
                        border: "1px solid rgba(6, 182, 212, 0.2)",
                      }}
                    >
                      {/* Avatar Stack */}
                      <div className="flex -space-x-2">
                        <div
                          className="h-7 w-7 rounded-full border-2 border-white/20 flex items-center justify-center overflow-hidden"
                          style={{
                            background:
                              "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                          }}
                        >
                          <Image
                            src="/images/people/person%201.png"
                            alt="User avatar"
                            width={28}
                            height={28}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div
                          className="h-7 w-7 rounded-full border-2 border-white/20 flex items-center justify-center overflow-hidden"
                          style={{
                            background:
                              "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)",
                          }}
                        >
                          <Image
                            src="/images/people/person%202.png"
                            alt="User avatar"
                            width={28}
                            height={28}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div
                          className="h-7 w-7 rounded-full border-2 border-white/20 flex items-center justify-center overflow-hidden"
                          style={{
                            background:
                              "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
                          }}
                        >
                          <Image
                            src="/images/people/person%203.png"
                            alt="User avatar"
                            width={28}
                            height={28}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Text */}
                      <div className="flex flex-col">
                        <span
                          className="text-xs font-semibold"
                          style={{ color: "var(--color-text)" }}
                        >
                          Join thousands of professionals
                        </span>
                        <span
                          className="text-[10px]"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          using this resource
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-lg">
                <div
                  className="absolute inset-0 -translate-y-6 translate-x-4 rounded-3xl blur-3xl opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)",
                  }}
                />
                <div className="premium-info-card relative overflow-hidden rounded-3xl border shadow-2xl backdrop-blur">
                  {/* Lighter animated background blobs */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-0"
                  >
                    <div
                      className="card-blob blob-1 absolute -left-10 -top-12 h-40 w-56 blur-3xl opacity-50"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)",
                      }}
                    />
                    <div
                      className="card-blob blob-2 absolute -right-14 -bottom-12 h-36 w-52 blur-3xl opacity-50"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
                      }}
                    />
                  </div>
                  <div
                    className="relative z-10 flex items-center justify-between border-b px-6 py-5"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(20, 184, 166, 0.12), rgba(20, 184, 166, 0.05))",
                          border: "1px solid rgba(20, 184, 166, 0.2)",
                        }}
                      >
                        <ShieldIcon
                          className="h-5 w-5"
                          style={{ color: "var(--color-accent)" }}
                        />
                      </div>
                      <div>
                        <div
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "var(--color-text)" }}
                        >
                          Your Complete AI Workspace
                        </div>
                        <div
                          className="text-xs font-bold mt-0.5"
                          style={{
                            color: "var(--color-accent)",
                          }}
                        >
                          100% Local, 0% Cloud
                        </div>
                      </div>
                    </div>
                    <span className="pill-badge">Private</span>
                  </div>
                  <div className="relative z-10 space-y-8 px-6 py-8">
                    <div className="space-y-3">
                      <h3
                        className="info-title text-base font-semibold flex items-center gap-2"
                        style={{
                          background: "var(--premium-title-gradient)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        <LayersIcon
                          className="h-5 w-5"
                          style={{ color: "var(--color-accent)" }}
                        />
                        All-in-One AI Productivity Hub
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        Centralizes{" "}
                        <span
                          style={{
                            color: "var(--color-text)",
                            fontWeight: 500,
                          }}
                        >
                          prompts, conversations, notes, images, and GPTs
                        </span>{" "}
                        into one secure hub. Everything you need without
                        switching tabs.
                      </p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

                    <div className="space-y-3">
                      <h3
                        className="info-title text-base font-semibold flex items-center gap-2"
                        style={{
                          background: "var(--premium-title-gradient)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        <ShieldIcon
                          className="h-5 w-5"
                          style={{ color: "var(--color-accent)" }}
                        />
                        Privacy-First, Multi-Platform Freedom
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <span
                          style={{
                            color: "var(--color-text)",
                            fontWeight: 500,
                          }}
                        >
                          Nothing is sent to the cloud
                        </span>
                        . Your data stays encrypted on your device, while you
                        enjoy seamless integrations with{" "}
                        <span
                          style={{
                            color: "var(--color-accent)",
                            fontWeight: 500,
                          }}
                        >
                          ChatGPT, Claude, and Grok
                        </span>
                        .
                      </p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

                    <div className="info-subpanel relative rounded-2xl border p-5 space-y-3">
                      <div
                        className="flex items-center gap-2 text-sm font-semibold"
                        style={{ color: "var(--color-accent)" }}
                      >
                        <SparklesIcon className="h-4 w-4" />
                        Why Privacy Matters
                      </div>
                      <ul
                        className="space-y-2.5 text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <li className="flex items-start gap-3">
                          <CheckIcon
                            className="h-4 w-4 flex-shrink-0 mt-0.5"
                            style={{ color: "var(--color-accent)" }}
                          />
                          <span>
                            All data stays on your device — never uploaded
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckIcon
                            className="h-4 w-4 flex-shrink-0 mt-0.5"
                            style={{ color: "var(--color-accent)" }}
                          />
                          <span>
                            End-to-end encrypted vaults for sensitive work
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckIcon
                            className="h-4 w-4 flex-shrink-0 mt-0.5"
                            style={{ color: "var(--color-accent)" }}
                          />
                          <span>
                            No telemetry, no tracking, no third-party access
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Companies Carousel Section */}
        <LogoCarousel />

        <section
          id="features"
          className="border-t py-24 section section-secondary-blue"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="max-w-3xl space-y-5 mb-16">
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ color: "var(--color-accent)" }}
              >
                Platform Features
              </p>
              <h2
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
                style={{ color: "var(--color-text)" }}
              >
                Everything you need to{" "}
                <span
                  style={{
                    background: "var(--premium-title-gradient)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  master AI workflows
                </span>
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                From prompt management to conversation organization,{" "}
                <span style={{ color: "var(--color-text)", fontWeight: 500 }}>
                  AI Workspace provides powerful tools
                </span>{" "}
                to enhance your productivity with ChatGPT, Claude, and more.
              </p>
            </div>

            <div className="mt-12 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Save Time & Boost Productivity */}
              <div className="feature-card flex h-full flex-col gap-6 p-8 transition-all">
                <div className="flex items-center gap-3">
                  <span className="feature-icon">
                    <SparkIcon className="h-5 w-5" />
                  </span>
                  <h3 className="feature-title text-xl font-semibold">
                    Save Time & Boost Productivity
                  </h3>
                </div>
                <ul
                  className="feature-bullets space-y-2 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>
                      Never retype prompts again &mdash; save and reuse
                      instantly
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>
                      Find previous conversations in seconds with powerful
                      search
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>
                      Organize hundreds of chats with custom folders and tags
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>Spend less time searching, more time creating</span>
                  </li>
                </ul>
              </div>

              {/* Better AI Results */}
              <div className="feature-card flex h-full flex-col gap-6 p-8 transition-all">
                <div className="flex items-center gap-3">
                  <span className="feature-icon">
                    <SparklesIcon className="h-5 w-5" />
                  </span>
                  <h3 className="feature-title text-xl font-semibold">
                    Better AI Results
                  </h3>
                </div>
                <ul
                  className="feature-bullets space-y-2 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>Build a library of your best-performing prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>
                      Refine and iterate &mdash; save what works, improve what
                      doesn&rsquo;t
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>
                      Track which prompts deliver the results you need
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>
                      Consistent quality across all your AI interactions
                    </span>
                  </li>
                </ul>
              </div>

              {/* Never Lose Work Again */}
              <div className="feature-card flex h-full flex-col gap-6 p-8 transition-all">
                <div className="flex items-center gap-3">
                  <span className="feature-icon">
                    <ShieldIcon className="h-5 w-5" />
                  </span>
                  <h3 className="feature-title text-xl font-semibold">
                    Never Lose Work Again
                  </h3>
                </div>
                <ul
                  className="feature-bullets space-y-2 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>
                      Automatic backup of all your conversations and prompts
                      <span
                        className="ml-2 rounded-full px-2 py-0.5 text-xs font-semibold"
                        style={{
                          background: "rgba(251, 191, 36, 0.1)",
                          color: "#fbbf24",
                          border: "1px solid rgba(251, 191, 36, 0.2)",
                        }}
                      >
                        WIP
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>
                      Everything stored locally &mdash; you own your data
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>Export anytime in multiple formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>
                      Sync across devices without cloud storage
                      <span
                        className="ml-2 rounded-full px-2 py-0.5 text-xs font-semibold"
                        style={{
                          background: "rgba(251, 191, 36, 0.1)",
                          color: "#fbbf24",
                          border: "1px solid rgba(251, 191, 36, 0.2)",
                        }}
                      >
                        WIP
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Work More Efficiently */}
              <div className="feature-card flex h-full flex-col gap-6 p-8 transition-all">
                <div className="flex items-center gap-3">
                  <span className="feature-icon">
                    <LayersIcon className="h-5 w-5" />
                  </span>
                  <h3 className="feature-title text-xl font-semibold">
                    Work More Efficiently
                  </h3>
                </div>
                <ul
                  className="feature-bullets space-y-2 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>One-click access to your favorite prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>
                      Templates for repetitive tasks &mdash; stop starting from
                      scratch
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>Customize your workspace to match your workflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>
                      Keyboard shortcuts for everything you do regularly
                    </span>
                  </li>
                </ul>
              </div>

              {/* For Power Users */}
              <div className="feature-card flex h-full flex-col gap-6 p-8 transition-all">
                <div className="flex items-center gap-3">
                  <span className="feature-icon">
                    <SparkIcon className="h-5 w-5" />
                  </span>
                  <h3 className="feature-title text-xl font-semibold">
                    For Power Users
                  </h3>
                </div>
                <ul
                  className="feature-bullets space-y-2 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>
                      Works with ChatGPT, Claude (work in progress for Gemini,
                      and more)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>
                      Advanced filtering and sorting for massive chat libraries
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>
                      Nested folders, tags, favorites &mdash; organize your way
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span>Available on Chrome, Edge, and Firefox</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mt-16">
              <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
                <div
                  className="flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(6, 182, 212, 0.05), rgba(14, 165, 233, 0.08))",
                    border: "1px solid rgba(6, 182, 212, 0.15)",
                  }}
                >
                  <span className="text-3xl">🔐</span>
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      100% Secure & Private
                    </div>
                    <div
                      className="mt-1 text-xs"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      All data stored locally
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(6, 182, 212, 0.05), rgba(14, 165, 233, 0.08))",
                    border: "1px solid rgba(6, 182, 212, 0.15)",
                  }}
                >
                  <span className="text-3xl">⭐</span>
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      4.9/5 Rating
                    </div>
                    <div
                      className="mt-1 text-xs"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      Trusted by many users
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(6, 182, 212, 0.05), rgba(14, 165, 233, 0.08))",
                    border: "1px solid rgba(6, 182, 212, 0.15)",
                  }}
                >
                  <span className="text-3xl">✓</span>
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      Works on ChatGPT.com
                    </div>
                    <div
                      className="mt-1 text-xs"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      Claude, Gemini & more
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase Carousel */}
        <section className="relative py-24 overflow-hidden">
          {/* Background decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 opacity-30"
          >
            <div
              className="absolute left-[-15%] top-1/4 h-[400px] w-[500px] blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute right-[-15%] bottom-1/4 h-[400px] w-[500px] blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em] mb-4"
                style={{ color: "var(--color-accent)" }}
              >
                See It In Action
              </p>
              <h2
                className="text-3xl font-semibold sm:text-4xl mb-6"
                style={{
                  background: "var(--premium-title-gradient)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Experience the Power of AI Workspace
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Explore our intuitive interface designed to supercharge your ChatGPT workflow
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Main carousel viewport */}
              <div
                className="overflow-hidden rounded-3xl"
                style={{
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                  boxShadow: "0 25px 50px rgba(6, 182, 212, 0.15)",
                }}
              >
                <div className="carousel-track flex transition-transform duration-700 ease-in-out">
                  {/* Slide 1 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.37.47.png"
                      alt="AI Workspace - Prompt Library Management"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                  {/* Slide 2 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.38.41.png"
                      alt="AI Workspace - Conversation Organization"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 3 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.39.10.png"
                      alt="AI Workspace - Folder System"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 4 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.39.38.png"
                      alt="AI Workspace - Search & Filter"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 5 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.40.43.png"
                      alt="AI Workspace - Export Options"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Slide 6 */}
                  <div className="carousel-slide min-w-full">
                    <Image
                      src="/images/carousel/BrandBird 2025-11-20 19.43.13.png"
                      alt="AI Workspace - Settings & Customization"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                className="carousel-btn carousel-btn-prev absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(6, 182, 212, 0.2)",
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                }}
                aria-label="Previous slide"
              >
                <svg
                  className="h-6 w-6"
                  style={{ color: "var(--color-text)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="carousel-btn carousel-btn-next absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(6, 182, 212, 0.2)",
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                }}
                aria-label="Next slide"
              >
                <svg
                  className="h-6 w-6"
                  style={{ color: "var(--color-text)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-3 mt-8">
                <button
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "var(--color-accent)",
                  }}
                  aria-label="Go to slide 1"
                  data-slide="0"
                />
                <button
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 2"
                  data-slide="1"
                />
                <button
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 3"
                  data-slide="2"
                />
                <button
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 4"
                  data-slide="3"
                />
                <button
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 5"
                  data-slide="4"
                />
                <button
                  className="carousel-dot h-3 w-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(6, 182, 212, 0.3)",
                  }}
                  aria-label="Go to slide 6"
                  data-slide="5"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="showcase"
          className="border-t py-24 section section-primary-teal"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl space-y-5">
                <p
                  className="text-sm font-semibold uppercase tracking-[0.3em]"
                  style={{ color: "var(--color-accent)" }}
                >
                  Showcase
                </p>
                <h2
                  className="text-3xl font-semibold sm:text-4xl"
                  style={{ color: "var(--color-text)" }}
                >
                  Designed for{" "}
                  <span
                    style={{
                      background: "var(--premium-title-gradient)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    power-users
                  </span>{" "}
                  who need{" "}
                  <span
                    style={{ color: "var(--color-accent)", fontWeight: 600 }}
                  >
                    control, privacy, and speed
                  </span>
                  .
                </h2>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  AI Workspace brings{" "}
                  <span style={{ color: "var(--color-text)", fontWeight: 500 }}>
                    prompts, conversations, images, notes, and custom GPTs
                  </span>{" "}
                  together in one secure environment — all{" "}
                  <span
                    style={{ color: "var(--color-accent)", fontWeight: 500 }}
                  >
                    stored locally
                  </span>
                  , with seamless support for ChatGPT, Claude.
                </p>
              </div>
              <div
                className="rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{
                  borderColor: "var(--color-accent)",
                  background: "var(--color-accent-light)",
                  color: "var(--color-accent)",
                }}
              >
                Analytics dashboard — beta / coming soon
              </div>
            </div>

            <div className="mt-12 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="mt-16 grid gap-12">
              {showcases.map((showcase, index) => (
                <div
                  key={showcase.title}
                  className={`showcase-card flex flex-col gap-10 rounded-3xl p-8 lg:flex-row ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="showcase-title text-2xl font-semibold">
                        {showcase.title}
                      </h3>
                      {showcase.badge ? (
                        <span className="pill-badge">{showcase.badge}</span>
                      ) : null}
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {showcase.description}
                    </p>
                    <ul
                      className="space-y-2 text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {showcase.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <SparkIcon
                            className="mt-0.5 h-4 w-4 flex-none"
                            style={{ color: "var(--color-accent)" }}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1" id={`sc-${index}`}>
                    <div className="showcase-media relative mx-auto w-full max-w-xl">
                      <a
                        href={`#lightbox-${index}`}
                        aria-label={`Open ${showcase.title} image`}
                      >
                        <Image
                          src={showcase.image}
                          alt={showcase.imageAlt}
                          width={640}
                          height={400}
                          className="h-auto w-full"
                          priority={index === 0}
                        />
                      </a>
                    </div>
                    {/* Lightbox overlay moved outside card to avoid clipping */}
                  </div>
                </div>
              ))}
              <div className="showcase-card flex flex-col gap-10 rounded-3xl p-8 lg:flex-row">
                <div className="flex-1 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="showcase-title text-2xl font-semibold">
                      Print & export conversations your way
                    </h3>
                    <span className="pill-badge">Print-ready</span>
                  </div>
                  <p className="text-sm text-slate-300">
                    Turn any conversation into a polished document with one
                    click. Choose from over 30 customizable themes to match your
                    preferred style, whether for personal archives, client
                    handovers, or team reports.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <SparkIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      Flexible layout options: light, dark, and custom themes
                    </li>
                    <li className="flex items-start gap-2">
                      <SparkIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      Include or exclude headers, roles, and metadata
                    </li>
                    <li className="flex items-start gap-2">
                      <SparkIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      Export-ready formatting for print or digital sharing
                    </li>
                  </ul>
                </div>
                <div className="flex-1" id="sc-print">
                  <div className="showcase-media relative mx-auto w-full max-w-xl">
                    <a
                      href="#lightbox-print"
                      aria-label="Open Print & export image"
                    >
                      <Image
                        src="/images/print.png"
                        alt="AI Workspace print & export preview"
                        width={560}
                        height={280}
                        className="h-auto w-full"
                      />
                    </a>
                  </div>
                  {/* Lightbox overlay moved outside card to avoid clipping */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Lightbox overlays for showcases (rendered outside the cards to prevent clipping) */}
        <div aria-hidden>
          {showcases.map((showcase, index) => (
            <a
              key={`lightbox-${index}`}
              id={`lightbox-${index}`}
              className="lightbox-overlay"
              href={`#sc-${index}`}
              aria-label="Close image"
            >
              <div className="lightbox-content">
                <Image
                  src={showcase.image}
                  alt={showcase.imageAlt}
                  width={1600}
                  height={900}
                  sizes="(max-width: 1600px) 96vw, 1600px"
                  priority={index === 0}
                  style={{
                    maxWidth: "min(1600px, 96vw)",
                    maxHeight: "88vh",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  className="lightbox-img"
                />
                <span className="lightbox-close" aria-hidden>
                  ×
                </span>
              </div>
            </a>
          ))}
          {/* Print showcase overlay */}
          <a
            id="lightbox-print"
            className="lightbox-overlay"
            href="#sc-print"
            aria-label="Close image"
          >
            <div className="lightbox-content">
              <Image
                src="/images/print.png"
                alt="AI Workspace print & export preview"
                width={1600}
                height={900}
                sizes="(max-width: 1600px) 96vw, 1600px"
                style={{
                  maxWidth: "min(1600px, 96vw)",
                  maxHeight: "88vh",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
                className="lightbox-img"
              />
              <span className="lightbox-close" aria-hidden>
                ×
              </span>
            </div>
          </a>
        </div>
        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="relative border-t py-24 section section-primary-blue"
          style={{ borderColor: "var(--color-border)" }}
        >
          {/* subtle background orbs for depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 opacity-40"
          >
            <div
              className="absolute left-[-10%] top-[-10%] h-[320px] w-[450px] blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute right-[-12%] bottom-[-10%] h-[280px] w-[420px] blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, transparent 70%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em] mb-4"
                style={{ color: "var(--color-accent)" }}
              >
                User Reviews
              </p>
              <h2
                className="text-3xl font-semibold sm:text-4xl mb-6"
                style={{
                  background: "var(--premium-title-gradient)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Loved by{" "}
                <span style={{ color: "var(--color-accent)" }}>
                  thousands of users
                </span>
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Join thousands of professionals who trust AI Workspace to
                organize their ChatGPT conversations, save prompts, and boost
                productivity.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(6, 182, 212, 0.04), rgba(14, 165, 233, 0.08), rgba(59, 130, 246, 0.04))",
                    border: "1px solid rgba(6, 182, 212, 0.2)",
                  }}
                >
                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(6, 182, 212, 0.06), rgba(14, 165, 233, 0.12), rgba(59, 130, 246, 0.06))",
                    }}
                  />

                  <div className="relative z-10 space-y-4">
                    {/* Rating stars */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5"
                          fill="#fbbf24"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author info */}
                    <div
                      className="flex items-center gap-4 pt-4 border-t"
                      style={{ borderColor: "rgba(6, 182, 212, 0.15)" }}
                    >
                      <div
                        className="flex h-14 w-14 flex-none items-center justify-center rounded-full text-xl font-bold"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--color-accent), #0ea5e9)",
                          color: "white",
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className="text-lg font-semibold"
                            style={{ color: "var(--color-text)" }}
                          >
                            {testimonial.name}
                          </div>
                          {testimonial.verified && (
                            <svg
                              className="h-5 w-5 flex-none"
                              fill="var(--color-accent)"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <div
                          className="text-base"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section
          id="roadmap"
          className="relative border-t py-24 section section-primary-blue"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em] mb-4"
                style={{ color: "var(--color-accent)" }}
              >
                Coming Soon
              </p>
              <h2
                className="text-3xl font-semibold sm:text-4xl mb-6"
                style={{
                  background: "var(--premium-title-gradient)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Future Features on the Roadmap
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                We&apos;re constantly evolving AI Workspace with powerful new
                capabilities to enhance your productivity.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              <div
                className="flex items-start gap-4 rounded-2xl p-6"
                style={{
                  background: "rgba(6, 182, 212, 0.05)",
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                }}
              >
                <div
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-xl"
                  style={{ background: "var(--color-accent)" }}
                >
                  <SparkIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    Prompt Chaining
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Link multiple prompts together for complex automated
                    workflows
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 rounded-2xl p-6"
                style={{
                  background: "rgba(6, 182, 212, 0.05)",
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                }}
              >
                <div
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-xl"
                  style={{ background: "var(--color-accent)" }}
                >
                  <SparkIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    Advanced Analytics Dashboard
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Deep insights into your AI usage patterns and productivity
                    metrics
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 rounded-2xl p-6"
                style={{
                  background: "rgba(6, 182, 212, 0.05)",
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                }}
              >
                <div
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-xl"
                  style={{ background: "var(--color-accent)" }}
                >
                  <SparkIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    Extended LLM Support
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Native integrations for Gemini, Perplexity, Llama, and more
                    AI platforms
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 rounded-2xl p-6"
                style={{
                  background: "rgba(6, 182, 212, 0.05)",
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                }}
              >
                <div
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-xl"
                  style={{ background: "var(--color-accent)" }}
                >
                  <SparkIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    Multi-Language Support
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Interface localization for Spanish, French, German,
                    Japanese, and more
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 rounded-2xl p-6"
                style={{
                  background: "rgba(6, 182, 212, 0.05)",
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                }}
              >
                <div
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-xl"
                  style={{ background: "var(--color-accent)" }}
                >
                  <SparkIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    Workflow Automation
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Trigger actions based on events: auto-categorize,
                    smart-archive, scheduled exports
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 rounded-2xl p-6"
                style={{
                  background: "rgba(6, 182, 212, 0.05)",
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                }}
              >
                <div
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-xl"
                  style={{ background: "var(--color-accent)" }}
                >
                  <SparkIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    Team Collaboration Tools
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Share prompt libraries and vault templates with your team
                    (privacy-first)
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 rounded-2xl p-6"
                style={{
                  background: "rgba(6, 182, 212, 0.05)",
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                }}
              >
                <div
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-xl"
                  style={{ background: "var(--color-accent)" }}
                >
                  <SparkIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    Voice & Audio Processing
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Transcribe voice notes, organize audio conversations,
                    voice-to-prompt
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 rounded-2xl p-6"
                style={{
                  background: "rgba(6, 182, 212, 0.05)",
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                }}
              >
                <div
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-xl"
                  style={{ background: "var(--color-accent)" }}
                >
                  <SparkIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    Custom API Integrations
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Connect your own AI models and third-party tools via REST
                    API
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 text-sm max-w-4xl mx-auto"
              style={{
                border: "1px solid rgba(6, 182, 212, 0.2)",
                background: "rgba(6, 182, 212, 0.05)",
                color: "var(--color-text-secondary)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ background: "var(--color-accent)" }}
                />
                <span
                  className="font-semibold text-base"
                  style={{ color: "var(--color-text)" }}
                >
                  Active Development
                </span>
              </div>
              <p className="leading-relaxed">
                These features are in various stages of development. Want to
                influence the roadmap? Join our community or reach out with
                feedback!
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section - Middle */}

        {/* CTA Section - Middle */}
        <section className="py-20 section section-primary-blue">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                background: "var(--premium-title-gradient)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ready to boost your ChatGPT productivity?
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Join thousands of users organizing their AI workflows with AI
              Workspace.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-bold transition-all hover:scale-105 shadow-xl"
              style={{
                background: "var(--color-accent)",
                color: "#ffffff",
              }}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              Install AI Workspace Free
            </a>
            <p
              className="mt-4 text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              Free forever • No credit card required • Install in seconds
            </p>
          </div>
        </section>

        <section
          id="faq"
          className="border-t py-24 section section-primary-teal"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
            <div className="text-center space-y-4">
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ color: "var(--color-accent)" }}
              >
                FAQ
              </p>
              <h2
                className="mt-4 text-3xl font-semibold sm:text-4xl"
                style={{
                  background: "var(--premium-title-gradient)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Everything you want to know
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Quick answers to common questions about{" "}
                <span style={{ color: "var(--color-accent)", fontWeight: 500 }}>
                  security, features, and pricing
                </span>
                .
              </p>
            </div>

            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="mt-12 space-y-6">
              <details className="faq-card faq-accordion">
                <summary className="faq-summary">
                  <span className="faq-caret" aria-hidden />
                  <span className="faq-question text-lg font-semibold">
                    Is my data stored securely?
                  </span>
                </summary>
                <div className="faq-content">
                  <div className="faq-panel">
                    <div className="faq-answer mt-2 text-sm">
                      <p>
                        Yes. All prompts, notes, and chats are saved locally in
                        vaults. Private vaults are protected with AES-256
                        encryption, optional passwords, and auto-lock when
                        inactive. Nothing is sent to external servers unless you
                        manually export.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="faq-card faq-accordion">
                <summary className="faq-summary">
                  <span className="faq-caret" aria-hidden />
                  <span className="faq-question text-lg font-semibold">
                    Can I organize my prompts and chats?
                  </span>
                </summary>
                <div className="faq-content">
                  <div className="faq-panel">
                    <div className="faq-answer mt-2 text-sm">
                      <p>
                        Absolutely. The Prompt Manager lets you save, tag, and
                        categorize prompts with a nested tree structure. Chats
                        and notes can be linked, favorited, pinned, or searched
                        with advanced filters for quick recall.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="faq-card faq-accordion">
                <summary className="faq-summary">
                  <span className="faq-caret" aria-hidden />
                  <span className="faq-question text-lg font-semibold">
                    What&rsquo;s the difference between Free and Pro?
                  </span>
                </summary>
                <div className="faq-content">
                  <div className="faq-panel">
                    <div className="faq-answer mt-2 text-sm">
                      <p>
                        <strong>Free:</strong> limited prompts and notes, 1
                        vault, no encryption.
                      </p>
                      <p>
                        <strong>Pro ($9.99/month or $79.99/year):</strong>{" "}
                        unlimited prompts, vaults, and notes, encrypted storage,
                        full Image Gallery, GPT Manager, multi-platform support,
                        and version history.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="faq-card faq-accordion">
                <summary className="faq-summary">
                  <span className="faq-caret" aria-hidden />
                  <span className="faq-question text-lg font-semibold">
                    Which AI platforms are supported?
                  </span>
                </summary>
                <div className="faq-content">
                  <div className="faq-panel">
                    <div className="faq-answer mt-2 text-sm">
                      <p>
                        AI Workspace integrates with ChatGPT out of the box. You
                        can run the same prompts across platforms, switch with
                        one click, and in the future chain steps across multiple
                        AIs.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="faq-card faq-accordion">
                <summary className="faq-summary">
                  <span className="faq-caret" aria-hidden />
                  <span className="faq-question text-lg font-semibold">
                    Does it support images and GPTs too?
                  </span>
                </summary>
                <div className="faq-content">
                  <div className="faq-panel">
                    <div className="faq-answer mt-2 text-sm">
                      <p>
                        Yes. The Image Gallery collects both uploaded and
                        AI-generated visuals, so you can browse, download, and
                        manage them. The GPT Manager lets you search, filter,
                        and launch GPTs instantly from one central hub.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="faq-card faq-accordion">
                <summary className="faq-summary">
                  <span className="faq-caret" aria-hidden />
                  <span className="faq-question text-lg font-semibold">
                    How do I access everything quickly?
                  </span>
                </summary>
                <div className="faq-content">
                  <div className="faq-panel">
                    <div className="faq-answer mt-2 text-sm">
                      <p>
                        Use the floating menu for instant access to vaults,
                        prompts, and settings. Themes (dark, light, mint green,
                        retro) and multi-language support (EN/NL, with more to
                        come) make the workspace customizable.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="faq-card faq-accordion">
                <summary className="faq-summary">
                  <span className="faq-caret" aria-hidden />
                  <span className="faq-question text-lg font-semibold">
                    What about analytics and logging?
                  </span>
                </summary>
                <div className="faq-content">
                  <div className="faq-panel">
                    <div className="faq-answer mt-2 text-sm">
                      <p>
                        Every prompt run is logged locally so you can retrace
                        workflows, analyze usage, and review past activity. An
                        expanded analytics dashboard is on the roadmap, with the
                        same local-first, privacy-first approach.
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="border-t py-24 section section-secondary-blue"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
            <div className="text-center">
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ color: "var(--color-accent)" }}
              >
                Plans
              </p>
              <h2
                className="mt-4 text-3xl font-semibold sm:text-4xl"
                style={{
                  background: "var(--premium-title-gradient)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Start free. Go PRO when you are ready.
              </h2>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Free plan */}
              <div className="pricing-card p-8">
                <div className="card-topline mb-5" aria-hidden />
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  Free
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Best for individuals exploring local-first AI workflows.
                </p>
                <div className="mt-5">
                  <div className="price-value">$0</div>
                  <div className="price-meta mt-1">per month</div>
                </div>
                <ul className="pricing-features mt-6 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Save and organize prompts with categories & tags
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    1 Vault (no encryption)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Notes Manager (basic)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Image Gallery (basic, limited items)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Community GPT Store (browse & launch GPTs)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Local logging & history of recent prompts
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Dark/Light themes + EN/FR/NL interface
                  </li>
                </ul>
                <a
                  href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:scale-105"
                  style={{
                    borderColor: "var(--color-card-border)",
                    color: "var(--color-text)",
                  }}
                >
                  Try now for free
                </a>
              </div>

              {/* PRO plan */}
              <div className="pricing-card pricing-card--pro p-8">
                <div className="card-topline mb-5" aria-hidden />
                <div
                  className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{
                    background: "var(--color-accent-light)",
                    color: "var(--color-accent)",
                  }}
                >
                  <SparkIcon className="h-3.5 w-3.5" />
                  Most popular
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  PRO
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  For power users and teams who need unlimited everything.
                </p>
                <div className="mt-5">
                  <div className="price-value">$9.99</div>
                  <div className="price-meta mt-1">
                    per month — or $79.99/year (save 33%)
                  </div>
                </div>
                <ul className="pricing-features mt-6 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Unlimited prompts, notes, and encrypted vaults
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    AES-256 encryption + autolock
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Advanced Prompt Manager: variables, versioning, batch
                    actions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Advanced search across prompts, notes & images
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Full Image Gallery with downloads, exports, filters
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Full Notes Manager with exports & conversation linking
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    GPT Store with advanced filters, trending & featured GPTs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Multi-platform support (ChatGPT, Claude, Grok)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Automation: auto-archive/delete, dry run flows, exports
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Local analytics dashboard (beta)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Custom themes + floating action menu
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    Priority support
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "var(--color-accent)" }}
                    />
                    More features coming soon...
                  </li>
                </ul>
                <a
                  href="#get-started"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition"
                  style={{
                    background: "var(--color-accent)",
                    color: "#0a0f13",
                  }}
                >
                  Upgrade to PRO
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Billing note */}
            <div
              className="mt-10 pricing-billing p-4 text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Billing is handled via Stripe with transparent invoicing and
              cancel-anytime flexibility.
            </div>
          </div>
        </section>

        {/* Final CTA Section - Before Footer */}
        <section
          className="border-t py-24 section section-primary-teal"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                background: "var(--premium-title-gradient)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Start organizing your ChatGPT workflow today
            </h2>
            <p
              className="text-xl mb-10"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Free forever. No credit card required. Install in seconds.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-bold transition-all hover:scale-105 shadow-xl"
              style={{
                background: "var(--color-accent)",
                color: "#ffffff",
              }}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              Install AI Workspace Free
            </a>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {browserInstallButtons.map((browser) => (
                <a
                  key={browser.name}
                  href={browser.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <Image
                    src={browser.icon}
                    alt={`${browser.name} icon`}
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                  {browser.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            {/* Floating background orbs */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div
                className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-3xl"
                style={{
                  background: "radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full blur-3xl"
                style={{
                  background: "radial-gradient(circle, rgba(14, 165, 233, 0.3), transparent 70%)",
                }}
              />
            </div>

            <div
              className="relative overflow-hidden rounded-[2rem] p-16 text-center"
              style={{
                border: "1px solid rgba(6, 182, 212, 0.3)",
                background:
                  "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(14, 165, 233, 0.15), rgba(59, 130, 246, 0.1))",
                boxShadow: "0 20px 60px rgba(6, 182, 212, 0.15)",
              }}
            >
              {/* Animated gradient overlay */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(14, 165, 233, 0.2) 0%, transparent 50%)",
                }}
              />

              <div className="relative z-10 space-y-10">
                {/* Icon container with pulsing effect */}
                <div className="inline-flex items-center justify-center">
                  <div className="relative">
                    {/* Pulsing rings */}
                    <div
                      className="absolute inset-0 rounded-3xl animate-ping opacity-20"
                      style={{
                        background: "var(--color-accent)",
                        animationDuration: "2s",
                      }}
                    />
                    <div
                      className="relative flex h-24 w-24 items-center justify-center rounded-3xl shadow-2xl"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%)",
                      }}
                    >
                      <svg
                        className="h-12 w-12 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="max-w-2xl mx-auto">
                  <h2
                    className="text-4xl font-bold sm:text-5xl mb-6"
                    style={{
                      background: "var(--premium-title-gradient)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Questions or Suggestions?
                  </h2>
                  <p
                    className="text-xl leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    We&apos;d love to hear from you! Share your feedback, report
                    issues, or suggest new features.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                  <a
                    href="mailto:ai.workspace.extension@gmail.com"
                    className="group inline-flex items-center gap-4 rounded-2xl px-12 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(6,182,212,0.3)]"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%)",
                    }}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact Us
                    <svg
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>

                  <p
                    className="text-base font-medium"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    ai.workspace.extension@gmail.com
                  </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-3">
                  <div
                    className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      background: "rgba(6, 182, 212, 0.08)",
                      border: "1px solid rgba(6, 182, 212, 0.25)",
                    }}
                  >
                    <div
                      className="flex flex-col items-center gap-3 text-center"
                    >
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                        style={{ background: "var(--color-accent)" }}
                      >
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <span
                        className="text-base font-bold"
                        style={{ color: "var(--color-text)" }}
                      >
                        Feature Requests
                      </span>
                    </div>
                  </div>

                  <div
                    className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      background: "rgba(6, 182, 212, 0.08)",
                      border: "1px solid rgba(6, 182, 212, 0.25)",
                    }}
                  >
                    <div
                      className="flex flex-col items-center gap-3 text-center"
                    >
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                        style={{ background: "var(--color-accent)" }}
                      >
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                      </div>
                      <span
                        className="text-base font-bold"
                        style={{ color: "var(--color-text)" }}
                      >
                        Bug Reports
                      </span>
                    </div>
                  </div>

                  <div
                    className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      background: "rgba(6, 182, 212, 0.08)",
                      border: "1px solid rgba(6, 182, 212, 0.25)",
                    }}
                  >
                    <div
                      className="flex flex-col items-center gap-3 text-center"
                    >
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                        style={{ background: "var(--color-accent)" }}
                      >
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </div>
                      <span
                        className="text-base font-bold"
                        style={{ color: "var(--color-text)" }}
                      >
                        General Feedback
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer
          id="footer"
          className="border-t py-20 section section-primary-blue"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
            <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
              <div className="space-y-4">
                <h3
                  className="text-2xl font-semibold footer-heading"
                  style={{
                    background: "var(--premium-title-gradient)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  AI Workspace
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Your complete local-first AI productivity hub. Manage prompts,
                  conversations, images, notes, and GPTs securely — without
                  sending data to the cloud.
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Privacy-first ◆ Multi-platform (ChatGPT, Claude, Grok) ◆ Works
                  on Chrome Extension (macOS, Windows, Linux)
                </p>
              </div>
              <div>
                <h4
                  className="text-sm font-semibold uppercase tracking-[0.3em]"
                  style={{ color: "var(--color-accent)" }}
                >
                  Quick Links
                </h4>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a className="footer-link" href="#features">
                      Features
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#faq">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#">
                      Download
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4
                  className="text-sm font-semibold uppercase tracking-[0.3em]"
                  style={{ color: "var(--color-accent)" }}
                >
                  Legal
                </h4>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a className="footer-link" href="/privacy">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="/terms">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hr-gradient my-8" aria-hidden />
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              © 2025 AI Workspace. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function ScriptHandler() {
  // Attach a click ripple to the primary CTA when the component is mounted
  if (typeof window !== "undefined") {
    requestAnimationFrame(() => {
      // lightweight scroll variable for parallax
      const setScrollVar = () => {
        const y = window.scrollY || window.pageYOffset || 0;
        document.documentElement.style.setProperty("--scroll-y", `${y}px`);
      };
      setScrollVar();
      window.addEventListener("scroll", setScrollVar, { passive: true });

      const btn = document.querySelector<HTMLAnchorElement>(
        ".install-buttons .cta-btn--primary"
      );
      if (btn && !btn.dataset.rippleInit) {
        btn.dataset.rippleInit = "true";
        btn.addEventListener("click", (e) => {
          const rect = btn.getBoundingClientRect();
          const x = (e as MouseEvent).clientX - rect.left;
          const y = (e as MouseEvent).clientY - rect.top;
          const ripple = document.createElement("span");
          ripple.className = "ripple";
          ripple.style.width = ripple.style.height = `${Math.max(
            rect.width,
            rect.height
          )}px`;
          ripple.style.left = `${x}px`;
          ripple.style.top = `${y}px`;
          btn.appendChild(ripple);
          ripple.addEventListener("animationend", () => ripple.remove());
        });
      }

      // Carousel functionality
      const track = document.querySelector(".carousel-track") as HTMLElement;
      const dots = document.querySelectorAll(".carousel-dot");
      const prevBtn = document.querySelector(".carousel-btn-prev");
      const nextBtn = document.querySelector(".carousel-btn-next");
      
      if (track && dots.length > 0) {
        let currentSlide = 0;
        const totalSlides = dots.length;
        let autoplayInterval: NodeJS.Timeout;

        const updateCarousel = (index: number) => {
          currentSlide = (index + totalSlides) % totalSlides;
          track.style.transform = `translateX(-${currentSlide * 100}%)`;
          
          // Update dots
          dots.forEach((dot, i) => {
            const dotEl = dot as HTMLElement;
            if (i === currentSlide) {
              dotEl.style.background = "var(--color-accent)";
              dotEl.style.width = "2rem";
            } else {
              dotEl.style.background = "rgba(6, 182, 212, 0.3)";
              dotEl.style.width = "0.75rem";
            }
          });
        };

        const startAutoplay = () => {
          autoplayInterval = setInterval(() => {
            updateCarousel(currentSlide + 1);
          }, 5000);
        };

        const stopAutoplay = () => {
          clearInterval(autoplayInterval);
        };

        // Next/Prev buttons
        nextBtn?.addEventListener("click", () => {
          stopAutoplay();
          updateCarousel(currentSlide + 1);
          startAutoplay();
        });

        prevBtn?.addEventListener("click", () => {
          stopAutoplay();
          updateCarousel(currentSlide - 1);
          startAutoplay();
        });

        // Dot navigation
        dots.forEach((dot) => {
          dot.addEventListener("click", () => {
            stopAutoplay();
            const slideIndex = parseInt(dot.getAttribute("data-slide") || "0");
            updateCarousel(slideIndex);
            startAutoplay();
          });
        });

        // Pause on hover
        track.parentElement?.addEventListener("mouseenter", stopAutoplay);
        track.parentElement?.addEventListener("mouseleave", startAutoplay);

        // Start autoplay
        startAutoplay();
      }
    });
  }
  return null;
}
function Badge({
  icon: Icon,
  children,
}: {
  icon: (props: SVGProps<SVGSVGElement>) => ReactNode;
  children: ReactNode;
}) {
  return (
    <span
      className="hero-badge inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]"
      style={{
        borderColor: "rgba(20, 184, 166, 0.25)",
        background:
          "linear-gradient(135deg, rgba(20, 184, 166, 0.08), rgba(20, 184, 166, 0.04))",
        color: "var(--color-text-secondary)",
        boxShadow: "0 0 20px rgba(20, 184, 166, 0.1)",
      }}
    >
      <Icon className="h-3.5 w-3.5" style={{ color: "var(--color-accent)" }} />
      {children}
    </span>
  );
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12l5 5 9-9" />
    </svg>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7z" />
      <path d="M9.5 12.5l1.8 1.8 3.2-3.3" />
    </svg>
  );
}

function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
      <path d="M5 19l1-2 2-1-2-1-1-2-1 2-2 1 2 1z" />
      <path d="M17 19l.5-1.5L19 17l-1.5-.5L17 15l-.5 1.5L15 17l1.5.5z" />
    </svg>
  );
}

function LayersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3l9 4.5-9 4.5-9-4.5z" />
      <path d="M3 12l9 4.5 9-4.5" />
      <path d="M3 16.5l9 4.5 9-4.5" />
    </svg>
  );
}

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 4l1.2 3.6L17 9l-3.8 1.4L12 14l-1.2-3.6L7 9l3.8-1.4z" />
    </svg>
  );
}
