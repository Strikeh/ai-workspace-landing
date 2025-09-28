"use client";
import React from "react";
import Image from "next/image";

// Local PNG logos in /public/images/company-logo
const LOGOS: Array<{ src: string; alt: string; width?: number; height?: number }> = [
  { src: "/images/company-logo/amazon.png", alt: "Amazon" },
  { src: "/images/company-logo/AMD.png", alt: "AMD" },
  { src: "/images/company-logo/google.png", alt: "Google" },
  { src: "/images/company-logo/hubspot.png", alt: "HubSpot" },
  { src: "/images/company-logo/IBM.png", alt: "IBM" },
  { src: "/images/company-logo/LG.png", alt: "LG" },
  { src: "/images/company-logo/Mercedes.png", alt: "Mercedes" },
  { src: "/images/company-logo/Microsoft.png", alt: "Microsoft" },
  { src: "/images/company-logo/nike.png", alt: "Nike" },
  { src: "/images/company-logo/nvidia.png", alt: "NVIDIA" },
  { src: "/images/company-logo/Opel.png", alt: "Opel" },
  { src: "/images/company-logo/totalEnergies.png", alt: "TotalEnergies" },
  { src: "/images/company-logo/X.png", alt: "X" },
  { src: "/images/company-logo/Youtube.png", alt: "YouTube" },
];

export default function LogoCarousel() {
  // Duplicate the list for seamless loop
  const logos = [...LOGOS, ...LOGOS];

  return (
  <section className="py-12 overflow-visible" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <p className="text-center text-sm font-medium tracking-wide mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Our users work at these companies
        </p>
      </div>
      {/* Full-bleed band */}
      <div className="full-bleed">
        <div className="logo-band">
          <div className="relative">
            <div className="logo-marquee" aria-hidden="true">
              {logos.map((logo, i) => (
                <div key={`${logo.src}-${i}`} className="logo-item">
                  <span className="sr-only">{logo.alt}</span>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width ?? 200}
                    height={logo.height ?? 64}
                    className="h-auto"
                    style={{ height: "clamp(32px, 5.5vw, 64px)", width: "auto", objectFit: "contain" }}
                    priority={i < 6}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
