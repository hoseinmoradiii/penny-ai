# Penny AI — Next.js + TypeScript

**Penny AI** is an AI personal finance assistant. It turns raw bank transactions into clear insights, savings suggestions and early overspending alerts, so users don't have to budget by hand.

This repository is the **marketing and onboarding website** for Penny AI. It was converted from the Stitch responsive design export into a Next.js + TypeScript app, and all original class names are kept as they were.

## What Penny AI Is For

Most people want to control their spending but give up on manual budgeting apps and spreadsheets within a few weeks. Penny removes that manual work:

- **Auto-categorization**: transactions are sorted into categories automatically, and the system learns from the user's corrections.
- **Plain-language explanations**: every chart comes with a takeaway, for example "You spent 18% more on dining this month, and here's why."
- **Proactive alerts**: warnings before overspending, for unusual transactions, and for upcoming recurring bills.
- **Subscription detection**: finds forgotten or idle recurring charges and lets the user cancel them in one click.
- **Budgets and goals**: category budgets and savings goals with progress tracking.
- **Conversational copilot**: users ask questions about their money in chat, and every answer is based on their own transaction data.

### Who It's For

People aged 22–40 with a regular income who pay by card or phone every day and have tried a budgeting app or spreadsheet but stopped. Example personas:

| Persona              | Situation                                        | Goal                                         |
| -------------------- | ------------------------------------------------ | -------------------------------------------- |
| Sara, 27, designer   | Salaried, spends on food and shopping on impulse | Save for a trip                              |
| Ali & Mina, couple   | Shared expenses, different spending habits       | A fair shared budget                         |
| Reza, 33, freelancer | Irregular income                                 | Smooth cash flow and set money aside for tax |

### Product Principles

1. **Zero effort first**: users get value in under 5 minutes.
2. **Explain, don't just display**: insights come with plain-language context.
3. **Privacy by default**: read-only bank access, no selling of data, and users can export or delete their data.
4. **Nudge, don't nag**: alerts are relevant and rare.
5. **Numbers come from code, language comes from AI**: all calculations are deterministic, and the AI only explains them, so it never invents figures.

### Pricing Model (Freemium)

| Plan    | Monthly | Annual (save 20%) | Highlights                                                      |
| ------- | ------- | ----------------- | --------------------------------------------------------------- |
| Starter | Free    | Free              | Manual/CSV import, standard categories, 1 savings goal          |
| Plus    | $5/mo   | $4/mo ($48/yr)    | Automatic bank sync, smart alerts, subscription hunter, AI chat |
| Premium | $10/mo  | $8/mo ($96/yr)    | Advanced forecasts, family/shared budgets, unlimited AI chat    |

> Penny provides informational insights based on transaction data. It is not financial, investment, tax or legal advice.

## What This Website Contains

| Route                 | Page               | Purpose                                                                       |
| --------------------- | ------------------ | ----------------------------------------------------------------------------- |
| `/`                   | Home               | Value proposition, live copilot preview, trust badges, personas               |
| `/product`            | Product Overview   | Feature tabs (transaction stream, 30-day forecast, ghost-subscription hunter) |
| `/features`           | Features & AI Tech | The AI pipeline and how insights are produced                                 |
| `/pricing`            | Pricing & Plans    | Plans, monthly/annual toggle, ROI calculator, comparison table, FAQ           |
| `/security-and-trust` | Security & Trust   | Data protection, privacy guarantees, key verification, FAQ                    |
| `/company`            | Company / About Us | Mission, team, history, open positions                                        |
| `/sign-in`            | Sign In            | Login form with password visibility and biometric option                      |
| `/get-started`        | Get Started        | Sign-up form with password strength meter and goal selection                  |

This is a **front-end only** project: forms and dashboards use mock data, and there is no backend, authentication or bank integration yet.

## Tech Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS 3.4 (using the "Luminescent Trust" dark theme from the design export)
- Three.js (animated particle background)

## Getting Started

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command             | Description                    |
| ------------------- | ------------------------------ |
| `npm run dev`       | Start the development server   |
| `npm run build`     | Create a production build      |
| `npm run start`     | Serve the production build     |
| `npm run lint`      | Run ESLint                     |
| `npm run typecheck` | Type-check with `tsc --noEmit` |

## Desktop and Mobile Layouts

Each page has two separate layouts from the design: `Desktop.tsx` and `Mobile.tsx`. The server reads the request's User-Agent (`lib/variant.ts`) and renders only the matching layout, so no extra responsive classes were added. To see the mobile layout in a desktop browser, turn on device emulation in DevTools and reload the page.

## Project Structure

```
app/
  layout.tsx            Root layout: fonts, dark mode, per-page body classes, background
  globals.css           Global styles from the design export
  <route>/page.tsx      Picks the Desktop or Mobile layout for each route
components/
  ThreeBackground.tsx   Fixed, non-interactive Three.js particle background
  pages/<page>/         Desktop.tsx and Mobile.tsx for each screen
lib/
  variant.ts            Detects desktop vs mobile from the User-Agent
  bodyClasses.ts        Original <body> classes for each page and layout
middleware.ts           Passes the request path to the root layout
scripts/convert.mjs     The HTML → TSX converter used to generate the page components
tailwind.config.ts      Tailwind theme copied from the design export
```

## Notes

- Links to screens that aren't in the design export (for example, the mobile bottom tabs) point to `#`.
- Interactive behaviour (billing toggles, ROI slider, accordions, tabs, password visibility and strength, demo feedback) is written as React state. It uses the same class strings as the original scripts.
- Remote images use plain `<img>` tags to keep the original markup unchanged.
