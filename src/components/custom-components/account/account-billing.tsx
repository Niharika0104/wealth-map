"use client"

import { CreditCard, Calendar, CheckCircle, Download, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function AccountBilling() {
  // Mock billing data
  const billingData = {
    plan: "Professional",
    status: "Active",
    nextBillingDate: "June 15, 2025",
    amount: "$49.99",
    paymentMethod: "Visa ending in 4242",
    billingCycle: "Monthly",
    usagePercent: 68,
    features: ["Unlimited property searches", "Advanced analytics", "Custom reports", "API access", "Priority support"],
    billingHistory: [
      { id: 1, date: "May 15, 2025", amount: "$49.99", status: "Paid", invoice: "INV-2025-005" },
      { id: 2, date: "April 15, 2025", amount: "$49.99", status: "Paid", invoice: "INV-2025-004" },
      { id: 3, date: "March 15, 2025", amount: "$49.99", status: "Paid", invoice: "INV-2025-003" },
      { id: 4, date: "February 15, 2025", amount: "$49.99", status: "Paid", invoice: "INV-2025-002" },
      { id: 5, date: "January 15, 2025", amount: "$49.99", status: "Paid", invoice: "INV-2025-001" },
    ],
  }

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold">Billing Information</h2>
        <p className="text-sm text-muted-foreground mt-1">View your subscription plan and billing history</p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">{billingData.plan} Plan</h3>
                  <p className="opacity-90">{billingData.billingCycle} billing</p>
                </div>
                <Badge className="bg-white/20 text-white border-0">{billingData.status}</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Next billing</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <p>{billingData.nextBillingDate}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Amount</p>
                  <p className="text-2xl font-bold">{billingData.amount}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-muted-foreground">Usage this month</p>
                  <p className="text-sm font-medium">{billingData.usagePercent}%</p>
                </div>
                <Progress value={billingData.usagePercent} className="h-2" />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <p>{billingData.paymentMethod}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                <Button variant="outline" className="flex items-center gap-2">
                  Update Payment Method
                </Button>
                <Button className="bg-green-500 hover:bg-green-600 flex items-center gap-2">Manage Subscription</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center justify-between">
                <span>Billing History</span>
                <Button variant="ghost" size="sm" className="flex items-center gap-1 text-green-600">
                  <Download className="h-4 w-4" />
                  Download All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium text-muted-foreground">Date</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Invoice</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Amount</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                      <th className="text-right p-4 font-medium text-muted-foreground"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {billingData.billingHistory.map((item) => (
                      <tr key={item.id} className="border-b last:border-0 hover:bg-muted/50">
                        <td className="p-4">{item.date}</td>
                        <td className="p-4">{item.invoice}</td>
                        <td className="p-4">{item.amount}</td>
                        <td className="p-4">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {item.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-right">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Plan Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {billingData.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                Compare Plans
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
