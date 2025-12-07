"use client";

import { motion } from "framer-motion";

export const ShowcaseLines = () => {
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
          <linearGradient id="showGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="showGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          <filter id="showGlow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Vertical Line Left */}
        <motion.path
          d="M 20 10 L 20 90"
          stroke="url(#showGrad1)"
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "linear" }}
        />
        <circle r="0.3" fill="#3b82f6" filter="url(#showGlow)">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M 20 10 L 20 90"
            rotate="auto"
          />
        </circle>

        {/* Vertical Line Right */}
        <motion.path
          d="M 80 90 L 80 10"
          stroke="url(#showGrad1)"
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, delay: 0.5, ease: "linear" }}
        />
        <circle r="0.3" fill="#3b82f6" filter="url(#showGlow)">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            path="M 80 90 L 80 10"
            rotate="auto"
          />
        </circle>

        {/* Horizontal Line Top */}
        <motion.path
          d="M 10 30 L 90 30"
          stroke="url(#showGrad2)"
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: 1, ease: "linear" }}
        />
        <circle r="0.3" fill="#8b5cf6" filter="url(#showGlow)">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            path="M 10 30 L 90 30"
            rotate="auto"
          />
        </circle>

        {/* Horizontal Line Bottom */}
        <motion.path
          d="M 90 70 L 10 70"
          stroke="url(#showGrad2)"
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: 1.5, ease: "linear" }}
        />
        <circle r="0.3" fill="#8b5cf6" filter="url(#showGlow)">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            path="M 90 70 L 10 70"
            rotate="auto"
          />
        </circle>
      </svg>
    </div>
  );
};
