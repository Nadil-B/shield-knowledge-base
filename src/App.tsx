
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThreatIntelligence from "./pages/ThreatIntelligence";
import SecuritySolutions from "./pages/SecuritySolutions";
import Advisories from "./pages/Advisories";
import Resources from "./pages/Resources";
import SecurityAssessments from "./pages/SecurityAssessments";
import VulnerabilityScanner from "./pages/VulnerabilityScanner";
import CyberAI from "./pages/CyberAI";
import SecurityQuiz from "./pages/SecurityQuiz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/threat-intelligence" element={<ThreatIntelligence />} />
          <Route path="/security-solutions" element={<SecuritySolutions />} />
          <Route path="/advisories" element={<Advisories />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/security-assessments" element={<SecurityAssessments />} />
          <Route path="/vulnerability-scanner" element={<VulnerabilityScanner />} />
          <Route path="/cyber-ai" element={<CyberAI />} />
          <Route path="/security-quiz" element={<SecurityQuiz />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
