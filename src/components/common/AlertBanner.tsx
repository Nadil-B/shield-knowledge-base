
import { cn } from "@/lib/utils";
import { AlertCircle, X } from "lucide-react";
import { useState } from "react";

interface AlertBannerProps {
  title: string;
  message: string;
  severity?: "info" | "warning" | "critical";
  className?: string;
  dismissible?: boolean;
}

export default function AlertBanner({
  title,
  message,
  severity = "info",
  className,
  dismissible = true,
}: AlertBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const severityStyles = {
    info: "border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200",
    warning: "border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200",
    critical: "border-cyber-accent bg-cyber-accent/10 text-cyber-accent dark:bg-cyber-accent/20",
  };

  return (
    <div
      className={cn(
        "security-alert flex items-start justify-between",
        severityStyles[severity],
        className
      )}
    >
      <div className="flex items-start">
        <AlertCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm mt-1">{message}</p>
        </div>
      </div>
      {dismissible && (
        <button
          className="ml-4 p-1 hover:bg-background/20 rounded-full"
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss alert"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
