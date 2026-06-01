import { Hero } from "@/features/home/Hero";
import { LeistungenBento } from "@/features/home/LeistungenBento";
import { ProcessStory } from "@/features/home/ProcessStory";
import { ProductionVideo } from "@/features/home/ProductionVideo";
import { TrustNumbers } from "@/features/home/TrustNumbers";
import { Comparison } from "@/features/home/Comparison";
import { ProdukteShowcase } from "@/features/home/ProdukteShowcase";
import { SocialProof } from "@/features/home/SocialProof";
import { WissenTeaser } from "@/features/home/WissenTeaser";
import { InsightsPreview } from "@/features/home/InsightsPreview";
import { HomeFAQ } from "@/features/home/HomeFAQ";
import { FinalCTA } from "@/features/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LeistungenBento />
      <ProcessStory />
      <ProductionVideo />
      <TrustNumbers />
      <Comparison />
      <ProdukteShowcase />
      <SocialProof />
      <WissenTeaser />
      <InsightsPreview />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
