
import React from "react";
import { UserRound } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface UserMenuProps {
  size?: "default" | "sm";
}

export const UserMenu: React.FC<UserMenuProps> = ({ size = "default" }) => {
  const { currentUser, signOut } = useAuth();

  const getUserInitials = () => {
    if (!currentUser || !currentUser.email) return "U";
    return currentUser.email.charAt(0).toUpperCase();
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className={size === "sm" ? "p-1" : "p-2"} 
          aria-label="User menu"
        >
          <Avatar className={size === "sm" ? "h-7 w-7" : "h-8 w-8"}>
            <AvatarFallback 
              className="bg-primary text-primary-foreground"
              style={{ fontSize: size === "sm" ? "0.75rem" : "0.875rem" }}
            >
              {getUserInitials()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-3 py-2 text-sm font-medium text-foreground/80">
          {currentUser?.email}
        </div>
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
