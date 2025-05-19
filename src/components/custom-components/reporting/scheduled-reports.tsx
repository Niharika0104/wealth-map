"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Calendar, Clock, Edit, Plus, Trash2, Users } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Mock scheduled reports
const initialScheduledReports = [
  {
    id: "1",
    name: "Weekly Property Value Report",
    description: "Summary of property values and changes",
    frequency: "weekly",
    day: "Monday",
    time: "09:00",
    format: "pdf",
    recipients: ["team@example.com"],
    active: true,
    lastSent: "May 13, 2025",
  },
  {
    id: "2",
    name: "Monthly Market Analysis",
    description: "Comprehensive analysis of market trends",
    frequency: "monthly",
    day: "1",
    time: "08:00",
    format: "excel",
    recipients: ["analysts@example.com", "executives@example.com"],
    active: true,
    lastSent: "May 1, 2025",
  },
  {
    id: "3",
    name: "Quarterly Performance Review",
    description: "Detailed review of property performance",
    frequency: "quarterly",
    day: "1",
    time: "10:00",
    format: "pdf",
    recipients: ["executives@example.com"],
    active: false,
    lastSent: "Apr 1, 2025",
  },
]

export default function ScheduledReports() {
  const [scheduledReports, setScheduledReports] = useState(initialScheduledReports)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentReport, setCurrentReport] = useState<any>(null)
  const [reportName, setReportName] = useState("")
  const [reportDescription, setReportDescription] = useState("")
  const [frequency, setFrequency] = useState("weekly")
  const [day, setDay] = useState("Monday")
  const [time, setTime] = useState("09:00")
  const [format, setFormat] = useState("pdf")
  const [recipients, setRecipients] = useState("")
  const [isActive, setIsActive] = useState(true)
  const [isEditing, setIsEditing] = useState(false)

  // Open dialog for new report
  const openNewReportDialog = () => {
    setIsEditing(false)
    setCurrentReport(null)
    setReportName("")
    setReportDescription("")
    setFrequency("weekly")
    setDay("Monday")
    setTime("09:00")
    setFormat("pdf")
    setRecipients("")
    setIsActive(true)
    setIsDialogOpen(true)
  }

  // Open dialog for editing report
  const openEditReportDialog = (report: any) => {
    setIsEditing(true)
    setCurrentReport(report)
    setReportName(report.name)
    setReportDescription(report.description)
    setFrequency(report.frequency)
    setDay(report.day)
    setTime(report.time)
    setFormat(report.format)
    setRecipients(report.recipients.join(", "))
    setIsActive(report.active)
    setIsDialogOpen(true)
  }

  // Save report
  const saveReport = () => {
    if (!reportName) {
      toast({
        title: "Report name required",
        description: "Please enter a name for your scheduled report.",
        variant: "destructive",
      })
      return
    }

    if (!recipients) {
      toast({
        title: "Recipients required",
        description: "Please enter at least one recipient email address.",
        variant: "destructive",
      })
      return
    }

    const recipientList = recipients.split(",").map((email) => email.trim())

    if (isEditing && currentReport) {
      // Update existing report
      setScheduledReports(
        scheduledReports.map((report) =>
          report.id === currentReport.id
            ? {
                ...report,
                name: reportName,
                description: reportDescription,
                frequency,
                day,
                time,
                format,
                recipients: recipientList,
                active: isActive,
              }
            : report,
        ),
      )

      toast({
        title: "Report updated",
        description: "Your scheduled report has been updated successfully.",
        variant: "default",
      })
    } else {
      // Create new report
      const newReport = {
        id: Date.now().toString(),
        name: reportName,
        description: reportDescription,
        frequency,
        day,
        time,
        format,
        recipients: recipientList,
        active: isActive,
        lastSent: "Never",
      }

      setScheduledReports([...scheduledReports, newReport])

      toast({
        title: "Report scheduled",
        description: "Your report has been scheduled successfully.",
        variant: "default",
      })
    }

    setIsDialogOpen(false)
  }

  // Delete report
  const deleteReport = (reportId: string) => {
    setScheduledReports(scheduledReports.filter((report) => report.id !== reportId))

    toast({
      title: "Report deleted",
      description: "The scheduled report has been deleted successfully.",
      variant: "default",
    })
  }

  // Toggle report active status
  const toggleReportStatus = (reportId: string) => {
    setScheduledReports(
      scheduledReports.map((report) => (report.id === reportId ? { ...report, active: !report.active } : report)),
    )

    const report = scheduledReports.find((r) => r.id === reportId)

    toast({
      title: report?.active ? "Report paused" : "Report activated",
      description: report?.active
        ? "The scheduled report has been paused."
        : "The scheduled report has been activated.",
      variant: "default",
    })
  }

  // Get day options based on frequency
  const getDayOptions = () => {
    if (frequency === "weekly") {
      return (
        <>
          <SelectItem value="Monday">Monday</SelectItem>
          <SelectItem value="Tuesday">Tuesday</SelectItem>
          <SelectItem value="Wednesday">Wednesday</SelectItem>
          <SelectItem value="Thursday">Thursday</SelectItem>
          <SelectItem value="Friday">Friday</SelectItem>
          <SelectItem value="Saturday">Saturday</SelectItem>
          <SelectItem value="Sunday">Sunday</SelectItem>
        </>
      )
    } else if (frequency === "monthly") {
      return Array.from({ length: 31 }, (_, i) => (
        <SelectItem key={i + 1} value={(i + 1).toString()}>
          {(i + 1).toString()}
        </SelectItem>
      ))
    } else if (frequency === "quarterly") {
      return (
        <>
          <SelectItem value="1">First day of quarter</SelectItem>
          <SelectItem value="15">Middle of quarter</SelectItem>
          <SelectItem value="-1">Last day of quarter</SelectItem>
        </>
      )
    }

    return null
  }

  // Get frequency display text
  const getFrequencyText = (report: any) => {
    if (report.frequency === "weekly") {
      return `Every ${report.day} at ${report.time}`
    } else if (report.frequency === "monthly") {
      return `Day ${report.day} of each month at ${report.time}`
    } else if (report.frequency === "quarterly") {
      if (report.day === "1") {
        return `First day of each quarter at ${report.time}`
      } else if (report.day === "15") {
        return `Middle of each quarter at ${report.time}`
      } else if (report.day === "-1") {
        return `Last day of each quarter at ${report.time}`
      }
    }

    return `${report.frequency} at ${report.time}`
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-medium">Scheduled Reports</h2>
          <p className="text-sm text-gray-500">Manage your recurring report deliveries</p>
        </div>
        <Button onClick={openNewReportDialog}>
          <Plus className="mr-2 h-4 w-4" />
          New Schedule
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scheduledReports.map((report) => (
          <Card key={report.id} className={!report.active ? "opacity-70" : undefined}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle>{report.name}</CardTitle>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="icon" onClick={() => openEditReportDialog(report)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => deleteReport(report.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardDescription>{report.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{getFrequencyText(report)}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-2 text-gray-500" />
                  <span>
                    {report.recipients.length} recipient{report.recipients.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  <span>Last sent: {report.lastSent}</span>
                </div>
                <div className="flex items-center">
                  <Badge variant={report.format === "pdf" ? "default" : "outline"}>{report.format.toUpperCase()}</Badge>
                  <Badge variant={report.active ? "success" : "secondary"} className="ml-2">
                    {report.active ? "Active" : "Paused"}
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-gray-500">Status</span>
                <Switch checked={report.active} onCheckedChange={() => toggleReportStatus(report.id)} />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* New/Edit Report Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Scheduled Report" : "New Scheduled Report"}</DialogTitle>
            <DialogDescription>
              {isEditing
                ? "Update your scheduled report settings."
                : "Create a new scheduled report to be delivered automatically."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="reportName">Report Name</Label>
              <Input
                id="reportName"
                placeholder="Enter report name"
                value={reportName}
                onChange={(e) => setReportName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reportDescription">Description</Label>
              <Input
                id="reportDescription"
                placeholder="Enter description"
                value={reportDescription}
                onChange={(e) => setReportDescription(e.target.value)}
              />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Frequency</Label>
              <RadioGroup value={frequency} onValueChange={setFrequency}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="weekly" id="weekly" />
                  <Label htmlFor="weekly">Weekly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">Monthly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="quarterly" id="quarterly" />
                  <Label htmlFor="quarterly">Quarterly</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="day">Day</Label>
                <Select value={day} onValueChange={setDay}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select day" />
                  </SelectTrigger>
                  <SelectContent>{getDayOptions()}</SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="format">Format</Label>
              <Select value={format} onValueChange={setFormat}>
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="recipients">Recipients</Label>
              <Input
                id="recipients"
                placeholder="Enter email addresses (comma separated)"
                value={recipients}
                onChange={(e) => setRecipients(e.target.value)}
              />
              <p className="text-xs text-gray-500">Separate multiple email addresses with commas</p>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="active" checked={isActive} onCheckedChange={setIsActive} />
              <Label htmlFor="active">Active</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveReport}>{isEditing ? "Update" : "Schedule"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
