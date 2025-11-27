"use client";

import type { SVGProps } from "react";

export default function DemoHubButton() {
  const handleClick = () => {
    const event = new CustomEvent("openDemoModal");
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleClick}
      className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg overflow-hidden whitespace-nowrap w-full sm:w-auto"
      style={{
        background: "rgba(6, 182, 212, 0.1)",
        border: "1px solid rgba(6, 182, 212, 0.3)",
        color: "var(--color-accent)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Animated background gradient on hover */}
      <span
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(14, 165, 233, 0.2) 100%)",
        }}
      />

      {/* Play icon with pulse animation */}
      <span className="relative z-10 flex items-center justify-center">
        <span className="absolute inset-0 animate-ping opacity-40">
          <PlayIcon className="h-5 w-5" />
        </span>
        <PlayIcon className="h-5 w-5 relative" />
      </span>

      <span className="relative z-10">Explore Demo Hub</span>

      {/* Shimmer effect */}
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
        }}
      />
    </button>
  );
}

function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 4v16l12-8z" fill="currentColor" />
    </svg>
  );
}
