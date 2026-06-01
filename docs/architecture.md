# Architecture & Migration Plan

> Roadmap for the folder structure refactor. Decisions made in the
> 2026-06-01 review session.

## Decisions taken

| Question | Decision |
|---|---|
| Scaling | **Single Site** — one Next.js app, no monorepo (yet) |
| Content layer | **MDX in `content/`** (migration phased) |
| i18n | **Prepare structure now, activate phase 2** |
| Quality gates | **Vitest + GH Actions CI**, Playwright + Lighthouse phase 2 |

## Target structure

```
content/                        # Editorial content (NEW)
├── leistungen/                 # 6 × MDX  (Phase B)
├── produkte/                   # 6 × MDX  (Phase B)
├── expertise/                  # 4 × MDX  (Phase B)
├── insights/                   # blog as MDX  (Phase B)
└── unternehmen/                # story etc. as MDX  (Phase B)

src/
├── app/                        # Routes (kept)
├── components/
│   ├── sections/               # → migrate into features/  (Phase C)
│   ├── ui/                     # atomic
│   └── layout/                 # persistent layout
├── design/                     # design tokens (NEW)  ✅ phase A
│   ├── tokens.ts               #   colors, fonts, spacing, motion
│   └── (theme.css will be generated later)
├── features/                   # feature folders (NEW)  (Phase C)
│   ├── home/
│   ├── leistungen/
│   ├── produkte/
│   ├── kontakt/
│   └── shared/
├── i18n/                       # locale resources (NEW)  (Phase D)
│   ├── de/
│   └── en/
├── lib/
│   ├── cn.ts
│   ├── env.ts                  # typed env (NEW)  (Phase A.2)
│   ├── seo.ts                  # JSON-LD helpers (NEW)  (Phase A.2)
│   ├── analytics.ts            # Plausible wrapper (NEW)  (Phase A.2)
│   ├── content.ts              # MDX loader (NEW)  (Phase B)
│   └── site.ts                 # site config kept
└── types/                      # shared types (NEW)  (Phase C)

tests/                          # Vitest unit tests (NEW)  (Phase A.2)
e2e/                            # Playwright (NEW)  (Phase 2)
scripts/                        # build / maintenance (NEW)
.github/workflows/              # CI (NEW)  (Phase A.2)
```

## Phasing

### Phase A — Foundation (this session, partly done)

- ✅ `src/design/tokens.ts` created
- ✅ `CLAUDE.md` created
- ✅ Folder skeleton with READMEs created
- ✅ New `Comparison` section uses `src/design/tokens` as first proof
- ⏳ Phase A.2 in next session: `src/lib/env.ts`, `src/lib/seo.ts`, Vitest setup, GH Actions CI

### Phase B — Content layer

Migrate `src/lib/leistungen-content.ts`, `expertise-content.ts`, `insights-content.ts` into `content/**/*.mdx` files with frontmatter.

- Install Velite (or Contentlayer if Velite incompatible with Next 16)
- Define content schemas
- Move data into MDX
- Update detail pages to use `getLeistung(slug)` loader
- Remove `*-content.ts` files

### Phase C — Feature folders

- Move `src/components/sections/*` into `src/features/{home,leistungen,produkte,kontakt}/sections/`
- Move `src/components/ui/*` into `src/ui/`
- Move `src/components/layout/*` into `src/layout/`
- Update all imports
- Update tsconfig paths if helpful

### Phase D — i18n activation (phase 2)

- Install next-intl
- Add middleware for locale detection
- Move all `de.json` strings under `src/i18n/de/`
- Translate to `src/i18n/en/`
- Routes become `/de/...` and `/en/...`

## What NOT to do

- ❌ No premature monorepo (single site is single project)
- ❌ No content-type abstractions that aren't used yet
- ❌ No mocking of CMS API before CMS is chosen
- ❌ No refactor without keeping `npm run build` green at every step

## Source of truth

- Design tokens: `src/design/tokens.ts`
- Site facts (nav, leistungen list, produkte list): `src/lib/site.ts`
- Brand voice: `docs/ux-brief.md`
- Visual rules: `docs/mood-board.md`
