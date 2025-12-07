"use client";

import { motion } from "framer-motion";

export const ProblemSolutionLines = () => {
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
          <linearGradient id="probGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
            <stop offset="50%" stopColor="#f97316" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="probGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          <filter id="probGlow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connecting Line: Card 1 to Card 2 */}
        <motion.path
          d="M 16 50 Q 33 20, 50 50"
          stroke="url(#probGrad1)"
          strokeWidth="0.15"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <circle r="0.3" fill="#f97316" filter="url(#probGlow)">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M 16 50 Q 33 20, 50 50"
            rotate="auto"
          />
        </circle>

        {/* Connecting Line: Card 2 to Card 3 */}
        <motion.path
          d="M 50 50 Q 66 80, 84 50"
          stroke="url(#probGrad2)"
          strokeWidth="0.15"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        />
        <circle r="0.3" fill="#06b6d4" filter="url(#probGlow)">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M 50 50 Q 66 80, 84 50"
            rotate="auto"
          />
        </circle>
      </svg>
    </div>
  );
};
