# Scripts

Build, migration and maintenance scripts. Run via `tsx` or `node` directly.

## Planned scripts

- `migrate-content-to-mdx.ts` — Phase B: convert `src/lib/*-content.ts` to MDX
- `generate-og-images.ts` — pre-render static OG images per page at build time
- `validate-content.ts` — Velite/contentlayer schema validation in CI
- `audit-internal-links.ts` — find dead `<Link href>` references

## Conventions

- Each script is self-contained, runnable as `npx tsx scripts/<name>.ts`.
- Top of file: comment explaining what it does and when to run it.
- No external CLI dependencies beyond what's in `package.json` devDependencies.
