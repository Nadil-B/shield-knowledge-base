
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface CardWithIconProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

export default function CardWithIcon({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
}: CardWithIconProps) {
  return (
    <div className={cn("cyber-card p-6 flex flex-col items-start", className)}>
      <div className={cn("rounded-full p-3 mb-4 bg-primary/10", iconClassName)}>
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
