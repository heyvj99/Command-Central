import { Siren, File, Bot, ChartLine } from "lucide-react"
import logo from "@/assets/logo.png";

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
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: ChartLine,
  },
  {
    title: "Incident Management",
    url: "#",
    icon: Siren,
  },
  {
    title: "AI Assistant",
    url: "#",
    icon: Bot,
  },
  {
    title: "Reports",
    url: "#",
    icon: File,
  },
]

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
                <SidebarMenuItem key={item.title} className="p-2">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
