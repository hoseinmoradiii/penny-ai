import type { Variant } from "./variant";

export const bodyClasses: Record<string, Record<Variant, string>> = {
  home: {
    desktop:
      "bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container",
    mobile: "bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen",
  },
  product: {
    desktop:
      "bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container",
    mobile: "bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen",
  },
  features: {
    desktop:
      "bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container",
    mobile: "bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen",
  },
  pricing: {
    desktop:
      "bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container",
    mobile: "bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen",
  },
  "security-and-trust": {
    desktop:
      "bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container",
    mobile: "bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen",
  },
  company: {
    desktop:
      "bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container",
    mobile: "bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen",
  },
  "sign-in": {
    desktop: "bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen",
    mobile: "bg-surface font-body-md text-body-md text-on-surface pt-safe pb-safe flex flex-col min-h-screen",
  },
  "get-started": {
    desktop: "bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen",
    mobile: "bg-surface font-body-md text-body-md text-on-surface pt-safe pb-safe flex flex-col min-h-screen",
  },
};
