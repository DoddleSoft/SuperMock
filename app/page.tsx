import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import StandoutFeature from "@/components/landing/StandoutFeature";
import WhatsIncluded from "@/components/landing/WhatsIncluded";
import Pricing from "@/components/landing/Pricing";
import Cloud from "@/components/landing/Cloud";
import Guarantee from "@/components/landing/Guarantee";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-supermock-red selection:text-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Problem />
      <Solution />
      <StandoutFeature />
      <WhatsIncluded />
      <Pricing />
      <Cloud />
      <Guarantee />
      <FinalCTA />
      <Footer />
    </main>
  );
}
