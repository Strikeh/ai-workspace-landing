import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Workspace",
  description:
    "AI Workspace privacy policy covering local browser storage, optional account features, cloud sync, telemetry, billing, and trusted service providers.",
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
