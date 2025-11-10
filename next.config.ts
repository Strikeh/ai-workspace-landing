import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* SEO & Performance Optimizations */

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Add your image domains if using external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com", // Voor YouTube thumbnails
        port: "",
        pathname: "/vi/**",
      },
    ],
  },

  // Compression
  compress: true,

  // Generate sitemap automatically
  // sitemap wordt gegenereerd via app/sitemap.ts

  // Headers voor security & SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
        ],
      },
    ];
  },

  // Redirects (indien nodig)
  async redirects() {
    return [
      // Voorbeeld: redirect old URLs naar nieuwe
      // {
      //   source: '/old-page',
      //   destination: '/',
      //   permanent: true,
      // },
    ];
  },

  // Experimental features voor betere performance
  experimental: {
    optimizePackageImports: ["@/components"],
  },
};

export default nextConfig;
