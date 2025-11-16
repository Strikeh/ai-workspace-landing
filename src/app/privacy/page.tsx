import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Workspace",
  description:
    "Privacy Policy for AI Workspace. We don't collect, store, or sell any personal data. All processing happens locally in your browser.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      {/* Simple header */}
      <header className="border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="mx-auto max-w-4xl px-6 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
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
          Privacy Policy — AI Workspace
        </h1>
        
        <p className="text-sm mb-12" style={{ color: "var(--color-text-muted)" }}>
          Last updated: November 16, 2025
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text)" }}>
              AI Workspace is designed with privacy and security in mind.
              This extension does not collect, store, or sell any personal data.
              All processing happens locally in your browser unless explicitly stated below.
            </p>
          </section>

          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              1. Information We Do Not Collect
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              AI Workspace does not collect, transmit, or share:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4" style={{ color: "var(--color-text-secondary)" }}>
              <li>Personal information</li>
              <li>Email addresses</li>
              <li>Chat content</li>
              <li>Browser history</li>
              <li>IP addresses</li>
              <li>Cookies</li>
              <li>Device identifiers</li>
            </ul>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              We do not use analytics, tracking scripts, or third-party monitoring tools.
            </p>
          </section>

          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              2. Data the Extension Uses
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              To provide its features, AI Workspace uses:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4" style={{ color: "var(--color-text-secondary)" }}>
              <li>
                Your ChatGPT conversations, accessible only when you are logged in and only to display and organize them locally inside the extension.
              </li>
              <li>
                Local storage (chrome.storage.local) to save your vaults, prompts, tags, and preferences.
              </li>
            </ul>
            <p className="mt-4 font-semibold" style={{ color: "var(--color-accent)" }}>
              This data never leaves your device and is not sent to our servers.
            </p>
          </section>

          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              3. Permissions Explained
            </h2>
            <p className="mb-4" style={{ color: "var(--color-text)" }}>
              AI Workspace uses the following Chrome permissions:
            </p>
            
            <div className="space-y-4">
              <div 
                className="rounded-lg border p-4"
                style={{ 
                  borderColor: "var(--color-border)",
                  background: "rgba(6, 182, 212, 0.05)"
                }}
              >
                <h3 className="font-semibold mb-2" style={{ color: "var(--color-accent)" }}>
                  • storage
                </h3>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  Used to save your vaults, prompts, preferences, and sync state locally in your browser.
                </p>
              </div>

              <div 
                className="rounded-lg border p-4"
                style={{ 
                  borderColor: "var(--color-border)",
                  background: "rgba(6, 182, 212, 0.05)"
                }}
              >
                <h3 className="font-semibold mb-2" style={{ color: "var(--color-accent)" }}>
                  • host_permissions (OpenAI domain)
                </h3>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  Used to read your ChatGPT conversations only when you choose to sync them.
                  No data is sent anywhere—everything is processed locally.
                </p>
              </div>
            </div>

            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              AI Workspace does not modify or interfere with ChatGPT in any unauthorized way.
            </p>
          </section>

          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              4. Third-Party Services
            </h2>
            <p className="mb-3" style={{ color: "var(--color-text)" }}>
              The extension does not use:
            </p>
            <ul className="list-disc list-inside space-y-2" style={{ color: "var(--color-text-secondary)" }}>
              <li>Cloud storage</li>
              <li>External servers</li>
              <li>Analytics</li>
              <li>Databases</li>
              <li>Advertising networks</li>
            </ul>
            <p className="mt-4 font-semibold" style={{ color: "var(--color-text)" }}>
              All features run locally.
            </p>
          </section>

          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              5. Data Sharing
            </h2>
            <p className="mb-3" style={{ color: "var(--color-text)" }}>
              We do not:
            </p>
            <ul className="list-disc list-inside space-y-2" style={{ color: "var(--color-text-secondary)" }}>
              <li>Sell data</li>
              <li>Share data with third parties</li>
              <li>Transfer data outside your device</li>
            </ul>
            <p className="mt-4 font-semibold" style={{ color: "var(--color-text)" }}>
              Your information stays fully under your control.
            </p>
          </section>

          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              6. Security
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              All data stored locally is handled securely using Chrome&rsquo;s built-in extension sandbox.
              We do not add any remote code or remote script execution.
            </p>
          </section>

          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              7. Contact
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              If you have any questions about this Privacy Policy, contact us at:{" "}
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
              background: "rgba(6, 182, 212, 0.08)"
            }}
          >
            <h2 
              className="text-xl font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--color-accent)" }}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Chrome Web Store Compliance
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              This Privacy Policy is written to fully comply with:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3" style={{ color: "var(--color-text-secondary)" }}>
              <li>Chrome Web Store User Data Policy</li>
              <li>EU GDPR (no personal data collected)</li>
              <li>CCPA/CPRA (no sales or sharing of personal data)</li>
            </ul>
          </section>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="border-t py-16" style={{ borderColor: "var(--color-border)" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Questions about your privacy?
          </h2>
          <p className="mb-6" style={{ color: "var(--color-text-secondary)" }}>
            We&rsquo;re here to help. Reach out anytime.
          </p>
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
        </div>
      </section>
    </main>
  );
}
