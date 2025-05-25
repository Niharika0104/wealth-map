import { NextRequest } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { propertyId } = body;

    
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

    return new Response(JSON.stringify({ property }), { status: 200 });
  } catch (error) {
    console.error("Error in property get endpoint:", error);
    return new Response(JSON.stringify({ error: "Internal server error", details: error }), { status: 500 });
  }
}
