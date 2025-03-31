
import React from "react";
import { ChevronDown, Mail, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const MobileContactMenu: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-between py-2 text-foreground/80 hover:text-foreground bg-transparent border-none w-full text-left">
        Contact <ChevronDown className="h-4 w-4 ml-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white dark:bg-gray-900 w-full p-3 min-w-[200px] z-50">
        <div className="space-y-3 py-1">
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
