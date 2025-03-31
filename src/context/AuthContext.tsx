import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  User
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/lib/firebase";
import { toast } from "sonner";
import { useNavigate as useReactRouterNavigate, useLocation as useReactRouterLocation } from "react-router-dom";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

type AuthContextType = {
  currentUser: User | null;
  loading: boolean;
  signup: (email: string, password: string) => Promise<User>;
  login: (email: string, password: string) => Promise<User>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  redirectAfterLogin: () => void;
  setRedirectPath: (path: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Create a wrapper component that uses React Router hooks
function AuthProviderWithRouterAccess({ children }: { children: React.ReactNode }) {
  const navigate = useReactRouterNavigate();
  const location = useReactRouterLocation();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [redirectPath, setRedirectPath] = useState<string | null>(null);
  const [showLoginAfterReset, setShowLoginAfterReset] = useState(false);

  // Check if the URL contains the Firebase action=resetPassword parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    
    if (mode === 'resetPassword') {
      // Remove the query parameters to clean up the URL
      // We'll handle opening the login modal once the reset is complete
      window.history.replaceState({}, document.title, window.location.pathname);
      setShowLoginAfterReset(true);
    }
  }, []);

  // Redirect function
  const redirectAfterLogin = () => {
    if (redirectPath) {
      navigate(redirectPath);
      setRedirectPath(null);
    } else if (location.state && location.state.from) {
      navigate(location.state.from.pathname);
    } else {
      // If no redirect path, stay on current page
      navigate(location.pathname);
    }
  };

  // Sign up function
  const signup = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!");
      return result.user;
    } catch (error: any) {
      let message = "Failed to create an account";
      if (error?.code === "auth/email-already-in-use") {
        message = "Email is already in use";
      } else if (error?.code === "auth/weak-password") {
        message = "Password should be at least 6 characters";
      } else if (error?.code === "auth/invalid-email") {
        message = "Invalid email address";
      }
      toast.error(message);
      throw error;
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
      return result.user;
    } catch (error: any) {
      let message = "Failed to log in";
      if (error?.code === "auth/user-not-found" || error?.code === "auth/wrong-password") {
        message = "Invalid email or password";
      } else if (error?.code === "auth/too-many-requests") {
        message = "Too many unsuccessful login attempts, please try again later";
      }
      toast.error(message);
      throw error;
    }
  };

  // Reset password function
  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return;
    } catch (error: any) {
      let message = "Failed to reset password";
      if (error?.code === "auth/user-not-found") {
        message = "No account found with this email address";
      } else if (error?.code === "auth/invalid-email") {
        message = "Invalid email address";
      }
      toast.error(message);
      throw error;
    }
  };

  // Sign out function
  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Failed to log out");
      throw error;
    }
  };

  // Set up auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    signup,
    login,
    signOut,
    resetPassword,
    redirectAfterLogin,
    setRedirectPath: (path: string) => setRedirectPath(path)
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Export the AuthProvider that doesn't directly use router hooks
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <AuthProviderWithRouterAccess>{children}</AuthProviderWithRouterAccess>;
}
