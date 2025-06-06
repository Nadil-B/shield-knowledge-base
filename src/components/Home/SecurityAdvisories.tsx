
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, ArrowRight, ShieldAlert } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const advisories = [
  {
    id: "CVE-2025-0452",
    title: "Critical Vulnerability in OpenSSH",
    severity: "critical",
    date: "June 2, 2025",
    status: "active"
  },
  {
    id: "CVE-2025-1187",
    title: "Remote Code Execution in Apache Web Server",
    severity: "high",
    date: "May 28, 2025",
    status: "active"
  },
  {
    id: "CVE-2025-0971",
    title: "Authentication Bypass in Popular CMS",
    severity: "high",
    date: "May 15, 2025",
    status: "active"
  },
  {
    id: "CVE-2025-0652",
    title: "SQL Injection Vulnerability in Database System",
    severity: "medium",
    date: "April 30, 2025",
    status: "patched"
  },
  {
    id: "CVE-2025-0238",
    title: "Cross-Site Scripting in Web Framework",
    severity: "medium",
    date: "April 22, 2025",
    status: "patched"
  }
];

const getSeverityBadge = (severity: string) => {
  switch (severity) {
    case "critical":
      return <Badge className="bg-cyber-accent hover:bg-cyber-accent/90">{severity}</Badge>;
    case "high":
      return <Badge className="bg-amber-500 hover:bg-amber-600">{severity}</Badge>;
    case "medium":
      return <Badge className="bg-yellow-500 hover:bg-yellow-600">{severity}</Badge>;
    case "low":
      return <Badge variant="outline">{severity}</Badge>;
    default:
      return <Badge variant="outline">{severity}</Badge>;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge variant="outline" className="border-cyber-accent text-cyber-accent">{status}</Badge>;
    case "patched":
      return <Badge variant="outline" className="border-green-500 text-green-500">{status}</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export default function SecurityAdvisories() {
  return (
    <section id="advisories" className="py-16">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Latest Security Advisories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Critical vulnerabilities and security alerts that require immediate attention.
            </p>
          </div>
          <Button className="bg-cyber-teal hover:bg-cyber-teal/90">
            Subscribe to Alerts
            <ShieldAlert className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <Alert className="mb-8 border-cyber-accent">
          <AlertTriangle className="h-4 w-4 text-cyber-accent" />
          <AlertTitle>Critical Alert</AlertTitle>
          <AlertDescription>
            Multiple zero-day vulnerabilities discovered affecting major operating systems. Apply security patches immediately.
          </AlertDescription>
        </Alert>
        
        <div className="rounded-lg border shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead className="w-[40%]">Vulnerability</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[100px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {advisories.map((advisory) => (
                <TableRow key={advisory.id}>
                  <TableCell className="font-mono text-sm">{advisory.id}</TableCell>
                  <TableCell className="font-medium">{advisory.title}</TableCell>
                  <TableCell>{getSeverityBadge(advisory.severity)}</TableCell>
                  <TableCell>{advisory.date}</TableCell>
                  <TableCell>{getStatusBadge(advisory.status)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline">
            View All Advisories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
