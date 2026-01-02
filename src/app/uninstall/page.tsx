"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ChevronRight,
  MessageSquare,
  ShieldAlert,
  Star,
  ThumbsDown,
  Zap,
} from "lucide-react";

const reasons = [
  {
    id: "alternative",
    icon: <Star className="w-5 h-5" />,
    label: "I found a better alternative",
  },
  {
    id: "technical",
    icon: <ShieldAlert className="w-5 h-5" />,
    label: "It didn't work as expected",
  },
  {
    id: "complexity",
    icon: <Zap className="w-5 h-5" />,
    label: "It's too complicated",
  },
  {
    id: "not-needed",
    icon: <ThumbsDown className="w-5 h-5" />,
    label: "I don't need it anymore",
  },
  {
    id: "other",
    icon: <MessageSquare className="w-5 h-5" />,
    label: "Other reason",
  },
];

export default function UninstallPage() {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reason:
            reasons.find((r) => r.id === selectedReason)?.label ||
            selectedReason,
          feedback,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      // Still show success to user to not frustrate them, but log error
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(6,182,212,0.15)] via-[rgba(15,23,42,0.0)] to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo-dark.svg"
              alt="AI Workspace Logo"
              width={64}
              height={64}
              className="h-16 w-16"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-[linear-gradient(135deg,#22d3ee_0%,#38bdf8_50%,#818cf8_100%)]">
            We're sorry to see you go
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Your feedback helps us improve AI Workspace for everyone. Please let
            us know why you decided to uninstall.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[rgba(30,41,59,0.4)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 shadow-2xl"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reasons.map((reason) => (
                  <div
                    key={reason.id}
                    onClick={() => setSelectedReason(reason.id)}
                    className={`cursor-pointer relative group p-4 rounded-xl border transition-all duration-300 ${
                      selectedReason === reason.id
                        ? "bg-[rgba(6,182,212,0.1)] border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                        : "bg-[rgba(15,23,42,0.4)] border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.1)] hover:bg-[rgba(30,41,59,0.6)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg transition-colors ${
                          selectedReason === reason.id
                            ? "bg-cyan-500/20 text-cyan-400"
                            : "bg-slate-800/50 text-slate-400 group-hover:text-slate-300"
                        }`}
                      >
                        {reason.icon}
                      </div>
                      <span
                        className={`font-medium ${
                          selectedReason === reason.id
                            ? "text-cyan-100"
                            : "text-slate-300 group-hover:text-slate-200"
                        }`}
                      >
                        {reason.label}
                      </span>
                      {selectedReason === reason.id && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400">
                          <Check className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-slate-300">
                  Anything else you'd like to share? (Optional)
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us how we can improve..."
                  className="w-full h-32 bg-[rgba(15,23,42,0.6)] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                <Link
                  href="/"
                  className="px-6 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 transition-colors font-medium"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={!selectedReason || isSubmitting}
                  className={`px-8 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedReason && !isSubmitting
                      ? "bg-cyan-500 hover:bg-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                      : "bg-slate-800 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Submit Feedback"}
                  {!isSubmitting && <ChevronRight className="w-4 h-4" />}
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-cyan-400">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Thank you for your feedback
              </h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                We appreciate your input. It helps us build a better product for
                the community.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[rgba(30,41,59,0.6)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(30,41,59,0.8)] hover:border-cyan-500/30 text-slate-200 transition-all"
              >
                Return to Home
              </Link>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            Made a mistake?{" "}
            <Link
              href="https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Reinstall AI Workspace
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
