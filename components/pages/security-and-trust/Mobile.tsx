"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const pageStyles =
  "@layer base{html,body{width:100vw;margin:0;padding:0;background-color:#0e1321;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}\nbody {\n      min-height: max(884px, 100dvh);\n    }\nbody {\n      min-height: max(884px, 100dvh);\n    }";

export default function SecurityMobile() {
  const [clock, setClock] = useState("12:00:00 UTC");
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [purge, setPurge] = useState<"idle" | "purging" | "wiped">("idle");
  useEffect(() => {
    const update = () => setClock(new Date().toISOString().slice(11, 19) + " UTC");
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  const simulatePurge = () => {
    setPurge("purging");
    setTimeout(() => setPurge("wiped"), 750);
    setTimeout(() => setPurge("idle"), 3500);
  };
  const keyStatus = {
    idle: { text: "Keyring Active (Ed25519)", className: "font-label-sm text-label-sm text-primary" },
    purging: { text: "Purging Enclave...", className: "font-label-sm text-label-sm text-tertiary" },
    wiped: { text: "0 Keys Found (Zero Trace)", className: "font-label-sm text-label-sm text-error" },
  }[purge];
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
            <span className="font-title-md text-title-md text-on-surface hidden xs:block">
              {"Security & Trust (Mobile)"}
            </span>
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
          {/* Security Shield & Hero Badge */}
          <section className="flex flex-col items-center text-center px-space-xs pt-space-sm relative">
            <div className="relative flex items-center justify-center mb-space-md">
              <div className="absolute w-28 h-28 rounded-full bg-primary/10 blur-xl" />
              <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center shadow-lg relative shadow-primary/20">
                <span
                  className="material-symbols-outlined text-primary text-[36px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[14px]">lock</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm mb-space-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />{" "}
              {"SOC-2 TYPE II AUDITED & COMPLIANT"}
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight mb-space-xs">
              {"Sovereign-Grade Privacy & Bank-Level Security"}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Engineered from inception with zero-compromise cryptographic isolation. Penny calculates insights
              deterministically without retaining exposure.
            </p>
            {/* Verification Live Timestamp */}
            <div className="mt-space-md w-full bg-surface-container-low rounded-xl p-space-sm flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[18px]">verified</span>{" "}
                <div className="flex flex-col text-left">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                    Ledger Isolation Hash
                  </span>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface-variant" id="live-hash">
                    SHA-256: 9e2b...48fa
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-surface-container px-2 py-1 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-primary" />{" "}
                <span className="font-label-sm text-label-sm text-primary font-medium" id="live-clock">
                  {clock}
                </span>
              </div>
            </div>
          </section>
          {/* Instant Trust Matrix (Compact 2x2 grid) */}
          <section className="flex flex-col space-y-space-sm">
            <div className="flex items-center justify-between px-space-xs">
              <h2 className="font-title-lg text-title-lg text-on-surface">Trust Matrix</h2>{" "}
              <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/40 px-2 py-0.5 rounded-full">
                Automated Guardrails
              </span>
            </div>
            <div className="grid grid-cols-2 gap-space-sm">
              {/* Item 1 */}
              <div className="bg-surface-container p-space-md rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-primary/5 rounded-full blur-lg" />
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
                  <span className="material-symbols-outlined text-[22px]">enhanced_encryption</span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface mb-1">256-Bit TLS</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                    End-to-end military standard vaulting in transit and rest.
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="bg-surface-container p-space-md rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-secondary/5 rounded-full blur-lg" />
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary mb-space-sm">
                  <span className="material-symbols-outlined text-[22px]">visibility_lock</span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface mb-1">Read-Only Plaid</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                    Zero transactional or transfer capability by architectural design.
                  </p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="bg-surface-container p-space-md rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-primary/5 rounded-full blur-lg" />
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
                  <span className="material-symbols-outlined text-[22px]">neurology</span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface mb-1">Zero LLM Retain</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                    Financial figures never train generic external neural nets.
                  </p>
                </div>
              </div>
              {/* Item 4 */}
              <div className="bg-surface-container p-space-md rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-error/5 rounded-full blur-lg" />
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary mb-space-sm">
                  <span className="material-symbols-outlined text-[22px]">delete_forever</span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface mb-1">1-Tap Nuclear</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                    Instant GDPR erasure across edge caches and relational disks.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Visual Data Journey */}
          <section className="flex flex-col space-y-space-sm">
            <div className="flex items-center justify-between px-space-xs">
              <h2 className="font-title-lg text-title-lg text-on-surface">Data Transit Lifecycle</h2>{" "}
              <span className="font-label-sm text-label-sm text-primary font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">sync_saved_locally</span> Air-Gapped
              </span>
            </div>
            <div className="bg-surface-container rounded-2xl p-space-md space-y-space-md shadow-md relative">
              {/* Step 1 */}
              <div className="flex gap-space-sm items-start relative">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high text-primary flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-[16px]">account_balance</span>
                  </div>
                  <div className="w-0.5 h-10 bg-surface-variant mt-1" />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-title-md text-title-md text-on-surface">1. Financial Institution</span>{" "}
                    <span className="font-label-sm text-label-sm text-on-surface-variant">OAuth 2.0</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Encrypted API handoff directly via Plaid or Open Banking with tokenized credentials.
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex gap-space-sm items-start relative">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high text-secondary flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-[16px]">fingerprint_off</span>
                  </div>
                  <div className="w-0.5 h-10 bg-surface-variant mt-1" />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-title-md text-title-md text-on-surface">2. Local PII Sanitization</span>{" "}
                    <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/30 px-1.5 py-0.2 rounded">
                      On-Device
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Names, IBANs, and home addresses are scrubbed completely before any mathematical evaluation.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex gap-space-sm items-start relative">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high text-primary flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-[16px]">calculate</span>
                  </div>
                  <div className="w-0.5 h-10 bg-surface-variant mt-1" />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-title-md text-title-md text-on-surface">3. Deterministic Engine</span>{" "}
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Confidential Enclave</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Strict numerical balance arithmetic operates inside isolated memory enclaves without public internet
                    hooks.
                  </p>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex gap-space-sm items-start relative">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
                    <span
                      className="material-symbols-outlined text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      format_image_left
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-title-md text-title-md text-on-surface">4. Encrypted Copilot Delivery</span>{" "}
                    <span className="font-label-sm text-label-sm text-primary font-medium">Zero Leak</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Synthesized recommendations render directly into your local Penny client interface.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive Sandbox: Nuclear Deletion Dry Run */}
          <section className="bg-surface-container-low p-space-md rounded-2xl flex flex-col space-y-space-sm shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-tertiary text-[20px]">security_update_warning</span>{" "}
                <span className="font-title-md text-title-md text-on-surface">Privacy Vault Control</span>
              </div>{" "}
              <span className="font-label-sm text-label-sm text-on-surface-variant">Audited Control</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Experience what happens when you exercise absolute ownership. Test our instant cryptographic revocation
              simulation:
            </p>
            <div className="bg-surface-container p-space-sm rounded-xl flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface">Local Ephemeral Keys</span>{" "}
                <span className={keyStatus.className} id="key-status">
                  {keyStatus.text}
                </span>
              </div>{" "}
              <button
                className="px-3 py-1.5 rounded-lg bg-surface-variant hover:bg-error-container hover:text-on-error-container text-on-surface transition-colors font-label-sm text-label-sm flex items-center gap-1"
                id="wipe-btn"
                onClick={simulatePurge}
              >
                {purge === "wiped" ? (
                  <>
                    <span className="material-symbols-outlined text-[16px]">check_circle</span> Wiped
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[16px]">restart_alt</span> Simulate Purge
                  </>
                )}
              </button>
            </div>
          </section>
          {/* Collapsible FAQ Section */}
          <section className="flex flex-col space-y-space-sm">
            <div className="flex items-center justify-between px-space-xs">
              <h2 className="font-title-lg text-title-lg text-on-surface">{"Regulatory & Technical Clarifications"}</h2>{" "}
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">help_center</span>
            </div>
            <div className="space-y-2" id="faq-accordion">
              {/* FAQ 1 */}
              <div className="bg-surface-container rounded-xl overflow-hidden shadow-sm transition-all duration-200">
                <button
                  className="w-full p-space-md flex items-center justify-between text-left focus:outline-none"
                  data-faq="1"
                  onClick={() => setOpenFaq((o) => (o === "1" ? null : "1"))}
                >
                  <span className="font-title-md text-title-md text-on-surface pr-2">
                    Can Penny or its operators access or move my money?
                  </span>{" "}
                  <span
                    className={
                      openFaq === "1"
                        ? "material-symbols-outlined text-primary text-[20px] transform transition-transform duration-200 rotate-180"
                        : "material-symbols-outlined text-primary text-[20px] transform transition-transform duration-200"
                    }
                    id="icon-faq-1"
                  >
                    expand_more
                  </span>
                </button>{" "}
                <div
                  className={
                    openFaq === "1"
                      ? "px-space-md pb-space-md text-on-surface-variant font-body-sm text-body-sm"
                      : "hidden px-space-md pb-space-md text-on-surface-variant font-body-sm text-body-sm"
                  }
                  id="content-faq-1"
                >
                  No. Penny utilizes Plaid and Open Banking protocols strictly under read-only scoping. There are zero
                  fund transfer, routing, or transaction origination credentials embedded in our code infrastructure. We
                  cannot move a single cent.
                </div>
              </div>
              {/* FAQ 2 */}
              <div className="bg-surface-container rounded-xl overflow-hidden shadow-sm transition-all duration-200">
                <button
                  className="w-full p-space-md flex items-center justify-between text-left focus:outline-none"
                  data-faq="2"
                  onClick={() => setOpenFaq((o) => (o === "2" ? null : "2"))}
                >
                  <span className="font-title-md text-title-md text-on-surface pr-2">
                    Where is personal data physically stored?
                  </span>{" "}
                  <span
                    className={
                      openFaq === "2"
                        ? "material-symbols-outlined text-primary text-[20px] transform transition-transform duration-200 rotate-180"
                        : "material-symbols-outlined text-primary text-[20px] transform transition-transform duration-200"
                    }
                    id="icon-faq-2"
                  >
                    expand_more
                  </span>
                </button>{" "}
                <div
                  className={
                    openFaq === "2"
                      ? "px-space-md pb-space-md text-on-surface-variant font-body-sm text-body-sm"
                      : "hidden px-space-md pb-space-md text-on-surface-variant font-body-sm text-body-sm"
                  }
                  id="content-faq-2"
                >
                  All user financial profiles are encrypted using personal sovereign keys stored in hardware-level
                  enclaves. Raw balance figures reside on encrypted SQLite partitions on your local mobile device,
                  synchronizing only tokenized digests.
                </div>
              </div>
              {/* FAQ 3 */}
              <div className="bg-surface-container rounded-xl overflow-hidden shadow-sm transition-all duration-200">
                <button
                  className="w-full p-space-md flex items-center justify-between text-left focus:outline-none"
                  data-faq="3"
                  onClick={() => setOpenFaq((o) => (o === "3" ? null : "3"))}
                >
                  <span className="font-title-md text-title-md text-on-surface pr-2">
                    Is Penny providing certified financial advice?
                  </span>{" "}
                  <span
                    className={
                      openFaq === "3"
                        ? "material-symbols-outlined text-primary text-[20px] transform transition-transform duration-200 rotate-180"
                        : "material-symbols-outlined text-primary text-[20px] transform transition-transform duration-200"
                    }
                    id="icon-faq-3"
                  >
                    expand_more
                  </span>
                </button>{" "}
                <div
                  className={
                    openFaq === "3"
                      ? "px-space-md pb-space-md text-on-surface-variant font-body-sm text-body-sm"
                      : "hidden px-space-md pb-space-md text-on-surface-variant font-body-sm text-body-sm"
                  }
                  id="content-faq-3"
                >
                  Penny provides automated analytical synthesis and mathematical projections for informational and
                  budgeting optimization purposes only. Penny is an AI-powered personal financial companion, not a
                  registered fiduciary advisor or broker-dealer.
                </div>
              </div>
            </div>
          </section>
          {/* Formal Proofs & Whitepaper Download Card */}
          <section className="bg-surface-container-high rounded-2xl p-space-md flex flex-col space-y-space-sm shadow-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">description</span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-on-surface">
                  {"Cryptographic Proofs & Whitepaper"}
                </span>{" "}
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Version 4.2 • Updated 2 days ago
                </span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Read the full architectural documentation detailing how we isolate state memory, authenticate edge tokens,
              and verify zero-retention compliance.
            </p>
            <div className="flex items-center gap-space-xs pt-1">
              <a
                className="flex-1 bg-surface-container py-2.5 rounded-xl text-center font-title-md text-title-md text-on-surface hover:bg-surface-bright transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">download</span> Download PDF
                (1.4MB)
              </a>{" "}
              <button
                aria-label="Certificate Signatures"
                className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">key</span>
              </button>
            </div>
          </section>
          {/* Bottom Callout */}
          <section className="bg-gradient-to-b from-surface-container to-surface-container-lowest rounded-2xl p-space-lg text-center flex flex-col items-center space-y-space-sm shadow-xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
              <span className="material-symbols-outlined text-[26px]">balance</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface max-w-xs">
              Experience true financial sovereignty without compromising privacy.
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Take complete ownership of your balance insights with deterministic security that stands between you and
              algorithmic surveillance.
            </p>
            <div className="pt-space-xs w-full max-w-xs">
              <button className="w-full py-3 px-4 rounded-xl bg-primary text-on-primary font-title-md text-title-md font-semibold shadow-lg shadow-primary/20 hover:bg-primary-fixed-dim transition-all flex items-center justify-center gap-2">
                <span>Create Isolated Vault</span>{" "}
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
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
