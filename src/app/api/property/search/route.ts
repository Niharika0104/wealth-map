import { NextRequest } from "next/server";
import prisma from 'lib/index';
import redisClient, { connectRedis } from 'lib/redis'; 
const CACHE_TTL = 60 * 60 * 24; // 24 hours

export async function GET(req: NextRequest) {
   await connectRedis();
  
  const query = req.nextUrl.searchParams.get("query")?.trim();
  if (!query) {
    return new Response(JSON.stringify({ error: "Missing search query" }), { status: 400 });
  }
 const CACHE_KEY = `owner-data-${query}`;
  
  try {
     const cached = await redisClient.get(CACHE_KEY);
      if (cached) {
      return new Response(cached, { status: 200 });
    }
    const properties = await prisma.property.findMany({
      where: {
        OR: [
          { address: { contains: query, mode: "insensitive" } },
          { city: { contains: query, mode: "insensitive" } },
            { state: { contains: query, mode: "insensitive" } },
          { zipCode: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: { updatedAt: "desc" },
    });
     await redisClient.setEx(CACHE_KEY, CACHE_TTL, JSON.stringify(properties));
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to search properties", details: error }), { status: 500 });
  }
}
