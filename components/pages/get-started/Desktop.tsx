"use client";

import { useState } from "react";

const pageStyles =
  "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";

export default function GetStartedDesktop() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [registration, setRegistration] = useState<"idle" | "loading" | "done">("idle");
  const strength = passwordStrength(password);
  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegistration("loading");
    setTimeout(() => setRegistration("done"), 1000);
  };
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <main className="w-full bg-surface">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden px-4 py-8 md:py-16 flex items-center justify-center">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
            <div className="w-full max-w-6xl mx-auto relative z-10">
              <div className="flex items-center justify-between mb-8 md:mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shadow-lg relative overflow-hidden">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 48 48">
                      <path
                        d="M12 40V8H24C28.4183 8 32 11.5817 32 16C32 20.4183 28.4183 24 24 24H12"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4.5"
                      />
                      <path
                        d="M10 26C15 25 24 22 34 14M34 14V22M34 14H26"
                        stroke="#4edea3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      />
                      <circle cx="38" cy="10" fill="#6ffbbe" r="3" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">
                      Penny AI
                    </span>{" "}
                    <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
                      Finance Assistant
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-body-sm text-body-sm text-on-surface-variant hidden sm:inline">
                    Already registered?
                  </span>{" "}
                  <button
                    className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container"
                    type="button"
                  >
                    <span>Sign In</span> <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 rounded-2xl bg-surface-container-low shadow-xl relative overflow-hidden">
                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 w-fit">
                      <span
                        className="material-symbols-outlined text-secondary text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        auto_awesome
                      </span>{" "}
                      <span className="font-label-sm text-label-sm text-secondary-fixed">
                        AI-First Wealth Intelligence
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h1 className="font-headline-lg text-headline-lg text-on-surface">
                        Start making sense of your money in{" "}
                        <span className="text-primary font-headline-lg">under 5 minutes</span>
                      </h1>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Experience precision automated tracking, real-time proactive savings recommendations, and
                        institutional privacy.
                      </p>
                    </div>
                    <div className="space-y-4 pt-2">
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span
                            className="material-symbols-outlined text-primary text-lg"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            sync_saved_locally
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="font-title-md text-title-md text-on-surface">Effortless Account Sync</span>{" "}
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Connect your accounts securely or start with a sample CSV to explore immediately.
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
                        <div className="w-9 h-9 rounded-lg bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                          <span
                            className="material-symbols-outlined text-secondary-fixed text-lg"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            psychology
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="font-title-md text-title-md text-on-surface">Neural Categorization</span>{" "}
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Instant zero-effort categorization with 85%+ precision on day one.
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
                        <div className="w-9 h-9 rounded-lg bg-tertiary/15 flex items-center justify-center shrink-0 mt-0.5">
                          <span
                            className="material-symbols-outlined text-tertiary-fixed text-lg"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            verified_user
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="font-title-md text-title-md text-on-surface">No Commitments</span>{" "}
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            14-day free trial on Plus features — cancel anytime with one simple click.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-lowest flex items-center gap-3">
                      <div className="flex -space-x-2 shrink-0">
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          data-alt="Portrait of a young professional smiling against a neutral ambient studio background with soft emerald studio edge rim lighting."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAm9hL1yWObgTBQUiULbu3FHzJoKMrWTXlVAUaYp9XPhJPo3qoTluUY9K7Ot_aBVGqyxYy1ZKb4rzcMdo-BfMoC9dUzAqIPpbJQT5AYdLs8IVKkm22vmYdOYknIXrQB1MbjxpP_LqBYqMzIOX8fEYrB4-vDYXGwj9pWU47Wquj5fRtf8oCQ8cS5k4Se5wTX9jTsCZyxejwp9GbNGFotFjtx2Pj6eCQrWqy9om46A"
                          alt=""
                        />{" "}
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          data-alt="Close up face of a tech founder with glasses in a modern dark office environment with soft indigo screen glow."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUq22vL6OU0sAO8rMNq2H0OOwRlsCpOpKAePRF53lX7mqQ0aWn6GmqrPUHnzvLXsprWtlNetesS3WbJPWSiomPz2eQyBJb70SeVe9HJ7FeU5FlzTZnr1akD7L8JswR8UOJ_dW4GwsXvCcT8HeUT7ZnJqV0m29cEWoIv4NbzyAxosn0yw9QG668VbNvLfYahMHc-ChuW1rw8RB2bCIE0CLi05Nn1ytqMWkSuLtxLw"
                          alt=""
                        />{" "}
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          data-alt="Portrait of a creative designer outdoors in natural soft daylight with relaxed friendly expression."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiyIC3oHKuqzJ8tPtoTWqWQSqW1q-NG5NysmtedkesVMKg2Rrxknt3PAXPLVMmQwT6yf7GQOzhuxer5E2ps6IIaWYJs166BFPKtuaNR95_ikq853Y6l9PQVYBYVVb_pFwIPHXUq-gY-4j8Hp3wR-J7GKhfZQa_Ij8wRInv8jOBqfr7aaoGkzq0oh_jdY5b9o3x6qzxKRKMOr8aHqd5X5skEMWFFlucjosL5v36tw"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface">Joined by 48,000+ planners</span>{" "}
                        <span className="font-label-sm text-label-sm text-primary">
                          Over $12.4M saved in subscription leakages
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">lock</span> AES-256 Bit
                      Encryption
                    </span>{" "}
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">credit_card_off</span> No Card
                      Required
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-12 rounded-2xl bg-surface-container shadow-2xl relative">
                  <div className="mb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-headline-md text-headline-md text-on-surface">Create your account</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                          Unlock your autonomous financial copilot in seconds.
                        </p>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant">
                        Step 1 of 2
                      </div>
                    </div>
                  </div>
                  <form className="space-y-5" id="onboarding-form" onSubmit={handleRegistration}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block font-label-md text-label-md text-on-surface" htmlFor="fullName">
                          Full Name
                        </label>{" "}
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant">
                            <span className="material-symbols-outlined text-lg">person</span>
                          </div>{" "}
                          <input
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container-high transition-all"
                            id="fullName"
                            placeholder="Elena Rostova"
                            required
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="block font-label-md text-label-md text-on-surface" htmlFor="email">
                          Email Address
                        </label>{" "}
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant">
                            <span className="material-symbols-outlined text-lg">mail</span>
                          </div>{" "}
                          <input
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container-high transition-all"
                            id="email"
                            placeholder="elena@domain.com"
                            required
                            type="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="block font-label-md text-label-md text-on-surface" htmlFor="password">
                          Choose Password
                        </label>{" "}
                        <span className={strength.labelClassName} id="strength-label">
                          {strength.label}
                        </span>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant">
                          <span className="material-symbols-outlined text-lg">lock</span>
                        </div>{" "}
                        <input
                          className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container-high transition-all"
                          id="password"
                          onInput={(e) => setPassword(e.currentTarget.value)}
                          placeholder="••••••••••••"
                          required
                          type="password"
                        />{" "}
                        <button
                          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-on-surface-variant hover:text-on-surface"
                          onClick={() => setShowPassword((v) => !v)}
                          type="button"
                        >
                          <span className="material-symbols-outlined text-lg" id="eye-icon">
                            {showPassword ? "visibility_off" : "visibility"}
                          </span>
                        </button>
                      </div>
                      <div className="pt-1.5 flex gap-1.5 h-1.5 w-full">
                        <div className={strength.bars[0]} id="bar-1" />
                        <div className={strength.bars[1]} id="bar-2" />
                        <div className={strength.bars[2]} id="bar-3" />
                        <div className={strength.bars[3]} id="bar-4" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="block font-label-md text-label-md text-on-surface" htmlFor="financialGoal">
                        Primary Financial Goal
                      </label>{" "}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant">
                          <span className="material-symbols-outlined text-lg">flag</span>
                        </div>{" "}
                        <select
                          className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:bg-surface-container-high transition-all"
                          id="financialGoal"
                          required
                          defaultValue=""
                        >
                          <option className="bg-surface-container-lowest" disabled /* selected */ value="">
                            Select your priority objective
                          </option>
                          <option className="bg-surface-container-lowest" value="subscriptions">
                            Cut unnecessary subscriptions
                          </option>
                          <option className="bg-surface-container-lowest" value="purchase">
                            Save for a major purchase/trip
                          </option>
                          <option className="bg-surface-container-lowest" value="overspending">
                            Stop overspending on dining/shopping
                          </option>
                          <option className="bg-surface-container-lowest" value="irregular">
                            Smooth irregular income
                          </option>
                        </select>{" "}
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-on-surface-variant">
                          <span className="material-symbols-outlined text-lg">expand_more</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          className="mt-1 w-4 h-4 rounded bg-surface-container-lowest text-primary accent-primary focus:ring-0 transition-colors"
                          id="termsCheck"
                          required
                          type="checkbox"
                        />{" "}
                        <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed select-none">
                          I agree to the{" "}
                          <a className="text-primary hover:underline" href="#">
                            Terms of Service
                          </a>
                          ,{" "}
                          <a className="text-primary hover:underline" href="#">
                            Privacy Policy
                          </a>
                          , and acknowledge Penny provides informational insights, not licensed financial advice.
                        </span>
                      </label>
                    </div>
                    <div className="pt-3">
                      <button
                        className={`w-full py-3.5 px-6 rounded-xl bg-primary text-on-primary font-title-md text-title-md flex items-center justify-center gap-2 hover:bg-primary-fixed transition-all duration-200 shadow-lg active:scale-[0.99]${registration === "loading" ? " opacity-75" : ""}`}
                        disabled={registration !== "idle"}
                        id="submit-btn"
                        type="submit"
                      >
                        {registration === "idle" && (
                          <>
                            <span>{"Create Account & Get Started Free"}</span>{" "}
                            <span className="material-symbols-outlined text-xl">arrow_forward</span>
                          </>
                        )}
                        {registration === "loading" && (
                          <>
                            <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>{" "}
                            Initializing Penny AI...
                          </>
                        )}
                        {registration === "done" && "Account Created!"}
                      </button>
                    </div>
                    <div
                      className={
                        registration === "done"
                          ? "p-3 rounded-lg bg-primary/10 text-primary font-body-sm text-body-sm text-center"
                          : "hidden p-3 rounded-lg bg-primary/10 text-primary font-body-sm text-body-sm text-center"
                      }
                      id="status-toast"
                    >
                      Account ready! Redirecting to secure data integration...
                    </div>
                  </form>
                  <div className="mt-6 pt-5 flex flex-wrap items-center justify-center gap-4 text-center">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Encrypted bank-grade sync powered by OpenBanking API
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Already have an account?{" "}
                  <a
                    className="font-label-md text-label-md text-primary hover:text-primary-fixed underline ml-1"
                    href="#"
                  >
                    Sign In to Dashboard
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const BAR_BASE = "h-full w-1/4 rounded-full bg-surface-container-highest transition-colors duration-300";

