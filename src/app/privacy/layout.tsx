import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Workspace",
  description:
    "AI Workspace privacy policy. All data stored locally — no tracking, no external servers, full transparency.",
  alternates: {
    canonical: "https://getaiworkspace.com/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
