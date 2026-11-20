import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __dirname = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Markup is a 1:1 port of the Stitch design; keep remote <img> tags and literal copy.
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "@next/next/google-font-display": "off",
    },
  },
  { ignores: ["node_modules/**", ".next/**", "scripts/**", "next-env.d.ts"] },
];

export default eslintConfig;
