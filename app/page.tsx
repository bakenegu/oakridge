import Hero from "./components/Hero";
import ExperienceBetter from "./components/ExperienceBetter";
import CarePillars from "./components/CarePillars";
import TailoredForYou from "./components/TailoredForYou";
import AssistedLivingBanner from "./components/AssistedLivingBanner";
import LocationSection from "./components/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceBetter />
      <CarePillars />
      <TailoredForYou />
      <AssistedLivingBanner />
      <LocationSection />
    </>
  );
}
