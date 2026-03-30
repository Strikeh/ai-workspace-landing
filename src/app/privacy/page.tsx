import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy For AI Workspace",
  description:
    "Privacy Policy for AI Workspace covering local browser processing, optional cloud sync, account features, billing, telemetry, and trusted service providers.",
};

export default function PrivacyPage() {
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
          Privacy Policy For AI Workspace
        </h1>

        <p
          className="text-sm mb-12"
          style={{ color: "var(--color-text-muted)" }}
        >
          Last updated: March 30, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              AI Workspace is a browser extension and related service that helps
              users organize prompts, chats, notes, highlights, vaults, and
              workflows across supported AI platforms such as ChatGPT and other
              supported services.
            </p>
            <p style={{ color: "var(--color-text)" }}>
              This Privacy Policy explains what user data AI Workspace collects,
              accesses, stores, uses, and shares, including data processed
              locally in your browser and data processed through our backend
              services or trusted service providers.
            </p>
            <p style={{ color: "var(--color-text)" }}>
              By using AI Workspace, you agree to the practices described in
              this Privacy Policy.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              1. Scope
            </h2>
            <ul
              className="list-disc list-inside space-y-2 mt-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>the AI Workspace browser extension</li>
              <li>our website and support pages</li>
              <li>our backend APIs and cloud features</li>
              <li>
                optional account, sync, billing, referral, and support features
                related to AI Workspace
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              2. Categories Of User Data We Process
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              Depending on which features you use, AI Workspace may process the
              following categories of data:
            </p>

            <div className="space-y-6 mt-6">
              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  A. Account And Identity Data
                </h3>
                <p style={{ color: "var(--color-text)" }}>We may process:</p>
                <ul
                  className="list-disc list-inside space-y-2 mt-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li>your email address</li>
                  <li>
                    your name or profile information if provided through sign-in
                  </li>
                  <li>
                    Google account information when you choose Google sign-in
                  </li>
                  <li>
                    platform account identifiers, such as your OpenAI/ChatGPT
                    user ID and other linked platform identifiers where
                    applicable
                  </li>
                  <li>
                    authentication tokens or session-linked credentials required
                    to keep you signed in and verify your account status
                  </li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  B. Extension Content And Workspace Data
                </h3>
                <p style={{ color: "var(--color-text)" }}>
                  We may process data you create or organize in the extension,
                  including:
                </p>
                <ul
                  className="list-disc list-inside space-y-2 mt-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li>prompts</li>
                  <li>vaults</li>
                  <li>folders or categories</li>
                  <li>tags</li>
                  <li>notes</li>
                  <li>highlights</li>
                  <li>instruction profiles</li>
                  <li>preferences and settings</li>
                  <li>local workspace metadata</li>
                  <li>chat organization metadata</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  C. Supported Platform Data
                </h3>
                <p style={{ color: "var(--color-text)" }}>
                  When you use AI Workspace on supported websites, the extension
                  may access and process data from those pages in order to
                  provide its features. This may include:
                </p>
                <ul
                  className="list-disc list-inside space-y-2 mt-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li>conversation titles</li>
                  <li>conversation metadata</li>
                  <li>visible conversation content</li>
                  <li>message structure and message counts</li>
                  <li>custom GPT or assistant metadata where available</li>
                  <li>
                    UI state needed to provide features such as thread trimming,
                    highlights, prompt extraction, organization, sync, or
                    sharing
                  </li>
                </ul>
                <p className="mt-3" style={{ color: "var(--color-text)" }}>
                  By default, much of this processing happens locally in your
                  browser. However, some optional features may transmit limited
                  related data to our servers or to trusted service providers as
                  described below.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  D. Subscription And Billing Data
                </h3>
                <p style={{ color: "var(--color-text)" }}>
                  If you use paid features or manage a subscription, we may
                  process:
                </p>
                <ul
                  className="list-disc list-inside space-y-2 mt-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li>subscription status</li>
                  <li>plan type</li>
                  <li>billing-related identifiers</li>
                  <li>checkout session identifiers</li>
                  <li>customer identifiers from payment processors</li>
                  <li>
                    limited billing contact information such as email address
                  </li>
                </ul>
                <p className="mt-3" style={{ color: "var(--color-text)" }}>
                  We do not store full payment card numbers in the extension.
                  Payments are handled by our payment processors.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  E. Telemetry, Diagnostics, And Usage Data
                </h3>
                <p style={{ color: "var(--color-text)" }}>
                  We may process limited product usage and diagnostic data,
                  including:
                </p>
                <ul
                  className="list-disc list-inside space-y-2 mt-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li>feature usage events</li>
                  <li>extension version</li>
                  <li>browser type</li>
                  <li>platform type</li>
                  <li>plan tier</li>
                  <li>timestamps</li>
                  <li>non-sensitive diagnostic or operational metadata</li>
                  <li>crash or error information</li>
                </ul>
                <p className="mt-3" style={{ color: "var(--color-text)" }}>
                  This information helps us monitor reliability, performance,
                  adoption of features, and service quality.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  F. Cloud Sync Data
                </h3>
                <p style={{ color: "var(--color-text)" }}>
                  If you enable optional cloud sync or account-backed features,
                  we may process and store data such as:
                </p>
                <ul
                  className="list-disc list-inside space-y-2 mt-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li>vault data</li>
                  <li>category data</li>
                  <li>tag data</li>
                  <li>chat metadata</li>
                  <li>
                    other workspace records necessary to sync your extension
                    data across devices or browser sessions
                  </li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  G. Referral, Invitation, And Marketing Program Data
                </h3>
                <p style={{ color: "var(--color-text)" }}>
                  If you use referral or invite features, we may process:
                </p>
                <ul
                  className="list-disc list-inside space-y-2 mt-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li>your referral code</li>
                  <li>referral attribution data</li>
                  <li>invitee email addresses that you provide</li>
                  <li>referral claim status</li>
                  <li>
                    campaign or affiliate attribution identifiers where
                    applicable
                  </li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  H. Support And Contact Data
                </h3>
                <p style={{ color: "var(--color-text)" }}>
                  If you contact us, we may process:
                </p>
                <ul
                  className="list-disc list-inside space-y-2 mt-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li>your email address</li>
                  <li>your message</li>
                  <li>attachments or screenshots you choose to send</li>
                  <li>
                    related account or technical details needed to respond to
                    your request
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              3. How We Collect User Data
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              We collect or access user data from the following sources:
            </p>
            <ul
              className="list-disc list-inside space-y-2 mt-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>
                directly from you when you create content, sign in, contact us,
                purchase a subscription, or use sync/referral features
              </li>
              <li>
                from your browser through extension APIs such as storage, tabs,
                scripting, identity, and active site access
              </li>
              <li>
                from supported AI service websites when the extension runs on
                those sites and you use AI Workspace features there
              </li>
              <li>
                from our backend APIs used for authentication, subscription
                verification, sync, announcements, referrals, usage handling,
                and related services
              </li>
              <li>
                from trusted service providers used for payments,
                authentication, hosting, diagnostics, communications, or other
                infrastructure
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              4. How We Use User Data
            </h2>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>provide the core functionality of the extension</li>
              <li>
                store and organize your prompts, vaults, tags, notes, and
                settings
              </li>
              <li>
                read and structure supported AI platform data so features like
                thread trimming, highlights, prompt extraction, and organization
                can work
              </li>
              <li>authenticate users and keep accounts signed in</li>
              <li>verify subscription status and enforce plan limits</li>
              <li>
                provide optional cloud sync and restore synced data across
                devices
              </li>
              <li>process payments and manage billing</li>
              <li>
                create and manage referrals, invitations, and reward flows
              </li>
              <li>provide support and respond to contact requests</li>
              <li>
                improve product quality, security, reliability, and feature
                performance
              </li>
              <li>detect abuse, fraud, misuse, or security issues</li>
              <li>
                deliver service announcements, account notices, or in-product
                messages where relevant
              </li>
              <li>comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              5. Local Browser Storage
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              AI Workspace stores a significant amount of data locally on your
              device using browser storage technologies, which may include:
            </p>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>chrome.storage.local</li>
              <li>IndexedDB</li>
              <li>localStorage</li>
              <li>extension-managed local caches</li>
            </ul>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              Local data may include:
            </p>
            <ul
              className="list-disc list-inside space-y-2 mt-3"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>prompts</li>
              <li>vaults</li>
              <li>tags</li>
              <li>notes</li>
              <li>settings</li>
              <li>usage preferences</li>
              <li>cached platform metadata</li>
              <li>temporary extension state</li>
              <li>authentication state needed for extension features</li>
            </ul>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              Locally stored data remains on your device unless you use features
              that require transmission to our backend or to third-party
              services.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              6. When Data Leaves Your Device
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              Some AI Workspace features require data to leave your device. This
              may happen when you use features such as:
            </p>
            <ul
              className="list-disc list-inside space-y-2 mt-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>account registration or sign-in</li>
              <li>Google sign-in</li>
              <li>subscription verification</li>
              <li>checkout or billing portal access</li>
              <li>optional cloud sync</li>
              <li>referral or invitation flows</li>
              <li>support or contact forms</li>
              <li>telemetry or diagnostics</li>
              <li>chat sharing features</li>
              <li>server-backed features that require backend processing</li>
              <li>
                optional summarization or API-backed enhancement features, if
                enabled
              </li>
            </ul>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              In those cases, data may be sent to AI Workspace backend systems
              and/or trusted service providers described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              7. How We Share User Data
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              We do not sell user data.
            </p>
            <p style={{ color: "var(--color-text)" }}>
              We may share user data only in the following circumstances:
            </p>

            <div className="space-y-6 mt-6">
              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  A. With Service Providers And Infrastructure Partners
                </h3>
                <p style={{ color: "var(--color-text)" }}>
                  We may share data with service providers that help us operate
                  AI Workspace, such as providers for:
                </p>
                <ul
                  className="list-disc list-inside space-y-2 mt-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li>hosting and backend infrastructure</li>
                  <li>cloud databases and storage</li>
                  <li>payment processing and subscription management</li>
                  <li>authentication and sign-in</li>
                  <li>diagnostics, crash monitoring, and error reporting</li>
                  <li>email delivery and invitation handling</li>
                  <li>referral or affiliate attribution services</li>
                  <li>customer support tooling</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  B. With Supported AI Platform Providers
                </h3>
                <p style={{ color: "var(--color-text)" }}>
                  When you use AI Workspace on supported AI services, the
                  extension may interact with those services in your
                  authenticated session to provide requested features. Depending
                  on the feature, related data may be exchanged with:
                </p>
                <ul
                  className="list-disc list-inside space-y-2 mt-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li>OpenAI / ChatGPT</li>
                  <li>Anthropic / Claude</li>
                  <li>xAI / Grok</li>
                  <li>Google services where applicable</li>
                </ul>
                <p className="mt-3" style={{ color: "var(--color-text)" }}>
                  This happens only as needed for the functionality you choose
                  to use.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  C. With Payment Providers
                </h3>
                <p style={{ color: "var(--color-text)" }}>
                  If you purchase or manage a paid plan, relevant billing or
                  account data may be shared with payment processors such as
                  Stripe for:
                </p>
                <ul
                  className="list-disc list-inside space-y-2 mt-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li>checkout</li>
                  <li>billing portal access</li>
                  <li>payment processing</li>
                  <li>subscription lifecycle management</li>
                  <li>fraud prevention and payment compliance</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  D. With Authentication Providers
                </h3>
                <p style={{ color: "var(--color-text)" }}>
                  If you choose Google sign-in or other third-party
                  authentication methods, relevant identity data may be shared
                  with Google or the applicable authentication provider to
                  complete login and verify your identity.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  E. For Legal, Security, Or Compliance Reasons
                </h3>
                <p style={{ color: "var(--color-text)" }}>
                  We may disclose data if required to:
                </p>
                <ul
                  className="list-disc list-inside space-y-2 mt-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li>
                    comply with law, regulation, subpoena, or legal request
                  </li>
                  <li>
                    protect the rights, safety, and security of users, AI
                    Workspace, or third parties
                  </li>
                  <li>investigate fraud, abuse, or security incidents</li>
                  <li>enforce our agreements or policies</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  F. In A Business Transfer
                </h3>
                <p style={{ color: "var(--color-text)" }}>
                  If AI Workspace is involved in a merger, acquisition,
                  financing, asset sale, or similar transaction, user data may
                  be transferred as part of that transaction, subject to
                  applicable law.
                </p>
              </div>
            </div>
          </section>

          <section
            className="rounded-xl border p-6 mt-12"
            style={{
              borderColor: "var(--color-border)",
              background: "rgba(6, 182, 212, 0.05)",
            }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              8. Third Parties We May Share User Data With
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              Depending on the features you use, user data may be shared with
              some or all of the following categories of parties:
            </p>
            <ul
              className="list-disc list-inside space-y-2 mt-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>
                AI Workspace backend and infrastructure providers, including
                hosting providers such as Railway or equivalent cloud
                infrastructure
              </li>
              <li>payment processors such as Stripe</li>
              <li>authentication providers such as Google</li>
              <li>
                supported AI platform providers such as OpenAI, Anthropic, xAI,
                and Google, when your chosen feature requires interaction with
                those platforms
              </li>
              <li>
                error monitoring or diagnostics providers such as Sentry, if
                enabled
              </li>
              <li>
                email or communications providers used for invites,
                transactional emails, or support, if enabled
              </li>
              <li>referral or affiliate attribution providers, if enabled</li>
              <li>
                database and cloud storage providers that support our backend
                services
              </li>
            </ul>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              If you use a feature that sends data to one of these parties, that
              processing is governed both by this Privacy Policy and, where
              applicable, by that third party's own privacy policy.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              9. Optional Cloud Sync And Account Features
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              Some AI Workspace features are optional and only work when you use
              account-backed services. These may include:
            </p>
            <ul
              className="list-disc list-inside space-y-2 mt-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>cloud sync</li>
              <li>subscription management</li>
              <li>cross-device restore</li>
              <li>referral features</li>
              <li>account-based entitlements</li>
              <li>announcements or account-targeted notices</li>
            </ul>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              If you do not use those features, less data is transmitted to our
              servers.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              10. Telemetry And Diagnostics
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              AI Workspace may collect limited telemetry and diagnostics to
              understand how the product performs and how features are used.
            </p>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              Telemetry may include:
            </p>
            <ul
              className="list-disc list-inside space-y-2 mt-3"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>event names</li>
              <li>timestamps</li>
              <li>extension version</li>
              <li>browser type</li>
              <li>platform type</li>
              <li>plan tier</li>
              <li>non-sensitive feature metadata</li>
            </ul>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              We use this information to:
            </p>
            <ul
              className="list-disc list-inside space-y-2 mt-3"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>measure feature usage</li>
              <li>improve stability and performance</li>
              <li>diagnose issues</li>
              <li>prioritize product improvements</li>
            </ul>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              We do not use telemetry to sell user profiles or advertising
              audiences.
            </p>
            <p style={{ color: "var(--color-text)" }}>
              If telemetry controls are available in the product, you may use
              them to disable or limit telemetry collection.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              11. Payments And Billing
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              Paid features are supported through third-party payment providers.
              When you upgrade, renew, or manage your plan:
            </p>
            <ul
              className="list-disc list-inside space-y-2 mt-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>
                billing and checkout activity may be handled by Stripe or
                equivalent payment processors
              </li>
              <li>
                we may receive subscription status, customer identifiers,
                checkout session information, and limited billing contact
                information
              </li>
              <li>
                we do not receive or store full card details in the extension
                itself
              </li>
            </ul>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              Payment providers process your data under their own terms and
              privacy policies.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              12. Referrals, Invites, And Shared Links
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              If you use referral, invite, or sharing features:
            </p>
            <ul
              className="list-disc list-inside space-y-2 mt-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>we may store your referral code and referral status</li>
              <li>we may process invitee email addresses that you provide</li>
              <li>
                we may generate or track referral or campaign attribution data
              </li>
              <li>
                if you create shared conversation links or use platform share
                features, the relevant content or metadata may be shared with
                the destination platform or service at your request
              </li>
            </ul>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              You should only invite or share content with people when you have
              the right to do so.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              13. Data Retention
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              We retain user data for as long as reasonably necessary for the
              purposes described in this Privacy Policy, including to provide
              services, comply with law, resolve disputes, and enforce our
              agreements.
            </p>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              In general:
            </p>
            <ul
              className="list-disc list-inside space-y-2 mt-3"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>
                locally stored extension data remains on your device until you
                delete it, clear browser storage, or uninstall the extension
              </li>
              <li>
                synced or account-backed data may remain on our servers until
                deleted, anonymized, or no longer needed
              </li>
              <li>
                billing and subscription records may be retained for legal, tax,
                accounting, and fraud-prevention purposes
              </li>
              <li>
                telemetry and logs may be retained for product, security, and
                operational purposes for a limited period consistent with our
                internal retention practices
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              14. User Choices And Controls
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              Depending on the feature, you may be able to:
            </p>
            <ul
              className="list-disc list-inside space-y-2 mt-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>delete locally stored extension data</li>
              <li>uninstall the extension to stop future local processing</li>
              <li>sign out of your AI Workspace account</li>
              <li>disconnect Google sign-in or other authentication methods</li>
              <li>disable optional cloud sync</li>
              <li>disable optional telemetry if such controls are provided</li>
              <li>
                contact us to request deletion of account-backed or synced data,
                subject to legal and operational constraints
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              15. Security
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              We use reasonable administrative, technical, and organizational
              measures designed to protect user data. These measures may
              include:
            </p>
            <ul
              className="list-disc list-inside space-y-2 mt-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>restricted access to backend systems</li>
              <li>transport security such as HTTPS</li>
              <li>authentication controls</li>
              <li>integrity checks</li>
              <li>logging and monitoring</li>
              <li>
                platform security controls provided by browser extension
                environments
              </li>
            </ul>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              No method of transmission or storage is completely secure, so we
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              16. International Data Transfers
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              If our service providers or infrastructure operate in multiple
              countries, user data may be processed outside your country of
              residence. Where required, we take steps intended to provide
              appropriate safeguards for such transfers.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              17. Children's Privacy
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              AI Workspace is not intended for children under 13, or under the
              minimum age required by applicable law in your jurisdiction. We do
              not knowingly collect personal data from children in violation of
              applicable law.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              18. Changes To This Privacy Policy
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              We may update this Privacy Policy from time to time. If we make
              material changes, we will update the effective date and, where
              appropriate, provide additional notice in the product or on our
              website.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              19. Contact
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              If you have questions about this Privacy Policy or want to request
              help regarding your data, contact:
            </p>
            <p className="mt-4" style={{ color: "var(--color-text)" }}>
              <a
                href="mailto:support@getaiworkspace.com"
                className="font-semibold hover:underline"
                style={{ color: "var(--color-accent)" }}
              >
                support@getaiworkspace.com
              </a>
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
