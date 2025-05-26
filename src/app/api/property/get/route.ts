import { NextRequest } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
  const body = await req.json();
  const { propertyId } = body;



  if (!propertyId) {
      console.error("No propertyId provided in request");
    return new Response(JSON.stringify({ error: "propertyId is required in the request body." }), { status: 400 });
  }


    const property = await prisma.property.findUnique({
      where: { id: propertyId },
      include: {
        owners: {
          include: {
            owner: true
          }
        },
        Bookmarks: true,
        views: true,
      }
    });

    console.log("Found property:", property);

    if (!property) {
      console.error("Property not found for ID:", propertyId);
      return new Response(JSON.stringify({ error: "Property not found." }), { status: 404 });
    }

    return new Response(JSON.stringify({ property }), { status: 200,headers: {
      'Cache-Control': 's-maxage=259200, stale-while-revalidate=60', // 3 days cache, 1 min stale
      'Content-Type': 'application/json',
    } });
  } catch (error) {
    console.error("Error in property get endpoint:", error);
    return new Response(JSON.stringify({ error: "Internal server error", details: error }), { status: 500 });
  }
}
