"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Monitor, Moon, Sun, Layout } from "lucide-react"

export function AppearanceSettings() {
  const [theme, setTheme] = useState("system")

  return (
    <div className="space-y-6">
      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Theme</CardTitle>
          <CardDescription>Customize the appearance of the application</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label>Color Theme</Label>
            <RadioGroup defaultValue={theme} onValueChange={setTheme} className="grid grid-cols-3 gap-4">
              <Label
                htmlFor="theme-light"
                className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground ${
                  theme === "light" ? "border-primary" : ""
                }`}
              >
                <RadioGroupItem value="light" id="theme-light" className="sr-only" />
                <Sun className="h-6 w-6 mb-3" />
                <span className="text-sm font-medium">Light</span>
              </Label>
              <Label
                htmlFor="theme-dark"
                className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground ${
                  theme === "dark" ? "border-primary" : ""
                }`}
              >
                <RadioGroupItem value="dark" id="theme-dark" className="sr-only" />
                <Moon className="h-6 w-6 mb-3" />
                <span className="text-sm font-medium">Dark</span>
              </Label>
              <Label
                htmlFor="theme-system"
                className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground ${
                  theme === "system" ? "border-primary" : ""
                }`}
              >
                <RadioGroupItem value="system" id="theme-system" className="sr-only" />
                <Monitor className="h-6 w-6 mb-3" />
                <span className="text-sm font-medium">System</span>
              </Label>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label>Accent Color</Label>
            <div className="grid grid-cols-5 gap-2">
              {["blue", "green", "violet", "pink", "orange"].map((color) => (
                <div
                  key={color}
                  className={`h-10 w-full cursor-pointer rounded-md ${getColorClass(color)} ${
                    color === "blue" ? "ring-2 ring-primary ring-offset-2" : ""
                  }`}
                  onClick={() => {}}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <div className="space-y-1">
                <Label htmlFor="animations">Interface Animations</Label>
                <p className="text-sm text-muted-foreground">Enable animations throughout the interface</p>
              </div>
              <Switch id="animations" defaultChecked />
            </div>

            <div className="flex items-center justify-between space-x-2">
              <div className="space-y-1">
                <Label htmlFor="reduced-motion">Reduced Motion</Label>
                <p className="text-sm text-muted-foreground">Decrease the amount of animation effects</p>
              </div>
              <Switch id="reduced-motion" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layout Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Layout & Display</CardTitle>
          <CardDescription>Configure how content is displayed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label>Default Layout</Label>
            <RadioGroup defaultValue="comfortable" className="grid grid-cols-3 gap-4">
              <Label
                htmlFor="layout-compact"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground"
              >
                <RadioGroupItem value="compact" id="layout-compact" className="sr-only" />
                <Layout className="h-6 w-6 mb-3" />
                <span className="text-sm font-medium">Compact</span>
              </Label>
              <Label
                htmlFor="layout-comfortable"
                className="flex flex-col items-center justify-between rounded-md border-2 border-primary bg-popover p-4 hover:bg-accent hover:text-accent-foreground"
              >
                <RadioGroupItem value="comfortable" id="layout-comfortable" className="sr-only" />
                <Layout className="h-6 w-6 mb-3" />
                <span className="text-sm font-medium">Comfortable</span>
              </Label>
              <Label
                htmlFor="layout-spacious"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground"
              >
                <RadioGroupItem value="spacious" id="layout-spacious" className="sr-only" />
                <Layout className="h-6 w-6 mb-3" />
                <span className="text-sm font-medium">Spacious</span>
              </Label>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="font-size">Font Size</Label>
            <Select defaultValue="medium">
              <SelectTrigger id="font-size">
                <SelectValue placeholder="Select font size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <div className="space-y-1">
                <Label htmlFor="sidebar-collapsed">Collapsed Sidebar by Default</Label>
                <p className="text-sm text-muted-foreground">Start with the sidebar collapsed</p>
              </div>
              <Switch id="sidebar-collapsed" />
            </div>

            <div className="flex items-center justify-between space-x-2">
              <div className="space-y-1">
                <Label htmlFor="sticky-header">Sticky Header</Label>
                <p className="text-sm text-muted-foreground">Keep the header visible when scrolling</p>
              </div>
              <Switch id="sticky-header" defaultChecked />
            </div>

            <div className="flex items-center justify-between space-x-2">
              <div className="space-y-1">
                <Label htmlFor="show-breadcrumbs">Show Breadcrumbs</Label>
                <p className="text-sm text-muted-foreground">Display navigation breadcrumbs</p>
              </div>
              <Switch id="show-breadcrumbs" defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart & Data Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Data Visualization</CardTitle>
          <CardDescription>Configure how charts and data are displayed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="chart-theme">Chart Theme</Label>
            <Select defaultValue="default">
              <SelectTrigger id="chart-theme">
                <SelectValue placeholder="Select chart theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="monochrome">Monochrome</SelectItem>
                <SelectItem value="vibrant">Vibrant</SelectItem>
                <SelectItem value="pastel">Pastel</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <div className="space-y-1">
                <Label htmlFor="chart-animations">Chart Animations</Label>
                <p className="text-sm text-muted-foreground">Enable animations in charts and graphs</p>
              </div>
              <Switch id="chart-animations" defaultChecked />
            </div>

            <div className="flex items-center justify-between space-x-2">
              <div className="space-y-1">
                <Label htmlFor="data-tooltips">Data Tooltips</Label>
                <p className="text-sm text-muted-foreground">Show tooltips when hovering over data points</p>
              </div>
              <Switch id="data-tooltips" defaultChecked />
            </div>

            <div className="flex items-center justify-between space-x-2">
              <div className="space-y-1">
                <Label htmlFor="compact-tables">Compact Tables</Label>
                <p className="text-sm text-muted-foreground">Use more compact table layouts</p>
              </div>
              <Switch id="compact-tables" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function getColorClass(color: string): string {
  switch (color) {
    case "blue":
      return "bg-blue-500"
    case "green":
      return "bg-green-500"
    case "violet":
      return "bg-violet-500"
    case "pink":
      return "bg-pink-500"
    case "orange":
      return "bg-orange-500"
    default:
      return "bg-blue-500"
  }
}
