"use client";

import MobileMenu from "@/components/MobileMenu";
import { useState } from "react";
const pageStyles =
  "@layer base{html,body{width:100vw;margin:0;padding:0;background-color:#0e1321;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}\nbody {\n      min-height: max(884px, 100dvh);\n    }";

export default function FeaturesMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cancelState, setCancelState] = useState<Record<string, "stopping" | "queued">>({});
  const cancel = (key: string) => {
    setCancelState((s) => ({ ...s, [key]: "stopping" }));
    setTimeout(() => setCancelState((s) => ({ ...s, [key]: "queued" })), 700);
  };
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
        <div className="flex flex-col w-full space-y-space-xl">
          {/* Top Badge & Header Hero */}
          <div className="flex flex-col space-y-space-md pt-2">
            <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-secondary-container/30 self-start shadow-sm">
              <span className="material-symbols-outlined text-secondary text-[16px]">verified_user</span>{" "}
              <span className="font-label-sm text-label-sm text-secondary tracking-wide uppercase">
                {"Penny AI Architecture & Core Capabilities"}
              </span>
            </div>
            <div className="space-y-space-xs">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold tracking-tight">
                Intelligent Finance Engine: <span className="text-primary font-extrabold">Numbers from Code,</span>{" "}
                Language from AI.
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We solved the financial hallucination dilemma. Penny decouples raw tabular calculation from linguistic
                synthesis. Hard mathematical ledgers are verified by deterministic kernels before LLM context framing.
              </p>
            </div>
          </div>
          {/* Key Metrics 2x2 Bento Grid */}
          <div className="grid grid-cols-2 gap-space-md">
            <div className="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col justify-between relative overflow-hidden group">
              <div className="flex items-center justify-between mb-2">
                <span className="material-symbols-outlined text-primary text-[22px]">calculate</span>{" "}
                <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">
                  Certified
                </span>
              </div>
              <div>
                <div className="font-numeric-display text-numeric-display text-on-surface font-bold">100%</div>
                <div className="font-title-md text-title-md text-on-surface mt-0.5">Deterministic Math</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                  Zero LLM math guessing; pure compiled ledger verification.
                </div>
              </div>
            </div>
            <div className="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="material-symbols-outlined text-secondary text-[22px]">security</span>{" "}
                <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-secondary/15 text-secondary">
                  Latency
                </span>
              </div>
              <div>
                <div className="font-numeric-display text-numeric-display text-on-surface font-bold">{"<4.2ms"}</div>
                <div className="font-title-md text-title-md text-on-surface mt-0.5">PII Masking</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                  {"Raw account & name data stripped before local vectorization."}
                </div>
              </div>
            </div>
            <div className="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="material-symbols-outlined text-tertiary text-[22px]">category</span>{" "}
                <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary">
                  Precision
                </span>
              </div>
              <div>
                <div className="font-numeric-display text-numeric-display text-on-surface font-bold">99.4%</div>
                <div className="font-title-md text-title-md text-on-surface mt-0.5">Auto-Categorization</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                  3-tier taxonomy engine mapping 80k+ merchant fingerprints.
                </div>
              </div>
            </div>
            <div className="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="material-symbols-outlined text-primary text-[22px]">lock_clock</span>{" "}
                <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">
                  Immutable
                </span>
              </div>
              <div>
                <div className="font-numeric-display text-numeric-display text-on-surface font-bold">SHA-256</div>
                <div className="font-title-md text-title-md text-on-surface mt-0.5">Audit Trails</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                  Cryptographically signed logs for every prompt generation.
                </div>
              </div>
            </div>
          </div>
          {/* 5-Stage Sovereign AI Pipeline Visualizer */}
          <div className="flex flex-col space-y-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[24px]">account_tree</span>{" "}
                <h2 className="font-headline-sm text-headline-sm text-on-surface">5-Stage Sovereign Pipeline</h2>
              </div>{" "}
              <span className="font-label-sm text-label-sm text-secondary px-2 py-0.5 rounded-full bg-secondary-container/20">
                Realtime Execution
              </span>
            </div>
            <div className="flex flex-col space-y-space-sm relative">
              {/* Stage 1 */}
              <div className="bg-surface-container rounded-xl p-space-md shadow-sm relative overflow-hidden">
                <div className="flex items-start gap-space-md">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 text-primary font-bold font-label-md text-label-md">
                    01
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-title-md text-title-md text-on-surface truncate">
                        {"Ingestion & PII Sanitization"}
                      </h3>{" "}
                      <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Deterministic AES-256 tokenization replaces names, account hashes, and geo-coordinates with local
                      synthetic tokens before model intake.
                    </p>
                    <div className="mt-2.5 flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant bg-surface-container-lowest px-2.5 py-1 rounded-md">
                      <span className="material-symbols-outlined text-[14px] text-primary">key</span>{" "}
                      <span className="font-mono text-on-surface-variant text-[11px]">SALTED_TOKEN_0x9F41...</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Stage 2 */}
              <div className="bg-surface-container rounded-xl p-space-md shadow-sm relative overflow-hidden">
                <div className="flex items-start gap-space-md">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 text-primary font-bold font-label-md text-label-md">
                    02
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-title-md text-title-md text-on-surface truncate">Hybrid Categorization</h3>{" "}
                      <span className="material-symbols-outlined text-secondary text-[18px]">auto_fix_high</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Hierarchical cascade: High-speed Regex matching → Local Merchant Vector Embeddings → Small bounded
                      LLM fallback for ambiguous merchant names.
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface">
                        Regex • 92%
                      </span>{" "}
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface">
                        Cosine • 7.4%
                      </span>{" "}
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-secondary">
                        LLM Fallback • 0.6%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Stage 3 */}
              <div className="bg-surface-container rounded-xl p-space-md shadow-sm relative overflow-hidden">
                <div className="flex items-start gap-space-md">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 text-primary font-bold font-label-md text-label-md">
                    03
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-title-md text-title-md text-on-surface truncate">
                        Statistical Anomaly Filter
                      </h3>{" "}
                      <span className="material-symbols-outlined text-tertiary text-[18px]">query_stats</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Client-side Isolation Forest running adaptive confidence thresholds, instantly isolating vampire
                      drains, creeping subscription price-hikes, and duplicate debits.
                    </p>
                  </div>
                </div>
              </div>
              {/* Stage 4 */}
              <div className="bg-surface-container-high rounded-xl p-space-md shadow-md relative overflow-hidden">
                <div className="flex items-start gap-space-md">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0 font-bold font-label-md text-label-md">
                    04
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-title-md text-title-md text-on-surface truncate">
                        Deterministic Ledger Kernel
                      </h3>{" "}
                      <span className="material-symbols-outlined text-primary text-[18px]">memory</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      The anti-hallucination layer. Hardened SQL/Python sandbox executes all balance totals, tax
                      projections, and compound interest calculations. Natural language models have read-only access to
                      final figures.
                    </p>
                  </div>
                </div>
              </div>
              {/* Stage 5 */}
              <div className="bg-surface-container rounded-xl p-space-md shadow-sm relative overflow-hidden">
                <div className="flex items-start gap-space-md">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 text-secondary font-bold font-label-md text-label-md">
                    05
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-title-md text-title-md text-on-surface truncate">
                        Conversational Tool-Calling
                      </h3>{" "}
                      <span className="material-symbols-outlined text-secondary text-[18px]">psychology</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Penny AI acts purely as a semantic narrator and orchestrator, referencing bounded analytical tools
                      with strictly formatted JSON payloads and zero narrative deviation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Subscription Hunter & Vampire Drain Card */}
          <div className="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col space-y-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <div className="w-8 h-8 rounded-lg bg-tertiary-container/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">radar</span>
                </div>
                <div>
                  <h2 className="font-title-lg text-title-lg text-on-surface leading-snug">Vampire Drain Buster</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    4 active recurring leaks flagged this month
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-label-sm text-label-sm text-error bg-error-container/20 px-2 py-0.5 rounded-full font-semibold">
                  -$214.80/mo
                </span>
              </div>
            </div>
            {/* Subscriptions List */}
            <div className="flex flex-col space-y-space-xs">
              {/* Item 1 */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface flex-shrink-0 font-bold font-label-md text-label-md">
                    NF
                  </div>
                  <div className="min-w-0">
                    <div className="font-title-md text-title-md text-on-surface truncate">Netflix Premium</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span>Billed May 14</span> <span>•</span>{" "}
                      <span className="text-tertiary">+$3.00 hike detected</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="font-title-md text-title-md text-on-surface">$22.99</span>{" "}
                  <button
                    aria-label="Cancel Netflix"
                    className={
                      cancelState["Netflix"] === "queued"
                        ? "px-2.5 py-1 rounded bg-surface-container hover:bg-error-container/30 font-label-sm text-label-sm transition-colors flex items-center gap-0.5 bg-primary/10"
                        : "px-2.5 py-1 rounded bg-surface-container text-error hover:bg-error-container/30 font-label-sm text-label-sm transition-colors flex items-center gap-0.5"
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!cancelState["Netflix"]) cancel("Netflix");
                    }}
                    type="button"
                  >
                    <CancelLabel state={cancelState["Netflix"]} />
                  </button>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface flex-shrink-0 font-bold font-label-md text-label-md">
                    CL
                  </div>
                  <div className="min-w-0">
                    <div className="font-title-md text-title-md text-on-surface truncate">Cloud Infrastructure</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span>Billed May 02</span> <span>•</span>{" "}
                      <span className="text-on-surface-variant">Idle instance</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="font-title-md text-title-md text-on-surface">$134.00</span>{" "}
                  <button
                    aria-label="Cancel Cloud instance"
                    className={
                      cancelState["Cloud instance"] === "queued"
                        ? "px-2.5 py-1 rounded bg-surface-container hover:bg-error-container/30 font-label-sm text-label-sm transition-colors flex items-center gap-0.5 bg-primary/10"
                        : "px-2.5 py-1 rounded bg-surface-container text-error hover:bg-error-container/30 font-label-sm text-label-sm transition-colors flex items-center gap-0.5"
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!cancelState["Cloud instance"]) cancel("Cloud instance");
                    }}
                    type="button"
                  >
                    <CancelLabel state={cancelState["Cloud instance"]} />
                  </button>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface flex-shrink-0 font-bold font-label-md text-label-md">
                    MA
                  </div>
                  <div className="min-w-0">
                    <div className="font-title-md text-title-md text-on-surface truncate">Metro Athletics Gym</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span>Billed May 18</span> <span>•</span> <span className="text-tertiary">0 check-ins / 45d</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="font-title-md text-title-md text-on-surface">$45.00</span>{" "}
                  <button
                    aria-label="Cancel Gym"
                    className={
                      cancelState["Gym"] === "queued"
                        ? "px-2.5 py-1 rounded bg-surface-container hover:bg-error-container/30 font-label-sm text-label-sm transition-colors flex items-center gap-0.5 bg-primary/10"
                        : "px-2.5 py-1 rounded bg-surface-container text-error hover:bg-error-container/30 font-label-sm text-label-sm transition-colors flex items-center gap-0.5"
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!cancelState["Gym"]) cancel("Gym");
                    }}
                    type="button"
                  >
                    <CancelLabel state={cancelState["Gym"]} />
                  </button>
                </div>
              </div>
              {/* Item 4 */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface flex-shrink-0 font-bold font-label-md text-label-md">
                    SP
                  </div>
                  <div className="min-w-0">
                    <div className="font-title-md text-title-md text-on-surface truncate">Spotify Duo</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span>Billed May 21</span> <span>•</span>{" "}
                      <span className="text-on-surface-variant">Active tier</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="font-title-md text-title-md text-on-surface">$12.81</span>{" "}
                  <button
                    aria-label="Cancel Spotify"
                    className={
                      cancelState["Spotify"] === "queued"
                        ? "px-2.5 py-1 rounded bg-surface-container hover:bg-error-container/30 font-label-sm text-label-sm transition-colors flex items-center gap-0.5 bg-primary/10"
                        : "px-2.5 py-1 rounded bg-surface-container text-error hover:bg-error-container/30 font-label-sm text-label-sm transition-colors flex items-center gap-0.5"
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!cancelState["Spotify"]) cancel("Spotify");
                    }}
                    type="button"
                  >
                    <CancelLabel state={cancelState["Spotify"]} />
                  </button>
                </div>
              </div>
            </div>
            {/* AI Remediation Helper */}
            <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">bolt</span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface">
                  {"Auto-negotiate utility & cable bills"}
                </span>
              </div>{" "}
              <button className="font-label-sm text-label-sm text-primary font-semibold hover:underline" type="button">
                Activate
              </button>
            </div>
          </div>
          {/* Predictive 30-Day Liquidity Curve Card */}
          <div className="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col space-y-space-md">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[20px]">show_chart</span>{" "}
                  <h2 className="font-title-lg text-title-lg text-on-surface">30-Day Liquidity Curve</h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Monte Carlo cashflow trajectory
                </p>
              </div>{" "}
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                High Confidence
              </span>
            </div>
            {/* Hero Balance Display */}
            <div className="flex items-baseline justify-between bg-surface-container-lowest p-space-md rounded-lg">
              <div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">Safe Discretionary Buffer</div>
                <div className="font-numeric-display text-numeric-display text-primary font-bold mt-0.5">$3,420.00</div>
              </div>
              <div className="text-right">
                <span className="font-label-sm text-label-sm text-on-surface-variant block">Forecasted Dip</span>{" "}
                <span className="font-title-md text-title-md text-on-surface font-semibold">$2,810.00</span>
              </div>
            </div>
            {/* Inline SVG Liquidity Trajectory Chart */}
            <div className="relative w-full h-36 bg-surface-container-lowest rounded-lg p-2 flex flex-col justify-end">
              <svg
                className="w-full h-full overflow-visible"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 320 100"
              >
                {/* Safety Threshold Guideline */}
                <line stroke="#3c4a42" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="320" y1="70" y2="70" />
                {/* Liquidity Fill Gradient */}
                <defs>
                  <linearGradient id="liquidityGlow" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4edea3" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#4edea3" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area Curve */}
                <path d="M0,45 Q40,30 80,48 T160,25 T240,60 T320,18 L320,100 L0,100 Z" fill="url(#liquidityGlow)" />
                {/* Stroke Curve */}
                <path
                  d="M0,45 Q40,30 80,48 T160,25 T240,60 T320,18"
                  fill="none"
                  stroke="#4edea3"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                {/* Projected Anomaly Point */}
                <circle cx="240" cy="60" fill="#ffb95f" r="4" />
              </svg>{" "}
              {/* Label Anchors */}
              <div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm pt-2">
                <span>Today</span> <span>+10 Days</span> <span className="text-tertiary">Rent/Payroll (-$1.8k)</span>{" "}
                <span>+30 Days</span>
              </div>
            </div>
            {/* AI Audio Executive Brief snippet */}
            <div className="p-3 rounded-lg bg-surface-container-high flex items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-xs min-w-0">
                <button
                  aria-label="Play weekly brief"
                  className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center flex-shrink-0 shadow-sm hover:scale-105 transition-transform"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                </button>{" "}
                <div className="min-w-0">
                  <div className="font-title-md text-title-md text-on-surface truncate">Penny Audio Briefing</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    54 sec • Cash reserve safe through Q3
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-[16px]">graphic_eq</span>{" "}
                <span className="font-label-sm text-label-sm font-semibold">Active</span>
              </div>
            </div>
          </div>
          {/* Data Sovereignty & Zero Compromises Section */}
          <div className="flex flex-col space-y-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[24px]">shield</span>{" "}
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Data Sovereignty: Zero Compromises</h2>
            </div>
            <div className="space-y-space-sm">
              {/* Item 1 */}
              <div className="bg-surface-container rounded-xl p-space-md shadow-sm">
                <div className="flex items-start gap-space-sm">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">delete_forever</span>
                  </div>
                  <div>
                    <h3 className="font-title-md text-title-md text-on-surface">Nuclear GDPR Erasure</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      One tap permanently wipes cryptographic master keys. When the key is deleted, raw ledger rows and
                      embeddings become indecipherable white noise across all nodes.
                    </p>
                  </div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="bg-surface-container rounded-xl p-space-md shadow-sm">
                <div className="flex items-start gap-space-sm">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">model_training</span>
                  </div>
                  <div>
                    <h3 className="font-title-md text-title-md text-on-surface">Zero AI Model Training</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Your financial records are never utilized to fine-tune public or proprietary LLM foundation
                      weights. Ephemeral prompt context is destroyed within 60 seconds of response streaming.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CTA Box */}
          <div className="bg-surface-container-high rounded-xl p-space-lg text-center space-y-space-md shadow-lg relative overflow-hidden">
            <div className="space-y-space-xs">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">bolt</span> Penny Engine v4.2 Active
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Experience Sovereign Financial Intelligence
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mx-auto">
                Join over 42,000 users managing cashflow with zero hallucinations and enterprise-grade cryptographic
                guarantees.
              </p>
            </div>
            <div className="flex flex-col gap-space-xs pt-1">
              <button
                className="w-full py-3 px-space-md rounded-lg bg-primary text-on-primary font-title-md text-title-md font-bold shadow-md hover:bg-primary-fixed-dim transition-all flex items-center justify-center gap-2"
                type="button"
              >
                <span>Connect Primary Institution</span>{" "}
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>{" "}
              <button
                className="w-full py-2.5 px-space-md rounded-lg bg-surface-container text-on-surface font-title-md text-title-md hover:bg-surface-container-highest transition-colors"
                type="button"
              >
                {"Read Whitepaper & Formal Proofs"}
              </button>
            </div>
          </div>
          {/* Compliance & Trust Footer */}
          <div className="flex flex-col items-center justify-center space-y-space-xs text-center py-4">
            <div className="flex items-center justify-center gap-4 text-on-surface-variant">
              <div className="flex items-center gap-1 font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">verified</span>{" "}
                <span>SOC2 Type II</span>
              </div>
              <div className="flex items-center gap-1 font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">gavel</span>{" "}
                <span>GDPR Article 17</span>
              </div>
              <div className="flex items-center gap-1 font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">lock</span>{" "}
                <span>256-Bit TLS 1.3</span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant/80 text-[11px] leading-tight">
              Penny AI is a financial copilot, not a certified CPA or fiduciary advisor. Math verification generated
              deterministically via Open Ledger Core.
            </p>
          </div>
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

function CancelLabel({ state }: { state?: "stopping" | "queued" }) {
  if (state === "stopping") {
    return (
      <>
        <span className="material-symbols-outlined text-[14px] animate-spin">refresh</span>
        <span>Stopping...</span>
      </>
    );
  }
  if (state === "queued") {
    return (
      <>
        <span className="material-symbols-outlined text-[14px] text-primary">check</span>
        <span className="text-primary">Queued</span>
      </>
    );
  }
  return <span>Cancel</span>;
}
