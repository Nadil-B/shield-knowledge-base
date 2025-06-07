
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Home/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Brain,
  Send,
  Bot,
  User,
  Shield,
  AlertTriangle,
  TrendingUp,
  BookOpen,
  Zap,
  MessageSquare
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface ThreatAlert {
  id: string;
  severity: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  timestamp: Date;
}

const CyberAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Hello! I\'m your AI cybersecurity assistant. I can help you with security questions, threat analysis, best practices, and provide real-time security insights. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [threatAlerts] = useState<ThreatAlert[]>([
    {
      id: '1',
      severity: 'high',
      title: 'Critical Security Update',
      description: 'New ransomware variant detected targeting Windows systems',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    {
      id: '2',
      severity: 'medium',
      title: 'Phishing Campaign Alert',
      description: 'Increased phishing attempts using fake banking emails',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000)
    },
    {
      id: '3',
      severity: 'low',
      title: 'Software Vulnerability',
      description: 'Non-critical vulnerability found in popular browser extension',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000)
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "CyberShield | AI Security Assistant";
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    // Security questions responses
    if (lowerInput.includes('password') || lowerInput.includes('passwords')) {
      return "For strong passwords, follow these guidelines:\n\n• Use at least 12 characters\n• Include uppercase, lowercase, numbers, and symbols\n• Avoid personal information\n• Use unique passwords for each account\n• Consider using a password manager\n• Enable two-factor authentication wherever possible\n\nWould you like specific recommendations for password managers or 2FA setup?";
    }
    
    if (lowerInput.includes('phishing') || lowerInput.includes('email')) {
      return "To protect against phishing attacks:\n\n• Verify sender addresses carefully\n• Look for urgent language or threats\n• Check for spelling/grammar errors\n• Hover over links before clicking\n• Never provide credentials via email\n• Use email filtering and anti-phishing tools\n• When in doubt, contact the organization directly\n\nI can help you analyze suspicious emails if you share the details (without sensitive info).";
    }
    
    if (lowerInput.includes('malware') || lowerInput.includes('virus')) {
      return "Malware protection strategies:\n\n• Keep your OS and software updated\n• Use reputable antivirus software\n• Avoid suspicious downloads and websites\n• Be cautious with email attachments\n• Regular system scans\n• Backup your important data\n• Use application whitelisting when possible\n\nIf you suspect infection, disconnect from the internet and run a full system scan immediately.";
    }
    
    if (lowerInput.includes('wifi') || lowerInput.includes('network')) {
      return "Network security best practices:\n\n• Use WPA3 encryption (or WPA2 minimum)\n• Change default router passwords\n• Enable network firewalls\n• Disable WPS if not needed\n• Use VPN on public networks\n• Regularly update router firmware\n• Hide network SSID if desired\n• Monitor connected devices\n\nNeed help with specific router configuration or VPN recommendations?";
    }
    
    if (lowerInput.includes('backup') || lowerInput.includes('data')) {
      return "Data backup and protection:\n\n• Follow the 3-2-1 rule: 3 copies, 2 different media, 1 offsite\n• Automate regular backups\n• Test restore procedures regularly\n• Encrypt sensitive backups\n• Consider cloud and local storage\n• Document your backup strategy\n• Keep backups disconnected when not in use\n\nThis protects against ransomware, hardware failure, and data loss.";
    }
    
    if (lowerInput.includes('social media') || lowerInput.includes('privacy')) {
      return "Social media security tips:\n\n• Review and adjust privacy settings regularly\n• Limit personal information sharing\n• Be selective with friend/connection requests\n• Think before posting location data\n• Use strong, unique passwords\n• Enable two-factor authentication\n• Be aware of social engineering attempts\n• Regular security checkups\n\nWould you like guidance on specific platform privacy settings?";
    }
    
    if (lowerInput.includes('business') || lowerInput.includes('company')) {
      return "Business cybersecurity essentials:\n\n• Implement security awareness training\n• Use endpoint detection and response (EDR)\n• Establish incident response procedures\n• Regular security assessments and audits\n• Network segmentation and access controls\n• Backup and disaster recovery plans\n• Vendor risk management\n• Compliance with relevant regulations\n\nI can provide more specific guidance based on your business size and industry.";
    }
    
    // General responses
    return "I understand your cybersecurity concern. Here are some general recommendations:\n\n• Keep all software updated and patched\n• Use strong, unique passwords with 2FA\n• Be cautious of suspicious emails and links\n• Regular security awareness training\n• Implement layered security defenses\n• Monitor for unusual activity\n• Have an incident response plan\n\nCould you provide more specific details about your security question? I can offer more targeted advice based on your particular situation or concerns.";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(inputMessage),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const quickQuestions = [
    "How do I create a strong password?",
    "What is phishing and how do I avoid it?",
    "How do I secure my WiFi network?",
    "What should I do if I think I have malware?",
    "How do I protect my social media accounts?"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-cyan-900/20">
          <div className="container px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Security Assistant
                </h1>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Get instant expert advice on cybersecurity questions, threat analysis, and protection strategies.
              </p>

              <div className="grid gap-6 lg:grid-cols-4">
                {/* Threat Alerts Sidebar */}
                <div className="lg:col-span-1">
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                        Live Threat Alerts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {threatAlerts.map((alert) => (
                          <div key={alert.id} className="p-3 rounded-lg border">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={`text-xs ${getSeverityColor(alert.severity)}`}>
                                {alert.severity.toUpperCase()}
                              </Badge>
                            </div>
                            <h4 className="font-medium text-sm mb-1">{alert.title}</h4>
                            <p className="text-xs text-muted-foreground mb-2">{alert.description}</p>
                            <p className="text-xs text-muted-foreground">
                              {alert.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Zap className="h-5 w-5 text-green-600" />
                        Quick Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                          <Shield className="h-3 w-3 mr-2" />
                          Check Password Strength
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                          <TrendingUp className="h-3 w-3 mr-2" />
                          Security Assessment
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                          <BookOpen className="h-3 w-3 mr-2" />
                          Learn About Threats
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Main Chat Interface */}
                <div className="lg:col-span-3">
                  <Card className="h-[600px] flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5" />
                        Chat with AI Security Expert
                      </CardTitle>
                      <CardDescription>
                        Ask me anything about cybersecurity, threats, or protection strategies
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col">
                      {/* Messages Area */}
                      <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        {messages.map((message) => (
                          <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                                message.type === 'user' 
                                  ? 'bg-blue-600 text-white' 
                                  : 'bg-purple-600 text-white'
                              }`}>
                                {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                              </div>
                              <div className={`p-3 rounded-lg ${
                                message.type === 'user'
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-white dark:bg-gray-800 border shadow-sm'
                              }`}>
                                <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                                <div className={`text-xs mt-1 ${
                                  message.type === 'user' ? 'text-blue-100' : 'text-muted-foreground'
                                }`}>
                                  {message.timestamp.toLocaleTimeString()}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        {isLoading && (
                          <div className="flex gap-3 justify-start">
                            <div className="flex gap-3 max-w-[80%]">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-purple-600 text-white">
                                <Bot className="h-4 w-4" />
                              </div>
                              <div className="p-3 rounded-lg bg-white dark:bg-gray-800 border shadow-sm">
                                <div className="flex items-center gap-2">
                                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
                                  <span className="text-sm text-muted-foreground">AI is thinking...</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>

                      {/* Quick Questions */}
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-2">Quick questions:</p>
                        <div className="flex flex-wrap gap-2">
                          {quickQuestions.map((question, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="text-xs"
                              onClick={() => setInputMessage(question)}
                            >
                              {question}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Input Area */}
                      <div className="flex gap-2">
                        <Textarea
                          placeholder="Ask me about cybersecurity threats, protection strategies, or any security concerns..."
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleSendMessage();
                            }
                          }}
                          className="flex-1 min-h-[60px] resize-none"
                        />
                        <Button 
                          onClick={handleSendMessage}
                          disabled={!inputMessage.trim() || isLoading}
                          className="px-4"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CyberAI;
