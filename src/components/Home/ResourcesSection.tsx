
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, Shield, CheckCircle2, Brain, Users, TrendingDown, PoundSterling, AlertTriangle, Scale } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

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
}

function GuideCard({ title, description, level, duration, topics, href }: GuideCardProps) {
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
            <BookOpen className="h-5 w-5 text-blue-500" />
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
            Read Guide
            <ArrowRight className="ml-2 h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

interface CyberCostData {
  category: string;
  averageCost: string;
  description: string;
  regulation?: string;
  icon: React.ReactNode;
}

function CyberCostCard({ category, averageCost, description, regulation, icon }: CyberCostData) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-2">
            {icon}
          </div>
          <CardTitle className="text-lg">{category}</CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <PoundSterling className="h-5 w-5 text-red-600" />
          <span className="text-2xl font-bold text-red-600">{averageCost}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        {regulation && (
          <Badge variant="outline" className="text-xs border-red-200 text-red-700">
            {regulation}
          </Badge>
        )}
      </CardContent>
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

  const cyberCostData: CyberCostData[] = [
    {
      category: "Data Breach",
      averageCost: "3.9M",
      description: "Average cost of a data breach for UK companies, including regulatory fines, remediation, and business disruption.",
      regulation: "GDPR Article 83",
      icon: <Shield className="h-6 w-6 text-red-600" />
    },
    {
      category: "Ransomware Attack",
      averageCost: "1.8M",
      description: "Average recovery cost from ransomware, including downtime, data recovery, and ransom payments.",
      regulation: "NIS Directive",
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />
    },
    {
      category: "Business Email Compromise",
      averageCost: "4.3M",
      description: "Average financial loss from BEC attacks targeting UK businesses, often involving fraudulent transfers.",
      regulation: "PCI DSS",
      icon: <TrendingDown className="h-6 w-6 text-red-600" />
    },
    {
      category: "GDPR Non-Compliance",
      averageCost: "20M",
      description: "Maximum GDPR fine of €20M or 4% of annual turnover for serious data protection violations.",
      regulation: "GDPR Article 83(5)",
      icon: <Scale className="h-6 w-6 text-red-600" />
    },
    {
      category: "Critical Infrastructure",
      averageCost: "12.4M",
      description: "Average cost for critical infrastructure cyber incidents under the NIS Regulations.",
      regulation: "NIS Regulations 2018",
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />
    },
    {
      category: "Insider Threats",
      averageCost: "8.76M",
      description: "Average cost of insider-related incidents, including malicious and negligent insider actions.",
      regulation: "UK GDPR",
      icon: <Users className="h-6 w-6 text-red-600" />
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
            Educational materials and financial impact data to enhance your security posture and awareness.
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
            icon={<TrendingDown className="h-5 w-5 text-white" />}
            title="Financial Impact Data"
            description="Real costs of cyber attacks on UK/EU businesses"
            href="#cyber-costs"
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
            title="Security Dashboard"
            description="Personal security tools and incident reporting"
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

        {/* Cyber Attack Financial Impact Section */}
        <section id="cyber-costs" className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-block mb-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
              <PoundSterling className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Financial Impact of Cyber Attacks</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world costs that UK and EU businesses face from cyber incidents, including regulatory fines and recovery expenses.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cyberCostData.map((data, index) => (
              <CyberCostCard key={index} {...data} />
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                  UK/EU Regulatory Framework
                </h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  These figures reflect average costs under current UK GDPR, NIS Regulations 2018, and EU directives. 
                  Costs include direct financial losses, regulatory fines, remediation expenses, and business disruption. 
                  Small businesses may face proportionally lower absolute costs but similar percentage impacts on revenue.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-xl p-6 md:p-8 shadow-xl">
          <div className="text-center mb-6">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Advanced Security Dashboard
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Access our comprehensive security dashboard with personal checklists, password health checking, and incident reporting tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <CheckCircle2 className="h-6 w-6 text-white mx-auto mb-2" />
              <h4 className="font-medium text-white mb-1">Security Checklist</h4>
              <p className="text-white/80 text-sm">Personal security assessment tools</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Shield className="h-6 w-6 text-white mx-auto mb-2" />
              <h4 className="font-medium text-white mb-1">Password Health</h4>
              <p className="text-white/80 text-sm">Real-time password strength analysis</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <FileText className="h-6 w-6 text-white mx-auto mb-2" />
              <h4 className="font-medium text-white mb-1">Incident Reporting</h4>
              <p className="text-white/80 text-sm">Quick security incident reporting</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-white text-purple-600 hover:bg-white/90 shadow-lg" asChild>
              <Link to="/security-assessments">
                Access Security Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
