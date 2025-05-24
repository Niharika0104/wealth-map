import { NextRequest } from "next/server";
import prisma from 'lib/index';
import { any } from "zod";

// POST: Find all properties owned by a given ownerId
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { ownerId } = body;

  if (!ownerId) {
    return new Response(JSON.stringify({ error: "ownerId is required in the request body." }), { status: 400 });
  }

  try {
    // Get the owner details
    const owner = await prisma.owner.findUnique({
      where: { id: ownerId },
      include: {
        properties: {
          include: {
            property: {
              include: {
                Bookmarks: true,
                views: true,
              }
            }
          }
        }
      }
    });

    if (!owner) {
      return new Response(JSON.stringify({ error: "Owner not found." }), { status: 404 });
    }

    // Extract properties from the relations
    const properties = owner.properties.map((po: any) => po.property);

    // Calculate total real estate wealth (sum of property prices)
    const totalRealEstateWealth = properties.reduce((sum: number, prop: any) => sum + (prop.price || 0), 0);

    // Compute confidence score from asset fields
    const assetFields = [owner.stocksSecurities, owner.businessInterests, owner.cashSavings, owner.otherAssets];
    const nonNullCount = assetFields.filter((v) => v !== null && v !== undefined && v!=0).length;
    let confidenceScore: "High" | "Medium" | "Low";
    if (nonNullCount === 4) confidenceScore = "High";
    else if (nonNullCount >= 2) confidenceScore = "Medium";
    else confidenceScore = "Low";

    // Determine ownerType from the first propertyOwner relation (if available)
    let ownerType = undefined;
    if (owner.properties.length > 0 && owner.properties[0].ownerType) {
      ownerType = owner.properties[0].ownerType;
    }

    // Return owner details and their properties, with top-level fields
    return new Response(
      JSON.stringify({
        owner,
         ownerType,
          confidenceScore,
          totalRealEstateWealth,
        
        properties,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching properties for owner:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
