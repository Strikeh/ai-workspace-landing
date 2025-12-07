"use client";

import { motion } from "framer-motion";

export const HeroConnectionLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block select-none z-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Line 1: Video Top to Title */}
        <motion.path
          d="M 75 30 C 60 30, 50 20, 25 20"
          stroke="url(#grad1)"
          strokeWidth="0.2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <circle r="0.4" fill="#22d3ee" filter="url(#glow)">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M 75 30 C 60 30, 50 20, 25 20"
            rotate="auto"
          />
        </circle>

        {/* Line 2: Video Middle to Features */}
        <motion.path
          d="M 75 50 C 60 50, 50 60, 25 60"
          stroke="url(#grad2)"
          strokeWidth="0.2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />
        <circle r="0.4" fill="#818cf8" filter="url(#glow)">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M 75 50 C 60 50, 50 60, 25 60"
            rotate="auto"
          />
        </circle>

        {/* Line 3: Video Bottom to CTA */}
        <motion.path
          d="M 75 70 C 60 70, 50 80, 25 80"
          stroke="url(#grad3)"
          strokeWidth="0.2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        />
        <circle r="0.4" fill="#c084fc" filter="url(#glow)">
          <animateMotion
            dur="5s"
            repeatCount="indefinite"
            path="M 75 70 C 60 70, 50 80, 25 80"
            rotate="auto"
          />
        </circle>
      </svg>
    </div>
  );
};
