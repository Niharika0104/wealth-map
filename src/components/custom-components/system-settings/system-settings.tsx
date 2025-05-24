"use client"

import { useState, useEffect } from "react"
import { Save, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function SystemSettings() {
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({
    systemName: "",
    timezone: "utc",
    maintenance: false,
  })

  useEffect(() => {
    async function fetchSettings() {
      setLoading(true)
      const res = await fetch("/api/system-settings")
      const data = await res.json()
      setForm({
        systemName: data.systemName || "",
        timezone: data.timezone || "utc",
        maintenance: data.maintenance ?? false,
      })
      setLoading(false)
    }
    fetchSettings()
  }, [])

  const handleSave = async () => {
    setIsSaving(true)
    await fetch("/api/system-settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    setIsSaving(false)
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
  }

  if (loading) {
    return <div className="p-8">Loading system settings...</div>
  }

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-2xl shadow-lg border border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">System Settings</CardTitle>
          <CardDescription>Configure global system preferences for the platform.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-8" onSubmit={e => { e.preventDefault(); handleSave(); }}>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="system-name">System Name</Label>
                <Input
                  id="system-name"
                  value={form.systemName}
                  onChange={e => setForm(f => ({ ...f, systemName: e.target.value }))}
                  placeholder="Enter system name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Default Timezone</Label>
                <Select
                  value={form.timezone}
                  onValueChange={val => setForm(f => ({ ...f, timezone: val }))}
                >
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">EST</SelectItem>
                    <SelectItem value="pst">PST</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-3 pt-2">
                <Switch
                  id="maintenance-mode"
                  checked={form.maintenance}
                  onCheckedChange={checked => setForm(f => ({ ...f, maintenance: checked }))}
                />
                <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                onClick={handleSave}
                disabled={isSaving || saveSuccess}
                className={cn(
                  "min-w-[140px] relative overflow-hidden transition-all font-semibold text-base",
                  saveSuccess ? "bg-green-600 hover:bg-green-700" : "",
                )}
              >
                {isSaving ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Saving...
                  </span>
                ) : saveSuccess ? (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Saved
                  </motion.div>
                ) : (
                  <span className="flex items-center gap-2">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </span>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
