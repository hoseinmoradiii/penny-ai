"use client";

import { useState } from "react";

import Link from "next/link";

const pageStyles =
  "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";

export default function ProductDesktop() {
  const [activeTab, setActiveTab] = useState<"stream" | "forecast" | "hunter">("stream");
  const [killed, setKilled] = useState<boolean[]>([false, false, false]);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
        <div className="h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-lg">
            <Link className="flex items-center gap-space-sm group" data-path="product" href="/product">
              <img
                alt="Penny AI Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQwjM5xz9kaxGAnqIdNZBMa6ppwWR-cvWoOxRajKi_DqfS0QZyzzzAh3MVkM89MSr2zaVTTYgmzTk2r_q7LMQJNSakSSRwmzTVKFxoKPaMhYqqOy3h--MNlv7-ywLAGgNuRHZpriO1YpA36SzMsTqG7O9bbhWRIKawW1nhxoOGsyKSeFSYjBOTRnw4wQo6R6rxvWbKGN7mFfH2HsjmuMMIqLNqvSSuTbeXpI-Yag"
              />
              <span className="font-title-lg text-title-lg text-on-surface tracking-tight font-bold">
                Penny <span className="text-primary">AI</span>
              </span>
            </Link>
            <nav
              className="hidden md:flex items-center gap-space-xs"
              data-active-classes="bg-surface-container-high text-on-surface font-bold rounded-lg"
            >
              <Link
                aria-current="page"
                className="px-space-md py-space-xs transition-colors bg-surface-container-high text-on-surface font-bold rounded-lg"
                data-path="product"
                href="/product"
              >
                Product
              </Link>
              <Link
                className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 transition-colors rounded-lg font-label-md text-label-md"
                data-path="features"
                href="/features"
              >
                Features
              </Link>
              <Link
                className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 transition-colors rounded-lg font-label-md text-label-md"
                data-path="pricing"
                href="/pricing"
              >
                Pricing
              </Link>
              <Link
                className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 transition-colors rounded-lg font-label-md text-label-md"
                data-path="security"
                href="/security-and-trust"
              >
                {"Security & Trust"}
              </Link>
              <Link
                className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 transition-colors rounded-lg font-label-md text-label-md"
                data-path="company"
                href="/company"
              >
                Company
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <Link
              className="hidden sm:inline-flex items-center px-space-md py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg"
              data-path="sign-in"
              href="/sign-in"
            >
              Sign In
            </Link>
            <Link
              className="inline-flex items-center justify-center px-space-lg py-space-xs font-label-md text-label-md rounded-lg bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] transition-all font-semibold"
              data-path="get-started"
              href="/get-started"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full selection:bg-primary selection:text-on-primary">
          {/* Hero Section with Ambient Gradient Glow */}
          <section className="relative w-full pt-space-xl pb-24 px-margin-mobile lg:px-margin overflow-hidden bg-surface">
            {/* Back surface ambient illumination */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[780px] h-[520px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-48 right-12 w-[460px] h-[460px] bg-secondary-container/15 rounded-full blur-[130px] pointer-events-none" />
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
              {/* Tag / Chip */}
              <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-high/80 text-primary shadow-sm backdrop-blur-md mb-space-lg">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  auto_awesome
                </span>{" "}
                <span className="font-label-md text-label-md tracking-wider uppercase">
                  Next-Gen Sovereign Intelligence
                </span>{" "}
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              </div>
              {/* Headline */}
              <h1 className="font-headline-xl text-headline-xl text-on-surface max-w-4xl tracking-tight leading-[1.12]">
                The Sovereign Financial Copilot <br />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed to-secondary">
                  Built for Action.
                </span>
              </h1>
              {/* Subheading */}
              <p className="mt-space-lg font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-balance">
                Orchestrate real-time bank aggregation, autonomous liquidity modeling, and zero-effort budgeting. No
                spreadsheets. No stale data. Just cold, tactical math working in your corner 24/7.
              </p>
              {/* Action Buttons */}
              <div className="mt-space-xl flex flex-wrap items-center justify-center gap-space-md">
                <a
                  className="inline-flex items-center gap-space-xs px-8 py-3.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold shadow-xl hover:bg-primary hover:text-on-primary hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  href="#interactive-suite"
                >
                  <span className="material-symbols-outlined text-lg">play_circle</span> Explore Live Demo
                </a>{" "}
                <a
                  className="inline-flex items-center gap-space-xs px-8 py-3.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest hover:text-white font-label-md text-label-md font-semibold transition-all duration-200 shadow-sm"
                  href="#ecosystem"
                >
                  <span>Get Started Free</span>{" "}
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
              {/* Institutional Trust Indicators */}
              <div className="mt-space-xl pt-space-lg flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-label-sm text-label-sm text-outline">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">lock</span>{" "}
                  <span>Zero Credential Retention</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-outline-variant" />
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">verified_user</span>{" "}
                  <span>SOC-2 Type II Certified</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-outline-variant" />
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">bolt</span>{" "}
                  <span>Sub-second Neural Ingestion</span>
                </div>
              </div>
              {/* Hero Visual Cockpit: Floating Ledger Mosaic */}
              <div className="w-full mt-16 relative">
                <div className="relative mx-auto max-w-5xl rounded-2xl bg-surface-container-low p-4 lg:p-6 shadow-2xl">
                  {/* Glass Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 bg-surface-container/60 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-error/60" />{" "}
                        <span className="w-3 h-3 rounded-full bg-tertiary/60" />{" "}
                        <span className="w-3 h-3 rounded-full bg-primary/60" />
                      </div>{" "}
                      <span className="font-label-sm text-label-sm text-outline font-mono">
                        {"penny-core-os // live-pipeline: active"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 font-label-sm text-label-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Synchronized 4m ago
                    </div>
                  </div>
                  {/* Grid inside Mock Cockpit */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-left">
                    {/* Left: Cash Flow Snapshot (White Hero Accent Card) */}
                    <div className="md:col-span-5 bg-white text-surface-dim p-6 rounded-xl flex flex-col justify-between shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)]">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-label-md text-label-md uppercase tracking-wider text-outline">
                            Real-Time Cushion
                          </span>{" "}
                          <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-inverse-primary bg-primary/20 px-2 py-0.5 rounded-full font-bold">
                            <span className="material-symbols-outlined text-xs">trending_up</span> +14.2%
                          </span>
                        </div>
                        <div className="font-numeric-display text-numeric-display text-surface-dim font-bold tracking-tight">
                          $34,820.50
                        </div>
                        <p className="font-body-sm text-body-sm text-outline mt-1">
                          {"Autonomous buffer after fixed burn & tax reserve"}
                        </p>
                      </div>
                      {/* Quick Mini Sparkline */}
                      <div className="mt-6 pt-4">
                        <div className="flex justify-between items-end gap-1.5 h-16 w-full">
                          <div className="w-full bg-primary/20 hover:bg-primary transition-colors rounded-t h-[40%]" />
                          <div className="w-full bg-primary/30 hover:bg-primary transition-colors rounded-t h-[55%]" />
                          <div className="w-full bg-primary/40 hover:bg-primary transition-colors rounded-t h-[35%]" />
                          <div className="w-full bg-primary/50 hover:bg-primary transition-colors rounded-t h-[70%]" />
                          <div className="w-full bg-primary/70 hover:bg-primary transition-colors rounded-t h-[65%]" />
                          <div className="w-full bg-primary hover:bg-primary-container transition-colors rounded-t h-[92%]" />
                          <div className="w-full bg-primary-container hover:bg-primary transition-colors rounded-t h-[100%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-outline mt-2 font-mono uppercase">
                          <span>Day 01</span> <span>Day 15</span> <span>Projected 30d</span>
                        </div>
                      </div>
                    </div>
                    {/* Right: AI Reasoning Stream */}
                    <div className="md:col-span-7 bg-surface-container p-6 rounded-xl flex flex-col justify-between space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-lg">neurology</span>{" "}
                          <span className="font-title-md text-title-md text-on-surface font-semibold">
                            Active Copilot Intelligence
                          </span>
                        </div>{" "}
                        <span className="text-secondary font-label-sm text-label-sm bg-secondary-container/40 px-2.5 py-1 rounded-full">
                          Reasoning v4.2
                        </span>
                      </div>
                      {/* Chat / Insight Bubble 1 */}
                      <div className="p-3.5 rounded-lg bg-surface-container-high/90 text-on-surface space-y-1">
                        <div className="flex items-center justify-between font-label-sm text-label-sm text-outline">
                          <span className="flex items-center gap-1.5 text-primary font-semibold">
                            <span className="material-symbols-outlined text-xs">check_circle</span> Solvency
                            Confirmation
                          </span>{" "}
                          <span>Just now</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          “Yes, you can comfortably book the $1,850 flight to Lisbon. Liquid runway remains protected
                          through next quarter’s estimated tax distribution.”
                        </p>
                      </div>
                      {/* Chat / Insight Bubble 2 */}
                      <div className="p-3.5 rounded-lg bg-surface-container-high/90 text-on-surface space-y-1">
                        <div className="flex items-center justify-between font-label-sm text-label-sm text-outline">
                          <span className="flex items-center gap-1.5 text-tertiary font-semibold">
                            <span className="material-symbols-outlined text-xs">warning</span> Zombie Recurring Leak
                            Found
                          </span>{" "}
                          <span>2 hours ago</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Detected double charge: <strong>Notion AI</strong> ($10/mo) and unused{" "}
                          <strong>Vercel Pro</strong> ($20/mo). Auto-kill switch ready.
                        </p>
                        <div className="pt-2 flex gap-2">
                          <button className="px-3 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary-container transition-colors">
                            Terminate Subscriptions
                          </button>{" "}
                          <button className="px-3 py-1 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm hover:text-white transition-colors">
                            Review Invoices
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive Product Ecosystem Breakdown */}
          <section
            className="w-full py-24 px-margin-mobile lg:px-margin bg-surface-container-lowest relative"
            id="ecosystem"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <span className="font-label-md text-label-md text-primary tracking-widest uppercase font-mono block mb-2">
                    Architectural Blueprint
                  </span>{" "}
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    The Three-Pillar Intelligence Ecosystem
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Continuous algorithmic ingestion, conversational reasoning, and proactive cash reallocation engineered
                  for private sovereign custody.
                </p>
              </div>
              {/* Bento Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Pillar 1: Intelligent Core */}
                <div className="group p-8 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">database</span>
                    </div>{" "}
                    <span className="font-label-sm text-label-sm text-primary uppercase font-mono tracking-wider">
                      Zero-Retention Ingestion
                    </span>{" "}
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-3">Intelligent Core</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                      Connect 12,000+ financial institutions via Plaid, TrueLayer, or drag-and-drop raw CSV/OFX
                      extracts. Raw credentials never touch our memory stack; tokens are encrypted client-side.
                    </p>
                  </div>
                  <div className="pt-6 bg-surface-container-lowest/60 rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between text-body-sm font-body-sm">
                      <span className="text-on-surface">Plaid Open Banking API</span>{" "}
                      <span className="text-primary font-mono font-semibold">99.98% Latency</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[94%]" />
                    </div>
                    <div className="flex items-center justify-between text-body-sm font-body-sm pt-1">
                      <span className="text-on-surface">Local CSV Hash Verification</span>{" "}
                      <span className="text-secondary font-mono font-semibold">Client SHA-256</span>
                    </div>
                  </div>
                </div>
                {/* Pillar 2: Conversational Engine */}
                <div className="group p-8 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">neurology</span>
                    </div>{" "}
                    <span className="font-label-sm text-label-sm text-secondary uppercase font-mono tracking-wider">
                      Natural Financial Reasoning
                    </span>{" "}
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-3">
                      Conversational Engine
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                      Query your life’s cashflow using human vernacular. Ask complex nested scenarios like “What happens
                      to my runway if my rent increases by $400 next August?” and receive calibrated answers.
                    </p>
                  </div>
                  <div className="pt-6 bg-surface-container-lowest/60 rounded-xl p-4 space-y-2">
                    <div className="p-2.5 rounded bg-surface-container text-body-sm font-body-sm text-on-surface flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm mt-0.5">forum</span>{" "}
                      <span>“Audit my recurring digital services over the last 90 days.”</span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container-high text-body-sm font-body-sm text-primary flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-sm mt-0.5">smart_toy</span>{" "}
                      <span>“Found 11 services totaling $284/mo. 3 have been inactive for 45+ days.”</span>
                    </div>
                  </div>
                </div>
                {/* Pillar 3: Smart Cash Flow & Payback */}
                <div className="group p-8 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">currency_exchange</span>
                    </div>{" "}
                    <span className="font-label-sm text-label-sm text-tertiary uppercase font-mono tracking-wider">
                      Autonomous Liquidity
                    </span>{" "}
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-3">
                      {"Smart Flow & Payback"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                      Proactive anomaly detection, dynamic budget cushions that auto-expand during high-dividend months,
                      and autonomous piggybanks that sweep idle balances into high-yield vaults.
                    </p>
                  </div>
                  <div className="pt-6 bg-surface-container-lowest/60 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between text-body-sm font-body-sm">
                      <span className="text-on-surface">Auto-Sweep to Yield Vault</span>{" "}
                      <span className="text-primary font-mono font-semibold">+5.10% APY</span>
                    </div>
                    <div className="flex items-center justify-between text-body-sm font-body-sm">
                      <span className="text-on-surface">Vampire Subscriptions Severed</span>{" "}
                      <span className="text-tertiary font-mono font-semibold">$1,420 / yr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Feature Showcase with Interactive Tabs */}
          <section className="w-full py-24 px-margin-mobile lg:px-margin bg-surface relative" id="interactive-suite">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="font-label-md text-label-md text-primary uppercase font-mono tracking-wider">
                  Deep Tactical Tooling
                </span>{" "}
                <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2 mb-4">
                  Precision Control for Complex Real-World Ledgers
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Click between modules below to preview real-time telemetry, Monte Carlo simulations, and automated
                  cost elimination tools.
                </p>
                {/* Segmented Tab Controls */}
                <div className="mt-8 inline-flex p-1.5 rounded-xl bg-surface-container-low shadow-inner">
                  <button
                    className={
                      activeTab === "stream"
                        ? "px-5 py-2.5 rounded-lg font-label-md text-label-md font-semibold text-on-surface bg-surface-container shadow-sm transition-all duration-150"
                        : "px-5 py-2.5 rounded-lg font-label-md text-label-md font-semibold transition-all duration-150 text-on-surface-variant"
                    }
                    id="tab-stream-btn"
                    onClick={() => setActiveTab("stream")}
                  >
                    {"Live Stream & Metadata"}
                  </button>{" "}
                  <button
                    className={
                      activeTab === "forecast"
                        ? "px-5 py-2.5 rounded-lg font-label-md text-label-md font-semibold hover:text-on-surface transition-all duration-150 bg-surface-container text-on-surface shadow-sm"
                        : "px-5 py-2.5 rounded-lg font-label-md text-label-md font-semibold text-on-surface-variant hover:text-on-surface transition-all duration-150"
                    }
                    id="tab-forecast-btn"
                    onClick={() => setActiveTab("forecast")}
                  >
                    Liquidity Forecast (30D)
                  </button>{" "}
                  <button
                    className={
                      activeTab === "hunter"
                        ? "px-5 py-2.5 rounded-lg font-label-md text-label-md font-semibold hover:text-on-surface transition-all duration-150 bg-surface-container text-on-surface shadow-sm"
                        : "px-5 py-2.5 rounded-lg font-label-md text-label-md font-semibold text-on-surface-variant hover:text-on-surface transition-all duration-150"
                    }
                    id="tab-hunter-btn"
                    onClick={() => setActiveTab("hunter")}
                  >
                    Ghost Hunter (1-Click Kill)
                  </button>
                </div>
              </div>
              {/* Tab Content 1: Live Transaction Stream */}
              <div
                className={
                  activeTab === "stream"
                    ? "w-full bg-surface-container rounded-2xl p-6 lg:p-8 shadow-xl transition-all duration-300"
                    : "w-full bg-surface-container rounded-2xl p-6 lg:p-8 shadow-xl transition-all duration-300 hidden"
                }
                id="tab-content-stream"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 gap-4">
                  <div>
                    <h3 className="font-title-lg text-title-lg text-on-surface">Sub-Second Ingestion Ledger</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Real-time merchant logo resolution with confidence weighting
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                      Live Socket: 48 Events / min
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {/* Row 1 */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface-bright flex items-center justify-center text-on-surface font-bold font-mono">
                        AWS
                      </div>
                      <div>
                        <div className="font-title-md text-title-md text-on-surface font-medium">
                          Amazon Web Services EC2
                        </div>
                        <div className="flex items-center gap-2 font-label-sm text-label-sm text-outline">
                          <span>Cloud Infrastructure</span> <span>•</span>{" "}
                          <span className="text-primary font-mono">99.8% Match Certainty</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-title-md text-title-md text-on-surface font-semibold font-mono">
                        -$248.16
                      </div>
                      <div className="font-label-sm text-label-sm text-outline">Today, 2:14 PM</div>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface-bright flex items-center justify-center text-primary font-bold font-mono">
                        STR
                      </div>
                      <div>
                        <div className="font-title-md text-title-md text-on-surface font-medium">
                          Stripe Payout - Enterprise SaaS
                        </div>
                        <div className="flex items-center gap-2 font-label-sm text-label-sm text-outline">
                          <span>Recurring Revenue</span> <span>•</span>{" "}
                          <span className="text-primary font-mono">100% Verified Bank ACH</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-title-md text-title-md text-primary font-semibold font-mono">+$4,250.00</div>
                      <div className="font-label-sm text-label-sm text-outline">Yesterday</div>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface-bright flex items-center justify-center text-tertiary font-bold font-mono">
                        UBR
                      </div>
                      <div>
                        <div className="font-title-md text-title-md text-on-surface font-medium">Uber Eats London</div>
                        <div className="flex items-center gap-2 font-label-sm text-label-sm text-outline">
                          <span>{"Dining & Hospitality"}</span> <span>•</span>{" "}
                          <span className="text-tertiary font-mono">Categorized as Discretionary</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-title-md text-title-md text-on-surface font-semibold font-mono">-$42.80</div>
                      <div className="font-label-sm text-label-sm text-outline">May 18</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tab Content 2: Scenario Simulator & Forecast */}
              <div
                className={
                  activeTab === "forecast"
                    ? "w-full bg-surface-container rounded-2xl p-6 lg:p-8 shadow-xl transition-all duration-300"
                    : "hidden w-full bg-surface-container rounded-2xl p-6 lg:p-8 shadow-xl transition-all duration-300"
                }
                id="tab-content-forecast"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 gap-4">
                  <div>
                    <h3 className="font-title-lg text-title-lg text-on-surface">Monte Carlo 30-Day Liquidity Bands</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Simulating 1,000 cash flow scenarios against expected volatility
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">P90 Confidence Interval</span>{" "}
                    <span className="px-3 py-1 rounded bg-secondary-container text-secondary font-mono font-bold text-label-sm">
                      Safe Floor: $21,400
                    </span>
                  </div>
                </div>
                {/* Inline SVG Visualization: Monte Carlo Fan Chart */}
                <div className="w-full bg-surface-container-low rounded-xl p-6 relative overflow-hidden">
                  <svg
                    className="w-full h-56 text-primary"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 800 240"
                  >
                    <defs>
                      <linearGradient id="mcGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#4edea3" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#4edea3" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Grid Lines */}
                    <line stroke="#303444" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="40" y2="40" />
                    <line stroke="#303444" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="120" y2="120" />
                    <line stroke="#303444" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="200" y2="200" />
                    {/* Confidence Area Band */}
                    <path
                      d="M0,150 C200,160 400,110 800,40 L800,220 C400,190 200,180 0,160 Z"
                      fill="url(#mcGradient)"
                    />
                    {/* Upper Bound Path */}
                    <path d="M0,150 C200,160 400,110 800,40" stroke="#6ffbbe" strokeDasharray="2 2" strokeWidth="2" />
                    {/* Median Forecast Path */}
                    <path d="M0,155 C200,165 400,140 800,110" stroke="#4edea3" strokeWidth="3.5" />
                    {/* Lower Bound Path */}
                    <path d="M0,160 C200,180 400,190 800,220" stroke="#ffb95f" strokeDasharray="4 4" strokeWidth="2" />
                  </svg>{" "}
                  <div className="flex justify-between items-center text-outline font-mono text-label-sm mt-3">
                    <span>Day 1 (Current: $34,820)</span> <span>{"Day 15 (Scheduled Rent & Invoices)"}</span>{" "}
                    <span className="text-primary font-bold">Day 30 (Projected: $38,400 Median)</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container-high">
                    <span className="text-outline font-label-sm text-label-sm block">Best-Case Simulation</span>{" "}
                    <span className="text-primary font-numeric-display text-2xl font-bold font-mono">$46,200</span>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-high">
                    <span className="text-outline font-label-sm text-label-sm block">Expected Value (EV)</span>{" "}
                    <span className="text-on-surface font-numeric-display text-2xl font-bold font-mono">$38,400</span>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-high">
                    <span className="text-outline font-label-sm text-label-sm block">Worst-Case Floor</span>{" "}
                    <span className="text-tertiary font-numeric-display text-2xl font-bold font-mono">$21,400</span>
                  </div>
                </div>
              </div>
              {/* Tab Content 3: Ghost Subscription Hunter */}
              <div
                className={
                  activeTab === "hunter"
                    ? "w-full bg-surface-container rounded-2xl p-6 lg:p-8 shadow-xl transition-all duration-300"
                    : "hidden w-full bg-surface-container rounded-2xl p-6 lg:p-8 shadow-xl transition-all duration-300"
                }
                id="tab-content-hunter"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 gap-4">
                  <div>
                    <h3 className="font-title-lg text-title-lg text-on-surface">Vampire Service Termination</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Recurring charges with zero client interaction over the past 45+ days
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded bg-error-container text-error font-label-sm text-label-sm font-semibold">
                      $148/mo Bleed Detected
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-surface-container-high gap-4">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-tertiary text-2xl">music_note</span>{" "}
                      <div>
                        <div className="font-title-md text-title-md text-on-surface font-medium">
                          Tidal HiFi Duo Plan
                        </div>
                        <div className="font-label-sm text-label-sm text-outline">
                          Last app launch: 84 days ago • $19.99/month
                        </div>
                      </div>
                    </div>{" "}
                    <button
                      className={
                        killed[0]
                          ? "px-4 py-2 rounded-lg bg-error-container text-error hover:bg-error hover:text-on-error font-label-md text-label-md font-semibold transition-colors bg-outline text-on-surface"
                          : "px-4 py-2 rounded-lg bg-error-container text-error hover:bg-error hover:text-on-error font-label-md text-label-md font-semibold transition-colors"
                      }
                      onClick={() => setKilled((s) => s.map((v, j) => (j === 0 ? true : v)))}
                    >
                      {killed[0] ? "Cancelled" : "Kill Subscription"}
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-surface-container-high gap-4">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-secondary text-2xl">storage</span>{" "}
                      <div>
                        <div className="font-title-md text-title-md text-on-surface font-medium">
                          Legacy VPS Droplet
                        </div>
                        <div className="font-label-sm text-label-sm text-outline">
                          0% CPU utilization detected for 6 months • $48.00/month
                        </div>
                      </div>
                    </div>{" "}
                    <button
                      className={
                        killed[1]
                          ? "px-4 py-2 rounded-lg bg-error-container text-error hover:bg-error hover:text-on-error font-label-md text-label-md font-semibold transition-colors bg-outline text-on-surface"
                          : "px-4 py-2 rounded-lg bg-error-container text-error hover:bg-error hover:text-on-error font-label-md text-label-md font-semibold transition-colors"
                      }
                      onClick={() => setKilled((s) => s.map((v, j) => (j === 1 ? true : v)))}
                    >
                      {killed[1] ? "Cancelled" : "Kill Subscription"}
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-surface-container-high gap-4">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary text-2xl">fitness_center</span>{" "}
                      <div>
                        <div className="font-title-md text-title-md text-on-surface font-medium">
                          Equinox Digital Companion
                        </div>
                        <div className="font-label-sm text-label-sm text-outline">
                          No check-ins registered since January • $80.00/month
                        </div>
                      </div>
                    </div>{" "}
                    <button
                      className={
                        killed[2]
                          ? "px-4 py-2 rounded-lg bg-error-container text-error hover:bg-error hover:text-on-error font-label-md text-label-md font-semibold transition-colors bg-outline text-on-surface"
                          : "px-4 py-2 rounded-lg bg-error-container text-error hover:bg-error hover:text-on-error font-label-md text-label-md font-semibold transition-colors"
                      }
                      onClick={() => setKilled((s) => s.map((v, j) => (j === 2 ? true : v)))}
                    >
                      {killed[2] ? "Cancelled" : "Kill Subscription"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* How It Works: 3-Step Execution Model */}
          <section className="w-full py-24 px-margin-mobile lg:px-margin bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <span className="font-label-md text-label-md text-primary uppercase font-mono tracking-widest block mb-2">
                  Protocol Architecture
                </span>{" "}
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  From Raw Data to Complete Fiscal Clarity
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Step 1 */}
                <div className="p-8 rounded-2xl bg-surface-container relative">
                  <div className="font-numeric-display text-4xl text-primary/40 font-mono font-bold mb-6">01</div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Sync or Drop CSV</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Directly connect your institution with instant tokenization, or drag encrypted statement exports
                    straight into your browser. No permanent session tokens stored.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-sm">shield</span> Client-Side Isolation
                  </div>
                </div>
                {/* Step 2 */}
                <div className="p-8 rounded-2xl bg-surface-container relative">
                  <div className="font-numeric-display text-4xl text-secondary/40 font-mono font-bold mb-6">02</div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Mathematical Audit</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Penny parses thousands of ledger lines in under two seconds. Categories normalize, hidden surcharges
                    get unmasked, and cash-inflow rhythms are mapped mathematically.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-secondary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-sm">precision_manufacturing</span> Automated Ledger
                    Normalization
                  </div>
                </div>
                {/* Step 3 */}
                <div className="p-8 rounded-2xl bg-surface-container relative">
                  <div className="font-numeric-display text-4xl text-tertiary/40 font-mono font-bold mb-6">03</div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Copilot Guidance</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Wake up to proactive prompts. Receive affirmative answers to discretionary spend choices,
                    auto-divert savings into sovereign yield, and sever dead recurring costs.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-tertiary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-sm">bolt</span> Actionable Execution
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Persona-Tailored Solutions (Freelancers, Tech Couples, Young Pros) */}
          <section className="w-full py-24 px-margin-mobile lg:px-margin bg-surface">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="font-label-md text-label-md text-primary uppercase font-mono tracking-widest block mb-2">
                  Tailored Workflows
                </span>{" "}
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Calibrated for Your Exact Financial Life
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Freelancers & Founders */}
                <div className="rounded-2xl bg-surface-container p-8 flex flex-col justify-between hover:bg-surface-container-high transition-colors">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-2xl">badge</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{"1099s & Solopreneurs"}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                      Erratic invoice cashflows smoothed automatically. Instant quarterly tax set-asides and automated
                      write-off tagging for business items.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-lowest text-body-sm font-body-sm text-on-surface-variant">
                    <span className="text-primary font-semibold block mb-1">Key Feature:</span> Dynamic baseline
                    smoothing that calculates your safe monthly draw despite volatile client payments.
                  </div>
                </div>
                {/* Tech Couples */}
                <div className="rounded-2xl bg-surface-container p-8 flex flex-col justify-between hover:bg-surface-container-high transition-colors">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-2xl">diversity_1</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Tech Couples</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                      Zero-awkwardness joint finance. Proportional income splits on shared bills while preserving strict
                      privacy for individual discretionary balances.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-lowest text-body-sm font-body-sm text-on-surface-variant">
                    <span className="text-secondary font-semibold block mb-1">Key Feature:</span> Equitable split
                    automation that harmonizes differing salary levels without manual Venmo requests.
                  </div>
                </div>
                {/* Young Professionals */}
                <div className="rounded-2xl bg-surface-container p-8 flex flex-col justify-between hover:bg-surface-container-high transition-colors">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Young Professionals</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                      Aggressive net worth compounding. Automated subscription assassination, instant high-yield sweeps,
                      and habituated liquidity cushion growth.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-lowest text-body-sm font-body-sm text-on-surface-variant">
                    <span className="text-tertiary font-semibold block mb-1">Key Feature:</span> High-velocity
                    micro-investing triggers whenever discretionary balance exceeds safe 45-day runway.
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Compliance & Regulatory Disclosure Banner */}
          <section className="w-full py-8 px-margin-mobile lg:px-margin bg-surface-container-low">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-surface-container-high/40">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">verified</span>{" "}
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  <strong className="text-on-surface">{"Institutional Disclosures & Sovereignty Model:"}</strong> Penny
                  AI operates strictly as an autonomous personal telemetry copilot and does not engage in broker-dealer
                  securities management or direct deposit banking. Banking links are provided via SOC-2 accredited open
                  banking aggregators.
                </div>
              </div>{" "}
              <a
                className="whitespace-nowrap px-4 py-2 rounded-lg bg-surface-container text-on-surface hover:text-white font-label-md text-label-md transition-colors"
                href="#"
              >
                Read Security Whitepaper
              </a>
            </div>
          </section>
          {/* CTA Section */}
          <section className="w-full py-24 px-margin-mobile lg:px-margin bg-surface relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-6">
                Take Full Sovereignty Over Your Cashflow Today.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-10 text-balance">
                Experience zero-latency algorithmic ledger intelligence. Deploy the copilot in under 60 seconds.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  className="px-8 py-3.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold shadow-xl hover:bg-primary hover:text-on-primary transition-all duration-200"
                  href="#"
                >
                  Get Started Free
                </a>{" "}
                <a
                  className="px-8 py-3.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md font-semibold transition-all duration-200"
                  href="#interactive-suite"
                >
                  Explore Live Sandbox
                </a>
              </div>
              <div className="mt-8 font-label-sm text-label-sm text-outline">
                No credit card required • Instant browser demonstration • SOC-2 Type II Certified
              </div>
            </div>
          </section>
        </div>
        {/* Tab Switching Micro-interaction Script */}
      </main>
      <footer className="w-full bg-surface-container-lowest text-on-surface-variant shadow-[0_-1px_12px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-xl">
            <div className="lg:col-span-4 space-y-space-md">
              <div className="flex items-center gap-space-sm">
                <img
                  alt="Penny AI Logo"
                  className="h-8 w-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQwjM5xz9kaxGAnqIdNZBMa6ppwWR-cvWoOxRajKi_DqfS0QZyzzzAh3MVkM89MSr2zaVTTYgmzTk2r_q7LMQJNSakSSRwmzTVKFxoKPaMhYqqOy3h--MNlv7-ywLAGgNuRHZpriO1YpA36SzMsTqG7O9bbhWRIKawW1nhxoOGsyKSeFSYjBOTRnw4wQo6R6rxvWbKGN7mFfH2HsjmuMMIqLNqvSSuTbeXpI-Yag"
                />
                <span className="font-title-lg text-title-lg text-on-surface tracking-tight font-bold">
                  Penny <span className="text-primary">AI</span>
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                The AI-native personal finance copilot delivering predictive cash-flow forecasting, automated
                rebalancing, and sovereign-grade privacy.
              </p>
              <div className="flex items-center gap-space-sm pt-space-xs">
                <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  SOC-2 Type II Certified
                </span>
                <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  256-Bit TLS
                </span>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-space-sm">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">{"Product & Features"}</h4>
              <ul className="space-y-space-xs font-body-sm text-body-sm">
                <li>
                  <Link
                    className="hover:text-primary transition-colors block py-0.5"
                    data-path="product"
                    href="/product"
                  >
                    Product Overview
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-colors block py-0.5"
                    data-path="features"
                    href="/features"
                  >
                    {"Features & Tech"}
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-colors block py-0.5"
                    data-path="pricing"
                    href="/pricing"
                  >
                    {"Pricing & Plans"}
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-colors block py-0.5"
                    data-path="security"
                    href="/security-and-trust"
                  >
                    {"Security & Trust"}
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-colors block py-0.5"
                    data-path="company"
                    href="/company"
                  >
                    {"Company & Team"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3 space-y-space-sm">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">{"Trust & Security"}</h4>
              <ul className="space-y-space-xs font-body-sm text-body-sm">
                <li>
                  <span className="text-on-surface flex items-center gap-1.5 py-0.5">
                    <span className="material-symbols-outlined text-xs text-primary">shield</span>
                    256-bit Bank Encryption
                  </span>
                </li>
                <li>
                  <span className="text-on-surface flex items-center gap-1.5 py-0.5">
                    <span className="material-symbols-outlined text-xs text-primary">fact_check</span>
                    SOC-2 Readiness
                  </span>
                </li>
                <li>
                  <span className="text-on-surface flex items-center gap-1.5 py-0.5">
                    <span className="material-symbols-outlined text-xs text-secondary">hub</span>
                    {"Plaid & TrueLayer Partners"}
                  </span>
                </li>
                <li>
                  <span className="text-on-surface flex items-center gap-1.5 py-0.5">
                    <span className="material-symbols-outlined text-xs text-primary">do_not_disturb_on</span>
                    No Data Selling Guarantee
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3 space-y-space-sm">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">Stay Informed</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Receive monthly research on personal liquidity, algorithmic budgeting, and macro rates.
              </p>
              <form className="space-y-space-xs pt-space-xs">
                <div className="flex items-center gap-space-xs">
                  <input
                    className="w-full bg-surface-container-high text-on-surface placeholder:text-outline px-space-md py-space-xs rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
                    placeholder="Enter your work email"
                    type="email"
                  />
                  <button
                    className="px-space-md py-space-xs bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary rounded-lg font-label-md text-label-md font-semibold transition-all whitespace-nowrap"
                    type="button"
                  >
                    Join
                  </button>
                </div>
                <p className="font-label-sm text-label-sm text-outline">
                  Zero spam. Unsubscribe with one click anytime.
                </p>
              </form>
            </div>
          </div>
          <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex flex-wrap items-center gap-x-space-md gap-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <Link className="hover:text-on-surface transition-colors" data-path="product" href="/product">
                Product
              </Link>
              <Link className="hover:text-on-surface transition-colors" data-path="features" href="/features">
                Features
              </Link>
              <Link className="hover:text-on-surface transition-colors" data-path="pricing" href="/pricing">
                Pricing
              </Link>
              <Link className="hover:text-on-surface transition-colors" data-path="security" href="/security-and-trust">
                {"Security & Trust"}
              </Link>
              <Link className="hover:text-on-surface transition-colors" data-path="company" href="/company">
                Company
              </Link>
            </div>
            <p className="font-body-sm text-body-sm text-outline">
              © 2025 Penny Financial Technologies Inc. All rights reserved.
            </p>
          </div>
          <div className="pt-space-md">
            <p className="font-label-sm text-label-sm text-outline leading-relaxed">
              Penny AI is an informational financial copilot and analytical management tool, not an SEC-registered
              investment advisor or chartered depository institution. Banking connection services are safely provided
              via Plaid and TrueLayer APIs. Investment advisory products and yield generation modules are powered by
              partner banks, Members FDIC.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
