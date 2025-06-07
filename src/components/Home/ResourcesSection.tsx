
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, PenTool, Play, Shield, CheckCircle2, AlertTriangle, Download, Brain } from "lucide-react";
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

export default function ResourcesSection() {
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
            href="/resources"
            iconClassName="bg-gradient-to-r from-purple-500 to-pink-500"
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30"
          />
          
          <ResourceCard
            icon={<Play className="h-5 w-5 text-white" />}
            title="Video Tutorials"
            description="Visual demonstrations of security concepts"
            href="https://www.youtube.com/playlist?list=PLBf0hzazHTGOepimcP15eS6Y-aR4m6ql6"
            iconClassName="bg-gradient-to-r from-red-500 to-orange-500"
            className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30"
            isExternal={true}
          />
          
          <ResourceCard
            icon={<FileText className="h-5 w-5 text-white" />}
            title="Security Whitepapers"
            description="In-depth technical research and analysis"
            href="/resources#whitepapers"
            iconClassName="bg-gradient-to-r from-blue-500 to-cyan-500"
            className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30"
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
              <Download className="h-6 w-6 text-white mx-auto mb-2" />
              <h4 className="font-medium text-white mb-1">Learning Resources</h4>
              <p className="text-white/80 text-sm">Comprehensive educational materials</p>
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
