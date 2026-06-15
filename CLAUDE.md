# CLAUDE.md — Swiss Longevity Labs AG Website

> Project memory for Claude Code. Read this at session start to understand
> what we're building, how, and why.

## Project Identity

- **Repository**: `mirkodjuriczurich-design/WEBSEITE`
- **Domain**: `swisslongevitylab.com`
- **Brand**: Swiss Longevity Labs AG — Schweizer Full-Solution-Hersteller für Longevity-Produkte
- **Stack**: Next.js 16 (Turbopack, App Router) · React 19 · TypeScript strict · Tailwind v4
- **Hosting**: Vercel (Frankfurt region) — see `docs/deploy.md`
- **Primary language**: German (de-CH). English phase 2.

## What this site is

Two audiences in one site:

1. **B2B primary** — Pharma brands, supplement startups, clinics buying any of six service pillars (Private Label, White Label, Full Service & R&D, Produktentwicklung, Regulatorik, Distribution).
2. **B2C secondary** — Six own-brand longevity products direct-to-consumer (Night Repair, Brain Age, Resilience, GLP-1 Armor, Senolytic Cleanse, Spermidine Ritual).

Tone: editorial-pharma. Magazine typography meets Swiss manufacturer trust signals meets modern tech-brand conversion focus.

## Brand DNA — read before any design decision

- **Visible identity**: red mark on white, Playfair Display serif headlines, Inter body, JetBrains Mono for data and certificate numbers.
- **Off-white** (`#FAFAF7`) is the background, **not pure white**. Warmer, editorial.
- **Swiss Red** (`#E30613`) is the only accent — used sparingly (max ~5-8% pixel coverage).
- **Pharma Navy** (`#0B2545`) only on the dark final-CTA bands.
- All colors are mirrored in `src/design/tokens.ts` and `src/app/globals.css @theme`.

Reference brief: `docs/ux-brief.md` (master), `docs/mood-board.md` (visual), `docs/image-brief.md` (phase-3 photography prompts), `docs/architecture.md` (folder roadmap), `docs/deploy.md` (Vercel).

## Folder map

```
src/
├── app/                        # Next.js routes
├── components/
│   ├── sections/               # Page sections (TODO: split into features/)
│   ├── ui/                     # Atomic primitives (Button, Logo, …)
│   └── layout/                 # Header, Footer, CookieBanner, StickyMobileCTA
├── design/                     # Design tokens (TS source of truth)
│   └── tokens.ts
├── lib/
│   ├── cn.ts                   # tailwind-merge wrapper
│   ├── site.ts                 # Site config + leistungen + produkte arrays
│   ├── leistungen-content.ts   # ~600 lines editorial content (TODO: MDX)
│   ├── expertise-content.ts    # ~200 lines editorial content (TODO: MDX)
│   └── insights-content.ts     # ~200 lines editorial content (TODO: MDX)
content/                        # Future MDX content store
docs/                           # All briefs and architecture notes
public/                         # Static assets (robots, llms, sitemap, future images)
tests/                          # Vitest unit tests (placeholder)
scripts/                        # Maintenance scripts
```

## Conventions

- **German typography**: opening `„` (U+201E), closing `“` (U+201C). Never use ASCII `"` inside a German quotation — TypeScript parser breaks.
- **Component naming**: PascalCase files for components, kebab-case for routes.
- **Imports**: always via `@/*` alias. Never `../../`.
- **Sections vs Pages**: sections live in `src/components/sections/`, pages in `src/app/`. Pages import sections.
- **Content data**: hard data (lists, slugs) in `src/lib/site.ts`. Long-form editorial in `*-content.ts` files (will migrate to MDX).

## SEO / GEO baseline (already implemented — preserve)

- `robots.txt` with explicit allowlist for GPTBot, ClaudeBot, PerplexityBot, Google-Extended.
- `llms.txt` as machine-readable site overview (update when products or services change).
- Dynamic `sitemap.xml`.
- `Organization + Manufacturer` JSON-LD in root layout.
- `FAQPage` JSON-LD on every Leistungs-detail and home FAQ.
- `Article + Person` JSON-LD on insights articles.
- `Product + DietarySupplement` JSON-LD on product detail pages.
- Dynamic OG image at `src/app/opengraph-image.tsx`.

## Quality gates

- `npm run typecheck` — TypeScript strict, must pass before commit.
- `npm run build` — must succeed.
- `npm run dev` runs Turbopack on port 3000.
- Future: Vitest in `tests/`, Playwright `e2e/`, GH Actions CI.

## What's still placeholder, must be filled before launch

- [ ] Real numbers in `TrustNumbers` section (currently 27+, 12, 100%, 4)
- [ ] Real testimonial names and quotes (currently fictional Anna, Jonas, Lena, Marc)
- [ ] Real Impressum / Datenschutz / AGB texts (currently drafts)
- [ ] Real product photography in `public/images/produkt-*.avif`
- [ ] Real laboratory + portrait photography per `docs/image-brief.md`
- [ ] Production video at `public/videos/werks-tour.mp4`
- [ ] Real ISO / GMP / Swissmedic registration numbers
- [ ] Cal.com or Calendly URL for booking integration
- [ ] Resend API key (`RESEND_API_KEY` env on Vercel) to activate `/api/contact`
- [ ] Plausible Analytics script integration

## Open architectural questions (deferred)

- **MDX content migration**: when to migrate `*-content.ts` to `content/**/*.mdx` via Velite or contentlayer. Plan: after first round of post-launch content edits.
- **i18n activation**: when to switch from DE-only to `/de + /en` via next-intl. Plan: phase 2.
- **Shopify integration**: full e-commerce for own-brand products. Plan: phase 2.

---

*Last updated: 2026-06-12 · Setup-Optimierung: Commit-Stil + Sandbox-Hinweise → globale CLAUDE.md verschoben*
