
import { useState, useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Home/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Shield,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Lock,
  Eye,
  EyeOff,
  FileText,
  Phone,
  Mail,
  Calendar
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface SecurityChecklistItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
}

const SecurityAssessments = () => {
  const [passwordToCheck, setPasswordToCheck] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordScore, setPasswordScore] = useState(0);
  const [passwordFeedback, setPasswordFeedback] = useState<string[]>([]);
  const [securityScore, setSecurityScore] = useState(0);
  const [incidentReport, setIncidentReport] = useState({
    type: "",
    description: "",
    contact: "",
    urgency: "medium"
  });

  const [checklist, setChecklist] = useState<SecurityChecklistItem[]>([
    {
      id: "1",
      title: "Enable Two-Factor Authentication",
      description: "Add an extra layer of security to your important accounts",
      completed: false,
      priority: "high"
    },
    {
      id: "2",
      title: "Update All Software",
      description: "Ensure your operating system and applications are up to date",
      completed: false,
      priority: "high"
    },
    {
      id: "3",
      title: "Use Strong, Unique Passwords",
      description: "Create complex passwords for each account using a password manager",
      completed: false,
      priority: "high"
    },
    {
      id: "4",
      title: "Secure Your Wi-Fi Network",
      description: "Use WPA3 encryption and change default router passwords",
      completed: false,
      priority: "medium"
    },
    {
      id: "5",
      title: "Regular Data Backups",
      description: "Implement the 3-2-1 backup rule for important data",
      completed: false,
      priority: "medium"
    },
    {
      id: "6",
      title: "Review Privacy Settings",
      description: "Check and adjust privacy settings on social media and online accounts",
      completed: false,
      priority: "medium"
    },
    {
      id: "7",
      title: "Install Antivirus Software",
      description: "Use reputable antivirus software with real-time protection",
      completed: false,
      priority: "low"
    },
    {
      id: "8",
      title: "Email Security Training",
      description: "Learn to identify phishing emails and suspicious attachments",
      completed: false,
      priority: "low"
    }
  ]);

  const { toast } = useToast();

  useEffect(() => {
    document.title = "CyberShield | Security Dashboard";
  }, []);

  useEffect(() => {
    calculateSecurityScore();
  }, [checklist]);

  const calculatePasswordStrength = (password: string) => {
    let score = 0;
    const feedback = [];

    if (password.length >= 12) {
      score += 20;
    } else {
      feedback.push("Use at least 12 characters");
    }

    if (/[a-z]/.test(password)) score += 15;
    else feedback.push("Include lowercase letters");

    if (/[A-Z]/.test(password)) score += 15;
    else feedback.push("Include uppercase letters");

    if (/[0-9]/.test(password)) score += 15;
    else feedback.push("Include numbers");

    if (/[^A-Za-z0-9]/.test(password)) score += 20;
    else feedback.push("Include special characters");

    if (password.length >= 16) score += 15;

    setPasswordScore(Math.min(score, 100));
    setPasswordFeedback(feedback);
  };

  const calculateSecurityScore = () => {
    const completedItems = checklist.filter(item => item.completed);
    const highPriorityCompleted = completedItems.filter(item => item.priority === "high").length;
    const mediumPriorityCompleted = completedItems.filter(item => item.priority === "medium").length;
    const lowPriorityCompleted = completedItems.filter(item => item.priority === "low").length;

    const score = (highPriorityCompleted * 40) + (mediumPriorityCompleted * 20) + (lowPriorityCompleted * 10);
    setSecurityScore(Math.min(score, 100));
  };

  const toggleChecklistItem = (id: string) => {
    setChecklist(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const submitIncidentReport = () => {
    if (!incidentReport.description || !incidentReport.contact) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Incident Report Submitted",
      description: "Your security incident has been logged. We'll respond within 24 hours.",
    });

    setIncidentReport({
      type: "",
      description: "",
      contact: "",
      urgency: "medium"
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-600 bg-red-50 border-red-200";
      case "medium": return "text-amber-600 bg-amber-50 border-amber-200";
      case "low": return "text-green-600 bg-green-50 border-green-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const securityTips = [
    "Never share passwords via email or text messages",
    "Always verify unexpected requests for personal information",
    "Keep your software and operating system updated",
    "Use official app stores for downloading applications",
    "Be cautious when using public Wi-Fi networks"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-cyan-900/20">
          <div className="container px-4 sm:px-6">
            <div className="max-w-6xl mx-auto mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Security Dashboard
                </h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Monitor and improve your personal cybersecurity posture with our comprehensive dashboard tools.
              </p>
            </div>

            {/* Security Score Overview */}
            <div className="max-w-6xl mx-auto mb-8">
              <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6" />
                    Your Security Score
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Complete security checklist items to improve your score
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold">{securityScore}/100</div>
                    <div className="flex-1">
                      <Progress value={securityScore} className="h-3 bg-blue-400/30" />
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {securityScore >= 80 ? "Excellent" : securityScore >= 60 ? "Good" : securityScore >= 40 ? "Fair" : "Needs Improvement"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
              {/* Personal Security Checklist */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Personal Security Checklist
                  </CardTitle>
                  <CardDescription>
                    Complete these essential security steps to protect yourself online
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-80 overflow-y-auto">
                    {checklist.map((item) => (
                      <div key={item.id} className="flex items-start gap-3 p-3 rounded-lg border">
                        <Checkbox
                          checked={item.completed}
                          onCheckedChange={() => toggleChecklistItem(item.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className={`font-medium ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                              {item.title}
                            </h4>
                            <Badge className={`text-xs ${getPriorityColor(item.priority)}`}>
                              {item.priority}
                            </Badge>
                          </div>
                          <p className={`text-sm ${item.completed ? 'line-through text-muted-foreground' : 'text-muted-foreground'}`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Password Health Checker */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-blue-600" />
                    Password Health Checker
                  </CardTitle>
                  <CardDescription>
                    Test the strength of your passwords
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password to check strength"
                        value={passwordToCheck}
                        onChange={(e) => {
                          setPasswordToCheck(e.target.value);
                          calculatePasswordStrength(e.target.value);
                        }}
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    
                    {passwordToCheck && (
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Password Strength</span>
                            <span className="text-sm">{passwordScore}/100</span>
                          </div>
                          <Progress value={passwordScore} className="h-2" />
                        </div>
                        
                        {passwordFeedback.length > 0 && (
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Suggestions:</p>
                            {passwordFeedback.map((feedback, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <XCircle className="h-3 w-3 text-red-500" />
                                {feedback}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Security Tips */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    Quick Security Tips
                  </CardTitle>
                  <CardDescription>
                    Daily reminders to keep you secure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {securityTips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                        <Shield className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">{tip}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Incident Reporting Tool */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-red-600" />
                    Report Security Incident
                  </CardTitle>
                  <CardDescription>
                    Quickly report suspected security breaches or incidents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Incident Type</label>
                      <select
                        className="w-full p-2 border rounded-md"
                        value={incidentReport.type}
                        onChange={(e) => setIncidentReport(prev => ({ ...prev, type: e.target.value }))}
                      >
                        <option value="">Select incident type</option>
                        <option value="phishing">Phishing Email</option>
                        <option value="malware">Malware/Virus</option>
                        <option value="data-breach">Data Breach</option>
                        <option value="identity-theft">Identity Theft</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Description *</label>
                      <Textarea
                        placeholder="Describe the security incident in detail..."
                        value={incidentReport.description}
                        onChange={(e) => setIncidentReport(prev => ({ ...prev, description: e.target.value }))}
                        className="min-h-[80px]"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Contact Information *</label>
                      <Input
                        placeholder="Email or phone number"
                        value={incidentReport.contact}
                        onChange={(e) => setIncidentReport(prev => ({ ...prev, contact: e.target.value }))}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Urgency Level</label>
                      <select
                        className="w-full p-2 border rounded-md"
                        value={incidentReport.urgency}
                        onChange={(e) => setIncidentReport(prev => ({ ...prev, urgency: e.target.value }))}
                      >
                        <option value="low">Low - General inquiry</option>
                        <option value="medium">Medium - Suspected incident</option>
                        <option value="high">High - Active threat</option>
                        <option value="critical">Critical - Ongoing attack</option>
                      </select>
                    </div>
                    
                    <Button 
                      onClick={submitIncidentReport}
                      className="w-full bg-red-600 hover:bg-red-700"
                    >
                      Submit Incident Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SecurityAssessments;
