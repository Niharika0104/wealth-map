import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

async function addTestProperties() {
  const testProperties = [
    {
      name: "Luxury Penthouse",
      description: "A stunning penthouse with panoramic city views",
      address: "123 Main St, New York, NY",
      city: "New York",
      state: "NY",
      country: "USA",
      zipCode: "10001",
      price: 2500000,
      images: ["https://example.com/image1.jpg"],
      area: 3000,
      bed: 3,
      bath: 2,
      type: "apartment",
      confidenceScore: 0.9
    },
    {
      name: "Beachfront Villa",
      description: "Beautiful beachfront property with ocean views",
      address: "456 Ocean Dr, Miami, FL",
      city: "Miami",
      state: "FL",
      country: "USA",
      zipCode: "33139",
      price: 3500000,
      images: ["https://example.com/image2.jpg"],
      area: 4000,
      bed: 4,
      bath: 3,
      type: "house",
      confidenceScore: 0.85
    },
    {
      name: "Tech Hub Office",
      description: "Modern office space in the heart of Silicon Valley",
      address: "789 Tech Blvd, San Francisco, CA",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      zipCode: "94105",
      price: 5000000,
      images: ["https://example.com/image3.jpg"],
      area: 5000,
      type: "commercial",
      confidenceScore: 0.95
    }
  ];

  try {
    for (const property of testProperties) {
      await prisma.property.create({
        data: property
      });
    }
    console.log("Test properties added successfully");
  } catch (error) {
    console.error("Error adding test properties:", error);
  } finally {
    await prisma.$disconnect();
  }
}

addTestProperties(); 