
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Target,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface AttackData {
  id: string;
  title: string;
  description: string;
  severity: "critical" | "high" | "medium" | "low";
  location: string;
  timestamp: string;
  attackType: string;
  affectedSectors: string[];
}

const recentAttacks: AttackData[] = [
  {
    id: "ATK-2025-0156",
    title: "Ransomware Campaign Targets UK Healthcare Trusts",
    description: "A sophisticated ransomware group has targeted multiple NHS trusts across England, encrypting critical patient data systems.",
    severity: "critical",
    location: "United Kingdom",
    timestamp: "2 hours ago",
    attackType: "Ransomware",
    affectedSectors: ["Healthcare", "Government"]
  },
  {
    id: "ATK-2025-0155",
    title: "Supply Chain Attack on Financial Software Provider",
    description: "Hackers compromised a widely-used banking software provider, potentially affecting hundreds of financial institutions globally.",
    severity: "high",
    location: "Global",
    timestamp: "6 hours ago",
    attackType: "Supply Chain",
    affectedSectors: ["Financial Services", "Banking"]
  },
  {
    id: "ATK-2025-0154",
    title: "Phishing Campaign Targeting Energy Sector",
    description: "Coordinated phishing attacks against European energy companies using sophisticated social engineering techniques.",
    severity: "high",
    location: "Europe",
    timestamp: "12 hours ago",
    attackType: "Phishing",
    affectedSectors: ["Energy", "Utilities"]
  },
  {
    id: "ATK-2025-0153",
    title: "Zero-Day Exploit in Popular CMS Platform",
    description: "Security researchers discovered an actively exploited zero-day vulnerability affecting millions of websites worldwide.",
    severity: "critical",
    location: "Worldwide",
    timestamp: "1 day ago",
    attackType: "Zero-Day Exploit",
    affectedSectors: ["Technology", "Web Services"]
  }
];

function getSeverityBadge(severity: string) {
  switch (severity) {
    case "critical":
      return <Badge className="bg-cyber-accent hover:bg-cyber-accent/90 text-white">Critical</Badge>;
    case "high":
      return <Badge className="bg-red-500 hover:bg-red-600 text-white">High</Badge>;
    case "medium":
      return <Badge className="bg-amber-500 hover:bg-amber-600 text-white">Medium</Badge>;
    case "low":
      return <Badge variant="outline" className="text-green-600 border-green-600">Low</Badge>;
    default:
      return <Badge variant="outline">{severity}</Badge>;
  }
}

export default function CyberAttacksSection() {
  return (
    <section id="cyber-attacks" className="py-16 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-centre mb-12">
          <div className="inline-block mb-4 p-2 bg-red-100 dark:bg-red-900/20 rounded-full">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Real-Time Cyber Attack Intelligence
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay informed about the latest cybersecurity incidents and threats happening globally. 
            Our intelligence team provides real-time updates on active campaigns and emerging threats.
          </p>
        </div>
        
        <div className="grid gap-6 mb-12">
          {recentAttacks.map((attack) => (
            <Card key={attack.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-centre gap-2 mb-2">
                      {getSeverityBadge(attack.severity)}
                      <Badge variant="outline" className="text-xs">{attack.attackType}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{attack.title}</CardTitle>
                    <CardDescription className="text-base">
                      {attack.description}
                    </CardDescription>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-centre gap-1 mb-1">
                      <Clock className="h-3 w-3" />
                      <span>{attack.timestamp}</span>
                    </div>
                    <div className="flex items-centre gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{attack.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Affected Sectors:</span>
                  {attack.affectedSectors.map((sector) => (
                    <Badge key={sector} variant="secondary" className="text-xs">
                      {sector}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between items-centre w-full">
                  <span className="font-mono text-xs text-muted-foreground">{attack.id}</span>
                  <Button variant="outline" size="sm">
                    <Target className="h-3 w-3 mr-1" />
                    View Details
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-centre">
            <CardHeader>
              <div className="mx-auto bg-red-100 dark:bg-red-900/20 p-3 rounded-full w-fit mb-2">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-lg">Active Threats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600 mb-2">47</div>
              <p className="text-sm text-muted-foreground">Ongoing campaigns detected globally</p>
            </CardContent>
          </Card>
          
          <Card className="text-centre">
            <CardHeader>
              <div className="mx-auto bg-amber-100 dark:bg-amber-900/20 p-3 rounded-full w-fit mb-2">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle className="text-lg">Weekly Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-600 mb-2">+23%</div>
              <p className="text-sm text-muted-foreground">Increase in attack frequency</p>
            </CardContent>
          </Card>
          
          <Card className="text-centre">
            <CardHeader>
              <div className="mx-auto bg-green-100 dark:bg-green-900/20 p-3 rounded-full w-fit mb-2">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Threats Mitigated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 mb-2">234</div>
              <p className="text-sm text-muted-foreground">This week across all sectors</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-centre">
          <Button className="bg-cyber-blue hover:bg-cyber-blue/90" asChild>
            <Link to="/threat-intelligence">
              View Complete Threat Intelligence
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
