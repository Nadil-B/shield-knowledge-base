
import { useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Home/Footer";
import ResourcesSection from "@/components/Home/ResourcesSection";

const Resources = () => {
  // Update the page title
  useEffect(() => {
    document.title = "CyberShield | Security Resources";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-cyber-blue/5">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mb-10">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Security Resources</h1>
              <p className="text-lg text-muted-foreground">
                Educational materials and tools to enhance your security posture and build awareness.
              </p>
            </div>
          </div>
        </div>
        
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
