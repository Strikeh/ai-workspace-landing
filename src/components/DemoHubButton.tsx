"use client";

import type { SVGProps } from "react";

export default function DemoHubButton() {
  const handleClick = () => {
    const event = new CustomEvent('openDemoModal');
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleClick}
      className="demo-hub-btn cta-btn cta-btn--primary px-8 py-4 text-base"
    >
      <span className="btn-icon">
        <PlayIcon className="h-5 w-5" />
      </span>
      <span className="font-bold">Explore Demo Hub</span>
      <span className="demo-hub-pulse" aria-hidden="true" />
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
