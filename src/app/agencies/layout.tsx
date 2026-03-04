import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workspace for Agencies | ChatGPT Workspaces for Teams",
  description:
    "Manage multiple client projects in ChatGPT with isolated workspaces. Folder organisation, encrypted storage, and prompt libraries for agencies.",
  alternates: {
    canonical: "https://getaiworkspace.com/agencies",
  },
};

export default function AgenciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
