import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT Highlighting & Thread Trimming | AI Workspace",
  description:
    "Enhance your ChatGPT experience with AI Workspace: highlight important text, trim long chats, and work 80% faster. Free Chrome extension.",
  alternates: {
    canonical: "https://getaiworkspace.com/chatgpt-text-highlighter",
  },
  openGraph: {
    title: "ChatGPT Highlighting & Thread Trimming | AI Workspace",
    description:
      "Enhance your ChatGPT experience with AI Workspace: highlight important text, trim long chats, and work 80% faster.",
    url: "https://getaiworkspace.com/chatgpt-text-highlighter",
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
