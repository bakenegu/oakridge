import Hero from "./components/Hero";
import ExperienceBetter from "./components/ExperienceBetter";
import TailoredForYou from "./components/TailoredForYou";
import AssistedLivingBanner from "./components/AssistedLivingBanner";
import AtEveryTurn from "./components/AtEveryTurn";
import InTheDetails from "./components/InTheDetails";
import ForCulturedLiving from "./components/ForCulturedLiving";
import LocationSection from "./components/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceBetter />
      <TailoredForYou />
      <AssistedLivingBanner />
      <AtEveryTurn />
      <InTheDetails />
      <ForCulturedLiving />
      <LocationSection />
    </>
  );
}
