
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SignupModal } from "@/components/auth/SignupModal";
import { LoginModal } from "@/components/auth/LoginModal";
import { useAuth } from "@/contexts/AuthContext";
import { UserMenu } from "./header/UserMenu";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MobileNavigation } from "./header/MobileNavigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const location = useLocation();
  const { currentUser } = useAuth();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { name: "Testimonials", path: "/#testimonials" },
    { name: "FAQ", path: "/faq" },
    { name: "About Us", path: "/#about" },
  ];

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const handleSignupClick = () => {
    setShowSignupModal(true);
  };

  const handleSignupSuccess = () => {
    setShowSignupModal(false);
    // Automatically open login modal after successful signup
    setShowLoginModal(true);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  // Add handlers for switching between modals
  const handleSwitchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out w-full",
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-md shadow-sm dark:bg-black/70"
            : "py-5 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl">Aptora</span>
          </Link>

          <DesktopNavigation 
            mainNavLinks={mainNavLinks}
            onSectionClick={handleSectionClick}
            onSignupClick={handleSignupClick}
          />

          <div className="md:hidden flex items-center gap-2">
            {currentUser ? (
              <UserMenu size="sm" />
            ) : (
              <Button
                onClick={handleSignupClick}
                variant="ghost"
                size="sm"
                className="p-1"
              >
                <LogIn className="h-5 w-5" />
              </Button>
            )}
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground/80 hover:text-foreground"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <MobileNavigation 
          isOpen={isOpen}
          mainNavLinks={mainNavLinks}
          onSectionClick={handleSectionClick}
          onSignupClick={handleSignupClick}
        />
      </header>

      {/* Modals */}
      <SignupModal 
        isOpen={showSignupModal} 
        onClose={() => setShowSignupModal(false)} 
        onSuccess={handleSignupSuccess}
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

export default Header;
