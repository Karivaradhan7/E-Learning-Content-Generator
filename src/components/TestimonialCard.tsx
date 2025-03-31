
import React from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  review: string;
  className?: string;
  index: number;
}

const TestimonialCard = ({
  name,
  role,
  image,
  review,
  className,
  index,
}: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "testimonial-card opacity-0",
        `animate-fade-in animate-stagger-${index + 1}`,
        className
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full border">
          <img 
            src={image} 
            alt={name} 
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="italic text-muted-foreground">{review}</p>
    </div>
  );
};

export default TestimonialCard;
