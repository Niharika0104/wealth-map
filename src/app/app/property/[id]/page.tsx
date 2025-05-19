"use client"

import { useParams } from "next/navigation"
import { mockOwners } from "@/components/custom-components/trending/mock-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Eye, Calendar, Shield, ArrowLeft, TrendingUp } from "lucide-react"
import Link from "next/link"
import { getPropertyById } from "@/components/custom-components/trending/property-store"
import MapView from "@/components/custom-components/trending/map-view"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"
import type { Property } from "@/components/custom-components/trending/property-generator"

export default function PropertyDetailPage() {
  const params = useParams()
  const propertyId = params.id as string
  const [property, setProperty] = useState<Property | null>(null)
  const [owner, setOwner] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the property by ID
    const foundProperty = getPropertyById(propertyId)

    if (foundProperty) {
      setProperty(foundProperty)
      // Find the owner
      const foundOwner = mockOwners.find((o) => o.id === foundProperty.ownerId)
      setOwner(foundOwner)
    }

    setLoading(false)
  }, [propertyId])

  // Get confidence level color
  const getConfidenceColor = (level: string) => {
    switch (level) {
      case "High":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Loading Property...</h1>
      </div>
    )
  }

  // Not found state
  if (!property || !owner) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
        <p className="mb-4">The property you're looking for doesn't exist or has been removed.</p>
        <Link href="/app/trending">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Trending Properties
          </Button>
        </Link>
      </div>
    )
  }

  // Check if this is a hot property (top 10% of trending score)
  const isHotProperty = property.trendingScore > 100 // Simplified check

  return (
    <div className="container mx-auto p-6">
      <Link href="/app/trending">
        <Button variant="outline" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Trending Properties
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="relative h-80 w-full">
              <div
                className="absolute inset-0 rounded-t-lg bg-gradient-to-r from-blue-100 to-indigo-100"
                style={{
                  backgroundImage: `url('/placeholder-r0y0s.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {isHotProperty && (
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  Hot Property
                </div>
              )}
            </div>
            <CardHeader>
              <CardTitle>
                {property.type} in {property.region}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{property.address}</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Value</div>
                  <div className="font-bold text-green-600">{property.value}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Size</div>
                  <div className="font-bold">{property.sqft} sqft</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Views</div>
                  <div className="font-bold flex items-center justify-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {property.views}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">Last updated: {property.lastUpdated}</span>
                </div>
                <Badge className={getConfidenceColor(property.confidenceLevel)}>
                  <Shield className="h-3 w-3 mr-1" />
                  {property.confidenceLevel} Confidence
                </Badge>
              </div>

              <Tabs defaultValue="description" className="mt-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-4">
                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Property Description</h3>
                    <p className="text-gray-600">
                      This {property.type.toLowerCase()} is located in {property.region} at {property.address}. The
                      property spans {property.sqft} square feet and is currently valued at {property.value}. This is a
                      prime real estate opportunity with excellent investment potential.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="location" className="pt-4">
                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Property Location</h3>
                    <div className="h-[300px] rounded-lg overflow-hidden border mt-4">
                      <MapView
                        properties={[property]}
                        initialCenter={property.coordinates as [number, number]}
                        initialZoom={14}
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Owner Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={`/placeholder.svg?height=100&width=100&query=avatar`} />
                  <AvatarFallback>{owner.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">{owner.name}</h3>
                  <Badge variant="outline">{owner.type}</Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Net Worth</div>
                  <div className="font-bold text-green-600">{owner.netWorth}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Confidence</div>
                  <div
                    className={`font-bold ${owner.confidenceLevel === "High" ? "text-green-600" : owner.confidenceLevel === "Medium" ? "text-yellow-600" : "text-red-600"}`}
                  >
                    {owner.confidenceLevel}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Wealth Composition</h4>
                <div className="space-y-2">
                  {owner.wealthComposition.map((item: { color: any; name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; value: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }, index: Key | null | undefined) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <div className="text-sm font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">View Full Owner Profile</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {owner.dataSources.map((source: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; lastVerified: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }, index: Key | null | undefined) => (
                  <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                    <h4 className="font-medium">{source.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{source.description}</p>
                    <div className="text-xs text-gray-500">Last verified: {source.lastVerified}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
