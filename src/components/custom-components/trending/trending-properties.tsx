"use client"

import { useState, useMemo, useEffect, useRef, useCallback } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Property as PropertyType } from "@/Models/models"
import {
  MapPin,
  Eye,
  Calendar,
  Shield,
  TrendingUp,
  ArrowRight,
  MapIcon,
  Flame,
  Clock,
  BarChart3,
  ArrowUpRight,
  Users,
  Activity,
} from "lucide-react"
import Link from "next/link"
import { faker } from '@faker-js/faker'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProperties, type Property } from "./property-store"
import MapView from "@/components/custom-components/trending/map-view"
import { formatKMB } from "@/Models/models"

// Helper function to transform properties for MapView
const transformProperties = (properties: Property[]): PropertyType[] => {
  return properties.map((property) => ({
    id: property.id,
    name: property.address, // Use address as name for MapView if no specific name field
    images: [faker.image.urlLoremFlickr({ category: 'house', width: 640, height: 480 })], // Generate a random image for consistency
    lastUpdated: property.lastUpdated,
    price: Number(property.value),
    address: property.address,
    confidenceScore: property.confidenceLevel === "High" ? 100 : property.confidenceLevel === "Medium" ? 50 : 0,
    coordinates: [property.coordinates[0], property.coordinates[1]],
    ownerId: property.ownerId,
    ownerName: property.ownerName,
    ownerType: property.ownerType,
    type: property.type,
    trendingScore: property.trendingScore,
    country: "United States", // Assuming default, adjust if needed
    city: property.region,
    state: property.state,
    zipCode: property.zipCode,
    area: Number(property.sqft),
    views: property.views ?? 0,
  }));
};

type TimelineFilter = "all" | "week" | "month" | "quarter"
type ConfidenceFilter = "all" | "High" | "Medium" | "Low"
type ViewsFilter = "all" | "high" | "medium" | "low"

const propertyPlaceholderImages = [
  "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/2170393610/photo/colonial-style-house-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=oBuv_cTulNFy_L-OHuqRj_LQxeD-QvfDM-ZyHm66zKk=",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvbWV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbWV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvbWV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGhvbWV8ZW58MHx8MHx8fDA%3D"
];

