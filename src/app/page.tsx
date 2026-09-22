import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FeatureStrip from "@/components/FeatureStrip";
import Craft from "@/components/Craft";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Story from "@/components/Story";
import HowItWorks from "@/components/HowItWorks";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Marquee />
        <FeatureStrip />
        <Craft />
        <Products />
        <Reviews />
        <Story />
        <HowItWorks />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
