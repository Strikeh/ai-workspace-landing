import Image from "next/image";
import type { ReactNode, SVGProps } from "react";
import LogoCarousel from "@/components/LogoCarousel";

const browserInstallButtons = [
  {
    name: "Chrome",
    icon: "/images/browsers/chrome.svg",
    url: "#",
    primary: true,
  },
  {
    name: "Edge",
    icon: "/images/browsers/edge.svg",
    url: "#",
    primary: false,
  },
  {
    name: "Firefox",
    icon: "/images/browsers/firefox.svg",
    url: "#",
    primary: false,
  },
];

const stats = [
  { label: "Active users", value: "2,847+" },
  { label: "Average rating", value: "4.9 / 5" },
  { label: "Weekly hours saved", value: "10+" },
  { label: "Uptime", value: "99.9%" },
];

const features = [
  {
    title: "Local-first security",
    description:
      "Your data never leaves your device. Prompts, conversations, images, and notes are encrypted and stored locally. No cloud storage, no telemetry.",
    bullets: [
      "End-to-end encrypted vaults with per-vault password protection",
      "Works offline; manual export/backup when you choose",
      "Data cleanup tools: auto-archive/delete, purge, session controls",
      "Minimal extension permissions (Chrome/Edge), privacy-first architecture",
    ],
    icon: ShieldIcon,
  },
  {
    title: "Multi-platform AI integrations",
    description:
      "One workspace for every AI. Use ChatGPT, Claude, and Grok with a unified flow while all context stays local.",
    bullets: [
      "Native overlays & unified shortcuts for ChatGPT, Claude, and Grok",
      "One-click prompt → conversation linking across platforms",
      "Smart auto-archive and advanced search across all threads",
      "Power tools: custom hotkeys, API-ready design",
    ],
    icon: SparklesIcon,
  },
  {
    title: "Unified productivity workspace",
    description:
      "Everything side-by-side: Prompts, Vaults, Image Gallery, Notes, and a GPT Store—so you don't have to switch between tabs.",
    bullets: [
      "Prompt Studio: rich editor, parameterized templates, batch actions, favorites, real-time search",
      "Conversation Manager: unlimited storage (PRO), rich notes, categories, multi-format export (PDF/TXT/MD/JSON)",
      "Image Gallery & Notes: filters/search, conversation-aware grouping, quick preview, JSON export per note",
      "GPT Store: featured/trending, category filters, live search, deep links",
    ],
    icon: LayersIcon,
  },
  {
    title: "Automation & insights (local)",
    description:
      "Automate upkeep and keep visibility—without sending data away. Analytics runs locally and is clearly marked while in beta.",
    bullets: [
      "Auto-archive/delete with preview (dry run) and per-tier limits",
      "Batch exports to JSON/CSV/TXT; full vault backups with timestamps",
      "Global advanced search across prompts, notes, and images",
      "Local analytics dashboard (beta / coming soon); no external tracking",
    ],
    icon: PulseIcon,
  },
];

const showcases = [
  {
    title: "Image Gallery for creative sprints",
    description:
      "Organize AI-generated visuals by campaign, client, or team. Instant compare view, reversible edits, and local AI upscaling keep your gallery production-ready.",
    highlights: [
      "Color-coded collections with usage rights tracking",
      "One-click export packs for social, deck, and print specs",
      "Audit log stays on-device for compliance reviews",
    ],
    image: "/images/gallery-preview.svg",
    imageAlt: "AI Workspace gallery preview",
  },
  {
    title: "Notes Manager built for flow",
    description:
      "Capture voice memos, transcripts, and daily standups with instant AI summaries that never leave your laptop. Link notes to prompts, tasks, and files.",
    highlights: [
      "Markdown-first editor with slash commands",
      "Smart tags, folders, and auto-linking across vaults",
      "Multilingual UI and transcript translation out of the box",
    ],
    image: "/images/notes-manager.svg",
    imageAlt: "AI Workspace notes manager preview",
  },
  {
    title: "GPT Store discovery hub",
    description:
      "Discover vetted, privacy-safe GPTs for marketing, ops, and research. Featured and trending shelves update daily, all cached locally.",
    highlights: [
      "Curated collections for growth, product, and support teams",
      "Team favorites with usage limits and approval workflows",
      "Stripe-powered PRO billing with cancel-anytime controls",
    ],
    image: "/images/gpt-store.svg",
    imageAlt: "AI Workspace GPT Store preview",
  },
];

