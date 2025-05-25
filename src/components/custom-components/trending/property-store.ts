import { generateTrendingProperties, getHotProperties, type Property } from "./property-generator"
import axios from 'axios';
// Generate properties once and store them
let trendingProperties: Property[] = []
let hotProperties: Property[] = []

// Initialize properties if not already done


// // Always fetch from API instead of using in-memory store
// export async function getProperties() {
//   const res = await axios.get('/api/property/all');
//   const allProperties = res.data;
//   // If you need hotProperties, filter/sort here as needed
//   return {
//     allProperties,
    
//   };
// }

// // Get a specific property by ID
// export async function getPropertyById(id: string) {
//   const { allProperties } = await getProperties();
//   return trendingProperties.find((p: any) => p.id === id);
// }


