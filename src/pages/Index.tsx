
import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import ThreatCategories from "@/components/Home/ThreatCategories";
import SecurityAdvisories from "@/components/Home/SecurityAdvisories";
import ResourcesSection from "@/components/Home/ResourcesSection";
import Footer from "@/components/Home/Footer";
import { useEffect } from "react";

const Index = () => {
  // Update the page title
  useEffect(() => {
    document.title = "CyberShield | Cybersecurity Information Center";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ThreatCategories />
        <SecurityAdvisories />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
