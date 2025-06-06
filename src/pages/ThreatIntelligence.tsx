
import { useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Home/Footer";
import ThreatCategories from "@/components/Home/ThreatCategories";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ThreatIntelligence = () => {
  // Update the page title
  useEffect(() => {
    document.title = "CyberShield | Threat Intelligence";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-cyber-blue/5">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mb-10">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Threat Intelligence</h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive information about various cybersecurity threats and vulnerabilities
                to help you protect your systems and data.
              </p>
            </div>
            
            <div className="flex items-center p-4 mb-8 bg-card border rounded-lg">
              <div className="mr-4 bg-cyber-teal/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-cyber-teal" />
              </div>
              <div>
                <h2 className="font-medium text-lg">Threat Intelligence Dashboard</h2>
                <p className="text-muted-foreground">
                  Get real-time insights into current threats and vulnerabilities
                </p>
              </div>
              <Button className="ml-auto">
                View Dashboard
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Latest Threat Reports</CardTitle>
                <CardDescription>Updated daily based on global security research</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="p-3 bg-secondary/50 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-md">Ransomware Evolution in Financial Sector</h3>
                        <p className="text-sm text-muted-foreground">June 5, 2025</p>
                      </div>
                      <Button variant="outline" size="sm">Read Report</Button>
                    </div>
                  </li>
                  <li className="p-3 bg-secondary/50 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-md">Supply Chain Attack Methodologies</h3>
                        <p className="text-sm text-muted-foreground">June 3, 2025</p>
                      </div>
                      <Button variant="outline" size="sm">Read Report</Button>
                    </div>
                  </li>
                  <li className="p-3 bg-secondary/50 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-md">Zero-Day Vulnerabilities Analysis</h3>
                        <p className="text-sm text-muted-foreground">May 29, 2025</p>
                      </div>
                      <Button variant="outline" size="sm">Read Report</Button>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <ThreatCategories />
      </main>
      <Footer />
    </div>
  );
};

export default ThreatIntelligence;
