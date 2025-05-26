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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Define types for navigation items
type NavigationItem = {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: {
    content: string;
    variant: "default" | "secondary" | "destructive" | "outline";
  } | null;
};

type NavigationGroup = {
  title: string;
  items: NavigationItem[];
};

type NavigationItems = NavigationGroup[];

type UserRole = "SUPER_ADMIN" | "COMPANY_ADMIN" | "EMPLOYEE";

type NavigationItemsByRole = {
  [K in UserRole]: NavigationItems;
};

// Navigation items grouped by role
const ROLE_NAVIGATION_ITEMS: NavigationItemsByRole = {
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
          title: "Property",
          url: "/app/super-admin/property",
          icon: Building,
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
          title: "Dashboard",
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
          title: "Property View",
          url: "/app/employee/property",
          icon: Building,
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
          title: "Employee Reports",
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
const availableRoles: Record<UserRole, UserRole[]> = {
  SUPER_ADMIN: ["SUPER_ADMIN"],
  COMPANY_ADMIN: ["COMPANY_ADMIN", "EMPLOYEE"],
  EMPLOYEE: ["EMPLOYEE"],
}

const userItems = [
  {
    title: "Profile",
    url: "/app/account",
    icon: User,
  },
  {
    title: "Logout",
    url: "#",
    icon: LogOut,
  },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(true)
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()

  // Handle mobile detection and resize
  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768
      setCollapsed(isMobile)
    }

    // Check on mount
    checkMobile()

    // Add resize listener
    window.addEventListener('resize', checkMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Get all navigation items based on user's role
  const getAllNavigationItems = (): NavigationItems => {
    const defaultRole: UserRole = "EMPLOYEE";
    if (!session?.user?.role) return ROLE_NAVIGATION_ITEMS[defaultRole];

    const userRole = session.user.role as UserRole;
    const allowedRoles = availableRoles[userRole] || [];
    
    // Combine navigation items from all allowed roles
    const combinedItems: NavigationItems = [];
    const seenUrls = new Set<string>();
    let aiAssistantAdded = false;
    
    // Helper function to safely get navigation items for a role
    const getRoleItems = (role: UserRole): NavigationItems => {
      return ROLE_NAVIGATION_ITEMS[role] || [];
    };

    // Process roles in priority order (COMPANY_ADMIN first, then EMPLOYEE)
    const sortedRoles = allowedRoles.sort((a, b) => {
      if (a === "COMPANY_ADMIN") return -1;
      if (b === "COMPANY_ADMIN") return 1;
      return 0;
    });

    for (const role of sortedRoles) {
      const roleItems = getRoleItems(role);
      for (const group of roleItems) {
        const existingGroup = combinedItems.find(g => g.title === group.title);
        if (existingGroup) {
          // For existing groups, filter out AI Assistant if already added
          const newItems = group.items.filter(item => {
            if (item.title === "AI Assistant") {
              if (aiAssistantAdded) return false;
              aiAssistantAdded = true;
              return true;
            }
            return !seenUrls.has(item.url);
          });
          newItems.forEach(item => seenUrls.add(item.url));
          existingGroup.items = [...existingGroup.items, ...newItems];
        } else {
          // For new groups, filter out AI Assistant if already added
          const uniqueItems = group.items.filter(item => {
            if (item.title === "AI Assistant") {
              if (aiAssistantAdded) return false;
              aiAssistantAdded = true;
              return true;
            }
            return !seenUrls.has(item.url);
          });
          uniqueItems.forEach(item => seenUrls.add(item.url));
          combinedItems.push({
            ...group,
            items: uniqueItems
          });
        }
      }
    }

    return combinedItems;
  };

  const navigationItems = getAllNavigationItems();

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
        className={cn(
          "flex items-center p-4 border-b border-border",
          collapsed ? "justify-center" : "justify-between"
        )}
      >
        {!collapsed && (
          <Link href="/app" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="/globe.svg"
              className="h-8 w-auto"
              alt="Logo"
            />
            <span className="text-lg font-semibold">Wealth Map</span>
          </Link>
        )}
        {collapsed && (
          <Link href="/app" className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
            <span className="text-primary font-bold text-lg">W</span>
          </Link>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <TooltipProvider delayDuration={0}>
          {navigationItems.map((group: NavigationGroup, index: number) => (
            <div key={`${group.title}-${index}`} className="mb-4">
              {!collapsed && (
                <h3 className="text-xs uppercase text-muted-foreground font-medium mb-2 px-2">{group.title}</h3>
              )}
              <div className="space-y-1">
                {group.items.map((item: NavigationItem) => {
                  const isActive = pathname === item.url;
                  const uniqueKey = item.url.replace(/\//g, '-');
                  
                  const linkContent = (
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
                  );

                  return collapsed ? (
                    <Tooltip key={uniqueKey}>
                      <TooltipTrigger asChild>
                        {linkContent}
                      </TooltipTrigger>
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
                    </Tooltip>
                  ) : (
                    <div key={uniqueKey}>
                      {linkContent}
                    </div>
                  );
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
        <TooltipProvider delayDuration={0}>
          {collapsed ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-center mb-4">
                  <Avatar className="h-8 w-8 border-2 border-primary cursor-pointer">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      {session?.user?.name?.[0] || "U"}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">
                <div>
                  <p className="font-medium">{session?.user?.name || "User"}</p>
                  <p className="text-xs text-muted-foreground">{session?.user?.email || "user@example.com"}</p>
                </div>
              </TooltipContent>
            </Tooltip>
          ) : (
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="h-9 w-9">
                <AvatarFallback>{session?.user?.name?.[0] || "U"}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{session?.user?.name || "User"}</p>
                <p className="text-xs text-muted-foreground truncate">{session?.user?.email || "user@example.com"}</p>
              </div>
            </div>
          )}

          <div className="space-y-1">
            {userItems.map((item) => {
              const itemContent = item.title === "Logout" ? (
                <button
                  onClick={handleLogout}
                  className={cn(
                    "w-full flex items-center gap-3 rounded-md text-sm transition-colors hover:bg-muted text-destructive hover:text-destructive hover:bg-destructive/10",
                    collapsed ? "justify-center px-1 py-2" : "px-3 py-2"
                  )}
                >
                  <LogOut className="h-4 w-4 text-destructive" />
                  {!collapsed && <span>Logout</span>}
                </button>
              ) : (
                <a
                  href={item.url}
                  className={cn(
                    "flex items-center gap-3 rounded-md text-sm transition-colors hover:bg-muted text-muted-foreground hover:text-foreground",
                    collapsed ? "justify-center px-1 py-2" : "px-3 py-2"
                  )}
                >
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                  {!collapsed && <span>{item.title}</span>}
                </a>
              );

              return collapsed ? (
                <Tooltip key={item.title}>
                  <TooltipTrigger asChild>
                    {itemContent}
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <span>{item.title}</span>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <div key={item.title}>
                  {itemContent}
                </div>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </aside>
  )
}
