"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Mail, Smartphone } from "lucide-react"

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Configure how and when you receive notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="email" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </TabsTrigger>
            <TabsTrigger value="push" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span>Push</span>
            </TabsTrigger>
            <TabsTrigger value="sms" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span>SMS</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="email" className="space-y-4 pt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-1">
                  <Label htmlFor="email-updates">System Updates</Label>
                  <p className="text-sm text-muted-foreground">Receive emails about system updates and maintenance</p>
                </div>
                <Switch id="email-updates" defaultChecked />
              </div>

              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-1">
                  <Label htmlFor="email-reports">Weekly Reports</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive weekly summary reports of wealth analysis data
                  </p>
                </div>
                <Switch id="email-reports" defaultChecked />
              </div>

              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-1">
                  <Label htmlFor="email-alerts">Data Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive alerts when significant changes occur in monitored data
                  </p>
                </div>
                <Switch id="email-alerts" defaultChecked />
              </div>

              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-1">
                  <Label htmlFor="email-marketing">Marketing</Label>
                  <p className="text-sm text-muted-foreground">Receive marketing and promotional emails</p>
                </div>
                <Switch id="email-marketing" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="push" className="space-y-4 pt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-1">
                  <Label htmlFor="push-updates">System Updates</Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications about system updates</p>
                </div>
                <Switch id="push-updates" defaultChecked />
              </div>

              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-1">
                  <Label htmlFor="push-alerts">Data Alerts</Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications for data alerts</p>
                </div>
                <Switch id="push-alerts" defaultChecked />
              </div>

              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-1">
                  <Label htmlFor="push-activity">Account Activity</Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications for account activity</p>
                </div>
                <Switch id="push-activity" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sms" className="space-y-4 pt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-1">
                  <Label htmlFor="sms-security">Security Alerts</Label>
                  <p className="text-sm text-muted-foreground">Receive SMS for security alerts and authentication</p>
                </div>
                <Switch id="sms-security" defaultChecked />
              </div>

              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-1">
                  <Label htmlFor="sms-critical">Critical Updates</Label>
                  <p className="text-sm text-muted-foreground">Receive SMS for critical system updates</p>
                </div>
                <Switch id="sms-critical" />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-4 pt-4 border-t">
          <h3 className="text-lg font-medium">Notification Frequency</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <div className="space-y-1">
                <Label htmlFor="digest-mode">Daily Digest</Label>
                <p className="text-sm text-muted-foreground">
                  Group notifications into a daily digest instead of sending individually
                </p>
              </div>
              <Switch id="digest-mode" />
            </div>

            <div className="flex items-center justify-between space-x-2">
              <div className="space-y-1">
                <Label htmlFor="quiet-hours">Quiet Hours</Label>
                <p className="text-sm text-muted-foreground">Don't send notifications between 10pm and 8am</p>
              </div>
              <Switch id="quiet-hours" defaultChecked />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
