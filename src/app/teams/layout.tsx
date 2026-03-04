import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workspace for Teams | Shared ChatGPT Workspaces",
  description:
    "Organise ChatGPT for your whole team with shared prompt libraries, folder structures, and local-first encrypted storage.",
  alternates: {
    canonical: "https://getaiworkspace.com/teams",
  },
};

export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
