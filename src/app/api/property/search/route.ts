import { NextRequest } from "next/server";
import prisma from 'lib/index';

const CACHE_TTL = 60 * 60 * 24; // 24 hours

export async function GET(req: NextRequest) {
 
  
  const query = req.nextUrl.searchParams.get("query")?.trim();
  if (!query) {
    return new Response(JSON.stringify({ error: "Missing search query" }), { status: 400 });
  }
 const CACHE_KEY = `owner-data-${query}`;
  
  try {
    
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
   
    return new Response(JSON.stringify(properties), { status: 200 ,headers: {
      'Cache-Control': 's-maxage=259200, stale-while-revalidate=60', // 3 days cache, 1 min stale
      'Content-Type': 'application/json',
    } });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to search properties", details: error }), { status: 500 });
  }
}
