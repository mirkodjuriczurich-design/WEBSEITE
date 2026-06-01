# Content

Editorial content lives here in **MDX** form (Phase B of the migration plan).

## Migration status

Currently still in TypeScript files under `src/lib/*-content.ts`. This folder
is the destination — keep populated `README.md` here so it survives in git
until the migration runs.

## Folder map (target)

```
content/
├── leistungen/         # 6 service pillars
│   ├── private-label.mdx
│   ├── white-label.mdx
│   ├── full-service-rd.mdx
│   ├── produktentwicklung.mdx
│   ├── regulatorik.mdx
│   └── distribution.mdx
├── produkte/           # 6 own-brand products
├── expertise/          # capabilities, process, quality, standort
├── insights/           # blog posts
└── unternehmen/        # story, team groups
```

## Frontmatter contract (preview)

```yaml
---
title: Private Label
slug: private-label
number: "01"
tagline: "Eure Marke, unsere Rezeptur."
lead: "..."
order: 1
crossSell: [produktentwicklung, regulatorik, distribution]
---
```
