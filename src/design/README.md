# Design

Single source of truth for brand identity in code form.

## Files

- `tokens.ts` — colors, fonts, typography scale, spacing, motion, breakpoints
  as typed TypeScript constants. Mirrors the CSS custom properties in
  `src/app/globals.css @theme`.

## Why TS and CSS both

- CSS variables are needed for runtime themes, Tailwind utilities, dark-mode
  hooks.
- TS constants are needed for server-rendered SVGs (OG images), email
  templates, tests asserting against canonical colors, and intellisense.

Keep them in sync. If a value changes, update both files in the same commit.

## What's in scope

- Colors
- Typography (fonts + weights + line-heights + tracking)
- Spacing scale
- Motion (durations, easings)
- Breakpoints

## What's NOT in scope

- Component styles (those belong with the component)
- Page-specific layouts (those belong with the page)
- Icons (use `lucide-react`)
