"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Trash2, Save, MapPin, Calendar } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"
import type { MapView } from "./home-page"

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

  const handleSaveView = () => {
    if (!newViewName.trim()) {
      toast({
        title: "Name required",
        children: "Please enter a name for your saved view.",
        variant: "destructive",
      })
      return
    }

    onSaveCurrentView(newViewName.trim())
    setNewViewName("")
    setIsDialogOpen(false)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatCoordinates = (center: [number, number]) => {
    const [lng, lat] = center
    return `${lat.toFixed(2)}°, ${lng.toFixed(2)}°`
  }

  const getActiveFiltersCount = (view: MapView) => {
    let count = 0

    // Count non-default confidence levels
    if (view.filters.confidence.length < 3) count++

    // Count property type filters
    if (view.filters.propertyType.length > 0) count++

    // Count owner type filters
    if (view.filters.ownerType.length > 0) count++

    return count
  }

  return (
    <div className="space-y-4">
      {/* Save Current View */}
      <div className="space-y-3">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full" size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save Current View
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Save Current View</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label htmlFor="view-name" className="text-sm font-medium">
                  View Name
                </label>
                <Input
                  id="view-name"
                  placeholder="Enter view name..."
                  value={newViewName}
                  onChange={(e) => setNewViewName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && newViewName.trim()) {
                      handleSaveView()
                    }
                  }}
                />
              </div>
              <div className="text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <MapPin className="h-3 w-3" />
                  Location: {formatCoordinates(currentView.center)}
                </p>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSaveView} disabled={!newViewName.trim()}>
                  Save View
                </Button>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Separator />

      {/* Saved Views List */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Saved Views ({views.length})</h3>

        {views.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No saved views yet</p>
            <p className="text-xs">Save your current view to access it later</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {views.map((view) => (
              <Card key={view.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm truncate flex-1 mr-2">{view.name}</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        onDeleteView(view.id)
                      }}
                      className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>

                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{formatCoordinates(view.center)}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(view.createdAt)}</span>
                    </div>

                    {getActiveFiltersCount(view) > 0 && (
                      <div className="flex items-center gap-1">
                        <Badge variant="secondary" className="text-xs">
                          {getActiveFiltersCount(view)} filter{getActiveFiltersCount(view) !== 1 ? "s" : ""}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-3 h-7 text-xs"
                    onClick={() => onLoadView(view)}
                  >
                    Load View
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
