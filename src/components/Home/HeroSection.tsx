
import { Button } from "@/components/ui/button";
import { ChevronRight, Lock, Shield, ShieldAlert, TrendingUp, Globe, Activity, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pb-20 lg:pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-cyan-900/30 -z-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjViZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-40 -z-10"></div>
      
      <div className="container px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="h-4 w-4" />
            Advanced Cybersecurity Platform
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Safeguarding the <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Digital Frontier</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Stay informed with the latest cybersecurity threats, vulnerabilities, and best practices to protect your digital assets with our AI-powered platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg" asChild>
              <Link to="/threat-intelligence">
                Explore Threat Intelligence
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-2 border-purple-300 hover:bg-purple-50 dark:border-purple-600 dark:hover:bg-purple-900/20" asChild>
              <Link to="/security-assessments">
                <Brain className="mr-2 h-4 w-4" />
                Try AI Assistant
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center">
              <Shield className="text-purple-600 h-5 w-5 mr-2" />
              <span className="text-sm font-medium">AI-Powered Analysis</span>
            </div>
            <div className="flex items-center">
              <ShieldAlert className="text-blue-600 h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Real-time Intelligence</span>
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-75 blur"></div>
          <div className="relative rounded-lg bg-white dark:bg-gray-900 p-8 shadow-xl">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-mono text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Global Threat Intelligence Dashboard
                </h3>
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-2.5 py-0.5 text-xs font-medium text-white">
                  <Activity className="h-3 w-3 mr-1" />
                  Live Monitoring
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-lg p-3 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <ShieldAlert className="h-4 w-4" />
                    <span className="text-xs font-medium">Critical</span>
                  </div>
                  <div className="text-2xl font-bold">23</div>
                  <div className="text-xs opacity-90">Active threats today</div>
                </div>
                
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-3 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-xs font-medium">Rising</span>
                  </div>
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-xs opacity-90">New vulnerabilities</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Network Security Coverage</span>
                  <span className="text-sm text-purple-600 font-semibold">94%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <div className="h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse-subtle w-[94%]"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Endpoint Protection</span>
                  <span className="text-sm text-cyan-600 font-semibold">87%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <div className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse-subtle w-[87%]"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Cloud Security Posture</span>
                  <span className="text-sm text-amber-600 font-semibold">68%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <div className="h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 animate-pulse-subtle w-[68%]"></div>
                </div>
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">Latest Scan:</span>
                  <span className="font-mono text-xs">06/06/2025 14:23:47</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">Threats Neutralised:</span>
                  <span className="font-mono text-xs text-gradient-to-r from-purple-600 to-blue-600 font-medium">342</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">Global Coverage:</span>
                  <div className="flex items-center">
                    <Globe className="h-3 w-3 text-green-500 mr-1" />
                    <span className="font-mono text-xs">127 countries</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" size="sm" asChild>
                <Link to="/security-assessments">
                  Try AI Assistant
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
