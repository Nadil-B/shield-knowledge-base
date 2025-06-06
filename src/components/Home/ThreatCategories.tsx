
import { Button } from "@/components/ui/button";
import { ChevronRight, Globe, HardDrive, Lock, Server, ShieldAlert, Wifi } from "lucide-react";
import CardWithIcon from "../common/CardWithIcon";

const threatCategories = [
  {
    icon: Globe,
    title: "Network Threats",
    description: "Vulnerabilities that target network infrastructure including denial-of-service attacks and man-in-the-middle exploits.",
    iconClass: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    icon: HardDrive,
    title: "Endpoint Vulnerabilities",
    description: "Threats targeting end-user devices such as malware, ransomware, and zero-day exploits.",
    iconClass: "bg-green-100 dark:bg-green-900/30"
  },
  {
    icon: Lock,
    title: "Identity Attacks",
    description: "Compromising authentication systems through credential theft, phishing, and social engineering.",
    iconClass: "bg-purple-100 dark:bg-purple-900/30"
  },
  {
    icon: Server,
    title: "Cloud Security",
    description: "Risks specific to cloud environments including misconfigurations, insecure APIs, and data breaches.",
    iconClass: "bg-amber-100 dark:bg-amber-900/30"
  },
  {
    icon: ShieldAlert,
    title: "Advanced Persistent Threats",
    description: "Sophisticated, targeted attacks designed to maintain long-term access to systems while avoiding detection.",
    iconClass: "bg-red-100 dark:bg-red-900/30"
  },
  {
    icon: Wifi,
    title: "IoT Vulnerabilities",
    description: "Security weaknesses in connected devices that can be exploited to gain unauthorized access to networks.",
    iconClass: "bg-cyan-100 dark:bg-cyan-900/30"
  }
];

export default function ThreatCategories() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Threat Intelligence Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay informed about the various types of cybersecurity threats that could impact your systems.
            </p>
          </div>
          <Button variant="outline" className="md:mb-1 whitespace-nowrap">
            View All Threats
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {threatCategories.map((category) => (
            <CardWithIcon
              key={category.title}
              icon={category.icon}
              title={category.title}
              description={category.description}
              iconClassName={category.iconClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
