
import { useState, useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Home/Footer";
import { Button } from "@/components/ui/button";
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
  RefreshCw,
  Download,
  Brain,
  Target,
  Eye,
  XCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

const SecurityAssessments = () => {
  const [query, setQuery] = useState("");
  const [analysis, setAnalysis] = useState<null | {
    isThreat: boolean;
    confidence: number;
    threatTypes: string[];
    riskLevel: "low" | "medium" | "high" | "critical";
    explanation: string;
    detectedIndicators: string[];
    recommendations: string[];
    scanTime: string;
  }>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [assessmentType, setAssessmentType] = useState<"threat-analysis" | "knowledge-test">("threat-analysis");
  const { toast } = useToast();

  // Update the page title
  useEffect(() => {
    document.title = "CyberShield | Security Assessments";
  }, []);

  const handleThreatAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast({
        title: "Input required",
        description: "Please enter content to analyse for threats",
        variant: "destructive"
      });
      return;
    }
    
    setIsAnalyzing(true);
    setProgress(0);
    
    // Simulate analysis progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);
    
    // Simulate ChatGPT analysis
    setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      
      // Enhanced threat detection logic
      const lowerQuery = query.toLowerCase();
      const threatKeywords = ["malware", "virus", "trojan", "phishing", "exploit", "hack", "breach", "attack", "ransomware", "botnet"];
      const suspiciousPatterns = ["download.exe", "click here", "urgent action", "verify account", "suspended", "bitcoin", "cryptocurrency"];
      const urls = query.match(/https?:\/\/[^\s]+/g) || [];
      const emails = query.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
      
      const foundThreatKeywords = threatKeywords.filter(keyword => lowerQuery.includes(keyword));
      const foundSuspiciousPatterns = suspiciousPatterns.filter(pattern => lowerQuery.includes(pattern));
      const hasSuspiciousUrls = urls.some(url => url.includes("bit.ly") || url.includes("tinyurl") || url.length > 50);
      const hasSuspiciousEmails = emails.some(email => email.includes("noreply") || email.includes("admin"));
      
      const isThreat = foundThreatKeywords.length > 0 || foundSuspiciousPatterns.length > 0 || hasSuspiciousUrls || hasSuspiciousEmails;
      
      let threatTypes: string[] = [];
      let detectedIndicators: string[] = [];
      let riskLevel: "low" | "medium" | "high" | "critical" = "low";
      
      if (foundThreatKeywords.length > 0) {
        threatTypes.push("Malicious Keywords");
        detectedIndicators.push(...foundThreatKeywords.map(k => `Threat keyword: "${k}"`));
      }
      
      if (foundSuspiciousPatterns.length > 0) {
        threatTypes.push("Suspicious Patterns");
        detectedIndicators.push(...foundSuspiciousPatterns.map(p => `Suspicious pattern: "${p}"`));
      }
      
      if (hasSuspiciousUrls) {
        threatTypes.push("Suspicious URLs");
        detectedIndicators.push(...urls.filter(url => url.includes("bit.ly") || url.includes("tinyurl") || url.length > 50));
      }
      
      if (hasSuspiciousEmails) {
        threatTypes.push("Suspicious Email Addresses");
        detectedIndicators.push(...emails.filter(email => email.includes("noreply") || email.includes("admin")));
      }
      
      // Determine risk level
      if (foundThreatKeywords.length >= 2 || foundSuspiciousPatterns.length >= 2) {
        riskLevel = "critical";
      } else if (foundThreatKeywords.length > 0 || foundSuspiciousPatterns.length > 0 || hasSuspiciousUrls) {
        riskLevel = "high";
      } else if (hasSuspiciousEmails || threatTypes.length > 0) {
        riskLevel = "medium";
      }
      
      const confidence = isThreat ? 
        Math.min(95, 60 + (foundThreatKeywords.length * 10) + (foundSuspiciousPatterns.length * 8) + (hasSuspiciousUrls ? 15 : 0)) :
        Math.max(85, 95 - (urls.length * 2) - (emails.length * 1));
      
      const mockAnalysis = {
        isThreat,
        confidence,
        threatTypes,
        riskLevel,
        scanTime: (1.5 + Math.random() * 2).toFixed(2) + " seconds",
        explanation: isThreat ? 
          `Analysis indicates this content contains ${threatTypes.length} type(s) of security threats. The detected patterns match known malicious indicators and should be treated with extreme caution. ${foundThreatKeywords.length > 0 ? 'Known threat keywords were identified. ' : ''}${foundSuspiciousPatterns.length > 0 ? 'Suspicious patterns commonly used in cyber attacks were found. ' : ''}${hasSuspiciousUrls ? 'Potentially malicious URLs detected. ' : ''}This content poses a ${riskLevel} risk to your security.` :
          `Analysis indicates this content appears to be safe with no immediate security threats detected. However, ${urls.length > 0 ? `${urls.length} URL(s) were found - always verify links before clicking. ` : ''}${emails.length > 0 ? `${emails.length} email address(es) were found - be cautious with unsolicited communications. ` : ''}Continue to exercise standard security precautions when interacting with any online content.`,
        detectedIndicators,
        recommendations: isThreat ? [
          "Do not interact with any links or attachments in this content",
          "Report this content to your IT security team immediately",
          "Run a full system scan if you've already interacted with this content",
          "Block the sender if this came via email or message",
          "Document this incident for security awareness training"
        ] : [
          "Continue following standard security best practices",
          "Verify the legitimacy of any links before clicking",
          "Be cautious with personal information sharing",
          "Keep your security software updated",
          "Report any suspicious activity to relevant authorities"
        ]
      };
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
      setProgress(0);
      
      toast({
        title: "Analysis Complete",
        description: `Threat ${isThreat ? 'detected' : 'not detected'} (${confidence}% confidence)`,
        variant: isThreat ? "destructive" : "default"
      });
    }, 2500);
  };
  
  const getRiskLevelBadge = (level: string) => {
    switch (level) {
      case "critical":
        return <Badge className="bg-red-600 hover:bg-red-700 text-white">{level}</Badge>;
      case "high":
        return <Badge className="bg-red-500 hover:bg-red-600 text-white">{level}</Badge>;
      case "medium":
        return <Badge className="bg-amber-500 hover:bg-amber-600 text-white">{level}</Badge>;
      case "low":
        return <Badge variant="outline" className="text-green-600 border-green-600">{level}</Badge>;
      default:
        return <Badge variant="outline">{level}</Badge>;
    }
  };

  const generateReport = () => {
    if (!analysis) return;
    
    const reportData = {
      timestamp: new Date().toISOString(),
      query: query,
      analysis: analysis,
      assessmentType: "ChatGPT Threat Analysis"
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `security-assessment-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Report Downloaded",
      description: "Security assessment report has been saved to your device"
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-cyber-blue/5">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-cyber-teal" />
                <h1 className="text-4xl font-bold tracking-tight">Security Assessments</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Test your cybersecurity knowledge and analyse content for potential threats using advanced threat detection.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 mb-12">
              <Card className={`cursor-pointer transition-all hover:shadow-lg ${assessmentType === "threat-analysis" ? "ring-2 ring-cyber-teal" : ""}`}
                    onClick={() => setAssessmentType("threat-analysis")}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-2">
                      <Eye className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle>ChatGPT Threat Analysis</CardTitle>
                      <CardDescription>Analyse content for security threats and malicious indicators</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className={`cursor-pointer transition-all hover:shadow-lg ${assessmentType === "knowledge-test" ? "ring-2 ring-cyber-teal" : ""}`}
                    onClick={() => setAssessmentType("knowledge-test")}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2">
                      <Brain className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>Knowledge Assessment</CardTitle>
                      <CardDescription>Test your understanding of cybersecurity concepts</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {assessmentType === "threat-analysis" && (
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-red-600" />
                    ChatGPT Threat Analysis
                  </CardTitle>
                  <CardDescription>
                    Paste suspicious content, URLs, emails, or text to analyse for potential security threats
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleThreatAnalysis} className="space-y-4">
                    <div className="flex flex-col space-y-2">
                      <Textarea
                        placeholder="Paste content here to analyse for threats (emails, URLs, suspicious text, etc.)..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="min-h-[120px]"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        className="bg-red-600 hover:bg-red-700"
                        disabled={isAnalyzing}
                      >
                        {isAnalyzing ? (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                            Analysing Threats...
                          </>
                        ) : (
                          <>
                            <Search className="mr-2 h-4 w-4" />
                            Analyse for Threats
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                  
                  {isAnalyzing && (
                    <div className="mt-6 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>ChatGPT threat analysis in progress...</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Scanning for malicious patterns, suspicious URLs, and threat indicators...
                      </p>
                    </div>
                  )}
                  
                  {analysis && !isAnalyzing && (
                    <div className="mt-8 border-t pt-6">
                      <div className="flex items-center justify-between gap-2 mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`rounded-full p-2 ${analysis.isThreat ? 'bg-red-100 dark:bg-red-900/30' : 'bg-green-100 dark:bg-green-900/30'}`}>
                            {analysis.isThreat ? 
                              <XCircle className="h-6 w-6 text-red-600" /> : 
                              <CheckCircle2 className="h-6 w-6 text-green-600" />
                            }
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">
                              {analysis.isThreat ? "⚠️ Threat Detected" : "✅ No Threats Detected"}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              {getRiskLevelBadge(analysis.riskLevel)}
                              <span className="text-sm text-muted-foreground">
                                {analysis.confidence}% confidence
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" onClick={generateReport}>
                          <Download className="h-3 w-3 mr-1" />
                          Download Report
                        </Button>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <div className="text-sm text-muted-foreground">Confidence Level</div>
                          <div className="text-xl font-semibold">{analysis.confidence}%</div>
                        </div>
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <div className="text-sm text-muted-foreground">Scan Time</div>
                          <div className="text-xl font-semibold">{analysis.scanTime}</div>
                        </div>
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <div className="text-sm text-muted-foreground">Threat Types</div>
                          <div className="text-xl font-semibold">{analysis.threatTypes.length}</div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-blue-500" />
                            Analysis Explanation:
                          </h4>
                          <p className="text-sm bg-secondary/30 p-4 rounded-lg">{analysis.explanation}</p>
                        </div>
                        
                        {analysis.threatTypes.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <Target className="h-4 w-4 text-red-500" />
                              Detected Threat Types:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {analysis.threatTypes.map((type, index) => (
                                <Badge key={index} variant="destructive">{type}</Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {analysis.detectedIndicators.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-amber-500" />
                              Specific Threat Indicators Found:
                            </h4>
                            <ul className="space-y-1">
                              {analysis.detectedIndicators.map((indicator, index) => (
                                <li key={index} className="text-sm bg-red-50 dark:bg-red-900/20 p-2 rounded border-l-4 border-red-500">
                                  <code className="text-red-700 dark:text-red-300">{indicator}</code>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            Security Recommendations:
                          </h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {analysis.recommendations.map((recommendation, index) => (
                              <li key={index} className="text-sm">{recommendation}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {assessmentType === "knowledge-test" && (
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    Cybersecurity Knowledge Assessment
                  </CardTitle>
                  <CardDescription>
                    Test your understanding of cybersecurity concepts with interactive assessments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Brain className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Knowledge Assessment Coming Soon</h3>
                    <p className="text-muted-foreground mb-6">
                      Interactive cybersecurity knowledge tests and assessments will be available here.
                      For now, use the ChatGPT Threat Analysis to test threat detection skills.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setAssessmentType("threat-analysis")}
                    >
                      Try Threat Analysis Instead
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SecurityAssessments;
