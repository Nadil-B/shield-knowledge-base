
import { useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Home/Footer";
import SecurityAdvisories from "@/components/Home/SecurityAdvisories";

const Advisories = () => {
  // Update the page title
  useEffect(() => {
    document.title = "CyberShield | Security Advisories";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-cyber-blue/5">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mb-10">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Security Advisories</h1>
              <p className="text-lg text-muted-foreground">
                Stay informed about the latest security vulnerabilities, patches, and recommendations
                to protect your systems.
              </p>
            </div>
          </div>
        </div>
        
        <SecurityAdvisories />
      </main>
      <Footer />
    </div>
  );
};

export default Advisories;
