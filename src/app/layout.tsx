import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";
import { CookieBanner } from "@/layout/CookieBanner";
import { StickyMobileCTA } from "@/layout/StickyMobileCTA";
import { site } from "@/lib/site";
import { buildOrganizationJsonLd } from "@/lib/seo";
import { getPlausibleScriptProps } from "@/lib/analytics";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – ${site.positioning}`,
    template: `%s – ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "Schweizer Longevity Hersteller",
    "Longevity CDMO",
    "White Label Supplements Schweiz",
    "Private Label Nahrungsergänzung",
    "GMP Lohnproduktion Schweiz",
    "Longevity Produkte",
    "Swissmedic",
    "Anti-Aging Hersteller",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "de_CH",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    // Phase 2: actual values to be set in Vercel env vars and pulled in here
    // google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    // bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = buildOrganizationJsonLd();
  const plausibleProps = getPlausibleScriptProps();

  return (
    <html lang="de-CH" className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[var(--color-ink)] focus:text-[var(--color-paper)] focus:px-4 focus:py-2 focus:text-[13px] focus:font-medium"
        >
          Zum Hauptinhalt springen
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {plausibleProps && (
          <script defer src={plausibleProps.src} data-domain={plausibleProps["data-domain"]} />
        )}
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
