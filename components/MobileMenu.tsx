"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const LINKS = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/product", label: "Product", icon: "auto_awesome" },
  { href: "/features", label: "Features", icon: "memory" },
  { href: "/pricing", label: "Pricing", icon: "payments" },
  { href: "/security-and-trust", label: "Security & Trust", icon: "shield" },
  { href: "/company", label: "Company", icon: "groups" },
];

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="absolute inset-0 bg-surface/80 backdrop-blur-xl" onClick={onClose} />
      <nav
        aria-label="Mobile navigation"
        className={`absolute top-0 left-0 h-full w-72 bg-surface-container-low shadow-[0_8px_32px_rgba(0,0,0,0.4)] pt-safe flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-16 px-margin-mobile flex items-center justify-between">
          <span className="font-title-md text-title-md text-on-surface">Menu</span>
          <button
            aria-label="Close Menu"
            className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface focus:outline-none"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-space-sm py-space-xs flex flex-col gap-1">
          {LINKS.map(({ href, label, icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-3 px-space-sm py-3 rounded-lg font-title-md text-title-md transition-colors ${
                  active ? "bg-surface-container text-primary" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{icon}</span>
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
        <div className="p-space-md flex flex-col gap-space-sm pb-safe">
          <Link
            href="/sign-in"
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-surface-container-high text-on-surface font-title-md text-title-md flex items-center justify-center gap-2"
          >
            Sign In
          </Link>
          <Link
            href="/get-started"
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-primary text-on-primary font-title-md text-title-md flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">bolt</span>
            <span>Get Started Free</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
