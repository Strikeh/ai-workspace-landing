import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom ChatGPT Themes — GPTheme | AI Workspace",
  description:
    "Personalize ChatGPT with GPTheme: change colors and fonts, control chat and prompt width, go full width, hide the header and footer, and switch light or dark themes in one click. Part of AI Workspace — 100% local and free to start.",
  keywords: [
    "chatgpt theme",
    "chatgpt themes",
    "customize chatgpt",
    "chatgpt custom theme",
    "change chatgpt colors",
    "chatgpt font",
    "chatgpt wider chat",
    "chatgpt chat width",
    "hide chatgpt header",
    "chatgpt dark theme",
    "chatgpt appearance",
    "GPTheme",
    "AI Workspace",
  ],
  alternates: {
    canonical: "https://getaiworkspace.com/chatgpt-themes",
  },
  openGraph: {
    title: "Custom ChatGPT Themes — GPTheme | AI Workspace",
    description:
      "Recolor and restyle ChatGPT with GPTheme: colors, fonts, layout width, full-width mode, and hide header/footer. Switch light or dark in one click. Part of AI Workspace.",
    url: "https://getaiworkspace.com/chatgpt-themes",
    siteName: "AI Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom ChatGPT Themes — GPTheme | AI Workspace",
    description:
      "Recolor and restyle ChatGPT with GPTheme: colors, fonts, layout width, full-width mode, and hide header/footer — all in one click.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
