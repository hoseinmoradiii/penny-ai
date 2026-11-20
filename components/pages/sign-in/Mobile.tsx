"use client";

import { useRef, useState } from "react";
const pageStyles =
  "@layer base{html,body{width:100vw;margin:0;padding:0;background-color:#0e1321;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}\nbody {\n      min-height: max(884px, 100dvh);\n    }";

export default function SignInMobile() {
  const [showPassword, setShowPassword] = useState(false);
  const [biometricPressed, setBiometricPressed] = useState(false);
  const biometricTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const flashBiometric = () => {
    setBiometricPressed(true);
    clearTimeout(biometricTimer.current);
    biometricTimer.current = setTimeout(() => setBiometricPressed(false), 300);
  };
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <main className="flex flex-col relative w-full px-margin-mobile bg-surface min-h-screen">
        <div className="flex flex-col w-full pb-8 relative overflow-hidden select-none">
          {/* Subtle Ambient Glowing Orbs */}
          <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute top-80 -right-20 w-64 h-64 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
          {/* Brand & Hero Section */}
          <div className="flex flex-col items-center text-center mt-2 mb-6 relative z-10">
            {/* Penny AI Logo Halo */}
            <div className="relative flex items-center justify-center mb-4">
              <div
                className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-125 animate-ping opacity-30"
                style={{ animationDuration: "4s" }}
              />
              <div className="relative w-16 h-16 rounded-full bg-surface-container-high shadow-lg flex items-center justify-center shadow-primary/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-primary-fixed-dim flex items-center justify-center shadow-md">
                  <span
                    className="material-symbols-outlined text-on-primary text-[28px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    insights
                  </span>
                </div>
              </div>
            </div>
            {/* AI Copilot Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/25 text-on-secondary-container font-label-sm text-label-sm shadow-sm mb-3">
              <span
                className="material-symbols-outlined text-[14px] text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>{" "}
              <span>AI Financial Copilot</span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight mb-2">
              Welcome back to Penny
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs px-2">
              Enter your credentials or use biometric login to access your finances
            </p>
          </div>
          {/* Biometric Quick Access Card */}
          <div className="w-full mb-6 relative group">
            <div
              className={`w-full bg-surface-container rounded-xl p-4 shadow-md flex items-center justify-between transition-all duration-300 active:scale-[0.99] cursor-pointer${biometricPressed ? " bg-primary/20" : ""}`}
              id="biometric-login-btn"
              onClick={flashBiometric}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shadow-sm relative">
                  <span className="material-symbols-outlined text-[24px]">fingerprint</span>{" "}
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary animate-ping" />{" "}
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-title-md text-title-md text-on-surface">Face ID / Touch ID</span>{" "}
                    <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary font-label-sm text-label-sm">
                      Passkey
                    </span>
                  </div>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Instant one-tap biometric access
                  </span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant group-active:translate-x-0.5 transition-transform">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </div>
            </div>
          </div>
          {/* Social One-Tap Logins (Glassmorphism) */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-surface-container-low shadow-sm active:bg-surface-container-high transition-all text-on-surface font-title-md text-title-md text-[13px]"
              type="button"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                  fill="#EA4335"
                />
                <path
                  d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                  fill="#4285F4"
                />
                <path
                  d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.2s.7 5.5 1.9 7.9l3.7-2.9z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.9C3.7 20.6 7.5 23.5 12 23.5z"
                  fill="#34A853"
                />
              </svg>{" "}
              <span>Google</span>
            </button>{" "}
            <button
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-surface-container-low shadow-sm active:bg-surface-container-high transition-all text-on-surface font-title-md text-title-md text-[13px]"
              type="button"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.87.96-2.96-.93.04-2.06.62-2.72 1.4-.58.67-1.1 1.76-.96 2.82 1.04.08 2.1-.5 2.72-1.26z" />
              </svg>{" "}
              <span>Apple ID</span>
            </button>
          </div>
          {/* Divider */}
          <div className="relative flex items-center justify-center my-4">
            <div className="w-full h-px bg-surface-container-highest" />{" "}
            <span className="absolute px-3 bg-surface font-label-sm text-label-sm text-outline tracking-wider uppercase">
              Or continue with email
            </span>
          </div>
          {/* Standard Form */}
          <form className="flex flex-col gap-4 mt-2" id="signin-form" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label
                className="font-label-md text-label-md text-on-surface-variant flex items-center justify-between"
                htmlFor="email"
              >
                <span>Email address</span>{" "}
                <span className="text-primary font-body-sm text-body-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified_user
                  </span>{" "}
                  Linked
                </span>
              </label>{" "}
              <div className="relative flex items-center rounded-lg bg-surface-container-lowest transition-all shadow-inner focus-within:shadow-[0_0_0_2px] focus-within:shadow-primary/30">
                <span className="material-symbols-outlined text-outline text-[18px] ml-3.5 absolute pointer-events-none">
                  mail
                </span>{" "}
                <input
                  autoComplete="username"
                  className="w-full bg-transparent py-3 pl-11 pr-4 text-on-surface font-body-md text-body-md rounded-lg focus:outline-none placeholder-outline"
                  id="email"
                  name="email"
                  placeholder="your.name@example.com"
                  required
                  type="email"
                  defaultValue="alexander.vance@investor.io"
                />
              </div>
            </div>
            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">
                  Password
                </label>{" "}
                <button
                  className="font-label-md text-label-md text-primary active:opacity-75 transition-opacity"
                  type="button"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative flex items-center rounded-lg bg-surface-container-lowest transition-all shadow-inner focus-within:shadow-[0_0_0_2px] focus-within:shadow-primary/30">
                <span className="material-symbols-outlined text-outline text-[18px] ml-3.5 absolute pointer-events-none">
                  lock
                </span>{" "}
                <input
                  autoComplete="current-password"
                  className="w-full bg-transparent py-3 pl-11 pr-11 text-on-surface font-body-md text-body-md rounded-lg focus:outline-none placeholder-outline tracking-wider"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  type={showPassword ? "text" : "password"}
                  defaultValue="••••••••••••"
                />{" "}
                <button
                  aria-label="Toggle password visibility"
                  className="absolute right-3 text-outline hover:text-on-surface transition-colors flex items-center justify-center p-1"
                  id="toggle-pwd-btn"
                  onClick={() => setShowPassword((v) => !v)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]" id="eye-icon">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>
            {/* Remember Device Checkbox */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <div className="relative flex items-center">
                  <input defaultChecked className="peer sr-only" id="remember-me" type="checkbox" />{" "}
                  <div className="w-5 h-5 rounded bg-surface-container-high peer-checked:bg-primary transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary text-[16px] scale-0 peer-checked:scale-100 transition-transform font-bold">
                      check
                    </span>
                  </div>
                </div>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant group-active:text-on-surface transition-colors">
                  Remember this device for 30 days
                </span>
              </label>
            </div>
            {/* Primary Sign In CTA */}
            <div className="pt-2">
              <button
                className="w-full relative group overflow-hidden py-3.5 px-4 rounded-xl bg-primary text-on-primary font-title-md text-title-md flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-[0.98] transition-all"
                id="submit-btn"
                type="submit"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Sign In to Dashboard</span>{" "}
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </span>{" "}
                <div className="absolute inset-0 bg-primary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </form>
          {/* Security Guarantee Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 py-2 px-3 rounded-full bg-surface-container-low/60 mx-auto text-outline font-label-sm text-label-sm">
            <span
              className="material-symbols-outlined text-[14px] text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              lock
            </span>{" "}
            <span>Bank-level 256-bit encrypted session</span>
          </div>
          {/* Sign Up Prompt Footer */}
          <div className="mt-6 text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Don't have an account?{" "}
              <button className="text-primary font-title-md text-title-md ml-1 active:underline" type="button">
                Sign up free
              </button>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
