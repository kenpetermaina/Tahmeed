import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import RoutesSection from "@/components/RoutesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navbar />
      <HeroSection />
      <AdvantagesSection />
      <RoutesSection />
      <Footer />
    </div>
  );
};

export default Index;
