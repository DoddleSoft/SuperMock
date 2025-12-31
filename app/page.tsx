import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import WhatsIncluded from "@/components/landing/WhatsIncluded";
import Pricing from "@/components/landing/Pricing";
import Guarantee from "@/components/landing/Guarantee";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen max-w-full">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <WhatsIncluded />
      <Pricing />
      <Guarantee />
      <FinalCTA />
      <Footer />
    </main>
  );
}
