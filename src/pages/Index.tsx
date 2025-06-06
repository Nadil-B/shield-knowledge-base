
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import ThreatCategories from "@/components/Home/ThreatCategories";
import CyberAttacksSection from "@/components/Home/CyberAttacksSection";
import ResourcesSection from "@/components/Home/ResourcesSection";
import SecurityEducationSection from "@/components/Home/SecurityEducationSection";
import Footer from "@/components/Home/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Shield } from "lucide-react";

const Index = () => {
  // Update the page title
  useEffect(() => {
    document.title = "CyberShield | Cybersecurity Information Centre";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ThreatCategories />
        <CyberAttacksSection />
        <ResourcesSection />
        <SecurityEducationSection />
        
        {/* Security Assessment CTA Section */}
        <section className="py-16 bg-cyber-blue/10">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4 p-2 bg-cyber-teal/10 rounded-full">
                <Shield className="h-8 w-8 text-cyber-teal" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Interactive Security Assessments
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Test your cybersecurity knowledge and analyse content for potential threats using 
                ChatGPT-powered threat detection. Learn to identify security risks and improve your awareness.
              </p>
              <Button className="bg-cyber-teal hover:bg-cyber-teal/90 text-lg px-6 py-6 h-auto" asChild>
                <Link to="/security-assessments">
                  Start Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
