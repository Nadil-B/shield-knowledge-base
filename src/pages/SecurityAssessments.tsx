
import { useState, useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Home/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
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
  XCircle,
  MessageSquare,
  Bot,
  User
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the most common type of cyber attack targeting individuals?",
    options: ["SQL Injection", "Phishing", "DDoS Attack", "Buffer Overflow"],
    correctAnswer: 1,
    explanation: "Phishing attacks are the most common, targeting individuals through deceptive emails and websites to steal credentials."
  },
  {
    id: 2,
    question: "Which password practice is most secure?",
    options: ["Using the same password everywhere", "Writing passwords on sticky notes", "Using a unique, complex password for each account", "Sharing passwords with trusted friends"],
    correctAnswer: 2,
    explanation: "Using unique, complex passwords for each account prevents credential stuffing attacks and limits damage if one account is compromised."
  },
  {
    id: 3,
    question: "What does 'HTTPS' indicate about a website?",
    options: ["It's faster than HTTP", "It's encrypted and more secure", "It's hosted on a government server", "It's free to use"],
    correctAnswer: 1,
    explanation: "HTTPS encrypts data transmission between your browser and the website, protecting sensitive information from interception."
  },
  {
    id: 4,
    question: "What is two-factor authentication (2FA)?",
    options: ["Using two different passwords", "An additional security layer requiring a second verification method", "Having two user accounts", "Logging in twice"],
    correctAnswer: 1,
    explanation: "2FA adds an extra security layer by requiring something you know (password) and something you have (phone, token, etc.)."
  },
  {
    id: 5,
    question: "What should you do if you receive a suspicious email attachment?",
    options: ["Open it to see what it contains", "Forward it to friends for verification", "Don't open it and report it as spam", "Download it but don't run it"],
    correctAnswer: 2,
    explanation: "Never open suspicious attachments. They often contain malware. Report them as spam and delete the email."
  },
  {
    id: 6,
    question: "What is a VPN primarily used for?",
    options: ["Making internet faster", "Creating secure, encrypted connections over public networks", "Blocking all advertisements", "Increasing download speeds"],
    correctAnswer: 1,
    explanation: "VPNs create encrypted tunnels for your internet traffic, protecting your data on public Wi-Fi and masking your location."
  },
  {
    id: 7,
    question: "What is social engineering in cybersecurity?",
    options: ["Building social media platforms", "Manipulating people to reveal confidential information", "Engineering social networks", "Creating user interfaces"],
    correctAnswer: 1,
    explanation: "Social engineering exploits human psychology to trick people into revealing sensitive information or performing actions that compromise security."
  },
  {
    id: 8,
    question: "How often should you update your software and operating system?",
    options: ["Once a year", "Only when it stops working", "As soon as updates are available", "Never, updates can break things"],
    correctAnswer: 2,
    explanation: "Regular updates patch security vulnerabilities. Enable automatic updates when possible to stay protected against the latest threats."
  },
  {
    id: 9,
    question: "What is malware?",
    options: ["Poorly written software", "Malicious software designed to harm or exploit devices", "Software that's hard to use", "Expensive software"],
    correctAnswer: 1,
    explanation: "Malware is malicious software including viruses, trojans, ransomware, and spyware designed to damage, steal data, or gain unauthorized access."
  },
  {
    id: 10,
    question: "What's the safest way to connect to public Wi-Fi?",
    options: ["Connect directly without any protection", "Use a VPN for all internet activity", "Only check email", "Turn off your firewall"],
    correctAnswer: 1,
    explanation: "Always use a VPN on public Wi-Fi to encrypt your data. Avoid accessing sensitive accounts and consider using your mobile hotspot instead."
  }
];

