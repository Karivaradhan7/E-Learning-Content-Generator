
import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-6">
        <div className="p-6 bg-card rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            At Aptora, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our e-learning platform.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this
            privacy policy, please do not access the platform.
          </p>
        </div>

        <div className="space-y-4">
          <Collapsible className="border rounded-lg overflow-hidden">
            <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium bg-muted/50 hover:bg-muted/80">
              <span>Collection of Your Information</span>
              <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 ui-open:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0 text-sm">
              <div className="pt-4 space-y-2">
                <p>We may collect information about you in a variety of ways including:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Personal data you voluntarily provide when using our platform</li>
                  <li>Information automatically collected when visiting our platform</li>
                  <li>Information from third-party services linked to the platform</li>
                </ul>
                <p className="mt-2">
                  This may include your name, email address, learning preferences, and activity on the platform.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="border rounded-lg overflow-hidden">
            <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium bg-muted/50 hover:bg-muted/80">
              <span>Use of Your Information</span>
              <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 ui-open:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0 text-sm">
              <div className="pt-4 space-y-2">
                <p>Having accurate information about you permits us to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Personalize your learning experience and content recommendations</li>
                  <li>Process your transactions and manage your account</li>
                  <li>Send you product updates, technical notices, and support messages</li>
                  <li>Improve our platform based on usage patterns and preferences</li>
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="border rounded-lg overflow-hidden">
            <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium bg-muted/50 hover:bg-muted/80">
              <span>Data Storage and Protection</span>
              <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 ui-open:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0 text-sm">
              <div className="pt-4 space-y-2">
                <p>Your data is stored securely on our servers with the following practices:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Encryption of sensitive personal information</li>
                  <li>Regular security assessments and updates</li>
                  <li>Strict access controls for all staff and partners</li>
                  <li>Data retention only for as long as necessary for service provision</li>
                </ul>
                <p className="mt-2">
                  While we implement safeguards designed to protect your information, no security system is impenetrable.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="p-6 bg-card rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
