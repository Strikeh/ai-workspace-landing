import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "AI Workspace - Privacy-First AI Productivity Hub for ChatGPT, Claude & Grok",
  description:
    "AI Workspace is the ultimate privacy-first productivity hub for AI users. Organize prompts, conversations, images, and notes locally with encrypted vaults. Seamlessly connect ChatGPT, Claude, and Grok without cloud storage. Free Chrome extension for secure, local-first AI workflows.",
  url: "https://getaiworkspace.com",
  ogImage: "https://getaiworkspace.com/og-image.png",
  keywords: [
    "AI productivity",
    "ChatGPT extension",
    "Claude productivity",
    "Grok extension",
    "AI workspace",
    "prompt manager",
    "local AI storage",
    "privacy-first AI",
    "encrypted AI vault",
    "ChatGPT organizer",
    "AI conversation manager",
    "Chrome AI extension",
    "ChatGPT privacy",
    "AI notes manager",
    "GPT store",
    "AI image gallery",
    "local-first AI",
    "secure AI workspace",
    "ChatGPT folder",
    "AI prompt library",
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
    creator: "@aiworkspace", // Update met je echte Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
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
              operatingSystem: "Chrome, Edge, Firefox",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "4689",
              },
              description: siteConfig.description,
              featureList: [
                "Local-first encrypted storage",
                "Multi-platform AI integration (ChatGPT, Claude, Grok)",
                "Prompt management and organization",
                "Conversation and notes manager",
                "Image gallery with AI-generated content",
                "GPT Store integration",
                "Zero telemetry and cloud-free",
              ],
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
                    text: "Free: limited prompts and notes, 1 vault, no encryption. Pro (€10/month): unlimited prompts, vaults, and notes, encrypted storage, full Image Gallery, GPT Manager, multi-platform support, and version history.",
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
      </body>
    </html>
  );
}