const testimonials = [
  {
    quote:
      "We replaced three cloud tools with AI Workspace and finally keep sensitive client prompts in-house. Our legal team signed off within a day.",
    name: "Leah Park",
    role: "Head of Innovation, Northwind Consulting",
  },
  {
    quote:
      "The local vault plus GPT Store gives us a compliant sandbox for experimenting with new models. Productivity is up and security sleeps at night.",
    name: "Jonas Müller",
    role: "CTO, Helix Labs",
  },
  {
    quote:
      "Batch exports and automation recipes save the content team at least 12 hours every week. Zero cloud copies means zero red tape.",
    name: "Carmen Rivera",
    role: "Director of Content, Orbit Media",
  },
];

const faqs = [
  {
    question: "Is my data ever synced to the cloud?",
    answer:
      "No. AI Workspace encrypts all content on-device. Nothing leaves your hardware unless you trigger an export, and exports are stored exactly where you point them.",
  },
  {
    question: "How is security handled?",
    answer:
      "We use end-to-end AES-256 encryption with optional hardware key support. Vault access can be scoped per workspace, and every action is logged locally for compliance.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Start on the Free plan with core prompts, notes, and gallery features. Upgrade to PRO for EUR 10/mo via Stripe for unlimited storage, automation recipes, and GPT Store teams.",
  },
  {
    question: "Which AI models are supported?",
    answer:
      "ChatGPT, Claude, and Grok ship with native integrations. You can also connect local models via OpenAI-compatible endpoints and reuse the same workflows.",
  },
  {
    question: "Does AI Workspace support teams in multiple languages?",
    answer:
      "Yes. The interface adapts to 14 languages today, and content translation happens locally so sensitive material never leaves your workspace.",
  },
];
export default function Home() {
  return (
    <div
      style={{ background: "var(--color-bg-primary)" }}
      className="text-slate-100"
    >
      {/* Navigation Header */}
      <nav
        className="relative z-50 border-b"
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-surface)",
        }}
      >
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
              <a
                href="#features"
                className="text-sm font-medium transition hover:opacity-80"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Features
              </a>
              <a
                href="#showcase"
                className="text-sm font-medium transition hover:opacity-80"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Showcase
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium transition hover:opacity-80"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Pricing
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
                style={{
                  background: "var(--premium-primary-gradient)",
                  color: "var(--color-text)",
                }}
              >
                Get started free
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative isolate overflow-hidden">
          <div
            className="absolute inset-x-0 top-[-20%] z-0 h-[480px] opacity-60"
            style={{
              background: "var(--premium-orb-cyan-gradient)",
            }}
          />
          <div
            className="absolute inset-x-0 top-[-10%] z-0 h-[320px] opacity-50"
            style={{
              background: "var(--premium-orb-teal-gradient)",
            }}
          />
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-24 pt-24 md:px-10 lg:px-16">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-8">
                <div
                  className="flex flex-wrap items-center gap-3 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <Badge icon={ShieldIcon}>Local only. Zero telemetry.</Badge>
                  <Badge icon={SparklesIcon}>ChatGPT · Claude · Grok</Badge>
                </div>
                <h1
                  className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
                  style={{
                    background: "var(--premium-title-gradient)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  The privacy-first AI workspace that keeps every insight on
                  your device.
                </h1>
                <p
                  className="text-lg sm:text-xl"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  AI Workspace unifies prompts, conversations, images, notes,
                  and GPT discovery in one encrypted hub. Reclaim cross-platform
                  freedom without sacrificing control.
                </p>
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="#pricing"
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition"
                      style={{
                        background: "var(--premium-primary-gradient)",
                        color: "var(--color-text)",
                      }}
                    >
                      Get started free
                      <ArrowRightIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="#demo"
                      className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition hover:opacity-80"
                      style={{
                        borderColor: "var(--color-border-light)",
                        color: "var(--color-text)",
                      }}
                    >
                      Watch product tour
                      <PlayIcon className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Browser Installation Buttons */}
                  <div className="space-y-3">
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      Install AI Workspace extension:
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      {browserInstallButtons.map((browser) => (
                        <a
                          key={browser.name}
                          href={browser.url}
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition hover:opacity-90 ${
                            browser.primary ? "shadow-lg" : ""
                          }`}
                          style={{
                            background: browser.primary
                              ? "var(--premium-primary-gradient)"
                              : "var(--color-card-bg)",
                            color: browser.primary
                              ? "var(--color-text)"
                              : "var(--color-text-secondary)",
                            border: browser.primary
                              ? "none"
                              : `1px solid var(--color-border)`,
                          }}
                        >
                          <Image
                            src={browser.icon}
                            alt={`${browser.name} icon`}
                            width={16}
                            height={16}
                            className="h-4 w-4"
                          />
                          Add to {browser.name}
                        </a>
                      ))}
                    </div>
                    <div
                      className="flex items-center gap-2 text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <span
                        className="inline-flex h-2 w-2 rounded-full"
                        style={{ background: "var(--color-accent)" }}
                      />
                      <span>4,689+ happy customers</span>
                      <span>⭐⭐⭐⭐⭐ from 4,689+ reviews</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:max-w-xl">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border p-5"
                      style={{
                        borderColor: "var(--color-card-border)",
                        background: "var(--color-card-bg)",
                      }}
                    >
                      <div
                        className="text-2xl font-semibold"
                        style={{ color: "var(--color-accent)" }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-lg">
                <div
                  className="absolute inset-0 -translate-y-6 translate-x-4 rounded-3xl blur-3xl"
                  style={{
                    background: "var(--premium-orb-blue-gradient)",
                  }}
                />
                <div
                  className="relative overflow-hidden rounded-3xl border shadow-2xl backdrop-blur"
                  style={{
                    borderColor: "var(--color-card-border)",
                    background: "var(--color-card-bg)",
                  }}
                >
                  <div
                    className="flex items-center justify-between border-b px-6 py-4"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <div
                      className="flex items-center gap-2 text-xs uppercase tracking-wider"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <span
                        className="inline-flex h-2 w-2 rounded-full"
                        style={{ background: "var(--color-accent)" }}
                      />
                      Local sync active
                    </div>
                    <span
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Dark · Light · Auto
                    </span>
                  </div>
                  <div className="space-y-6 px-6 py-6">
                    <div className="space-y-2">
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--color-text)" }}
                      >
                        Prompt vault
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        Reusable blueprints, conversation resumes, and
                        automation triggers all live inside encrypted vaults
                        with role-based access.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--color-text)" }}
                      >
                        Automation recipe
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        Deploy scheduled exports, drive summaries into Notion,
                        or sync daily briefs to your secure share folder.
                      </p>
                    </div>
                    <div
                      className="rounded-2xl border p-4"
                      style={{
                        borderColor: "var(--color-card-border)",
                        background: "var(--color-surface)",
                      }}
                    >
                      <div
                        className="mb-2 flex items-center gap-2 text-xs"
                        style={{ color: "var(--color-accent)" }}
                      >
                        <SparklesIcon className="h-4 w-4" />
                        Multi-platform handoff
                      </div>
                      <ul
                        className="space-y-1 text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <li className="flex items-center gap-2">
                          <CheckIcon
                            className="h-4 w-4"
                            style={{ color: "var(--color-accent)" }}
                          />
                          Launch ChatGPT, Claude, and Grok from one command bar
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckIcon
                            className="h-4 w-4"
                            style={{ color: "var(--color-accent)" }}
                          />
                          Auto-fill context with vault-safe snippets
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckIcon
                            className="h-4 w-4"
                            style={{ color: "var(--color-accent)" }}
                          />
                          Log results without cloud storage
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
          className="border-t py-24"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-bg-secondary)",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="max-w-3xl space-y-4">
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ color: "var(--color-accent)" }}
              >
                Platform pillars
              </p>
              <h2
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
                style={{ color: "var(--color-text)" }}
              >
                Security, integrations, and productivity co-designed for
                privacy-first teams.
              </h2>
              <p
                className="text-lg"
                style={{ color: "var(--color-text-secondary)" }}
              >
                No more juggling disconnected AI tools. AI Workspace runs
                locally, adapts to your stack, and scales from solo operators to
                distributed teams.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex h-full flex-col gap-6 rounded-3xl border p-8 transition-all hover:shadow-xl"
                  style={{
                    borderColor: "var(--color-card-border)",
                    background: "var(--color-card-bg)",
                    boxShadow: "var(--color-card-shadow)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <feature.icon
                      className="h-10 w-10"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {feature.description}
                  </p>
                  <ul
                    className="space-y-2 text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {feature.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckIcon
                          className="mt-0.5 h-4 w-4 flex-none"
                          style={{ color: "var(--color-accent)" }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="showcase"
          className="border-t py-24"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-bg-primary)",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl space-y-4">
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
                  Designed for power-users who need control, privacy, and speed.
                </h2>
                <p
                  className="text-lg"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  AI Workspace brings prompts, conversations, images, notes, and
                  custom GPTs together in one secure environment — all stored
                  locally, with seamless support for ChatGPT, Claude, and Grok.
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
                Analytics dashboard · beta / coming soon
              </div>
            </div>
            <div className="mt-16 grid gap-12">
              {showcases.map((showcase, index) => (
                <div
                  key={showcase.title}
                  className={`flex flex-col gap-10 overflow-hidden rounded-3xl border p-8 lg:flex-row ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                  style={{
                    borderColor: "var(--color-card-border)",
                    background: "var(--color-card-bg)",
                  }}
                >
                  <div className="flex-1 space-y-5">
                    <h3
                      className="text-2xl font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {showcase.title}
                    </h3>
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
                  <div className="flex-1">
                    <div
                      className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border"
                      style={{
                        borderColor: "var(--color-card-border)",
                        background: "var(--color-surface)",
                      }}
                    >
                      <Image
                        src={showcase.image}
                        alt={showcase.imageAlt}
                        width={640}
                        height={400}
                        className="h-auto w-full"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-8 lg:flex-row">
                <div className="flex-1 space-y-5">
                  <h3 className="text-2xl font-semibold text-slate-100">
                    Analytics dashboard transparency
                  </h3>
                  <p className="text-sm text-slate-300">
                    Opt in when you are ready. Usage metrics are processed
                    locally, summarized for you, and never transmitted
                    externally. Toggle once, and you will always know exactly
                    what is tracked.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <SparkIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      Beta label stays visible until full release with full
                      export controls.
                    </li>
                    <li className="flex items-start gap-2">
                      <SparkIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      Opt-in data lives in a sandboxed database you own.
                    </li>
                    <li className="flex items-start gap-2">
                      <SparkIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      Disable analytics any time without losing historical
                      workspace data.
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70">
                    <Image
                      src="/images/analytics-beta.svg"
                      alt="AI Workspace analytics dashboard beta preview"
                      width={560}
                      height={280}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="demo"
          className="border-t border-slate-900 bg-slate-950/60 py-24"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Testimonials
                </p>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Trusted by privacy-first teams moving fast.
                </h2>
                <p className="text-lg text-slate-300">
                  Hear how operations, research, and creative leads ship faster
                  with AI Workspace while keeping regulated data inside
                  company-controlled hardware.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.name}
                      className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                    >
                      <p className="text-sm text-slate-200">
                        “{testimonial.quote}”
                      </p>
                      <div className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-slate-400">
                        {testimonial.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Experience the workflow
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-100">
                    See AI Workspace in action
                  </h3>
                  <p className="text-sm text-slate-300">
                    Watch a five-minute tour that covers the prompt vault,
                    multi-platform handoff, and the creative gallery. No email
                    required.
                  </p>
                </div>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Download tour video
                  <ArrowDownIcon className="h-4 w-4" />
                </a>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs text-slate-400">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">
                    <CheckIcon className="h-3.5 w-3.5" />
                    No account required
                  </div>
                  Video is stored locally on your machine and can be deleted any
                  time.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="faq"
          className="border-t border-slate-900 bg-slate-950 py-24"
        >
          <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                FAQ
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Answering your biggest privacy questions.
              </h2>
            </div>
            <div className="mt-12 space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-100">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="border-t border-slate-900 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 py-24"
        >
          <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Plans
                </p>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Start for free. Scale with PRO when you are ready.
                </h2>
                <p className="text-lg text-slate-200">
                  Every workspace begins with full local encryption,
                  multi-platform integrations, and flexible layouts. Upgrade to
                  unlock unlimited storage and automation extras.
                </p>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                    Free plan includes local-first prompts, notes, image
                    gallery, and GPT discovery essentials.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                    PRO adds unlimited storage, batch exports, automation
                    recipes, and advanced role permissions.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                    Billing handled by Stripe with cancel-anytime controls and
                    transparent invoicing.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
                  <h3 className="text-xl font-semibold text-slate-100">Free</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Best for individuals getting started with local-first AI
                    workflows.
                  </p>
                  <p className="mt-6 text-4xl font-semibold text-cyan-300">
                    EUR 0
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    per month
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-200">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      Secure prompts, notes, and gallery with 10 GB local
                      storage
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      Manual backups and offline mode
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      Community GPT Store access
                    </li>
                  </ul>
                  <a
                    href="#get-started"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
                  >
                    Create free workspace
                  </a>
                </div>
                <div className="rounded-3xl border border-cyan-500 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/30">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    <SparkIcon className="h-3.5 w-3.5" />
                    Most popular
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">PRO</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Advanced automation and collaboration for teams who need
                    unlimited everything.
                  </p>
                  <p className="mt-6 text-4xl font-semibold text-cyan-300">
                    EUR 10
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    per month · cancel anytime
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-200">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      Unlimited local storage for prompts, threads, images, and
                      notes
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      Automation recipes, batch exports, and webhook
                      integrations
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      Team vaults with granular roles, approvals, and audit
                      history
                    </li>
                  </ul>
                  <a
                    href="#get-started"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Upgrade to PRO
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="get-started"
          className="border-t border-slate-900 bg-slate-950 py-24"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center md:px-10 lg:px-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              <ShieldIcon className="h-4 w-4" />
              Privacy-first AI workspace
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Ready to ship faster without sending sensitive data to the cloud?
            </h2>
            <p className="max-w-2xl text-lg text-slate-300">
              Download AI Workspace, connect your favorite models, and run your
              entire AI workflow locally. Local encryption, seamless
              integrations, and full creative control in minutes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Download for desktop
                <ArrowDownIcon className="h-4 w-4" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
              >
                Talk to us about enterprise
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Works on macOS, Windows, Linux · Dark / light mode ·
              Multi-language
            </p>
          </div>
        </section>
      </main>
    </div>
  );
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
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
      style={{
        borderColor: "var(--color-card-border)",
        background: "var(--color-card-bg)",
        color: "var(--color-text-secondary)",
      }}
    >
      <Icon className="h-3.5 w-3.5" style={{ color: "var(--color-accent)" }} />
      {children}
    </span>
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

function ArrowDownIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 5v14" />
      <path d="M6 13l6 6 6-6" />
    </svg>
  );
}

function PlayIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M6 4v16l12-8z" fill="currentColor" />
    </svg>
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

function PulseIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M4 12h3l2 6 4-16 3 10h4" />
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
