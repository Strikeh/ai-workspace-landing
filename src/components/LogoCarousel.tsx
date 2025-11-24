"use client";
import React from "react";
import Image from "next/image";

// Local PNG logos in /public/images/company-logo
const LOGOS: Array<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
}> = [
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
  { src: "/images/company-logo/totalEnergies.png", alt: "TotalEnergies" },
  { src: "/images/company-logo/X.png", alt: "X" },
  { src: "/images/company-logo/Youtube.png", alt: "YouTube" },
];

export default function LogoCarousel() {
  // Duplicate the list for seamless loop
  const logos = [...LOGOS, ...LOGOS];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-10">
          <p
            className="text-xs font-bold uppercase tracking-[0.3em] mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Trusted Globally
          </p>
          <p
            className="text-sm font-medium"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Our users work at these companies
          </p>
        </div>

        <div className="logo-band">
          <div className="relative overflow-hidden">
            {/* Gradient masks for smooth fade out at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#1e293b] to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#1e293b] to-transparent pointer-events-none"></div>

            <div className="logo-marquee flex items-center" aria-hidden="true">
              {logos.map((logo, i) => (
                <div key={`${logo.src}-${i}`} className="logo-item flex-shrink-0 mx-8 transition-opacity duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width ?? 160}
                    height={logo.height ?? 50}
                    className="h-8 w-auto object-contain logo-image"
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
