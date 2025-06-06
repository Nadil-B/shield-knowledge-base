
import { useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Home/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Lock, ShieldCheck, Server, Cloud } from "lucide-react";
import CardWithIcon from "@/components/common/CardWithIcon";

const securitySolutions = [
  {
    icon: ShieldCheck,
    title: "Endpoint Protection",
    description: "Advanced security solutions to protect devices from malware, ransomware, and other threats.",
    iconClass: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    icon: Server,
    title: "Network Security",
    description: "Comprehensive solutions to secure your networks from unauthorized access and attacks.",
    iconClass: "bg-green-100 dark:bg-green-900/30"
  },
  {
    icon: Lock,
    title: "Identity Management",
    description: "Secure identity and access management solutions to protect sensitive data and systems.",
    iconClass: "bg-purple-100 dark:bg-purple-900/30"
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Solutions to secure cloud environments and protect data stored in the cloud.",
    iconClass: "bg-amber-100 dark:bg-amber-900/30"
  }
];

const SecuritySolutions = () => {
  // Update the page title
  useEffect(() => {
    document.title = "CyberShield | Security Solutions";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-secondary/50">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mb-10">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Security Solutions</h1>
              <p className="text-lg text-muted-foreground">
                Explore our comprehensive security solutions designed to protect your organization
                from evolving cyber threats.
              </p>
            </div>

            <div className="bg-card border shadow-sm rounded-lg p-6 mb-12">
              <h2 className="text-2xl font-bold mb-4">Security Assessment</h2>
              <p className="mb-6">
                Our security assessment service helps identify vulnerabilities in your systems 
                and provides recommendations to strengthen your security posture.
              </p>
              <Button>
                Request Assessment
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Our Security Solutions</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {securitySolutions.map((solution) => (
                <CardWithIcon
                  key={solution.title}
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  iconClassName={solution.iconClass}
                />
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-cyber-blue rounded-lg text-white">
              <h2 className="text-2xl font-bold mb-4">Custom Security Solutions</h2>
              <p className="mb-6">
                We offer customized security solutions tailored to your organization's specific needs
                and requirements.
              </p>
              <Button className="bg-white text-cyber-blue hover:bg-white/90">
                Contact Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SecuritySolutions;
