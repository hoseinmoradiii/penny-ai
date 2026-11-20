import Link from "next/link";

const pageStyles =
  "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";

export default function CompanyDesktop() {
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
        <div className="flex flex-col w-full">
          {/* Top Ambient Glow & Radial Backlight Container */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[480px] bg-primary-container/10 blur-[140px] pointer-events-none rounded-full" />
            <div className="absolute top-48 right-[-100px] w-[500px] h-[500px] bg-secondary-container/15 blur-[120px] pointer-events-none rounded-full" />
            {/* 1. Hero Section */}
            <section className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-24 w-full">
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-space-md">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high shadow-inner text-primary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>{" "}
                  <span className="font-label-md text-label-md tracking-wider uppercase">
                    {"Mission & Manifesto · Who We Are"}
                  </span>
                </div>
                {/* Headline */}
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-extrabold max-w-3xl">
                  Building the Autonomous Financial OS with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed to-secondary">
                    Zero-Compromise Trust.
                  </span>
                </h1>
                {/* Subtitle */}
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  We founded Penny on a fundamental premise: individuals deserve sovereign mathematical clarity over
                  their finances, without spreadsheets, surveillance capitalism, or generative AI hallucinations.
                </p>
                {/* CTAs in Hero */}
                <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-xs">
                  <Link
                    className="inline-flex items-center gap-2 px-space-lg py-space-sm font-label-md text-label-md rounded-lg bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary shadow-lg shadow-primary-container/20 transition-all font-semibold"
                    data-path="get-started"
                    href="/get-started"
                  >
                    <span>Experience the Doctrine</span>{" "}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>{" "}
                  <a
                    className="inline-flex items-center gap-2 px-space-lg py-space-sm font-label-md text-label-md rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-medium"
                    href="#manifesto"
                  >
                    <span className="material-symbols-outlined text-sm text-secondary">menu_book</span>{" "}
                    <span>Read Founding Manifesto</span>
                  </a>
                </div>
              </div>
              {/* Stats Metric Bar (Bento Ribbon) */}
              <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl bg-surface-container-low shadow-2xl">
                <div className="p-space-md flex flex-col justify-between rounded-lg bg-surface-container">
                  <div className="flex items-center justify-between text-on-surface-variant pb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      Incorporation
                    </span>{" "}
                    <span className="material-symbols-outlined text-primary text-base">domain</span>
                  </div>
                  <div className="font-numeric-display text-numeric-display text-on-surface font-bold">2024</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                    {"San Francisco & Distributed Nodes"}
                  </div>
                </div>
                <div className="p-space-md flex flex-col justify-between rounded-lg bg-surface-container">
                  <div className="flex items-center justify-between text-on-surface-variant pb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      Active Capital Analyzed
                    </span>{" "}
                    <span className="material-symbols-outlined text-primary text-base">monitoring</span>
                  </div>
                  <div className="font-numeric-display text-numeric-display text-primary font-bold">$180M+</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                    Across 18,400+ sovereign wallets
                  </div>
                </div>
                <div className="p-space-md flex flex-col justify-between rounded-lg bg-surface-container">
                  <div className="flex items-center justify-between text-on-surface-variant pb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      Capital Rescued
                    </span>{" "}
                    <span className="material-symbols-outlined text-tertiary text-base">savings</span>
                  </div>
                  <div className="font-numeric-display text-numeric-display text-tertiary font-bold">$12.4M+</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                    {"Idle interest & phantom fees reclaimed"}
                  </div>
                </div>
                <div className="p-space-md flex flex-col justify-between rounded-lg bg-surface-container">
                  <div className="flex items-center justify-between text-on-surface-variant pb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      Execution Engine
                    </span>{" "}
                    <span className="material-symbols-outlined text-secondary text-base">lock_clock</span>
                  </div>
                  <div className="font-numeric-display text-numeric-display text-secondary font-bold">100%</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                    Deterministic arithmetic, 0 retention
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* 2. The Origin & Manifesto Section */}
          <section className="w-full bg-surface-container-lowest py-24" id="manifesto">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-16">
              {/* Narrative Header */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <span className="font-label-md text-label-md text-primary tracking-widest uppercase font-semibold">
                    The Origin Logic
                  </span>{" "}
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold leading-tight">
                    Financial clarity broke down when software prioritized surveillance over agency.
                  </h2>
                  <div className="w-12 h-1 bg-primary rounded-full" />
                </div>
                <div className="lg:col-span-7 space-y-6 text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
                  <p>
                    Manual budgeting utilities demand 4 hours of tedious receipt categorization every Sunday—only to be
                    abandoned 19 days in. Meanwhile, consumer retail banking giants generate billions on customer
                    inertia, dark patterns, overdraft traps, and informational fog.
                  </p>
                  <p>
                    When generative AI emerged, conventional apps simply slapped unpredictable large language models on
                    top of raw ledgers. The result? Unacceptable financial hallucinations, invented balances, and
                    personal banking telemetry leaked to third-party model training pipelines.
                  </p>
                  <p className="text-on-surface font-medium">
                    We built Penny to terminate this compromise. An architecture where the arithmetic engine runs on
                    mathematically verifiable state machines, while generative language is confined strictly to
                    synthesis, context, and humane conversation.
                  </p>
                </div>
              </div>
              {/* Comparison: Status Quo vs Penny Doctrine */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                {/* The Legacy Card */}
                <div className="p-8 rounded-xl bg-surface-container-low shadow-xl space-y-6">
                  <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center text-error">
                        <span className="material-symbols-outlined text-sm">close</span>
                      </span>{" "}
                      <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                        The Legacy Status Quo
                      </h3>
                    </div>{" "}
                    <span className="px-2.5 py-0.5 rounded-full bg-error-container/30 text-error font-label-sm text-label-sm font-semibold">
                      Extractive
                    </span>
                  </div>
                  <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-error text-lg mt-0.5 shrink-0">cancel</span>{" "}
                      <span>
                        <strong>Ad Surveillance Engine:</strong> Categorizes transactions to broker consumer credit card
                        referrals and sell anonymized cohort telemetry to hedge funds.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-error text-lg mt-0.5 shrink-0">cancel</span>{" "}
                      <span>
                        <strong>High Cognitive Friction:</strong> Requires users to manually triage split checks, tag
                        coffee purchases, and manage 28 brittle virtual envelope folders.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-error text-lg mt-0.5 shrink-0">cancel</span>{" "}
                      <span>
                        <strong>Unchecked AI Guesswork:</strong> LLM agents invent speculative monthly averages and miss
                        compounding subscription price hikes until months later.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-error text-lg mt-0.5 shrink-0">cancel</span>{" "}
                      <span>
                        <strong>Hostage Data Architecture:</strong> Complex CSV export friction with zero zero-knowledge
                        privacy guarantees.
                      </span>
                    </li>
                  </ul>
                </div>
                {/* The Penny Doctrine Card */}
                <div className="relative p-8 rounded-xl bg-surface-container-high shadow-2xl space-y-6 overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                        <span className="material-symbols-outlined text-sm">check</span>
                      </span>{" "}
                      <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">The Penny Doctrine</h3>
                    </div>{" "}
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary font-label-sm text-label-sm font-semibold">
                      {"Sovereign & Exact"}
                    </span>
                  </div>
                  <ul className="space-y-4 font-body-md text-body-md text-on-surface">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">
                        check_circle
                      </span>{" "}
                      <span>
                        <strong>Zero Data Monetization:</strong> We earn revenue strictly through direct customer
                        subscription seats. Your financial behavior is never for sale.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">
                        check_circle
                      </span>{" "}
                      <span>
                        <strong>5-Minute First Run:</strong> Zero setup overhead. Sub-second bank reconciliation
                        automatically normalizes 10,000+ erratic merchant billing strings.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">
                        check_circle
                      </span>{" "}
                      <span>
                        <strong>Deterministic Arithmetic Kernel:</strong> 100% of mathematical statements are generated
                        by formal code, never LLM prompt completions.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">
                        check_circle
                      </span>{" "}
                      <span>
                        <strong>{"Sovereign Vault & Nuclear Purge:"}</strong> Tokenized credentials via hardware
                        security modules (HSM). One-click permanent profile and record erasure.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* 3. Core Company Principles */}
          <section className="w-full py-24 max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-label-md text-label-md text-secondary tracking-widest uppercase font-semibold">
                Engineering Philosophy
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Four Inviolable Pillars</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The architectural constraints our engineering, research, and product teams never breach.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Principle 1 */}
              <div className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all shadow-lg flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high group-hover:bg-primary-container transition-colors flex items-center justify-center text-primary group-hover:text-on-primary-container">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>{" "}
                  <span className="font-label-sm text-label-sm font-bold text-outline tracking-wider">PILLAR 01</span>{" "}
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Zero-Effort First</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Software that demands routine manual ledger entry inevitably fails the user. We guarantee
                    instantaneous panoramic clarity in under 300 seconds of setup, entirely hands-off.
                  </p>
                </div>
                <div className="pt-6 flex items-center text-primary font-label-sm text-label-sm gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read UX manifesto</span>{" "}
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </div>
              {/* Principle 2 */}
              <div className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all shadow-lg flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high group-hover:bg-secondary-container transition-colors flex items-center justify-center text-secondary group-hover:text-on-secondary-container">
                    <span className="material-symbols-outlined">functions</span>
                  </div>{" "}
                  <span className="font-label-sm text-label-sm font-bold text-outline tracking-wider">PILLAR 02</span>{" "}
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    Numbers from Code, Language from AI
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    No generative AI prompt is ever asked to do ledger arithmetic. We bind verified numeric calculation
                    directly to state machines, using generative intelligence solely for context distillation.
                  </p>
                </div>
                <div className="pt-6 flex items-center text-secondary font-label-sm text-label-sm gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore verification spec</span>{" "}
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </div>
              {/* Principle 3 */}
              <div className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all shadow-lg flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high group-hover:bg-primary-container transition-colors flex items-center justify-center text-primary group-hover:text-on-primary-container">
                    <span className="material-symbols-outlined">shield_person</span>
                  </div>{" "}
                  <span className="font-label-sm text-label-sm font-bold text-outline tracking-wider">PILLAR 03</span>{" "}
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    Sovereign Privacy by Default
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Client-side payload anonymization, zero model training on consumer ledgers, and a single-click
                    nuclear database purge that deletes all historical ledger records instantly.
                  </p>
                </div>
                <div className="pt-6 flex items-center text-primary font-label-sm text-label-sm gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Review cryptographic posture</span>{" "}
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </div>
              {/* Principle 4 */}
              <div className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all shadow-lg flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high group-hover:bg-tertiary-container transition-colors flex items-center justify-center text-tertiary group-hover:text-on-tertiary-container">
                    <span className="material-symbols-outlined">notifications_paused</span>
                  </div>{" "}
                  <span className="font-label-sm text-label-sm font-bold text-outline tracking-wider">PILLAR 04</span>{" "}
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Nudge, Don't Nag</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Financial fatigue is real. Penny delivers maximum-leverage proactive interventions—such as duplicate
                    charges or idle APY loss—while refusing to push low-value notification clutter.
                  </p>
                </div>
                <div className="pt-6 flex items-center text-tertiary font-label-sm text-label-sm gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read behavioral design rules</span>{" "}
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </div>
            </div>
          </section>
          {/* 4. Leadership & Foundational Team */}
          <section className="w-full bg-surface-container-lowest py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-3">
                  <span className="font-label-md text-label-md text-primary tracking-widest uppercase font-semibold">
                    Foundational Architects
                  </span>{" "}
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                    {"Built by Pioneers in Systems & AI"}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                    Our leadership combines decades of deep-tier infrastructure, cryptographic security, and human-first
                    product craft.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> 100% Distributed Core Team
                  </span>
                </div>
              </div>
              {/* Team Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Elena Rostova */}
                <div className="p-6 rounded-xl bg-surface-container flex flex-col justify-between space-y-6 shadow-xl hover:-translate-y-1 transition-transform">
                  <div className="space-y-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg shadow-black/40">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="Close-up professional portrait of Elena Rostova, female tech founder and CEO, intelligent composed expression, soft dark studio background with subtle emerald rim lighting, modern aesthetic"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLcHy1bKQzVvfFrLl48uuv-HJUTlo8BwVUmcyXQkH7qhjgeGlahhlX9PbTRCDaeVIxl_o0XTkPVtZn-QaVRyuvUOGoxHtXlK192WA6MbEK8CXq7S5O8zSR8pC4OesKeSCo6EMkGN4-XKEVuFgBvjeb8JETCGMbZU1JktAoO-CgZEA5iYux_4hgNYQpV4M_rbWQkeKmZcN-nZam9ZMOwon0FRLzBtWtyeFb-4M2Qg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Elena Rostova</h3>
                      <p className="font-body-sm text-body-sm text-primary font-medium">{"Co-Founder & CEO"}</p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {
                        "Previously fintech product engineering lead at Stripe & Brex. Designed algorithmic liquidity rails processing $14B annually."
                      }
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                      ex-Stripe
                    </span>{" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                      Stanford CS
                    </span>
                  </div>
                </div>
                {/* Marcus Chen */}
                <div className="p-6 rounded-xl bg-surface-container flex flex-col justify-between space-y-6 shadow-xl hover:-translate-y-1 transition-transform">
                  <div className="space-y-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg shadow-black/40">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="Professional studio portrait of Marcus Chen, male tech co-founder and CTO, thoughtful focused expression, dark slate background with deep indigo cinematic rim light"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXzhOJEBah8oKOVk_g97JKpJEBSbOnT5u5fM1KleB3Y0aoQ4uhxDUqO8acUScKKO_srRr7Qdhq2D5Bc6mLkg_ZDxcOI_pX81jUMDs9INN_tjvM4kqfsnYikO3hgXSjctT9dcy6Pm9InFtAziO-YwlZT-F4nxxqxuy_pwBbTSLk6UIq250HSOQcfh3_tuDcEu2JsSENzLRspp2neBlCKZSlge5CW6E40XB6iz_Nkg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Marcus Chen</h3>
                      <p className="font-body-sm text-body-sm text-secondary font-medium">{"Co-Founder & CTO"}</p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {
                        "Former staff security & distributed systems architect at Plaid. Author of open-source zero-knowledge state machine frameworks."
                      }
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                      ex-Plaid
                    </span>{" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                      MIT EECS
                    </span>
                  </div>
                </div>
                {/* Dr. Aris Thorne */}
                <div className="p-6 rounded-xl bg-surface-container flex flex-col justify-between space-y-6 shadow-xl hover:-translate-y-1 transition-transform">
                  <div className="space-y-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg shadow-black/40">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="Portrait of Dr. Aris Thorne, seasoned AI research scientist with glasses, dark navy backdrop, soft directional rim lighting, confident calm expression"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ79jJbP-immHaDLYsvD_IX4TI6aYnD_ikvqaSBIpBQQL0IC8_JoQj-y198L7hPIAV3tOF2lT8Pe0dNEk1BwZ0WVwvjva6VuKzNMXASG01mIJorEoB6rcsz31SBihtCqukfErgun0fU9l4CQ-rUhG0S__holk5bZZv0TAqbNDePNPhHDFAmRdNCgemvpUfx35Sim-wwKiXYXUoTq1Y3r7xo5arut8aVO_2buPIzA"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Dr. Aris Thorne</h3>
                      <p className="font-body-sm text-body-sm text-tertiary font-medium">
                        {"Head of AI & Verification"}
                      </p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Former autonomous reasoning researcher at DeepMind and Cambridge. Pioneered bounded reasoning
                      verification layers for neural outputs.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                      ex-DeepMind
                    </span>{" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                      Cambridge PhD
                    </span>
                  </div>
                </div>
                {/* Sophia Valenzuela */}
                <div className="p-6 rounded-xl bg-surface-container flex flex-col justify-between space-y-6 shadow-xl hover:-translate-y-1 transition-transform">
                  <div className="space-y-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg shadow-black/40">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="Portrait of Sophia Valenzuela, creative female head of product design, clean modern style, sleek dark minimalist atmosphere with warm ambient highlights"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsYOJDrfes_TQz6rbl4U5G14TNnSKtU247I1lSICD0syRWDakLjZOsorfJduNHsMf_oiklJKcM2tfTGHYxaEO9eBZkNRsPmuVz-7Qop6_KvuBJMIoZaqvQZG7AXAAcExMJm9vHoMftkkvennQBQKvsPxFnsPEQ8nVF8nakvA1mctMfB3DKGfTEby6RD6EO-WfZiPKr4drD7_VvsJTBDwioXe1Of6Int1ZXx1RWeQ"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Sophia Valenzuela</h3>
                      <p className="font-body-sm text-body-sm text-primary-fixed font-medium">
                        {"Head of Design & UX"}
                      </p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Former principal designer at Apple and Wealthfront. Architect of multi-sensory financial
                      visibility and tactile dark-mode interfaces.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                      ex-Apple
                    </span>{" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                      Wealthfront
                    </span>
                  </div>
                </div>
              </div>
              {/* Backed by Sovereign Builders & Advisory Board Banner */}
              <div className="p-8 rounded-xl bg-surface-container-high shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="space-y-2 text-center lg:text-left">
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                    Capital Backing
                  </span>{" "}
                  <h4 className="font-title-lg text-title-lg text-on-surface font-bold">
                    {"Backed by Sovereign Builders & Operators"}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
                    Funded with $6.2M in Seed Capital led by Sovereign Capital, alongside leading angels from Plaid,
                    Brex, OpenAI, and the Stanford Applied Cryptography Group.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6 opacity-75">
                  <span className="font-title-md text-title-md font-extrabold tracking-tight text-on-surface">
                    SOVEREIGN
                    <span className="text-primary">.VC</span>
                  </span>{" "}
                  <span className="font-title-md text-title-md font-bold tracking-wider text-outline">
                    NEXUS_SYSTEMS
                  </span>{" "}
                  <span className="font-title-md text-title-md font-semibold tracking-tight text-on-surface">
                    RADICAL
                    <span className="text-secondary">SEED</span>
                  </span>{" "}
                  <span className="font-title-md text-title-md font-bold tracking-tighter text-outline">0xCAPITAL</span>
                </div>
              </div>
            </div>
          </section>
          {/* 5. Milestones & Engineering Roadmap */}
          <section className="w-full py-24 max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-label-md text-label-md text-primary tracking-widest uppercase font-semibold">
                Evolutionary Arc
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                From Cryptographic Genesis to Autonomous OS
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our methodical delivery timeline: continuous verification at every milestone.
              </p>
            </div>
            {/* Timeline Horizontal/Vertical Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Phase 0-1 */}
              <div className="p-6 rounded-xl bg-surface-container space-y-4 shadow-lg relative">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-surface-container-high text-outline font-label-sm text-label-sm font-semibold">
                    Q1-Q2 2024
                  </span>{" "}
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">{"Genesis & HSM Enclaves"}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Architected the zero-retention arithmetic runtime. Proof-of-concept tested across 1,000 alpha
                  engineers with zero credential leaks.
                </p>
                <div className="pt-2 text-primary font-label-sm text-label-sm font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">terminal</span> Completed · SOC-2 Ready
                </div>
              </div>
              {/* Phase 2 */}
              <div className="p-6 rounded-xl bg-surface-container space-y-4 shadow-lg relative">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-surface-container-high text-outline font-label-sm text-label-sm font-semibold">
                    Q3-Q4 2024
                  </span>{" "}
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Sub-second Ledger Ingestion</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Integrated direct Open Banking connectors via Plaid and TrueLayer. Normalized 10,000+ erratic merchant
                  chains with 99.8% precision.
                </p>
                <div className="pt-2 text-primary font-label-sm text-label-sm font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">hub</span> Shipped to 10k users
                </div>
              </div>
              {/* Phase 3 (Active) */}
              <div className="p-6 rounded-xl bg-surface-container-high space-y-4 shadow-xl ring-1 ring-primary/30 relative">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-primary/20 text-primary font-label-sm text-label-sm font-semibold">
                    CURRENT PHASE
                  </span>{" "}
                  <span className="material-symbols-outlined text-primary text-base animate-pulse">adjust</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                  {"Copilot 2.0 & Vampire Hunter"}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Autonomous zombie subscription detection, predictive 90-day cash flow forecast curve, and generative
                  conversational financial explanations.
                </p>
                <div className="pt-2 text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">rocket_launch</span> Active Rollout
                </div>
              </div>
              {/* Phase 4 (Upcoming) */}
              <div className="p-6 rounded-xl bg-surface-container space-y-4 shadow-lg relative">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm font-semibold">
                    2025 ROADMAP
                  </span>{" "}
                  <span className="material-symbols-outlined text-secondary text-base">schedule</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                  {"Household Enclaves & Yield"}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Cryptographically separated dual-partner budgets, multi-currency autonomous yield allocation, and
                  sovereign local node desktop runtime.
                </p>
                <div className="pt-2 text-secondary font-label-sm text-label-sm font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">psychology</span> {"In R&D Pipeline"}
                </div>
              </div>
            </div>
          </section>
          {/* 6. Culture, Careers & Open Roles */}
          <section className="w-full bg-surface-container-lowest py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-16">
              {/* Philosophy Banner */}
              <div className="p-8 lg:p-12 rounded-xl bg-surface-container-high shadow-2xl space-y-6">
                <div className="max-w-3xl space-y-4">
                  <span className="font-label-md text-label-md text-primary tracking-widest uppercase font-semibold">
                    Craft Standard
                  </span>{" "}
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                    "We write code like cryptographers and design like typographers."
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    We are a lean collective of obsessive builders. We value mathematical rigor, deep taste,
                    uncompromising privacy guarantees, and documentation clarity over corporate bureaucracy.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className="p-4 rounded-lg bg-surface-container">
                    <span className="font-title-md text-title-md text-primary font-bold">{"Async & Distributed"}</span>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                      Deep uninterrupted engineering blocks; minimal meetings.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container">
                    <span className="font-title-md text-title-md text-secondary font-bold">Top 1% Compensation</span>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                      High base salary + meaningful sovereign equity ownership.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container">
                    <span className="font-title-md text-title-md text-tertiary font-bold">Extreme Agency</span>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                      Every engineer and designer deploys user-facing code weekly.
                    </p>
                  </div>
                </div>
              </div>
              {/* Open Roles List */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Open Positions</h3>{" "}
                  <span className="font-label-sm text-label-sm text-primary uppercase font-semibold">
                    3 Strategic Roles Active
                  </span>
                </div>
                <div className="space-y-4">
                  {/* Role 1 */}
                  <div className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <h4 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                          Staff Systems Engineer (Rust / Sovereign Enclaves)
                        </h4>{" "}
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">
                          Engineering
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Build our sub-second deterministic calculation kernel inside hardware-isolated confidential
                        compute enclaves.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-body-sm text-body-sm text-outline">Remote (US / EU)</span>{" "}
                      <a
                        className="px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary-container font-label-md text-label-md font-semibold transition-all"
                        href="#"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                  {/* Role 2 */}
                  <div className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <h4 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-secondary transition-colors">
                          {"Senior AI Evaluation & Verification Engineer"}
                        </h4>{" "}
                        <span className="px-2 py-0.5 rounded-full bg-secondary/15 text-secondary font-label-sm text-label-sm">
                          Research
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Design adversarial benchmarks and zero-hallucination verification shields for natural language
                        financial copilots.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-body-sm text-body-sm text-outline">Remote (Global)</span>{" "}
                      <a
                        className="px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface hover:bg-secondary-container hover:text-on-secondary-container font-label-md text-label-md font-semibold transition-all"
                        href="#"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                  {/* Role 3 */}
                  <div className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <h4 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                          {"Lead Product Designer (Dark Interfaces & Data Viz)"}
                        </h4>{" "}
                        <span className="px-2 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-label-sm">
                          Design
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Elevate our visual language into the premier standard for high-density, multi-sensory desktop
                        financial intelligence.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-body-sm text-body-sm text-outline">San Francisco or Remote</span>{" "}
                      <a
                        className="px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary-container font-label-md text-label-md font-semibold transition-all"
                        href="#"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Don't see your specific specialization? We always hire exceptional problem-solvers on a rolling
                    basis.
                  </span>{" "}
                  <a
                    className="font-label-md text-label-md text-primary hover:underline font-semibold whitespace-nowrap"
                    href="#"
                  >
                    Send Unsolicited Dossier →
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* 7. Institutional Transparency & Disclosures */}
          <section className="w-full py-16 max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <div className="p-8 rounded-xl bg-surface-container space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline text-xl">policy</span>{" "}
                <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                  {"Institutional Transparency & Regulatory Disclosures"}
                </h4>
              </div>
              <p className="font-body-sm text-body-sm text-outline leading-relaxed">
                {
                  "Penny AI is an informational financial copilot and analytical telemetry interface developed by Penny Financial Technologies Inc. Penny is not an SEC-registered investment advisor, chartered depository institution, or broker-dealer. None of the automated insights, predictive cash flow horizons, or subscription alerts constitute personalized investment, legal, or tax advice. Banking connection services are executed via bank-grade SOC-2 certified gateways (Plaid Inc. & TrueLayer). All stored credentials use hardware tokenization with zero plaintext persistence."
                }
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 font-label-md text-label-md text-primary font-medium">
                <a className="hover:underline flex items-center gap-1" href="#">
                  <span className="material-symbols-outlined text-sm">description</span> Read Architecture Whitepaper
                </a>{" "}
                <a className="hover:underline flex items-center gap-1" href="#">
                  <span className="material-symbols-outlined text-sm">verified_user</span> {"Security & SOC-2 Portal"}
                </a>{" "}
                <a className="hover:underline flex items-center gap-1" href="#">
                  <span className="material-symbols-outlined text-sm">handshake</span> Investor Relations (Seed Series)
                </a>
              </div>
            </div>
          </section>
          {/* 8. Bottom Call to Action Section */}
          <section className="w-full py-20 bg-gradient-to-b from-surface to-surface-container-lowest relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[130px] pointer-events-none rounded-full" />
            <div className="max-w-4xl mx-auto px-margin-mobile lg:px-margin text-center space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>{" "}
                <span className="font-label-md text-label-md uppercase tracking-wider">
                  Join The Sovereign Wealth Movement
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight">
                Experience absolute financial clarity in under 5 minutes.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
                Take command with verifiable deterministic telemetry, sovereign privacy guarantees, and an intelligent
                copilot that never hallucinates.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-space-md pt-2">
                <Link
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary font-label-md text-label-md font-bold shadow-xl shadow-primary-container/25 transition-all"
                  data-path="get-started"
                  href="/get-started"
                >
                  <span>Start Free 14-Day Trial</span>{" "}
                  <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                </Link>{" "}
                <a
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md font-semibold transition-colors"
                  href="#"
                >
                  <span>Explore Open Positions</span> <span className="material-symbols-outlined text-sm">group</span>
                </a>
              </div>
              <div className="flex items-center justify-center gap-6 pt-4 text-outline font-label-sm text-label-sm">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> No credit card required
                </span>{" "}
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> 1-click nuclear erasure
                </span>{" "}
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> Plaid TLS Encrypted
                </span>
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
