import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workspace for Students | Organise ChatGPT for Studies",
  description:
    "Separate your subjects, research projects, and essay drafts in ChatGPT. Local storage, prompt templates, and folder organisation for students.",
  alternates: {
    canonical: "https://getaiworkspace.com/students",
  },
};

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
