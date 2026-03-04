"use client";

import Link from "next/link";

const CWS_URL =
  "https://chromewebstore.google.com/detail/ai-workspace-pro-chatgpt/mngeddjcngpcdakdhfcbaefeonmmeomg";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-emerald-400 mx-auto flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-5 h-5 text-red-400/70 mx-auto flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const rows = [
  {
    feature: "100% local storage (no cloud sync)",
    us: true,
    them: false,
    highlight: true,
  },
  {
    feature: "AES-256 encrypted workspaces",
    us: true,
    them: false,
    highlight: true,
  },
  {
    feature: "Zero telemetry — no data sent to servers",
    us: true,
    them: false,
    highlight: true,
  },
  {
    feature: "Multiple isolated workspaces",
    us: true,
    them: false,
    highlight: true,
  },
  { feature: "Folder organisation", us: true, them: true },
  { feature: "Prompt library", us: true, them: true },
  { feature: "PDF / Markdown export", us: true, them: true },
  { feature: "ChatGPT + Claude + Grok support", us: true, them: true },
  { feature: "Image gallery & bulk download", us: true, them: true },
  { feature: "Prompt chains / workflows", us: true, them: true },
  { feature: "Free to start", us: true, them: true },
];

export default function CompetitorComparison() {
  return (
    <section
      className="relative border-t py-24"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-bg-secondary)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            How We Compare
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            style={{ color: "var(--color-text)" }}
          >
            AI Workspace vs.{" "}
            <span
              style={{
                background: "var(--premium-title-gradient)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Superpower ChatGPT
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            Both extensions add powerful features to ChatGPT — but{" "}
            <span className="text-white font-medium">
              only AI Workspace keeps your data 100% on your device
            </span>
            . Your conversations, prompts, and notes never leave your browser.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Column headers */}
          <div className="grid grid-cols-3 bg-slate-800/80 border-b border-white/10">
            <div className="py-4 px-6 text-sm font-semibold text-slate-400 uppercase tracking-wider">
              Feature
            </div>
            <div className="py-4 px-6 text-center">
              <a
                href={CWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
              >
                <span className="text-sm font-bold text-cyan-400">
                  AI Workspace Pro
                </span>
                <span className="text-xs text-slate-500">
                  getaiworkspace.com
                </span>
              </a>
            </div>
            <div className="py-4 px-6 text-center">
              <span className="text-sm font-semibold text-slate-400">
                Superpower ChatGPT
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-b border-white/5 last:border-0 transition-colors ${
                row.highlight
                  ? "bg-emerald-500/5 hover:bg-emerald-500/10"
                  : "hover:bg-white/3"
              }`}
            >
              <div className="py-4 px-6 flex items-center gap-3">
                {row.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                )}
                <span
                  className={`text-sm ${
                    row.highlight ? "text-white font-medium" : "text-slate-300"
                  }`}
                >
                  {row.feature}
                </span>
              </div>
              <div className="py-4 px-6 flex items-center justify-center">
                {row.us ? <CheckIcon /> : <XIcon />}
              </div>
              <div className="py-4 px-6 flex items-center justify-center">
                {row.them ? <CheckIcon /> : <XIcon />}
              </div>
            </div>
          ))}
        </div>

        {/* Privacy note */}
        <div className="mt-8 p-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 flex items-start gap-4">
          <svg
            className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <div>
            <p className="text-sm font-semibold text-white mb-1">
              Privacy by design — not by policy
            </p>
            <p className="text-sm text-slate-400">
              Superpower ChatGPT syncs your data to their servers. AI Workspace
              stores everything locally in your browser with optional AES-256
              encryption — no account required, no data leaving your device.{" "}
              <Link
                href="/privacy"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                Read our privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
