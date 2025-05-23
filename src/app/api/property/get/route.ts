import { NextRequest } from "next/server";
import prisma from 'lib/index';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { propertyId } = body;

  if (!propertyId) {
    return new Response(JSON.stringify({ error: "propertyId is required in the request body." }), { status: 400 });
  }

  try {
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

    if (!property) {
      return new Response(JSON.stringify({ error: "Property not found." }), { status: 404 });
    }

    return new Response(JSON.stringify({ property }), { status: 200 });
  } catch (error) {
    console.error("Error fetching property details:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
