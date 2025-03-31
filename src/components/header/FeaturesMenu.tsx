
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ChevronDown, FileText, FlaskConical, Layers, Lightbulb, MessagesSquare, ScrollText, MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { SignupModal } from "@/components/auth/SignupModal";
import { LoginModal } from "@/components/auth/LoginModal";

interface FeaturesMenuProps {
  isMobile?: boolean;
}

export const FeaturesMenu: React.FC<FeaturesMenuProps> = ({ isMobile = false }) => {
  const navigate = useNavigate();
  const { currentUser, setRedirectPath } = useAuth();
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const features = [
    {
      name: "Content Generator",
      description: "Create educational content",
      icon: <FileText className="h-4 w-4 mr-2" />,
      path: "/content-generator",
    },
    {
      name: "Quiz Generator",
      description: "Craft personalized quizzes",
      icon: <FlaskConical className="h-4 w-4 mr-2" />,
      path: "/quiz-generator",
    },
    {
      name: "E-learning Materials",
      description: "Access study resources",
      icon: <Layers className="h-4 w-4 mr-2" />,
      path: "/learning-materials",
    },
    {
      name: "AI Notes Generator",
      description: "Summarize and organize notes",
      icon: <ScrollText className="h-4 w-4 mr-2" />,
      path: "/notes-generator",
    },
    {
      name: "Flashcard Generator",
      description: "Create study flashcards",
      icon: <Lightbulb className="h-4 w-4 mr-2" />,
      path: "/flashcard-generator",
    },
    {
      name: "AI Learning Assistant",
      description: "Get personalized help",
      icon: <MessagesSquare className="h-4 w-4 mr-2" />,
      path: "/learning-assistant",
    },
  ];

  const handleFeatureClick = (path: string) => {
    if (!currentUser) {
      // Store the path for redirect after login
      setRedirectPath(path);
      // Show signup modal instead of redirecting
      setShowSignupModal(true);
      return;
    }
    
    // If user is authenticated, navigate directly
    navigate(path);
  };

  // Handle modal switching
  const handleSwitchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    // After login, the redirect happens automatically via the AuthContext
  };

  if (isMobile) {
    return (
      <>
        <div className="py-2">
          <div className="mb-2 px-3 text-lg font-medium">Features</div>
          <ul className="space-y-1">
            {features.map((feature) => (
              <li key={feature.name}>
                <button
                  onClick={() => handleFeatureClick(feature.path)}
                  className="w-full text-left px-3 py-2 text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md flex items-center"
                >
                  {feature.icon}
                  {feature.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Add modals */}
        <SignupModal 
          isOpen={showSignupModal} 
          onClose={() => setShowSignupModal(false)} 
          onSuccess={handleSwitchToLogin}
          onLoginClick={handleSwitchToLogin}
        />
        
        <LoginModal 
          isOpen={showLoginModal} 
          onClose={() => setShowLoginModal(false)}
          onSignupClick={handleSwitchToSignup}
        />
      </>
    );
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "flex items-center gap-1 text-foreground/80 hover:text-foreground",
              isMobile && "justify-start w-full"
            )}
          >
            Features
            <ChevronDown size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[240px]">
          {features.map((feature, index) => (
            <React.Fragment key={feature.name}>
              <DropdownMenuItem
                onClick={() => handleFeatureClick(feature.path)}
                className="flex items-start py-2 px-3 cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="mr-2">{feature.icon}</div>
                  <div>
                    <p className="font-medium">{feature.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
              {index < features.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* Add modals */}
      <SignupModal 
        isOpen={showSignupModal} 
        onClose={() => setShowSignupModal(false)} 
        onSuccess={handleSwitchToLogin}
        onLoginClick={handleSwitchToLogin}
      />
      
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onSignupClick={handleSwitchToSignup}
      />
    </>
  );
};
