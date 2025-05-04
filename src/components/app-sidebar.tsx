import { Siren, File, Bot, ChartLine } from "lucide-react";
import logo from "@/assets/logo.png";
import { NavLink } from "react-router-dom";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/Dashboard",
    icon: ChartLine,
  },
  {
    title: "Incident Management",
    url: "/",
    icon: Siren,
  },
  {
    title: "AI Assistant",
    url: "/AIAssistant",
    icon: Bot,
  },
  {
    title: "Reports",
    url: "/Reports",
    icon: File,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <img src={logo} alt="Command Central Logo" className="w-fit" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <NavLink key={item.title} to={item.url} end>
                  {({ isActive }) => (
                    <SidebarMenuItem className="p-2">
                      <SidebarMenuButton
                        className={cn(
                          "w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors",
                          isActive
                            ? "bg-muted font-semibold text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </NavLink>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
