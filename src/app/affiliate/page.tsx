"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  DollarSign,
  TrendingUp,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Globe,
  Users,
} from "lucide-react";
import { FadeIn, SlideUp, ScaleUp } from "@/components/ScrollAnimation";
import { Footer } from "@/components/Footer";

export default function AffiliatePage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo-dark.svg"
                alt="AI Workspace Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              AI Workspace
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
          </div>
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
                <DollarSign className="w-3 h-3" />
                Partner Program
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
                Earn 30% Recurring Commission
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Join the highest-paying affiliate program in the AI space.
                Promote the ultimate ChatGPT workspace and earn passive income
                for every user you refer.
              </p>
            </FadeIn>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
            {[
              {
                label: "Commission",
                value: "30%",
                sub: "Recurring for 12 months",
                icon: DollarSign,
                color: "text-green-400",
                bg: "bg-green-500/10",
                border: "border-green-500/20",
              },
              {
                label: "Cookie Life",
                value: "60 Days",
                sub: "Long attribution window",
                icon: Calendar,
                color: "text-blue-400",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20",
              },
              {
                label: "Conversion",
                value: "~5.2%",
                sub: "High converting landing page",
                icon: TrendingUp,
                color: "text-purple-400",
                bg: "bg-purple-500/10",
                border: "border-purple-500/20",
              },
            ].map((stat, i) => (
              <SlideUp key={i} delay={i * 0.1}>
                <div
                  className={`p-6 rounded-2xl border ${stat.border} ${stat.bg} backdrop-blur-sm`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center ${stat.color}`}
                    >
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className={`font-bold ${stat.color}`}>
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.sub}</div>
                </div>
              </SlideUp>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Benefits & FAQ */}
            <div className="space-y-12">
              <FadeIn>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Partner With Us?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "High Retention Product",
                      desc: "Users love AI Workspace. Our low churn rate means your recurring commissions keep coming month after month.",
                      icon: ShieldCheck,
                    },
                    {
                      title: "Global Audience",
                      desc: "Our extension works in every language and country where ChatGPT is available. The market is massive.",
                      icon: Globe,
                    },
                    {
                      title: "Marketing Assets Provided",
                      desc: "Get access to high-converting banners, email swipes, and video assets to make promotion easy.",
                      icon: Users,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-purple-400">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-slate-900/50 rounded-2xl border border-white/10 p-8">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-purple-400 mb-2">
                        How do I get paid?
                      </h4>
                      <p className="text-slate-400 text-sm">
                        We pay out via PayPal or Wise every 30 days, provided
                        you've reached the minimum payout threshold of $50.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-400 mb-2">
                        Is there a cost to join?
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Absolutely not. The program is completely free to join
                        for everyone.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-400 mb-2">
                        Can I refer myself?
                      </h4>
                      <p className="text-slate-400 text-sm">
                        No, self-referrals are not allowed and will be flagged
                        by our fraud detection system.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Application Form */}
            <ScaleUp delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur opacity-30" />
                <div className="relative bg-[#0F1629] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Become an Affiliate
                    </h3>
                    <p className="text-slate-400">
                      Join 500+ partners earning with AI Workspace
                    </p>
                  </div>

                  <form
                    className="space-y-5"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">
                        Website / Social Profile
                      </label>
                      <input
                        type="text"
                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                        placeholder="https://twitter.com/johndoe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">
                        How will you promote us?
                      </label>
                      <textarea
                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all h-24 resize-none"
                        placeholder="I have a newsletter about AI tools..."
                      />
                    </div>

                    <div className="pt-4">
                      <a
                        href="https://aiworkspace.promotekit.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                      >
                        Apply Now
                        <ArrowRight className="w-5 h-5" />
                      </a>
                      <p className="text-center text-xs text-slate-500 mt-4">
                        By applying, you agree to our Affiliate Terms &
                        Conditions.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </ScaleUp>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
