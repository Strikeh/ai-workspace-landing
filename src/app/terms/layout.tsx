import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AI Workspace",
  description:
    "AI Workspace terms of service. Free and Pro plan conditions, billing, and usage policies.",
  alternates: {
    canonical: "https://getaiworkspace.com/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
