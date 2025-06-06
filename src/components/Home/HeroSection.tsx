
import { Button } from "@/components/ui/button";
import { ChevronRight, Lock, Shield, ShieldAlert, TrendingUp, Globe, Activity } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pb-20 lg:pb-24">
      <div className="absolute inset-0 bg-cyber-blue/5 -z-10"></div>
      <div className="container px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-centre">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Safeguarding the <span className="text-cyber-teal">Digital Frontier</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Stay informed with the latest cybersecurity threats, vulnerabilities, and best practises to protect your digital assets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-cyber-blue hover:bg-cyber-blue/90 text-white" asChild>
              <Link to="/threat-intelligence">
                Explore Threat Intelligence
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/resources">
                <Lock className="mr-2 h-4 w-4" />
                Security Resources
              </Link>
            </Button>
          </div>
          
          <div className="flex items-centre gap-6 pt-4">
            <div className="flex items-centre">
              <Shield className="text-cyber-teal h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Real-time Intelligence</span>
            </div>
            <div className="flex items-centre">
              <ShieldAlert className="text-cyber-teal h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Expert Analysis</span>
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyber-teal to-cyber-blue opacity-30 blur"></div>
          <div className="relative rounded-lg bg-card p-8 shadow-xl">
            <div className="space-y-6">
              <div className="flex justify-between items-centre">
                <h3 className="font-mono text-sm font-semibold">Global Threat Intelligence Dashboard</h3>
                <span className="inline-flex items-centre rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                  <Activity className="h-3 w-3 mr-1" />
                  Live Monitoring
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                  <div className="flex items-centre justify-between mb-2">
                    <ShieldAlert className="h-4 w-4 text-red-600" />
                    <span className="text-xs font-medium text-red-600">Critical</span>
                  </div>
                  <div className="text-2xl font-bold text-red-600">23</div>
                  <div className="text-xs text-muted-foreground">Active threats today</div>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                  <div className="flex items-centre justify-between mb-2">
                    <TrendingUp className="h-4 w-4 text-amber-600" />
                    <span className="text-xs font-medium text-amber-600">Rising</span>
                  </div>
                  <div className="text-2xl font-bold text-amber-600">156</div>
                  <div className="text-xs text-muted-foreground">New vulnerabilities</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-centre">
                  <span className="text-sm font-medium">Network Security Coverage</span>
                  <span className="text-sm text-cyber-teal">94%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-cyber-teal animate-pulse-subtle w-[94%]"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-centre">
                  <span className="text-sm font-medium">Endpoint Protection</span>
                  <span className="text-sm text-cyber-teal">87%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-cyber-teal animate-pulse-subtle w-[87%]"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-centre">
                  <span className="text-sm font-medium">Cloud Security Posture</span>
                  <span className="text-sm text-amber-500">68%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-amber-500 animate-pulse-subtle w-[68%]"></div>
                </div>
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex items-centre justify-between">
                  <span className="font-mono text-xs text-muted-foreground">Latest Scan:</span>
                  <span className="font-mono text-xs">06/06/2025 14:23:47</span>
                </div>
                <div className="flex items-centre justify-between">
                  <span className="font-mono text-xs text-muted-foreground">Threats Neutralised:</span>
                  <span className="font-mono text-xs text-cyber-accent font-medium">342</span>
                </div>
                <div className="flex items-centre justify-between">
                  <span className="font-mono text-xs text-muted-foreground">Global Coverage:</span>
                  <div className="flex items-centre">
                    <Globe className="h-3 w-3 text-cyber-teal mr-1" />
                    <span className="font-mono text-xs">127 countries</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-cyber-teal hover:bg-cyber-teal/90 text-white" size="sm" asChild>
                <Link to="/threat-detector">
                  Run Threat Assessment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
