import { Hero } from "@/features/home/Hero";
import { LeistungenBento } from "@/features/home/LeistungenBento";
import { ProcessStory } from "@/features/home/ProcessStory";
import { ProductionVideo } from "@/features/home/ProductionVideo";
import { Comparison } from "@/features/home/Comparison";
import { ProdukteShowcase } from "@/features/home/ProdukteShowcase";
import { HomeFAQ } from "@/features/home/HomeFAQ";
import { FinalCTA } from "@/features/home/FinalCTA";

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
