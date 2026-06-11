import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT Prompt Library: Save & Reuse Prompts | AI Workspace",
  description:
    "Build your personal prompt library for ChatGPT, Claude & Grok. Insert prompts instantly with the / shortcut, use {{variables}}, and export to JSON/CSV.",
  keywords: [
    "ChatGPT prompt library",
    "save prompts in ChatGPT",
    "ChatGPT prompt manager",
    "prompt templates",
    "reusable ChatGPT prompts",
    "AI Workspace",
  ],
  alternates: {
    canonical: "https://getaiworkspace.com/prompt-library",
  },
  openGraph: {
    title: "ChatGPT Prompt Library: Save & Reuse Prompts",
    description:
      "Build your personal prompt library for ChatGPT, Claude & Grok. Insert prompts instantly with the / shortcut and use {{variables}}.",
    url: "https://getaiworkspace.com/prompt-library",
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Prompt Library: Save & Reuse Prompts",
    description:
      "Build your personal prompt library for ChatGPT, Claude & Grok. Insert prompts instantly with the / shortcut and use {{variables}}.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
