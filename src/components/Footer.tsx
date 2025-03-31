
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter, 
  Mail, 
  Phone 
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  // Function to handle navigation to homepage and scroll to section
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // If we're not on the homepage, navigate to homepage with hash
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If we're already on the homepage, just scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Aptora</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Aptora is revolutionizing e-learning with AI technology that adapts to each learner's needs, 
              making education more accessible, personalized, and effective for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="/#features" 
                  onClick={(e) => handleNavigation(e, "features")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="/#testimonials" 
                  onClick={(e) => handleNavigation(e, "testimonials")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a 
                  href="/#about" 
                  onClick={(e) => handleNavigation(e, "about")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-primary-foreground/60 mt-0.5" />
                <span>aaronsonnie@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-primary-foreground/60 mt-0.5" />
                <span>+91 9944226180</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-sm text-center text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Aptora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
