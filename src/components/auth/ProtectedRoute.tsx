
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { SignupModal } from "@/components/auth/SignupModal";
import { LoginModal } from "@/components/auth/LoginModal";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser, loading, setRedirectPath } = useAuth();
  const location = useLocation();
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Check for reset password return
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    
    if (mode === 'resetPassword') {
      // Show login modal after password reset
      setShowLoginModal(true);
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  useEffect(() => {
    // If not loading and no user, show signup modal and set redirect path
    if (!loading && !currentUser) {
      setShowSignupModal(true);
      // Store the current path for redirect after login
      setRedirectPath(location.pathname);
    }
  }, [currentUser, loading, location.pathname, setRedirectPath]);

  // Handle modal switching
  const handleSwitchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleSignupSuccess = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const handleLoginClose = () => {
    setShowLoginModal(false);
  };

  // If still loading, don't render anything yet
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>;
  }

  // If user is authenticated, render the protected content
  if (currentUser) {
    return <>{children}</>;
  }

  // If user is not authenticated, show the auth flow but don't redirect
  return (
    <>
      <SignupModal 
        isOpen={showSignupModal} 
        onClose={() => setShowSignupModal(false)} 
        onSuccess={handleSignupSuccess}
        onLoginClick={handleSwitchToLogin}
      />
      
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={handleLoginClose}
        onSignupClick={handleSwitchToSignup}
      />
      
      {/* No redirect - instead show a loading state while modals are open */}
      {!currentUser && !showSignupModal && !showLoginModal && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
    </>
  );
};
