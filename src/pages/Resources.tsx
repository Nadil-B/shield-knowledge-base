
import { useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Home/Footer";
import ResourcesSection from "@/components/Home/ResourcesSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Shield, AlertTriangle, Download, ExternalLink } from "lucide-react";

const Resources = () => {
  // Update the page title
  useEffect(() => {
    document.title = "CyberShield | Security Resources";
  }, []);

  const additionalResources = [
    {
      title: "NCSC Cyber Security Guidance",
      description: "Official UK government cybersecurity guidance and best practices",
      url: "https://www.ncsc.gov.uk/guidance",
      category: "Official Guidance"
    },
    {
      title: "OWASP Top 10",
      description: "The most critical web application security risks and how to prevent them",
      url: "https://owasp.org/www-project-top-ten/",
      category: "Web Security"
    },
    {
      title: "NIST Cybersecurity Framework",
      description: "Comprehensive framework for improving cybersecurity posture",
      url: "https://www.nist.gov/cyberframework",
      category: "Frameworks"
    },
    {
      title: "SANS Security Resources",
      description: "Training materials and research papers on various security topics",
      url: "https://www.sans.org/white-papers/",
      category: "Training"
    }
  ];

  const faqItems = [
    {
      question: "How often should I update my cybersecurity knowledge?",
      answer: "Cybersecurity is a rapidly evolving field. We recommend staying updated monthly with new threats and annually reviewing your overall security strategy. Subscribe to security bulletins from NCSC and follow reputable cybersecurity news sources."
    },
    {
      question: "What are the most common cybersecurity mistakes organisations make?",
      answer: "Common mistakes include using weak passwords, failing to update software regularly, not training employees about phishing, inadequate backup strategies, and not having an incident response plan. Our educational guides cover all these areas in detail."
    },
    {
      question: "How can I assess my organisation's security posture?",
      answer: "Start with our vulnerability scanner and security assessments. Conduct regular security audits, implement penetration testing, review access controls, and ensure compliance with relevant standards like ISO 27001 or Cyber Essentials."
    },
    {
      question: "What should I do if I suspect a security breach?",
      answer: "Immediately disconnect affected systems from the network, document everything, contact your IT security team or external experts, preserve evidence, and follow your incident response plan. Report serious breaches to relevant authorities as required by law."
    },
    {
      question: "Are these resources suitable for small businesses?",
      answer: "Absolutely! Our resources are designed for organisations of all sizes. We provide scalable guidance that small businesses can implement gradually, starting with the most critical security measures."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-cyber-blue/5">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mb-10">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Security Resources</h1>
              <p className="text-lg text-muted-foreground">
                Educational materials and tools to enhance your security posture and build awareness.
              </p>
            </div>
          </div>
        </div>
        
        <ResourcesSection />

        {/* Additional Resources Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <ExternalLink className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Additional Resources</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore external resources from trusted cybersecurity organisations and institutions.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mb-12">
                {additionalResources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg mb-2">{resource.title}</CardTitle>
                          <Badge variant="secondary" className="mb-2">{resource.category}</Badge>
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        Visit Resource →
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="mb-12">
                <div className="text-center mb-8">
                  <div className="inline-block mb-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                    <AlertTriangle className="h-8 w-8 text-amber-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Frequently Asked Questions</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Common questions about cybersecurity best practices and implementation.
                  </p>
                </div>

                <Accordion type="single" collapsible className="max-w-3xl mx-auto">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Community Section */}
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Join the Security Community</CardTitle>
                  </div>
                  <CardDescription>
                    Connect with cybersecurity professionals, share knowledge, and stay updated with the latest security trends and best practices.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>Expert discussions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-green-600" />
                      <span>Knowledge sharing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-green-600" />
                      <span>Resource sharing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
