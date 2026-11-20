"use client";

import { useState } from "react";
const pageStyles =
  "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";

export default function SignInDesktop() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <main className="w-full bg-surface">
        <div className="flex flex-col w-full items-center justify-center py-8 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full bg-secondary-container/20 blur-[100px] pointer-events-none" />
          <div className="w-full max-w-[460px] relative z-10 flex flex-col items-center">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative mb-4 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg scale-110" />
                <div className="relative w-16 h-16 rounded-2xl bg-surface-container-high shadow-xl flex items-center justify-center overflow-hidden">
                  <img
                    alt="Penny AI Logo"
                    className="w-12 h-12 object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQwjM5xz9kaxGAnqIdNZBMa6ppwWR-cvWoOxRajKi_DqfS0QZyzzzAh3MVkM89MSr2zaVTTYgmzTk2r_q7LMQJNSakSSRwmzTVKFxoKPaMhYqqOy3h--MNlv7-ywLAGgNuRHZpriO1YpA36SzMsTqG7O9bbhWRIKawW1nhxoOGsyKSeFSYjBOTRnw4wQo6R6rxvWbKGN7mFfH2HsjmuMMIqLNqvSSuTbeXpI-Yag"
                  />
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary mb-3">
                <span className="material-symbols-outlined text-[14px]">auto_awesome</span>{" "}
                <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase">
                  AI Financial Copilot
                </span>
              </div>
              <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-2">
                Welcome back to Penny
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                Enter your credentials or use biometric login to access your finances
              </p>
            </div>
            <div className="w-full rounded-2xl bg-surface-container shadow-2xl p-6 sm:p-8 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  className="group flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface transition-all duration-200"
                  type="button"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                    <path
                      d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.8 5 12 5z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.1-2 .4-2.7L1.6 6.4C.6 8.3 0 10.5 0 12s.6 3.7 1.6 5.6l3.7-2.9z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.2 0-5.8-2.3-6.7-5.3L1.6 16C3.5 19.8 7.4 23 12 23z"
                      fill="#34A853"
                    />
                  </svg>{" "}
                  <span className="font-title-md text-body-md font-medium">Google</span>
                </button>{" "}
                <button
                  className="group flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface transition-all duration-200"
                  type="button"
                >
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.71-.93 2.73 1 .08 2.01-.48 2.63-1.23z" />
                  </svg>{" "}
                  <span className="font-title-md text-body-md font-medium">Apple</span>
                </button>
              </div>
              <div className="relative flex items-center justify-center mb-6">
                <div className="w-full h-px bg-surface-variant" />{" "}
                <span className="absolute px-3 bg-surface-container font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  or continue with email
                </span>
              </div>
              <form className="space-y-4" id="auth-form" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    className="block font-label-md text-label-md text-on-surface-variant mb-1.5 font-medium"
                    htmlFor="email"
                  >
                    Email address
                  </label>{" "}
                  <div className="relative rounded-xl bg-surface-container-low focus-within:ring-2 focus-within:ring-primary/40 transition-all duration-150">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline">
                      mail
                    </span>{" "}
                    <input
                      className="w-full bg-transparent pl-10 pr-4 py-2.5 text-on-surface font-body-md text-body-md placeholder:text-outline/60 focus:outline-none"
                      id="email"
                      name="email"
                      placeholder="name@company.com"
                      required
                      type="email"
                      defaultValue="alexander.vance@investor.io"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      className="block font-label-md text-label-md text-on-surface-variant font-medium"
                      htmlFor="password"
                    >
                      Password
                    </label>{" "}
                    <a
                      className="font-label-sm text-label-sm text-primary hover:text-primary-fixed transition-colors font-medium"
                      href="#"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative rounded-xl bg-surface-container-low focus-within:ring-2 focus-within:ring-primary/40 transition-all duration-150">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline">
                      lock
                    </span>{" "}
                    <input
                      className="w-full bg-transparent pl-10 pr-11 py-2.5 text-on-surface font-body-md text-body-md placeholder:text-outline/60 focus:outline-none"
                      id="password"
                      name="password"
                      placeholder="Enter your security token"
                      required
                      type={showPassword ? "text" : "password"}
                      defaultValue="••••••••••••••"
                    />{" "}
                    <button
                      aria-label="Toggle password visibility"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors p-1 flex items-center justify-center"
                      id="toggle-pwd"
                      onClick={() => setShowPassword((v) => !v)}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]" id="pwd-icon">
                        {showPassword ? "visibility" : "visibility_off"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input defaultChecked className="sr-only peer" id="remember-me" type="checkbox" />{" "}
                    <div className="w-4 h-4 rounded bg-surface-container-low peer-checked:bg-primary flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-surface-container-lowest text-[14px] font-bold opacity-0 peer-checked:opacity-100 transition-opacity">
                        check
                      </span>
                    </div>{" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Remember this device for 30 days
                    </span>
                  </label>
                </div>{" "}
                <button
                  className="w-full group mt-3 py-3 px-4 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all duration-200 active:scale-[0.99]"
                  type="submit"
                >
                  <span>Sign In to Dashboard</span>{" "}
                  <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </form>
              <div className="mt-5 p-3 rounded-xl bg-surface-container-low flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-secondary-container/40 text-on-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">fingerprint</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-label-md text-label-md text-on-surface font-semibold truncate">
                      Biometric quick prompt
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      Touch ID / Face ID available
                    </p>
                  </div>
                </div>{" "}
                <button
                  className="shrink-0 px-2.5 py-1 rounded-lg bg-surface-container-high hover:bg-surface-bright text-primary font-label-sm text-label-sm font-semibold transition-colors"
                  type="button"
                >
                  Use Passkey
                </button>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center gap-3 text-center">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Don't have an account?{" "}
                <a className="text-primary hover:text-primary-fixed font-semibold transition-colors" href="#">
                  Sign up free
                </a>
              </p>
              <div className="inline-flex items-center gap-1.5 text-outline">
                <span className="material-symbols-outlined text-[15px] text-primary">verified_user</span>{" "}
                <span className="font-label-sm text-label-sm tracking-wide">Bank-level 256-bit encrypted session</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
