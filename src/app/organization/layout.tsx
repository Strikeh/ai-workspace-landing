import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT Folders & Organization: Tame Your Sidebar | AI Workspace",
  description:
    "Organize ChatGPT with unlimited nested folders, color-coded tags, pins, bulk actions, and full-text search — across ChatGPT, Claude & Grok.",
  keywords: [
    "ChatGPT folders",
    "organize ChatGPT conversations",
    "ChatGPT organizer",
    "ChatGPT tags",
    "ChatGPT bulk delete",
    "AI Workspace",
  ],
  alternates: {
    canonical: "https://getaiworkspace.com/organization",
  },
  openGraph: {
    title: "ChatGPT Folders & Organization: Tame Your Sidebar",
    description:
      "Organize ChatGPT with unlimited nested folders, color-coded tags, pins, bulk actions, and full-text search.",
    url: "https://getaiworkspace.com/organization",
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Folders & Organization: Tame Your Sidebar",
    description:
      "Organize ChatGPT with unlimited nested folders, color-coded tags, pins, bulk actions, and full-text search.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
