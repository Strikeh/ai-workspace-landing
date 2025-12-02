import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteConfig = {
  name: "AI Workspace",
  title:
    "AI Workspace - Best ChatGPT Chrome Extension | Organize Prompts & Conversations",
  description:
    "#1 ChatGPT Chrome extension for power users. Organize prompts, conversations, and AI workflows locally with encrypted vaults. Works with ChatGPT, Claude & Grok. Free to start. 4.9★ rating from 4,600+ users. Privacy-first, zero telemetry, local-only storage.",
  url: "https://getaiworkspace.com",
  ogImage: "https://getaiworkspace.com/og-image.png",
  keywords: [
    // Primary keywords (high search volume)
    "chatgpt extension",
    "chatgpt chrome extension",
    "best chatgpt extension",
    "chatgpt organizer",
    "chatgpt prompt manager",
    "chatgpt conversation manager",
    "chatgpt productivity tool",
    "chatgpt folder organizer",
    // Secondary keywords
    "AI productivity extension",
    "AI workspace manager",
    "prompt library chrome extension",
    "claude extension",
    "grok extension",
    "AI conversation organizer",
    "chatgpt vault",
    "chatgpt notes",
    "chatgpt export",
    // Privacy & Security keywords
    "private chatgpt extension",
    "encrypted ai storage",
    "local chatgpt storage",
    "privacy chatgpt tool",
    "secure ai workspace",
    "chatgpt data privacy",
    // Feature-specific keywords
    "chatgpt image gallery",
    "gpt store extension",
    "ai prompt templates",
    "chatgpt automation",
    "multi-platform ai tool",
    "chatgpt workflow manager",
    // Long-tail keywords
    "organize chatgpt conversations",
    "save chatgpt prompts",
    "chatgpt folder structure",
    "export chatgpt history",
    "chatgpt power user tools",
    "best chrome extension for chatgpt",
    "chatgpt productivity booster",
    // Performance & Anti-bloat keywords
    "lightweight chatgpt extension",
    "fast chatgpt extension",
    "no bloatware chatgpt tool",
    "clean chatgpt interface",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AI Workspace - Privacy-First AI Productivity Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@Strikeh82",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional SEO optimizations */}
        <link rel="canonical" href={siteConfig.url} />
        <meta name="theme-color" content="#14b8a6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "AI Workspace",
              applicationCategory: "ProductivityApplication",
              applicationSubCategory: "Browser Extension",
              operatingSystem: "Chrome, Edge, Firefox",
              browserRequirements:
                "Requires Chrome 90+, Edge 90+, or Firefox 88+",
              softwareVersion: "2.0",
              datePublished: "2024-01-01",
              author: {
                "@type": "Organization",
                name: "AI Workspace",
                url: "https://getaiworkspace.com",
                logo: "https://getaiworkspace.com/images/logo-dark.svg",
                sameAs: [
                  "https://x.com/Strikeh82",
                  "https://github.com/Strikeh",
                  "https://www.linkedin.com/in/dirk-lammers-345a26397/",
                  "https://discord.gg/9wESDrQN",
                ],
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "Free Plan",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  description: "Free forever with core features",
                },
                {
                  "@type": "Offer",
                  name: "Pro Plan",
                  price: "9.99",
                  priceCurrency: "USD",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "9.99",
                    priceCurrency: "USD",
                    unitText: "MONTH",
                  },
                  availability: "https://schema.org/InStock",
                  description:
                    "Unlimited prompts, vaults, and advanced features",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "4689",
                reviewCount: "1247",
              },
              description: siteConfig.description,
              screenshot:
                "https://getaiworkspace.com/images/carousel/BrandBird%202025-11-20%2011.36.08.png",
              featureList: [
                "Local-first encrypted storage with AES-256",
                "Multi-platform AI integration (ChatGPT, Claude, Grok)",
                "Advanced prompt management and organization",
                "Conversation history and notes manager",
                "AI-generated image gallery and export tools",
                "GPT Store integration for custom GPTs",
                "Zero telemetry and 100% cloud-free",
                "Folder-based organization system",
                "One-click export to Markdown/JSON/PDF",
                "Dark/Light themes with customization",
                "Multi-language support (EN/FR/NL)",
                "Advanced search and filtering",
              ],
              keywords:
                "chatgpt extension, chrome extension, ai productivity, prompt manager, conversation organizer",
            }),
          }}
        />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AI Workspace",
              url: siteConfig.url,
              logo: "https://getaiworkspace.com/images/logo-dark.svg",
              sameAs: [
                "https://x.com/Strikeh82",
                "https://github.com/Strikeh",
                "https://www.linkedin.com/in/dirk-lammers-345a26397/",
                "https://discord.gg/9wESDrQN",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "ai.workspace.extension@gmail.com",
                contactType: "customer support",
              },
            }),
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteConfig.name,
              url: siteConfig.url,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteConfig.url}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Structured Data - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is my data stored securely in AI Workspace?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. All prompts, notes, and chats are saved locally in vaults. Private vaults are protected with AES-256 encryption, optional passwords, and auto-lock when inactive. Nothing is sent to external servers unless you manually export.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which AI platforms does AI Workspace support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AI Workspace integrates with ChatGPT, Claude, and Grok out of the box. You can run the same prompts across platforms, switch with one click, and manage all your AI interactions in one place.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the difference between Free and Pro?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Free: limited prompts and notes, 1 vault, no encryption. Pro ($9.99/month): unlimited prompts, vaults, and notes, encrypted storage, full Image Gallery, GPT Manager, multi-platform support, and version history.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Subtle scroll-driven aurora parallax layer */}
        <div className="aurora-parallax" aria-hidden />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
