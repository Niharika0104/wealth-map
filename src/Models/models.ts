type User = {
  name: string;
  avatarUrl: string;
};

type AvatarGroupProps = {
  users: User[];
};
export interface Owner {
  id: string;
  name: string;
  email?: string;
  phoneNumber?: string;
  confidenceLevel?: "High" | "Medium" | "Low";
  stocksSecurities: number;
  businessInterests: number;
  cashSavings: number;
  totalRealEstateWealth: number;
  ownerType: string; // "individual" | "corporate"
  otherAssets: number;
  createdAt: string;
  updatedAt: string;
 
  properties: Property[]; // PropertyOwner[] type can be defined separately if needed
}

// UI model for Owner wealth factors only
export interface OwnerWealthFactors {
  stocksSecurities: number | null;
  businessInterests: number | null;
  cashSavings: number | null;
  otherAssets: number | null;
}
 export const  dataSources= [
      {
        name: "Property Records",
        lastVerified: "Dec 28, 2024",
        description: "Data collected from county property records and verified against market valuations.",
      },
      {
        name: "SEC Filings",
        lastVerified: "Jan 2, 2025",
        description: "Information gathered from public SEC filings and quarterly reports.",
      },
      {
        name: "Business Registry",
        lastVerified: "Nov 15, 2024",
        description: "Data from state business registry and corporate filings.",
      },
    ]
// Helper to determine confidence level based on OwnerWealthFactors
export function getWealthConfidenceLevel(factors: OwnerWealthFactors): "High" | "Medium" | "Low" {
  // Count how many factors are present (not null/undefined and > 0)
  const values = [
    factors.stocksSecurities,
    factors.businessInterests,
    factors.cashSavings,
    factors.otherAssets,
  ];
  const present = values.filter((v) => v !== null && v !== undefined && v > 0).length;
  if (present === 4) return "High";
  if (present === 2 || present === 3) return "Medium";
  return "Low";
}

interface ListViewProps {
  Region: string;  // Changed String to string for TypeScript
  Name: string;
  Owners: User[];
  size: string;
  Images:string[]
}
export type ConfidenceLevel = "High" | "Medium" | "Low"
export interface Property {
  id: string;
  name: string;
  description?: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  price: number;
  images: string[];
  area: number;
  bed?: number; // only for houses
  bath?: number;
  type: string;
  confidenceScore?: number;
  
  updatedAt: Date; // or Date, depending on your usage
  // You can add these as arrays of related types if you have them defined:
  owners?: any[];
  Bookmarks?: any[];
  views?: any[];
  // Synthesized frontend fields:
  ownerType?: string; // "individual" | "corporate" | undefined
  confidence?: ConfidenceLevel; // "High" | "Medium" | "Low" | undefined
}
interface InteractiveMapProps {
  properties: Property[]
  mapType: "streets" | "satellite"
  initialCente?: [number, number]
  initialZoom?: number
  onViewChange: (center: [number, number], zoom: number) => void
}
interface MapViewProps {
  property:Property,
  coordinates: [number, number]
}
export interface WealthAnalysisProps {
  color:string;
  name:string;
}
export const Wealthownershipfields = [
  { name: "Real Estate", key: "realEstate", color: "#3b82f6" },
  { name: "Stocks & Securities", key: "stocksSecurities", color: "#10b981" },
  { name: "Business Interests", key: "businessInterests", color: "#f59e0b" },
  { name: "Cash & Savings", key: "cashSavings", color: "#6366f1" },
  { name: "Other Assets", key: "otherAssets", color: "#ec4899" }
];
export function calculateTotals(data: any): { totalRealEstate: number; totalOtherAssets: number } {
  let totalRealEstate = 0;
  const uniqueOwners = new Set<string>();
  let totalOtherAssets = 0;

  for (const property of data.properties) {
    totalRealEstate += property.price || 0;

    for (const ownerEntry of property.owners) {
      const owner = ownerEntry.owner;
      if (owner && !uniqueOwners.has(owner.id)) {
        totalOtherAssets += owner.otherAssets || 0;
        uniqueOwners.add(owner.id);
      }
    }
  }

  return { totalRealEstate, totalOtherAssets };
}
export   //Helper:Calculate KMB for assest values
function formatKMB(amount: number): string {
  if (isNaN(amount)) return "0";
  if (amount >= 1_000_000_000) return (amount / 1_000_000_000).toFixed(1) + "B";
  if (amount >= 1_000_000) return (amount / 1_000_000).toFixed(1) + "M";
  if (amount >= 1_000) return (amount / 1_000).toFixed(1) + "K";
  return amount.toString();
}