import { NextRequest } from "next/server";
import prisma from 'lib/index';




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
 

  try {
 

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



    return new Response(jsonData, { status: 200,headers: {
      'Cache-Control': 's-maxage=259200, stale-while-revalidate=60', // 3 days cache, 1 min stale
      'Content-Type': 'application/json',
    } });

  } catch (error) {
    console.error("Error fetching properties for owner:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
