"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  Users,
  Home,
  PieChart,
  Settings,
  User,
  LogOut,
  Building,
  Bot,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Bell,
  BarChart2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Navigation items grouped by category
const navigationItems = [
  {
    title: "Main",
    items: [
      {
        title: "Dashboard",
        url: "/app",
        icon: Home,
        badge: null,
      },
      {
        title: "Trending Listings",
        url: "/app/trending",
        icon: TrendingUp,
        badge: {
          content: "New",
          variant: "default" as const,
        },
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Employees",
        url: "/app/employees",
        icon: Users,
        badge: null,
      },
      {
        title: "Companies",
        url: "/app/companies",
        icon: Building,
        badge: {
          content: "3",
          variant: "outline" as const,
        },
      },
      {
        title: "Reports",
        url: "/app/reports",
        icon: PieChart,
        badge: null,
      },
      {
        title: "Wealth Analysis",
        url: "/app/wealth-analysis",
        icon: BarChart2,
        badge: null,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        title: "AI Assistant",
        url: "/app/ai-assistant",
        icon: Bot,
        badge: {
          content: "Beta",
          variant: "secondary" as const,
        },
      },
    ],
  },
]

// User-related items
const userItems = [
  {
    title: "Account",
    url: "/app/account",
    icon: User,
  },
  {
    title: "Settings",
    url: "/app/system-settings",
    icon: Settings,
  },
  {
    title: "Logout",
    url: "/logout",
    icon: LogOut,
  },
]

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  // Dispatch an event when the sidebar width changes
  useEffect(() => {
    const width = collapsed ? "50px" : "240px"
    const event = new CustomEvent("sidebarWidthChange", {
      detail: { width },
    })
    window.dispatchEvent(event)
  }, [collapsed])

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-white border-r border-border transition-all duration-300 ease-in-out   top-0 left-0 z-40",
        collapsed ? "w-[50px]" : "w-[240px]",
      )}
    >
      {/* Logo */}
      <div
        className={cn("flex items-center p-4 border-b border-border", collapsed ? "justify-center" : "justify-between")}
      >
        {!collapsed && (
          <img
            src="https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bknDQjybQqPvSr9wEOR5WAN7dcYG2tHfylU4I"
            className="h-8 w-auto"
            alt="Logo"
          />
        )}
        {collapsed && (
          <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold text-lg">W</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 py-4 px-2">
        <TooltipProvider delayDuration={0}>
          {navigationItems.map((group, index) => (
            <div key={group.title} className="mb-4">
              {!collapsed && (
                <h3 className="text-xs uppercase text-muted-foreground font-medium mb-2 px-2">{group.title}</h3>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive =
                    item.url === "/app" ? pathname === "/app" : pathname === item.url || pathname?.startsWith(item.url + "/")
                  return (
                    <Tooltip key={item.title}>
                      <TooltipTrigger asChild>
                        <a
                          href={item.url}
                          className={cn(
                            "flex items-center gap-3 rounded-md text-sm transition-colors",
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted text-muted-foreground hover:text-foreground",
                            collapsed ? "justify-center px-1 py-2" : "px-3 py-2",
                          )}
                        >
                          <item.icon
                            className={cn("h-5 w-5", isActive ? "text-primary-foreground" : "text-muted-foreground")}
                          />
                          {!collapsed && <span className="flex-1">{item.title}</span>}
                          {!collapsed && item.badge && (
                            <Badge variant={item.badge.variant} className="ml-auto">
                              {item.badge.content}
                            </Badge>
                          )}
                        </a>
                      </TooltipTrigger>
                      {collapsed && (
                        <TooltipContent side="right">
                          <div className="flex items-center gap-2">
                            <span>{item.title}</span>
                            {item.badge && (
                              <Badge variant={item.badge.variant} className="ml-auto">
                                {item.badge.content}
                              </Badge>
                            )}
                          </div>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  )
                })}
              </div>
            </div>
          ))}
        </TooltipProvider>
      </div>

      {/* Collapse/Expand button */}
      {collapsed ? (
        <div className="px-1 py-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-full h-8 rounded-md justify-center"
            onClick={() => setCollapsed(false)}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Expand sidebar</span>
          </Button>
        </div>
      ) : (
        <div className="px-3 py-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-muted-foreground hover:text-foreground"
            onClick={() => setCollapsed(true)}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            <span>Collapse</span>
          </Button>
        </div>
      )}

      <Separator />

      {/* User section */}
      <div className={cn("p-2", collapsed ? "px-1" : "p-3")}>
        <TooltipProvider delayDuration={0}>
          {collapsed ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-center mb-4">
                  <Avatar className="h-8 w-8 border-2 border-primary cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">JD</AvatarFallback>
                  </Avatar>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">john.doe@example.com</p>
                </div>
              </TooltipContent>
            </Tooltip>
          ) : (
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground truncate">john.doe@example.com</p>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
            </div>
          )}

          <div className="space-y-1">
            {userItems.map((item) => (
              <Tooltip key={item.title}>
                <TooltipTrigger asChild>
                  <a
                    href={item.url}
                    className={cn(
                      "flex items-center gap-3 rounded-md text-sm transition-colors hover:bg-muted text-muted-foreground hover:text-foreground",
                      collapsed ? "justify-center px-1 py-2" : "px-3 py-2",
                      item.title === "Logout" && "text-destructive hover:text-destructive hover:bg-destructive/10",
                    )}
                  >
                    <item.icon
                      className={cn("h-4 w-4", item.title === "Logout" ? "text-destructive" : "text-muted-foreground")}
                    />
                    {!collapsed && <span>{item.title}</span>}
                  </a>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right">
                    <span>{item.title}</span>
                  </TooltipContent>
                )}
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </aside>
  )
}
