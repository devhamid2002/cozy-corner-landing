<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Cozy Corner Landing

## Overview
Persian (Farsi) cafe-finder landing app built with Next.js 16 + React 19. RTL layout (`dir="rtl"`, `lang="fa"`).

## Key facts
- **Package manager**: `pnpm` (not npm/yarn) — `pnpm dev`, `pnpm build`, `pnpm lint`
- **No test framework** configured; no CI workflows exist
- **React Compiler** enabled in `next.config.ts` (`reactCompiler: true`)
- **Tailwind CSS 4** via `@tailwindcss/postcss` (not the classic tailwind postcss plugin)
- **Custom breakpoints**: `mm` (375px), `sm` (480px), `md` (768px), `lg` (976px), `xl` (1440px)
- **Font**: IRANSansX loaded from `public/fonts/woff2/` — 9 weights, defined via `@font-face` in `globals.css`
- **Path alias**: `@/*` → `./src/*` (tsconfig.json)
- **pnpm-workspace.yaml** disables `sharp` and `unrs-resolver` builds

## Structure
- `src/app/` — App Router pages (page.tsx is the home landing page)
- `src/components/` — 9 reusable components (Hero, Service, Introduction, Advertising, Slider, CTA, Navbar, Footer, Logo)
- `src/app/layout.tsx` — Root layout with Navbar/Footer wrapping `{children}`
- `public/` — fonts, icons

## Commands
```bash
pnpm dev      # Start dev server
pnpm build    # Production build
pnpm lint     # ESLint (eslint.config.mjs)
```

## page.tsx
The home page (`src/app/page.tsx`) composes components in this order: Hero → Service → Introduction → Advertising → Slider → CTA.
