import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ResultsSection from "@/components/ResultsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <AboutSection />
      <SolutionsSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <ResultsSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
