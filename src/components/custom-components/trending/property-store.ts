import { generateTrendingProperties, getHotProperties, type Property } from "./property-generator"
import axios from 'axios';
// Generate properties once and store them
let trendingProperties: Property[] = []
let hotProperties: Property[] = []

// Initialize properties if not already done

export function getProperties() {
    if (trendingProperties.length === 0) {
      trendingProperties = generateTrendingProperties()
      hotProperties = getHotProperties(trendingProperties, 8)
    }
  
    return {
      trendingProperties,
      hotProperties,
    }
  }
  
  // Get a specific property by ID
  export function getPropertyById(id: string): Property | undefined {
    const { trendingProperties } = getProperties()
    return trendingProperties.find((p) => p.id === id)
  }
  export { Property }


