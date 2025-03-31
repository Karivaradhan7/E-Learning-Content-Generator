
import React from "react";
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FeaturesMenu } from "./FeaturesMenu";
import { ContactPopover } from "./ContactPopover";
import { UserMenu } from "./UserMenu";
import { useAuth } from "@/contexts/AuthContext";

interface DesktopNavigationProps {
  mainNavLinks: Array<{ name: string; path: string }>;
  onSectionClick: (e: React.MouseEvent, sectionId: string) => void;
  onSignupClick: () => void;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  mainNavLinks,
  onSectionClick,
  onSignupClick,
}) => {
  const { currentUser } = useAuth();

  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link 
        to="/" 
        className="nav-link font-medium text-sm text-foreground/80 hover:text-foreground"
      >
        Home
      </Link>
      
      <FeaturesMenu />
      
      {mainNavLinks.map((link) => {
        if (link.path.includes('#')) {
          const sectionId = link.path.split('#')[1];
          return (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => onSectionClick(e, sectionId)}
              className="nav-link font-medium text-sm text-foreground/80 hover:text-foreground cursor-pointer"
            >
              {link.name}
            </a>
          );
        } else {
          return (
            <Link
              key={link.name}
              to={link.path}
              className="nav-link font-medium text-sm text-foreground/80 hover:text-foreground"
            >
              {link.name}
            </Link>
          );
        }
      })}

      <ContactPopover />
      
      {currentUser ? (
        <UserMenu />
      ) : (
        <Button 
          onClick={onSignupClick}
          variant="ghost" 
          size="sm"
          className="nav-link font-medium text-sm text-primary hover:text-primary/90 hover:bg-transparent"
        >
          Sign up
        </Button>
      )}
      
      <ThemeToggle />
    </nav>
  );
};