const SecurityAssessments = () => {
  const [activeTab, setActiveTab] = useState<"ai-chat" | "quiz">("ai-chat");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Hello! I'm your advanced cybersecurity AI assistant. I can help you with threat analysis, security best practices, vulnerability assessments, incident response guidance, and much more. What would you like to know about cybersecurity?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  
  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    document.title = "CyberShield | AI Assistant & Security Quiz";
  }, []);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: chatInput,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatInput("");
    setIsThinking(true);

    // Simulate AI processing
    setTimeout(() => {
      const aiResponse = generateAIResponse(chatInput);
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, aiMessage]);
      setIsThinking(false);
    }, 1500 + Math.random() * 2000);
  };

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("password")) {
      return "Password security is crucial! Here are my recommendations: Use unique, complex passwords for each account (12+ characters with mixed case, numbers, and symbols). Enable two-factor authentication wherever possible. Consider using a password manager like Bitwarden or 1Password. Avoid common patterns and personal information. Would you like specific guidance on creating strong passwords or setting up a password manager?";
    }
    
    if (lowerInput.includes("phishing")) {
      return "Phishing attacks are increasingly sophisticated. Key warning signs include: urgent language, suspicious sender addresses, unexpected attachments, requests for personal information, and mismatched URLs. Always verify requests through official channels. Hover over links to check destinations. Report suspicious emails to your IT department. Modern phishing includes vishing (voice), smishing (SMS), and deepfake attacks. What specific phishing concerns do you have?";
    }
    
    if (lowerInput.includes("malware") || lowerInput.includes("virus")) {
      return "Malware protection requires a multi-layered approach: Keep your OS and software updated, use reputable antivirus with real-time protection, avoid suspicious downloads and email attachments, use ad blockers, and regularly backup your data. Common malware types include ransomware, trojans, spyware, and rootkits. Each requires different prevention strategies. Are you dealing with a specific malware threat?";
    }
    
    if (lowerInput.includes("vpn")) {
      return "VPNs create encrypted tunnels for your internet traffic. Choose VPNs with: no-logs policies, strong encryption (AES-256), kill switches, DNS leak protection, and servers in your desired locations. Avoid free VPNs as they often monetize your data. Popular options include ExpressVPN, NordVPN, and Surfshark. Use VPNs on public Wi-Fi, for privacy, and to bypass geo-restrictions. Do you need help choosing a VPN service?";
    }
    
    if (lowerInput.includes("backup")) {
      return "The 3-2-1 backup rule is essential: 3 copies of important data, 2 different storage media, 1 offsite backup. Automate backups when possible. Test restore procedures regularly. Consider cloud services (encrypted), external drives, and network-attached storage. Protect backups from ransomware with offline storage and versioning. What type of data are you looking to backup?";
    }
    
    if (lowerInput.includes("social engineering")) {
      return "Social engineering exploits human psychology rather than technical vulnerabilities. Common tactics include pretexting (creating false scenarios), baiting (offering something enticing), quid pro quo (false favors), and tailgating (following authorized personnel). Defense strategies: verify identities through official channels, be skeptical of unsolicited contact, never share sensitive information, and train yourself to recognize manipulation tactics. What social engineering scenario concerns you?";
    }
    
    return "That's an excellent cybersecurity question! Based on current threat landscapes and security best practices, I recommend taking a multi-layered approach to security. This includes keeping software updated, using strong authentication, implementing network segmentation, maintaining regular backups, and staying informed about emerging threats. Could you provide more specific details about your security concern so I can give you more targeted advice?";
  };

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizStarted(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI Security Assistant & Knowledge Quiz
                </h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Get expert cybersecurity guidance from our advanced AI assistant and test your knowledge with our comprehensive security quiz.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 mb-12">
              <Card className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${activeTab === "ai-chat" ? "ring-2 ring-purple-500 shadow-lg" : ""}`}
                    onClick={() => setActiveTab("ai-chat")}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-2">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-purple-700 dark:text-purple-300">Advanced AI Assistant</CardTitle>
                      <CardDescription>Get expert cybersecurity guidance and threat analysis</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${activeTab === "quiz" ? "ring-2 ring-blue-500 shadow-lg" : ""}`}
                    onClick={() => setActiveTab("quiz")}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-2">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-blue-700 dark:text-blue-300">Security Knowledge Quiz</CardTitle>
                      <CardDescription>Test your cybersecurity knowledge with 10 questions</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {activeTab === "ai-chat" && (
              <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5" />
                    Advanced Cybersecurity AI Assistant
                  </CardTitle>
                  <CardDescription className="text-purple-100">
                    Ask anything about cybersecurity, threats, best practices, or get personalized security advice
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {chatMessages.map((message) => (
                      <div key={message.id} className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex gap-3 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.isUser ? 'bg-blue-500' : 'bg-purple-500'}`}>
                            {message.isUser ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-white" />}
                          </div>
                          <div className={`p-3 rounded-lg ${message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>
                            <p className="text-sm">{message.text}</p>
                            <span className="text-xs opacity-70 mt-1 block">
                              {message.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isThinking && (
                      <div className="flex gap-3 justify-start">
                        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                          <div className="flex items-center gap-2">
                            <RefreshCw className="h-4 w-4 animate-spin" />
                            <span className="text-sm">AI is analyzing your question...</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <form onSubmit={handleChatSubmit} className="space-y-4">
                    <div className="flex gap-2">
                      <Textarea
                        placeholder="Ask me about cybersecurity threats, best practices, incident response, or any security concerns..."
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        className="min-h-[60px] flex-1"
                        disabled={isThinking}
                      />
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6"
                        disabled={isThinking || !chatInput.trim()}
                      >
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {activeTab === "quiz" && (
              <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Cybersecurity Knowledge Quiz
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Test your understanding of cybersecurity fundamentals with 10 comprehensive questions
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  {!quizStarted ? (
                    <div className="text-center py-12">
                      <Brain className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Ready to Test Your Knowledge?</h3>
                      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        This quiz covers essential cybersecurity topics including passwords, phishing, malware, 
                        social engineering, and security best practices. You'll receive detailed explanations for each answer.
                      </p>
                      <Button 
                        onClick={() => setQuizStarted(true)}
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-3 h-auto"
                      >
                        Start Quiz
                      </Button>
                    </div>
                  ) : !showResults ? (
                    <div>
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                          <Badge variant="outline" className="text-blue-600 border-blue-600">
                            Question {currentQuestion + 1} of {quizQuestions.length}
                          </Badge>
                          <div className="text-sm text-muted-foreground">
                            {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% Complete
                          </div>
                        </div>
                        <Progress value={((currentQuestion + 1) / quizQuestions.length) * 100} className="h-2" />
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold">{quizQuestions[currentQuestion].question}</h3>
                        
                        <div className="space-y-3">
                          {quizQuestions[currentQuestion].options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleQuizAnswer(index)}
                              className={`w-full p-4 text-left rounded-lg border-2 transition-all hover:shadow-md ${
                                selectedAnswers[currentQuestion] === index
                                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                  : 'border-gray-200 hover:border-blue-300'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                  selectedAnswers[currentQuestion] === index
                                    ? 'border-blue-500 bg-blue-500 text-white'
                                    : 'border-gray-300'
                                }`}>
                                  {selectedAnswers[currentQuestion] === index && (
                                    <CheckCircle2 className="h-4 w-4" />
                                  )}
                                </div>
                                <span className="font-medium">{option}</span>
                              </div>
                            </button>
                          ))}
                        </div>

                        <div className="flex justify-end">
                          <Button
                            onClick={nextQuestion}
                            disabled={selectedAnswers[currentQuestion] === undefined}
                            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                          >
                            {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="mb-6">
                        <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
                          calculateScore() >= 7 ? 'bg-green-500' : calculateScore() >= 5 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}>
                          <span className="text-2xl font-bold text-white">{calculateScore()}/10</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">
                          {calculateScore() >= 7 ? 'Excellent!' : calculateScore() >= 5 ? 'Good effort!' : 'Keep learning!'}
                        </h3>
                        <p className="text-muted-foreground">
                          You scored {calculateScore()} out of {quizQuestions.length} questions correctly.
                        </p>
                      </div>

                      <div className="space-y-4 text-left max-h-64 overflow-y-auto mb-6">
                        {quizQuestions.map((question, index) => (
                          <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                            <div className="flex items-start gap-2 mb-2">
                              {selectedAnswers[index] === question.correctAnswer ? (
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                              )}
                              <div>
                                <p className="font-medium text-sm">{question.question}</p>
                                <p className="text-xs text-muted-foreground mt-1">{question.explanation}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-4 justify-center">
                        <Button onClick={resetQuiz} variant="outline">
                          Take Quiz Again
                        </Button>
                        <Button asChild className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                          <Link to="/resources">
                            Learn More
                          </Link>
                        </Button>
                      </div>
                    </div>
                  )}
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
