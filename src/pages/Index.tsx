import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import UrgencyBar from "@/components/landing/UrgencyBar";
import IntroSection from "@/components/landing/IntroSection";
import PublicoSection from "@/components/landing/PublicoSection";
import ConteudoSection from "@/components/landing/ConteudoSection";
import ResultadosSection from "@/components/landing/ResultadosSection";
import MentoresSection from "@/components/landing/MentoresSection";
import PricingSection from "@/components/landing/PricingSection";
import FaqSection from "@/components/landing/FaqSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <UrgencyBar />
      <IntroSection />
      <PublicoSection />
      <ConteudoSection />
      <ResultadosSection />
      <MentoresSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </>
  );
};

export default Index;
