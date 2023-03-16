import Contact from "./components/Contact";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/Hero/HeroSection";
import PricingSection from "./components/PricingSection";
import SpecialSection from "./components/Special/SpecialSection";
import TargetSection from "./components/TargetSection";


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TargetSection />
      <SpecialSection />
      <FeaturesSection />
      <PricingSection />
      <Contact />
    </main>
  )
}
