import type { Metadata } from "next";
import { Hero } from "@/features/home/Hero";
import { LeistungenBento } from "@/features/home/LeistungenBento";
import { ProcessStory } from "@/features/home/ProcessStory";
import { ProductionVideo } from "@/features/home/ProductionVideo";
import { Comparison } from "@/features/home/Comparison";
import { ProdukteShowcase } from "@/features/home/ProdukteShowcase";
import { HomeFAQ } from "@/features/home/HomeFAQ";
import { FinalCTA } from "@/features/home/FinalCTA";

export const metadata: Metadata = {
  title: "Longevity CDMO Schweiz – Private Label, White Label & Full Service",
  description:
    "Swiss Longevity Labs AG – Schweizer Full-Service-Hersteller für Longevity-Produkte. Private Label, White Label und R&D unter GMP-Bedingungen. Swissmedic-konform, skalierbar.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Swiss Longevity Labs AG – Longevity CDMO Schweiz",
    description:
      "Private Label, White Label & Full Service R&D für Longevity-Produkte. Schweizer GMP-Produktion, Regulatorik und Distribution unter einem Dach.",
    url: "https://swisslongevitylabs.com",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LeistungenBento />
      <ProcessStory />
      <ProductionVideo />
      <Comparison />
      <ProdukteShowcase />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
