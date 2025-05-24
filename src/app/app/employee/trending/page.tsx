import TrendingProperties from "@/components/custom-components/trending/trending-properties"

export default function TrendingPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Trending Properties</h1>
        <p className="text-gray-600">
          Discover the hottest and most popular properties based on views, activity, and market trends.
        </p>
      </div>
      <TrendingProperties />
    </div>
  )
}
