"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FolderPlus,
  Library,
  MessageSquare,
  Pin,
  Rocket,
  FolderOpen,
  Zap,
  Palette,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Pin the Extension",
    description:
      "Click the puzzle piece icon in your browser toolbar and pin AI Workspace for quick access.",
    icon: <Pin className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    title: "Open ChatGPT or Claude",
    description:
      "Navigate to your favorite AI chat interface. AI Workspace automatically integrates with the sidebar.",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "Create Your First Folder",
    description:
      "Organize your chats by project or topic. Just drag and drop conversations into folders.",
    icon: <FolderPlus className="w-6 h-6" />,
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    title: "Explore Prompt Library",
    description:
      "Save your best prompts and reuse them instantly with the built-in prompt manager.",
    icon: <Library className="w-6 h-6" />,
    color: "from-amber-500 to-orange-500",
  },
];

const featureCategories = [
  {
    icon: FolderOpen,
    title: "Organization",
    description:
      "Nested folders, tags, and smart search to keep your chats organized.",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "73% memory saving, faster navigation, and thread trimming.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: MessageSquare,
    title: "Prompt Library",
    description: "Save, organize, and instantly reuse your best prompts.",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Palette,
    title: "Customization",
    description: "Premium themes, dark mode, and custom layout options.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Sparkles,
    title: "Advanced Tools",
    description: "Image gallery, notes system, and conversation export.",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description: "100% local storage, encrypted vaults, and zero tracking.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
];

export default function WelcomePage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(59,130,246,0.15)] via-[rgba(15,23,42,0.0)] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo-dark.svg"
              alt="AI Workspace Logo"
              width={80}
              height={80}
              className="h-20 w-20"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            <span>Installation Successful</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-[linear-gradient(135deg,#fff_0%,#94a3b8_100%)]">
            Welcome to AI Workspace
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            You're all set! Follow this quick start guide to supercharge your AI
            workflow in less than 2 minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="group relative bg-[rgba(30,41,59,0.4)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 hover:bg-[rgba(30,41,59,0.6)] hover:border-[rgba(255,255,255,0.12)] transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-bold text-slate-500">
                  {step.id}
                </span>
              </div>

              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
            Everything you need to master AI
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureCategories.map((feature, index) => (
              <div
                key={index}
                className="bg-[rgba(15,23,42,0.4)] border border-[rgba(255,255,255,0.05)] rounded-xl p-6 hover:bg-[rgba(30,41,59,0.4)] transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${feature.bgColor} ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
            <Link
              href="https://chatgpt.com"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-lg transition-all duration-300 group"
            >
              <span>Start Using AI Workspace</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="mt-6 text-slate-500 text-sm">
            Need help?{" "}
            <Link href="/#faq" className="text-cyan-400 hover:text-cyan-300">
              Check our FAQ
            </Link>{" "}
            or{" "}
            <Link
              href="mailto:support@aiworkspace.pro"
              className="text-cyan-400 hover:text-cyan-300"
            >
              contact support
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
}
