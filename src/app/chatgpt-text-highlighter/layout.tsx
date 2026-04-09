import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT Text Highlighter | AI Workspace",
  description:
    "Highlight important text in ChatGPT, Claude, and Grok with AI Workspace. Save highlights permanently, navigate them instantly, and keep long AI conversations organized.",
  keywords: [
    "ChatGPT text highlighter",
    "ChatGPT highlight tool",
    "highlight text in ChatGPT",
    "AI conversation organizer",
    "Claude text highlighter",
    "Grok text highlighter",
    "AI Workspace",
  ],
  alternates: {
    canonical: "https://getaiworkspace.com/chatgpt-text-highlighter",
  },
  openGraph: {
    title: "ChatGPT Text Highlighter | AI Workspace",
    description:
      "Highlight important text in ChatGPT, Claude, and Grok with AI Workspace. Save highlights permanently and navigate long AI conversations faster.",
    url: "https://getaiworkspace.com/chatgpt-text-highlighter",
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Text Highlighter | AI Workspace",
    description:
      "Highlight important text in ChatGPT, Claude, and Grok with AI Workspace. Save highlights permanently and navigate long AI conversations faster.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
