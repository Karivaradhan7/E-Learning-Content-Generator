
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  index: number;
  path: string;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className,
  index,
  path,
}: FeatureCardProps) => {
  const animationDelay = index * 100;

  return (
    <Link to={path}>
      <div
        className={cn(
          "group feature-card opacity-0 cursor-pointer",
          `animate-fade-in animate-stagger-${index + 1}`,
          className
        )}
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        <div className="feature-icon-container mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
