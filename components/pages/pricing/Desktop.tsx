"use client";

import { useState } from "react";
import Link from "next/link";

const pageStyles =
  "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";

export default function PricingDesktop() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [spend, setSpend] = useState(3500);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const toggleFaq = (i: number) =>
    setOpenFaqs((open) => (open.includes(i) ? open.filter((x) => x !== i) : [...open, i]));
  const annualEst = Math.round(spend * 12 * 0.01 + 105);
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
              className="hidden xl:flex items-center gap-space-xs"
              data-active-classes="bg-surface-container-high text-on-surface font-bold rounded-lg"
            >
              <Link
                className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 transition-colors rounded-lg font-label-md text-label-md"
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
                aria-current="page"
                className="px-space-md py-space-xs transition-colors bg-surface-container-high text-on-surface font-bold rounded-lg"
                data-path="pricing"
                href="/pricing"
              >
                Pricing
              </Link>
              <Link
                className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 transition-colors rounded-lg font-label-md text-label-md"
                data-path="security-and-trust"
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
              Get Started Free
            </Link>
            <div className="flex items-center pl-space-xs">
              <a className="block relative group" data-path="account-settings" href="#">
                <img
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover shadow-[0_0_0_2px_rgba(255,255,255,0.08)] group-hover:shadow-[0_0_0_2px_rgba(78,222,163,0.5)] transition-all"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMwTruBD4DWmBSC_HmoRgoLW510be6dM7hUbXKmA6cF7TB-K24cvqCBQv3IgLrzRiVVCE5VzOJQotfCZli1snTsgi6gqAjiS1o1LKd6UkPT0GFmiRyJ21642NOCs8SvJYY3a28aiPt4p9Ktkl-tB1jU-ekMpj4Z3PjmnFGOngd1tlcn6v8XGBR3F2S2Lao0_AxndzYwFXTF20eMJIXlIjodYqb-MSNqunNk4-P6A"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* Interactive Background Radial Lights */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-96 right-10 w-[420px] h-[420px] bg-secondary-container/20 rounded-full blur-[160px] pointer-events-none" />
            {/* Hero Header Section */}
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg text-center relative z-10">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm shadow-sm mb-space-md">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>{" "}
                <span>{"Transparent & Sovereign-Grade Financial Planning"}</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight max-w-4xl mx-auto mb-space-sm">
                Transparent, Value-First Pricing.
                <br /> <span className="text-primary">No Hidden Bank Fees.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-space-xl">
                Predictive cash-flow forecasting, automated rebalancing, and conversational AI guidance. Choose the plan
                tailored to your wealth velocity.
              </p>
              {/* Billing Toggle Switch */}
              <div className="inline-flex items-center gap-space-md bg-surface-container-high p-1.5 rounded-full shadow-inner">
                <button
                  className={
                    isAnnual
                      ? "px-space-lg py-2 rounded-full font-label-md text-label-md transition-all text-on-surface-variant hover:text-on-surface cursor-pointer"
                      : "px-space-lg py-2 rounded-full font-label-md text-label-md transition-all bg-primary-container text-on-primary-container font-semibold shadow-md cursor-pointer"
                  }
                  id="billing-monthly"
                  onClick={() => setIsAnnual(false)}
                >
                  Monthly Billing
                </button>{" "}
                <button
                  className={
                    isAnnual
                      ? "px-space-lg py-2 rounded-full font-label-md text-label-md transition-all bg-primary-container text-on-primary-container font-semibold shadow-md flex items-center gap-1.5 cursor-pointer"
                      : "px-space-lg py-2 rounded-full font-label-md text-label-md transition-all text-on-surface-variant hover:text-on-surface flex items-center gap-1.5 cursor-pointer"
                  }
                  id="billing-annual"
                  onClick={() => setIsAnnual(true)}
                >
                  <span>Annual Billing</span>{" "}
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm tracking-wide">
                    SAVE 20%
                  </span>
                </button>
              </div>
            </div>
            {/* 3-Tier Pricing Grid */}
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pb-space-xl relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-stretch">
                {/* Tier 1: Free */}
                <div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-title-lg text-title-lg text-on-surface font-bold">Free</span>{" "}
                      <span className="px- space-xs py-1 rounded-full bg-surface-container text-outline font-label-sm text-label-sm px-2.5">
                        Foundational
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant min-h-[36px] mb-space-lg">
                      For casual tracking, periodic expense check-ins, and manual statement audits.
                    </p>
                    <div className="flex items-baseline gap-1 mb-space-lg">
                      <span className="font-numeric-display text-numeric-display text-on-surface">$0</span>{" "}
                      <span className="font-body-sm text-body-sm text-outline">/ month</span>
                    </div>
                    <div className="space-y-space-sm mb-space-xl">
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>{" "}
                        <span>{"Manual, CSV & PDF statement upload"}</span>
                      </div>
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>{" "}
                        <span>{"Basic auto-categorization & monthly summary"}</span>
                      </div>
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>{" "}
                        <span>1 active savings piggybank target</span>
                      </div>
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-outline">
                        <span className="material-symbols-outlined text-outline text-base mt-0.5">close</span>{" "}
                        <span>Automated live bank sync</span>
                      </div>
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-outline">
                        <span className="material-symbols-outlined text-outline text-base mt-0.5">close</span>{" "}
                        <span>AI conversational queries</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link
                      className="w-full inline-flex items-center justify-center py-space-sm px-space-md rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright transition-colors font-label-md text-label-md font-semibold text-center"
                      data-path="get-started"
                      href="/get-started"
                    >
                      Start Free
                    </Link>{" "}
                    <p className="font-label-sm text-label-sm text-outline text-center mt-2">
                      Zero commitment • No credit card
                    </p>
                  </div>
                </div>
                {/* Tier 2: Plus (Most Popular) */}
                <div className="relative flex flex-col justify-between rounded-xl bg-surface-container p-space-lg shadow-xl shadow-primary/5 transition-transform duration-300 hover:-translate-y-2 lg:-translate-y-3">
                  {/* Ambient Emerald Highlight Glow */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-space-md py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold shadow-lg flex items-center gap-1 uppercase tracking-wider">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                      bolt
                    </span>{" "}
                    <span>Most Popular</span>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-space-md pt-2">
                      <span className="font-title-lg text-title-lg text-primary font-bold">Plus</span>{" "}
                      <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-medium">
                        14-Day Free Trial
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant min-h-[36px] mb-space-lg">
                      Automate live tracking, purge unseen recurring drains, and get dynamic proactive advice.
                    </p>
                    <div className="flex items-baseline gap-1 mb-space-lg">
                      <span className="font-numeric-display text-numeric-display text-on-surface" id="price-plus">
                        {isAnnual ? "$4" : "$5"}
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-outline" id="period-plus">
                        {isAnnual ? "/ mo (billed $48/yr)" : "/ month"}
                      </span>
                    </div>
                    <div className="space-y-space-sm mb-space-xl">
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>{" "}
                        <span>Automatic bank sync (Plaid / TrueLayer)</span>
                      </div>
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>{" "}
                        <span>{"Smart proactive alerts & anomaly detection"}</span>
                      </div>
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>{" "}
                        <span>{"Unlimited savings goals & dynamic piggybanks"}</span>
                      </div>
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>{" "}
                        <span>AI Chat Assistant (up to 50 queries/month)</span>
                      </div>
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>{" "}
                        <span>Forgotten recurring subscription detection</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link
                      className="w-full inline-flex items-center justify-center py-space-sm px-space-md rounded-lg bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-all font-label-md text-label-md font-bold shadow-lg shadow-primary/20 text-center"
                      data-path="get-started"
                      href="/get-started"
                    >
                      Start 14-Day Free Trial
                    </Link>{" "}
                    <p className="font-label-sm text-label-sm text-on-surface-variant text-center mt-2">
                      No card required upfront • Cancel in 1 click
                    </p>
                  </div>
                </div>
                {/* Tier 3: Premium */}
                <div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-title-lg text-title-lg text-on-surface font-bold">Premium</span>{" "}
                      <span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">
                        High Net-Worth
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant min-h-[36px] mb-space-lg">
                      For couples, contractors, freelancers, and power strategists craving total control.
                    </p>
                    <div className="flex items-baseline gap-1 mb-space-lg">
                      <span className="font-numeric-display text-numeric-display text-on-surface" id="price-premium">
                        {isAnnual ? "$8" : "$10"}
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-outline" id="period-premium">
                        {isAnnual ? "/ mo (billed $96/yr)" : "/ month"}
                      </span>
                    </div>
                    <div className="space-y-space-sm mb-space-xl">
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>{" "}
                        <span>{"Shared household & family split budgets"}</span>
                      </div>
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>{" "}
                        <span>Advanced 90-day predictive cash flow forecasts</span>
                      </div>
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>{" "}
                        <span>Unlimited conversational AI Money Coach queries</span>
                      </div>
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>{" "}
                        <span>Quarterly tax set-aside algorithm for 1099 income</span>
                      </div>
                      <div className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>{" "}
                        <span>{"Priority concierged support & Excel data modeling"}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link
                      className="w-full inline-flex items-center justify-center py-space-sm px-space-md rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright transition-colors font-label-md text-label-md font-semibold text-center"
                      data-path="get-started"
                      href="/get-started"
                    >
                      Get Premium
                    </Link>{" "}
                    <p className="font-label-sm text-label-sm text-outline text-center mt-2">
                      Enterprise-grade encryption • Dedicated support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Trust & Value Proposition Badges */}
          <div className="w-full bg-surface-container-lowest py-space-lg">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
                <div className="flex flex-col items-center gap-space-xs p-space-sm">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-1">
                    <span className="material-symbols-outlined text-2xl">verified_user</span>
                  </div>{" "}
                  <span className="font-title-md text-title-md text-on-surface font-semibold">14-Day Free Trial</span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Test the full intelligence suite before spending a dime
                  </span>
                </div>
                <div className="flex flex-col items-center gap-space-xs p-space-sm">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-1">
                    <span className="material-symbols-outlined text-2xl">lock</span>
                  </div>{" "}
                  <span className="font-title-md text-title-md text-on-surface font-semibold">SOC-2 Readied</span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    256-bit bank encryption through audited Plaid protocols
                  </span>
                </div>
                <div className="flex flex-col items-center gap-space-xs p-space-sm">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-secondary mb-1">
                    <span className="material-symbols-outlined text-2xl">do_not_disturb_on</span>
                  </div>{" "}
                  <span className="font-title-md text-title-md text-on-surface font-semibold">Zero Data Resale</span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    We never monetize, scrape, or sell your purchase activity
                  </span>
                </div>
                <div className="flex flex-col items-center gap-space-xs p-space-sm">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-1">
                    <span className="material-symbols-outlined text-2xl">event_repeat</span>
                  </div>{" "}
                  <span className="font-title-md text-title-md text-on-surface font-semibold">
                    One-Click Cancellation
                  </span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    No phone calls, no hostage forms. Cancel effortlessly anytime
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Detailed Feature Comparison Matrix */}
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl w-full">
            <div className="text-center max-w-2xl mx-auto mb-space-lg">
              <span className="font-label-md text-label-md text-primary uppercase tracking-widest block mb-space-xs">
                Feature Deep-Dive
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Compare all capabilities side-by-side
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                Complete architectural transparency for your peace of mind.
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl bg-surface-container-low shadow-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-high text-on-surface">
                    <th className="p-space-md font-title-md text-title-md w-2/5">Capabilities</th>
                    <th className="p-space-md font-title-md text-title-md text-center w-1/5">Free</th>
                    <th className="p-space-md font-title-md text-title-md text-center w-1/5 text-primary">Plus</th>
                    <th className="p-space-md font-title-md text-title-md text-center w-1/5">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10 text-on-surface-variant font-body-md text-body-md">
                  {/* Category: Bank Connections */}
                  <tr className="bg-surface-container/50">
                    <td
                      className="px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider text-outline font-semibold"
                      colSpan={4}
                    >
                      {"Bank Connections & Data Pipeline"}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-space-md text-on-surface font-medium">Live Automatic Synchronization</td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-outline text-lg">horizontal_rule</span>
                    </td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    </td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-space-md text-on-surface font-medium">
                      {"Plaid & TrueLayer Verified Integration"}
                    </td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-outline text-lg">horizontal_rule</span>
                    </td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    </td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-space-md text-on-surface font-medium">Manual Statement Upload (PDF, CSV, OFX)</td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    </td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    </td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-space-md text-on-surface font-medium">Historical Transaction Storage</td>
                    <td className="p-space-md text-center font-label-md">90 Days</td>
                    <td className="p-space-md text-center font-label-md text-primary font-bold">Unlimited</td>
                    <td className="p-space-md text-center font-label-md font-bold">Unlimited</td>
                  </tr>
                  {/* Category: AI Engine */}
                  <tr className="bg-surface-container/50">
                    <td
                      className="px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider text-outline font-semibold"
                      colSpan={4}
                    >
                      {"Intelligence & Autonomous Insights"}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-space-md text-on-surface font-medium">Predictive Cash Flow Modeling</td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-outline text-lg">horizontal_rule</span>
                    </td>
                    <td className="p-space-md text-center font-label-md">30 Days Forward</td>
                    <td className="p-space-md text-center font-label-md text-primary font-bold">90 Days Forward</td>
                  </tr>
                  <tr>
                    <td className="p-space-md text-on-surface font-medium">Penny Conversational Copilot</td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-outline text-lg">horizontal_rule</span>
                    </td>
                    <td className="p-space-md text-center font-label-md">50 Queries / mo</td>
                    <td className="p-space-md text-center font-label-md text-primary font-bold">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-space-md text-on-surface font-medium">
                      {"Ghost Subscription Identifier & Alert"}
                    </td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-outline text-lg">horizontal_rule</span>
                    </td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    </td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-space-md text-on-surface font-medium">Automated Spend Anomaly Detection</td>
                    <td className="p-space-md text-center font-label-md">Weekly Digests</td>
                    <td className="p-space-md text-center font-label-md text-primary">Real-Time Push</td>
                    <td className="p-space-md text-center font-label-md text-primary">Real-Time + SMS</td>
                  </tr>
                  {/* Category: Collaboration & Tax */}
                  <tr className="bg-surface-container/50">
                    <td
                      className="px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider text-outline font-semibold"
                      colSpan={4}
                    >
                      {"Household, Tax & Operations"}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-space-md text-on-surface font-medium">{"Multi-User Split & Household Budgets"}</td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-outline text-lg">horizontal_rule</span>
                    </td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-outline text-lg">horizontal_rule</span>
                    </td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-space-md text-on-surface font-medium">Freelance / 1099 Quarterly Tax Set-Aside</td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-outline text-lg">horizontal_rule</span>
                    </td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-outline text-lg">horizontal_rule</span>
                    </td>
                    <td className="p-space-md text-center">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-space-md text-on-surface font-medium">Export Formats</td>
                    <td className="p-space-md text-center font-label-md">Basic CSV</td>
                    <td className="p-space-md text-center font-label-md">{"Custom CSV & PDF"}</td>
                    <td className="p-space-md text-center font-label-md text-primary font-bold">
                      Excel Models + API Webhooks
                    </td>
                  </tr>
                  {/* Category: Security & Support */}
                  <tr className="bg-surface-container/50">
                    <td
                      className="px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider text-outline font-semibold"
                      colSpan={4}
                    >
                      {"Security & Support Level"}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-space-md text-on-surface font-medium">{"Encryption & Security Level"}</td>
                    <td className="p-space-md text-center font-label-md">256-bit TLS</td>
                    <td className="p-space-md text-center font-label-md">256-bit TLS + Biometrics</td>
                    <td className="p-space-md text-center font-label-md">Air-Gapped Sovereign Vault</td>
                  </tr>
                  <tr>
                    <td className="p-space-md text-on-surface font-medium">Customer Support Channels</td>
                    <td className="p-space-md text-center font-label-md">{"Docs & Community"}</td>
                    <td className="p-space-md text-center font-label-md">In-App Chat (24h)</td>
                    <td className="p-space-md text-center font-label-md text-primary font-bold">
                      1-on-1 Dedicated Copilot Engineer
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Interactive ROI Calculator Widget */}
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pb-space-xl w-full">
            <div className="rounded-xl bg-surface-container-high p-space-lg lg:p-space-xl relative overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                <div className="lg:col-span-7 space-y-space-md">
                  <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-xs">calculate</span> Autonomous Payback Calculator
                  </span>{" "}
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Penny pays for itself within the first 12 days.
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                    Between unmonitored streaming subscriptions, forgotten SaaS trials, and overcharged utility tiers,
                    the typical American household loses $648/year.
                  </p>
                  <div className="space-y-space-xs pt-space-xs max-w-md">
                    <div className="flex justify-between font-label-md text-label-md text-on-surface">
                      <span>Estimated Monthly Spend:</span>{" "}
                      <span className="text-primary font-bold" id="spend-label">
                        {"$" + spend.toLocaleString()}
                      </span>
                    </div>{" "}
                    <input
                      className="w-full accent-primary bg-surface-container-lowest h-2 rounded-lg cursor-pointer"
                      id="spend-slider"
                      onInput={(e) => setSpend(parseInt(e.currentTarget.value, 10))}
                      max="15000"
                      min="1000"
                      step="500"
                      type="range"
                      defaultValue="3500"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5 bg-surface-container-low p-space-lg rounded-xl shadow-inner flex flex-col justify-between space-y-space-md">
                  <div>
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">
                      Estimated Annual Found Capital
                    </span>{" "}
                    <div className="font-numeric-display text-numeric-display text-primary mt-1" id="roi-savings">
                      {"$" + annualEst.toLocaleString() + " / yr"}
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                      Based on algorithmic discovery of unused subscriptions and intelligent budget reallocation.
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <Link
                      className="w-full inline-flex items-center justify-center py-space-sm px-space-md rounded-lg bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-all font-label-md text-label-md font-bold text-center"
                      data-path="get-started"
                      href="/get-started"
                    >
                      {"Claim Your Free Trial & Audit"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Frequently Asked Questions Section */}
          <div className="max-w-4xl mx-auto px-margin-mobile lg:px-margin pb-space-xl w-full">
            <div className="text-center mb-space-lg">
              <span className="font-label-md text-label-md text-primary uppercase tracking-widest block mb-space-xs">
                {"Answers & Clarity"}
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-space-sm">
              {/* FAQ item 1 */}
              <div className="rounded-xl bg-surface-container-low p-space-md transition-all shadow-sm">
                <button
                  className="faq-toggle w-full flex items-center justify-between text-left font-title-md text-title-md text-on-surface hover:text-primary transition-colors cursor-pointer"
                  onClick={() => toggleFaq(0)}
                >
                  <span>Can I cancel anytime?</span>{" "}
                  <span
                    className="material-symbols-outlined text-outline transition-transform duration-200"
                    style={{ transform: openFaqs.includes(0) ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    expand_more
                  </span>
                </button>{" "}
                <div
                  className={
                    openFaqs.includes(0)
                      ? "faq-content pt-space-sm font-body-md text-body-md text-on-surface-variant"
                      : "faq-content hidden pt-space-sm font-body-md text-body-md text-on-surface-variant"
                  }
                >
                  Yes, absolutely. You can cancel your Plus or Premium subscription with a single tap in your Account
                  Settings. Your access will remain completely unhampered through the end of your prepaid billing
                  period, with zero cancellation penalties or phone calls required.
                </div>
              </div>
              {/* FAQ item 2 */}
              <div className="rounded-xl bg-surface-container-low p-space-md transition-all shadow-sm">
                <button
                  className="faq-toggle w-full flex items-center justify-between text-left font-title-md text-title-md text-on-surface hover:text-primary transition-colors cursor-pointer"
                  onClick={() => toggleFaq(1)}
                >
                  <span>Does Penny sell my transaction data to advertisers?</span>{" "}
                  <span
                    className="material-symbols-outlined text-outline transition-transform duration-200"
                    style={{ transform: openFaqs.includes(1) ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    expand_more
                  </span>
                </button>{" "}
                <div
                  className={
                    openFaqs.includes(1)
                      ? "faq-content pt-space-sm font-body-md text-body-md text-on-surface-variant"
                      : "faq-content hidden pt-space-sm font-body-md text-body-md text-on-surface-variant"
                  }
                >
                  Never. Penny’s business model is 100% software subscription-based. We do not sell, rent, monetize, or
                  broker consumer transaction histories, anonymized financial behavioral sets, or credit attributes to
                  third parties, lenders, or insurance underwriters.
                </div>
              </div>
              {/* FAQ item 3 */}
              <div className="rounded-xl bg-surface-container-low p-space-md transition-all shadow-sm">
                <button
                  className="faq-toggle w-full flex items-center justify-between text-left font-title-md text-title-md text-on-surface hover:text-primary transition-colors cursor-pointer"
                  onClick={() => toggleFaq(2)}
                >
                  <span>What banks and credit unions are supported?</span>{" "}
                  <span
                    className="material-symbols-outlined text-outline transition-transform duration-200"
                    style={{ transform: openFaqs.includes(2) ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    expand_more
                  </span>
                </button>{" "}
                <div
                  className={
                    openFaqs.includes(2)
                      ? "faq-content pt-space-sm font-body-md text-body-md text-on-surface-variant"
                      : "faq-content hidden pt-space-sm font-body-md text-body-md text-on-surface-variant"
                  }
                >
                  Through verified API partnerships with Plaid and TrueLayer, Penny connects to over 11,500 financial
                  institutions across North America, the United Kingdom, and the European Union, including Chase, Bank
                  of America, Wells Fargo, Capital One, Revolut, Monzo, and regional federal credit unions.
                </div>
              </div>
              {/* FAQ item 4 */}
              <div className="rounded-xl bg-surface-container-low p-space-md transition-all shadow-sm">
                <button
                  className="faq-toggle w-full flex items-center justify-between text-left font-title-md text-title-md text-on-surface hover:text-primary transition-colors cursor-pointer"
                  onClick={() => toggleFaq(3)}
                >
                  <span>How does the 14-day free trial work?</span>{" "}
                  <span
                    className="material-symbols-outlined text-outline transition-transform duration-200"
                    style={{ transform: openFaqs.includes(3) ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    expand_more
                  </span>
                </button>{" "}
                <div
                  className={
                    openFaqs.includes(3)
                      ? "faq-content pt-space-sm font-body-md text-body-md text-on-surface-variant"
                      : "faq-content hidden pt-space-sm font-body-md text-body-md text-on-surface-variant"
                  }
                >
                  When activating the Plus trial, no payment method is required upfront. You receive unfettered,
                  full-tier access to real-time synchronization, conversational AI inquiries, and automated subscription
                  sweeps for 14 calendar days. If you choose not to subscribe, your account transitions automatically to
                  the Free Tier.
                </div>
              </div>
              {/* FAQ item 5 */}
              <div className="rounded-xl bg-surface-container-low p-space-md transition-all shadow-sm">
                <button
                  className="faq-toggle w-full flex items-center justify-between text-left font-title-md text-title-md text-on-surface hover:text-primary transition-colors cursor-pointer"
                  onClick={() => toggleFaq(4)}
                >
                  <span>Is my data securely encrypted?</span>{" "}
                  <span
                    className="material-symbols-outlined text-outline transition-transform duration-200"
                    style={{ transform: openFaqs.includes(4) ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    expand_more
                  </span>
                </button>{" "}
                <div
                  className={
                    openFaqs.includes(4)
                      ? "faq-content pt-space-sm font-body-md text-body-md text-on-surface-variant"
                      : "faq-content hidden pt-space-sm font-body-md text-body-md text-on-surface-variant"
                  }
                >
                  Penny operates with bank-grade 256-bit TLS encryption in transit and AES-256 at rest. We utilize
                  read-only tokens through certified aggregator gateways, meaning Penny cannot execute unauthorized
                  withdrawals, originate wire transfers, or mutate account credentials.
                </div>
              </div>
            </div>
          </div>
          {/* Bottom CTA Banner Section */}
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pb-space-xl w-full">
            <div className="rounded-xl bg-surface-container p-space-lg lg:p-space-xl text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-1 text-primary font-label-md text-label-md mb-space-sm">
                  <span className="material-symbols-outlined text-sm">stars</span> AI-Native Sovereign Wealth
                  Architecture
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
                  Master your money without the mental friction.
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  Join thousands of professionals utilizing Penny AI to predict, preserve, and grow their liquid wealth.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
                  <Link
                    className="w-full sm:w-auto px-space-xl py-space-sm bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary rounded-lg font-label-md text-label-md font-bold transition-all shadow-lg shadow-primary/20"
                    data-path="get-started"
                    href="/get-started"
                  >
                    Start Free 14-Day Trial
                  </Link>{" "}
                  <Link
                    className="w-full sm:w-auto px-space-lg py-space-sm bg-surface-container-high text-on-surface hover:bg-surface-bright rounded-lg font-label-md text-label-md font-semibold transition-colors"
                    data-path="security-and-trust"
                    href="/security-and-trust"
                  >
                    Explore Security Whitepaper
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">Product</h4>
              <ul className="space-y-space-xs font-body-sm text-body-sm">
                <li>
                  <a
                    className="hover:text-primary transition-colors block py-0.5"
                    data-path="auto-categorization"
                    href="#"
                  >
                    Auto-Categorization
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors block py-0.5" data-path="ai-insights" href="#">
                    AI Insights
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors block py-0.5" data-path="smart-alerts" href="#">
                    Smart Alerts
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors block py-0.5" data-path="subscriptions" href="#">
                    Subscriptions
                  </a>
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
              <a className="hover:text-on-surface transition-colors" data-path="privacy-policy" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-on-surface transition-colors" data-path="terms-of-service" href="#">
                Terms of Service
              </a>
              <a className="hover:text-on-surface transition-colors" data-path="startup-plan" href="#">
                Startup Plan
              </a>
              <a className="hover:text-on-surface transition-colors" data-path="api-docs" href="#">
                API Docs
              </a>
              <a className="hover:text-on-surface transition-colors" data-path="financial-disclaimers" href="#">
                Financial Disclaimers
              </a>
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
