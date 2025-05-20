type User = {
  name: string;
  avatarUrl: string;
};

type AvatarGroupProps = {
  users: User[];
};
interface Owner {
  name: string;
  image: string;
}


interface ListViewProps {
  Region: string;  // Changed String to string for TypeScript
  Name: string;
  Owners: User[];
  size: string;
  Images:string[]
}
export type ConfidenceLevel = "High" | "Medium" | "Low"
export type Property = {
  id: string
  address: string
  coordinates: number[]
  value: string
  region: string
  sqft: number
  views: number
  confidenceLevel: ConfidenceLevel
  lastUpdated: string
  ownerId: string
  ownerName: string
  ownerType: string
  type: string
  trendingScore: number
}
interface InteractiveMapProps {
  properties: Property[]
  mapType: "streets" | "satellite"
  initialCente?: [number, number]
  initialZoom?: number
  onViewChange: (center: [number, number], zoom: number) => void
}
interface InteractiveMapProps


export type { Owner ,ListViewProps,InteractiveMapProps};
export type { User, AvatarGroupProps };