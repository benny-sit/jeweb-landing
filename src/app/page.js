import FeaturesSection from "./components/Home/FeaturesSection";
import HeroSection from "./components/Home/Hero/HeroSection";
import PricingSection from "./components/Home/PricingSection";
import SpecialSection from "./components/Home/Special/SpecialSection";
import TargetSection from "./components/Home/TargetSection";


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TargetSection />
      <SpecialSection />
      <FeaturesSection />
      <PricingSection />
    </main>
  )
}
