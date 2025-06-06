
import { useState, useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Home/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  AlertTriangle,
  Shield,
  Search,
  AlertCircle,
  CheckCircle2,
  Clock,
  FileText,
  RefreshCw
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

const ThreatDetector = () => {
  const [query, setQuery] = useState("");
  const [analysis, setAnalysis] = useState<null | {
    threatLevel: "low" | "medium" | "high" | "critical";
    description: string;
    recommendations: string[];
    detectedThreats: string[];
  }>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recentThreats, setRecentThreats] = useState([
    {
      id: "RT-2025-0452",
      title: "New Ransomware Variant Targeting Healthcare",
      severity: "critical",
      timestamp: "10 minutes ago"
    },
    {
      id: "RT-2025-0451",
      title: "Critical Vulnerability in Popular CMS",
      severity: "high",
      timestamp: "35 minutes ago"
    },
    {
      id: "RT-2025-0450",
      title: "DDoS Attack Campaign Against Financial Institutions",
      severity: "medium",
      timestamp: "1 hour ago"
    }
  ]);
  const { toast } = useToast();

  // Update the page title
  useEffect(() => {
    document.title = "CyberShield | AI Threat Detector";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast({
        title: "Input required",
        description: "Please enter a URL, file hash, or text to analyze",
        variant: "destructive"
      });
      return;
    }
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis with a timeout
    setTimeout(() => {
      // This is a mock response - in a real application, 
      // this would come from an actual AI model API
      const mockAnalysis = {
        threatLevel: query.includes("malware") || query.includes("attack") ? 
          "high" : query.includes("vulnerability") ? 
          "medium" : "low",
        description: `The AI model has analyzed the provided information and identified potential security concerns. ${
          query.includes("malware") ? 
          "Malicious code patterns were detected that match known malware signatures." : 
          query.includes("vulnerability") ? 
          "Potential security vulnerabilities were found that could be exploited." :
          "No immediate threats were detected, but some security recommendations are provided."
        }`,
        recommendations: [
          "Update all software to the latest security patches",
          "Implement multi-factor authentication for all accounts",
          "Review network traffic logs for suspicious activities",
          "Scan systems with updated antivirus definitions"
        ],
        detectedThreats: query.includes("malware") ? 
          ["Trojan.GenericKD.12345678", "Exploit.CVE-2025-0123"] : 
          query.includes("vulnerability") ? 
          ["CVE-2025-7890 - Authentication Bypass"] : 
          []
      };
      
      setAnalysis(mockAnalysis as any);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: `Threat level: ${mockAnalysis.threatLevel}`,
        variant: mockAnalysis.threatLevel === "high" ? "destructive" : 
                 mockAnalysis.threatLevel === "medium" ? "default" : "default"
      });
    }, 2500);
  };
  
  const getThreatLevelBadge = (level: string) => {
    switch (level) {
      case "critical":
        return <Badge className="bg-cyber-accent hover:bg-cyber-accent/90">{level}</Badge>;
      case "high":
        return <Badge className="bg-amber-500 hover:bg-amber-600">{level}</Badge>;
      case "medium":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">{level}</Badge>;
      case "low":
        return <Badge variant="outline" className="text-green-500 border-green-500">{level}</Badge>;
      default:
        return <Badge variant="outline">{level}</Badge>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-cyber-blue/5">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-cyber-teal" />
                <h1 className="text-4xl font-bold tracking-tight">AI Threat Detector</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Our advanced AI model analyzes URLs, file hashes, or text to identify potential
                cybersecurity threats and provide real-time security insights.
              </p>
            </div>

            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle>Analyze for Threats</CardTitle>
                <CardDescription>
                  Enter a URL, file hash, or paste suspicious text for analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <Textarea
                      placeholder="Enter URL, file hash, or paste text content to analyze..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="min-h-[120px]"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="bg-cyber-teal hover:bg-cyber-teal/90"
                      disabled={isAnalyzing}
                    >
                      {isAnalyzing ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Search className="mr-2 h-4 w-4" />
                          Analyze Threats
                        </>
                      )}
                    </Button>
                  </div>
                </form>
                
                {isAnalyzing && (
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Analysis in progress...</span>
                      <span>Please wait</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                )}
                
                {analysis && !isAnalyzing && (
                  <div className="mt-8 border-t pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-lg font-semibold">Analysis Results</h3>
                      <div>
                        {getThreatLevelBadge(analysis.threatLevel)}
                      </div>
                    </div>
                    
                    <p className="mb-4">{analysis.description}</p>
                    
                    {analysis.detectedThreats.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Detected Threats:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {analysis.detectedThreats.map((threat, index) => (
                            <li key={index} className="text-cyber-accent">
                              {threat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold mb-2">Recommendations:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {analysis.recommendations.map((recommendation, index) => (
                          <li key={index}>{recommendation}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="max-w-3xl mx-auto mt-12">
              <h2 className="text-2xl font-bold mb-6">Recent Threat Alerts</h2>
              <div className="space-y-4">
                {recentThreats.map((threat) => (
                  <Card key={threat.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <AlertTriangle 
                            className={`h-5 w-5 ${
                              threat.severity === "critical" ? "text-cyber-accent" : 
                              threat.severity === "high" ? "text-amber-500" : 
                              "text-yellow-500"
                            }`} 
                          />
                          <CardTitle className="text-lg">{threat.title}</CardTitle>
                        </div>
                        {getThreatLevelBadge(threat.severity)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{threat.timestamp}</span>
                        <span className="mx-2">•</span>
                        <span className="font-mono">{threat.id}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" size="sm" className="text-xs">
                        <FileText className="h-3 w-3 mr-1" />
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThreatDetector;
