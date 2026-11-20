'use client';

import Link from "next/link";

const pageStyles =
  "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";

export default function HomeDesktop() {
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
        <div className="flex flex-col w-full selection:bg-primary selection:text-on-primary">
          {/* Subtle Ambient Glow Orbs behind Hero */}
          <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary/10 rounded-full blur-[140px] -z-10" />
            <div className="pointer-events-none absolute top-48 right-12 w-[340px] h-[340px] bg-secondary-container/20 rounded-full blur-[120px] -z-10" />
            {/* 1. HERO SECTION */}
            <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-10 pb-space-xl lg:pb-24">
              <div className="flex flex-col items-center text-center space-y-space-md max-w-4xl mx-auto">
                {/* Pill Announcement */}
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high/80 text-primary shadow-sm backdrop-blur-md">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />{" "}
                  <span className="font-label-sm text-label-sm tracking-wide uppercase font-semibold text-on-surface">
                    Penny AI Copilot 2.0 Live
                  </span>{" "}
                  <span className="material-symbols-outlined text-sm text-primary">arrow_forward</span>
                </div>
                {/* High-Impact Headline */}
                <h1 className="font-headline-xl text-headline-xl font-bold tracking-tight text-on-surface">
                  Turn Raw Transactions into{" "}
                  <span className="bg-gradient-to-r from-primary via-primary-fixed to-secondary bg-clip-text text-transparent">
                    Clarity, Savings
                  </span>
                  , and Peace of Mind.
                </h1>
                {/* Subtitle */}
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  The conversational AI money assistant that automatically categorizes spending, explains financial
                  trends in plain language, and alerts you before you overspend — zero manual spreadsheets required.
                </p>
                {/* CTAs */}
                <div className="pt-space-sm flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
                  <a
                    className="w-full sm:w-auto px-space-xl py-3.5 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md font-bold tracking-normal shadow-[0_0_35px_-5px_rgba(16,185,129,0.45)] hover:bg-primary hover:text-on-primary transition-all duration-200 flex items-center justify-center gap-space-xs group"
                    href="#get-started"
                  >
                    <span className="material-symbols-outlined text-base group-hover:rotate-12 transition-transform">
                      bolt
                    </span>{" "}
                    Get Started Free (No Card Required)
                  </a>{" "}
                  <button
                    className="w-full sm:w-auto px-space-lg py-3.5 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-bright transition-all font-label-md text-label-md font-semibold flex items-center justify-center gap-space-xs shadow-md"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-base text-primary">play_circle</span> Watch 2-Min
                    Demo
                  </button>
                </div>
                {/* Trust Badges Strip */}
                <div className="pt-space-lg grid grid-cols-2 md:grid-cols-4 gap-space-md text-left w-full max-w-3xl">
                  <div className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low/70">
                    <span className="material-symbols-outlined text-primary text-xl">verified_user</span>{" "}
                    <div>
                      <p className="font-label-sm text-label-sm font-semibold text-on-surface">256-Bit Bank Grade</p>
                      <p className="font-body-sm text-body-sm text-outline">AES TLS-1.3 Encryption</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low/70">
                    <span className="material-symbols-outlined text-secondary text-xl">account_balance</span>{" "}
                    <div>
                      <p className="font-label-sm text-label-sm font-semibold text-on-surface">
                        {"Plaid & Open Banking"}
                      </p>
                      <p className="font-body-sm text-body-sm text-outline">12,000+ Verified Inst.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low/70">
                    <span className="material-symbols-outlined text-primary text-xl">shield</span>{" "}
                    <div>
                      <p className="font-label-sm text-label-sm font-semibold text-on-surface">Zero Data Selling</p>
                      <p className="font-body-sm text-body-sm text-outline">Read-Only API Access</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low/70">
                    <span className="material-symbols-outlined text-tertiary text-xl">savings</span>{" "}
                    <div>
                      <p className="font-label-sm text-label-sm font-semibold text-on-surface">$2.4M+ Saved</p>
                      <p className="font-body-sm text-body-sm text-outline">Beta Cohort Returns</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* HERO INTERACTIVE MOCKUP SHOWCASE */}
              <div className="mt-space-xl max-w-5xl mx-auto">
                <div className="relative rounded-2xl bg-surface-container p-space-md lg:p-space-lg shadow-2xl shadow-black/80">
                  {/* Terminal / Dashboard top pill bar */}
                  <div className="flex items-center justify-between pb-space-md mb-space-md">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-3 h-3 rounded-full bg-error-container/80 inline-block" />{" "}
                      <span className="w-3 h-3 rounded-full bg-tertiary-container/80 inline-block" />{" "}
                      <span className="w-3 h-3 rounded-full bg-primary-container inline-block" />{" "}
                      <span className="ml-space-sm font-label-sm text-label-sm text-on-surface-variant font-mono">
                        {"penny-engine // v2.4.9-active"}
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-xs text-primary">sync</span>{" "}
                      {"Syncing Chase, Amex & Fidelity"}
                    </div>
                  </div>
                  {/* Ledger Overview Metrics Header */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-lg">
                    {/* Metric 1 */}
                    <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                          Monthly Inflow
                        </span>{" "}
                        <span className="p-1 rounded-md bg-primary/10 text-primary material-symbols-outlined text-sm">
                          trending_up
                        </span>
                      </div>
                      <p className="font-numeric-display text-numeric-display text-on-surface mt-1">$4,850.00</p>
                      <div className="flex items-center gap-1 mt-1 text-primary font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-xs">arrow_upward</span>{" "}
                        <span>4.2% vs last month</span>
                      </div>
                    </div>
                    {/* Metric 2 */}
                    <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                          {"Outflow & Expenses"}
                        </span>{" "}
                        <span className="p-1 rounded-md bg-secondary/10 text-secondary material-symbols-outlined text-sm">
                          credit_card
                        </span>
                      </div>
                      <p className="font-numeric-display text-numeric-display text-on-surface mt-1">$2,180.40</p>
                      <div className="flex items-center gap-1 mt-1 text-on-surface-variant font-label-sm text-label-sm">
                        <span>Safe pace: 45% of budget</span>
                      </div>
                    </div>
                    {/* Metric 3: Crisp Inverted Style Card (Style Guideline Hero Accent) */}
                    <div className="p-space-md rounded-xl bg-white text-surface-container-lowest shadow-[0_20px_40px_-15px_rgba(16,185,129,0.25)] relative overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/15 rounded-full blur-xl pointer-events-none" />
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-slate-600 uppercase tracking-wider font-semibold">
                          Net Retained (Saved)
                        </span>{" "}
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">
                          +55.1%
                        </span>
                      </div>
                      <p className="font-numeric-display text-numeric-display text-slate-900 mt-1 font-bold">
                        $2,669.60
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-emerald-700 font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-xs">check_circle</span>{" "}
                        <span>Piggybanks auto-filled</span>
                      </div>
                    </div>
                  </div>
                  {/* Dual Pane: Visual Chart Preview + Floating Penny AI Copilot Chat */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
                    {/* Left 7 cols: Live Category Breakdown with Micro Sparklines */}
                    <div className="lg:col-span-7 p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-space-sm">
                          <h2 className="font-title-md text-title-md text-on-surface font-semibold flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-base">pie_chart</span>{" "}
                            Automated Category Flow
                          </h2>{" "}
                          <span className="font-label-sm text-label-sm text-primary px-space-xs py-0.5 rounded-full bg-primary/10">
                            34 transactions cleared today
                          </span>
                        </div>
                        {/* Category List with Visual Volume Bars */}
                        <div className="space-y-space-sm pt-space-xs">
                          <div>
                            <div className="flex justify-between font-label-sm text-label-sm mb-1 text-on-surface">
                              <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-primary" /> {"Housing & Utilities"}
                              </span>{" "}
                              <span className="font-semibold text-on-surface">
                                $1,250.00 <span className="text-outline font-normal">/ 57%</span>
                              </span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                              <div className="h-full bg-primary rounded-full" style={{ width: "57.3%" }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between font-label-sm text-label-sm mb-1 text-on-surface">
                              <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-secondary" /> {"Dining & Social"}
                              </span>{" "}
                              <span className="font-semibold text-on-surface">
                                $540.20 <span className="text-tertiary font-normal">(+18% anomaly)</span>
                              </span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                              <div className="h-full bg-secondary rounded-full" style={{ width: "24.7%" }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between font-label-sm text-label-sm mb-1 text-on-surface">
                              <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-tertiary" /> {"Groceries & Staples"}
                              </span>{" "}
                              <span className="font-semibold text-on-surface">
                                $290.00 <span className="text-primary font-normal">(-12% lower)</span>
                              </span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                              <div className="h-full bg-tertiary rounded-full" style={{ width: "13.3%" }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between font-label-sm text-label-sm mb-1 text-on-surface">
                              <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-primary-container" /> Digital Subscriptions
                              </span>{" "}
                              <span className="font-semibold text-on-surface">
                                $100.20 <span className="text-outline font-normal">/ 4.7%</span>
                              </span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                              <div className="h-full bg-primary-container rounded-full" style={{ width: "4.7%" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Quick Anomaly Pill Notification */}
                      <div className="mt-space-md p-space-sm rounded-lg bg-surface-container-high flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-secondary text-base">auto_awesome</span>{" "}
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          <span className="text-on-surface font-semibold">Proactive Audit:</span> 1 duplicate charge
                          identified ($14.99 Spotify). One-click dispute prepared.
                        </p>
                      </div>
                    </div>
                    {/* Right 5 cols: Penny Conversational Copilot Chat Interface */}
                    <div className="lg:col-span-5 p-space-md rounded-xl bg-surface-container-high shadow-xl flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-36 h-36 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />
                      {/* Chat Header */}
                      <div className="flex items-center gap-space-sm pb-space-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-lg">smart_toy</span>
                        </div>
                        <div>
                          <h3 className="font-title-md text-title-md text-on-surface leading-tight font-semibold">
                            Penny Copilot
                          </h3>
                          <p className="font-label-sm text-label-sm text-primary flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Grounded in your live ledger
                          </p>
                        </div>
                      </div>
                      {/* Chat Message Stack */}
                      <div className="space-y-space-sm my-space-sm">
                        {/* User Question Bubble */}
                        <div className="flex justify-end">
                          <div className="bg-surface-container-highest text-on-surface px-space-md py-2.5 rounded-2xl rounded-tr-xs font-body-sm text-body-sm max-w-[85%] shadow-sm">
                            Why did I spend 18% more on dining this month?
                          </div>
                        </div>
                        {/* Penny AI Response Bubble */}
                        <div className="flex justify-start">
                          <div className="bg-surface-container-lowest text-on-surface px-space-md py-3 rounded-2xl rounded-tl-xs font-body-sm text-body-sm max-w-[95%] shadow-md space-y-space-xs">
                            <div className="flex items-center gap-1.5 text-primary font-semibold font-label-sm text-label-sm">
                              <span className="material-symbols-outlined text-xs">query_stats</span> Ledger Analysis:
                            </div>
                            <p className="text-on-surface-variant leading-relaxed">
                              You visited <strong className="text-on-surface">3 new restaurants</strong> downtown during
                              your travel weekend (+
                              <span className="text-tertiary font-semibold">$142.50</span>
                              ), and order frequency rose from 2.1x to 3.4x per week.
                            </p>
                            <div className="p-space-xs rounded-md bg-surface-container text-on-surface text-label-sm font-label-sm space-y-1">
                              <div className="text-primary font-semibold">Action Plan:</div>
                              <div>1. Auto-divert $40 from Entertainment piggybank</div>
                              <div>2. Enable "Dining Cap" alert for remaining 9 days</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Input Simulator */}
                      <div className="pt-space-xs">
                        <div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-2 rounded-lg">
                          <span className="material-symbols-outlined text-outline text-base">chat</span>{" "}
                          <input
                            className="bg-transparent text-on-surface placeholder:text-outline text-body-sm font-body-sm focus:outline-none w-full"
                            placeholder="Ask Penny: 'Can I afford tickets next week?'"
                            readOnly
                            type="text"
                          />{" "}
                          <button
                            className="p-1.5 rounded-md bg-primary-container text-on-primary-container hover:bg-primary transition-colors"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-sm">send</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* 2. PROBLEM VS SOLUTION MATRIX */}
          <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl">
            <div className="text-center max-w-3xl mx-auto space-y-space-xs mb-space-xl">
              <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                Paradigm Shift
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                Why Manual Budgeting Fails — and The Penny AI Way
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Stop wasting Sunday evenings wrangling bank spreadsheets. Let proactive intelligence manage the heavy
                lifting.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
              {/* The Old Way */}
              <div className="p-space-lg rounded-2xl bg-surface-container-low shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-space-xs text-error">
                      <span className="material-symbols-outlined">cancel</span>{" "}
                      <h3 className="font-title-lg text-title-lg font-bold">The Outdated Way</h3>
                    </div>{" "}
                    <span className="px-space-xs py-0.5 rounded-full bg-error-container/40 text-on-error-container font-label-sm text-label-sm">
                      High Friction
                    </span>
                  </div>
                  <ul className="space-y-space-md font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-error text-lg mt-0.5 shrink-0">close</span>{" "}
                      <div>
                        <strong className="text-on-surface">Tedious Manual Categorization:</strong> Spending 2 hours
                        every weekend dragging rows into 30 arbitrary spreadsheet columns.
                      </div>
                    </li>
                    <li className="flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-error text-lg mt-0.5 shrink-0">close</span>{" "}
                      <div>
                        <strong className="text-on-surface">{"Guilt & Reactive Shock:"}</strong> You only realize you
                        blew your dining budget when your checking account drops near zero on the 24th.
                      </div>
                    </li>
                    <li className="flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-error text-lg mt-0.5 shrink-0">close</span>{" "}
                      <div>
                        <strong className="text-on-surface">Zero Context or Narrative:</strong> A red "-$340" number
                        gives you anxiety without explaining what caused it or how to recover.
                      </div>
                    </li>
                    <li className="flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-error text-lg mt-0.5 shrink-0">close</span>{" "}
                      <div>
                        <strong className="text-on-surface">Abandoned in 3 Weeks:</strong> 78% of people quit
                        conventional budget tools because the maintenance burden feels like an unpaid second job.
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-space-lg p-space-md rounded-xl bg-surface-container text-on-surface-variant text-body-sm font-body-sm flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-outline">sentiment_dissatisfied</span>{" "}
                  <span>Result: Chronic financial anxiety and zero forward momentum.</span>
                </div>
              </div>
              {/* The Penny AI Way */}
              <div className="p-space-lg rounded-2xl bg-surface-container shadow-2xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
                <div className="space-y-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-space-xs text-primary">
                      <span className="material-symbols-outlined">check_circle</span>{" "}
                      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">The Penny AI System</h3>
                    </div>{" "}
                    <span className="px-space-xs py-0.5 rounded-full bg-primary/15 text-primary font-label-sm text-label-sm font-semibold">
                      Zero-Friction Engine
                    </span>
                  </div>
                  <ul className="space-y-space-md font-body-md text-body-md text-on-surface">
                    <li className="flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">
                        auto_fix_high
                      </span>{" "}
                      <div>
                        <strong className="text-on-surface">85%+ True-Intent Classification:</strong> Penny deciphers
                        cryptic merchant strings ("TST* BLUE FLOWER 415") instantly into exact context.
                      </div>
                    </li>
                    <li className="flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">
                        notifications_active
                      </span>{" "}
                      <div>
                        <strong className="text-on-surface">Proactive, Gentle Nudges:</strong> "At your current pace,
                        groceries will exceed your ceiling by Thursday. Try home meal delivery today?"
                      </div>
                    </li>
                    <li className="flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">forum</span>{" "}
                      <div>
                        <strong className="text-on-surface">Conversational Synthesis:</strong> Ask in everyday English:
                        "How much did I spend on ride shares in Lisbon?" Get instant mathematical answers.
                      </div>
                    </li>
                    <li className="flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">
                        trending_up
                      </span>{" "}
                      <div>
                        <strong className="text-on-surface">Effortless Longevity:</strong> Hands-off autonomy means
                        users maintain full financial clarity for quarters and years with zero manual data entry.
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-space-lg p-space-md rounded-xl bg-surface-container-high text-primary text-body-sm font-body-sm flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary">thumb_up</span>{" "}
                  <span>Result: Calm financial confidence and predictable compounding savings.</span>
                </div>
              </div>
            </div>
          </section>
          {/* 3. CORE FEATURE PILLARS */}
          <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl">
            <div className="text-center max-w-3xl mx-auto space-y-space-xs mb-space-xl">
              <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-semibold">
                Engineered For Sovereignty
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                Four Pillars of Sovereign Financial AI
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Built from the ground up for bank-grade privacy, instant clarity, and automated wealth preservation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
              {/* Pillar 1: Zero-Effort Ingestion */}
              <div className="p-space-lg rounded-2xl bg-surface-container shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
                <div className="space-y-space-md">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">cloud_sync</span>
                  </div>
                  <div className="space-y-space-xs">
                    <h3 className="font-title-lg text-title-lg font-bold text-on-surface">1. Zero-Effort Ingestion</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Connect your checking, savings, credit cards, and brokerages via secure Plaid and Open Banking
                      protocols in under 30 seconds. Prefer offline sovereignty? Simply drop your raw CSV or PDF
                      statements — our local parser extracts and categorizes records with zero cloud storage leaks.
                    </p>
                  </div>
                </div>
                <div className="mt-space-lg p-space-md rounded-xl bg-surface-container-low flex items-center justify-between text-body-sm font-body-sm">
                  <span className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-primary text-base">file_upload</span>{" "}
                    {"Drag & Drop CSV / OFX / PDF"}
                  </span>{" "}
                  <span className="text-primary font-semibold font-label-sm text-label-sm">Instant Sync</span>
                </div>
              </div>
              {/* Pillar 2: Explain, Don't Just Display */}
              <div className="p-space-lg rounded-2xl bg-surface-container shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
                <div className="space-y-space-md">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">chat_bubble</span>
                  </div>
                  <div className="space-y-space-xs">
                    <h3 className="font-title-lg text-title-lg font-bold text-on-surface">
                      2. 'Explain, Don't Just Display'
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Charts alone don't change habits; context does. Penny generates grounded, plain-English narrations
                      explaining why grocery spending rose 14% this month or how much utility inflation affected your
                      bottom line. It translates raw accounting ledgers into straightforward stories.
                    </p>
                  </div>
                </div>
                <div className="mt-space-lg p-space-md rounded-xl bg-surface-container-low flex items-center justify-between text-body-sm font-body-sm">
                  <span className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-base">psychology</span> Natural
                    Language Trend Synopses
                  </span>{" "}
                  <span className="text-secondary font-semibold font-label-sm text-label-sm">LLM Grounded</span>
                </div>
              </div>
              {/* Pillar 3: Proactive Smart Alerts */}
              <div className="p-space-lg rounded-2xl bg-surface-container shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
                <div className="space-y-space-md">
                  <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">alarm_on</span>
                  </div>
                  <div className="space-y-space-xs">
                    <h3 className="font-title-lg text-title-lg font-bold text-on-surface">3. Proactive Smart Alerts</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Penny acts as your financial perimeter defense. Detect stealth price hikes on annual renewals,
                      hidden streaming subscriptions you haven't opened in 90 days, accidental merchant double charges,
                      and impending cashflow shortfalls well before billing cycles close.
                    </p>
                  </div>
                </div>
                <div className="mt-space-lg p-space-md rounded-xl bg-surface-container-low flex items-center justify-between text-body-sm font-body-sm">
                  <span className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-tertiary text-base">warning</span>{" "}
                    {"Zombies & Creep Detection"}
                  </span>{" "}
                  <span className="text-tertiary font-semibold font-label-sm text-label-sm">Real-time Radar</span>
                </div>
              </div>
              {/* Pillar 4: Goal-Driven Piggybanks */}
              <div className="p-space-lg rounded-2xl bg-surface-container shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
                <div className="space-y-space-md">
                  <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary-fixed group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">savings</span>
                  </div>
                  <div className="space-y-space-xs">
                    <h3 className="font-title-lg text-title-lg font-bold text-on-surface">4. Goal-Driven Piggybanks</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Set goals like "Japan Trip in October", "6-Month Runway", or "Accelerated Student Loan Payoff".
                      Penny's algorithmic engine detects surplus cash buffers on high-income weeks and quietly allocates
                      micro-reserves so you hit your targets months ahead of schedule.
                    </p>
                  </div>
                </div>
                <div className="mt-space-lg p-space-md rounded-xl bg-surface-container-low flex items-center justify-between text-body-sm font-body-sm">
                  <span className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-primary text-base">flag</span> Automated Surplus
                    Allocation
                  </span>{" "}
                  <span className="text-primary font-semibold font-label-sm text-label-sm">High-Yield Ready</span>
                </div>
              </div>
            </div>
          </section>
          {/* 4. SOCIAL PROOF & REAL PERSONAS */}
          <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl">
            <div className="text-center max-w-3xl mx-auto space-y-space-xs mb-space-xl">
              <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                Real Life Proof
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                Designed for Varied Financial Realities
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Whether you manage unpredictable freelancer checks, split bills with a partner, or maximize savings.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {/* Persona 1: Sara (The Travel Enthusiast) */}
              <div className="p-space-lg rounded-2xl bg-surface-container flex flex-col justify-between shadow-xl">
                <div className="space-y-space-md">
                  <div className="flex items-center gap-space-sm">
                    <img
                      className="w-12 h-12 rounded-full object-cover shadow-sm"
                      data-alt="Portrait of Sara, a 28-year-old product designer with creative eyeglasses and warm studio lighting, modern tech office background in soft focus"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLbi9Jth7AHX63htRgZ3m0vUnaGX27R7KtKk-Vjs7B-FGn88wfPHrzvhP_K0ypb6y8qYg6DprIpmN6LICq_yNBURhkFAOtr7FfSpsf5KiR6DZPYTE4ALeDLjNk-2ajfbMPHtRX69KdgCIdshrEfe_a024IhAflXxdQ33pA5iAhAqVlYcls_kN1n-ghug-kASuIvlbrKANbEj5JIu134wk1kw409bsKOWU_8vn8MQ"
                      alt=""
                    />{" "}
                    <div>
                      <h3 className="font-title-md text-title-md font-bold text-on-surface">Sara K.</h3>
                      <p className="font-label-sm text-label-sm text-primary">Senior UX Designer • Lisbon</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-tertiary">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>{" "}
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>{" "}
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>{" "}
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>{" "}
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed italic">
                    "I wanted to save $4,000 for a month-long trip to Japan without living like a monk. Penny quietly
                    adjusted my weekend discretionary allowance and found $180 in phantom subscriptions I forgot about.
                    I hit my target in 5 months flat."
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center justify-between font-label-sm text-label-sm text-outline">
                  <span>Target: Japan Trip Piggybank</span>{" "}
                  <span className="text-primary font-semibold">$4,120 Saved</span>
                </div>
              </div>
              {/* Persona 2: Ali & Mina (Joint Spending) */}
              <div className="p-space-lg rounded-2xl bg-surface-container flex flex-col justify-between shadow-xl">
                <div className="space-y-space-md">
                  <div className="flex items-center gap-space-sm">
                    <img
                      className="w-12 h-12 rounded-full object-cover shadow-sm"
                      data-alt="Modern happy couple Ali and Mina smiling together in their sunny apartment kitchen, clean Nordic interior decor, shot on 35mm film aesthetic"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkTLfz_MWORAr3qnQZObVNR81Sc0Q6QFQP6Dwq2EHVUhgYkVAFm4zw4QQ_k21BEOZL3JgVPBHDJWHJsntRA0AuAQAshcw_c-ORbmT3g8YuylwiJj74r7052qNnagsjcpDcwXl3yZApimR4cWwvxrOrPbalQP57oQL5kBl9pTgVz6_Uw92vZSZ7tAiXA9-KaFQ33SUr9e55A7q-ymY-L6usdkTqA59h8ddYMEG_nQ"
                      alt=""
                    />{" "}
                    <div>
                      <h3 className="font-title-md text-title-md font-bold text-on-surface">{"Ali & Mina T."}</h3>
                      <p className="font-label-sm text-label-sm text-secondary">Joint Household • Toronto</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-tertiary">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>{" "}
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>{" "}
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>{" "}
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>{" "}
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed italic">
                    "Combining finances used to cause minor frictions over whose card took on grocery or pet bills. With
                    Penny's shared ledger view, we just ask: 'Who covered what this week?' and get fair balance
                    transfers with zero awkward tension."
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center justify-between font-label-sm text-label-sm text-outline">
                  <span>Use Case: Frictionless Household</span>{" "}
                  <span className="text-secondary font-semibold">100% Split Clarity</span>
                </div>
              </div>
              {/* Persona 3: Reza (The Freelancer) */}
              <div className="p-space-lg rounded-2xl bg-surface-container flex flex-col justify-between shadow-xl">
                <div className="space-y-space-md">
                  <div className="flex items-center gap-space-sm">
                    <img
                      className="w-12 h-12 rounded-full object-cover shadow-sm"
                      data-alt="Portrait of Reza, a freelance software consultant and creative technologist in a minimalist workspace with multi-monitor workstation and ambient dark lighting"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8esdyZ9GvbUtcMdyksV5bGnS_zFs5HmjXflODu95dkQUvUnHOuNXuhqHZL2xHV3R2sCwsrjZaVsioT44t09OlvDpCcsDMTuRmI7FzpaE15Q9FokJmiZwezu67LxhEeur4BHkS5ch0M-djas3EYgbU97QHfg8r29kOfmevkvaxQ6_70r5vnAi2-MYPAIIS6O_CmDrmbCEk1_FNpkOft_JK15DUlpp3Yk0HRvYJRQ"
                      alt=""
                    />{" "}
                    <div>
                      <h3 className="font-title-md text-title-md font-bold text-on-surface">Reza M.</h3>
                      <p className="font-label-sm text-label-sm text-tertiary">Independent Consultant • Austin</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-tertiary">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>{" "}
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>{" "}
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>{" "}
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>{" "}
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed italic">
                    "Freelance cashflow is feast or famine. One month I make $12k, next month $3k. Penny calculates my
                    dynamic safe-to-spend baseline instead of assuming rigid salary intervals. It eliminated all my
                    tax-season anxiety."
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center justify-between font-label-sm text-label-sm text-outline">
                  <span>{"Tax & Runway Smoothed"}</span>{" "}
                  <span className="text-tertiary font-semibold">9 Mos Buffer</span>
                </div>
              </div>
            </div>
          </section>
          {/* 5. FINAL CTA BANNER SECTION */}
          <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl pb-24" id="get-started">
            <div className="relative rounded-3xl bg-surface-container-high p-space-lg lg:p-space-xl overflow-hidden shadow-2xl text-center">
              {/* Background Ambient Embers */}
              <div className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-primary/20 rounded-full blur-[100px]" />
              <div className="pointer-events-none absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[90px]" />
              <div className="relative z-10 max-w-2xl mx-auto space-y-space-md">
                <span className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-xs">rocket_launch</span> Immediate Setup • Zero Credit
                  Card Needed
                </span>{" "}
                <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface tracking-tight">
                  Stop Budgeting Like It's 2012.
                  <br />
                  <span className="text-primary">Meet Penny Today.</span>
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Join over 14,000 forward-thinking individuals who replaced spreadsheet dread with proactive,
                  intelligent financial serenity.
                </p>
                {/* Fast Access Form */}
                <form
                  className="pt-space-sm flex flex-col sm:flex-row items-center gap-space-xs max-w-md mx-auto"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="relative w-full">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-base">
                      mail
                    </span>{" "}
                    <input
                      className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline pl-10 pr-space-md py-3 rounded-xl font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                      placeholder="Enter your best email"
                      type="email"
                    />
                  </div>{" "}
                  <button
                    className="w-full sm:w-auto px-space-xl py-3 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-all font-label-md text-label-md font-bold whitespace-nowrap shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    type="submit"
                  >
                    Claim Free Account
                  </button>
                </form>
                <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-xs text-outline font-label-sm text-label-sm">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs text-primary">check</span> SOC-2 Type II
                    Certified
                  </span>{" "}
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs text-primary">check</span> Plaid Tokenized Auth
                  </span>{" "}
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs text-primary">check</span> 100% Free Tier
                    Available
                  </span>
                </div>
              </div>
            </div>
          </section>
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
