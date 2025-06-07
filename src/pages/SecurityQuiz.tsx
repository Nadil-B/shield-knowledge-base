
import { useState, useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Home/Footer";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  Target,
  Brain
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

interface QuizSet {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  difficulty: 'easy' | 'medium' | 'hard';
}

const SecurityQuiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "CyberShield | Security Quiz";
  }, []);

  const quizSets: QuizSet[] = [
    {
      id: 'phishing',
      title: 'Phishing Attacks',
      description: 'Test your knowledge about phishing and social engineering attacks',
      difficulty: 'easy',
      questions: [
        {
          id: 1,
          question: "What is the most common way phishing attacks are delivered?",
          options: ["Text messages", "Email", "Phone calls", "Social media"],
          correctAnswer: 1,
          explanation: "Email is the most common delivery method for phishing attacks. Attackers use email because it's easy to send to many people at once and can be made to look legitimate.",
          category: "Phishing",
          difficulty: 'easy'
        },
        {
          id: 2,
          question: "Which of these is a red flag that an email might be a phishing attempt?",
          options: ["Professional logo", "Urgent language demanding immediate action", "Proper grammar", "Sender's real name"],
          correctAnswer: 1,
          explanation: "Urgent language creating pressure to act quickly is a common phishing tactic. Legitimate organizations rarely demand immediate action through email.",
          category: "Phishing",
          difficulty: 'easy'
        },
        {
          id: 3,
          question: "What should you do if you receive a suspicious email asking for personal information?",
          options: ["Reply with the information", "Click the link to verify", "Delete the email and contact the organization directly", "Forward it to friends"],
          correctAnswer: 2,
          explanation: "Always delete suspicious emails and contact the organization through official channels. Never provide personal information through email.",
          category: "Phishing",
          difficulty: 'easy'
        },
        {
          id: 4,
          question: "What is 'spear phishing'?",
          options: ["Phishing using fake websites", "Targeted phishing attacks on specific individuals", "Phishing through social media", "Phishing using malware"],
          correctAnswer: 1,
          explanation: "Spear phishing is a targeted attack where criminals research specific individuals or organizations to create highly convincing, personalized phishing messages.",
          category: "Phishing",
          difficulty: 'medium'
        },
        {
          id: 5,
          question: "Which domain would be most suspicious in a phishing email claiming to be from Google?",
          options: ["google.com", "gmail.com", "g00gle.com", "accounts.google.com"],
          correctAnswer: 2,
          explanation: "g00gle.com uses zeros instead of 'o's, which is a common technique to create look-alike domains for phishing attacks.",
          category: "Phishing",
          difficulty: 'medium'
        }
      ]
    },
    {
      id: 'passwords',
      title: 'Password Security',
      description: 'Learn about creating and managing secure passwords',
      difficulty: 'medium',
      questions: [
        {
          id: 1,
          question: "What makes a password strong?",
          options: ["Using your birthday", "Length and complexity", "Using the same password everywhere", "Using only numbers"],
          correctAnswer: 1,
          explanation: "Strong passwords combine length (12+ characters) with complexity (uppercase, lowercase, numbers, symbols) and should be unique for each account.",
          category: "Passwords",
          difficulty: 'easy'
        },
        {
          id: 2,
          question: "Which is the best practice for password management?",
          options: ["Write them down on paper", "Use the same password for everything", "Use a password manager", "Save them in your browser"],
          correctAnswer: 2,
          explanation: "Password managers securely store unique, complex passwords for all your accounts and only require you to remember one master password.",
          category: "Passwords",
          difficulty: 'medium'
        },
        {
          id: 3,
          question: "How often should you change your passwords?",
          options: ["Daily", "Weekly", "Only when there's a security breach", "Every 30 days"],
          correctAnswer: 2,
          explanation: "Modern security experts recommend changing passwords only when there's evidence of compromise, not on a regular schedule, as frequent changes often lead to weaker passwords.",
          category: "Passwords",
          difficulty: 'medium'
        },
        {
          id: 4,
          question: "What is two-factor authentication (2FA)?",
          options: ["Using two passwords", "Using password and additional verification", "Having two email accounts", "Using biometrics only"],
          correctAnswer: 1,
          explanation: "2FA adds an extra layer of security by requiring something you know (password) and something you have (phone, token) or something you are (biometric).",
          category: "Passwords",
          difficulty: 'easy'
        },
        {
          id: 5,
          question: "Which 2FA method is considered most secure?",
          options: ["SMS codes", "Email codes", "Authenticator apps", "Security questions"],
          correctAnswer: 2,
          explanation: "Authenticator apps are more secure than SMS because they're not vulnerable to SIM swapping attacks and work offline.",
          category: "Passwords",
          difficulty: 'medium'
        }
      ]
    },
    {
      id: 'malware',
      title: 'Malware & Ransomware',
      description: 'Understand different types of malicious software and protection strategies',
      difficulty: 'hard',
      questions: [
        {
          id: 1,
          question: "What is ransomware?",
          options: ["Software that speeds up your computer", "Malware that encrypts files for money", "A type of antivirus", "Free software"],
          correctAnswer: 1,
          explanation: "Ransomware encrypts your files and demands payment for the decryption key. It's one of the most damaging types of malware for individuals and businesses.",
          category: "Malware",
          difficulty: 'easy'
        },
        {
          id: 2,
          question: "What's the best protection against ransomware?",
          options: ["Paying the ransom quickly", "Regular backups kept offline", "Using only free software", "Avoiding the internet"],
          correctAnswer: 1,
          explanation: "Regular, tested backups stored offline or in immutable storage are your best defense. If files are encrypted, you can restore from backups without paying.",
          category: "Malware",
          difficulty: 'medium'
        },
        {
          id: 3,
          question: "What is a 'zero-day' attack?",
          options: ["An attack that happens at midnight", "An attack using unknown vulnerabilities", "An attack that costs zero dollars", "An attack lasting zero days"],
          correctAnswer: 1,
          explanation: "Zero-day attacks exploit previously unknown vulnerabilities before developers can create and distribute patches, making them particularly dangerous.",
          category: "Malware",
          difficulty: 'hard'
        },
        {
          id: 4,
          question: "Which file type is most commonly used to spread malware?",
          options: ["PDF files", "Image files", "Executable files (.exe)", "Text files"],
          correctAnswer: 2,
          explanation: "Executable files (.exe) can run code directly on your system, making them the most common vector for malware distribution.",
          category: "Malware",
          difficulty: 'medium'
        },
        {
          id: 5,
          question: "What should you do if you suspect your computer is infected with malware?",
          options: ["Keep using it normally", "Disconnect from internet and run antivirus scan", "Restart the computer", "Delete all files"],
          correctAnswer: 1,
          explanation: "Immediately disconnect from the internet to prevent data theft or further damage, then run a comprehensive antivirus scan to detect and remove threats.",
          category: "Malware",
          difficulty: 'medium'
        }
      ]
    }
  ];

  const getCurrentQuiz = () => {
    return quizSets.find(quiz => quiz.id === selectedQuiz);
  };

  const getCurrentQuestion = () => {
    const quiz = getCurrentQuiz();
    return quiz ? quiz.questions[currentQuestionIndex] : null;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion || selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const userAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect
    };

    setUserAnswers(prev => [...prev, userAnswer]);
    setSelectedAnswer(null);

    if (currentQuestionIndex < getCurrentQuiz()!.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizCompleted(true);
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedAnswer(null);
    setShowResults(false);
    setQuizCompleted(false);
  };

  const handleSelectQuiz = (quizId: string) => {
    setSelectedQuiz(quizId);
    handleRestartQuiz();
  };

  const getScore = () => {
    const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
    return Math.round((correctAnswers / userAnswers.length) * 100);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-amber-600";
    return "text-red-600";
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-amber-100 text-amber-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!selectedQuiz) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-cyan-900/20">
            <div className="container px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Security Education Quizzes
                  </h1>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  Test and improve your cybersecurity knowledge with our interactive quizzes. Each quiz provides detailed explanations to help you learn.
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {quizSets.map((quiz) => (
                    <Card key={quiz.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{quiz.title}</CardTitle>
                          <Badge className={getDifficultyColor(quiz.difficulty)}>
                            {quiz.difficulty}
                          </Badge>
                        </div>
                        <CardDescription>{quiz.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{quiz.questions.length} questions</span>
                            <span>~{quiz.questions.length * 2} min</span>
                          </div>
                          <Button 
                            onClick={() => handleSelectQuiz(quiz.id)}
                            className="w-full"
                          >
                            Start Quiz
                          </Button>
                        </div>
                      </CardContent>
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
  }

  if (showResults) {
    const quiz = getCurrentQuiz()!;
    const score = getScore();
    const wrongAnswers = userAnswers.filter(answer => !answer.isCorrect);

    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-cyan-900/20">
            <div className="container px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Award className={`h-16 w-16 ${getScoreColor(score)}`} />
                    </div>
                    <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
                    <CardDescription>Here are your results for {quiz.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-8">
                      <div className={`text-6xl font-bold ${getScoreColor(score)} mb-2`}>
                        {score}%
                      </div>
                      <p className="text-lg text-muted-foreground">
                        {userAnswers.filter(a => a.isCorrect).length} out of {userAnswers.length} correct
                      </p>
                    </div>

                    {wrongAnswers.length > 0 && (
                      <div className="space-y-6 mb-8">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          Review Your Mistakes
                        </h3>
                        
                        {wrongAnswers.map((wrongAnswer) => {
                          const question = quiz.questions.find(q => q.id === wrongAnswer.questionId)!;
                          return (
                            <Card key={wrongAnswer.questionId} className="border-red-200">
                              <CardContent className="pt-6">
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-medium mb-2">{question.question}</h4>
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-2 text-red-600">
                                        <XCircle className="h-4 w-4" />
                                        <span>Your answer: {question.options[wrongAnswer.selectedAnswer]}</span>
                                      </div>
                                      <div className="flex items-center gap-2 text-green-600">
                                        <CheckCircle2 className="h-4 w-4" />
                                        <span>Correct answer: {question.options[question.correctAnswer]}</span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                    <h5 className="font-medium mb-2 flex items-center gap-2">
                                      <Brain className="h-4 w-4" />
                                      Explanation
                                    </h5>
                                    <p className="text-sm">{question.explanation}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    )}

                    <div className="flex gap-4 justify-center">
                      <Button onClick={handleRestartQuiz} variant="outline">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Retake Quiz
                      </Button>
                      <Button onClick={() => setSelectedQuiz(null)}>
                        Choose Another Quiz
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
  }

  const currentQuestion = getCurrentQuestion()!;
  const quiz = getCurrentQuiz()!;
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-cyan-900/20">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-2xl font-bold">{quiz.title}</h1>
                  <Button variant="ghost" onClick={() => setSelectedQuiz(null)}>
                    ← Back to Quizzes
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
                    <span>{Math.round(progress)}% Complete</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
                  <div className="flex gap-2">
                    <Badge className={getDifficultyColor(currentQuestion.difficulty)}>
                      {currentQuestion.difficulty}
                    </Badge>
                    <Badge variant="outline">{currentQuestion.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {currentQuestion.options.map((option, index) => (
                      <Button
                        key={index}
                        variant={selectedAnswer === index ? "default" : "outline"}
                        className="w-full text-left justify-start h-auto p-4"
                        onClick={() => handleAnswerSelect(index)}
                      >
                        <span className="mr-3 font-medium">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </Button>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      Select an answer to continue
                    </div>
                    <Button 
                      onClick={handleNextQuestion}
                      disabled={selectedAnswer === null}
                    >
                      {currentQuestionIndex === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
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

export default SecurityQuiz;
