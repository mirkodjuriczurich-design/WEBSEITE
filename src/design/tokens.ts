/**
 * Swiss Longevity Labs AG – Design Tokens
 *
 * Single source of truth for colors, typography, spacing.
 * Mirrors the CSS custom properties in src/app/globals.css so that:
 *   - Components can import typed values
 *   - Server-rendered SVG / OG-images can use the same palette
 *   - Future tests can assert against canonical values
 *
 * If you change a value here, mirror it in globals.css @theme block.
 */

export const colors = {
  swissRed: "#E30613",
  swissRedHover: "#C90510",

  ink: "#0B0B0B",
  offWhite: "#FAFAF7",
  paper: "#FFFFFF",

  stone100: "#F0EFEA",
  stone200: "#E5E3DC",
  stone400: "#A8A6A0",
  stone700: "#3D3B36",
  stone900: "#1A1916",

  navy: "#0B2545",
  navySoft: "#B8C2D6",
  navyBorder: "#2F4566",
  navyHover: "#173158",

  success: "#1E7A4F",
  warning: "#C98214",
  error: "#B91C1C",
} as const;

export type ColorToken = keyof typeof colors;

export const fonts = {
  display: "var(--font-playfair), 'Playfair Display', Georgia, serif",
  sans: "var(--font-inter), Inter, system-ui, sans-serif",
  mono: "var(--font-jetbrains-mono), 'JetBrains Mono', ui-monospace, monospace",
} as const;

export const typography = {
  display: { weight: 400, lineHeight: 1.05, letterSpacing: "-0.015em" },
  h1: { weight: 400, lineHeight: 1.1, letterSpacing: "-0.015em" },
  h2: { weight: 400, lineHeight: 1.15, letterSpacing: "-0.01em" },
  h3: { weight: 500, lineHeight: 1.25, letterSpacing: "-0.005em" },
  body: { weight: 400, lineHeight: 1.65 },
  eyebrow: { weight: 600, lineHeight: 1.4, letterSpacing: "0.12em" },
} as const;

export const spacing = {
  containerMax: 1440,
  containerHero: 1600,
  paddingMobile: 24,
  paddingTablet: 48,
  paddingDesktop: 80,
  sectionMin: 80,
  sectionMax: 160,
} as const;

export const motion = {
  durationFast: 200,
  durationBase: 300,
  durationSlow: 600,
  easeOutExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
