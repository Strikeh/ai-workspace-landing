import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fix ChatGPT Getting Slow in Long Conversations | AI Workspace",
  description:
    "ChatGPT lags and slows to a crawl in long chats. Smart Thread Trimming in AI Workspace trims older messages out of the page so ChatGPT stays fast and responsive — instantly reversible, with dramatically lower memory use. Free to start.",
  keywords: [
    "chatgpt slow",
    "chatgpt lag",
    "chatgpt slow long conversations",
    "chatgpt gets slower with long conversations",
    "fix chatgpt lag",
    "chatgpt performance",
    "chatgpt freezing",
    "chatgpt typing lag",
    "smart thread trimming",
    "AI Workspace",
  ],
  alternates: {
    canonical: "https://getaiworkspace.com/fix-chatgpt-lag",
  },
  openGraph: {
    title: "Fix ChatGPT Getting Slow in Long Conversations | AI Workspace",
    description:
      "Smart Thread Trimming keeps ChatGPT fast in long conversations by trimming older messages out of the page — instantly reversible and privacy-safe. Part of AI Workspace.",
    url: "https://getaiworkspace.com/fix-chatgpt-lag",
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix ChatGPT Getting Slow in Long Conversations | AI Workspace",
    description:
      "Smart Thread Trimming keeps ChatGPT fast in long conversations — instantly reversible, privacy-safe, and free to start.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
