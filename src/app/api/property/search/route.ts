import { NextRequest } from "next/server";
import prisma from 'lib/index';

// GET /api/property/search?query=...  (search by address, city, or zipCode)
export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query")?.trim();
  if (!query) {
    return new Response(JSON.stringify({ error: "Missing search query" }), { status: 400 });
  }

  try {
    const properties = await prisma.property.findMany({
      where: {
        OR: [
          { address: { contains: query, mode: "insensitive" } },
          { city: { contains: query, mode: "insensitive" } },
          { zipCode: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: { updatedAt: "desc" },
    });
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to search properties", details: error }), { status: 500 });
  }
}
