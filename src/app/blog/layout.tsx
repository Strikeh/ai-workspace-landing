import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | AI Workspace",
  description:
    "Latest updates, guides, and productivity tips for ChatGPT, Claude, and AI Workspace.",
  alternates: {
    canonical: "https://getaiworkspace.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
