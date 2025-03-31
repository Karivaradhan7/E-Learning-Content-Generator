
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FeaturesMenu } from "./FeaturesMenu";
import { MobileContactMenu } from "./MobileContactMenu";
import { useAuth } from "@/contexts/AuthContext";

interface MobileNavigationProps {
  isOpen: boolean;
  mainNavLinks: Array<{ name: string; path: string }>;
  onSectionClick: (e: React.MouseEvent, sectionId: string) => void;
  onSignupClick: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  mainNavLinks,
  onSectionClick,
  onSignupClick,
}) => {
  const { currentUser } = useAuth();

  return (
    <div
      className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 ease-in-out overflow-hidden z-50",
        isOpen ? "max-h-[100vh] py-4" : "max-h-0"
      )}
    >
      <div className="container mx-auto px-4 flex flex-col space-y-4">
        <Link
          to="/"
          className="py-2 text-foreground/80 hover:text-foreground"
        >
          Home
        </Link>
        
        <FeaturesMenu isMobile={true} />
        
        {mainNavLinks.map((link) => {
          if (link.path.includes('#')) {
            const sectionId = link.path.split('#')[1];
            return (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => onSectionClick(e, sectionId)}
                className="py-2 text-foreground/80 hover:text-foreground cursor-pointer"
              >
                {link.name}
              </a>
            );
          } else {
            return (
              <Link
                key={link.name}
                to={link.path}
                className="py-2 text-foreground/80 hover:text-foreground"
              >
                {link.name}
              </Link>
            );
          }
        })}
        
        <MobileContactMenu />
        
        {!currentUser && (
          <Button
            onClick={onSignupClick}
            className="justify-start font-medium text-primary hover:text-primary/90 hover:bg-transparent"
            variant="ghost"
          >
            Sign up
          </Button>
        )}
      </div>
    </div>
  );
};
