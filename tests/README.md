# Tests

Vitest unit tests (Phase A.2 setup planned).

## Currently

Empty. Setup TODO in next session:

```bash
npm install -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom jsdom
```

Add to `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:ui": "vitest --ui"
  }
}
```

`vitest.config.ts` at repo root.

## Coverage scope (initial)

Focus on **pure logic**, not component rendering:

- `src/lib/cn.ts` — class merger
- `src/lib/site.ts` — produkte/leistungen integrity
- `src/lib/seo.ts` (once created) — JSON-LD shape
- `src/lib/env.ts` (once created) — env schema
- `src/app/api/contact/route.ts` — validation

Component snapshot tests are not worth the maintenance cost here. UI changes
fast, snapshots rot. Prefer E2E in Playwright for user flows.
