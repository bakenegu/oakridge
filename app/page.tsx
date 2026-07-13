import Hero from "./components/Hero";
import CarePillars from "./components/CarePillars";
import ExperienceBetter from "./components/ExperienceBetter";
import TailoredForYou from "./components/TailoredForYou";
import AssistedLivingBanner from "./components/AssistedLivingBanner";
import LocationSection from "./components/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CarePillars />
      <ExperienceBetter />
      <TailoredForYou />
      <AssistedLivingBanner />
      <LocationSection />
    </>
  );
}
