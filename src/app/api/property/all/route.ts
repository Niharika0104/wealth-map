import prisma from 'lib/index'; // Adjust the import path as necessary
import { NextResponse } from 'next/server';


export async function GET() {
  try {
    const properties = await prisma.property.findMany({
      select: {
        id: true,
        name: true,
        address: true,
        city: true,
        state: true,
        country: true,
        zipCode: true,
        price: true,
        images: true,
        area: true,
        bed: true,
        bath: true,
        type: true,
        confidenceScore: true,
      
        updatedAt: true,
        views: true,
        owners: {
          select: {
            ownerType: true
          }
        }
      }
    });
    // Add ownerType field to each property based on the first propertyOwner's ownerType (faster)
    const propertiesWithOwnerType = properties.map((property: any) => {
      let ownerType = null;
      if (property.owners && property.owners.length > 0 && property.owners[0]) {
        ownerType = property.owners[0].ownerType || null;
      }
      // Remove the owners array to reduce payload size if not needed
      const { owners, ...rest } = property;
      return { ...rest, ownerType };
    });
    return NextResponse.json(propertiesWithOwnerType);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch properties', details: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
