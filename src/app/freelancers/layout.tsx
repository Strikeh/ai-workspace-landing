import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workspace for Freelancers | Separate ChatGPT per Client",
  description:
    "Switch between client contexts instantly in ChatGPT. Isolated workspaces, reusable prompt libraries, and AES-256 encrypted storage for freelancers.",
  alternates: {
    canonical: "https://getaiworkspace.com/freelancers",
  },
};

export default function FreelancersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
