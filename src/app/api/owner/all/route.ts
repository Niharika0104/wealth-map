import { NextRequest } from "next/server";
import prisma from 'lib/index';


// POST: Find all properties owned by a given ownerId
export async function GET(req: NextRequest) {
  
  try {
    // Find all property-owner relations for this owner, including property details
    const propertyOwners = await prisma.owner.findMany({});

    // Add confidence level based on non-null asset fields
    const ownersWithConfidence = propertyOwners.map((owner) => {
      const fields = [
        owner.stocksSecurities,
        owner.businessInterests,
        owner.cashSavings,
        owner.otherAssets,
      ];
      const nonNullCount = fields.filter((v) => v !== null && v !== undefined).length;
      let confidenceLevel: "High" | "Medium" | "Low";
      if (nonNullCount === 4) confidenceLevel = "High";
      else if (nonNullCount >= 2) confidenceLevel = "Medium";
      else confidenceLevel = "Low";
      return { ...owner, confidenceLevel };
    });

    return new Response(JSON.stringify(ownersWithConfidence), { status: 200 });
  } catch (error) {
    console.error("Error fetching properties for owner:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
