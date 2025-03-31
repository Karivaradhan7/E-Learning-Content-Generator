
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FileText,
  BookText,
  HelpCircle,
  Lightbulb,
  ClipboardCheck,
  Layers,
  Home,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  HelpCircleIcon
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface FeatureItem {
  title: string;
  path: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  subItems?: { title: string; path: string }[];
}

const features: FeatureItem[] = [
  {
    title: "Home",
    path: "/",
    icon: Home,
  },
  {
    title: "Features",
    path: "#",
    icon: Layers,
    subItems: [
      { title: "Content Generator", path: "/content-generator" },
      { title: "Quiz Generator", path: "/quiz-generator" },
      { title: "E-learning Materials", path: "/learning-materials" },
      { title: "AI Notes Generator", path: "/notes-generator" },
      { title: "Flashcard Generator", path: "/flashcard-generator" },
      { title: "AI Learning Assistant", path: "/learning-assistant" },
    ],
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: HelpCircleIcon,
  }
];

export function AppSidebar() {
  const location = useLocation();
  const { state, toggleSidebar } = useSidebar();
  const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);

  // Check if any subitem matches the current path
  const isSubMenuActive = (feature: FeatureItem) => {
    return feature.subItems?.some((item) => item.path === location.pathname);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          {/* Empty space where branding was removed */}
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* Add the sidebar toggle button here */}
        <div className="px-4 py-3 border-b border-sidebar-border">
          <button
            onClick={toggleSidebar}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label={state === "expanded" ? "Collapse sidebar" : "Expand sidebar"}
          >
            {state === "expanded" ? (
              <>
                <ChevronLeft size={18} />
                <span>Collapse</span>
              </>
            ) : (
              <ChevronRight size={18} />
            )}
          </button>
        </div>
        
        {/* Navigation menu with improved spacing */}
        <SidebarMenu className="mt-6 space-y-1">
          {features.map((feature) => (
            <SidebarMenuItem key={feature.title}>
              {feature.subItems ? (
                <Collapsible 
                  open={openSubMenu === feature.title || isSubMenuActive(feature)} 
                  onOpenChange={(open) => {
                    setOpenSubMenu(open ? feature.title : null);
                  }}
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      isActive={openSubMenu === feature.title || isSubMenuActive(feature)}
                      tooltip={state === "collapsed" ? feature.title : undefined}
                    >
                      <feature.icon />
                      <span>{feature.title}</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {feature.subItems.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={location.pathname === subItem.path}
                          >
                            <Link to={subItem.path}>
                              {subItem.title}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === feature.path}
                  tooltip={feature.title}
                >
                  <Link to={feature.path}>
                    <feature.icon />
                    <span>{feature.title}</span>
                  </Link>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-4 py-2 text-xs">
          <div className="grid grid-cols-1 gap-2">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
          <div className="mt-4 text-muted-foreground">
            © {new Date().getFullYear()} Aptora. All rights reserved.
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

// Keep the sidebar toggle button at the center left of the screen
export function SidebarToggleButton() {
  return null;
}
