"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
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
  Shield,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

// Navigation items grouped by role
const navigationItems = {
  SUPER_ADMIN: [
    {
      title: "Main",
      items: [
        {
          title: "Home",
          url: "/app/super-admin",
          icon: Home,
          badge: null,
        },
        {
          title: "Companies",
          url: "/app/super-admin/companies",
          icon: Building,
          badge: null,
        },
        {
          title: "Reports",
          url: "/app/super-admin/reports",
          icon: PieChart,
          badge: null,
        },
      ],
    },
    {
      title: "Management",
      items: [
        {
          title: "System Settings",
          url: "/app/super-admin/system-settings",
          icon: Settings,
          badge: null,
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          title: "AI Assistant",
          url: "/app/super-admin/ai-assistant",
          icon: Bot,
          badge: {
            content: "Beta",
            variant: "secondary" as const,
          },
        },
      ],
    },
  ],
  COMPANY_ADMIN: [
    {
      title: "Main",
      items: [
        {
          title: "Home",
          url: "/app/company-admin",
          icon: Home,
          badge: null,
        },
        {
          title: "Employees",
          url: "/app/company-admin/employees",
          icon: Users,
          badge: null,
        },
        {
          title: "Properties",
          url: "/app/company-admin/properties",
          icon: Building,
          badge: null,
        },
      ],
    },
    {
      title: "Management",
      items: [
        {
          title: "Roles & Permissions",
          url: "/app/company-admin/roles",
          icon: Shield,
          badge: null,
        },
        {
          title: "Reports",
          url: "/app/company-admin/reports",
          icon: PieChart,
          badge: null,
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          title: "AI Assistant",
          url: "/app/company-admin/ai-assistant",
          icon: Bot,
          badge: {
            content: "Beta",
            variant: "secondary" as const,
          },
        },
      ],
    },
  ],
  EMPLOYEE: [
    {
      title: "Main",
      items: [
        {
          title: "Home",
          url: "/app/employee/home",
          icon: Home,
          badge: null,
        },
        {
          title: "Wealth Analysis",
          url: "/app/employee/wealth-analysis",
          icon: BarChart2,
          badge: null,
        },
        {
          title: "Trending",
          url: "/app/employee/trending",
          icon: TrendingUp,
          badge: null,
        },
        {
          title: "Reports",
          url: "/app/employee/reports",
          icon: PieChart,
          badge: null,
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          title: "AI Assistant",
          url: "/app/employee/ai-assistant",
          icon: Bot,
          badge: {
            content: "Beta",
            variant: "secondary" as const,
          },
        },
      ],
    },
  ],
}

// Available roles for switching based on current role
const availableRoles = {
  SUPER_ADMIN: ["SUPER_ADMIN"],
  COMPANY_ADMIN: ["COMPANY_ADMIN", "EMPLOYEE"],
  EMPLOYEE: ["EMPLOYEE"],
}

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [currentRole, setCurrentRole] = useState<string>("")
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.user?.role) {
      setCurrentRole(session.user.role)
    }
  }, [session])

  // Get navigation items based on current role
  const roleNavigationItems = navigationItems[currentRole as keyof typeof navigationItems] || navigationItems.EMPLOYEE

  // Handle role switch
  const handleRoleSwitch = async (newRole: string) => {
    try {
      const response = await fetch("/api/auth/switch-role", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      })

      if (!response.ok) throw new Error("Failed to switch role")

      setCurrentRole(newRole)
      // Redirect to the home page of the new role using hyphens
      const rolePath = newRole.toLowerCase().replace('_', '-')
      router.push(`/app/${rolePath}/home`)
    } catch (error) {
      console.error("Error switching role:", error)
    }
  }

  // Dispatch an event when the sidebar width changes
  useEffect(() => {
    const width = collapsed ? "50px" : "240px"
    const event = new CustomEvent("sidebarWidthChange", {
      detail: { width },
    })
    window.dispatchEvent(event)
  }, [collapsed])

  const handleLogout = async () => {
    try {
      await signOut({ redirect: true, callbackUrl: '/auth/login' })
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-white border-r border-border transition-all duration-300 ease-in-out top-0 left-0 z-40",
        collapsed ? "w-[50px]" : "w-[240px]",
      )}
    >
      {/* Logo */}
      <div
        className={cn("flex items-center p-4 border-b border-border", collapsed ? "justify-center" : "justify-between")}
      >
        {!collapsed && (
          <img
            src="/globe.svg"
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

      {/* Role Switch */}
      {!collapsed && session?.user && (
        <div className="p-4 border-b border-border">
          <Select
            value={currentRole}
            onValueChange={handleRoleSwitch}
            defaultValue={session.user.role}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select role">
                {currentRole.replace("_", " ")}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {availableRoles[session.user.role as keyof typeof availableRoles]?.map((role) => (
                <SelectItem key={role} value={role}>
                  {role.replace("_", " ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 py-4 px-2">
        <TooltipProvider delayDuration={0}>
          {roleNavigationItems.map((group, index) => (
            <div key={group.title} className="mb-4">
              {!collapsed && (
                <h3 className="text-xs uppercase text-muted-foreground font-medium mb-2 px-2">{group.title}</h3>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  // Only highlight the item if the pathname matches exactly
                  const isActive = pathname === item.url;
                  return (
                    <Tooltip key={item.title}>
                      <TooltipTrigger asChild>
                        <Link
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
                        </Link>
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
      <div className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={session?.user?.image || ""} alt={session?.user?.name || ""} />
            <AvatarFallback>{session?.user?.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{session?.user?.name}</p>
              <p className="text-xs text-muted-foreground truncate">{session?.user?.email}</p>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </div>
    </aside>
  )
}
