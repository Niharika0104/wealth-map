"use client"

import { Download, FileText, Mail, MapPin, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function AccountProfile() {
  // Mock user data
  const userData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    company: "Wealth Compass",
    location: "New York, NY",
    phone: "+1 (555) 123-4567",
    title: "Investment Advisor",
    memberSince: "January 15, 2023",
    totalReports: 47,
    lastLogin: "May 20, 2025 at 10:23 AM",
    accountType: "Professional",
    accountStatus: "Active",
    recentActivity: [
      { action: "Generated Property Report", date: "May 19, 2025", time: "3:45 PM" },
      { action: "Updated Watchlist", date: "May 18, 2025", time: "11:20 AM" },
      { action: "Exported Market Analysis", date: "May 15, 2025", time: "2:30 PM" },
    ],
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Profile Information</h2>
          <p className="text-sm text-muted-foreground mt-1">View your account information and profile details</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 self-start">
          <Download className="h-4 w-4" />
          Download Account Info
        </Button>
      </div>

      <Card className="overflow-hidden border-0 shadow-md">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white border-4 border-white shadow-sm flex items-center justify-center text-2xl font-semibold text-gray-700">
                {userData.firstName.charAt(0)}
                {userData.lastName.charAt(0)}
              </div>
            </div>

            <div className="flex-grow text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                <h3 className="text-2xl font-bold text-gray-800">
                  {userData.firstName} {userData.lastName}
                </h3>
                <Badge className="bg-green-100 text-green-800 border-green-200 self-center">
                  {userData.accountType}
                </Badge>
              </div>

              <p className="text-gray-600 font-medium">{userData.title}</p>
              <p className="text-gray-600 mt-1">{userData.company}</p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span>{userData.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>{userData.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{userData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Member Since</p>
              <p className="font-medium">{userData.memberSince}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Account Status</p>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                {userData.accountStatus}
              </Badge>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Last Login</p>
              <p className="font-medium">{userData.lastLogin}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-50 p-2 rounded-full">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium">Reports & Analytics</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Reports Generated</span>
                <span className="font-semibold text-lg">{userData.totalReports}</span>
              </div>

              <Separator />

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Properties Analyzed</span>
                <span className="font-semibold text-lg">128</span>
              </div>

              <Separator />

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Saved Properties</span>
                <span className="font-semibold text-lg">34</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-50 p-2 rounded-full">
                <User className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="text-lg font-medium">Recent Activity</h3>
            </div>

            <div className="space-y-4">
              {userData.recentActivity.map((activity, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
