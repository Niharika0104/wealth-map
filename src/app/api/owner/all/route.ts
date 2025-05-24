import { NextRequest } from "next/server";
import prisma from 'lib/index';
import redisClient, { connectRedis } from 'lib/redis'; // Ensure this exists

const CACHE_KEY = 'owners-wealth-data';
const CACHE_TTL = 60 * 60 * 24; // 24 hours

function getConfidenceLevel(owner: any): "High" | "Medium" | "Low" {
  const fields = [
    owner.stocksSecurities,
    owner.businessInterests,
    owner.cashSavings,
    owner.otherAssets,
  ];
  const nonNullCount = fields.filter((v) => v !== null && v !== undefined && v !== 0).length;
  if (nonNullCount === 4) return "High";
  if (nonNullCount >= 2) return "Medium";
  return "Low";
}

export async function GET(req: NextRequest) {
  await connectRedis();

  try {
    // Check Redis first
    const cached = await redisClient.get(CACHE_KEY);
    if (cached) {
      return new Response(cached, { status: 200 });
    }

    // No cache, fetch fresh data
    const owners = await prisma.owner.findMany({
      include: {
        properties: {
          include: { property: true }
        }
      },
    });

    const result = owners.map((owner) => {
      const properties = (owner.properties || []).map((propOwner: any) => propOwner.property);
      const confidenceLevel = getConfidenceLevel(owner);
      const totalRealEstateWealth = properties.reduce((sum, property) => sum + (property.price || 0), 0);
      return {
        ...owner,
        confidenceLevel,
        totalRealEstateWealth,
        properties
      };
    });

    const jsonData = JSON.stringify(result);

    // Cache the result
    await redisClient.setEx(CACHE_KEY, CACHE_TTL, jsonData);

    return new Response(jsonData, { status: 200 });

  } catch (error) {
    console.error("Error fetching properties for owner:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
