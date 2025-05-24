import HomePage from "@/components/custom-components/home/home-page"

export default function EmployeeHomePage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Property Search</h1>
        <p className="text-gray-600">
          Search and explore properties with our interactive map and advanced filters.
        </p>
      </div>
      <HomePage />
    </div>
  )
} 