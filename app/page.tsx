import Hero from "./components/Hero";
import { HoverEffect } from "./components/HeroCards";
import { Navbar } from "./components/Navbar";
import NewHero from "./components/NewHero";
import { ScrollSection } from "./components/ScrollSection";
import Numbers from "./components/Stats";
import HowItWorks from "./components/Steps";

export default function Home() {
  return (
    <>
      <Navbar />
      <NewHero />
      {/* <Hero /> */}
      <HoverEffect />
      <HowItWorks />
      <ScrollSection />
      <Numbers />
    </>
  );
}
