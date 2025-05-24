import prisma from 'lib/index'; // Adjust the import path as necessary
import { NextResponse } from 'next/server';
import redisClient, { connectRedis } from 'lib/redis'; // Ensure this exists
import { getWealthConfidenceLevel } from '@/Models/models';

const CACHE_KEY = 'property-data';
const CACHE_TTL = 60 * 60 * 24; // 24 hours

export async function GET() {
    await connectRedis();
     const cached = await redisClient.get(CACHE_KEY);
    if (cached) {
      return new Response(cached, { status: 200 });
    }
  try {
    const properties = await prisma.property.findMany({
      select: {
        id: true,
        name: true,
        address: true,
        city: true,
        state: true,
        country: true,
        zipCode: true,
        price: true,
        images: true,
        area: true,
        bed: true,
        bath: true,
        type: true,
        confidenceScore: true,
      
        updatedAt: true,
        views: true,
        owners: {
          select: {
            ownerType: true,
            ownerId: true, 
          }
        }
      }
    });
    // Add ownerType field to each property based on the first propertyOwner's ownerType (faster)
   const propertiesWithOwnerType = await Promise.all(properties.map(async (property: any) => {
  let ownerType = null;
  let confidenceLevel = "Low";
  if (property.owners && property.owners.length > 0 && property.owners[0]) {
    ownerType = property.owners[0].ownerType || null;
    // Fetch the owner and compute confidenceLevel
    const owner = await prisma.owner.findUnique({
      where: { id: property.owners[0].ownerId },
      select: {
        
        stocksSecurities: true,
        businessInterests: true,
        cashSavings: true,
        otherAssets: true,
      },
    });
    if (owner) {
      confidenceLevel = getWealthConfidenceLevel(owner);
    }
  }
  const { owners, ...rest } = property;
  return { ...rest, ownerType, confidence:confidenceLevel };
}));
     await redisClient.setEx(CACHE_KEY, CACHE_TTL, JSON.stringify(propertiesWithOwnerType));

    return NextResponse.json(propertiesWithOwnerType);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch properties', details: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
