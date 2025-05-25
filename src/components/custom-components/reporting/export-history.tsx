"use client"

import { useState, useEffect } from "react"
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
import { format } from 'date-fns'
import { usePermissions } from "@/hooks/usePermissions"
import { WithPermission } from "@/components/auth/withPermission"

interface ExportHistoryItem {
  id: string
  title: string
  description: string
  reportType: string
  createdAt: string
  exportUrl: string
  notes: string
}

export default function ExportHistory() {
  const { hasPermission } = usePermissions()
  const canViewHistory = hasPermission("reports:view")
  const canDeleteHistory = hasPermission("reports:create")

  const [exportHistory, setExportHistory] = useState<ExportHistoryItem[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [formatFilter, setFormatFilter] = useState("all")
  const [selectedExport, setSelectedExport] = useState<ExportHistoryItem | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch export history
  useEffect(() => {
    const fetchExportHistory = async () => {
      try {
        const response = await fetch('/api/reports/export')
        if (!response.ok) {
          throw new Error('Failed to fetch export history')
        }
        const data = await response.json()
        setExportHistory(data)
      } catch (error) {
        console.error('Error fetching export history:', error)
        toast({
          title: "Error",
          description: "Failed to load export history",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchExportHistory()
  }, [])

  // Filter export history
  const filteredHistory = exportHistory.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFormat = formatFilter === "all" || item.reportType === formatFilter

    return matchesSearch && matchesFormat
  })

  // Delete export
  const deleteExport = async () => {
    if (!selectedExport) return

    try {
      const response = await fetch(`/api/reports/export?id=${selectedExport.id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete export')
      }

      setExportHistory(exportHistory.filter((item) => item.id !== selectedExport.id))

      toast({
        title: "Export deleted",
        description: "The export has been deleted from your history.",
        variant: "default",
      })
    } catch (error) {
      console.error('Error deleting export:', error)
      toast({
        title: "Error",
        description: "Failed to delete export",
        variant: "destructive",
      })
    }

    setIsDeleteDialogOpen(false)
    setSelectedExport(null)
  }

  // Download export
  const downloadExport = (exportItem: ExportHistoryItem) => {
    if (exportItem.exportUrl) {
      const a = document.createElement('a')
      a.href = exportItem.exportUrl
      a.download = exportItem.title
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    } else {
      toast({
        title: "Error",
        description: "Export file not found",
        variant: "destructive",
      })
    }
  }

  // Open delete dialog
  const openDeleteDialog = (exportItem: ExportHistoryItem) => {
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

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">Loading export history...</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <WithPermission permission="reports:view">
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
                  <SelectItem value="json">JSON</SelectItem>
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
                    <TableHead className="hidden md:table-cell">Description</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredHistory.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                        No export history found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredHistory.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          {format(new Date(item.createdAt), 'MMM dd, yyyy HH:mm')}
                        </TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="flex items-center w-fit">
                            {getFormatIcon(item.reportType)}
                            <span className="ml-1">{item.reportType.toUpperCase()}</span>
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{item.description}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon" onClick={() => downloadExport(item)}>
                              <Download className="h-4 w-4" />
                            </Button>
                            {canDeleteHistory && (
                              <Button variant="ghost" size="icon" onClick={() => openDeleteDialog(item)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
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
        <WithPermission permission="reports:create">
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
                      <span>{selectedExport.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Date:</span>
                      <span>{format(new Date(selectedExport.createdAt), 'MMM dd, yyyy HH:mm')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Format:</span>
                      <span>{selectedExport.reportType.toUpperCase()}</span>
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
        </WithPermission>
      </div>
    </WithPermission>
  )
}
