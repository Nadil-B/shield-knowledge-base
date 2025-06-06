
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, PenTool, Play, Shield, CheckCircle2, AlertTriangle } from "lucide-react";
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
}

function ResourceCard({ icon, title, description, href, className, iconClassName }: ResourceCardProps) {
  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <CardHeader>
        <div className={cn("rounded-full p-2 w-10 h-10 flex items-center justify-centre mb-3", iconClassName)}>
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Learn essential cybersecurity concepts and best practises.
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 h-auto" asChild>
          <Link to={href} className="inline-flex items-centre text-primary hover:underline">
            Explore resource
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-16 bg-cyber-blue/5">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-centre mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Cybersecurity Resources
          </h2>
          <p className="text-lg text-muted-foreground">
            Educational materials and tools to enhance your security posture and build awareness.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <ResourceCard
            icon={<BookOpen className="h-5 w-5 text-purple-600" />}
            title="Educational Guides"
            description="Comprehensive cybersecurity guides and tutorials"
            href="/resources"
            iconClassName="bg-purple-100 dark:bg-purple-900/30"
          />
          
          <ResourceCard
            icon={<Play className="h-5 w-5 text-red-600" />}
            title="Video Tutorials"
            description="Visual demonstrations of security concepts"
            href="/resources"
            iconClassName="bg-red-100 dark:bg-red-900/30"
          />
          
          <ResourceCard
            icon={<FileText className="h-5 w-5 text-blue-600" />}
            title="Whitepapers"
            description="In-depth technical research and analysis"
            href="/advisories"
            iconClassName="bg-blue-100 dark:bg-blue-900/30"
          />
          
          <ResourceCard
            icon={<PenTool className="h-5 w-5 text-green-600" />}
            title="Security Tools"
            description="Essential tools for security assessment"
            href="/threat-detector"
            iconClassName="bg-green-100 dark:bg-green-900/30"
          />
        </div>
        
        <div className="bg-gradient-to-r from-cyber-blue to-cyber-teal rounded-lg p-6 md:p-8">
          <div className="text-centre mb-6">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-centre justify-centre mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Free Security Assessment
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Evaluate your organisation's cybersecurity posture with our comprehensive assessment tool. 
              Get personalised recommendations and identify potential vulnerabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 rounded-lg p-4 text-centre">
              <CheckCircle2 className="h-6 w-6 text-white mx-auto mb-2" />
              <h4 className="font-medium text-white mb-1">Risk Analysis</h4>
              <p className="text-white/80 text-sm">Identify security gaps in your infrastructure</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 text-centre">
              <AlertTriangle className="h-6 w-6 text-white mx-auto mb-2" />
              <h4 className="font-medium text-white mb-1">Threat Detection</h4>
              <p className="text-white/80 text-sm">Scan for potential vulnerabilities and threats</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 text-centre">
              <FileText className="h-6 w-6 text-white mx-auto mb-2" />
              <h4 className="font-medium text-white mb-1">Custom Report</h4>
              <p className="text-white/80 text-sm">Receive detailed recommendations</p>
            </div>
          </div>
          
          <div className="text-centre">
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
