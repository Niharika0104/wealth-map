import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

async function linkPropertiesWithOwners() {
  try {
    // Get all properties and owners
    const properties = await prisma.property.findMany();
    const owners = await prisma.owner.findMany();

    if (properties.length === 0 || owners.length === 0) {
      console.log("No properties or owners found");
      return;
    }

    // Link each property with a random owner
    for (const property of properties) {
      const randomOwner = owners[Math.floor(Math.random() * owners.length)];
      const isCorporate = randomOwner.name.includes("LLC") || randomOwner.name.includes("Ltd.") || randomOwner.name.includes("Inc.");

      await prisma.propertyOwner.create({
        data: {
          propertyId: property.id,
          ownerId: randomOwner.id,
          ownerType: isCorporate ? "corporate" : "individual"
        }
      });
    }

    console.log("Properties linked with owners successfully");
  } catch (error) {
    console.error("Error linking properties with owners:", error);
  } finally {
    await prisma.$disconnect();
  }
}

linkPropertiesWithOwners(); 