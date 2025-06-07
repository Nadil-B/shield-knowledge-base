
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
import { ArrowRight, Brain, Shield, BookOpen, Users, Zap, Globe, Lock } from "lucide-react";

const Index = () => {
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
        
        {/* Enhanced Navigation Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
          <div className="container px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-4 p-3 bg-white/10 rounded-full">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  Explore Our Platform
                </h2>
                <p className="text-lg text-white/90 max-w-3xl mx-auto">
                  Navigate through our comprehensive cybersecurity resources, tools, and educational content.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 rounded-full p-2">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">AI Assistant & Quiz</h3>
                  </div>
                  <p className="text-white/80 mb-4">
                    Get expert cybersecurity guidance and test your knowledge with our comprehensive quiz.
                  </p>
                  <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-purple-600" asChild>
                    <Link to="/security-assessments">
                      Try Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 rounded-full p-2">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Threat Intelligence</h3>
                  </div>
                  <p className="text-white/80 mb-4">
                    Stay updated with the latest cybersecurity threats and vulnerability intelligence.
                  </p>
                  <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-purple-600" asChild>
                    <Link to="/threat-intelligence">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 rounded-full p-2">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Security Solutions</h3>
                  </div>
                  <p className="text-white/80 mb-4">
                    Discover comprehensive security solutions and implementation strategies.
                  </p>
                  <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-purple-600" asChild>
                    <Link to="/security-solutions">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 rounded-full p-2">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Educational Resources</h3>
                  </div>
                  <p className="text-white/80 mb-4">
                    Access comprehensive guides, tutorials, and educational materials.
                  </p>
                  <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-purple-600" asChild>
                    <Link to="/resources">
                      Browse
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 rounded-full p-2">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Security Advisories</h3>
                  </div>
                  <p className="text-white/80 mb-4">
                    Get the latest security advisories, alerts, and critical updates.
                  </p>
                  <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-purple-600" asChild>
                    <Link to="/advisories">
                      View All
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 rounded-full p-2">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Community Hub</h3>
                  </div>
                  <p className="text-white/80 mb-4">
                    Connect with cybersecurity professionals and share knowledge.
                  </p>
                  <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-purple-600" asChild>
                    <Link to="/resources#community">
                      Join Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
