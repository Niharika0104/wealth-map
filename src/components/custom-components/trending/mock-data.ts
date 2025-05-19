export type ConfidenceLevel = "High" | "Medium" | "Low"

export const mockOwners = [
  {
    id: "1",
    name: "Alice Corp.",
    type: "Entity",
    netWorth: "4.2M",
    confidenceLevel: "High" as ConfidenceLevel,
    lastUpdated: "Jan 4, 2025",
    wealthComposition: [
      { name: "Real Estate", value: "2M", color: "#3b82f6", confidence: "High" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "1.2M", color: "#10b981", confidence: "High" as ConfidenceLevel },
      { name: "Business Interests", value: "1M", color: "#f59e0b", confidence: "Medium" as ConfidenceLevel },
      { name: "Cash & Savings", value: "0.5M", color: "#6366f1", confidence: "High" as ConfidenceLevel },
      { name: "Other Assets", value: "0.3M", color: "#ec4899", confidence: "Low" as ConfidenceLevel },
    ],
    dataSources: [
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
    ],
    properties: [
      {
        address: "123 Main St, New York, NY",
        coordinates: [-73.9857, 40.7484],
        value: "$1.2M",
      },
      {
        address: "456 Park Ave, New York, NY",
        coordinates: [-73.9654, 40.7829],
        value: "$800K",
      },
      {
        address: "789 Broadway, New York, NY",
        coordinates: [-73.9882, 40.7484],
        value: "$2.1M",
      },
    ],
  },
  {
    id: "2",
    name: "John Smith",
    type: "Individual",
    netWorth: "3.5M",
    confidenceLevel: "Medium" as ConfidenceLevel,
    lastUpdated: "Dec 15, 2024",
    wealthComposition: [
      { name: "Real Estate", value: "2.3M", color: "#3b82f6", confidence: "High" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "0.6M", color: "#10b981", confidence: "Medium" as ConfidenceLevel },
      { name: "Business Interests", value: "0.6M", color: "#f59e0b", confidence: "Low" as ConfidenceLevel },
      { name: "Cash & Savings", value: "0.2M", color: "#6366f1", confidence: "Medium" as ConfidenceLevel },
      { name: "Other Assets", value: "0.1M", color: "#ec4899", confidence: "Low" as ConfidenceLevel },
    ],
    dataSources: [
      {
        name: "Property Records",
        lastVerified: "Dec 10, 2024",
        description: "Data collected from county property records and verified against market valuations.",
      },
      {
        name: "Financial Disclosures",
        lastVerified: "Nov 30, 2024",
        description: "Information from public financial disclosures and estimated holdings.",
      },
    ],
    properties: [
      {
        address: "789 Ocean Dr, Miami, FL",
        coordinates: [-80.13, 25.789],
        value: "$1.5M",
      },
      {
        address: "101 Beach Rd, Miami, FL",
        coordinates: [-80.12, 25.77],
        value: "$800K",
      },
      {
        address: "222 Coastal Hwy, Miami, FL",
        coordinates: [-80.19, 25.76],
        value: "$1.2M",
      },
    ],
  },
  {
    id: "3",
    name: "Horizon Investments LLC",
    type: "Entity",
    netWorth: "12.8M",
    confidenceLevel: "High" as ConfidenceLevel,
    lastUpdated: "Jan 2, 2025",
    wealthComposition: [
      { name: "Real Estate", value: "5.5M", color: "#3b82f6", confidence: "High" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "3.2M", color: "#10b981", confidence: "High" as ConfidenceLevel },
      { name: "Business Interests", value: "4.1M", color: "#f59e0b", confidence: "High" as ConfidenceLevel },
      { name: "Cash & Savings", value: "1.2M", color: "#6366f1", confidence: "Medium" as ConfidenceLevel },
      { name: "Other Assets", value: "0.8M", color: "#ec4899", confidence: "Medium" as ConfidenceLevel },
    ],
    dataSources: [
      {
        name: "Property Records",
        lastVerified: "Dec 28, 2024",
        description: "Data collected from county property records and verified against market valuations.",
      },
      {
        name: "SEC Filings",
        lastVerified: "Jan 1, 2025",
        description: "Information gathered from public SEC filings and quarterly reports.",
      },
      {
        name: "Business Registry",
        lastVerified: "Dec 20, 2024",
        description: "Data from state business registry and corporate filings.",
      },
    ],
    properties: [
      {
        address: "222 Tech Blvd, San Francisco, CA",
        coordinates: [-122.4194, 37.7749],
        value: "$3.2M",
      },
      {
        address: "333 Valley Way, San Jose, CA",
        coordinates: [-121.8863, 37.3382],
        value: "$2.3M",
      },
      {
        address: "444 Innovation Dr, Palo Alto, CA",
        coordinates: [-122.143, 37.4419],
        value: "$4.1M",
      },
      {
        address: "555 Startup St, Mountain View, CA",
        coordinates: [-122.0838, 37.3861],
        value: "$3.5M",
      },
    ],
  },
  {
    id: "4",
    name: "Sarah Johnson",
    type: "Individual",
    netWorth: "2.1M",
    confidenceLevel: "Low" as ConfidenceLevel,
    lastUpdated: "Nov 20, 2024",
    wealthComposition: [
      { name: "Real Estate", value: "1.5M", color: "#3b82f6", confidence: "Medium" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "0.3M", color: "#10b981", confidence: "Low" as ConfidenceLevel },
      { name: "Business Interests", value: "0.2M", color: "#f59e0b", confidence: "Low" as ConfidenceLevel },
      { name: "Cash & Savings", value: "0.1M", color: "#6366f1", confidence: "Low" as ConfidenceLevel },
      { name: "Other Assets", value: "0.1M", color: "#ec4899", confidence: "Low" as ConfidenceLevel },
    ],
    dataSources: [
      {
        name: "Property Records",
        lastVerified: "Nov 15, 2024",
        description: "Data collected from county property records with limited verification.",
      },
      {
        name: "Estimated Holdings",
        lastVerified: "Oct 30, 2024",
        description: "Estimated financial holdings based on limited public information.",
      },
    ],
    properties: [
      {
        address: "444 Lake St, Chicago, IL",
        coordinates: [-87.6298, 41.8781],
        value: "$950K",
      },
      {
        address: "555 Michigan Ave, Chicago, IL",
        coordinates: [-87.6244, 41.8756],
        value: "$1.1M",
      },
    ],
  },
  {
    id: "5",
    name: "Global Assets Group",
    type: "Entity",
    netWorth: "28.5M",
    confidenceLevel: "High" as ConfidenceLevel,
    lastUpdated: "Dec 30, 2024",
    wealthComposition: [
      { name: "Real Estate", value: "12.2M", color: "#3b82f6", confidence: "High" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "8.5M", color: "#10b981", confidence: "High" as ConfidenceLevel },
      { name: "Business Interests", value: "7.8M", color: "#f59e0b", confidence: "High" as ConfidenceLevel },
      { name: "Cash & Savings", value: "2.5M", color: "#6366f1", confidence: "High" as ConfidenceLevel },
      { name: "Other Assets", value: "1.5M", color: "#ec4899", confidence: "Medium" as ConfidenceLevel },
    ],
    dataSources: [
      {
        name: "Property Records",
        lastVerified: "Dec 28, 2024",
        description: "Data collected from county property records and verified against market valuations.",
      },
      {
        name: "SEC Filings",
        lastVerified: "Dec 29, 2024",
        description: "Information gathered from public SEC filings and quarterly reports.",
      },
      {
        name: "Business Registry",
        lastVerified: "Dec 15, 2024",
        description: "Data from state business registry and corporate filings.",
      },
      {
        name: "Financial Statements",
        lastVerified: "Dec 20, 2024",
        description: "Data from audited financial statements and public disclosures.",
      },
    ],
    properties: [
      {
        address: "555 Commerce St, Dallas, TX",
        coordinates: [-96.797, 32.7767],
        value: "$4.5M",
      },
      {
        address: "666 Energy Pkwy, Houston, TX",
        coordinates: [-95.3698, 29.7604],
        value: "$3.8M",
      },
      {
        address: "777 Capital Ave, Austin, TX",
        coordinates: [-97.7431, 30.2672],
        value: "$3.9M",
      },
    ],
  },
  {
    id: "6",
    name: "Tech Ventures Capital",
    type: "Entity",
    netWorth: "18.3M",
    confidenceLevel: "High" as ConfidenceLevel,
    lastUpdated: "Jan 5, 2025",
    wealthComposition: [
      { name: "Real Estate", value: "7.2M", color: "#3b82f6", confidence: "High" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "6.5M", color: "#10b981", confidence: "High" as ConfidenceLevel },
      { name: "Business Interests", value: "4.6M", color: "#f59e0b", confidence: "High" as ConfidenceLevel },
      { name: "Cash & Savings", value: "1.8M", color: "#6366f1", confidence: "High" as ConfidenceLevel },
      { name: "Other Assets", value: "0.9M", color: "#ec4899", confidence: "Medium" as ConfidenceLevel },
    ],
    dataSources: [
      {
        name: "Property Records",
        lastVerified: "Jan 3, 2025",
        description: "Data collected from county property records and verified against market valuations.",
      },
      {
        name: "SEC Filings",
        lastVerified: "Jan 2, 2025",
        description: "Information gathered from public SEC filings and quarterly reports.",
      },
      {
        name: "Business Registry",
        lastVerified: "Dec 28, 2024",
        description: "Data from state business registry and corporate filings.",
      },
    ],
    properties: [
      {
        address: "888 Innovation Park, Seattle, WA",
        coordinates: [-122.3321, 47.6062],
        value: "$5.2M",
      },
      {
        address: "999 Tech Campus, Bellevue, WA",
        coordinates: [-122.2006, 47.6101],
        value: "$4.8M",
      },
      {
        address: "111 Digital Drive, Redmond, WA",
        coordinates: [-122.1215, 47.674],
        value: "$3.9M",
      },
    ],
  },
  {
    id: "7",
    name: "Robert Williams",
    type: "Individual",
    netWorth: "5.7M",
    confidenceLevel: "Medium" as ConfidenceLevel,
    lastUpdated: "Dec 20, 2024",
    wealthComposition: [
      { name: "Real Estate", value: "3.2M", color: "#3b82f6", confidence: "Medium" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "1.5M", color: "#10b981", confidence: "Medium" as ConfidenceLevel },
      { name: "Business Interests", value: "0.8M", color: "#f59e0b", confidence: "Medium" as ConfidenceLevel },
      { name: "Cash & Savings", value: "0.4M", color: "#6366f1", confidence: "Medium" as ConfidenceLevel },
      { name: "Other Assets", value: "0.2M", color: "#ec4899", confidence: "Low" as ConfidenceLevel },
    ],
    dataSources: [
      {
        name: "Property Records",
        lastVerified: "Dec 15, 2024",
        description: "Data collected from county property records with moderate verification.",
      },
      {
        name: "Financial Disclosures",
        lastVerified: "Dec 10, 2024",
        description: "Information from public financial disclosures and estimated holdings.",
      },
    ],
    properties: [
      {
        address: "222 Sunset Blvd, Los Angeles, CA",
        coordinates: [-118.2437, 34.0522],
        value: "$2.8M",
      },
      {
        address: "333 Hollywood Ave, Los Angeles, CA",
        coordinates: [-118.3287, 34.0928],
        value: "$1.9M",
      },
    ],
  },
  {
    id: "8",
    name: "Coastal Properties LLC",
    type: "Entity",
    netWorth: "9.4M",
    confidenceLevel: "Medium" as ConfidenceLevel,
    lastUpdated: "Dec 12, 2024",
    wealthComposition: [
      { name: "Real Estate", value: "7.2M", color: "#3b82f6", confidence: "Medium" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "1.2M", color: "#10b981", confidence: "Medium" as ConfidenceLevel },
      { name: "Business Interests", value: "0.8M", color: "#f59e0b", confidence: "Medium" as ConfidenceLevel },
      { name: "Cash & Savings", value: "0.5M", color: "#6366f1", confidence: "Medium" as ConfidenceLevel },
      { name: "Other Assets", value: "0.3M", color: "#ec4899", confidence: "Low" as ConfidenceLevel },
    ],
    dataSources: [
      {
        name: "Property Records",
        lastVerified: "Dec 5, 2024",
        description: "Data collected from county property records with moderate verification.",
      },
      {
        name: "Business Registry",
        lastVerified: "Nov 30, 2024",
        description: "Data from state business registry and corporate filings.",
      },
    ],
    properties: [
      {
        address: "444 Beachfront Dr, San Diego, CA",
        coordinates: [-117.1611, 32.7157],
        value: "$3.2M",
      },
      {
        address: "555 Coastal Hwy, La Jolla, CA",
        coordinates: [-117.2712, 32.8328],
        value: "$4.5M",
      },
      {
        address: "666 Ocean View Rd, Del Mar, CA",
        coordinates: [-117.2653, 32.9595],
        value: "$2.8M",
      },
    ],
  },
  {
    id: "9",
    name: "Jennifer Lopez",
    type: "Individual",
    netWorth: "1.8M",
    confidenceLevel: "Low" as ConfidenceLevel,
    lastUpdated: "Nov 10, 2024",
    wealthComposition: [
      { name: "Real Estate", value: "1.2M", color: "#3b82f6", confidence: "Low" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "0.3M", color: "#10b981", confidence: "Low" as ConfidenceLevel },
      { name: "Business Interests", value: "0.2M", color: "#f59e0b", confidence: "Low" as ConfidenceLevel },
      { name: "Cash & Savings", value: "0.1M", color: "#6366f1", confidence: "Low" as ConfidenceLevel },
      { name: "Other Assets", value: "0.1M", color: "#ec4899", confidence: "Low" as ConfidenceLevel },
    ],
    dataSources: [
      {
        name: "Property Records",
        lastVerified: "Oct 30, 2024",
        description: "Data collected from county property records with limited verification.",
      },
      {
        name: "Estimated Holdings",
        lastVerified: "Oct 15, 2024",
        description: "Estimated financial holdings based on limited public information.",
      },
    ],
    properties: [
      {
        address: "777 Maple St, Denver, CO",
        coordinates: [-104.9903, 39.7392],
        value: "$850K",
      },
      {
        address: "888 Mountain View Dr, Boulder, CO",
        coordinates: [-105.2705, 40.015],
        value: "$1.1M",
      },
    ],
  },
  {
    id: "10",
    name: "Mountain Resorts Inc",
    type: "Entity",
    netWorth: "15.2M",
    confidenceLevel: "High" as ConfidenceLevel,
    lastUpdated: "Dec 28, 2024",
    wealthComposition: [
      { name: "Real Estate", value: "12.5M", color: "#3b82f6", confidence: "High" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "1.2M", color: "#10b981", confidence: "High" as ConfidenceLevel },
      { name: "Business Interests", value: "1.5M", color: "#f59e0b", confidence: "High" as ConfidenceLevel },
      { name: "Cash & Savings", value: "0.8M", color: "#6366f1", confidence: "Medium" as ConfidenceLevel },
      { name: "Other Assets", value: "0.4M", color: "#ec4899", confidence: "Medium" as ConfidenceLevel },
    ],
    dataSources: [
      {
        name: "Property Records",
        lastVerified: "Dec 20, 2024",
        description: "Data collected from county property records and verified against market valuations.",
      },
      {
        name: "SEC Filings",
        lastVerified: "Dec 15, 2024",
        description: "Information gathered from public SEC filings and quarterly reports.",
      },
      {
        name: "Business Registry",
        lastVerified: "Dec 10, 2024",
        description: "Data from state business registry and corporate filings.",
      },
    ],
    properties: [
      {
        address: "999 Ski Resort Rd, Aspen, CO",
        coordinates: [-106.8175, 39.1911],
        value: "$7.5M",
      },
      {
        address: "111 Lodge Way, Vail, CO",
        coordinates: [-106.3741, 39.6403],
        value: "$5.8M",
      },
      {
        address: "222 Summit Dr, Breckenridge, CO",
        coordinates: [-106.0384, 39.4817],
        value: "$4.2M",
      },
    ],
  },
  {
    id: "11",
    name: "David Chen",
    type: "Individual",
    netWorth: "4.3M",
    confidenceLevel: "Medium" as ConfidenceLevel,
    lastUpdated: "Dec 5, 2024",
    wealthComposition: [
      { name: "Real Estate", value: "2.5M", color: "#3b82f6", confidence: "Medium" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "1.2M", color: "#10b981", confidence: "Medium" as ConfidenceLevel },
      { name: "Business Interests", value: "0.6M", color: "#f59e0b", confidence: "Medium" as ConfidenceLevel },
      { name: "Cash & Savings", value: "0.3M", color: "#6366f1", confidence: "Medium" as ConfidenceLevel },
      { name: "Other Assets", value: "0.2M", color: "#ec4899", confidence: "Low" as ConfidenceLevel },
    ],
    dataSources: [
      {
        name: "Property Records",
        lastVerified: "Nov 30, 2024",
        description: "Data collected from county property records with moderate verification.",
      },
      {
        name: "Financial Disclosures",
        lastVerified: "Nov 25, 2024",
        description: "Information from public financial disclosures and estimated holdings.",
      },
    ],
    properties: [
      {
        address: "333 Lakeshore Dr, Chicago, IL",
        coordinates: [-87.6298, 41.8781],
        value: "$1.8M",
      },
      {
        address: "444 River Rd, Evanston, IL",
        coordinates: [-87.6877, 42.0451],
        value: "$1.2M",
      },
    ],
  },
  {
    id: "12",
    name: "Urban Development Partners",
    type: "Entity",
    netWorth: "22.7M",
    confidenceLevel: "High" as ConfidenceLevel,
    lastUpdated: "Jan 3, 2025",
    wealthComposition: [
      { name: "Real Estate", value: "18.5M", color: "#3b82f6", confidence: "High" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "2.2M", color: "#10b981", confidence: "High" as ConfidenceLevel },
      { name: "Business Interests", value: "2.0M", color: "#f59e0b", confidence: "High" as ConfidenceLevel },
      { name: "Cash & Savings", value: "1.2M", color: "#6366f1", confidence: "High" as ConfidenceLevel },
      { name: "Other Assets", value: "0.8M", color: "#ec4899", confidence: "Medium" as ConfidenceLevel },
    ],
    dataSources: [
      {
        name: "Property Records",
        lastVerified: "Dec 30, 2024",
        description: "Data collected from county property records and verified against market valuations.",
      },
      {
        name: "SEC Filings",
        lastVerified: "Dec 28, 2024",
        description: "Information gathered from public SEC filings and quarterly reports.",
      },
      {
        name: "Business Registry",
        lastVerified: "Dec 20, 2024",
        description: "Data from state business registry and corporate filings.",
      },
    ],
    properties: [
      {
        address: "555 Downtown Blvd, Boston, MA",
        coordinates: [-71.0589, 42.3601],
        value: "$6.2M",
      },
      {
        address: "666 Harbor Way, Boston, MA",
        coordinates: [-71.0508, 42.3554],
        value: "$5.8M",
      },
      {
        address: "777 Financial District, Boston, MA",
        coordinates: [-71.0551, 42.3559],
        value: "$7.5M",
      },
    ],
  },
  {
    id: "13",
    name: "Maria Garcia",
    type: "Individual",
    netWorth: "2.9M",
    confidenceLevel: "Low" as ConfidenceLevel,
    lastUpdated: "Nov 15, 2024",
    wealthComposition: [
      { name: "Real Estate", value: "2.1M", color: "#3b82f6", confidence: "Low" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "0.4M", color: "#10b981", confidence: "Low" as ConfidenceLevel },
      { name: "Business Interests", value: "0.3M", color: "#f59e0b", confidence: "Low" as ConfidenceLevel },
      { name: "Cash & Savings", value: "0.2M", color: "#6366f1", confidence: "Low" as ConfidenceLevel },
      { name: "Other Assets", value: "0.1M", color: "#ec4899", confidence: "Low" as ConfidenceLevel },
    ],
    dataSources: [
      {
        name: "Property Records",
        lastVerified: "Nov 5, 2024",
        description: "Data collected from county property records with limited verification.",
      },
      {
        name: "Estimated Holdings",
        lastVerified: "Oct 25, 2024",
        description: "Estimated financial holdings based on limited public information.",
      },
    ],
    properties: [
      {
        address: "888 Palm Ave, Phoenix, AZ",
        coordinates: [-112.074, 33.4484],
        value: "$1.2M",
      },
      {
        address: "999 Desert View Dr, Scottsdale, AZ",
        coordinates: [-111.9261, 33.4942],
        value: "$1.5M",
      },
    ],
  },
  {
    id: "14",
    name: "Luxury Estates Group",
    type: "Entity",
    netWorth: "31.5M",
    confidenceLevel: "High" as ConfidenceLevel,
    lastUpdated: "Jan 2, 2025",
    wealthComposition: [
      { name: "Real Estate", value: "25.8M", color: "#3b82f6", confidence: "High" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "3.2M", color: "#10b981", confidence: "High" as ConfidenceLevel },
      { name: "Business Interests", value: "2.5M", color: "#f59e0b", confidence: "High" as ConfidenceLevel },
      { name: "Cash & Savings", value: "1.5M", color: "#6366f1", confidence: "High" as ConfidenceLevel },
      { name: "Other Assets", value: "0.8M", color: "#ec4899", confidence: "Medium" as ConfidenceLevel },
    ],
    dataSources: [
      {
        name: "Property Records",
        lastVerified: "Dec 30, 2024",
        description: "Data collected from county property records and verified against market valuations.",
      },
      {
        name: "SEC Filings",
        lastVerified: "Dec 28, 2024",
        description: "Information gathered from public SEC filings and quarterly reports.",
      },
      {
        name: "Business Registry",
        lastVerified: "Dec 20, 2024",
        description: "Data from state business registry and corporate filings.",
      },
    ],
    properties: [
      {
        address: "111 Oceanfront Dr, Malibu, CA",
        coordinates: [-118.7798, 34.0259],
        value: "$12.5M",
      },
      {
        address: "222 Cliffside Way, Malibu, CA",
        coordinates: [-118.7912, 34.0367],
        value: "$9.8M",
      },
      {
        address: "333 Beachview Terrace, Santa Monica, CA",
        coordinates: [-118.4912, 34.0195],
        value: "$8.2M",
      },
    ],
  },
  {
    id: "15",
    name: "Michael Johnson",
    type: "Individual",
    netWorth: "6.8M",
    confidenceLevel: "Medium" as ConfidenceLevel,
    lastUpdated: "Dec 18, 2024",
    wealthComposition: [
      { name: "Real Estate", value: "4.2M", color: "#3b82f6", confidence: "Medium" as ConfidenceLevel },
      { name: "Stocks & Securities", value: "1.8M", color: "#10b981", confidence: "Medium" as ConfidenceLevel },
      { name: "Business Interests", value: "0.8M", color: "#f59e0b", confidence: "Medium" as ConfidenceLevel },
      { name: "Cash & Savings", value: "0.5M", color: "#6366f1", confidence: "Medium" as ConfidenceLevel },
      { name: "Other Assets", value: "0.3M", color: "#ec4899", confidence: "Low" as ConfidenceLevel },
    ],
    dataSources: [
      {
        name: "Property Records",
        lastVerified: "Dec 10, 2024",
        description: "Data collected from county property records with moderate verification.",
      },
      {
        name: "Financial Disclosures",
        lastVerified: "Dec 5, 2024",
        description: "Information from public financial disclosures and estimated holdings.",
      },
    ],
    properties: [
      {
        address: "444 Lakefront Dr, Lake Tahoe, NV",
        coordinates: [-119.9772, 39.0968],
        value: "$3.2M",
      },
      {
        address: "555 Mountain View Rd, Incline Village, NV",
        coordinates: [-119.9526, 39.2501],
        value: "$2.8M",
      },
    ],
  },
]
