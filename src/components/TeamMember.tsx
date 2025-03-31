
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  linkedin?: string;
  github?: string;
  email?: string;
  className?: string;
}

export const TeamMember = ({
  name,
  role,
  bio,
  photoUrl,
  linkedin,
  github,
  email,
  className,
}: TeamMemberProps) => {
  return (
    <div className={cn("flex flex-col items-center p-6 bg-card rounded-xl shadow-sm border", className)}>
      <div className="w-40 h-40 overflow-hidden rounded-full mb-4 border-2 border-primary/20">
        <img
          src={photoUrl}
          alt={`${name} - ${role}`}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <h3 className="text-xl font-bold mt-2">{name}</h3>
      <p className="text-primary font-medium mb-2">{role}</p>
      <p className="text-muted-foreground text-center text-sm mb-4">{bio}</p>
      
      <div className="flex space-x-4 mt-auto">
        {linkedin && (
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <Linkedin size={20} />
          </a>
        )}
        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`${name}'s GitHub profile`}
          >
            <Github size={20} />
          </a>
        )}
        {email && (
          <a 
            href={`mailto:${email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`Email ${name}`}
          >
            <Mail size={20} />
          </a>
        )}
      </div>
    </div>
  );
};
