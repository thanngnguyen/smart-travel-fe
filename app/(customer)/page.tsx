import HeroSection from "@/components/home/HeroSection";
import TrustSignals from "@/components/home/TrustSignals";
import CuratedEscapes from "@/components/home/CuratedEscapes";

export default function Home() {
  return (
    <>
      <main className="pt-[72px]">
        <HeroSection />
        <TrustSignals />
        <CuratedEscapes />
      </main>
    </>
  );
}
