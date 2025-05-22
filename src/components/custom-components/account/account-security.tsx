"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Shield, Smartphone, Key } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AccountSecurity() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold">Security Settings</h2>
        <p className="text-sm text-muted-foreground mt-1">Manage your account security and authentication methods</p>
      </div>

      <Separator className="my-6" />

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Key className="h-5 w-5 text-muted-foreground" />
              <CardTitle className="text-lg">Change Password</CardTitle>
            </div>
            <CardDescription>Update your password to keep your account secure</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <Button className="bg-green-500 hover:bg-green-600">Update Password</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-muted-foreground" />
              <CardTitle className="text-lg">Two-Factor Authentication</CardTitle>
            </div>
            <CardDescription>Add an extra layer of security to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Enable Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Secure your account with a verification code sent to your phone
                </p>
              </div>
              <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
            </div>

            {twoFactorEnabled && (
              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input id="phoneNumber" placeholder="+1 (555) 123-4567" />
                </div>
                <Button className="bg-green-500 hover:bg-green-600">Verify Phone Number</Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <CardTitle className="text-lg">Login Sessions</CardTitle>
            </div>
            <CardDescription>Manage your active sessions and sign out from other devices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Current Session</p>
                    <p className="text-sm text-muted-foreground mt-1">Chrome on Windows • New York, USA</p>
                    <p className="text-xs text-muted-foreground mt-1">Started May 20, 2025 at 1:42 PM</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>
                </div>
              </div>

              <Button variant="outline" className="text-red-500">
                Sign Out From All Other Devices
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
