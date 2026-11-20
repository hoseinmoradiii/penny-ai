"use client";

import { useState } from "react";
import Link from "next/link";

const pageStyles =
  "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";

export default function SecurityDesktop() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [verifyState, setVerifyState] = useState<"idle" | "validating" | "verified">("idle");
  const verifyKey = () => {
    setVerifyState("validating");
    setTimeout(() => {
      setVerifyState("verified");
      setTimeout(() => setVerifyState("idle"), 3000);
    }, 700);
  };
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
                aria-current="page"
                className="px-space-md py-space-xs transition-colors bg-surface-container-high text-on-surface font-bold rounded-lg"
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
        <div className="flex flex-col w-full">
          {/* Subtle Ambient Top Aura */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-20 right-10 w-[420px] h-[280px] bg-secondary-container/20 rounded-full blur-[120px] pointer-events-none" />
            {/* Security Hero Header */}
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-12 pb-16 relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
                <div className="max-w-3xl space-y-space-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> DEFENSE-IN-DEPTH INFRASTRUCTURE
                    v4.2
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                    Institutional-Grade Security.
                    <br />{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      Sovereign-Level Privacy.
                    </span>
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    Your financial data belongs exclusively to you. Built with zero-knowledge architecture,
                    deterministic audit ledgers, and absolute quarantine against AI model training on customer records.
                  </p>
                </div>
                {/* Quick Trust Metric Tile */}
                <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-low shadow-xl">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      verified_user
                    </span>
                  </div>
                  <div>
                    <div className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                      Independent Audit Status
                    </div>
                    <div className="font-title-md text-title-md text-on-surface font-semibold flex items-center gap-1.5">
                      <span>SOC-2 Type II Certified</span> <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      {"Validated by Schellman & Co. LLC"}
                    </div>
                  </div>
                </div>
              </div>
              {/* Trust Badges Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md pt-12">
                <div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl">lock_clock</span>{" "}
                  <div className="min-w-0">
                    <div className="font-title-md text-title-md text-on-surface truncate">99.999% SLA</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">Hardware HSM Key Storage</div>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-2xl">enhanced_encryption</span>{" "}
                  <div className="min-w-0">
                    <div className="font-title-md text-title-md text-on-surface truncate">Zero Read/Write</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">Strict Read-Only Scopes</div>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl">privacy_tip</span>{" "}
                  <div className="min-w-0">
                    <div className="font-title-md text-title-md text-on-surface truncate">No Ad Brokers</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">Zero Data Monetization</div>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-2xl">memory</span>{" "}
                  <div className="min-w-0">
                    <div className="font-title-md text-title-md text-on-surface truncate">Quarantined LLM</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">Zero Weights Feedback</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Key Security Badges & Certifications Grid */}
          <section className="w-full bg-surface-container-lowest py-20 relative">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div>
                  <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
                    Verified Safeguards
                  </span>{" "}
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight mt-1">
                    Six Pillars of Sovereign Data Protection
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Engineered to satisfy Tier-1 banking audits, national data protection statutes, and modern adversarial
                  machine-learning threats.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                {/* Card 1: SOC 2 */}
                <div className="p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between group shadow-lg">
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                      <span className="material-symbols-outlined text-2xl">verified</span>
                    </div>
                    <div className="space-y-space-xs">
                      <span className="font-label-sm text-label-sm text-primary tracking-wide">
                        CONTINUOUS ATTESTATION
                      </span>{" "}
                      <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                        SOC 2 Type II Certified
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Undergoes 365-day automated evidence collection across 84 security domains. We continuously
                        monitor access controls, anomaly detection, and change management logs.
                      </p>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 flex items-center justify-between text-on-surface-variant text-body-sm bg-surface-container-high/40 p-3 rounded-lg">
                    <span>Audit cadence: Continuous</span>{" "}
                    <span className="font-label-md text-label-md text-primary font-semibold">Active Tier-1</span>
                  </div>
                </div>
                {/* Card 2: Encryption */}
                <div className="p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between group shadow-lg">
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                      <span className="material-symbols-outlined text-2xl">key</span>
                    </div>
                    <div className="space-y-space-xs">
                      <span className="font-label-sm text-label-sm text-primary tracking-wide">{"REST & TRANSIT"}</span>{" "}
                      <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                        {"AES-256 & TLS 1.3 Bank Encryption"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        All data in motion requires TLS 1.3 with Perfect Forward Secrecy. Data at rest is
                        compartmentalized using hardware-backed AES-256 with distinct per-user rotating encryption keys.
                      </p>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 flex items-center justify-between text-on-surface-variant text-body-sm bg-surface-container-high/40 p-3 rounded-lg">
                    <span>FIPS 140-3 Hardware Enclaves</span>{" "}
                    <span className="font-label-md text-label-md text-primary font-semibold">Zero-Plaintext</span>
                  </div>
                </div>
                {/* Card 3: Read-Only Open Banking */}
                <div className="p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between group shadow-lg">
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                      <span className="material-symbols-outlined text-2xl">account_balance</span>
                    </div>
                    <div className="space-y-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary tracking-wide">
                        ZERO CREDENTIAL ACCESS
                      </span>{" "}
                      <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                        {"Read-Only via Plaid & TrueLayer"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Penny never sees, handles, or stores your bank logins or passwords. Connections are strictly
                        mediated via regulated API tokens limited exclusively to read-only transaction viewing.
                      </p>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 flex items-center justify-between text-on-surface-variant text-body-sm bg-surface-container-high/40 p-3 rounded-lg">
                    <span>No funds withdrawal vectors</span>{" "}
                    <span className="font-label-md text-label-md text-secondary font-semibold">Read-Only Lock</span>
                  </div>
                </div>
                {/* Card 4: Nuclear Purge */}
                <div className="p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between group shadow-lg">
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                      <span className="material-symbols-outlined text-2xl">delete_forever</span>
                    </div>
                    <div className="space-y-space-xs">
                      <span className="font-label-sm text-label-sm text-primary tracking-wide">
                        GDPR ARTICLE 17 COMPLIANT
                      </span>{" "}
                      <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                        Nuclear Cryptographic Erasure
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Trigger a complete purge with one tap. We execute cryptographic key destruction, cascading
                        through primary datastores, backup snapshots, and token caches within 60 seconds.
                      </p>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 flex items-center justify-between text-on-surface-variant text-body-sm bg-surface-container-high/40 p-3 rounded-lg">
                    <span>Instant key shredding</span>{" "}
                    <span className="font-label-md text-label-md text-primary font-semibold">{"<60s Purge"}</span>
                  </div>
                </div>
                {/* Card 5: Zero Monetization */}
                <div className="p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between group shadow-lg">
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                      <span className="material-symbols-outlined text-2xl">visibility_off</span>
                    </div>
                    <div className="space-y-space-xs">
                      <span className="font-label-sm text-label-sm text-primary tracking-wide">
                        INDEPENDENT BUSINESS MODEL
                      </span>{" "}
                      <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                        Zero Data Monetization
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Our business model is 100% software subscription. We have never sold, rented, monetized, or
                        packaged consumer purchase histories, anonymized batches, or ledger aggregates.
                      </p>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 flex items-center justify-between text-on-surface-variant text-body-sm bg-surface-container-high/40 p-3 rounded-lg">
                    <span>Zero third-party trackers</span>{" "}
                    <span className="font-label-md text-label-md text-primary font-semibold">Contractual Lock</span>
                  </div>
                </div>
                {/* Card 6: Zero LLM Training */}
                <div className="p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between group shadow-lg">
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                      <span className="material-symbols-outlined text-2xl">lock_person</span>
                    </div>
                    <div className="space-y-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary tracking-wide">
                        STRICT ZERO RETENTION
                      </span>{" "}
                      <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                        Zero LLM Model Training
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Your prompts and aggregated figures are passed only via enterprise Zero Data Retention (ZDR)
                        endpoints. Upstream LLM providers are contractually forbidden from learning from your requests.
                      </p>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 flex items-center justify-between text-on-surface-variant text-body-sm bg-surface-container-high/40 p-3 rounded-lg">
                    <span>Stateless AI inferences</span>{" "}
                    <span className="font-label-md text-label-md text-secondary font-semibold">Ephemeral Pass</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* The Sovereign Architecture Deep Dive (Interactive Diagram) */}
          <section className="w-full py-24 bg-surface relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-16">
              <div className="max-w-3xl space-y-3">
                <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">
                  System Topography
                </span>{" "}
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  The Sovereign AI Pipeline: Zero Hallucinations, Total Secrecy
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  LLMs are great at prose, but terrible at arithmetic and vulnerable to prompt extraction. Penny
                  separates mathematical calculations from natural language rendering through a 3-stage cryptographic
                  sandbox.
                </p>
              </div>
              {/* Architecture Visual Flow Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg relative">
                {/* Step 1 */}
                <div className="relative bg-surface-container-low rounded-2xl p-8 space-y-6 shadow-xl flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container-high text-primary font-bold">
                        PHASE 01
                      </span>{" "}
                      <span className="material-symbols-outlined text-outline">shield_locked</span>
                    </div>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                      {"Edge Masking & Tokenization"}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Before any financial record touches our compute layer, personal identity identifiers (PII),
                      merchant names, and raw bank account numbers are converted into salted one-way hash tokens.
                    </p>
                    {/* Code/Payload Visual */}
                    <div className="p-4 rounded-xl bg-surface-container-lowest font-mono text-[11px] text-on-surface-variant leading-relaxed overflow-x-auto space-y-1">
                      <div className="text-outline">{"// Raw Ingestion Input"}</div>
                      <div className="text-error line-through">"name": "Jane Doe, Chase #8841"</div>
                      <div className="text-outline pt-1">{"// Salted Tokenized Output"}</div>
                      <div className="text-primary">"usr_token": "usr_sha256_9c41f7..."</div>
                      <div className="text-secondary">"mch_cat": "mch_rec_streaming_08"</div>
                      <div className="text-on-surface">"amt_cents": 1499</div>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center gap-2 text-primary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-sm">check_circle</span> Deterministic Sanitization
                  </div>
                </div>
                {/* Step 2 */}
                <div className="relative bg-surface-container-low rounded-2xl p-8 space-y-6 shadow-xl flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container-high text-secondary font-bold">
                        PHASE 02
                      </span>{" "}
                      <span className="material-symbols-outlined text-secondary">calculate</span>
                    </div>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                      Deterministic Math Kernel
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Penny never lets an AI model compute your net worth, cash flow trajectories, or tax estimates.
                      Strict, verified SQL/Python arithmetic engines compute financial facts with 100% numerical
                      precision.
                    </p>
                    {/* Visual Graphic: Deterministic Math vs LLM */}
                    <div className="p-4 rounded-xl bg-surface-container-lowest space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-outline">Engine</span>{" "}
                        <span className="text-primary font-bold">Strict Deterministic SQL</span>
                      </div>
                      <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-full" />
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                        <span className="text-outline">Hallucination Risk</span>{" "}
                        <span className="text-primary font-semibold">0.000% Math Error</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                        <span className="text-outline">Role of LLM</span>{" "}
                        <span className="text-secondary font-semibold">Semantic Explanations Only</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center gap-2 text-secondary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-sm">verified</span> Audited Calculation Engine
                  </div>
                </div>
                {/* Step 3 */}
                <div className="relative bg-surface-container-low rounded-2xl p-8 space-y-6 shadow-xl flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container-high text-primary font-bold">
                        PHASE 03
                      </span>{" "}
                      <span className="material-symbols-outlined text-primary">history_edu</span>
                    </div>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">SHA-256 Audit Trail</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Every inference query and proactive recommendation is committed to an append-only, tamper-evident
                      cryptographic log with exact system state snapshots and execution timestamps.
                    </p>
                    {/* Verification Block */}
                    <div className="p-4 rounded-xl bg-surface-container-lowest font-mono text-[11px] space-y-1.5">
                      <div className="flex justify-between items-center text-outline">
                        <span>TX_BLOCK_ID</span> <span className="text-on-surface">#983210</span>
                      </div>
                      <div className="truncate text-on-surface-variant">BLOCK_HASH: 7f83b1657ff1fc53b92dc...</div>
                      <div className="flex items-center gap-1.5 text-primary text-[10px] pt-1">
                        <span className="material-symbols-outlined text-xs">lock</span> IMMUTABLE SYSTEM RECORD
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center gap-2 text-primary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-sm">fact_check</span> Append-Only Nonce Ledger
                  </div>
                </div>
              </div>
              {/* Real-Time Cryptographic Verification Widget */}
              <div className="p-8 rounded-2xl bg-surface-container-low shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
                <div className="flex items-center gap-space-md">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl">fingerprint</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-on-surface font-semibold">
                      {"Live Public Key & Audit Registry"}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
                      Inspect our production GPG signing keys, SOC 2 bridge letters, and open-source SDK verification
                      checksums directly through our developer transparency hub.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm shrink-0">
                  <button
                    className="px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-all flex items-center gap-1.5"
                    id="verifyKeyBtn"
                    onClick={verifyKey}
                    type="button"
                  >
                    {verifyState === "idle" && (
                      <>
                        <span className="material-symbols-outlined text-sm text-primary">terminal</span> Verify
                        Fingerprint
                      </>
                    )}
                    {verifyState === "validating" && (
                      <>
                        <span className="material-symbols-outlined text-sm text-primary animate-spin">sync</span>{" "}
                        Validating PGP...
                      </>
                    )}
                    {verifyState === "verified" && (
                      <>
                        <span className="material-symbols-outlined text-sm text-primary">check_circle</span> 0x8F4E29C1
                        (Verified)
                      </>
                    )}
                  </button>{" "}
                  <a
                    className="px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary font-label-md text-label-md font-semibold transition-all"
                    href="#"
                  >
                    View Security Repository
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive Security FAQ Accordion */}
          <section className="w-full py-20 bg-surface-container-lowest">
            <div className="max-w-5xl mx-auto px-margin-mobile lg:px-margin space-y-12">
              <div className="text-center space-y-3">
                <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
                  Answers in Plain English
                </span>{" "}
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  {"Financial Privacy & Operational Governance"}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                  We believe transparency shouldn't hide behind ambiguous legal jargon. Here is how your assets and
                  identities are safeguarded.
                </p>
              </div>
              <div className="space-y-4">
                {/* Accordion 1 */}
                <div className="faq-item rounded-xl bg-surface-container-low transition-all overflow-hidden">
                  <button
                    className="faq-trigger w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    onClick={() => setOpenFaq((o) => (o === 0 ? null : 0))}
                    type="button"
                  >
                    <span className="font-title-md text-title-md text-on-surface font-semibold">
                      Can Penny move, transfer, or withdraw my money?
                    </span>{" "}
                    <span
                      className={
                        openFaq === 0
                          ? "material-symbols-outlined text-outline transition-transform duration-300 transform faq-icon rotate-180"
                          : "material-symbols-outlined text-outline transition-transform duration-300 transform faq-icon"
                      }
                    >
                      expand_more
                    </span>
                  </button>{" "}
                  <div
                    className={
                      openFaq === 0
                        ? "faq-content px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed space-y-2"
                        : "faq-content hidden px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed space-y-2"
                    }
                  >
                    <p>
                      <strong>No. It is structurally impossible.</strong> Penny operates exclusively on strict Read-Only
                      API permissions via certified open-banking protocols (Plaid and TrueLayer).
                    </p>
                    <p>
                      Our application architecture has zero software code paths, network permissions, or banking
                      endpoints capable of originating automated clearing house (ACH) transactions, initiating wire
                      transfers, or altering asset positions. Even in the theoretical scenario of a compromised
                      authorization token, no funds could ever be moved.
                    </p>
                  </div>
                </div>
                {/* Accordion 2 */}
                <div className="faq-item rounded-xl bg-surface-container-low transition-all overflow-hidden">
                  <button
                    className="faq-trigger w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    onClick={() => setOpenFaq((o) => (o === 1 ? null : 1))}
                    type="button"
                  >
                    <span className="font-title-md text-title-md text-on-surface font-semibold">
                      How is my personal information protected from AI foundation models?
                    </span>{" "}
                    <span
                      className={
                        openFaq === 1
                          ? "material-symbols-outlined text-outline transition-transform duration-300 transform faq-icon rotate-180"
                          : "material-symbols-outlined text-outline transition-transform duration-300 transform faq-icon"
                      }
                    >
                      expand_more
                    </span>
                  </button>{" "}
                  <div
                    className={
                      openFaq === 1
                        ? "faq-content px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed space-y-2"
                        : "faq-content hidden px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed space-y-2"
                    }
                  >
                    <p>
                      We enforce a rigorous zero-training firewall. Your transaction records, net worth balances, and
                      conversation prompts are never sent to consumer-facing AI models or used to fine-tune weights for
                      OpenAI, Anthropic, or proprietary model partners.
                    </p>
                    <p>
                      We route all queries through dedicated enterprise API endpoints guaranteed by formal Zero Data
                      Retention (ZDR) legal commitments. Furthermore, all accounts are tokenized using salted edge
                      hashes prior to inference, ensuring that upstream systems receive only sanitized mathematical
                      requests.
                    </p>
                  </div>
                </div>
                {/* Accordion 3 */}
                <div className="faq-item rounded-xl bg-surface-container-low transition-all overflow-hidden">
                  <button
                    className="faq-trigger w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    onClick={() => setOpenFaq((o) => (o === 2 ? null : 2))}
                    type="button"
                  >
                    <span className="font-title-md text-title-md text-on-surface font-semibold">
                      What happens when I delete my account?
                    </span>{" "}
                    <span
                      className={
                        openFaq === 2
                          ? "material-symbols-outlined text-outline transition-transform duration-300 transform faq-icon rotate-180"
                          : "material-symbols-outlined text-outline transition-transform duration-300 transform faq-icon"
                      }
                    >
                      expand_more
                    </span>
                  </button>{" "}
                  <div
                    className={
                      openFaq === 2
                        ? "faq-content px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed space-y-2"
                        : "faq-content hidden px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed space-y-2"
                    }
                  >
                    <p>
                      When you initiate an account closure, we trigger an immediate{" "}
                      <strong>Nuclear Cryptographic Erasure</strong> compliant with GDPR Article 17 (Right to Erasure)
                      and California CCPA guidelines.
                    </p>
                    <p>
                      Your per-user master encryption key stored in our Hardware Security Module (HSM) is permanently
                      shredded within 60 seconds, rendering all associated encrypted ledger rows mathematically
                      impossible to decrypt. All secondary cache records and Plaid connection tokens are permanently
                      revoked and flushed within 24 hours.
                    </p>
                  </div>
                </div>
                {/* Accordion 4 */}
                <div className="faq-item rounded-xl bg-surface-container-low transition-all overflow-hidden">
                  <button
                    className="faq-trigger w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    onClick={() => setOpenFaq((o) => (o === 3 ? null : 3))}
                    type="button"
                  >
                    <span className="font-title-md text-title-md text-on-surface font-semibold">
                      How does Penny comply with financial advice regulations?
                    </span>{" "}
                    <span
                      className={
                        openFaq === 3
                          ? "material-symbols-outlined text-outline transition-transform duration-300 transform faq-icon rotate-180"
                          : "material-symbols-outlined text-outline transition-transform duration-300 transform faq-icon"
                      }
                    >
                      expand_more
                    </span>
                  </button>{" "}
                  <div
                    className={
                      openFaq === 3
                        ? "faq-content px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed space-y-2"
                        : "faq-content hidden px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed space-y-2"
                    }
                  >
                    <p>
                      Penny is designed as an informational copilot, budgeting analytical tool, and financial
                      intelligence interface. Penny is not an SEC-registered investment adviser, broker-dealer, or
                      chartered banking institution.
                    </p>
                    <p>
                      All conversational outputs, net-worth trajectories, and cash flow forecasts provide factual
                      aggregation and mathematical projections for educational planning only. They do not constitute
                      fiduciary advice or personalized recommendations to buy, sell, or hold specific securities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Incident Response & Bug Bounty Program */}
          <section className="w-full py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="rounded-3xl bg-surface-container-low p-8 lg:p-14 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-space-md">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-sm">security</span> HACKERONE COORDINATED
                      DISCLOSURE
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      {"Continuous Threat Modeling & Bug Bounty Program"}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      We collaborate with global security researchers, penetration testers, and offensive engineers to
                      identify and resolve vulnerabilities before they can impact production clusters.
                    </p>
                    <div className="grid grid-cols-2 gap-space-md pt-2">
                      <div className="p-4 rounded-xl bg-surface-container space-y-1">
                        <div className="font-numeric-display text-numeric-display text-primary font-bold">12m</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          Average Vulnerability Triage Time
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-surface-container space-y-1">
                        <div className="font-numeric-display text-numeric-display text-secondary font-bold">
                          $25,000
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          Max Critical Severity Bounty
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-6 rounded-2xl bg-surface-container space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-2xl">mail</span>{" "}
                        <div>
                          <div className="font-title-md text-title-md text-on-surface font-semibold">
                            Responsible Disclosure
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">
                            security@pennyai.internal
                          </div>
                        </div>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Reports reviewed with safe-harbor protection under the HackerOne Vulnerability Coordination
                        Policy.
                      </p>
                      <div className="pt-2">
                        <a
                          className="w-full inline-flex items-center justify-center gap-2 px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md font-semibold transition-all"
                          href="#"
                        >
                          <span>{"View Bounty Guidelines & Scope"}</span>{" "}
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                      </div>
                    </div>
                    {/* Operational Readiness Status Indicator */}
                    <div className="px-6 py-4 rounded-xl bg-surface-container flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />{" "}
                        <span className="font-label-md text-label-md text-on-surface">Security Operations Center:</span>
                      </div>{" "}
                      <span className="font-label-md text-label-md text-primary font-semibold">
                        {"Active & Operational"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* High-Trust Conversion / Action Banner */}
          <section className="w-full py-16 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="p-10 lg:p-14 rounded-3xl bg-gradient-to-br from-surface-container-high to-surface-container shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-space-xl">
                <div className="space-y-space-xs max-w-2xl text-center lg:text-left">
                  <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                    Inspect Our Full Security Architecture
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Download the comprehensive 42-page technical security whitepaper including cryptographic flowcharts,
                    penetration test executive summaries, and SOC 2 scope specifications.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-space-md w-full lg:w-auto">
                  <a
                    className="w-full sm:w-auto px-space-lg py-3 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-label-md text-label-md font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-lg"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-primary text-base">download</span> Download Security
                    Whitepaper (PDF)
                  </a>{" "}
                  <a
                    className="w-full sm:w-auto px-space-lg py-3 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary font-label-md text-label-md font-bold transition-all shadow-xl inline-flex items-center justify-center gap-2"
                    href="#"
                  >
                    <span>Connect Institution Securely</span>{" "}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
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
