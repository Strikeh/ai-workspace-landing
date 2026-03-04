import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workspace for Social Media Managers | ChatGPT Organiser",
  description:
    "Manage content calendars, brand voices, and campaign prompts for multiple clients in ChatGPT. Separate workspaces with local storage.",
  alternates: {
    canonical: "https://getaiworkspace.com/social-media-managers",
  },
};

export default function SocialMediaManagersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
