import { Card } from "./components/Card";
import ContributeCTA from "./components/ContributeCTA";
// import { Features } from "./components/Features";
import { Features } from "./components/Features";
import FeaturesHeader from "./components/FeaturesHeader";
import Hero from "./components/Hero";
import { HoverEffect } from "./components/HeroCards";
import { Navbar } from "./components/Navbar";
import NewHero from "./components/NewHero";
import { ScrollSection } from "./components/ScrollSection";
import Numbers from "./components/Stats";
import HowItWorks from "./components/Steps";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <NewHero />
      {/* <Hero /> */}
      {/* <Button text="many features,wow" /> */}
      <FeaturesHeader />
      <Features />
      {/* <HoverEffect /> */}
      {/* <HowItWorks /> */}
      <ScrollSection />
      <ContributeCTA />
      {/* <Numbers /> */}
    </>
  );
}
