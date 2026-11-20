"use client";

import MobileMenu from "@/components/MobileMenu";
import { useState } from "react";

const pageStyles =
  "@layer base{html,body{width:100vw;margin:0;padding:0;background-color:#0e1321;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}\nbody {\n      min-height: max(884px, 100dvh);\n    }";

export default function PricingMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [spend, setSpend] = useState(3500);
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const [openFaqs, setOpenFaqs] = useState<string[]>([]);
  const toggleFaq = (id: string) =>
    setOpenFaqs((open) => (open.includes(id) ? open.filter((x) => x !== id) : [...open, id]));
  const annualEst = Math.round(spend * 0.0125 * 12 + 150);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.2)] pt-safe">
        <div className="h-16 px-margin-mobile flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <button
              aria-expanded={menuOpen}
              aria-label="Open Menu"
              onClick={() => setMenuOpen(true)}
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
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="flex flex-col relative w-full px-margin-mobile pt-16 pb-24 bg-surface min-h-screen">
        <div className="flex flex-col w-full gap-space-lg select-none">
          {/* Top Intro Badge & Headline */}
          <div className="flex flex-col items-center text-center px-space-xs pt-space-xs gap-space-sm">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm shadow-[0_0_16px_rgba(49,49,192,0.35)]">
              <span className="material-symbols-outlined text-[14px]">verified_user</span>{" "}
              <span>{"Transparent & Sovereign-Grade Financial Planning"}</span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">
              Transparent, Value-First Pricing. <span className="text-primary">No Hidden Bank Fees.</span>
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Invest in financial peace of mind. Penny AI continuously finds leaks, optimizes tax set-asides, and puts
              capital back in your pocket.
            </p>
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-space-sm mt-space-xs bg-surface-container-low p-1.5 rounded-full shadow-inner">
              <button
                className={
                  billing === "monthly"
                    ? "px-4 py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-[0_2px_12px_rgba(78,222,163,0.3)] transition-all duration-300"
                    : "px-4 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant transition-all duration-300"
                }
                id="toggle-monthly"
                onClick={() => setBilling("monthly")}
              >
                Monthly
              </button>{" "}
              <button
                className={
                  billing === "annual"
                    ? "px-4 py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-[0_2px_12px_rgba(78,222,163,0.3)] transition-all duration-300 flex items-center gap-1.5"
                    : "px-4 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant transition-all duration-300 flex items-center gap-1.5"
                }
                id="toggle-annual"
                onClick={() => setBilling("annual")}
              >
                <span>Annual</span>{" "}
                <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-on-primary text-primary font-semibold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
          {/* Pricing Cards Stack */}
          <div className="flex flex-col gap-space-md w-full">
            {/* Tier 1: Free */}
            <div className="relative bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-md shadow-md transition-transform duration-200 active:scale-[0.99]">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-1 text-on-surface-variant font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px]">eco</span> <span>Starter Plan</span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Free</h2>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-baseline gap-1">
                    <span className="font-numeric-display text-numeric-display text-on-surface">$0</span>{" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">/mo</span>
                  </div>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Forever free</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Core manual tracking to gain pristine personal clarity with zero commitment.
              </p>{" "}
              <button className="w-full py-3 rounded-lg bg-surface-container text-on-surface font-title-md text-title-md hover:bg-surface-container-high transition-colors text-center shadow-sm">
                Get Started Free
              </button>{" "}
              <div className="flex flex-col gap-space-sm pt-space-xs">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>{" "}
                  <span className="font-body-md text-body-md text-on-surface">
                    {"CSV & statement manual ledger import"}
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>{" "}
                  <span className="font-body-md text-body-md text-on-surface">
                    Standard deterministic category tags
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>{" "}
                  <span className="font-body-md text-body-md text-on-surface">1 dedicated Piggybank vault goal</span>
                </div>
                <div className="flex items-center gap-space-sm opacity-50">
                  <span className="material-symbols-outlined text-outline text-[18px]">block</span>{" "}
                  <span className="font-body-md text-body-md text-on-surface-variant">No automated bank syncing</span>
                </div>
              </div>
            </div>
            {/* Tier 2: Plus (Featured Hero Card) */}
            <div className="relative bg-surface-container rounded-xl p-space-lg flex flex-col gap-space-md shadow-[0_12px_32px_-4px_rgba(78,222,163,0.18)] transition-transform duration-200">
              {/* Glow ambient indicator */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary via-primary-container to-secondary text-surface-container-lowest font-label-md text-label-md font-bold shadow-[0_0_18px_rgba(78,222,163,0.6)] animate-pulse">
                <span className="material-symbols-outlined text-[15px]">stars</span> <span>MOST POPULAR</span>
              </div>
              <div className="flex justify-between items-start pt-1">
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-1 text-primary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px]">bolt</span> <span>Intelligent Copilot</span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Plus</h2>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-baseline gap-1">
                    <span className="font-numeric-display text-numeric-display text-primary" id="plus-price">
                      {billing === "annual" ? "$4" : "$5"}
                    </span>{" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">/mo</span>
                  </div>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface-variant" id="plus-billing-label">
                    {billing === "annual" ? "Billed annually ($48/yr)" : "Billed monthly ($60/yr)"}
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"Self-driving money monitoring that sweeps for stealth subscriptions & predicts balance drops."}
              </p>{" "}
              <button className="w-full py-3.5 rounded-lg bg-primary text-on-primary font-title-md text-title-md font-bold shadow-[0_4px_20px_rgba(78,222,163,0.35)] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                <span>Start 14-Day Free Trial</span>{" "}
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>{" "}
              <div className="flex flex-col gap-space-sm pt-space-xs">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>{" "}
                  <span className="font-body-md text-body-md text-on-surface">
                    {"Direct bank sync (Plaid & TrueLayer 12,000+ banks)"}
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>{" "}
                  <span className="font-body-md text-body-md text-on-surface">
                    {"Proactive AI anomaly detection & drop alerts"}
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>{" "}
                  <span className="font-body-md text-body-md text-on-surface">
                    {"Forgotten subscription hunter & one-tap cancellation"}
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>{" "}
                  <span className="font-body-md text-body-md text-on-surface">
                    Unlimited Piggybank automated savings targets
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>{" "}
                  <span className="font-body-md text-body-md text-on-surface">
                    50 Penny AI conversational queries per month
                  </span>
                </div>
              </div>
            </div>
            {/* Tier 3: Premium */}
            <div className="relative bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-md shadow-md transition-transform duration-200">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px]">psychology</span>{" "}
                    <span>{"Family & Sovereign Pro"}</span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Premium</h2>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-baseline gap-1">
                    <span className="font-numeric-display text-numeric-display text-on-surface" id="premium-price">
                      {billing === "annual" ? "$8" : "$10"}
                    </span>{" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">/mo</span>
                  </div>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface-variant" id="premium-billing-label">
                    {billing === "annual" ? "Billed annually ($96/yr)" : "Billed monthly ($120/yr)"}
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                The full autonomous suite: multi-member household vaults, tax forecasts, and unconstrained intelligence.
              </p>{" "}
              <button className="w-full py-3 rounded-lg bg-secondary-container/40 text-secondary font-title-md text-title-md hover:bg-secondary-container/60 transition-colors text-center shadow-sm">
                Upgrade to Premium
              </button>{" "}
              <div className="flex flex-col gap-space-sm pt-space-xs">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>{" "}
                  <span className="font-body-md text-body-md text-on-surface">
                    {"Shared household, partner & family budgets"}
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>{" "}
                  <span className="font-body-md text-body-md text-on-surface">
                    90-day predictive Monte-Carlo cash flow forecast
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>{" "}
                  <span className="font-body-md text-body-md text-on-surface">
                    {"Unlimited conversational Penny queries & scenario sandbox"}
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>{" "}
                  <span className="font-body-md text-body-md text-on-surface">
                    Quarterly 1099/freelance tax set-aside optimizer
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>{" "}
                  <span className="font-body-md text-body-md text-on-surface">
                    {"Priority copilot sync channel & human CFP audit review"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Autonomous Payback Calculator Widget */}
          <div className="bg-surface-container rounded-xl p-space-lg flex flex-col gap-space-md shadow-md relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">calculate</span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface">Autonomous Payback</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Realized return from AI optimization
                  </p>
                </div>
              </div>{" "}
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                Self-Funding
              </span>
            </div>
            {/* Interactive slider */}
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex justify-between font-label-md text-label-md">
                <span className="text-on-surface-variant">Monthly spending volume:</span>{" "}
                <span className="text-primary font-bold" id="spend-amount">{`$${spend.toLocaleString()}/mo`}</span>
              </div>{" "}
              <input
                className="w-full accent-primary h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer"
                id="spend-slider"
                max="12000"
                min="1000"
                onInput={(e) => setSpend(Number(e.currentTarget.value))}
                step="500"
                type="range"
                defaultValue="3500"
              />
            </div>
            {/* Result Box */}
            <div className="bg-surface-container-low rounded-lg p-space-md flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Avg. Estimated Capital Saved
                </span>{" "}
                <span className="font-numeric-display text-numeric-display text-primary leading-tight" id="calc-result">
                  {`$${annualEst}`}
                  <span className="font-body-md text-body-md text-on-surface-variant">/yr</span>
                </span>
              </div>
              <div className="flex flex-col items-end text-right">
                <span className="font-label-sm text-label-sm text-primary flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> 10.9x ROI
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">vs $48/yr Plus plan</span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant italic">
              Calculated from recurring ghost subscriptions canceled, duplicate charge recoveries, and high-yield idle
              balance sweeps.
            </p>
          </div>
          {/* Trust Guarantee Strip (4-Item) */}
          <div className="bg-surface-container-low rounded-xl p-space-md grid grid-cols-2 gap-space-md shadow-sm">
            <div className="flex items-start gap-space-xs">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[18px]">history</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-label-md text-label-md text-on-surface">14-Day Free Trial</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">No charge until day 15</p>
              </div>
            </div>
            <div className="flex items-start gap-space-xs">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[18px]">lock</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-label-md text-label-md text-on-surface">SOC-2 Type II</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">256-bit vault encryption</p>
              </div>
            </div>
            <div className="flex items-start gap-space-xs">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[18px]">visibility_off</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-label-md text-label-md text-on-surface">Zero Data Resale</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">We never monetize data</p>
              </div>
            </div>
            <div className="flex items-start gap-space-xs">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-tertiary shrink-0">
                <span className="material-symbols-outlined text-[18px]">touch_app</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-label-md text-label-md text-on-surface">1-Tap Cancellation</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">No friction, no traps</p>
              </div>
            </div>
          </div>
          {/* Mobile Feature Comparison Matrix (Accordion/Condensed) */}
          <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setComparisonOpen((v) => !v)}
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">tune</span>{" "}
                <span className="font-title-md text-title-md text-on-surface">Feature Comparison</span>
              </div>{" "}
              <span
                className="material-symbols-outlined text-on-surface-variant transition-transform duration-200"
                id="comparison-chevron"
              >
                {comparisonOpen ? "expand_less" : "expand_more"}
              </span>
            </div>
            {/* Comparison Body */}
            <div
              className={
                comparisonOpen
                  ? "flex-col gap-space-sm pt-space-xs overflow-x-auto flex"
                  : "hidden flex-col gap-space-sm pt-space-xs overflow-x-auto"
              }
              id="comparison-content"
            >
              <div className="min-w-[280px] flex flex-col gap-2">
                {/* Row Header */}
                <div className="grid grid-cols-4 py-1 text-on-surface-variant font-label-sm text-label-sm border-b border-surface-container-high pb-2">
                  <span>Feature</span> <span className="text-center">Free</span>{" "}
                  <span className="text-center text-primary font-bold">Plus</span>{" "}
                  <span className="text-center text-secondary">Prem.</span>
                </div>
                <div className="grid grid-cols-4 py-1.5 items-center font-body-sm text-body-sm">
                  <span className="text-on-surface">Live Bank Sync</span>{" "}
                  <span className="text-center text-outline">✕</span>{" "}
                  <span className="text-center text-primary font-bold">✓</span>{" "}
                  <span className="text-center text-primary font-bold">✓</span>
                </div>
                <div className="grid grid-cols-4 py-1.5 items-center font-body-sm text-body-sm bg-surface-container/50 rounded px-1">
                  <span className="text-on-surface">AI Queries / mo</span>{" "}
                  <span className="text-center text-on-surface-variant">0</span>{" "}
                  <span className="text-center text-primary font-bold">50</span>{" "}
                  <span className="text-center text-secondary font-bold">Unlim.</span>
                </div>
                <div className="grid grid-cols-4 py-1.5 items-center font-body-sm text-body-sm">
                  <span className="text-on-surface">Sub Hunter</span>{" "}
                  <span className="text-center text-outline">✕</span>{" "}
                  <span className="text-center text-primary font-bold">✓</span>{" "}
                  <span className="text-center text-primary font-bold">✓</span>
                </div>
                <div className="grid grid-cols-4 py-1.5 items-center font-body-sm text-body-sm bg-surface-container/50 rounded px-1">
                  <span className="text-on-surface">Household Vaults</span>{" "}
                  <span className="text-center text-outline">✕</span>{" "}
                  <span className="text-center text-outline">✕</span>{" "}
                  <span className="text-center text-secondary font-bold">✓</span>
                </div>
                <div className="grid grid-cols-4 py-1.5 items-center font-body-sm text-body-sm">
                  <span className="text-on-surface">Tax Estimates</span>{" "}
                  <span className="text-center text-outline">✕</span>{" "}
                  <span className="text-center text-outline">✕</span>{" "}
                  <span className="text-center text-secondary font-bold">✓</span>
                </div>
              </div>
            </div>
          </div>
          {/* Frequently Asked Questions Accordion */}
          <div className="flex flex-col gap-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-surface px-space-xs">
              Frequently Asked Questions
            </h3>
            <div className="flex flex-col gap-space-xs">
              {/* FAQ 1 */}
              <div
                className="bg-surface-container-low rounded-lg p-space-md transition-colors cursor-pointer"
                onClick={() => toggleFaq("faq-1")}
              >
                <div className="flex items-center justify-between">
                  <span className="font-title-md text-title-md text-on-surface">Can I cancel anytime?</span>{" "}
                  <span
                    className={
                      openFaqs.includes("faq-1")
                        ? "material-symbols-outlined text-on-surface-variant transition-transform text-primary"
                        : "material-symbols-outlined text-on-surface-variant transition-transform"
                    }
                    id="icon-faq-1"
                  >
                    {openFaqs.includes("faq-1") ? "expand_less" : "expand_more"}
                  </span>
                </div>
                <p
                  className={
                    openFaqs.includes("faq-1")
                      ? "font-body-md text-body-md text-on-surface-variant mt-2"
                      : "hidden font-body-md text-body-md text-on-surface-variant mt-2"
                  }
                  id="faq-1"
                >
                  Yes. You can cancel with a single click inside Settings. You keep all access until your billing cycle
                  ends, and your aggregated data can be downloaded or purged with one touch.
                </p>
              </div>
              {/* FAQ 2 */}
              <div
                className="bg-surface-container-low rounded-lg p-space-md transition-colors cursor-pointer"
                onClick={() => toggleFaq("faq-2")}
              >
                <div className="flex items-center justify-between">
                  <span className="font-title-md text-title-md text-on-surface">How does Penny link to my bank?</span>{" "}
                  <span
                    className={
                      openFaqs.includes("faq-2")
                        ? "material-symbols-outlined text-on-surface-variant transition-transform text-primary"
                        : "material-symbols-outlined text-on-surface-variant transition-transform"
                    }
                    id="icon-faq-2"
                  >
                    {openFaqs.includes("faq-2") ? "expand_less" : "expand_more"}
                  </span>
                </div>
                <p
                  className={
                    openFaqs.includes("faq-2")
                      ? "font-body-md text-body-md text-on-surface-variant mt-2"
                      : "hidden font-body-md text-body-md text-on-surface-variant mt-2"
                  }
                  id="faq-2"
                >
                  We use Plaid and TrueLayer with read-only authorization. We never store or see your bank login
                  credentials, and no money can be moved without explicit multi-factor biometrics.
                </p>
              </div>
              {/* FAQ 3 */}
              <div
                className="bg-surface-container-low rounded-lg p-space-md transition-colors cursor-pointer"
                onClick={() => toggleFaq("faq-3")}
              >
                <div className="flex items-center justify-between">
                  <span className="font-title-md text-title-md text-on-surface">
                    What happens after the 14-day trial?
                  </span>{" "}
                  <span
                    className={
                      openFaqs.includes("faq-3")
                        ? "material-symbols-outlined text-on-surface-variant transition-transform text-primary"
                        : "material-symbols-outlined text-on-surface-variant transition-transform"
                    }
                    id="icon-faq-3"
                  >
                    {openFaqs.includes("faq-3") ? "expand_less" : "expand_more"}
                  </span>
                </div>
                <p
                  className={
                    openFaqs.includes("faq-3")
                      ? "font-body-md text-body-md text-on-surface-variant mt-2"
                      : "hidden font-body-md text-body-md text-on-surface-variant mt-2"
                  }
                  id="faq-3"
                >
                  We will notify you 2 days before the trial concludes. If you choose not to subscribe, your account
                  transitions automatically to the Free tier without interruption.
                </p>
              </div>
              {/* FAQ 4 */}
              <div
                className="bg-surface-container-low rounded-lg p-space-md transition-colors cursor-pointer"
                onClick={() => toggleFaq("faq-4")}
              >
                <div className="flex items-center justify-between">
                  <span className="font-title-md text-title-md text-on-surface">Are my AI queries private?</span>{" "}
                  <span
                    className={
                      openFaqs.includes("faq-4")
                        ? "material-symbols-outlined text-on-surface-variant transition-transform text-primary"
                        : "material-symbols-outlined text-on-surface-variant transition-transform"
                    }
                    id="icon-faq-4"
                  >
                    {openFaqs.includes("faq-4") ? "expand_less" : "expand_more"}
                  </span>
                </div>
                <p
                  className={
                    openFaqs.includes("faq-4")
                      ? "font-body-md text-body-md text-on-surface-variant mt-2"
                      : "hidden font-body-md text-body-md text-on-surface-variant mt-2"
                  }
                  id="faq-4"
                >
                  Yes. All conversational data is scrubbed of PII (names, routing digits) before processing, and we
                  maintain private sovereign inference instances that never train foundation models on your ledger.
                </p>
              </div>
            </div>
          </div>
          {/* Final CTA Card */}
          <div className="bg-gradient-to-b from-surface-container to-surface-container-low rounded-xl p-space-lg flex flex-col items-center text-center gap-space-md shadow-xl mt-space-xs mb-space-sm">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_16px_rgba(78,222,163,0.3)]">
              <span className="material-symbols-outlined text-[28px]">rocket_launch</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Ready to automate your wealth?</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
                Join 42,000+ people saving an average of $525 every year with Penny AI.
              </p>
            </div>{" "}
            <button className="w-full py-3.5 rounded-lg bg-primary text-on-primary font-title-md text-title-md font-bold shadow-[0_4px_24px_rgba(78,222,163,0.4)] active:scale-[0.98] transition-transform">
              Start 14-Day Free Trial
            </button>{" "}
            <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-primary">check</span> No credit card required
              to begin
            </span>
          </div>
        </div>
        {/* Interactive Client-side Logic */}
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
