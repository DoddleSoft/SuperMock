import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import WhyChoose from "@/components/landing/WhyChoose";
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
      <WhyChoose />
      <WhatsIncluded />
      <Pricing />
      <Guarantee />
      <FinalCTA />
      <Footer />
    </main>
  );
}
