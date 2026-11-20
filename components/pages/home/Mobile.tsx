"use client";

import { useRef, useState } from "react";
const pageStyles =
  "@layer base{html,body{width:100vw;margin:0;padding:0;background-color:#0e1321;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}\nbody {\n      min-height: max(884px, 100dvh);\n    }";

export default function HomeMobile() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [ctaBusy, setCtaBusy] = useState(false);
  const flashCta = () => {
    setCtaBusy(true);
    setTimeout(() => setCtaBusy(false), 1500);
  };
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.2)] pt-safe">
        <div className="h-16 px-margin-mobile flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <button
              aria-label="Open Menu"
              className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface focus:outline-none"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
            <div className="flex items-center gap-space-xs">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shadow-[0_0_12px_rgba(78,222,163,0.25)]">
                <span className="material-symbols-outlined text-primary text-[20px]">auto_awesome</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-title-md text-title-md tracking-tight text-on-surface">Penny</span>
                  <span className="font-label-sm text-label-sm text-secondary px-1.5 py-0.5 rounded-full bg-secondary-container/40">
                    AI
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface hidden xs:block">Explore</span>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col relative w-full px-margin-mobile pt-16 pb-24 bg-surface min-h-screen">
        <div className="flex flex-col w-full space-y-space-xl">
          {/* Hero Section */}
          <section className="flex flex-col w-full relative pt-space-sm">
            {/* Subtle Neural Ambient Glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-44 bg-gradient-to-b from-primary/15 via-secondary/10 to-transparent blur-3xl pointer-events-none rounded-full" />
            <div className="relative flex flex-col items-center text-center w-full">
              {/* Live Copilot Badge */}
              <div className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-surface-container-high shadow-sm mb-space-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />{" "}
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>{" "}
                <span className="font-label-md text-label-md text-primary tracking-wide">
                  Penny AI Copilot 2.0 Live
                </span>{" "}
                <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
              </div>
              {/* Main Headline */}
              <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface tracking-tight mb-space-sm">
                Turn Raw Transactions into <span className="text-primary">Clarity</span>
                {", Savings & Peace of Mind"}
              </h1>
              {/* Subtitle */}
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-space-lg leading-relaxed">
                Your autonomous conversational financial copilot. Penny ingests complex banking data in real time,
                surfaces invisible waste, and crafts executable wealth strategies.
              </p>
              {/* CTA Stack */}
              <div className="flex flex-col w-full gap-space-sm sm:flex-row">
                <button
                  className="relative group flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-primary text-on-primary font-title-md text-title-md shadow-lg shadow-primary/20 active:scale-95 transition-all"
                  id="cta-get-started"
                  onClick={flashCta}
                >
                  <span className="material-symbols-outlined text-[20px]">bolt</span>{" "}
                  <span>{ctaBusy ? "Spinning Up Copilot..." : "Get Started Free"}</span>{" "}
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>{" "}
                <button
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-surface-container-high text-on-surface font-title-md text-title-md active:scale-95 transition-all shadow-sm"
                  id="cta-watch-demo"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary">play_circle</span>{" "}
                  <span>Watch 2-Min Demo</span>
                </button>
              </div>
              {/* Trust Badges Strip */}
              <div className="grid grid-cols-3 gap-2 w-full mt-space-lg pt-space-md">
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-low text-center">
                  <span className="material-symbols-outlined text-[20px] text-primary mb-1">lock</span>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">256-Bit TLS</span>{" "}
                  <span className="font-body-sm text-[10px] text-on-surface-variant">Bank Standard</span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-low text-center">
                  <span className="material-symbols-outlined text-[20px] text-secondary mb-1">account_balance</span>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">{"Plaid & Open"}</span>{" "}
                  <span className="font-body-sm text-[10px] text-on-surface-variant">Direct Sync</span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-low text-center">
                  <span className="material-symbols-outlined text-[20px] text-tertiary mb-1">gavel</span>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">Zero Selling</span>{" "}
                  <span className="font-body-sm text-[10px] text-on-surface-variant">Sovereign Data</span>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive Live Copilot Preview */}
          <section className="flex flex-col w-full">
            <div className="flex items-center justify-between mb-space-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">insights</span>{" "}
                <h2 className="font-title-lg text-title-lg text-on-surface">Live Copilot Pulse</h2>
              </div>{" "}
              <span className="font-label-sm text-label-sm text-secondary px-2.5 py-0.5 rounded-full bg-secondary-container/30">
                Synced Today
              </span>
            </div>
            {/* Active Card Mockup */}
            <div className="flex flex-col w-full rounded-2xl bg-surface-container p-space-md shadow-xl relative overflow-hidden">
              {/* Ambient Glow Behind Card Top */}
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              {/* Financial Metrics Pill Matrix */}
              <div className="grid grid-cols-3 gap-2 mb-space-md">
                <div className="p-2.5 rounded-xl bg-surface-container-low flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-primary">arrow_downward</span> Inflow
                  </span>{" "}
                  <span className="font-title-md text-title-md text-on-surface font-semibold">$4,850.00</span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-container-low flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-error">arrow_upward</span> Outflow
                  </span>{" "}
                  <span className="font-title-md text-title-md text-on-surface font-semibold">$2,180.40</span>
                </div>
                <div className="p-2.5 rounded-xl bg-primary-container/20 flex flex-col">
                  <span className="font-label-sm text-label-sm text-primary mb-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">savings</span> Net Left
                  </span>{" "}
                  <span className="font-title-md text-title-md text-primary font-bold">+$2,669.60</span>
                </div>
              </div>
              {/* Category Velocity Sliders */}
              <div className="flex flex-col space-y-3 mb-space-md">
                {/* Item 1: Housing */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                    <span className="text-on-surface flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] text-on-surface-variant">home</span>{" "}
                      {"Housing & Utilities"}
                    </span>{" "}
                    <span className="text-on-surface font-semibold">
                      $1,200 <span className="text-on-surface-variant font-normal">/ $1,300</span>
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: "92%" }}
                    />
                  </div>
                </div>
                {/* Item 2: Dining (Warning) */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                    <span className="text-on-surface flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] text-tertiary">restaurant</span>{" "}
                      {"Dining & Cafes"}
                    </span>{" "}
                    <span className="text-tertiary font-semibold">
                      $480 <span className="text-on-surface-variant font-normal">/ $400 (+18%)</span>
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                    <div
                      className="h-full bg-tertiary rounded-full transition-all duration-1000"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                {/* Item 3: Groceries */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                    <span className="text-on-surface flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] text-on-surface-variant">
                        local_grocery_store
                      </span>{" "}
                      Groceries
                    </span>{" "}
                    <span className="text-on-surface font-semibold">
                      $310 <span className="text-on-surface-variant font-normal">/ $450</span>
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: "68%" }}
                    />
                  </div>
                </div>
                {/* Item 4: Subscriptions */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                    <span className="text-on-surface flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] text-secondary">subscriptions</span>{" "}
                      Recurring Digital
                    </span>{" "}
                    <span className="text-on-surface font-semibold">
                      $190.40 <span className="text-on-surface-variant font-normal">/ $200</span>
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                    <div
                      className="h-full bg-secondary rounded-full transition-all duration-1000"
                      style={{ width: "95%" }}
                    />
                  </div>
                </div>
              </div>
              {/* Penny Conversation Prompt Mockup */}
              <div className="flex flex-col rounded-xl bg-surface-container-low p-3 shadow-inner">
                <div className="flex items-start gap-2.5 mb-2">
                  <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-secondary text-[14px]">psychology</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">User Query</span>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface">
                      "Why did I spend 18% more on dining this month?"
                    </p>
                  </div>
                </div>
                {/* Penny Intelligent Response */}
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-surface-container-high">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-on-primary text-[14px]">auto_awesome</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="font-label-sm text-label-sm text-primary font-semibold">Penny Copilot</span>{" "}
                      <span className="font-label-sm text-[10px] text-on-surface-variant">Instant inference</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                      You had 3 group dinners on weekends averaging{" "}
                      <span className="text-on-surface font-medium">$74.20</span> plus 4 late-night food deliveries via
                      DoorDash. Rebalancing from Groceries covers this with zero overdraft risk.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <button className="px-2.5 py-1 rounded bg-primary/10 text-primary font-label-sm text-label-sm hover:bg-primary/20 transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">check_circle</span> Rebalance $80
                      </button>{" "}
                      <button className="px-2.5 py-1 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                        Ignore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Visual Lifestyle Context Card */}
          <section className="flex flex-col w-full rounded-2xl overflow-hidden bg-surface-container shadow-md">
            <div className="relative w-full h-44">
              <img
                className="w-full h-full object-cover"
                data-alt="A focused modern professional using an elegant smartphone app in a minimalist sunlit coffee shop studio, showing clean digital graphs on the phone screen with a peaceful mood and muted slate and emerald color tones"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvKMdA3Sk1cpcP8Ap7_r7HS7AGL3nsORduNNAyRFtB6lXvhxWpzd_-TM11WX50HO0mVXV8NHkefIgO6JrkUGiTk3eVbykkwdPpbsrDXFxqzQGGI3pz8_4iiSelCvzkgTkoMStpiF3xMI6u5XQ3KvpADewEsyccQBl5FWwoBDIH_Me7tP592tUI8Vgt24W6M9LSmpZ-csWu5bmAqEzdae4sN4M0QZjXvABNXW5inw"
                alt=""
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/60 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  Effortless Autonomy
                </span>{" "}
                <p className="font-title-md text-title-md text-on-surface font-semibold">
                  No more spreadsheets at midnight.
                </p>
              </div>
            </div>
          </section>
          {/* The Shift: Comparison Section */}
          <section className="flex flex-col w-full">
            <div className="flex flex-col mb-space-md">
              <span className="font-label-md text-label-md text-tertiary">The Shift</span>{" "}
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
                Why Manual Budgeting Fails
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Spreadsheets demand endless bookkeeping. Penny AI does the heavy lifting while you sleep.
              </p>
            </div>
            <div className="flex flex-col gap-space-sm">
              {/* The Outdated Way */}
              <div className="flex flex-col p-space-md rounded-2xl bg-surface-container-low">
                <div className="flex items-center gap-2 mb-space-sm">
                  <div className="w-8 h-8 rounded-lg bg-error-container/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-error text-[20px]">cancel</span>
                  </div>
                  <div>
                    <span className="font-title-md text-title-md text-on-surface font-semibold">The Outdated Way</span>{" "}
                    <p className="font-label-sm text-label-sm text-on-surface-variant">{"Static & Reactive"}</p>
                  </div>
                </div>
                <ul className="flex flex-col space-y-2 text-body-sm font-body-sm text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-error shrink-0 mt-0.5">remove</span>{" "}
                    <span>Manual CSV exports, broken bank token logins, and painful categorizations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-error shrink-0 mt-0.5">remove</span>{" "}
                    <span>Zero context: graphs show overspending only after you've already paid the penalty.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-error shrink-0 mt-0.5">remove</span>{" "}
                    <span>Rigid buckets that generate guilt whenever real life disrupts static limits.</span>
                  </li>
                </ul>
              </div>
              {/* The Penny AI Way */}
              <div className="flex flex-col p-space-md rounded-2xl bg-surface-container shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center gap-2 mb-space-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary text-[20px]">check_circle</span>
                  </div>
                  <div>
                    <span className="font-title-md text-title-md text-on-surface font-semibold">
                      The Penny AI System
                    </span>{" "}
                    <p className="font-label-sm text-label-sm text-primary">{"Proactive & Autonomous"}</p>
                  </div>
                </div>
                <ul className="flex flex-col space-y-2 text-body-sm font-body-sm text-on-surface">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">check</span>{" "}
                    <span>Continuous background ledger enrichment with zero human tagging required.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">check</span>{" "}
                    <span>
                      Conversational clarity: Ask plain English questions and get instant math backed answers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">check</span>{" "}
                    <span>Predictive dynamic cushions that autonomously protect liquid emergency reserves.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Four Pillars of Sovereign AI */}
          <section className="flex flex-col w-full">
            <div className="flex flex-col mb-space-md">
              <span className="font-label-md text-label-md text-primary">Architecture</span>{" "}
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
                Four Sovereign Pillars
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Built ground-up with mathematical rigor and private neural models.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-space-sm">
              {/* Pillar 1 */}
              <div className="flex items-start gap-space-sm p-space-md rounded-2xl bg-surface-container">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[22px]">sync_saved_locally</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-title-md text-title-md text-on-surface font-semibold">Zero-Effort Ingestion</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Connect checking, credit, crypto, and investment brokers. Penny harmonizes disparate ledgers within
                    60 seconds.
                  </p>
                </div>
              </div>
              {/* Pillar 2 */}
              <div className="flex items-start gap-space-sm p-space-md rounded-2xl bg-surface-container">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-[22px]">chat_bubble_outline</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-title-md text-title-md text-on-surface font-semibold">
                    Explain, Don't Just Display
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Charts show raw history; Penny explains why it happened and what behavioral micro-adjustments
                    generate $300+/month.
                  </p>
                </div>
              </div>
              {/* Pillar 3 */}
              <div className="flex items-start gap-space-sm p-space-md rounded-2xl bg-surface-container">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-tertiary text-[22px]">notifications_active</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-title-md text-title-md text-on-surface font-semibold">Proactive Smart Alerts</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Get pinged before zombie subscriptions renew or sneaky price increases hit your statement, not weeks
                    later.
                  </p>
                </div>
              </div>
              {/* Pillar 4 */}
              <div className="flex items-start gap-space-sm p-space-md rounded-2xl bg-surface-container">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[22px]">savings</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-title-md text-title-md text-on-surface font-semibold">Goal-Driven Piggybanks</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Autonomous micro-stashes algorithmically funnel spare daily pennies directly into high-yield targets
                    without friction.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonials Section */}
          <section className="flex flex-col w-full">
            <div className="flex items-center justify-between mb-space-md">
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-secondary">Verified Stories</span>{" "}
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Loved by Builders</h2>
              </div>
              <div className="flex gap-1">
                <button
                  aria-label="Previous story"
                  className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant active:text-on-surface"
                  id="prev-test"
                  onClick={() => trackRef.current?.scrollBy({ left: -280, behavior: "smooth" })}
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>{" "}
                <button
                  aria-label="Next story"
                  className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant active:text-on-surface"
                  id="next-test"
                  onClick={() => trackRef.current?.scrollBy({ left: 280, behavior: "smooth" })}
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
            {/* Testimonial Cards Carousel Container */}
            <div
              className="flex gap-space-sm overflow-x-auto pb-2 snap-x snap-mandatory"
              id="testimonial-track"
              ref={trackRef}
            >
              {/* Testimonial 1 */}
              <div className="flex flex-col p-space-md rounded-2xl bg-surface-container min-w-[280px] w-full shrink-0 snap-center shadow-sm">
                <div className="flex items-center gap-3 mb-space-sm">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    data-alt="Portrait photo of Sara K, a tech startup founder in her early thirties with a warm confident smile against a soft ambient city light studio background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgfW4FYwWKYJcJQ-aPngj6OdbsoPvJp9nmN__glJttBxAyqvnUYHeyYfBD3En6iWRfBY9a5FPdFNfAin6PBS3n_hi1Vcjnk6CZ4qaqhe8LS8awCJV_kFvVBVyajqskc2iAy9o3fquLw66EGwo-yaenXIG7yVGMkp6l3P9FC2snmjGrtP0kAmYdSo1_jg6jgb_09DHKm57Mlxda_YnMEdfjHY_ao9y2F879McYudg"
                    alt=""
                  />{" "}
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface font-semibold">Sara K.</span>{" "}
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Founder @ Loomis</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface italic">
                  "Penny spotted a $140 monthly duplicate cloud charge across our small business and personal cards that
                  three different accountants missed. Paid for itself forever."
                </p>
                <div className="flex items-center gap-1 text-primary mt-space-sm">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface-variant ml-1">5.0</span>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="flex flex-col p-space-md rounded-2xl bg-surface-container min-w-[280px] w-full shrink-0 snap-center shadow-sm">
                <div className="flex items-center gap-3 mb-space-sm">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    data-alt="Smiling modern couple Ali and Mina sitting in a cozy contemporary apartment living room looking relaxed and happy together"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTLYAAd8XTkdJQq-ecrhEy3wfMeBlAjwOJAtkxKVJ1gYPZAnaW7GFteQQQHkBYu4UObSCQWyN-clxw6WtMz_UUc1XFDCGo_kAf-YieNJd9ViKCntw9Qd_4V0whb2k3Ns7_KiDuQuN7pIMseg8UXCnYQhn4FuD9SVCgp_S9wq15D1XjQj5sQax7Foi5XBerTlC9w-TDyHYWu6nPqPDXnup07cwKvPF9S2tj6A0U0A"
                    alt=""
                  />{" "}
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface font-semibold">{"Ali & Mina"}</span>{" "}
                    <span className="font-label-sm text-label-sm text-on-surface-variant">First-Time Homeowners</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface italic">
                  "The interactive chat is pure magic. We simply asked 'Can we afford an $800 weekend in Napa?' and
                  Penny calculated our upcoming tax bills and approved it guilt-free."
                </p>
                <div className="flex items-center gap-1 text-primary mt-space-sm">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface-variant ml-1">5.0</span>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="flex flex-col p-space-md rounded-2xl bg-surface-container min-w-[280px] w-full shrink-0 snap-center shadow-sm">
                <div className="flex items-center gap-3 mb-space-sm">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    data-alt="Handsome software architect Reza M wearing glasses with a stylish dark turtleneck smiling warmly in an office setting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-OKSA_ajBsGPBvDP8TBW4XjmkVp8qIVpk78ORUT9XxiahW5wOmlG8tz9-evXPMzHBS0by3mj8BbUWx6Oz5KLDGsf6JtnNEKL5XIOOU-ffJW-3JyH_3rSzIwxiGM1z0-QLTZPFxUFV8GRs4vCC8E4ozchuyHFED7CVXZ8YmKgzsnFG-KM-Lr1vGzo3cgWaV07uNKoYdOtfGe2VPhr86Y8L1JlqS96047TlF2mujQ"
                    alt=""
                  />{" "}
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface font-semibold">Reza M.</span>{" "}
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Staff Engineer</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface italic">
                  "Privacy was my biggest blocker for AI finance. Knowing Penny runs local-first inference tokens with
                  zero third-party telemetry gave me total confidence."
                </p>
                <div className="flex items-center gap-1 text-primary mt-space-sm">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface-variant ml-1">5.0</span>
                </div>
              </div>
            </div>
          </section>
          {/* Bottom Hero CTA Card */}
          <section className="flex flex-col w-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-container-high to-surface-container p-space-lg shadow-xl">
            <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-primary/15 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25 mb-space-sm">
                <span className="material-symbols-outlined text-on-primary text-[28px]">rocket_launch</span>
              </div>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-space-xs">
                Ready for Financial Sovereignty?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md max-w-xs">
                Join over 42,000 users putting their finances on self-optimizing autopilot today.
              </p>{" "}
              <button className="w-full py-3.5 px-6 rounded-xl bg-primary text-on-primary font-title-md text-title-md shadow-lg shadow-primary/20 active:scale-95 transition-all mb-space-sm">
                Claim Your 30-Day Free Trial
              </button>{" "}
              <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-primary">check</span> No credit card
                required to test
              </span>
            </div>
          </section>
          {/* Mobile Footer Links */}
          <footer className="flex flex-col w-full pt-space-md border-t border-surface-container-highest/40">
            <div className="flex justify-between items-center mb-space-md">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-md bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[14px]">auto_awesome</span>
                </div>{" "}
                <span className="font-title-md text-title-md text-on-surface font-semibold tracking-tight">
                  Penny AI
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Privacy
                </a>{" "}
                <a
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Security
                </a>{" "}
                <a
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  API Docs
                </a>
              </div>
            </div>
            <div className="flex flex-col text-center">
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                © 2025 Penny Financial Technologies Inc. All rights reserved. Encrypted end-to-end.
              </p>
            </div>
          </footer>
        </div>
      </main>
      <nav
        className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.4)]"
        data-active-classes="text-primary font-semibold"
      >
        <div className="flex justify-around items-center h-16 px-space-xs">
          <a
            className="flex flex-col items-center justify-center w-14 h-12 text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="overview"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px]">dashboard</span>
            <span className="font-label-sm text-label-sm mt-1">Overview</span>
          </a>
          <a
            className="flex flex-col items-center justify-center w-14 h-12 text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="assistant"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px]">psychology</span>
            <span className="font-label-sm text-label-sm mt-1">Penny AI</span>
          </a>
          <a
            className="flex flex-col items-center justify-center w-14 h-12 text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="cash-flow"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
            <span className="font-label-sm text-label-sm mt-1">Flow</span>
          </a>
          <a
            aria-current="page"
            className="flex flex-col items-center justify-center w-14 h-12 transition-colors text-primary font-semibold"
            data-path="explore"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px]">hub</span>
            <span className="font-label-sm text-label-sm mt-1">Explore</span>
          </a>
          <a
            className="flex flex-col items-center justify-center w-14 h-12 text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="profile-settings"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px]">tune</span>
            <span className="font-label-sm text-label-sm mt-1">Settings</span>
          </a>
        </div>
      </nav>
    </>
  );
}
