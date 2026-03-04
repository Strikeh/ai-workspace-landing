import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workspace for Creators | ChatGPT Workspaces for Content Creators",
  description:
    "Keep your content projects, brand voices, and creative prompts organised in ChatGPT. Separate workspaces for every channel and campaign.",
  alternates: {
    canonical: "https://getaiworkspace.com/creators",
  },
};

export default function CreatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
