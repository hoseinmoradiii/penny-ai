"use client";

import MobileMenu from "@/components/MobileMenu";
import { useEffect, useRef, useState } from "react";
const pageStyles =
  "@layer base{html,body{width:100vw;margin:0;padding:0;background-color:#0e1321;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}\nbody {\n      min-height: max(884px, 100dvh);\n    }\nbody {\n      min-height: max(884px, 100dvh);\n    }";

export default function CompanyMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const TOTAL_SEC = 60;
  const [audio, setAudio] = useState<{ playing: boolean; sec: number; ended: boolean }>({
    playing: false,
    sec: 17,
    ended: false,
  });
  const [rolesState, setRolesState] = useState<"idle" | "opening" | "loaded">("idle");
  const audioTimer = useRef<ReturnType<typeof setInterval>>(undefined);
  useEffect(() => {
    if (!audio.playing) return;
    audioTimer.current = setInterval(() => {
      setAudio((a) => (a.sec < TOTAL_SEC ? { ...a, sec: a.sec + 1 } : { playing: false, sec: 0, ended: true }));
    }, 1000);
    return () => clearInterval(audioTimer.current);
  }, [audio.playing]);
  const remaining = TOTAL_SEC - audio.sec;
  const audioIcon = audio.playing ? "pause" : audio.ended ? "replay" : "play_arrow";
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
        <div className="flex flex-col w-full gap-space-lg">
          {/* Mission Hero Section */}
          <div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-xl">
            <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
            <div className="absolute -left-12 bottom-0 w-36 h-36 rounded-full bg-secondary-container/20 blur-xl pointer-events-none" />
            <div className="relative z-10 flex flex-col gap-space-xs">
              <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-secondary-container/30 text-secondary">
                <span className="material-symbols-outlined text-[14px]">verified_user</span>{" "}
                <span className="font-label-sm text-label-sm tracking-wider uppercase">{"Mission & Culture"}</span>
              </div>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight mt-1">
                Autonomous Financial OS Built on Absolute Trust.
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Why we are building Penny to replace manual spreadsheets and financial fog with sovereign mathematical
                clarity.
              </p>
              {/* Quick Stat Grid 2x2 */}
              <div className="grid grid-cols-2 gap-space-xs mt-space-sm pt-space-xs">
                <div className="flex flex-col p-3 rounded-lg bg-surface-container-low shadow-sm">
                  <div className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-[16px]">visibility</span>{" "}
                    <span className="font-numeric-display text-[22px] leading-tight text-primary">$180M+</span>
                  </div>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Monitored Assets</span>
                </div>
                <div className="flex flex-col p-3 rounded-lg bg-surface-container-low shadow-sm">
                  <div className="flex items-center gap-1 text-primary-fixed">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span>{" "}
                    <span className="font-numeric-display text-[22px] leading-tight text-primary-fixed">$12.4M</span>
                  </div>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Client Cash Saved</span>
                </div>
                <div className="flex flex-col p-3 rounded-lg bg-surface-container-low shadow-sm">
                  <div className="flex items-center gap-1 text-tertiary">
                    <span className="material-symbols-outlined text-[16px]">lock_reset</span>{" "}
                    <span className="font-numeric-display text-[22px] leading-tight text-tertiary">0%</span>
                  </div>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">User Data Sold</span>
                </div>
                <div className="flex flex-col p-3 rounded-lg bg-surface-container-low shadow-sm">
                  <div className="flex items-center gap-1 text-secondary">
                    <span className="material-symbols-outlined text-[16px]">terminal</span>{" "}
                    <span className="font-numeric-display text-[22px] leading-tight text-secondary">100%</span>
                  </div>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                    Deterministic Logic
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* The Penny Manifesto */}
          <div className="rounded-xl bg-surface-container-low p-space-md shadow-md flex flex-col gap-space-sm relative overflow-hidden">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">lightbulb</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wide">The Foundation</span>{" "}
                <span className="font-title-md text-title-md text-on-surface">Why Manual Budgeting Fails</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Human intent is messy; personal balance sheets are relentless. For decades, personal finance software
              burdened you with receipt tagging, CSV parsing, and shame-inducing guilt logs.
            </p>
            <div className="rounded-lg bg-surface-container-high p-3 flex flex-col gap-1.5 shadow-inner">
              <div className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>{" "}
                <span className="font-title-md text-title-md text-[14px]">Our Architectural Rule</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Numbers belong strictly in audited computation runtimes. Language belongs in LLMs. Penny never lets an
                AI model perform mental math on your life savings.
              </p>
            </div>
            <div className="relative w-full h-36 rounded-lg overflow-hidden mt-1 shadow-sm">
              <div
                className="bg-cover bg-center w-full h-full"
                data-alt="Close-up macro of an ultra clean dark mode glass slate workspace featuring glowing numeric emerald ledgers and subtle purple generative wave visualizer."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDazJYxOs4kE8zRlL3VmjBZqUs6OHwY9aycgpRGiRFSXNjL6mp7H1jgTQg4A8FywKEKI_aRmf66w0QrrNR6Yb6eWLfPHIwpE_smbFK2BThLCZZzbgFWvI8XpORgL-5u8E0QEDE9gRoXlp9q4nqhTTSmMNQzl6sxf1ncGs2hA8oqKo6wdzwbGoV41FO80sPEFsrqf7UZ4yfVTGKT3lQXu43VPiPxbLFb0CSDPsTYkg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent flex items-end p-3">
                <span className="font-label-sm text-label-sm text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">memory</span> Zero-hallucination computational
                  ledger
                </span>
              </div>
            </div>
          </div>
          {/* Four Core Tenets */}
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center justify-between px-1">
              <h2 className="font-title-lg text-title-lg text-on-surface">Four Core Tenets</h2>{" "}
              <span className="font-label-sm text-label-sm text-on-surface-variant">Non-Negotiables</span>
            </div>
            <div className="flex flex-col gap-space-xs">
              {/* Tenet 1 */}
              <div className="rounded-xl bg-surface-container p-space-md shadow-sm flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">timer</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-title-md text-title-md text-on-surface">1. Zero-Effort First</span>{" "}
                    <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary font-label-sm text-label-sm">
                      5-Min Value
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-normal">
                    If insight demands manual logging, it is already dead. Connect bank nodes in 90 seconds and unlock
                    immediate clarity without tedious receipt filing.
                  </p>
                </div>
              </div>
              {/* Tenet 2 */}
              <div className="rounded-xl bg-surface-container p-space-md shadow-sm flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-secondary-container/40 flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">functions</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-title-md text-title-md text-on-surface">2. Code for Math, AI for Prose</span>{" "}
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm">
                      No Delusions
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-normal">
                    Mathematical calculations run in zero-knowledge rust engines. Language models only translate
                    deterministic arrays into warm, intelligible counsel.
                  </p>
                </div>
              </div>
              {/* Tenet 3 */}
              <div className="rounded-xl bg-surface-container p-space-md shadow-sm flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-tertiary-container/30 flex items-center justify-center text-tertiary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">shield_person</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-title-md text-title-md text-on-surface">3. Sovereign Privacy</span>{" "}
                    <span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm">
                      Purge-Ready
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-normal">
                    No affiliate loan brokers, no algorithmic credit card shills. One tap triggers a provable
                    cryptographic purge of your data vault forever.
                  </p>
                </div>
              </div>
              {/* Tenet 4 */}
              <div className="rounded-xl bg-surface-container p-space-md shadow-sm flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-fixed shrink-0">
                  <span className="material-symbols-outlined text-[22px]">notifications_paused</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-title-md text-title-md text-on-surface">4. Nudge, Don't Nag</span>{" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                      High-Signal
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-normal">
                    Zero anxiety pings about 4-dollar lattes. Penny surfaces only structural shifts, recurring predatory
                    fee surges, and true rebalance moments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Leadership & Team */}
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center justify-between px-1">
              <div>
                <h2 className="font-title-lg text-title-lg text-on-surface">{"Leadership & Origins"}</h2>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Built by systems engineers and fintech operators.
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-space-xs">
              {/* Founder 1 */}
              <div className="rounded-xl bg-surface-container p-space-sm flex items-center gap-3 shadow-sm">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-surface-container-highest">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Professional studio portrait of Elena Rostova, female tech founder in her late 30s with confident warm smile, dark slate backdrop, cinematic rim lighting in emerald tones."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5c2QFX9Z9xEB618n4CSGoHllWfnK7ydxLikcTDph_cNbHgfMVUhUa2OPMYG2ptCrD2TJ8iM70XwUsy5enCfxxAqqSXvSm1M4Th4_GxZP8LBXjooa_5XQA6_6ymr664T410b7xlmdQT_Aany8RBRDsd-lLOcMZtSm5FOPwbfQTBBmg08JqUHWiFFGreTf2robHHeCyQHGnOqxqgSv7de30nMxlMKSxKmzri2wkBw"
                    alt=""
                  />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-on-surface truncate">Elena Rostova</span>{" "}
                    <span className="font-label-sm text-label-sm text-primary px-2 py-0.5 rounded-full bg-primary/10">
                      CEO
                    </span>
                  </div>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Ex-VP Payments Architecture, NeoBank
                  </span>{" "}
                  <span className="font-label-sm text-label-sm text-secondary mt-0.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">code_blocks</span> Distributed ledger scale
                  </span>
                </div>
              </div>
              {/* Founder 2 */}
              <div className="rounded-xl bg-surface-container p-space-sm flex items-center gap-3 shadow-sm">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-surface-container-highest">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Portrait photo of Marcus Chen, male security software engineer in his 30s with wire glasses, tech casual aesthetic, subtle violet backfill lighting in dark studio."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQfjfrWDhPH1IYzzRFRKGxv7xsmr27GDivHHGktv9PQ7zvtAjZ07wysb2d64oH7nmUwSzYPNRhr2fMi5qwfbmNnfiPhKU1_gmeNfhZhidS7PpTzlT8zJxBs3Xl0MPjmG8z8rBq51p_RAW-xiHl5VdS9iH3CHopCFjsZ52xVB0pxei80cqUk5PZoRis_e1GR4H8euQLh75_1-baLbJ554Qx0ky_jna2Hn6WnBuaNA"
                    alt=""
                  />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-on-surface truncate">Marcus Chen</span>{" "}
                    <span className="font-label-sm text-label-sm text-secondary px-2 py-0.5 rounded-full bg-secondary-container/40">
                      CTO
                    </span>
                  </div>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Ex-Staff Security Lead, Enclave Labs
                  </span>{" "}
                  <span className="font-label-sm text-label-sm text-primary mt-0.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">key</span> Confidential hardware computing
                  </span>
                </div>
              </div>
              {/* Leader 3 */}
              <div className="rounded-xl bg-surface-container p-space-sm flex items-center gap-3 shadow-sm">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-surface-container-highest">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Warm studio photo of Dr Aris Thorne, male AI research scientist with thoughtful expression, modern dark technical background with clean soft ambient green edge illumination."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0SVHH4f9BhxZ5FjClVnNd7xA56H9F8wMXvgssCd0oAygzMR5B5ZhaNpxH1I3t6L7_BYu6ITsY2kGg_KnjinGF1yddYl_vjTpNUmPqRThIgFzXPcWJT8Y_5WnqiCI9TiuUBZVdVdO0xQiFmtYHYl6onNkOcN3tp4tk1uraSQ_1wQWE_1kTbdm7r0_ocmOcds-RPtcvmDXegMlaBK2YiUEnjy2oy4cOPZBSG0DUXQ"
                    alt=""
                  />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-on-surface truncate">Dr. Aris Thorne</span>{" "}
                    <span className="font-label-sm text-label-sm text-tertiary px-2 py-0.5 rounded-full bg-tertiary-container/30">
                      Head of AI
                    </span>
                  </div>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Ex-Research Lead, DeepMind Syntax
                  </span>{" "}
                  <span className="font-label-sm text-label-sm text-secondary mt-0.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">psychology</span> Constrained natural
                    reasoning
                  </span>
                </div>
              </div>
              {/* Leader 4 */}
              <div className="rounded-xl bg-surface-container p-space-sm flex items-center gap-3 shadow-sm">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-surface-container-highest">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Creative headshot of Sophia Valenzuela, female Latina design leader with artistic minimal black attire, sleek dark navy environment with soft emerald and indigo diffuse glow."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9sBJPypclMbnjPlBQnlJHMR9GFkOjRdtpyKWfTZ6ENFqtqE3P6LKa7yMI8cPHrfYrneMaKbkswfZzBUF-z29aKq6SJ0e3uesnoTuNb7DSy3Jp9CpGYo2xJ9YuQcnKrFhS4ZSy7zFTPgn7cR-8vIA2AMJrIJy-V5PuWw2Vd-T8GOssXVrxqy6p758KXmt1FU3Ar_2jYEeAuvQy9rYbEQR2TWYsdzm3WnLfZGxJ2w"
                    alt=""
                  />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-on-surface truncate">Sophia Valenzuela</span>{" "}
                    <span className="font-label-sm text-label-sm text-primary-fixed px-2 py-0.5 rounded-full bg-primary-container/20">
                      Design
                    </span>
                  </div>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Ex-Principal UX Designer, Linear
                  </span>{" "}
                  <span className="font-label-sm text-label-sm text-primary-fixed mt-0.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">arrow_back_ios_new</span> Tactile calm
                    interfaces
                  </span>
                </div>
              </div>
            </div>
            {/* Security & Backing Credentials */}
            <div className="rounded-xl bg-surface-container-low p-space-md mt-space-xs flex flex-col gap-space-xs shadow-inner">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Independent Security Verification
              </span>{" "}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[24px]">verified</span>{" "}
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-[13px] text-on-surface">SOC 2 Type II</span>{" "}
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Certified Annually</span>
                  </div>
                </div>
                <div className="h-6 w-px bg-surface-container-highest" />
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[24px]">encrypted</span>{" "}
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-[13px] text-on-surface">AES-256 GCM</span>{" "}
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Client-Key Enclave</span>
                  </div>
                </div>
                <div className="h-6 w-px bg-surface-container-highest" />
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-[24px]">stars</span>{" "}
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-[13px] text-on-surface">$16M Seed</span>{" "}
                    <span className="font-label-sm text-label-sm text-on-surface-variant">{"Benchmark & Index"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Open Roles / Careers Preview */}
          <div className="rounded-xl bg-surface-container p-space-md shadow-md flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  We're Growing
                </span>{" "}
                <h2 className="font-title-lg text-title-lg text-on-surface">
                  {"Open Roles in San Francisco & Remote"}
                </h2>
              </div>{" "}
              <span className="w-8 h-8 rounded-full bg-secondary-container/40 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[18px]">group_add</span>
              </span>
            </div>
            <div className="flex flex-col gap-space-xs mt-1">
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer">
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-[14px] text-on-surface">
                    Staff Enclave Engineer
                  </span>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Rust • Nitro Enclaves • Remote / SF
                  </span>
                </div>{" "}
                <span className="material-symbols-outlined text-on-surface-variant text-[20px]">chevron_right</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer">
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-[14px] text-on-surface">
                    Senior AI Eval Engineer
                  </span>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Deterministic Benchmarking • SF
                  </span>
                </div>{" "}
                <span className="material-symbols-outlined text-on-surface-variant text-[20px]">chevron_right</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer">
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-[14px] text-on-surface">
                    Product Designer (Systems)
                  </span>{" "}
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Mobile-first • Micro-haptics • Remote
                  </span>
                </div>{" "}
                <span className="material-symbols-outlined text-on-surface-variant text-[20px]">chevron_right</span>
              </div>
            </div>{" "}
            <button
              className="w-full py-2.5 px-4 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-title-md text-[14px] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              id="viewRolesBtn"
              onClick={() => {
                setRolesState("opening");
                setTimeout(() => setRolesState("loaded"), 600);
              }}
            >
              {rolesState === "idle" && (
                <>
                  <span>View All 8 Roles</span>{" "}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </>
              )}
              {rolesState === "opening" && (
                <>
                  <span>Opening Career Portal...</span>
                  <span className="material-symbols-outlined text-[16px] animate-spin">refresh</span>
                </>
              )}
              {rolesState === "loaded" && (
                <>
                  <span>All 8 Roles Loaded</span>
                  <span className="material-symbols-outlined text-[16px]">done</span>
                </>
              )}
            </button>
          </div>
          {/* Interactive Culture Spark: Founder Audio Snippet */}
          <div className="rounded-xl bg-surface-container-low p-space-md shadow-sm flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wide flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">graphic_eq</span> 60-Second Audio Note
              </span>{" "}
              <span className="font-label-sm text-label-sm text-on-surface-variant">Elena on Independence</span>
            </div>
            <div className="flex items-center gap-3 bg-surface-container p-2.5 rounded-lg">
              <button
                aria-label="Play snippet"
                className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-md"
                id="audioToggle"
                onClick={() => setAudio((a) => ({ ...a, playing: !a.playing, ended: false }))}
              >
                <span className="material-symbols-outlined text-[20px]" id="audioIcon">
                  {audioIcon}
                </span>
              </button>{" "}
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="font-label-sm text-label-sm">"Why we will never take bank affiliate cuts"</span>{" "}
                  <span className="font-label-sm text-label-sm font-mono text-primary" id="audioTimer">
                    {audio.sec === 17 && !audio.playing && !audio.ended
                      ? "0:48"
                      : `0:${remaining < 10 ? "0" : ""}${remaining}`}
                  </span>
                </div>
                {/* Progress bar simulation */}
                <div className="w-full h-1.5 rounded-full bg-surface-container-highest mt-1.5 overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    id="audioProgress"
                    style={{
                      width:
                        audio.sec === 17 && !audio.playing && !audio.ended
                          ? "28%"
                          : `${(audio.sec / TOTAL_SEC) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* High-Impact Mobile CTA Card */}
          <div className="relative rounded-xl bg-gradient-to-b from-surface-container-high to-surface-container p-space-md shadow-2xl flex flex-col gap-space-sm overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-primary/15 blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-[22px]">rocket_launch</span>
              </div>{" "}
              <span className="font-label-md text-label-md text-primary tracking-wide uppercase">
                Financial Autopilot
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
                Ready to Put Your Money on Autopilot?
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Experience sovereign visibility with zero manual inputs. Set up takes less than 3 minutes with
                end-to-end encrypted account linking.
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <button className="w-full py-3.5 px-4 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98]">
                <span>Start 14-Day Free Trial</span>{" "}
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>{" "}
              <div className="flex items-center justify-center gap-3 text-on-surface-variant font-label-sm text-label-sm mt-0.5">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span> No credit
                  card upfront
                </span>{" "}
                <span>•</span>{" "}
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span> Cancel in
                  1-tap
                </span>
              </div>
            </div>
          </div>
          {/* Regulatory Disclaimer Footer Area */}
          <div className="px-1 pt-space-xs pb-space-sm flex flex-col gap-2">
            <div className="flex items-start gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-outline mt-0.5 shrink-0">info</span>{" "}
              <p className="font-body-sm text-body-sm text-outline leading-tight">
                Penny AI Technologies Inc. is an intelligence layer and financial software company, not a chartered bank
                or registered investment advisor. Insights, projections, and automation scenarios are computational
                simulations provided for informational utility. Bank account aggregation is powered by regulated
                open-banking protocols with 256-bit isolation.
              </p>
            </div>
            <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
              <span>© 2025 Penny AI Inc.</span>{" "}
              <div className="flex gap-3">
                <a className="hover:text-on-surface" href="#">
                  Security Whitepaper
                </a>{" "}
                <span>•</span>{" "}
                <a className="hover:text-on-surface" href="#">
                  Privacy Policy
                </a>
              </div>
            </div>
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
            className="flex flex-col items-center justify-center w-14 h-12 text-on-surface-variant hover:text-on-surface transition-colors"
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
