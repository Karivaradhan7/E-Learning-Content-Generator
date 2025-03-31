
import React from "react";
import { Mail, Phone } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const ContactPopover: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger className="nav-link font-medium text-sm text-foreground/80 hover:text-foreground">
        Contact
      </PopoverTrigger>
      <PopoverContent 
        className="w-64 p-4 bg-white dark:bg-gray-900 rounded-md shadow-md"
        sideOffset={5}
      >
        <div className="space-y-3">
          <h3 className="text-sm font-medium mb-2">Contact Information</h3>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:aaronsonnie@gmail.com" className="text-foreground/80 hover:text-foreground">
              aaronsonnie@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:+919944226180" className="text-foreground/80 hover:text-foreground">
              +91 9944226180
            </a>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
