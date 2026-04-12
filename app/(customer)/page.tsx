import HeroSection from "@/components/home/HeroSection";
import TrustSignals from "@/components/home/TrustSignals";
import CuratedEscapes from "@/components/home/CuratedEscapes";
import IntelligentItineraries from "@/components/home/IntelligentItineraries";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <main className="pt-[72px]">
        <HeroSection />
        <TrustSignals />
        <CuratedEscapes />
        <IntelligentItineraries />
        <HomeCTA />
      </main>
    </>
  );
}
