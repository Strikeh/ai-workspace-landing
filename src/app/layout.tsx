import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "AI Workspace is the privacy-first AI productivity hub that keeps prompts, conversations, images, and notes encrypted on-device while connecting ChatGPT, Claude, and Grok.";

export const metadata: Metadata = {
  title: "AI Workspace | Privacy-first AI productivity hub",
  description,
  openGraph: {
    title: "AI Workspace | Privacy-first AI productivity hub",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workspace | Privacy-first AI productivity hub",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Subtle scroll-driven aurora parallax layer */}
        <div className="aurora-parallax" aria-hidden />
        {children}
      </body>
    </html>
  );
}
