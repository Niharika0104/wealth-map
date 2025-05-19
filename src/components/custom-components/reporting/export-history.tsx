"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, FileText, Search, TableIcon, Trash2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Mock export history
const initialExportHistory = [
  {
    id: "1",
    date: "May 19, 2025 14:32",
    name: "High Value Properties",
    format: "pdf",
    size: "2.4 MB",
    properties: 12,
    user: "John Smith",
    status: "completed",
  },
  {
    id: "2",
    date: "May 18, 2025 10:15",
    name: "Miami Properties",
    format: "excel",
    size: "1.8 MB",
    properties: 8,
    user: "John Smith",
    status: "completed",
  },
  {
    id: "3",
    date: "May 17, 2025 16:45",
    name: "New York Properties",
    format: "csv",
    size: "0.9 MB",
    properties: 15,
    user: "Sarah Johnson",
    status: "completed",
  },
  {
    id: "4",
    date: "May 15, 2025 09:20",
    name: "All Properties",
    format: "pdf",
    size: "5.2 MB",
    properties: 40,
    user: "John Smith",
    status: "completed",
  },
  {
    id: "5",
    date: "May 12, 2025 11:30",
    name: "High Confidence Properties",
    format: "excel",
    size: "2.1 MB",
    properties: 18,
    user: "Sarah Johnson",
    status: "completed",
  },
  {
    id: "6",
    date: "May 10, 2025 15:10",
    name: "Low Confidence Properties",
    format: "csv",
    size: "1.2 MB",
    properties: 10,
    user: "John Smith",
    status: "completed",
  },
  {
    id: "7",
    date: "May 8, 2025 14:25",
    name: "California Properties",
    format: "pdf",
    size: "3.5 MB",
    properties: 22,
    user: "Sarah Johnson",
    status: "completed",
  },
]

export default function ExportHistory() {
  const [exportHistory, setExportHistory] = useState(initialExportHistory)
  const [searchQuery, setSearchQuery] = useState("")
  const [formatFilter, setFormatFilter] = useState("all")
  const [selectedExport, setSelectedExport] = useState<any>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  // Filter export history
  const filteredHistory = exportHistory.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.user.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFormat = formatFilter === "all" || item.format === formatFilter

    return matchesSearch && matchesFormat
  })

  // Delete export
  const deleteExport = () => {
    if (!selectedExport) return

    setExportHistory(exportHistory.filter((item) => item.id !== selectedExport.id))

    toast({
      title: "Export deleted",
      description: "The export has been deleted from your history.",
      variant: "default",
    })

    setIsDeleteDialogOpen(false)
    setSelectedExport(null)
  }

  // Download export
  const downloadExport = (exportItem: any) => {
    // In a real app, this would download the file
    console.log(`Downloading export: ${exportItem.name}`)

    toast({
      title: "Download started",
      description: `${exportItem.name} is being downloaded.`,
      variant: "default",
    })
  }

  // Open delete dialog
  const openDeleteDialog = (exportItem: any) => {
    setSelectedExport(exportItem)
    setIsDeleteDialogOpen(true)
  }

  // Get format icon
  const getFormatIcon = (format: string) => {
    switch (format) {
      case "pdf":
        return <FileText className="h-4 w-4" />
      case "excel":
      case "csv":
        return <TableIcon className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Export History</CardTitle>
          <CardDescription>View and manage your previous data exports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search exports..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Select value={formatFilter} onValueChange={setFormatFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Formats</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="excel">Excel</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-md overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Format</TableHead>
                  <TableHead className="hidden md:table-cell">Size</TableHead>
                  <TableHead className="hidden md:table-cell">Properties</TableHead>
                  <TableHead className="hidden md:table-cell">User</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredHistory.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                      No export history found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredHistory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.date}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="flex items-center w-fit">
                          {getFormatIcon(item.format)}
                          <span className="ml-1">{item.format.toUpperCase()}</span>
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{item.size}</TableCell>
                      <TableCell className="hidden md:table-cell">{item.properties}</TableCell>
                      <TableCell className="hidden md:table-cell">{item.user}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" onClick={() => downloadExport(item)}>
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => openDeleteDialog(item)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            Showing {filteredHistory.length} of {exportHistory.length} exports
          </div>
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Export</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this export? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {selectedExport && (
            <div className="py-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Name:</span>
                  <span>{selectedExport.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Date:</span>
                  <span>{selectedExport.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Format:</span>
                  <span>{selectedExport.format.toUpperCase()}</span>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={deleteExport}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
