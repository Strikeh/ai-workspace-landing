import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { RecentSalesNotification } from "@/components/RecentSalesNotification";
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
  title: "ChatGPT Workspaces | Separate Context for Freelancers & Consultants",
  description:
    "Create unlimited workspaces inside ChatGPT. Separate clients, projects, and personal chats with complete context isolation. Built for freelancers, consultants, and developers. Works with ChatGPT, Claude & Grok. Free to start. 4.5★ rated Chrome extension. Privacy-first, local-only storage.",
  url: "https://getaiworkspace.com",
  ogImage: "https://getaiworkspace.com/og-image.png",
  keywords: [
    // Primary workspaces keywords
    "chatgpt workspaces",
    "chatgpt workspace extension",
    "separate chatgpt contexts",
    "chatgpt project organizer",
    "chatgpt for freelancers",
    "chatgpt for consultants",
    "chatgpt multiple projects",
    "chatgpt context isolation",
    // Primary extension keywords
    "chatgpt extension",
    "chatgpt chrome extension",
    "best chatgpt extension",
    "chatgpt organizer",
    "chatgpt productivity tool",
    // Target audience keywords
    "chatgpt for developers",
    "chatgpt for agencies",
    "freelancer chatgpt tool",
    "consultant ai tools",
    "indie builder chatgpt",
    "chatgpt client management",
    // Feature-specific keywords
    "chatgpt prompt manager",
    "chatgpt conversation manager",
    "chatgpt folder organizer",
    "AI workspace manager",
    "prompt library chrome extension",
    "chatgpt vault",
    "chatgpt export",
    // Platform keywords
    "claude extension",
    "grok extension",
    "multi-platform ai tool",
    "AI conversation organizer",
    // Privacy & Security keywords
    "private chatgpt extension",
    "encrypted ai storage",
    "local chatgpt storage",
    "privacy chatgpt tool",
    "secure ai workspace",
    "chatgpt data privacy",
    // Long-tail keywords
    "organize chatgpt conversations by project",
    "separate chatgpt chats by client",
    "switch between chatgpt projects",
    "chatgpt workspace switcher",
    "multiple chatgpt accounts alternative",
    "organize chatgpt for multiple clients",
    "chatgpt folder structure",
    "chatgpt power user tools",
    "best chrome extension for chatgpt",
    // Performance keywords
    "lightweight chatgpt extension",
    "fast chatgpt extension",
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
        alt: "ChatGPT Workspaces - Separate Context for Freelancers & Consultants",
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
                  "https://discord.gg/adx5DTrQEp",
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
                    billingDuration: "P1Y",
                    billingIncrement: 1,
                  },
                  availability: "https://schema.org/InStock",
                  description:
                    "Annual billing: $9.99/month or Monthly billing: $11.99/month with unlimited prompts, encrypted storage, and premium features",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "34",
                reviewCount: "34",
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
                "One-click export to Markdown/JSON/TXT/PDF",
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
                "https://discord.gg/adx5DTrQEp",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@getaiworkspace.com",
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

        {/* Structured Data - FAQPage - Comprehensive */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Can I use AI Workspace extension for free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! The core features are free forever. You get access to custom workspaces, basic prompt management, and local history without paying a dime.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the difference between Free and Pro?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Free includes limited prompts and notes, 1 vault, and no encryption. Pro ($9.99/month billed annually or $11.99/month billed monthly) offers unlimited prompts, vaults, and notes, encrypted storage, full Image Gallery, unlimited folders & categories, pinned messages, and multi-platform support.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I install the extension on Microsoft Edge or Firefox?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Currently, AI Workspace is optimized for Google Chrome. We are working on support for Microsoft Edge and Firefox, which will be available soon.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is my data stored securely?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. All prompts, notes, and chats are saved locally in vaults. Private vaults are protected with AES-256 encryption. Nothing is sent to external servers unless you manually export.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are my chats saved anywhere other than my personal device?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Unlike some other extensions (e.g., Superpower ChatGPT) that may sync your data to their servers, AI Workspace keeps 100% of your data locally on your device. We have zero access to your chats.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I request a feature or report a bug?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We love feedback! You can join our Discord community at https://discord.gg/adx5DTrQEp to chat directly with the developers, or send us an email at support@getaiworkspace.com.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I cancel anytime?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can cancel your Pro subscription at any time via the Stripe customer portal. You'll keep your Pro features until the end of your billing period.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Structured Data - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://getaiworkspace.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Features",
                  item: "https://getaiworkspace.com#features",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Pricing",
                  item: "https://getaiworkspace.com#pricing",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Blog",
                  item: "https://getaiworkspace.com/blog",
                },
              ],
            }),
          }}
        />

        {/* Structured Data - Product Reviews & Ratings */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "AI Workspace Chrome Extension",
              description: siteConfig.description,
              brand: {
                "@type": "Brand",
                name: "AI Workspace",
              },
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "0",
                highPrice: "9.99",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "34",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  datePublished: "2026-02-23",
                  reviewBody:
                    "AI Workspace Pro is a powerful productivity extension that enhances the ChatGPT experience. With an intuitive sidebar and organized prompt manager, it helps users save, categorize, and quickly access prompts, boosting efficiency. The clean interface and smart workflow tools make repetitive tasks faster and smoother. Ideal for professionals and frequent users, it significantly improves productivity and overall AI interaction.",
                  author: {
                    "@type": "Person",
                    name: "Lazar Antic",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                },
                {
                  "@type": "Review",
                  datePublished: "2026-02-21",
                  reviewBody:
                    "AI Workspace Pro is a solid productivity booster for anyone who uses ChatGPT regularly. The prompt manager makes it easy to organize and reuse prompts across different projects, and the sidebar workspace keeps everything accessible without leaving the page. I like how it structures conversations into folders so nothing gets lost. The trimming feature for long threads is particularly useful. A well-thought-out tool that genuinely improves the ChatGPT workflow.",
                  author: {
                    "@type": "Person",
                    name: "Gimme Video",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                },
                {
                  "@type": "Review",
                  datePublished: "2026-01-30",
                  reviewBody:
                    "This extension is a must-have for AI power users; it's polished, free for core features, and boosts productivity massively.",
                  author: {
                    "@type": "Person",
                    name: "Fargin tech",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                },
                {
                  "@type": "Review",
                  datePublished: "2026-02-23",
                  reviewBody:
                    "If you use ChatGPT, Gemini or Grok frequently this is a must-have. It helps you a lot with your prompts, workflow, organization and AI performance. When you learn it, it becomes essential for AI conversations. The pro plans are really worth it.",
                  author: {
                    "@type": "Person",
                    name: "Deniz",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "4",
                    bestRating: "5",
                  },
                },
              ],
            }),
          }}
        />

        {/* PromoteKit Affiliate Tracking Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = 'https://cdn.promotekit.com/promotekit.js';
                script.setAttribute('data-promotekit', 'aiworkspace');
                script.async = true;
                document.head.appendChild(script);
              })();
            `,
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
        <RecentSalesNotification />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
