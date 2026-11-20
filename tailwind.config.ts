import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
  "extend": {
    "colors": {
      "primary-container": "#10b981",
      "on-background": "#dee2f6",
      "on-surface-variant": "#bbcabf",
      "surface-bright": "#343948",
      "surface-tint": "#4edea3",
      "surface-container-low": "#161b2a",
      "surface-container-high": "#252a39",
      "on-secondary-container": "#b0b2ff",
      "on-primary": "#003824",
      "primary-fixed": "#6ffbbe",
      "surface-container-highest": "#303444",
      "on-error": "#690005",
      "on-secondary-fixed-variant": "#2f2ebe",
      "on-primary-fixed-variant": "#005236",
      "surface-variant": "#303444",
      "tertiary-fixed": "#ffddb8",
      "inverse-surface": "#dee2f6",
      "on-secondary": "#1000a9",
      "on-tertiary-fixed": "#2a1700",
      "inverse-on-surface": "#2b303f",
      "primary": "#4edea3",
      "secondary-container": "#3131c0",
      "outline": "#86948a",
      "on-tertiary-container": "#523200",
      "secondary-fixed-dim": "#c0c1ff",
      "on-surface": "#dee2f6",
      "on-error-container": "#ffdad6",
      "on-secondary-fixed": "#07006c",
      "on-primary-container": "#00422b",
      "on-primary-fixed": "#002113",
      "surface-dim": "#0e1321",
      "inverse-primary": "#006c49",
      "tertiary-fixed-dim": "#ffb95f",
      "tertiary": "#ffb95f",
      "surface-container-lowest": "#090e1c",
      "error-container": "#93000a",
      "secondary-fixed": "#e1e0ff",
      "background": "#0e1321",
      "on-tertiary": "#472a00",
      "on-tertiary-fixed-variant": "#653e00",
      "surface": "#0e1321",
      "tertiary-container": "#e29100",
      "secondary": "#c0c1ff",
      "surface-container": "#1a1f2e",
      "outline-variant": "#3c4a42",
      "primary-fixed-dim": "#4edea3",
      "error": "#ffb4ab"
    },
    "borderRadius": {
      "DEFAULT": "0.25rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "full": "9999px"
    },
    "spacing": {
      "space-lg": "1.5rem",
      "margin": "2.5rem",
      "space-sm": "0.5rem",
      "space-xs": "0.25rem",
      "gutter": "1.5rem",
      "space-xl": "2rem",
      "space-md": "1rem",
      "gutter-mobile": "1rem",
      "margin-mobile": "1rem"
    },
    "fontFamily": {
      "headline-sm": [
        "Plus Jakarta Sans"
      ],
      "title-md": [
        "Inter"
      ],
      "headline-lg": [
        "Plus Jakarta Sans"
      ],
      "body-sm": [
        "Inter"
      ],
      "title-lg": [
        "Plus Jakarta Sans"
      ],
      "label-md": [
        "Inter"
      ],
      "numeric-display": [
        "Plus Jakarta Sans"
      ],
      "headline-xl": [
        "Plus Jakarta Sans"
      ],
      "label-sm": [
        "Inter"
      ],
      "body-lg": [
        "Inter"
      ],
      "headline-xl-mobile": [
        "Plus Jakarta Sans"
      ],
      "headline-lg-mobile": [
        "Plus Jakarta Sans"
      ],
      "headline-md": [
        "Plus Jakarta Sans"
      ],
      "body-md": [
        "Inter"
      ]
    },
    "fontSize": {
      "headline-sm": [
        "20px",
        {
          "lineHeight": "28px",
          "fontWeight": "600"
        }
      ],
      "title-md": [
        "16px",
        {
          "lineHeight": "24px",
          "fontWeight": "600"
        }
      ],
      "headline-lg": [
        "32px",
        {
          "lineHeight": "40px",
          "letterSpacing": "-0.015em",
          "fontWeight": "600"
        }
      ],
      "body-sm": [
        "12px",
        {
          "lineHeight": "18px",
          "fontWeight": "400"
        }
      ],
      "title-lg": [
        "18px",
        {
          "lineHeight": "26px",
          "fontWeight": "600"
        }
      ],
      "label-md": [
        "12px",
        {
          "lineHeight": "16px",
          "letterSpacing": "0.04em",
          "fontWeight": "600"
        }
      ],
      "numeric-display": [
        "36px",
        {
          "lineHeight": "44px",
          "letterSpacing": "-0.03em",
          "fontWeight": "700"
        }
      ],
      "headline-xl": [
        "48px",
        {
          "lineHeight": "56px",
          "letterSpacing": "-0.02em",
          "fontWeight": "700"
        }
      ],
      "label-sm": [
        "11px",
        {
          "lineHeight": "14px",
          "letterSpacing": "0.02em",
          "fontWeight": "500"
        }
      ],
      "body-lg": [
        "16px",
        {
          "lineHeight": "26px",
          "fontWeight": "400"
        }
      ],
      "headline-xl-mobile": [
        "36px",
        {
          "lineHeight": "44px",
          "letterSpacing": "-0.02em",
          "fontWeight": "700"
        }
      ],
      "headline-lg-mobile": [
        "26px",
        {
          "lineHeight": "34px",
          "letterSpacing": "-0.015em",
          "fontWeight": "600"
        }
      ],
      "headline-md": [
        "24px",
        {
          "lineHeight": "32px",
          "letterSpacing": "-0.01em",
          "fontWeight": "600"
        }
      ],
      "body-md": [
        "14px",
        {
          "lineHeight": "22px",
          "fontWeight": "400"
        }
      ]
    }
  }
},
  plugins: [],
};

export default config;