export default function TrendingProperties() {
  const [timelineFilter, setTimelineFilter] = useState<TimelineFilter>("all");
  const [confidenceFilter, setConfidenceFilter] = useState<ConfidenceFilter>("all");
  const [viewsFilter, setViewsFilter] = useState<ViewsFilter>("all");
  const [trendingProperties, setTrendingProperties] = useState<Property[]>([]);
  const [hotProperties, setHotProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [activeTab, setActiveTab] = useState("hot");
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const itemsPerPage = 8;
  const [page, setPage] = useState(1);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobilePage, setMobilePage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { trendingProperties, hotProperties } = await getProperties();
        setTrendingProperties(trendingProperties);
        setHotProperties(hotProperties);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredProperties = useMemo(() => {
    let filtered = [...trendingProperties];

    if (timelineFilter !== "all") {
      const now = new Date();
      filtered = filtered.filter((property) => {
        const updatedDate = new Date(property.lastUpdated);
        const diffTime = Math.abs(now.getTime() - updatedDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (timelineFilter === "week") return diffDays <= 7;
        if (timelineFilter === "month") return diffDays <= 30;
        if (timelineFilter === "quarter") return diffDays <= 90;
        return true;
      });
    }

    if (confidenceFilter !== "all") {
      filtered = filtered.filter((property) => property.confidenceLevel === confidenceFilter);
    }

    if (viewsFilter !== "all") {
      filtered = filtered.filter((property) => {
       if (!property.views) return false; // Handle undefined views
        if (viewsFilter === "high") return property.views > 500;
        if (viewsFilter === "medium") return property.views >= 300 && property.views <= 500;
        if (viewsFilter === "low") return property.views < 300;
        return true;
      });
    }

    return filtered;
  }, [timelineFilter, confidenceFilter, viewsFilter, trendingProperties]);
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  // Detect mobile with media query
  useEffect(() => {
   
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  // Infinite scroll for mobile only
  useEffect(() => {
    if (!isMobile || activeTab !== "all" || viewMode !== "grid") return;
    if (!sentinelRef.current) return;
    const maxPage = Math.ceil(filteredProperties.length / itemsPerPage);
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMobilePage((prev) => {
            if (prev < maxPage) return prev + 1;
            return prev;
          });
        }
      },
      { threshold: 1 }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [filteredProperties.length, activeTab, viewMode, isMobile]);

  // Reset page(s) when filters or tab change
  useEffect(() => {
    setPage(1);
    setMobilePage(1);
  }, [timelineFilter, confidenceFilter, viewsFilter, activeTab]);

  // Pagination items for desktop
  const getPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <button
          key={i}
          className={`px-3 py-1 rounded ${page === i ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
          onClick={() => setPage(i)}
        >
          {i}
        </button>
      );
    }
    return items;
  };

  const getConfidenceColor = (level: string) => {
    switch (level) {
      case "High":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTrendingIndicator = (score: number) => {
    if (score > 100) {
      return {
        color: "text-red-600",
        bgColor: "bg-red-50",
        icon: <Flame className="h-3 w-3 mr-1" />,
        label: "Hot",
      };
    } else if (score > 50) {
      return {
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        icon: <TrendingUp className="h-3 w-3 mr-1" />,
        label: "Rising",
      };
    } else {
      return {
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        icon: <Activity className="h-3 w-3 mr-1" />,
        label: "Active",
      };
    }
  };

  const PropertyCard = ({ property, rank }: { property: Property; rank?: number }) => {
    const trendingIndicator = getTrendingIndicator(property.trendingScore);
    const randomImageIndex = faker.number.int({ min: 0, max: propertyPlaceholderImages.length - 1 });
    const imageUrl = propertyPlaceholderImages[randomImageIndex];

    return (
      <Link href={`/app/property/${property.id}`} key={property.id}>
        <Card className="h-full hover:shadow-lg transition-shadow duration-200 relative overflow-hidden">
          {rank && (
            <div className="absolute top-0 left-0 w-10 h-10 bg-gray-800 flex items-center justify-center text-white font-bold text-lg z-10 rounded-tl-lg rounded-br-lg">
              {rank}
            </div>
          )}
          <div className="relative h-48 w-full">
            <div
              className="absolute inset-0 rounded-t-lg bg-gray-100"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <h3 className="font-bold text-lg text-white">
                {property.type} {property.region}
              </h3>
              <div className="flex items-center text-white/90 mb-1">
                <MapPin className="h-3 w-3 mr-1" />
                <span className="text-sm truncate">{property.address}</span>
              </div>
            </div>
            <div
              className={`absolute top-0 right-0 ${trendingIndicator.bgColor} ${trendingIndicator.color} px-2 py-1 rounded-bl-lg flex items-center text-xs font-medium`}
            >
              {trendingIndicator.icon}
              {trendingIndicator.label}
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between mb-3">
              <Badge variant="outline" className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {property.views ?? 0}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                {formatKMB(Number(property.sqft))} sqft
              </Badge>
              <Badge className={`${getConfidenceColor(property.confidenceLevel)} flex items-center gap-1`}>
                <Shield className="h-3 w-3" />
                {property.confidenceLevel}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600 flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(property.lastUpdated).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <span className="font-bold text-green-600 mr-2">${formatKMB(Number(property.value))}</span>

              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  };

  const FeaturedPropertyCard = ({ property }: { property: Property }) => {
    const trendingIndicator = getTrendingIndicator(property?.trendingScore);
    const randomImageIndex = faker.number.int({ min: 0, max: propertyPlaceholderImages.length - 1 });
    const imageUrl = propertyPlaceholderImages[randomImageIndex];

    return (
      <Card className="overflow-hidden border shadow-md">
        <div className="md:flex">
          <div className="relative md:w-2/5 h-64 md:h-auto">
            <div
              className="absolute inset-0 bg-gray-200"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-4 left-4 bg-white/90 rounded-full px-3 py-1 flex items-center">
              <Flame className="h-4 w-4 text-red-600 mr-1" />
              <span className="font-bold text-sm">Top Trending</span>
            </div>
          </div>
          <div className="p-3 sm:p-6 md:w-3/5">
            <div className="flex items-center mb-2">
              <Badge className={`${trendingIndicator.bgColor} ${trendingIndicator.color} mr-2 `}>
                {trendingIndicator.icon}
                Trending Score: {Math.round(property?.trendingScore)}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {property.views ?? 0} views
              </Badge>
            </div>

            <h2 className="text-2xl font-bold mb-2">
              {property.type} in {property.region}
            </h2>

            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.address}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center">
                <Badge className={`${getConfidenceColor(property.confidenceLevel)} mr-2`}>
                  <Shield className="h-3 w-3 mr-1" />
                  {property.confidenceLevel}
                </Badge>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{new Date(property.lastUpdated).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{formatKMB(Number(property.sqft))} sqft</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{property.ownerType}</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="font-bold text-2xl text-green-600 mr-2">${formatKMB(Number(property.value))}</span>
                <ArrowUpRight className="h-5 w-5 text-green-500" />
              </div>
              <Link href={`/app/property/${property.id}`}>
                <Button>View Details</Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    );
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleViewAllClick = () => {
    setActiveTab("all");
  };

  const topTrendingProperty = hotProperties[0];

  const trendingCategories = [
    { name: "Luxury", icon: <Flame className="h-5 w-5 text-gray-700" /> },
    { name: "Beachfront", icon: <Flame className="h-5 w-5 text-gray-700" /> },
    { name: "Urban", icon: <Flame className="h-5 w-5 text-gray-700" /> },
    { name: "Mountain", icon: <Flame className="h-5 w-5 text-gray-700" /> },
  ];

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="px-2 sm:px-4 md:px-8 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-3">
              <Flame className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Hot Properties</p>
              <p className="text-xl sm:text-2xl font-bold">{hotProperties.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-3">
              <Eye className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Total Views</p>
              <p className="text-xl sm:text-2xl font-bold">
                {trendingProperties.reduce((sum, p) => p.views ? sum + p.views : sum, 0).toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-3">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">New This Week</p>
              <p className="text-xl sm:text-2xl font-bold">
                {
                  trendingProperties.filter((p) => {
                    const updatedDate = new Date(p.lastUpdated);
                    const now = new Date();
                    const diffTime = Math.abs(now.getTime() - updatedDate.getTime());
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    return diffDays <= 7;
                  }).length
                }
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-3">
              <BarChart3 className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Avg. Confidence</p>
              <p className="text-xl sm:text-2xl font-bold">
                {trendingProperties.length > 0 && trendingProperties.filter((p) => p.confidenceLevel === "High").length > trendingProperties.length / 2
                  ? "High"
                  : "Medium"}
                {trendingProperties.length === 0 && "N/A"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {topTrendingProperty && (
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center">
            <Flame className="mr-2 h-5 w-5 text-red-600" />
            Featured Trending Property
          </h2>
          <FeaturedPropertyCard property={topTrendingProperty} />
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Trending Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trendingCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-14 sm:h-16 bg-gray-100 flex items-center justify-center">{category.icon}</div>
              <CardContent className="p-2 sm:p-3 text-center">
                <h3 className="font-bold text-sm sm:text-base">{category.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {trendingProperties.filter((p) => p.type.includes(category.name)).length} properties
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="hot">Hot Properties</TabsTrigger>
          <TabsTrigger value="all">All Properties</TabsTrigger>
        </TabsList>

        <TabsContent value="hot" className="mt-6">
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-red-600" />
              Hot Properties
              <span className="text-xs sm:text-sm font-normal ml-2 text-gray-500">
                (Highest trending score based on views and recency)
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {hotProperties.slice(topTrendingProperty ? 1 : 0).map((property, index) => (
              <PropertyCard key={property.id} property={property} rank={topTrendingProperty ? index + 2 : index + 1} />
            ))}
            {hotProperties.length === 0 && <p className="col-span-full text-center text-gray-500">No hot properties found.</p>}
          </div>

          {hotProperties.length > (topTrendingProperty ? 1 : 0) && (
            <div className="mt-6 flex justify-center">
              <Button variant="outline" onClick={handleViewAllClick} className="flex items-center w-full sm:w-auto">
                View All Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="all" className="mt-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6 bg-white p-4 rounded-lg shadow">
            <div className="flex-1 min-w-0">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Timeline</label>
              <Select value={timelineFilter} onValueChange={(value) => setTimelineFilter(value as TimelineFilter)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="week">Last Week</SelectItem>
                  <SelectItem value="month">Last Month</SelectItem>
                  <SelectItem value="quarter">Last Quarter</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1 min-w-0">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Views</label>
              <Select value={viewsFilter} onValueChange={(value) => setViewsFilter(value as ViewsFilter)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by views" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Views</SelectItem>
                  <SelectItem value="high">High (500+)</SelectItem>
                  <SelectItem value="medium">Medium (300-500)</SelectItem>
                  <SelectItem value="low">Low (&lt; 300)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1 min-w-0">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Confidence</label>
              <Select
                value={confidenceFilter}
                onValueChange={(value) => setConfidenceFilter(value as ConfidenceFilter)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by confidence" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
            <div className="text-xs sm:text-sm text-gray-600">
              Showing {Math.min(page * itemsPerPage, filteredProperties.length)} of {filteredProperties.length} properties
            </div>
            <div className="flex space-x-2 w-full sm:w-auto">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="flex items-center w-1/2 sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                Grid
              </Button>
              <Button
                variant={viewMode === "map" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("map")}
                className="flex items-center w-1/2 sm:w-auto"
              >
                <MapIcon className="h-4 w-4 mr-1" />
                Map
              </Button>
            </div>
          </div>

          {viewMode === "grid" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {(isMobile
                  ? filteredProperties.slice(0, mobilePage * itemsPerPage)
                  : filteredProperties.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                ).length > 0 ? (
                  (isMobile
                    ? filteredProperties.slice(0, mobilePage * itemsPerPage)
                    : filteredProperties.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  ).map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))
                ) : (
                  <p className="col-span-full text-center text-gray-500">No properties match your filters.</p>
                )}
              </div>
              {/* Infinite scroll loader for mobile only */}
              {isMobile && (() => {
                const visibleCount = Math.min(mobilePage * itemsPerPage, filteredProperties.length);
                return visibleCount < filteredProperties.length ? (
                  <div ref={sentinelRef} className="flex justify-center py-6">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
                  </div>
                ) : null;
              })()}
              {/* Pagination controls for desktop only */}
              {!isMobile && totalPages > 1 && (
                <div className="mt-8 mb-8 flex justify-center gap-2">
                  <button
                    className={`px-3 py-1 rounded ${page === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                  >
                    Prev
                  </button>
                  {getPaginationItems()}
                  <button
                    className={`px-3 py-1 rounded ${page === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
          {viewMode === "map" && (
            <div className="h-[600px] rounded-lg overflow-hidden border mt-4">
              {filteredProperties.length > 0 ? (
                <MapView properties={transformProperties(filteredProperties)} />
              ) : (
                <div className="flex justify-center items-center h-full text-gray-500">No properties to display on map with current filters.</div>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}