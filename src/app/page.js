import Sponsor from "@/components/Sponsor";
import Conferance from "@/components/conference/Conferance";
import HeroSection from "@/components/heroSection/HeroSection";

export default function Home() {
  return (
    <main className="w-full relative">
      <HeroSection></HeroSection>
      <Conferance></Conferance>
      <Sponsor></Sponsor>
    </main>
  );
}
