
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, Play, Shield, CheckCircle2, Download, Brain, Users, GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
  iconClassName?: string;
  isExternal?: boolean;
}

function ResourceCard({ icon, title, description, href, className, iconClassName, isExternal = false }: ResourceCardProps) {
  const Content = (
    <>
      <div className={cn("rounded-full p-2 w-10 h-10 flex items-center justify-center mb-3", iconClassName)}>
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </>
  );

  const FooterContent = (
    <span className="inline-flex items-center text-primary hover:underline">
      Explore resource
      <ArrowRight className="ml-1 h-3 w-3" />
    </span>
  );

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-lg hover:scale-105 border-0 shadow-md", className)}>
      <CardHeader>
        {Content}
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Access comprehensive cybersecurity resources and practical tools.
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 h-auto" asChild>
          {isExternal ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline">
              {FooterContent}
            </a>
          ) : (
            <Link to={href} className="inline-flex items-center text-primary hover:underline">
              {FooterContent}
            </Link>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}

interface GuideCardProps {
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  topics: string[];
  href: string;
  isVideo?: boolean;
}

function GuideCard({ title, description, level, duration, topics, href, isVideo = false }: GuideCardProps) {
  const getLevelColour = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Intermediate": return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {isVideo ? (
              <Play className="h-5 w-5 text-red-500" />
            ) : (
              <BookOpen className="h-5 w-5 text-blue-500" />
            )}
            <span className={cn("text-xs px-2 py-1 rounded-full font-medium", getLevelColour(level))}>
              {level}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">{duration}</span>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Covered Topics:</h4>
          <ul className="text-sm space-y-1">
            {topics.slice(0, 3).map((topic, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
            {topics.length > 3 && (
              <li className="text-xs text-muted-foreground">+ {topics.length - 3} more topics</li>
            )}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center">
            {isVideo ? "Watch Video" : "Read Guide"}
            <ArrowRight className="ml-2 h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ResourcesSection() {
  const educationalGuides: GuideCardProps[] = [
    {
      title: "Cybersecurity Fundamentals",
      description: "Essential concepts every user should understand to protect themselves online.",
      level: "Beginner",
      duration: "15 min read",
      topics: [
        "Password security and management",
        "Recognising phishing attempts",
        "Safe browsing practices",
        "Software updates and patches",
        "Two-factor authentication setup"
      ],
      href: "https://www.ncsc.gov.uk/guidance/cyber-security-small-business-guide"
    },
    {
      title: "Enterprise Security Framework",
      description: "Comprehensive guide to implementing security measures in organisations.",
      level: "Advanced",
      duration: "45 min read",
      topics: [
        "Risk assessment methodologies",
        "Security policy development",
        "Incident response planning",
        "Compliance requirements",
        "Security architecture design"
      ],
      href: "https://www.ncsc.gov.uk/collection/cyber-security-design-principles"
    },
    {
      title: "Network Security Essentials",
      description: "Understanding network vulnerabilities and protection strategies.",
      level: "Intermediate",
      duration: "30 min read",
      topics: [
        "Firewall configuration",
        "VPN implementation",
        "Network monitoring",
        "Intrusion detection systems"
      ],
      href: "https://www.ncsc.gov.uk/guidance/setting-two-factor-authentication-2fa"
    },
    {
      title: "Data Protection & Privacy",
      description: "Guidelines for protecting sensitive data and maintaining privacy compliance.",
      level: "Intermediate",
      duration: "25 min read",
      topics: [
        "GDPR compliance requirements",
        "Data classification schemes",
        "Encryption best practices",
        "Data breach response procedures"
      ],
      href: "https://ico.org.uk/for-organisations/guide-to-data-protection/"
    }
  ];

  const videoGuides: GuideCardProps[] = [
    {
      title: "Cybersecurity Awareness Training",
      description: "Interactive video series covering essential security awareness topics.",
      level: "Beginner",
      duration: "20 min video",
      topics: [
        "Phishing email identification",
        "Social engineering tactics",
        "Secure password creation",
        "Safe remote working practices"
      ],
      href: "https://www.youtube.com/watch?v=inWWhr5tnEA",
      isVideo: true
    },
    {
      title: "Incident Response Procedures",
      description: "Step-by-step guide to handling cybersecurity incidents effectively.",
      level: "Advanced",
      duration: "35 min video",
      topics: [
        "Incident classification",
        "Response team coordination",
        "Evidence preservation",
        "Recovery procedures",
        "Post-incident analysis"
      ],
      href: "https://www.youtube.com/watch?v=nvTk-dHVN9Q",
      isVideo: true
    },
    {
      title: "Penetration Testing Basics",
      description: "Introduction to ethical hacking and vulnerability assessment techniques.",
      level: "Advanced",
      duration: "50 min video",
      topics: [
        "Reconnaissance techniques",
        "Vulnerability scanning",
        "Exploitation methods",
        "Report writing"
      ],
      href: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
      isVideo: true
    },
    {
      title: "Cloud Security Best Practices",
      description: "Securing cloud environments and understanding shared responsibility models.",
      level: "Intermediate",
      duration: "30 min video",
      topics: [
        "Cloud access controls",
        "Data encryption in transit",
        "Container security",
        "Monitoring and logging"
      ],
      href: "https://www.youtube.com/watch?v=aISWoPf_XNE",
      isVideo: true
    }
  ];

  return (
    <section id="resources" className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-cyan-900/20">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Cybersecurity Resources
          </h2>
          <p className="text-lg text-muted-foreground">
            Educational materials and tools to enhance your security posture and build awareness.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <ResourceCard
            icon={<BookOpen className="h-5 w-5 text-white" />}
            title="Educational Guides"
            description="Comprehensive cybersecurity guides and tutorials"
            href="#educational-guides"
            iconClassName="bg-gradient-to-r from-purple-500 to-pink-500"
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30"
          />
          
          <ResourceCard
            icon={<Play className="h-5 w-5 text-white" />}
            title="Video Tutorials"
            description="Visual demonstrations of security concepts"
            href="#video-guides"
            iconClassName="bg-gradient-to-r from-red-500 to-orange-500"
            className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30"
          />
          
          <ResourceCard
            icon={<FileText className="h-5 w-5 text-white" />}
            title="Security Whitepapers"
            description="In-depth technical research and analysis"
            href="https://www.ncsc.gov.uk/guidance"
            iconClassName="bg-gradient-to-r from-blue-500 to-cyan-500"
            className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30"
            isExternal={true}
          />
          
          <ResourceCard
            icon={<Brain className="h-5 w-5 text-white" />}
            title="AI Assistant & Quiz"
            description="Interactive AI guidance and knowledge testing"
            href="/security-assessments"
            iconClassName="bg-gradient-to-r from-green-500 to-emerald-500"
            className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30"
          />
        </div>

        {/* Educational Guides Section */}
        <section id="educational-guides" className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-block mb-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Educational Guides</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive written guides covering essential cybersecurity topics from basic concepts to advanced implementation strategies.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {educationalGuides.map((guide, index) => (
              <GuideCard key={index} {...guide} />
            ))}
          </div>
        </section>

        {/* Video Guides Section */}
        <section id="video-guides" className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-block mb-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
              <Play className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Video Tutorials</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visual learning experiences with step-by-step demonstrations of cybersecurity concepts, tools, and best practices.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {videoGuides.map((guide, index) => (
              <GuideCard key={index} {...guide} />
            ))}
          </div>
        </section>
        
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-xl p-6 md:p-8 shadow-xl">
          <div className="text-center mb-6">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Advanced Security Knowledge Hub
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Access our AI-powered assistant for expert cybersecurity guidance and test your knowledge with our comprehensive quiz system.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Brain className="h-6 w-6 text-white mx-auto mb-2" />
              <h4 className="font-medium text-white mb-1">AI Expert Guidance</h4>
              <p className="text-white/80 text-sm">Get instant answers to cybersecurity questions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <CheckCircle2 className="h-6 w-6 text-white mx-auto mb-2" />
              <h4 className="font-medium text-white mb-1">Knowledge Testing</h4>
              <p className="text-white/80 text-sm">10-point quiz with detailed explanations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Users className="h-6 w-6 text-white mx-auto mb-2" />
              <h4 className="font-medium text-white mb-1">Community Learning</h4>
              <p className="text-white/80 text-sm">Connect with security professionals</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-white text-purple-600 hover:bg-white/90 shadow-lg" asChild>
              <Link to="/security-assessments">
                Start Learning Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
