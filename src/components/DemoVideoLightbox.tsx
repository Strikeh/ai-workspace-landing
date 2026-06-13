"use client";

import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";

interface DemoVideoLightboxProps {
  src: string;
  poster?: string;
  label: string;
}

/**
 * A demo video that plays inline (autoplay, muted, looping) and can be clicked
 * to open full-screen in a lightbox with playback controls. Close with the X
 * button, a click on the backdrop, or the Escape key.
 */
export function DemoVideoLightbox({ src, poster, label }: DemoVideoLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      {/* Inline player — click to expand */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Expand demo: ${label}`}
        className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B1120] shadow-2xl cursor-zoom-in"
      >
        <video
          src={src}
          poster={poster}
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
          aria-label={label}
          className="block h-auto w-full"
        />
        {/* Hover affordance */}
        <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        <span className="pointer-events-none absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" />
          Expand
        </span>
      </button>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <video
            src={src}
            poster={poster}
            controls
            autoPlay
            loop
            playsInline
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-auto max-w-6xl rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
