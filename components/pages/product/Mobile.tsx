"use client";

import { useState } from "react";

import Link from "next/link";

const pageStyles =
  "@layer base{html,body{width:100vw;margin:0;padding:0;background-color:#0e1321;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}\nbody {\n      min-height: max(884px, 100dvh);\n    }\nbody {\n      min-height: max(884px, 100dvh);\n    }";

export default function ProductMobile() {
  const [canceled, setCanceled] = useState<Record<string, string>>({});
  const cancelSub = (elementId: string, amount: string) => setCanceled((s) => ({ ...s, [elementId]: amount }));
  const lastAmount = Object.values(canceled).at(-1);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.2)] pt-safe">
        <div className="h-16 px-margin-mobile flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
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
            <span className="font-title-md text-title-md text-on-surface hidden xs:block">Product (Mobile)</span>
            <button
              aria-label="Security Shield"
              className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary hover:text-primary-fixed focus:outline-none"
            >
              <span className="material-symbols-outlined text-[20px]">verified_user</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col relative w-full px-margin-mobile pt-16 pb-24 bg-surface min-h-screen">
        <div className="flex flex-col w-full pb-8 space-y-space-xl">
          {/* Mobile Hero Header & Pitch */}
          <section className="flex flex-col items-center text-center px-2 pt-2">
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 text-secondary mb-4 shadow-sm">
              <span
                className="material-symbols-outlined text-[16px] text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>{" "}
              <span className="font-label-sm text-label-sm tracking-wide">
                Product Overview · Autonomous Financial OS
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight max-w-sm mb-3">
              Your Entire Financial Life. <span className="text-primary">Understood</span> {"& Optimized."}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mb-6">
              Say goodbye to manual budgeting. Penny works 24/7 behind the scenes to classify, safeguard, and grow your
              wealth.
            </p>
            {/* CTAs Stacked for Mobile Reachability */}
            <div className="w-full flex flex-col gap-space-sm sm:flex-row justify-center max-w-xs">
              <button className="w-full py-3.5 px-6 rounded-xl bg-primary text-on-primary font-title-md text-title-md font-semibold flex items-center justify-center gap-2 shadow-[0_12px_24px_-8px_rgba(78,222,163,0.35)] active:scale-[0.98] transition-transform">
                <span>Start 14-Day Free Trial</span>{" "}
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>{" "}
              <button
                className="w-full py-3.5 px-6 rounded-xl bg-surface-container-high text-on-surface font-title-md text-title-md flex items-center justify-center gap-2 active:bg-surface-bright transition-colors"
                id="demoTrigger"
                onClick={() =>
                  alert("Interactive 2-Min Interactive Tour loaded! Penny is actively auditing demo dataset.")
                }
              >
                <span
                  className="material-symbols-outlined text-primary text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_circle
                </span>{" "}
                <span>Watch 2-Min Demo</span>
              </button>
            </div>
            {/* Quick Stats ticker */}
            <div className="grid grid-cols-3 gap-2 w-full mt-7 pt-4 bg-surface-container-lowest/60 rounded-xl p-3">
              <div className="flex flex-col items-center">
                <span className="font-title-lg text-title-lg text-primary">$418</span>{" "}
                <span className="font-label-sm text-label-sm text-on-surface-variant">Avg. Monthly Saved</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-title-lg text-title-lg text-secondary">99.4%</span>{" "}
                <span className="font-label-sm text-label-sm text-on-surface-variant">Auto Accuracy</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-title-lg text-title-lg text-tertiary">60s</span>{" "}
                <span className="font-label-sm text-label-sm text-on-surface-variant">Instant Audit</span>
              </div>
            </div>
          </section>
          {/* Interactive 3-Step Setup Flow */}
          <section className="flex flex-col space-y-space-md">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  How Penny Works
                </span>{" "}
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Effortless Autonomous Setup</h2>
              </div>{" "}
              <span className="material-symbols-outlined text-secondary text-[24px]">stream</span>
            </div>
            <div className="grid grid-cols-1 gap-space-sm">
              {/* Step 1 */}
              <div className="bg-surface-container-low rounded-xl p-space-md flex gap-space-md items-start shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary font-headline-sm text-headline-sm flex-shrink-0">
                  1
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-title-md text-title-md text-on-surface font-semibold">
                      Connect in Seconds
                    </span>{" "}
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary-container/20 text-primary">
                      Plaid Ready
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Bank-grade 256-bit encryption. Link cards or simply drop an export CSV without ever sharing
                    credentials.
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="bg-surface-container-low rounded-xl p-space-md flex gap-space-md items-start shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-secondary font-headline-sm text-headline-sm flex-shrink-0">
                  2
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-title-md text-title-md text-on-surface font-semibold">
                      AI Audits In 60 Seconds
                    </span>{" "}
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary">
                      Real-time
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Penny traverses 12 months of transactions to discover buried subs, hidden creeping fees, and
                    duplicate charges.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="bg-surface-container-low rounded-xl p-space-md flex gap-space-md items-start shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-tertiary font-headline-sm text-headline-sm flex-shrink-0">
                  3
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-title-md text-title-md text-on-surface font-semibold">
                      Execute Instant Nudges
                    </span>{" "}
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary">
                      Autonomous
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Tap once to cancel zombies, trigger high-yield auto stashes, or re-balance your disposable spending
                    budget.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Core Product Modules (Interactive Mobile Accordion / Cards) */}
          <section className="flex flex-col space-y-space-md">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                Engine Deep Dive
              </span>{" "}
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Designed to Outthink Your Expenses</h2>
            </div>
            {/* Module 1: Autonomous Categorization */}
            <div className="bg-surface-container rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
              <div className="p-space-lg flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">category</span>
                  </div>{" "}
                  <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-primary-container/20 text-primary font-semibold">
                    99.4% Accuracy
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface">Autonomous Categorization</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">
                  Never tag coffee again. Machine learning maps erratic merchant IDs into clean taxonomies, memorizing
                  your bespoke rules.
                </p>
                {/* Micro UI Visualization */}
                <div className="bg-surface-container-lowest rounded-lg p-space-sm space-y-2">
                  <div className="flex items-center justify-between text-body-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />{" "}
                      <span className="text-on-surface font-medium truncate max-w-[150px]">SQ* BIRD ROCK ROAST</span>
                    </div>{" "}
                    <span className="text-on-surface-variant font-label-sm">Classified: Dining</span>
                  </div>
                  <div className="flex items-center justify-between text-body-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary" />{" "}
                      <span className="text-on-surface font-medium truncate max-w-[150px]">AMZN MKTP US*8X2</span>
                    </div>{" "}
                    <span className="text-on-surface-variant font-label-sm">Classified: Office Supplies</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Module 2: Instant Conversational Copilot */}
            <div className="bg-surface-container rounded-xl p-space-lg shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-secondary-container/40 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[24px]">forum</span>
                </div>
                <div className="flex items-center gap-1 font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-secondary-container/25 text-secondary">
                  <span className="material-symbols-outlined text-[14px]">bolt</span> <span>Ultra-Low Latency</span>
                </div>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface">Conversational Copilot</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">
                Query your personal vault like an experienced financial manager in plain English.
              </p>
              {/* Conversational Chat Demo Component */}
              <div className="bg-surface-container-lowest rounded-xl p-3 space-y-3 shadow-inner">
                {/* User bubble */}
                <div className="flex justify-end">
                  <div className="bg-surface-container-high text-on-surface font-body-sm text-body-sm py-2 px-3.5 rounded-2xl rounded-tr-none max-w-[85%]">
                    Why is dining higher this month?
                  </div>
                </div>
                {/* Penny response bubble */}
                <div className="flex gap-2 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-on-primary text-[14px]">auto_awesome</span>
                  </div>
                  <div className="bg-surface-container-low text-on-surface font-body-sm text-body-sm py-2.5 px-3.5 rounded-2xl rounded-tl-none max-w-[88%] shadow-[0_0_16px_-4px_rgba(99,102,241,0.2)]">
                    <p className="text-on-surface">
                      You took 4 weekend road trips (+$242 in dinners) compared to zero in August. Offsetting via
                      grocery savings keeps you on target!
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button className="font-label-sm text-label-sm px-2 py-1 rounded bg-primary text-on-primary font-medium active:opacity-80">
                        Apply Offset
                      </button>{" "}
                      <button className="font-label-sm text-label-sm px-2 py-1 rounded bg-surface-container-highest text-on-surface-variant">
                        View Receipts
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Module 3: Proactive Spend Radar */}
            <div className="bg-surface-container rounded-xl p-space-lg shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[24px]">radar</span>
                </div>{" "}
                <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-tertiary-container/30 text-tertiary font-semibold">
                  Pre-Billing Alerts
                </span>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface">Proactive Spend Radar</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">
                Penny identifies creeping price hikes, unannounced renewals, and phantom service fees before credit
                statements lock.
              </p>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                <span className="material-symbols-outlined text-tertiary text-[24px]">warning</span>{" "}
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-title-md text-title-md text-on-surface">Price Creep Flag</span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Figma bill rose from $12 to $15/seat (+25%)
                  </span>
                </div>{" "}
                <span className="font-label-sm text-label-sm text-tertiary font-bold">Review</span>
              </div>
            </div>
            {/* Module 4: Smart Piggybanks */}
            <div className="bg-surface-container rounded-xl p-space-lg shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">savings</span>
                </div>{" "}
                <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-primary-container/20 text-primary font-semibold">
                  4.85% APY Stashes
                </span>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface">Autonomous Smart Piggybanks</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">
                Algorithmic micro-saving. We predict your cash balance peaks and siphon safe slivers into high-interest
                accounts without risk of overdraft.
              </p>
              {/* Mini Target Bar */}
              <div className="bg-surface-container-lowest rounded-lg p-3 space-y-2">
                <div className="flex justify-between font-label-sm text-label-sm">
                  <span className="text-on-surface">Japan Spring 2026 Fund</span>{" "}
                  <span className="text-primary font-semibold">$3,420 / $5,000</span>
                </div>
                <div className="w-full h-2.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "68%" }} />
                </div>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">
                  Penny transferred $14.20 yesterday from spare cash.
                </span>
              </div>
            </div>
          </section>
          {/* Visual Delight: Interactive Subscription Radar (Ghost Leak Hunter) */}
          <section className="flex flex-col space-y-space-md">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-error uppercase tracking-wider">
                  Live Ghost-Leak Hunter
                </span>{" "}
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Cancel Unwanted Recurring Bills</h2>
              </div>
              <div className="w-7 h-7 rounded-full bg-error-container/30 flex items-center justify-center text-error">
                <span className="material-symbols-outlined text-[18px]">emergency</span>
              </div>
            </div>
            {/* Active Leaks Card */}
            <div className="bg-surface-container rounded-2xl p-space-md shadow-[0_12px_32px_rgba(0,0,0,0.4)]">
              <div className="flex justify-between items-center pb-3">
                <span className="font-label-sm text-label-sm text-on-surface-variant">3 Active Leaks Detected</span>{" "}
                <span className="font-title-md text-title-md text-error font-semibold">-$68.97 / mo</span>
              </div>
              <div className="space-y-space-sm" id="subscriptionList">
                {/* Item 1 */}
                <div
                  className={
                    canceled["sub-item-1"]
                      ? "flex items-center justify-between p-3 rounded-xl bg-surface-container-low transition-all opacity-40 pointer-events-none"
                      : "flex items-center justify-between p-3 rounded-xl bg-surface-container-low transition-all"
                  }
                  id="sub-item-1"
                >
                  {canceled["sub-item-1"] ? (
                    <div className="flex items-center gap-2 py-1 text-primary">
                      <span className="material-symbols-outlined text-[20px]">check_circle</span>
                      <span className="font-title-md text-title-md">
                        Canceled! (Saved ${canceled["sub-item-1"]}/mo)
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                          <span className="material-symbols-outlined text-[20px]">cloud</span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-title-md text-title-md text-on-surface">AWS Test Server</span>{" "}
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Idle for 42 days</span>
                        </div>
                      </div>{" "}
                      <button
                        className="px-3 py-1.5 rounded-lg bg-error-container text-on-error font-label-sm text-label-sm font-semibold active:opacity-75 flex items-center gap-1"
                        onClick={() => cancelSub("sub-item-1", "24.99")}
                      >
                        <span>Cancel</span>
                      </button>
                    </>
                  )}
                </div>
                {/* Item 2 */}
                <div
                  className={
                    canceled["sub-item-2"]
                      ? "flex items-center justify-between p-3 rounded-xl bg-surface-container-low transition-all opacity-40 pointer-events-none"
                      : "flex items-center justify-between p-3 rounded-xl bg-surface-container-low transition-all"
                  }
                  id="sub-item-2"
                >
                  {canceled["sub-item-2"] ? (
                    <div className="flex items-center gap-2 py-1 text-primary">
                      <span className="material-symbols-outlined text-[20px]">check_circle</span>
                      <span className="font-title-md text-title-md">
                        Canceled! (Saved ${canceled["sub-item-2"]}/mo)
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                          <span className="material-symbols-outlined text-[20px]">fitness_center</span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-title-md text-title-md text-on-surface">Metropolis Gym</span>{" "}
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Zero visits in 60d</span>
                        </div>
                      </div>{" "}
                      <button
                        className="px-3 py-1.5 rounded-lg bg-error-container text-on-error font-label-sm text-label-sm font-semibold active:opacity-75 flex items-center gap-1"
                        onClick={() => cancelSub("sub-item-2", "29.99")}
                      >
                        <span>Cancel</span>
                      </button>
                    </>
                  )}
                </div>
                {/* Item 3 */}
                <div
                  className={
                    canceled["sub-item-3"]
                      ? "flex items-center justify-between p-3 rounded-xl bg-surface-container-low transition-all opacity-40 pointer-events-none"
                      : "flex items-center justify-between p-3 rounded-xl bg-surface-container-low transition-all"
                  }
                  id="sub-item-3"
                >
                  {canceled["sub-item-3"] ? (
                    <div className="flex items-center gap-2 py-1 text-primary">
                      <span className="material-symbols-outlined text-[20px]">check_circle</span>
                      <span className="font-title-md text-title-md">
                        Canceled! (Saved ${canceled["sub-item-3"]}/mo)
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                          <span className="material-symbols-outlined text-[20px]">tv</span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-title-md text-title-md text-on-surface">StreamPass HD</span>{" "}
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Expired trial renewed
                          </span>
                        </div>
                      </div>{" "}
                      <button
                        className="px-3 py-1.5 rounded-lg bg-error-container text-on-error font-label-sm text-label-sm font-semibold active:opacity-75 flex items-center gap-1"
                        onClick={() => cancelSub("sub-item-3", "13.99")}
                      >
                        <span>Cancel</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
              {/* Confirmation Toast Placeholder */}
              <div
                className={
                  lastAmount
                    ? "mt-3 p-2.5 rounded-lg bg-primary-container/20 text-primary font-body-sm text-body-sm text-center"
                    : "hidden mt-3 p-2.5 rounded-lg bg-primary-container/20 text-primary font-body-sm text-body-sm text-center"
                }
                id="cancelAlert"
              >
                {lastAmount
                  ? `Penny dispatched cancellation! You will save $${lastAmount} monthly.`
                  : "Penny 1-click cancellation sent! You just recouped annual cash."}
              </div>
            </div>
          </section>
          {/* Bottom High-Converting Action Card */}
          <section className="w-full bg-gradient-to-b from-surface-container-high to-surface-container rounded-2xl p-6 text-center shadow-[0_16px_36px_rgba(0,0,0,0.5)]">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-3">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                workspace_premium
              </span>
            </div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface mb-2">
              Ready to Put Your Money on Autopilot?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Try Penny free for 14 days. If it doesn't uncover at least $100 in optimizations, keep the reports on us.
            </p>{" "}
            <button className="w-full py-4 px-6 rounded-xl bg-primary text-on-primary font-title-lg text-title-lg font-bold shadow-lg active:scale-[0.98] transition-transform">
              Claim 14-Day Free Access
            </button>{" "}
            <div className="flex items-center justify-center gap-4 mt-4 text-on-surface-variant font-label-sm text-label-sm">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span> No credit card
                upfront
              </span>{" "}
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-primary">verified_user</span> SOC2 Compliant
              </span>
            </div>
          </section>
        </div>
      </main>
      <nav
        className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.4)]"
        data-active-classes="text-primary font-semibold"
      >
        <div className="flex justify-around items-center h-16 px-space-xs">
          <Link
            className="flex flex-col items-center justify-center flex-1 h-12 text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="penny-ai-home"
            href="/"
          >
            <span className="material-symbols-outlined text-[22px]">dashboard</span>
            <span className="font-label-sm text-label-sm mt-1">Home</span>
          </Link>
          <Link
            className="flex flex-col items-center justify-center flex-1 h-12 text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="product"
            href="/product"
          >
            <span className="material-symbols-outlined text-[22px]">view_quilt</span>
            <span className="font-label-sm text-label-sm mt-1">Product</span>
          </Link>
          <Link
            className="flex flex-col items-center justify-center flex-1 h-12 text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="features-ai-technology"
            href="/features"
          >
            <span className="material-symbols-outlined text-[22px]">psychology</span>
            <span className="font-label-sm text-label-sm mt-1">Features</span>
          </Link>
          <Link
            className="flex flex-col items-center justify-center flex-1 h-12 text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="pricing-plans"
            href="/pricing"
          >
            <span className="material-symbols-outlined text-[22px]">payments</span>
            <span className="font-label-sm text-label-sm mt-1">Pricing</span>
          </Link>
          <Link
            className="flex flex-col items-center justify-center flex-1 h-12 text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="security-trust"
            href="/security-and-trust"
          >
            <span className="material-symbols-outlined text-[22px]">shield</span>
            <span className="font-label-sm text-label-sm mt-1">Security</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
