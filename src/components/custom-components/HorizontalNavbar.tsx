"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Main navigation items
const navigationItems = [
  {
    title: "Home",
    url: "/app",
  },
  {
    title: "Employees",
    url: "/app/employees",
  },
  {
    title: "Companies",
    url: "/app/companies",
  },
  {
    title: "Reports",
    url: "/app/reports",
  },
  {
    title: "Settings",
    url: "/app/settings",
  },
]

export default function AppNavbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bknDQjybQqPvSr9wEOR5WAN7dcYG2tHfylU4I"
            className="h-8 w-auto"
            alt="Wealth Compass"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => {
            const isActive = pathname === item.url
            return (
              <a
                key={item.title}
                href={item.url}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.title}
              </a>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navigationItems.map((item) => {
              const isActive = pathname === item.url
              return (
                <a
                  key={item.title}
                  href={item.url}
                  className={cn(
                    "block py-2 px-3 text-base font-medium rounded-md",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
