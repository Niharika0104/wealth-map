"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import type { MapView } from "./home-page"
import { Bookmark, Calendar, MapPin, Trash2, Save } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface SavedViewsProps {
  views: MapView[]
  onLoadView: (view: MapView) => void
  onDeleteView: (id: string) => void
  onSaveCurrentView: (name: string) => void
  currentView: { center: [number, number]; zoom: number }
}

export default function SavedViews({
  views,
  onLoadView,
  onDeleteView,
  onSaveCurrentView,
  currentView,
}: SavedViewsProps) {
  const [newViewName, setNewViewName] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  // Handle save view
  const handleSaveView = () => {
    if (!newViewName.trim()) {
      toast({
        title: "Name required",
        description: "Please enter a name for your saved view.",
        variant: "destructive",
      })
      return
    }

    onSaveCurrentView(newViewName.trim())
    setNewViewName("")
    setIsDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium">Saved Map Views</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Save className="h-3 w-3 mr-2" />
              Save Current
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Save Current View</DialogTitle>
              <DialogDescription>Save your current map position and filters for quick access later.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter a name for this view"
                  className="col-span-3"
                  value={newViewName}
                  onChange={(e) => setNewViewName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="text-right text-sm text-gray-500">Location</div>
                <div className="col-span-3 text-sm">
                  {currentView.center[1].toFixed(4)}, {currentView.center[0].toFixed(4)} (Zoom:{" "}
                  {currentView.zoom.toFixed(1)})
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveView}>Save View</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {views.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Bookmark className="h-12 w-12 mx-auto mb-2 opacity-20" />
          <p>No saved views yet</p>
          <p className="text-sm">Save your current view to access it later</p>
        </div>
      ) : (
        <div className="space-y-3">
          {views.map((view) => (
            <Card key={view.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">{view.name}</h4>
                    <Button variant="ghost" size="icon" onClick={() => onDeleteView(view.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{formatDate(view.createdAt)}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Zoom: {view.zoom.toFixed(1)}</span>
                  </div>
                </div>
                <div className="border-t">
                  <Button variant="ghost" className="w-full rounded-none h-10 text-sm" onClick={() => onLoadView(view)}>
                    Load View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
