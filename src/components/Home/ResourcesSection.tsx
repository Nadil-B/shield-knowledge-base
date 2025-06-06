
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, PenTool, Play, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <div className={cn("rounded-full p-2 w-10 h-10 flex items-center justify-center mb-3", iconClassName)}>
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Learn essential cybersecurity concepts and best practices.
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 h-auto" asChild>
          <a href={href} className="inline-flex items-center text-primary hover:underline">
            Explore resource
            <ArrowRight className="ml-1 h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-16 bg-cyber-blue/5">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
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
            href="#"
            iconClassName="bg-purple-100 dark:bg-purple-900/30"
          />
          
          <ResourceCard
            icon={<Play className="h-5 w-5 text-red-600" />}
            title="Video Tutorials"
            description="Visual demonstrations of security concepts"
            href="#"
            iconClassName="bg-red-100 dark:bg-red-900/30"
          />
          
          <ResourceCard
            icon={<FileText className="h-5 w-5 text-blue-600" />}
            title="Whitepapers"
            description="In-depth technical research and analysis"
            href="#"
            iconClassName="bg-blue-100 dark:bg-blue-900/30"
          />
          
          <ResourceCard
            icon={<PenTool className="h-5 w-5 text-green-600" />}
            title="Security Tools"
            description="Essential tools for security assessment"
            href="#"
            iconClassName="bg-green-100 dark:bg-green-900/30"
          />
        </div>
        
        <div className="bg-cyber-blue rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <div className="bg-white/10 rounded-full p-4 mr-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-1">
                Join the Security Community
              </h3>
              <p className="text-white/80">
                Connect with cybersecurity experts and stay updated with the latest trends.
              </p>
            </div>
          </div>
          <Button className="bg-white text-cyber-blue hover:bg-white/90 whitespace-nowrap">
            Join Community
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
