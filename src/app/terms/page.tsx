import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — AI Workspace",
  description:
    "Terms of Service for AI Workspace. By using our extension, you agree to these terms.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      {/* Simple header */}
      <header
        className="border-b"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="mx-auto max-w-4xl px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 py-16">
        <h1
          className="text-4xl font-bold mb-4"
          style={{
            background: "var(--premium-title-gradient)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Terms of Service — AI Workspace
        </h1>

        <p
          className="text-sm mb-12"
          style={{ color: "var(--color-text-muted)" }}
        >
          Last updated: November 16, 2025
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              Welcome to AI Workspace. By installing and using this extension,
              you agree to these Terms of Service. Please read them carefully
              before using our service.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              1. Acceptance of Terms
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              By downloading, installing, or using AI Workspace, you agree to be
              bound by these Terms of Service and our Privacy Policy. If you do
              not agree to these terms, please do not use the extension.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              2. Description of Service
            </h2>
            <p className="mb-4" style={{ color: "var(--color-text)" }}>
              AI Workspace is a browser extension that provides:
            </p>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>
                Local storage and organization of AI prompts, conversations, and
                notes
              </li>
              <li>Integration with ChatGPT, Claude, and Grok platforms</li>
              <li>Image gallery for AI-generated content</li>
              <li>Custom GPT management and discovery</li>
              <li>Encrypted vault functionality for sensitive data</li>
              <li>Analytics dashboard for usage insights</li>
            </ul>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              All data processing happens locally on your device unless
              explicitly stated otherwise.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              3. User Responsibilities
            </h2>
            <p className="mb-3" style={{ color: "var(--color-text)" }}>
              You agree to:
            </p>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>
                Use the extension in compliance with all applicable laws and
                regulations
              </li>
              <li>
                Not use the extension for any illegal or unauthorized purpose
              </li>
              <li>
                Not attempt to reverse engineer, decompile, or disassemble the
                extension
              </li>
              <li>
                Not interfere with or disrupt the extension&rsquo;s
                functionality
              </li>
              <li>
                Maintain the security of your local data and encryption
                passwords
              </li>
              <li>
                Comply with the terms of service of third-party platforms
                (ChatGPT, Claude, Grok)
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              4. Subscription and Payment
            </h2>

            <h3
              className="text-xl font-semibold mb-3 mt-6"
              style={{ color: "var(--color-accent)" }}
            >
              4.1 Free Version
            </h3>
            <p style={{ color: "var(--color-text)" }}>
              The free version provides limited access to core features
              including basic prompt storage, one vault, and standard
              functionality.
            </p>

            <h3
              className="text-xl font-semibold mb-3 mt-6"
              style={{ color: "var(--color-accent)" }}
            >
              4.2 Pro Version
            </h3>
            <p className="mb-3" style={{ color: "var(--color-text)" }}>
              The Pro version ($9.99/month billed annually or $11.99/month billed monthly) includes:
            </p>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>Unlimited prompts, vaults, and notes</li>
              <li>Unlimited folders & prompt categories</li>
              <li>Image Gallery with search and download capabilities</li>
              <li>Pinned messages & advanced notes</li>
              <li>End-to-end encrypted storage</li>
              <li>Full Image Gallery access</li>
              <li>GPT Manager with discovery features</li>
              <li>Multi-platform support (ChatGPT, Claude, Grok)</li>
              <li>Version history and advanced backup options</li>
              <li>Priority support</li>
            </ul>

            <h3
              className="text-xl font-semibold mb-3 mt-6"
              style={{ color: "var(--color-accent)" }}
            >
              4.3 Billing and Cancellation
            </h3>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>Pro subscriptions are billed monthly or annually</li>
              <li>You can cancel your subscription at any time</li>
              <li>
                Cancellations take effect at the end of the current billing
                period
              </li>
              <li>No refunds for partial billing periods</li>
              <li>All fees are in US Dollars (USD)</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              5. Data and Privacy
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              AI Workspace is designed to be privacy-first:
            </p>
            <ul
              className="list-disc list-inside space-y-2 mt-3"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>All data is stored locally on your device</li>
              <li>
                We do not collect, store, or transmit your personal information
              </li>
              <li>Encrypted vaults use AES-256 encryption</li>
              <li>You are responsible for backing up your local data</li>
            </ul>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              For more details, see our{" "}
              <Link
                href="/privacy"
                className="font-semibold hover:underline"
                style={{ color: "var(--color-accent)" }}
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              6. Intellectual Property
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              AI Workspace and all related content, features, and functionality
              are owned by AI Workspace and protected by international
              copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mt-3" style={{ color: "var(--color-text)" }}>
              You retain all rights to the content you create and store using
              the extension.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              7. Disclaimers and Limitations
            </h2>

            <h3
              className="text-xl font-semibold mb-3 mt-6"
              style={{ color: "var(--color-accent)" }}
            >
              7.1 Service Availability
            </h3>
            <p style={{ color: "var(--color-text)" }}>
              We strive to provide reliable service, but we do not guarantee
              that the extension will be uninterrupted, secure, or error-free.
              We may modify, suspend, or discontinue any feature at any time
              without notice.
            </p>

            <h3
              className="text-xl font-semibold mb-3 mt-6"
              style={{ color: "var(--color-accent)" }}
            >
              7.2 Third-Party Platforms
            </h3>
            <p style={{ color: "var(--color-text)" }}>
              AI Workspace integrates with third-party platforms (ChatGPT,
              Claude, Grok). We are not responsible for changes to these
              platforms that may affect the extension&rsquo;s functionality.
            </p>

            <h3
              className="text-xl font-semibold mb-3 mt-6"
              style={{ color: "var(--color-accent)" }}
            >
              7.3 Data Loss
            </h3>
            <p style={{ color: "var(--color-text)" }}>
              While we implement security measures, we are not responsible for
              data loss due to browser issues, device failures, or user error.
              You are responsible for backing up important data.
            </p>

            <h3
              className="text-xl font-semibold mb-3 mt-6"
              style={{ color: "var(--color-accent)" }}
            >
              7.4 Limitation of Liability
            </h3>
            <p style={{ color: "var(--color-text)" }}>
              To the maximum extent permitted by law, AI Workspace shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of the extension.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              8. Changes to Terms
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              We reserve the right to modify these Terms of Service at any time.
              We will notify users of significant changes through the extension
              or our website. Continued use of the extension after changes
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              9. Termination
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              We may terminate or suspend your access to the extension
              immediately, without prior notice, for any reason, including
              breach of these Terms. Upon termination, your right to use the
              extension will cease immediately.
            </p>
            <p className="mt-3" style={{ color: "var(--color-text)" }}>
              You may stop using the extension at any time by uninstalling it
              from your browser.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              10. Governing Law
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              These Terms shall be governed by and construed in accordance with
              the laws of Belgium, without regard to its conflict of law
              provisions.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              11. Contact Information
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              If you have any questions about these Terms of Service, please
              contact us at:{" "}
              <a
                href="mailto:support@getaiworkspace.com"
                className="font-semibold hover:underline"
                style={{ color: "var(--color-accent)" }}
              >
                support@getaiworkspace.com
              </a>
            </p>
          </section>

          <section
            className="rounded-xl border p-6 mt-12"
            style={{
              borderColor: "var(--color-accent)",
              background: "rgba(6, 182, 212, 0.08)",
            }}
          >
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Summary
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              In plain language: Use AI Workspace responsibly, respect our
              intellectual property, understand that all data is stored locally
              on your device, and know that we may update these terms as needed.
              Your privacy and security are our top priorities.
            </p>
          </section>
        </div>
      </article>

      {/* Footer CTA */}
      <section
        className="border-t py-16"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Questions about our terms?
          </h2>
          <p className="mb-6" style={{ color: "var(--color-text-secondary)" }}>
            We&rsquo;re here to help clarify anything you need.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:support@getaiworkspace.com"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all hover:scale-105"
              style={{
                background: "var(--color-accent)",
                color: "#ffffff",
              }}
            >
              Contact Support
            </a>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-semibold transition-all hover:scale-105"
              style={{
                borderColor: "var(--color-accent)",
                color: "var(--color-accent)",
              }}
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