function passwordStrength(val: string): { bars: string[]; label: string; labelClassName: string } {
  const bars = [BAR_BASE, BAR_BASE, BAR_BASE, BAR_BASE];
  if (!val) {
    return {
      bars,
      label: "Strength: Minimum 8 chars",
      labelClassName: "font-label-sm text-label-sm text-on-surface-variant",
    };
  }
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  if (score === 1) {
    bars[0] = "h-full w-1/4 rounded-full bg-error transition-colors duration-300";
    return { bars, label: "Weak: Add numbers or symbols", labelClassName: "font-label-sm text-label-sm text-error" };
  }
  if (score === 2) {
    bars.fill("h-full w-1/4 rounded-full bg-tertiary transition-colors duration-300", 0, 2);
    return {
      bars,
      label: "Fair: Add uppercase & special chars",
      labelClassName: "font-label-sm text-label-sm text-tertiary",
    };
  }
  if (score === 3) {
    bars.fill("h-full w-1/4 rounded-full bg-secondary-fixed transition-colors duration-300", 0, 3);
    return { bars, label: "Good: Very secure", labelClassName: "font-label-sm text-label-sm text-secondary-fixed" };
  }
  if (score >= 4) {
    bars.fill("h-full w-1/4 rounded-full bg-primary transition-colors duration-300");
    return { bars, label: "Excellent: Ironclad password", labelClassName: "font-label-sm text-label-sm text-primary" };
  }
  return {
    bars,
    label: "Strength: Minimum 8 chars",
    labelClassName: "font-label-sm text-label-sm text-on-surface-variant",
  };
}
