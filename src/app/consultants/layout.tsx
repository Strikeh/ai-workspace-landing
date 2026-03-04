import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workspace for Consultants | ChatGPT Workspaces per Engagement",
  description:
    "Keep each consulting engagement in its own ChatGPT workspace. Encrypted local storage, prompt templates, and folder organisation for consultants.",
  alternates: {
    canonical: "https://getaiworkspace.com/consultants",
  },
};

export default function ConsultantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
