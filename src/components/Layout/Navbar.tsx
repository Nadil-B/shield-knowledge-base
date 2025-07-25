
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, Shield, Brain, BookOpen } from "lucide-react";

const threatItems = [
  {
    title: "Malware Analysis",
    href: "/threat-intelligence#malware",
    description: "Learn about different types of malware and how to identify them."
  },
  {
    title: "Phishing Attacks",
    href: "/threat-intelligence#phishing",
    description: "Understand phishing techniques and how to protect against them."
  },
  {
    title: "Ransomware",
    href: "/threat-intelligence#ransomware",
    description: "Learn about ransomware attacks and preventative measures."
  },
  {
    title: "Advanced Persistent Threats",
    href: "/threat-intelligence#apt",
    description: "Understand sophisticated, targeted cyber attacks."
  }
];

const solutionItems = [
  {
    title: "Security Best Practices",
    href: "/security-solutions#best-practices",
    description: "Essential security measures for individuals and organizations."
  },
  {
    title: "Incident Response",
    href: "/security-solutions#incident-response",
    description: "How to respond to and recover from security incidents."
  },
  {
    title: "Security Tools",
    href: "/security-solutions#tools",
    description: "Overview of security tools and technologies for protection."
  },
  {
    title: "Training Resources",
    href: "/security-solutions#training",
    description: "Educational resources to improve security awareness."
  }
];

const ListItem = ({ className, title, href, children }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-cyber-teal" />
            <span className="font-bold text-xl">CyberShield</span>
          </Link>
        </div>
        
        <div className="hidden md:flex flex-1 items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Threat Intelligence</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {threatItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Security Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {solutionItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/advisories" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Advisories
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/resources" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Resources
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/security-quiz" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Quiz
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center">
            <Button className="bg-cyber-teal hover:bg-cyber-teal/90" asChild>
              <Link to="/cyber-ai">
                <Brain className="h-4 w-4 mr-2" />
                AI Assistant
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="md:hidden ml-auto">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background border-b md:hidden z-50 animate-fade-in">
            <div className="container py-4">
              <nav className="flex flex-col space-y-4">
                <div className="border-b pb-2">
                  <p className="font-medium mb-2">Threat Intelligence</p>
                  <div className="pl-2 flex flex-col space-y-2">
                    {threatItems.map((item) => (
                      <Link key={item.title} to={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="border-b pb-2">
                  <p className="font-medium mb-2">Security Solutions</p>
                  <div className="pl-2 flex flex-col space-y-2">
                    {solutionItems.map((item) => (
                      <Link key={item.title} to={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link to="/advisories" className="font-medium">Advisories</Link>
                <Link to="/resources" className="font-medium">Resources</Link>
                <div className="pt-2">
                  <Button className="bg-cyber-teal hover:bg-cyber-teal/90 w-full justify-start" asChild>
                    <Link to="/threat-detector">
                      <Brain className="h-4 w-4 mr-2" />
                      AI Threat Detector
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
