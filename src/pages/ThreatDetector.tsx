
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
  RefreshCw,
  Download,
  ExternalLink,
  Zap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const ThreatDetector = () => {
  const [query, setQuery] = useState("");
  const [analysis, setAnalysis] = useState<null | {
    threatLevel: "low" | "medium" | "high" | "critical";
    description: string;
    recommendations: string[];
    detectedThreats: string[];
    confidence: number;
    scanTime: string;
  }>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [recentThreats, setRecentThreats] = useState([
    {
      id: "RT-2025-0452",
      title: "New Ransomware Variant Targeting Healthcare",
      severity: "critical",
      timestamp: "10 minutes ago",
      type: "Ransomware",
      iocs: ["malware.exe", "ransom.txt"]
    },
    {
      id: "RT-2025-0451",
      title: "Critical Vulnerability in Popular CMS",
      severity: "high",
      timestamp: "35 minutes ago",
      type: "Vulnerability",
      iocs: ["CVE-2025-7890", "exploit.php"]
    },
    {
      id: "RT-2025-0450",
      title: "DDoS Attack Campaign Against Financial Institutions",
      severity: "medium",
      timestamp: "1 hour ago",
      type: "DDoS",
      iocs: ["botnet-c2.com", "ddos-tool.py"]
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
        description: "Please enter a URL, file hash, or text to analyse",
        variant: "destructive"
      });
      return;
    }
    
    setIsAnalyzing(true);
    setProgress(0);
    
    // Simulate realistic analysis progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
    
    // Simulate AI analysis with a timeout
    setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      
      // Enhanced mock analysis with more realistic data
      const containsThreatKeywords = query.toLowerCase().includes("malware") || 
                                   query.toLowerCase().includes("attack") || 
                                   query.toLowerCase().includes("exploit") ||
                                   query.toLowerCase().includes("virus");
      
      const containsVulnKeywords = query.toLowerCase().includes("vulnerability") || 
                                 query.toLowerCase().includes("cve-") ||
                                 query.toLowerCase().includes("weakness");
      
      const mockAnalysis = {
        threatLevel: containsThreatKeywords ? "high" : 
                    containsVulnKeywords ? "medium" : "low",
        confidence: containsThreatKeywords ? 87 : containsVulnKeywords ? 74 : 92,
        scanTime: "2.34 seconds",
        description: containsThreatKeywords ? 
          "Our AI model has detected patterns consistent with malicious activity. The analysed content contains signatures matching known threat vectors and should be treated with caution." :
          containsVulnKeywords ?
          "Potential security vulnerabilities identified in the submitted content. While not immediately malicious, these weaknesses could be exploited by threat actors." :
          "No immediate threats detected. The analysed content appears to be clean, though continued vigilance is recommended as threats evolve constantly.",
        recommendations: containsThreatKeywords ? [
          "Immediately isolate affected systems from the network",
          "Run comprehensive antivirus scans with updated definitions",
          "Check for indicators of compromise (IoCs) across your infrastructure",
          "Consider engaging incident response team if threats are confirmed",
          "Document all findings for further analysis"
        ] : containsVulnKeywords ? [
          "Apply latest security patches and updates",
          "Conduct vulnerability assessment of affected systems",
          "Review access controls and authentication mechanisms",
          "Monitor network traffic for unusual activity",
          "Implement additional security controls as needed"
        ] : [
          "Maintain current security posture and monitoring",
          "Keep all software updated with latest patches",
          "Continue regular security awareness training",
          "Perform periodic security assessments",
          "Stay informed about emerging threats"
        ],
        detectedThreats: containsThreatKeywords ? [
          "Trojan.GenericKD.12345678",
          "Exploit.CVE-2025-0123",
          "Backdoor.RemoteAccess"
        ] : containsVulnKeywords ? [
          "CVE-2025-7890 - Authentication Bypass",
          "Weak encryption implementation"
        ] : []
      };
      
      setAnalysis(mockAnalysis as any);
      setIsAnalyzing(false);
      setProgress(0);
      
      toast({
        title: "Analysis Complete",
        description: `Threat level: ${mockAnalysis.threatLevel} (${mockAnalysis.confidence}% confidence)`,
        variant: mockAnalysis.threatLevel === "high" ? "destructive" : 
                 mockAnalysis.threatLevel === "medium" ? "default" : "default"
      });
    }, 3000);
  };
  
  const getThreatLevelBadge = (level: string) => {
    switch (level) {
      case "critical":
        return <Badge className="bg-cyber-accent hover:bg-cyber-accent/90">{level}</Badge>;
      case "high":
        return <Badge className="bg-red-500 hover:bg-red-600">{level}</Badge>;
      case "medium":
        return <Badge className="bg-amber-500 hover:bg-amber-600">{level}</Badge>;
      case "low":
        return <Badge variant="outline" className="text-green-500 border-green-500">{level}</Badge>;
      default:
        return <Badge variant="outline">{level}</Badge>;
    }
  };

  const generateReport = () => {
    if (!analysis) return;
    
    const reportData = {
      timestamp: new Date().toISOString(),
      query: query,
      analysis: analysis
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `threat-analysis-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Report Downloaded",
      description: "Threat analysis report has been saved to your device"
    });
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
                Our advanced AI model analyses URLs, file hashes, or text to identify potential
                cybersecurity threats and provide real-time security insights.
              </p>
            </div>

            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle>Analyse for Threats</CardTitle>
                <CardDescription>
                  Enter a URL, file hash, or paste suspicious text for analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <Textarea
                      placeholder="Enter URL, file hash, or paste text content to analyse..."
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
                          Analysing...
                        </>
                      ) : (
                        <>
                          <Search className="mr-2 h-4 w-4" />
                          Analyse Threats
                        </>
                      )}
                    </Button>
                  </div>
                </form>
                
                {isAnalyzing && (
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Analysis in progress...</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      Scanning against threat intelligence databases...
                    </p>
                  </div>
                )}
                
                {analysis && !isAnalyzing && (
                  <div className="mt-8 border-t pt-6">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">Analysis Results</h3>
                        {getThreatLevelBadge(analysis.threatLevel)}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={generateReport}>
                          <Download className="h-3 w-3 mr-1" />
                          Download Report
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link to="/threat-intelligence">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Learn More
                          </Link>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-secondary/50 rounded-lg p-3">
                        <div className="text-sm text-muted-foreground">Confidence Level</div>
                        <div className="text-lg font-semibold">{analysis.confidence}%</div>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-3">
                        <div className="text-sm text-muted-foreground">Scan Time</div>
                        <div className="text-lg font-semibold">{analysis.scanTime}</div>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-3">
                        <div className="text-sm text-muted-foreground">Threats Found</div>
                        <div className="text-lg font-semibold">{analysis.detectedThreats.length}</div>
                      </div>
                    </div>
                    
                    <p className="mb-4">{analysis.description}</p>
                    
                    {analysis.detectedThreats.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                          Detected Threats:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {analysis.detectedThreats.map((threat, index) => (
                            <li key={index} className="text-cyber-accent font-mono text-sm">
                              {threat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Recommendations:
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {analysis.recommendations.map((recommendation, index) => (
                          <li key={index} className="text-sm">{recommendation}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="max-w-3xl mx-auto mt-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-amber-500" />
                Recent Threat Alerts
              </h2>
              <div className="space-y-4">
                {recentThreats.map((threat) => (
                  <Card key={threat.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <AlertTriangle 
                            className={`h-5 w-5 ${
                              threat.severity === "critical" ? "text-cyber-accent" : 
                              threat.severity === "high" ? "text-red-500" : 
                              "text-amber-500"
                            }`} 
                          />
                          <CardTitle className="text-lg">{threat.title}</CardTitle>
                        </div>
                        {getThreatLevelBadge(threat.severity)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{threat.timestamp}</span>
                        <span className="mx-2">•</span>
                        <span className="font-mono">{threat.id}</span>
                        <span className="mx-2">•</span>
                        <Badge variant="outline" className="text-xs">{threat.type}</Badge>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-muted-foreground">IoCs: </span>
                        <span className="text-xs font-mono">{threat.iocs.join(", ")}</span>
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
