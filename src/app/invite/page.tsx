"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function InviteContent() {
  const searchParams = useSearchParams();
  const [refCode, setRefCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Chrome Web Store URL - Replace with actual extension ID
  const CHROME_STORE_URL =
    "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";

  useEffect(() => {
    // Get referral code from URL
    const ref = searchParams.get("ref");

    if (ref) {
      // Save to localStorage
      localStorage.setItem("aiworkspace_referral_code", ref);

      // Save to cookie as backup (30 days)
      document.cookie = `aiworkspace_ref=${ref}; max-age=2592000; path=/`;

      // Set state to show referral code on page
      setRefCode(ref);

      // Track the landing page visit (optional)
      fetch(
        "https://superprompt-api-production.up.railway.app/api/referrals/track",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            referralCode: ref,
            source: "landing_page",
            timestamp: new Date().toISOString(),
          }),
        }
      ).catch((err) => console.log("Tracking failed:", err));
    }

    setIsLoading(false);
  }, [searchParams]);

  const handleInstallClick = () => {
    // Track button click with Google Analytics (if available)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_install", {
        referral_code: refCode || "direct",
        event_category: "referral",
      });
    }

    // Redirect to Chrome Web Store
    window.location.href = CHROME_STORE_URL;
  };

  if (isLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "var(--color-bg-primary)" }}
      >
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--color-bg-primary)" }}
    >
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 cursor-pointer transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/logo-dark.svg"
                alt="AI Workspace Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-xl font-semibold text-slate-100">
                AI Workspace
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center py-20 px-5">
        <div className="max-w-2xl w-full">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6">
              <span className="text-2xl">🎉</span>
              <span className="text-cyan-400 font-medium">You're Invited!</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                background: "var(--premium-title-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Join AI Workspace Pro
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              A friend thinks you'd love AI Workspace Pro – the ultimate Chrome
              extension for supercharging your AI workflow.
            </p>

            {/* Discount Badge */}
            <div className="inline-block mb-12">
              <div className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
                <p className="relative text-2xl font-bold text-emerald-400">
                  🎁 Get 20% OFF Your First Month!
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-4 mb-12">
            {[
              {
                icon: "✨",
                title: "Unlimited Prompts & Categories",
                description:
                  "Organize your AI interactions with powerful prompt management",
              },
              {
                icon: "🔒",
                title: "Secure Encrypted Vaults",
                description:
                  "Keep your sensitive prompts safe with military-grade encryption",
              },
              {
                icon: "📊",
                title: "Advanced Chat Management",
                description:
                  "Categorize, favorite, and organize all your AI conversations",
              },
              {
                icon: "🎨",
                title: "Custom Themes & Styling",
                description:
                  "Personalize your AI workspace with beautiful themes",
              },
              {
                icon: "🚀",
                title: "Priority Support",
                description: "Get help when you need it with dedicated support",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group relative rounded-xl p-6 bg-slate-800/40 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:translate-x-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Referral Code Display (conditional) */}
          {refCode && (
            <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-center">
              <p className="text-slate-300 mb-2">
                Your referral code:{" "}
                <span className="font-mono font-bold text-amber-400 bg-slate-800/50 px-3 py-1 rounded">
                  {refCode}
                </span>
              </p>
              <p className="text-sm text-slate-400">
                This will be automatically applied when you install
              </p>
            </div>
          )}

          {/* CTA Button */}
          <button
            onClick={handleInstallClick}
            className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-[2px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
          >
            <div className="relative flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-5 text-lg font-bold text-white transition-all duration-300">
              <span>Install AI Workspace Pro</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </button>

          {/* Footer Text */}
          <p className="text-center text-slate-500 text-sm mt-8">
            Trusted by thousands of professionals worldwide
          </p>
        </div>
      </div>
    </div>
  );
}

export default function InvitePage() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          style={{ background: "var(--color-bg-primary)" }}
        >
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
        </div>
      }
    >
      <InviteContent />
    </Suspense>
  );
}
