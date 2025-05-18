import { Users, Home, Proportions,  Settings ,User,LogOut,Building,BotMessageSquare, TrendingUp} from "lucide-react"

import {
  Sidebar,
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
    title: "Home",
    url: "/app",
    icon: Home,
  },
  {
    title: "Employees",
    url: "#",
    icon: Users,
  },
  {
    title: "Companies",
    url: "#",
    icon: Building,
  },
  {
    title: "Reports",
    url: "#",
    icon: Proportions,
  },
  {
    title: "AI Assistant",
    url: "#",
    icon: BotMessageSquare,
  },
  {
    title: "Trending Listings",
    url: "#",
    icon: TrendingUp,
  },
  {
    title: "Account Information",
    url: "#",
    icon: User,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Logout",
    url: "#",
    icon: LogOut,
  },
  
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent >
        <SidebarGroup>
      <SidebarGroupLabel className=" w-36 h-18">
  <img
    src="https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bknDQjybQqPvSr9wEOR5WAN7dcYG2tHfylU4I"
    className="mx-auto my-6 h-15 max-h-24 w-auto"
  />
</SidebarGroupLabel>

          <SidebarGroupContent >
            <SidebarMenu >
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="text-md">{item.title}</span>
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
