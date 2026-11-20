"use client";

import { useState } from "react";
const pageStyles =
  "@layer base{html,body{width:100vw;margin:0;padding:0;background-color:#0e1321;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}\nbody {\n      min-height: max(884px, 100dvh);\n    }";

export default function GetStartedMobile() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const strength = passwordStrength(password);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <main className="flex flex-col relative w-full px-margin-mobile bg-surface min-h-screen">
        <div className="flex flex-col w-full pb-8">
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-secondary-container flex items-center justify-center shadow-lg">
                <span
                  className="material-symbols-outlined text-primary text-title-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
              </div>{" "}
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
                Penny
                <span className="text-primary font-headline-sm text-headline-sm">.ai</span>
              </span>
            </div>{" "}
            <a
              className="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors flex items-center space-x-1 py-1.5 px-3 rounded-full bg-surface-container-low hover:bg-surface-container"
              href="#signin"
            >
              <span>Sign In</span> <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          {/* Ambient Copilot Halo Graphic */}
          <div className="relative w-full overflow-hidden pt-2 pb-4">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-6 right-4 w-40 h-28 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none" />
            {/* Social Proof Badge */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center space-x-2 bg-surface-container-high/90 px-3.5 py-1.5 rounded-full shadow-sm backdrop-blur-md">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />{" "}
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>{" "}
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  48,000+ joined · <strong className="text-primary font-medium">$12.4M saved</strong>
                </span>
              </div>
            </div>
            {/* Value Proposition Header */}
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface text-center tracking-tight leading-snug">
              Make sense of your money in{" "}
              <span className="text-primary bg-primary/10 px-2 py-0.5 rounded-lg inline-block">under 5 mins</span>
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant text-center mt-2 max-w-xs mx-auto">
              Connect your cards, eliminate silent drains, and let neural intelligence steer your cash flow.
            </p>
            {/* Micro Benefit Pills Carousel / Grid */}
            <div className="grid grid-cols-3 gap-2 mt-5">
              <div className="bg-surface-container-low p-2.5 rounded-xl flex flex-col items-center text-center shadow-sm hover:scale-[1.02] transition-transform duration-300">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-1.5">
                  <span className="material-symbols-outlined text-base">sync</span>
                </div>{" "}
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">Instant Sync</span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant text-[10px] mt-0.5">
                  11,000+ banks
                </span>
              </div>
              <div className="bg-surface-container-low p-2.5 rounded-xl flex flex-col items-center text-center shadow-sm hover:scale-[1.02] transition-transform duration-300">
                <div className="w-7 h-7 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary mb-1.5">
                  <span className="material-symbols-outlined text-base">psychology</span>
                </div>{" "}
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">Neural Categorizer</span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant text-[10px] mt-0.5">
                  85%+ precision
                </span>
              </div>
              <div className="bg-surface-container-low p-2.5 rounded-xl flex flex-col items-center text-center shadow-sm hover:scale-[1.02] transition-transform duration-300">
                <div className="w-7 h-7 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary mb-1.5">
                  <span className="material-symbols-outlined text-base">lock_open</span>
                </div>{" "}
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">No Contract</span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant text-[10px] mt-0.5">
                  14-day free trial
                </span>
              </div>
            </div>
          </div>
          {/* Onboarding Form Card (Floor 1) */}
          <div className="mt-4 bg-surface-container rounded-2xl p-5 shadow-2xl relative overflow-hidden">
            {/* Top Step Bar & Sparkle Indicator */}
            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">tune</span> Step 1 of 2
                </span>{" "}
                <span className="font-label-sm text-label-sm text-on-surface-variant">Profile Setup</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-6 h-1.5 rounded-full bg-primary" />
                <div className="w-3 h-1.5 rounded-full bg-surface-container-highest" />
              </div>
            </div>
            <div className="mt-2">
              <h2 className="font-title-lg text-title-lg text-on-surface">Create your account</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Unlock your autonomous financial copilot in seconds.
              </p>
            </div>
            {/* Form Section */}
            <form
              className="mt-5 space-y-4"
              id="onboardingForm"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitting(true);
              }}
            >
              {/* Full Name */}
              <div className="flex flex-col space-y-1.5">
                <label
                  className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                  htmlFor="fullName"
                >
                  <span>Full Name</span> <span className="text-outline font-label-sm text-label-sm">Required</span>
                </label>{" "}
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-outline text-lg pointer-events-none">
                    person
                  </span>{" "}
                  <input
                    className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-low transition-all placeholder:text-outline"
                    id="fullName"
                    placeholder="Alexandra Vance"
                    required
                    type="text"
                  />
                </div>
              </div>
              {/* Email Address */}
              <div className="flex flex-col space-y-1.5">
                <label
                  className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                  htmlFor="email"
                >
                  <span>Email Address</span>{" "}
                  <span className="text-outline font-label-sm text-label-sm">Work or personal</span>
                </label>{" "}
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-outline text-lg pointer-events-none">
                    mail
                  </span>{" "}
                  <input
                    className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-low transition-all placeholder:text-outline"
                    id="email"
                    placeholder="alexandra@vance.design"
                    required
                    type="email"
                  />
                </div>
              </div>
              {/* Password & Real-Time Strength Meter */}
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="password">
                    Choose Password
                  </label>{" "}
                  <span className={strength.textClassName} id="strengthText">
                    {strength.text}
                  </span>
                </div>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-outline text-lg pointer-events-none">
                    lock
                  </span>{" "}
                  <input
                    className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md pl-10 pr-10 py-3 rounded-lg focus:outline-none focus:bg-surface-container-low transition-all placeholder:text-outline"
                    id="password"
                    placeholder="••••••••••••"
                    required
                    type={showPassword ? "text" : "password"}
                    onInput={(e) => setPassword(e.currentTarget.value)}
                  />{" "}
                  <button
                    className="absolute right-3 text-outline hover:text-on-surface focus:outline-none"
                    id="togglePassBtn"
                    onClick={() => setShowPassword((v) => !v)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-lg" id="togglePassIcon">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
                {/* Password Strength Segments */}
                <div className="grid grid-cols-4 gap-1.5 pt-1" id="strengthBar">
                  <div className={strength.segments[0]} id="seg-1" />
                  <div className={strength.segments[1]} id="seg-2" />
                  <div className={strength.segments[2]} id="seg-3" />
                  <div className={strength.segments[3]} id="seg-4" />
                </div>
              </div>
              {/* Primary Financial Goal Selector */}
              <div className="flex flex-col space-y-1.5">
                <label
                  className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                  htmlFor="primaryGoal"
                >
                  <span>Primary Financial Goal</span>{" "}
                  <span className="font-label-sm text-label-sm text-secondary">Customizes AI</span>
                </label>{" "}
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-primary text-lg pointer-events-none">
                    flag
                  </span>{" "}
                  <select
                    className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md pl-10 pr-8 py-3 rounded-lg focus:outline-none focus:bg-surface-container-low appearance-none transition-all cursor-pointer"
                    id="primaryGoal"
                    defaultValue="kill_subscriptions"
                  >
                    <option /* selected */ value="kill_subscriptions">
                      {"Kill Zombie Subscriptions & Build Emergency Fund"}
                    </option>
                    <option value="buy_home">Save for a Home / Major Milestone</option>
                    <option value="freelance_smoothing">Smooth Irregular Freelance Cash Flow</option>
                    <option value="debt_paydown">High-Velocity Debt Snowball</option>
                    <option value="general_clarity">Autonomous Daily Cash Flow Visibility</option>
                  </select>{" "}
                  <span className="material-symbols-outlined absolute right-3 text-outline text-base pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
              {/* Realtime Copilot Adaptive Prompt Preview */}
              <div className="p-3 rounded-xl bg-surface-container-low flex items-start space-x-2.5">
                <div className="w-6 h-6 rounded-md bg-secondary/10 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-sm">smart_toy</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  <strong className="text-on-surface font-medium">Penny’s First Playbook:</strong> Scanning recurring
                  merchants across 90 days to highlight instant cancellation opportunities upon sync.
                </p>
              </div>
              {/* Terms & Disclaimer Checkbox */}
              <div className="flex items-start space-x-3 pt-1">
                <label className="relative flex items-center justify-center shrink-0 cursor-pointer pt-0.5">
                  <input className="peer sr-only" id="termsCheck" required type="checkbox" />{" "}
                  <div className="w-5 h-5 rounded bg-surface-container-lowest peer-checked:bg-primary-container transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary font-bold text-sm hidden peer-checked:block">
                      check
                    </span>
                  </div>
                </label>{" "}
                <div className="flex flex-col">
                  <label
                    className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none"
                    htmlFor="termsCheck"
                  >
                    I accept the{" "}
                    <a className="text-on-surface font-semibold underline underline-offset-2" href="#terms">
                      Terms of Service
                    </a>{" "}
                    {"&"}{" "}
                    <a className="text-on-surface font-semibold underline underline-offset-2" href="#privacy">
                      Privacy Policy
                    </a>
                    .
                  </label>{" "}
                  <span className="font-label-sm text-label-sm text-outline mt-1 leading-snug">
                    Penny provides informational synthesis and autonomous telemetry, not fiduciary legal or licensed
                    investment advice.
                  </span>
                </div>
              </div>
              {/* Primary Action CTA Button */}
              <div className="pt-2">
                <button
                  className="relative w-full group overflow-hidden rounded-xl bg-primary-container text-on-primary py-3.5 px-6 font-title-md text-title-md shadow-lg shadow-primary-container/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
                  disabled={submitting}
                  id="submitBtn"
                  type="submit"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-on-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>{" "}
                      <span>Creating your vault...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-lg">bolt</span>{" "}
                      <span>{"Create Account & Get Started Free"}</span>{" "}
                      <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>
            {/* Social Proof Mini Carousel */}
            <div className="mt-5 pt-4 bg-surface-container-low/50 -mx-5 -mb-5 px-5 py-3.5 flex items-center justify-between">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-label-sm text-label-sm">
                  JD
                </div>
                <div className="w-7 h-7 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-label-sm text-label-sm">
                  MK
                </div>
                <div className="w-7 h-7 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary font-label-sm text-label-sm">
                  SL
                </div>
              </div>
              <div className="flex items-center space-x-1 text-tertiary">
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
                </span>{" "}
                <span className="font-label-sm text-label-sm text-on-surface ml-1 font-semibold">4.9/5 Rating</span>
              </div>
            </div>
          </div>
          {/* Security Protocol & Trust Badges Footer */}
          <div className="mt-6 flex flex-col items-center space-y-3 px-2 text-center">
            <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 font-label-sm text-label-sm text-outline">
              <div className="flex items-center space-x-1">
                <span className="material-symbols-outlined text-sm text-primary">verified_user</span>{" "}
                <span>OpenBanking OAuth API</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="material-symbols-outlined text-sm text-primary">shield</span>{" "}
                <span>AES-256 Bit Encryption</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="material-symbols-outlined text-sm text-primary">credit_card_off</span>{" "}
                <span>No Card Required</span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-outline max-w-xs leading-normal">
              Your banking credentials are never visible or stored on Penny servers. Zero write-access permissions.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

const SEG_BASE = "h-1 rounded-full bg-surface-container-highest transition-colors duration-300";

function passwordStrength(val: string): { segments: string[]; text: string; textClassName: string } {
  const segments = [SEG_BASE, SEG_BASE, SEG_BASE, SEG_BASE];
  if (val.length === 0) {
    return { segments, text: "Min. 8 characters", textClassName: "font-label-sm text-label-sm text-outline" };
  }
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val) && /[a-z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  if (score === 1) {
    segments[0] = "h-1 rounded-full bg-error transition-colors duration-300";
    return { segments, text: "Weak", textClassName: "font-label-sm text-label-sm text-error" };
  }
  if (score === 2) {
    segments.fill("h-1 rounded-full bg-tertiary transition-colors duration-300", 0, 2);
    return { segments, text: "Fair", textClassName: "font-label-sm text-label-sm text-tertiary" };
  }
  if (score === 3) {
    segments.fill("h-1 rounded-full bg-primary transition-colors duration-300", 0, 3);
    return { segments, text: "Good", textClassName: "font-label-sm text-label-sm text-primary" };
  }
  if (score >= 4) {
    segments.fill("h-1 rounded-full bg-primary-container transition-colors duration-300");
    return { segments, text: "Unbreakable", textClassName: "font-label-sm text-label-sm text-primary font-bold" };
  }
  return { segments, text: "Min. 8 characters", textClassName: "font-label-sm text-label-sm text-outline" };
}
