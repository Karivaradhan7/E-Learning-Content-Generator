
import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-6">
        <div className="p-6 bg-card rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">What Are Cookies</h2>
          <p>
            Cookies are small pieces of text sent to your web browser by a website you visit. 
            A cookie file is stored in your web browser and allows the Service or a third-party 
            to recognize you and make your next visit easier and the Service more useful to you.
          </p>
        </div>

        <div className="space-y-4">
          <Collapsible className="border rounded-lg overflow-hidden">
            <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium bg-muted/50 hover:bg-muted/80">
              <span>How Aptora Uses Cookies</span>
              <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 ui-open:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0 text-sm">
              <div className="pt-4 space-y-2">
                <p>We use cookies for several purposes, including:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Essential cookies:</strong> Required for the platform to function properly</li>
                  <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Analytics cookies:</strong> Help us understand how you use our platform</li>
                  <li><strong>Authentication cookies:</strong> Recognize you when you log in to provide a personalized experience</li>
                </ul>
                
                <p className="mt-3">
                  Specifically, we use cookies to:
                </p>
                
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Remember your sidebar preferences and layout settings</li>
                  <li>Keep you logged in between sessions</li>
                  <li>Understand which features you use most frequently</li>
                  <li>Provide personalized learning recommendations</li>
                  <li>Measure the effectiveness of our platform's features</li>
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="border rounded-lg overflow-hidden">
            <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium bg-muted/50 hover:bg-muted/80">
              <span>Types of Cookies We Use</span>
              <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 ui-open:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0 text-sm">
              <div className="pt-4 space-y-3">
                <div>
                  <h3 className="font-medium">Session Cookies</h3>
                  <p>Session cookies are temporary and expire once you close your browser. These help us track your activities during a browser session.</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Persistent Cookies</h3>
                  <p>Persistent cookies remain on your device between browser sessions, allowing us to remember your preferences or actions across multiple visits.</p>
                </div>
                
                <div>
                  <h3 className="font-medium">First-Party Cookies</h3>
                  <p>First-party cookies are set by Aptora directly when you use our platform.</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Third-Party Cookies</h3>
                  <p>Third-party cookies are set by our analytics and service providers to help us improve our platform and user experience.</p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="border rounded-lg overflow-hidden">
            <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium bg-muted/50 hover:bg-muted/80">
              <span>Managing Cookies</span>
              <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 ui-open:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0 text-sm">
              <div className="pt-4 space-y-2">
                <p>You can control and manage cookies in various ways:</p>
                
                <p className="font-medium mt-3">Browser Controls</p>
                <p>Most web browsers allow you to manage cookie settings. These settings can typically be found in the "options" or "preferences" menu of your browser.</p>
                
                <p className="font-medium mt-3">Cookie Preference Center</p>
                <p>Our platform includes a cookie preference center where you can choose which optional cookies you allow us to use.</p>
                
                <p className="mt-3">
                  Please note that blocking some types of cookies may impact your experience of our platform and the services we offer.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="p-6 bg-card rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at:
            <br />
            <a href="mailto:privacy@aptora.com" className="text-primary hover:underline">
              privacy@aptora.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
