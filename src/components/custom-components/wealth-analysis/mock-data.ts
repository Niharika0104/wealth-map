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
]
