import Link from "next/link";

const pageStyles =
  "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";

export default function FeaturesDesktop() {
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
                aria-current="page"
                className="px-space-md py-space-xs transition-colors bg-surface-container-high text-on-surface font-bold rounded-lg"
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
          {/* Top Ambient Glow & Section Anchor */}
          <section className="relative w-full overflow-hidden pb-space-xl pt-space-lg">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[760px] h-[340px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-12 right-1/4 w-[420px] h-[280px] bg-secondary-container/20 rounded-full blur-[130px] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
              {/* Eyebrow & Headline Deck */}
              <div className="flex flex-col items-start gap-space-sm max-w-4xl">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high text-primary font-label-md text-label-md shadow-sm">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    bolt
                  </span>{" "}
                  <span>{"Penny AI Architecture & Core Capabilities"}</span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                  Intelligent Finance Engine: Numbers from Code, Language from AI.
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-space-xs leading-relaxed">
                  Financial accuracy demands zero mathematical hallucination. Penny separates raw ledger compute from
                  natural language synthesis, delivering verified arithmetic paired with sovereign-grade contextual
                  guidance.
                </p>
                {/* Metric micro-strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm w-full mt-space-md pt-space-md">
                  <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">
                      Math Reliability
                    </span>{" "}
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-numeric-display text-numeric-display text-primary">100%</span>{" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Deterministic</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Zero math generated by LLMs
                    </p>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">
                      PII Masking Latency
                    </span>{" "}
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-numeric-display text-numeric-display text-on-surface">{"<4.2"}</span>{" "}
                      <span className="font-body-sm text-body-sm text-secondary font-semibold">ms</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Edge sanitization guarantee
                    </p>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">
                      Auto-Categorization
                    </span>{" "}
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-numeric-display text-numeric-display text-primary">99.4%</span>{" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant">First-Pass</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Self-correcting memory loop
                    </p>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">
                      Audit Trails
                    </span>{" "}
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-numeric-display text-numeric-display text-on-surface">SHA-256</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Immutable query logs</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive AI Pipeline Architecture (5 Core Steps) */}
          <section className="w-full bg-surface-container-lowest py-space-xl relative">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              {/* Section Title Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-lg gap-space-sm">
                <div>
                  <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
                    Under the Hood
                  </span>{" "}
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                    5-Stage Sovereign AI Pipeline
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  How incoming banking strings transform from raw raw metadata into verified balance forecasts and
                  explainable conversational answers.
                </p>
              </div>
              {/* Step Rail / Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
                {/* Step 1 */}
                <div className="lg:col-span-4 bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container-high transition-colors">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-primary bg-primary-container/20 px-2 py-0.5 rounded-full font-semibold">
                        STAGE 01
                      </span>{" "}
                      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                        enhanced_encryption
                      </span>
                    </div>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                      {"Ingestion & PII Masking"}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Every Plaid or Open Banking transaction string is stripped of personal identifiers before reaching
                      any parsing model. Account numbers, routing IDs, and geo-coordinates are irreversibly tokenized.
                    </p>
                    {/* Visual Terminal Mock */}
                    <div className="bg-surface-container-lowest p-space-sm rounded-lg font-mono text-[11px] leading-relaxed text-on-surface-variant overflow-x-auto">
                      <div className="text-error line-through opacity-70">ORIG: CHASE*JOHN DOE #4881 NYC 10001</div>
                      <div className="text-primary font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">shield_with_heart</span> MASK:
                        TKN_9f82d::GROCERY_CHASE_US
                      </div>
                      <div className="text-outline text-[10px] mt-1">AES-256 field-level encrypted payload</div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center gap-2 text-label-sm font-label-sm text-primary">
                    <span className="material-symbols-outlined text-sm">lock_clock</span> Zero PII persists in
                    contextual caches
                  </div>
                </div>
                {/* Step 2 */}
                <div className="lg:col-span-4 bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container-high transition-colors">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/30 px-2 py-0.5 rounded-full font-semibold">
                        STAGE 02
                      </span>{" "}
                      <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">
                        category
                      </span>
                    </div>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Hybrid Categorization</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {
                        "Three-tiered classification funnel: Instant Regex matcher > 4.8M Global Merchant Vector DB > Few-Shot LLM classifier with real-time feedback loops that memorize your customized split habits."
                      }
                    </p>
                    {/* Visual Hierarchy Badge Stack */}
                    <div className="space-y-1.5 pt-space-xs">
                      <div className="flex items-center justify-between p-2 rounded bg-surface-container-low text-xs">
                        <span className="text-on-surface font-medium flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-xs text-primary">flash_on</span> Tier 1:
                          Deterministic Regex
                        </span>{" "}
                        <span className="text-primary font-mono text-[11px] font-semibold">0.4ms (78%)</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-surface-container-low text-xs">
                        <span className="text-on-surface font-medium flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-xs text-secondary">hub</span> Tier 2: Merchant
                          Vector Store
                        </span>{" "}
                        <span className="text-secondary font-mono text-[11px] font-semibold">3.1ms (18%)</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-surface-container-low text-xs">
                        <span className="text-on-surface font-medium flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-xs text-tertiary">psychology</span> Tier 3:
                          LLM Contextual Fallback
                        </span>{" "}
                        <span className="text-tertiary font-mono text-[11px] font-semibold">18ms (3.4%)</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm text-primary">sync</span>{" "}
                    {"Self-adjusting user overrides in <100ms"}
                  </div>
                </div>
                {/* Step 3 */}
                <div className="lg:col-span-4 bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container-high transition-colors">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-tertiary bg-tertiary-container/30 px-2 py-0.5 rounded-full font-semibold">
                        STAGE 03
                      </span>{" "}
                      <span className="material-symbols-outlined text-outline group-hover:text-tertiary transition-colors">
                        monitoring
                      </span>
                    </div>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                      Statistical Anomaly Detection
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Continuous Z-score and Isolation Forest evaluation of transaction rhythm. Tunable sensitivity
                      guards against alert exhaustion while instantly catching clandestine price creeps and
                      dual-terminal swipes.
                    </p>
                    {/* Sensitivity Control Demo */}
                    <div className="bg-surface-container-low p-space-sm rounded-lg space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-on-surface font-medium">Anomaly Threshold</span>{" "}
                        <span className="text-primary font-mono text-label-sm font-semibold">Adaptive (2.4σ)</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full w-2/3" />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-outline">
                        <span>Low noise (0 alerts/wk)</span> <span className="text-primary">Balanced</span>{" "}
                        <span>Hyper-vigilant</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center gap-2 text-label-sm font-label-sm text-tertiary">
                    <span className="material-symbols-outlined text-sm">notifications_active</span> Suppresses false
                    positives via 90-day baseline
                  </div>
                </div>
                {/* Step 4 - Full Contrast Card (Pure White Surface) */}
                <div className="lg:col-span-7 bg-white text-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-2xl relative overflow-hidden">
                  <div className="space-y-space-sm relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-primary bg-primary-container px-2 py-0.5 rounded-full font-bold">
                        STAGE 04 • CRITICAL ANCHOR
                      </span>{" "}
                      <span className="material-symbols-outlined text-surface-container-lowest/60">terminal</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-surface-container-lowest font-bold tracking-tight">
                      Deterministic Computation: SQL/Python Never Hallucinates
                    </h3>
                    <p className="font-body-md text-body-md text-surface-variant max-w-xl">
                      Large language models are forbidden from calculating net worth, interest accruals, or burn rates.
                      All balances, averages, and tax brackets run on deterministic Python kernels via DuckDB. The LLM
                      only receives verified outputs to write concise, human English summaries.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                      <div className="p-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-mono text-xs space-y-1">
                        <div className="text-primary text-[10px] uppercase font-bold tracking-wider">
                          {"// Compute Kernel (duckdb)"}
                        </div>
                        <div className="text-on-surface-variant">SELECT SUM(amount) FROM tx</div>
                        <div className="text-on-surface-variant">
                          {"WHERE cat = 'dining' AND dt >= NOW()-INTERVAL '30D';"}
                        </div>
                        <div className="text-primary font-bold pt-1">→ Result: $642.19 (Exact)</div>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-highest/20 text-surface-container-lowest text-xs space-y-1">
                        <div className="text-surface-variant text-[10px] uppercase font-bold tracking-wider">
                          {"// Narration Layer (LLM)"}
                        </div>
                        <p className="font-body-sm text-body-sm text-surface-container-lowest leading-snug">
                          “You've spent $642.19 on dining over the last 30 days, pacing 8% lower than last month's
                          velocity.”
                        </p>
                        <div className="text-on-primary-container text-[11px] font-semibold flex items-center gap-1 pt-1">
                          <span className="material-symbols-outlined text-xs">verified</span> Zero math synthesis risk
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between text-body-sm text-surface-variant font-medium">
                    <span>Rigorous isolation boundary</span>{" "}
                    <span className="text-on-primary-container font-semibold">Penny Security Doctrine v4.1</span>
                  </div>
                </div>
                {/* Step 5 - Indigo Tool-Calling Q&A */}
                <div className="lg:col-span-5 bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container-high transition-colors">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/40 px-2 py-0.5 rounded-full font-semibold">
                        STAGE 05
                      </span>{" "}
                      <span className="material-symbols-outlined text-secondary">chat_bubble</span>
                    </div>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                      {"Conversational Tool-Calling Q&A"}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Ask natural questions like “Can I afford the $240 concert tickets this weekend?” The agent
                      dynamically queries deterministic cash-flow APIs before presenting an honest, bounded decision
                      matrix.
                    </p>
                    {/* Mini Chat Simulation */}
                    <div className="bg-surface-container-low rounded-lg p-space-sm space-y-space-xs font-body-sm text-body-sm">
                      <div className="flex items-start gap-2 text-on-surface-variant">
                        <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0 text-xs font-bold text-on-surface">
                          U
                        </div>
                        <div className="bg-surface-container-high px-space-sm py-1.5 rounded-lg text-on-surface text-xs">
                          Can I afford a $240 concert ticket today?
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 text-xs font-bold">
                          P
                        </div>
                        <div className="bg-surface-container-highest/60 px-space-sm py-2 rounded-lg text-xs space-y-1">
                          <div className="text-primary font-mono text-[10px]">
                            TOOL: check_safe_liquidity(target=240, window=7) → OK
                          </div>
                          <p className="text-on-surface text-xs leading-relaxed">
                            Yes. After holding $820 for rent and auto-saving $150 on Friday, you hold{" "}
                            <span className="text-primary font-bold">$384 in true discretionary buffer</span>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center gap-2 text-label-sm font-label-sm text-secondary">
                    <span className="material-symbols-outlined text-sm">bolt</span> Function calling with sandboxed
                    parameters
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive Feature Gallery: Subscriptions, Forecast Curve & Audio Brief */}
          <section className="w-full py-space-xl relative">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-xl">
              {/* Feature 1: Recurring Subscription Hunter */}
              <div className="bg-surface-container rounded-xl p-space-lg lg:p-space-xl shadow-lg relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                  <div className="lg:col-span-5 space-y-space-sm">
                    <div className="inline-flex items-center gap-space-xs px-2 py-1 rounded bg-secondary-container/20 text-secondary font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-sm">search_check</span> Automated Audit Feature
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      {"Subscription Hunter & Vampire Drain Buster"}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Penny continuously scans irregular frequencies, unnoticed mid-cycle pricing escalations, and
                      inactive recurring plans across all linked cards. Terminate unwanted drains with tailored, 1-click
                      cancellation playbooks.
                    </p>
                    <div className="pt-space-xs space-y-space-xs">
                      <div className="flex items-center gap-space-xs text-body-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>{" "}
                        <span>Flags silent monthly inflation ($12.99 → $15.99 hikes)</span>
                      </div>
                      <div className="flex items-center gap-space-xs text-body-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>{" "}
                        <span>{"Generates pre-filled cancellation tickets & direct links"}</span>
                      </div>
                      <div className="flex items-center gap-space-xs text-body-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>{" "}
                        <span>Calculates annualized waste recovery potential</span>
                      </div>
                    </div>
                  </div>
                  {/* Subscription Ledger Demo Interactive Widget */}
                  <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-md shadow-inner space-y-space-sm">
                    <div className="flex items-center justify-between pb-space-xs">
                      <div>
                        <span className="font-title-md text-title-md text-on-surface font-bold">
                          Detected Active Subscriptions
                        </span>{" "}
                        <p className="font-body-sm text-body-sm text-outline">
                          18 services linked • Total: $342.80 / mo
                        </p>
                      </div>{" "}
                      <span className="px-space-sm py-1 bg-error-container/40 text-error text-label-sm font-label-sm rounded-full flex items-center gap-1 font-semibold">
                        <span className="material-symbols-outlined text-xs">warning</span> 2 Hikes Detected
                      </span>
                    </div>
                    {/* Item 1: Netflix (Price Hike Flagged) */}
                    <div className="bg-surface-container rounded-lg p-space-sm flex items-center justify-between gap-space-sm hover:bg-surface-container-high transition-colors">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center font-bold text-on-surface">
                          <span className="material-symbols-outlined text-error">movie</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-title-md text-title-md text-on-surface font-semibold">
                              Netflix Premium
                            </span>{" "}
                            <span className="px-1.5 py-0.5 rounded bg-error/15 text-error text-[10px] font-bold">
                              +18.5% Hike
                            </span>
                          </div>{" "}
                          <span className="font-body-sm text-body-sm text-outline">
                            Renews in 4 days • Chase Sapphire • Last month: $19.99
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-md">
                        <div className="text-right">
                          <span className="font-title-md text-title-md text-on-surface font-bold">$22.99</span>{" "}
                          <span className="block font-body-sm text-body-sm text-outline">monthly</span>
                        </div>{" "}
                        <button
                          className="px-space-sm py-1.5 bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface text-label-sm font-label-sm rounded-lg font-semibold transition-all flex items-center gap-1"
                          type="button"
                        >
                          <span>Cancel Guide</span>{" "}
                          <span className="material-symbols-outlined text-xs">arrow_outward</span>
                        </button>
                      </div>
                    </div>
                    {/* Item 2: Cloud Storage (AWS/GCP Unused) */}
                    <div className="bg-surface-container rounded-lg p-space-sm flex items-center justify-between gap-space-sm hover:bg-surface-container-high transition-colors">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center font-bold text-on-surface">
                          <span className="material-symbols-outlined text-secondary">cloud</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-title-md text-title-md text-on-surface font-semibold">
                              Cloud Infrastructure
                            </span>{" "}
                            <span className="px-1.5 py-0.5 rounded bg-tertiary/15 text-tertiary text-[10px] font-bold">
                              Unused 60d
                            </span>
                          </div>{" "}
                          <span className="font-body-sm text-body-sm text-outline">
                            Auto-debit • Amex Business • Idle instance
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-md">
                        <div className="text-right">
                          <span className="font-title-md text-title-md text-on-surface font-bold">$64.20</span>{" "}
                          <span className="block font-body-sm text-body-sm text-outline">monthly</span>
                        </div>{" "}
                        <button
                          className="px-space-sm py-1.5 bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface text-label-sm font-label-sm rounded-lg font-semibold transition-all flex items-center gap-1"
                          type="button"
                        >
                          <span>1-Click Cancel</span> <span className="material-symbols-outlined text-xs">cancel</span>
                        </button>
                      </div>
                    </div>
                    {/* Item 3: Equinox / Gym */}
                    <div className="bg-surface-container rounded-lg p-space-sm flex items-center justify-between gap-space-sm hover:bg-surface-container-high transition-colors">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center font-bold text-on-surface">
                          <span className="material-symbols-outlined text-primary">fitness_center</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-title-md text-title-md text-on-surface font-semibold">
                              Metro Athletics Club
                            </span>{" "}
                            <span className="px-1.5 py-0.5 rounded bg-primary/15 text-primary text-[10px] font-bold">
                              Optimized
                            </span>
                          </div>{" "}
                          <span className="font-body-sm text-body-sm text-outline">
                            Renews in 18 days • Checking Debit
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-md">
                        <div className="text-right">
                          <span className="font-title-md text-title-md text-on-surface font-bold">$185.00</span>{" "}
                          <span className="block font-body-sm text-body-sm text-outline">monthly</span>
                        </div>{" "}
                        <button
                          className="px-space-sm py-1.5 bg-surface-container-highest text-outline text-label-sm font-label-sm rounded-lg cursor-default"
                          type="button"
                        >
                          Keep
                        </button>
                      </div>
                    </div>
                    {/* Item 4: Spotify Family */}
                    <div className="bg-surface-container rounded-lg p-space-sm flex items-center justify-between gap-space-sm hover:bg-surface-container-high transition-colors">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center font-bold text-on-surface">
                          <span className="material-symbols-outlined text-primary">graphic_eq</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-title-md text-title-md text-on-surface font-semibold">
                              Spotify Family Plan
                            </span>{" "}
                            <span className="px-1.5 py-0.5 rounded bg-primary/15 text-primary text-[10px] font-bold">
                              Split Active (4/6)
                            </span>
                          </div>{" "}
                          <span className="font-body-sm text-body-sm text-outline">Renews 28th • Visa Signature</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-md">
                        <div className="text-right">
                          <span className="font-title-md text-title-md text-on-surface font-bold">$16.99</span>{" "}
                          <span className="block font-body-sm text-body-sm text-outline">monthly</span>
                        </div>{" "}
                        <button
                          className="px-space-sm py-1.5 bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface text-label-sm font-label-sm rounded-lg font-semibold transition-all"
                          type="button"
                        >
                          Manage
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Feature 2: Predictive Cash Flow Forecaster & End-of-Month Curve */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
                {/* Chart Column */}
                <div className="lg:col-span-8 bg-surface-container rounded-xl p-space-lg shadow-lg flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-space-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-title-lg text-title-lg text-on-surface font-bold">
                          Predictive 30-Day Liquidity Curve
                        </span>{" "}
                        <span className="font-label-sm text-label-sm bg-primary-container/20 text-primary px-2 py-0.5 rounded-full font-semibold">
                          Monte Carlo Simulation
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Computed over recurring payroll, committed rent, and seasonal spending variance.
                      </p>
                    </div>
                    {/* Range Selector Toggle */}
                    <div className="flex items-center bg-surface-container-highest p-0.5 rounded-lg text-label-sm font-label-sm">
                      <button
                        className="px-space-sm py-1 rounded bg-surface-container-low text-primary font-bold shadow-sm"
                        type="button"
                      >
                        30 Days
                      </button>{" "}
                      <button className="px-space-sm py-1 text-on-surface-variant hover:text-on-surface" type="button">
                        60 Days
                      </button>{" "}
                      <button className="px-space-sm py-1 text-on-surface-variant hover:text-on-surface" type="button">
                        Quarter
                      </button>
                    </div>
                  </div>
                  {/* Inline SVG Cash Flow Chart */}
                  <div className="w-full h-56 relative my-space-sm">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 200">
                      {/* Grid lines */}
                      <line
                        stroke="rgba(255,255,255,0.05)"
                        strokeDasharray="4 4"
                        strokeWidth="1"
                        x1="0"
                        x2="600"
                        y1="40"
                        y2="40"
                      />
                      <line
                        stroke="rgba(255,255,255,0.05)"
                        strokeDasharray="4 4"
                        strokeWidth="1"
                        x1="0"
                        x2="600"
                        y1="90"
                        y2="90"
                      />
                      <line
                        stroke="rgba(255,255,255,0.05)"
                        strokeDasharray="4 4"
                        strokeWidth="1"
                        x1="0"
                        x2="600"
                        y1="140"
                        y2="140"
                      />
                      {/* Confidence band gradient area */}
                      <defs>
                        <linearGradient id="primaryGlow" x1="0%" x2="0%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#4edea3" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#4edea3" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="forecastBand" x1="0%" x2="0%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#c0c1ff" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#c0c1ff" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Uncertainty cone (future Days 15-30) */}
                      <polygon fill="url(#forecastBand)" points="300,100 450,60 600,45 600,140 450,110 300,100" />
                      {/* Historic Actual Area (Days 1-15) */}
                      <polygon fill="url(#primaryGlow)" points="0,120 75,110 150,135 225,85 300,100 300,195 0,195" />
                      {/* Historic Trajectory Line (Past) */}
                      <polyline
                        fill="none"
                        points="0,120 75,110 150,135 225,85 300,100"
                        stroke="#4edea3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      />
                      {/* Forecasted Trajectory Line (Future dashed) */}
                      <polyline
                        fill="none"
                        points="300,100 375,115 450,75 525,85 600,62"
                        stroke="#c0c1ff"
                        strokeDasharray="6 4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                      />
                      {/* Today Marker Node */}
                      <circle cx="300" cy="100" fill="#4edea3" r="5" stroke="#0e1321" strokeWidth="2" />
                      {/* End of Month Target Marker Node */}
                      <circle cx="600" cy="62" fill="#c0c1ff" r="5" stroke="#0e1321" strokeWidth="2" />
                    </svg>{" "}
                    {/* Overlay Tooltip Labels */}
                    <div className="absolute left-1/2 -top-2 -translate-x-1/2 bg-surface-container-high px-2 py-1 rounded font-mono text-[11px] text-primary shadow">
                      Today: $8,420
                    </div>
                    <div className="absolute right-0 top-6 bg-surface-container-high px-2.5 py-1 rounded font-mono text-[11px] text-secondary font-bold shadow">
                      Projected EOM: $11,840
                    </div>
                  </div>
                  {/* Bottom Stat Strip */}
                  <div className="grid grid-cols-3 gap-space-sm pt-space-md">
                    <div>
                      <span className="font-label-sm text-label-sm text-outline block">Expected Income Inflow</span>{" "}
                      <span className="font-title-md text-title-md text-on-surface font-semibold">+$6,200.00</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-outline block">Committed Outflows</span>{" "}
                      <span className="font-title-md text-title-md text-error font-semibold">-$2,780.00</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-outline block">Safe Discretionary Buffer</span>{" "}
                      <span className="font-title-md text-title-md text-primary font-semibold">$3,420.00</span>
                    </div>
                  </div>
                </div>
                {/* Feature 3: Executive Audio/Text Briefing Snapshot */}
                <div className="lg:col-span-4 bg-surface-container rounded-xl p-space-lg shadow-lg flex flex-col justify-between">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm bg-primary-container/20 text-primary px-2 py-0.5 rounded-full font-semibold">
                        MONDAY 07:00 AM
                      </span>{" "}
                      <span className="material-symbols-outlined text-outline">podcasts</span>
                    </div>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Weekly Executive Briefing</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Every Monday at sunrise, Penny generates a 90-second synthesized audio digest and crisp executive
                      memo reviewing runway and key anomalies.
                    </p>
                    {/* Audio Player Mock */}
                    <div className="bg-surface-container-low rounded-xl p-space-md space-y-space-sm shadow-inner">
                      <div className="flex items-center gap-space-sm">
                        <button
                          className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                          type="button"
                        >
                          <span
                            className="material-symbols-outlined text-lg"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            play_arrow
                          </span>
                        </button>{" "}
                        <div className="flex-1">
                          <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface">
                            <span className="font-semibold">Week 42 Brief: +14% Savings Rate</span>{" "}
                            <span className="text-outline font-mono">1:28</span>
                          </div>
                          {/* Mini waveform visual */}
                          <div className="flex items-center gap-1 h-5 mt-1">
                            <span className="w-1 bg-primary h-2 rounded-full" />{" "}
                            <span className="w-1 bg-primary h-4 rounded-full" />{" "}
                            <span className="w-1 bg-primary h-5 rounded-full" />{" "}
                            <span className="w-1 bg-primary h-3 rounded-full" />{" "}
                            <span className="w-1 bg-primary h-4 rounded-full" />{" "}
                            <span className="w-1 bg-surface-container-highest h-3 rounded-full" />{" "}
                            <span className="w-1 bg-surface-container-highest h-2 rounded-full" />{" "}
                            <span className="w-1 bg-surface-container-highest h-4 rounded-full" />{" "}
                            <span className="w-1 bg-surface-container-highest h-2 rounded-full" />{" "}
                            <span className="w-1 bg-surface-container-highest h-1 rounded-full" />
                          </div>
                        </div>
                      </div>
                      {/* Key Takeaways Memo */}
                      <div className="pt-space-xs text-xs space-y-1.5 font-body-sm text-on-surface-variant">
                        <div className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-xs mt-0.5">check</span>{" "}
                          <span>Grocery velocity declined 12% week-over-week.</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-secondary text-xs mt-0.5">trending_up</span>{" "}
                          <span>HYSA interest dividend paid: +$84.12.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline">{"Delivered via Telegram & Push"}</span>{" "}
                    <button
                      className="font-label-sm text-label-sm text-primary hover:underline font-semibold"
                      type="button"
                    >
                      Customize Digest →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Security, Trust & Sovereign Data Governance */}
          <section className="w-full bg-surface-container-low py-space-xl relative">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                <div>
                  <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">
                    Institutional Trust
                  </span>{" "}
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                    {"Data Sovereignty & Zero Compromises"}
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  Financial data belongs exclusively to the user. Penny’s infrastructure is built so even our own
                  engineering team cannot unseal your transaction ledger.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                {/* Card 1: Disclaimer */}
                <div className="bg-surface-container rounded-xl p-space-lg space-y-space-xs shadow-md">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-xs">
                    <span className="material-symbols-outlined">gavel</span>
                  </div>
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    Unambiguous Regulatory Scope
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Penny provides informational intelligence, descriptive analytics, and deterministic budgeting
                    assistance. Penny is not a certified public accountant, licensed tax specialist, or registered
                    investment fiduciary.
                  </p>
                  <div className="pt-space-xs font-label-sm text-label-sm text-outline">
                    Compliant with FTC algorithmic transparency guidance.
                  </div>
                </div>
                {/* Card 2: GDPR & Permanent Deletion */}
                <div className="bg-surface-container rounded-xl p-space-lg space-y-space-xs shadow-md">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-space-xs">
                    <span className="material-symbols-outlined">delete_forever</span>
                  </div>
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    1-Click Nuclear GDPR Erasure
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Export every parsed JSON line item and audit log in one clean ZIP archive. Trigger irrevocable
                    database deletion with instant cryptographic shredding across all primary and replica nodes.
                  </p>
                  <div className="pt-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                    {"Right to be Forgotten enforced in <60 seconds."}
                  </div>
                </div>
                {/* Card 3: No Selling / Zero LLM Training */}
                <div className="bg-surface-container rounded-xl p-space-lg space-y-space-xs shadow-md">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary mb-space-xs">
                    <span className="material-symbols-outlined">do_not_disturb_on</span>
                  </div>
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    Zero AI Training on Ledger Data
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Enterprise zero-data-retention agreements guarantee that zero transaction tokens, category notes, or
                    net-worth metrics are ever used to train commercial foundation models.
                  </p>
                  <div className="pt-space-xs font-label-sm text-label-sm text-primary font-semibold">
                    Enterprise Zero-Retention SLA Bound.
                  </div>
                </div>
              </div>
              {/* Compliance Certification Strip */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md flex flex-wrap items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Independent Audits:
                  </span>{" "}
                  <span className="inline-flex items-center gap-1 font-body-sm text-body-sm text-on-surface font-semibold">
                    <span className="material-symbols-outlined text-xs text-primary">verified</span> SOC 2 Type II
                  </span>{" "}
                  <span className="inline-flex items-center gap-1 font-body-sm text-body-sm text-on-surface font-semibold">
                    <span className="material-symbols-outlined text-xs text-primary">verified</span> ISO 27001
                  </span>{" "}
                  <span className="inline-flex items-center gap-1 font-body-sm text-body-sm text-on-surface font-semibold">
                    <span className="material-symbols-outlined text-xs text-primary">verified</span>{" "}
                    {"GDPR & CCPA Ready"}
                  </span>
                </div>{" "}
                <a
                  className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1"
                  href="#"
                >
                  <span>Read Security Whitepaper</span>{" "}
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </section>
          {/* Interactive Sandbox CTA Banner */}
          <section className="w-full py-space-xl relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="relative rounded-2xl bg-surface-container-high p-space-lg lg:p-space-xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[90px] pointer-events-none" />
                <div className="space-y-space-xs max-w-xl relative z-10">
                  <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                    Interactive Test Flight
                  </span>{" "}
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                    Experience Deterministic AI Finance Today.
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Connect your primary institutions in 90 seconds via read-only Plaid protocols. Discover recurring
                    bloat and view your 30-day liquidity horizon for free.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-space-sm relative z-10 w-full md:w-auto">
                  <a
                    className="w-full sm:w-auto px-space-xl py-space-md rounded-lg bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary font-label-md text-label-md font-bold text-center transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]"
                    href="#"
                  >
                    Start Free Trial
                  </a>{" "}
                  <a
                    className="w-full sm:w-auto px-space-lg py-space-md rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-highest font-label-md text-label-md font-semibold text-center transition-all"
                    href="#"
                  >
                    Explore Demo Sandbox
                  </a>
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
