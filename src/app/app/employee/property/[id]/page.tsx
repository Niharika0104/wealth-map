"use client"

import { useParams, useRouter } from "next/navigation"
import { dataSources, formatKMB, Wealthownershipfields } from "@/Models/models"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Eye, Calendar, Shield, ArrowLeft, TrendingUp } from "lucide-react"
import axios from 'axios'
import { getCoordinates } from "@/components/custom-components/home/interactive-map"
import PropertyDetailImageGallery from "@/components/custom-components/home/property-detail-image-gallery"
import Link from "next/link"

import MapView from "@/components/custom-components/trending/map-view"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"
import type { WealthAnalysisProps, Property, Owner } from "@/Models/models"
import { getWealthConfidenceLevel, OwnerWealthFactors, calculateTotals } from "@/Models/models";
import { set } from "zod"

export default function PropertyDetailPage() {
  const params = useParams()
  const router = useRouter()
  const propertyId = params.id as string
  const [property, setProperty] = useState<Property | null>(null)
  const [owner, setOwner] = useState<Owner | null>(null)
  const [loading, setLoading] = useState(true)
  const [wealthConfidenceLevel, setWealthConfidenceLevel] = useState<string>("")
  const [onwerType, setOwnerType] = useState<string>("")
  const [realestateWealth, setRealestateWealth] = useState<number>(0)
  const [totalWealth, setTotalWealth] = useState<number>(0)
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.post('/api/property/get', { propertyId });
        const { property } = res.data;
        setProperty(property);

        let ownerObj = null;
        if (property.owners && property.owners.length > 0) {
          ownerObj = property.owners[0].owner;
          setOwner(ownerObj);
        } else {
          setOwner(null);
        }
        // Fetch all properties for the owner to calculate full wealth portfolio
        let totalRealEstate = 0;
        let totalOtherAssets = 0;
        if (ownerObj?.id) {
          const ownerRes = await axios.post('/api/owner/get', { ownerId: ownerObj.id });
          const { owner, ownerType,
            confidenceScore,
            totalRealEstateWealth, properties } = ownerRes.data;
          const totalOtherAssets = owner.stocksSecurities + owner.businessInterests + owner.cashSavings + owner.otherAssets
          setOwner(ownerObj);
          setOwnerType(ownerType);
          setWealthConfidenceLevel(confidenceScore);
          setRealestateWealth(totalRealEstateWealth);
          setTotalWealth(totalRealEstateWealth + totalOtherAssets);
        }


        const coords = await getCoordinates(property as Property);
        setCoordinates(coords || null);

      } catch (err) {
        setProperty(null);
        setOwner(null);
        setTotalWealth(0);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [propertyId]);

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
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              {/* Property Image Shimmer */}
              <div className="relative h-80 w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-t-lg"></div>

              <CardHeader>
                {/* Title Shimmer */}
                <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-3/4"></div>
              </CardHeader>

              <CardContent>
                {/* Address Shimmer */}
                <div className="flex items-center mb-4">
                  <div className="h-5 w-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded mr-2"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-1/2"></div>
                </div>

                {/* Stats Grid Shimmer */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded mb-2"></div>
                      <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded"></div>
                    </div>
                  ))}
                </div>

                {/* Date and Badge Shimmer */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="h-4 w-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded mr-2"></div>
                    <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-32"></div>
                  </div>
                  <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-24"></div>
                </div>

                {/* Tabs Shimmer */}
                <div className="mt-4">
                  <div className="flex space-x-1 mb-4">
                    <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-24"></div>
                    <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-24"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-5/6"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-4/5"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            {/* Owner Information Card Shimmer */}
            <Card className="mb-6">
              <CardHeader>
                <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                {/* Avatar and Name Shimmer */}
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-full mr-4"></div>
                  <div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-16"></div>
                  </div>
                </div>

                {/* Net Worth Grid Shimmer */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded mb-2"></div>
                      <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded"></div>
                    </div>
                  ))}
                </div>

                {/* Wealth Composition Shimmer */}
                <div className="mb-4">
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-1/3 mb-2"></div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-full mr-2"></div>
                          <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-20"></div>
                        </div>
                        <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-12"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button Shimmer */}
                <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-full"></div>
              </CardContent>
            </Card>

            {/* Data Sources Card Shimmer */}
            <Card>
              <CardHeader>
                <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-1/3"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-b pb-3 last:border-0 last:pb-0">
                      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-1/2 mb-1"></div>
                      <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-3/4 mb-1"></div>
                      <div className="h-2 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-1/3"></div>
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

  // Not found state
  if (!property || !owner) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
        <p className="mb-4">The property you're looking for doesn't exist or has been removed.</p>
      </div>
    )
  }

  // Check if this is a hot property (top 10% of trending score)
  const isHotProperty = false // Simplified check

  return (
    <div className="container mx-auto p-6">
      {/* <Link href="/app/trending">
<Button variant="outline" className="mb-6">
<ArrowLeft className="mr-2 h-4 w-4" />
Back to Trending Properties
</Button>
</Link> */}

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
                {property?.type && property?.city
                  ? `${property.type.charAt(0).toUpperCase() + property.type.slice(1).toLowerCase()} in ${property.city.charAt(0).toUpperCase() + property.city.slice(1).toLowerCase()}`
                  : property?.type || property?.city || ''}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{property?.address}</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Value</div>
                  <div className="font-bold text-green-600">
                    {property?.price != null && !isNaN(Number(property.price))
                      ? Number(property.price) >= 1_000_000
                        ? `$${(Number(property.price) / 1_000_000).toFixed(1)}M`
                        : Number(property.price) >= 1_000
                          ? `$${(Number(property.price) / 1_000).toFixed(0)}K`
                          : `$${Number(property.price)}`
                      : 'N/A'}
                  </div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Size</div>
                  <div className="font-bold">
                    {property?.area != null && !isNaN(Number(property.area))
                      ? Number(property.area) >= 1_000_000
                        ? `${(Number(property.area) / 1_000_000).toFixed(1)}M sqft`
                        : Number(property.area) >= 1_000
                          ? `${(Number(property.area) / 1_000).toFixed(0)}K sqft`
                          : `${Math.floor(Number(property.area))} sqft`
                      : "N/A sqft"}
                  </div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Views</div>
                  <div className="font-bold flex items-center justify-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {property?.views || 0}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    Last updated: {property?.updatedAt ? new Date(property.updatedAt).toLocaleDateString() : "N/A"}
                  </span>

                </div>
                <Badge className={getConfidenceColor(wealthConfidenceLevel)}>
                  <Shield className="h-3 w-3 mr-1" />
                  {wealthConfidenceLevel} Confidence
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
                      This {property?.type ? property.type.charAt(0).toUpperCase() + property.type.slice(1).toLowerCase() : "N/A"}
                      is located in {property?.city} at {property?.address.split(',')[0]}. The
                      property spans {property?.area
                        ? property?.area.toString().length > 6
                          ? Math.floor(Number(property?.area.toString().slice(6))) + " sqft"
                          : Math.floor(property?.area) + " sqft"
                        : "N/A sqft"}

                      square feet and is currently valued at {property?.price}. This is a
                      prime real estate opportunity with excellent investment potential.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="location" className="pt-4">
                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Property Location</h3>
                    <div className="h-[300px] rounded-lg overflow-hidden border mt-4">
                      <MapView
                        properties={[property as Property]}
                        coordinates={coordinates as [number, number]}
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
                  <AvatarFallback>{owner?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">{owner?.name}</h3>
                  <Badge variant="outline">{property?.ownerType}</Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Net Worth</div>
                  <div className="font-bold text-green-600">
                    {totalWealth >= 1_000_000
                      ? `$${(totalWealth / 1_000_000).toFixed(2)}M`
                      : totalWealth >= 1_000
                        ? `$${(totalWealth / 1_000).toFixed(0)}K`
                        : `$${totalWealth}`}
                  </div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Confidence</div>
                  <div
                    className={`font-bold ${wealthConfidenceLevel === "High" ? "text-green-600" : wealthConfidenceLevel === "Medium" ? "text-yellow-600" : "text-red-600"}`}
                  >
                    {wealthConfidenceLevel}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Wealth Composition</h4>
                <div className="space-y-2">
                  {Wealthownershipfields.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <div className="text-sm font-medium">
                        {index === 0
                          ? formatKMB(realestateWealth)
                          : owner && item.key in owner && owner[item.key as keyof Owner] != null
                            ? formatKMB(Number(owner[item.key as keyof Owner]))
                            : ''}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full" onClick={() => { router.push(`/app/wealth-analysis/${owner?.id}`) }} >View Full Owner Profile</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dataSources.map((source: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; lastVerified: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }, index: Key | null | undefined) => (
                  <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                    <h4 className="font-medium">{source?.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{source?.description}</p>
                    <div className="text-xs text-gray-500">Last verified: {source?.lastVerified}</div>
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