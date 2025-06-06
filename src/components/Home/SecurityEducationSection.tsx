
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Shield, 
  Users,
  CheckCircle2,
  Lightbulb,
  Target
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

interface EducationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  topics: string[];
  href: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
}

function EducationCard({ icon, title, description, topics, href, difficulty, duration }: EducationCardProps) {
  const getDifficultyColour = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Intermediate": return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-l-4 border-l-cyber-teal">
      <CardHeader>
        <div className="flex items-start justify-between mb-3">
          <div className="rounded-full p-2 w-10 h-10 flex items-center justify-centre bg-cyber-teal/10">
            {icon}
          </div>
          <div className="text-right">
            <span className={cn("text-xs px-2 py-1 rounded-full font-medium", getDifficultyColour(difficulty))}>
              {difficulty}
            </span>
            <p className="text-xs text-muted-foreground mt-1">{duration}</p>
          </div>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Learning Topics:</h4>
          <ul className="text-sm space-y-1">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-centre gap-2">
                <CheckCircle2 className="h-3 w-3 text-cyber-teal flex-shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link to={href} className="inline-flex items-centre justify-centre">
            Start Learning
            <ArrowRight className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function SecurityEducationSection() {
  const educationModules: EducationCardProps[] = [
    {
      icon: <Shield className="h-5 w-5 text-cyber-teal" />,
      title: "Cybersecurity Fundamentals",
      description: "Essential concepts every user should understand to protect themselves online.",
      topics: [
        "Password security and management",
        "Recognising phishing attempts",
        "Safe browsing practices",
        "Software updates and patches"
      ],
      href: "/resources#fundamentals",
      difficulty: "Beginner",
      duration: "2-3 hours"
    },
    {
      icon: <Target className="h-5 w-5 text-cyber-teal" />,
      title: "Threat Identification",
      description: "Learn to identify and respond to common cybersecurity threats.",
      topics: [
        "Malware types and symptoms",
        "Social engineering tactics",
        "Suspicious email identification",
        "Incident reporting procedures"
      ],
      href: "/resources#threats",
      difficulty: "Intermediate",
      duration: "3-4 hours"
    },
    {
      icon: <Users className="h-5 w-5 text-cyber-teal" />,
      title: "Organisational Security",
      description: "Best practices for maintaining security in workplace environments.",
      topics: [
        "Access control principles",
        "Data classification and handling",
        "Remote work security",
        "Compliance requirements"
      ],
      href: "/resources#organisational",
      difficulty: "Intermediate",
      duration: "4-5 hours"
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-cyber-teal" />,
      title: "Advanced Security Concepts",
      description: "Deep dive into sophisticated security measures and technologies.",
      topics: [
        "Encryption and cryptography",
        "Network security architecture",
        "Zero-trust security models",
        "Incident response planning"
      ],
      href: "/resources#advanced",
      difficulty: "Advanced",
      duration: "6-8 hours"
    }
  ];

  return (
    <section id="security-education" className="py-16 bg-secondary/30">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-centre mb-12">
          <div className="inline-block mb-4 p-2 bg-cyber-teal/10 rounded-full">
            <GraduationCap className="h-8 w-8 text-cyber-teal" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Security Education Centre
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive learning modules designed to enhance your cybersecurity knowledge 
            and skills. From basics to advanced concepts, build your expertise step by step.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-12">
          {educationModules.map((module) => (
            <EducationCard key={module.title} {...module} />
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-cyber-blue to-cyber-teal rounded-lg p-6 md:p-8 text-centre">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-centre justify-centre mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Personalised Learning Path
            </h3>
            <p className="text-white/90 mb-6">
              Take our assessment to receive a customised learning path based on your current 
              knowledge level and specific security needs. Get targeted recommendations and 
              track your progress.
            </p>
            <Button className="bg-white text-cyber-blue hover:bg-white/90" asChild>
              <Link to="/threat-detector">
                Start Security Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
