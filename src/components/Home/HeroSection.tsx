
import { Button } from "@/components/ui/button";
import { ChevronRight, Lock, Shield, ShieldAlert } from "lucide-react";
import AlertBanner from "../common/AlertBanner";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pb-20 lg:pb-24">
      <div className="absolute inset-0 bg-cyber-blue/5 -z-10"></div>
      <div className="container px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <AlertBanner 
            title="Security Advisory" 
            message="Critical vulnerability discovered in popular software. Update immediately."
            severity="critical"
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Safeguarding the <span className="text-cyber-teal">Digital Frontier</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Stay informed with the latest cybersecurity threats, vulnerabilities, and best practices to protect your digital assets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-cyber-blue hover:bg-cyber-blue/90 text-white">
              Explore Threat Intelligence
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              <Lock className="mr-2 h-4 w-4" />
              Security Resources
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center">
              <Shield className="text-cyber-teal h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Real-time Alerts</span>
            </div>
            <div className="flex items-center">
              <ShieldAlert className="text-cyber-teal h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Expert Analysis</span>
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyber-teal to-cyber-blue opacity-30 blur"></div>
          <div className="relative rounded-lg bg-card p-8 shadow-xl">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-mono text-sm font-semibold">Threat Detection Status</h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                  Active
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-cyber-teal animate-pulse-subtle w-[85%]"></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Network Security</span>
                  <span>85%</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-cyber-teal animate-pulse-subtle w-[92%]"></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Endpoint Protection</span>
                  <span>92%</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-cyber-accent animate-pulse-subtle w-[63%]"></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Cloud Security</span>
                  <span>63%</span>
                </div>
              </div>
              
              <div className="font-mono text-xs text-muted-foreground border-t pt-4 mt-4">
                <div className="flex justify-between">
                  <span>Last Scan:</span>
                  <span>05/21/2025 09:45:12</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Threats Neutralized:</span>
                  <span className="text-cyber-accent font-medium">27</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
