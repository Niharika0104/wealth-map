import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
import { faker } from "@faker-js/faker";

async function main() {
  // Create permissions
  const permissions = [
    // System permissions
    { name: 'system:*', category: 'system', description: 'Full system access' },
    
    // Company permissions
    { name: 'companies:*', category: 'companies', description: 'Full company management' },
    { name: 'company:manage', category: 'companies', description: 'Manage company settings' },
    
    // User permissions
    { name: 'users:*', category: 'users', description: 'Full user management' },
    { name: 'employees:*', category: 'users', description: 'Full employee management' },
    { name: 'permissions:assign', category: 'users', description: 'Assign permissions to users' },
    
    // Subscription permissions
    { name: 'subscriptions:*', category: 'subscriptions', description: 'Full subscription management' },
    
    // Audit permissions
    { name: 'audit:*', category: 'audit', description: 'Full audit access' },
    
    // Data permissions
    { name: 'data:*', category: 'data', description: 'Full data access' },
    { name: 'export:*', category: 'data', description: 'Export data' },
    
    // Property permissions
    { name: 'property:*', category: 'property', description: 'Full property management' },
    { name: 'property:view', category: 'property', description: 'View properties' },
    { name: 'property:search', category: 'property', description: 'Search properties' },
    
    // Owner permissions
    { name: 'owner:view', category: 'owners', description: 'View owner information' },
    
    // Report permissions
    { name: 'reports:*', category: 'reports', description: 'Full report management' },
    { name: 'reports:create', category: 'reports', description: 'Create reports' },
    { name: 'reports:share', category: 'reports', description: 'Share reports' },
    { name: 'reports:view', category: 'reports', description: 'View reports' },
    
    // Bookmark permissions
    { name: 'bookmark:*', category: 'bookmarks', description: 'Full bookmark management' },
    { name: 'bookmark:create', category: 'bookmarks', description: 'Create bookmarks' },
    
    // Search permissions
    { name: 'search:*', category: 'search', description: 'Full search capabilities' },
    { name: 'search:basic', category: 'search', description: 'Basic search capabilities' },
    { name: 'search:history', category: 'search', description: 'View search history' },
  ];

  // Create all permissions
  for (const permission of permissions) {
    await prisma.permission.upsert({
      where: { name: permission.name },
      update: permission,
      create: permission,
    });
  }

  // Create roles with their permissions
  const roles = [
    {
      name: 'super_admin',
      description: 'Super Administrator with full system access',
      isSystem: true,
      permissions: ['system:*', 'companies:*', 'users:*', 'subscriptions:*', 'audit:*', 'data:*'],
    },
    {
      name: 'company_admin',
      description: 'Company Administrator with company-level access',
      isSystem: true,
      permissions: [
        'company:manage',
        'employees:*',
        'permissions:assign',
        'export:*',
        'reports:*',
        'property:*',
        'bookmark:*',
        'search:*',
      ],
    },
    {
      name: 'analyst',
      description: 'Analyst with property and report access',
      isSystem: true,
      permissions: [
        'property:view',
        'property:search',
        'owner:view',
        'reports:create',
        'reports:share',
        'bookmark:create',
        'search:history',
      ],
    },
    {
      name: 'viewer',
      description: 'Basic viewer with limited access',
      isSystem: true,
      permissions: ['property:view', 'reports:view', 'search:basic'],
    },
  ];

  // Create roles and connect permissions
  for (const role of roles) {
    const { permissions: permissionNames, ...roleData } = role;
    
    await prisma.role.upsert({
      where: { name: roleData.name },
      update: roleData,
      create: {
        ...roleData,
        permissions: {
          connect: permissionNames.map(name => ({ name })),
        },
      },
    });
  }
}






async function generateOwners() {
  const corporateSuffixes = ["LLC", "Ltd.", "Inc.", "Corporation", "Holdings"];

  const ownersData = Array.from({ length: 50 }, () => {
    const isCorporate = Math.random() < 0.4;

    const name = isCorporate
      ? `${faker.company.name()} ${faker.helpers.arrayElement(corporateSuffixes)}`
      : `${faker.person.firstName()} ${faker.person.lastName()}`;

    const owner = {
     
      name,
      email: isCorporate ? null : faker.internet.email(),
      phoneNumber: isCorporate ? null : faker.phone.number({ style: "international" }),
      stocksSecurities: Math.random() < 0.7 ? faker.number.float({ min: 10000, max: 500000 }) : 0,
      businessInterests: Math.random() < 0.7 ? faker.number.float({ min: 10000, max: 500000 }) : 0,
      cashSavings: Math.random() < 0.7 ? faker.number.float({ min: 10000, max: 500000 }) : 0,
      otherAssets: Math.random() < 0.7 ? faker.number.float({ min: 10000, max: 500000 }) : 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return owner;
  });

  await prisma.owner.createMany({ data: ownersData });
  console.log("✅ 50 owners inserted.");
}
async function mapOwnersToProperties() {
  const owners = await prisma.owner.findMany();
  const properties = await prisma.property.findMany();

  const propertyOwners: {
   
    propertyId: string;
    ownerId: string;
    ownerType: string;
    createdAt: Date;
    updatedAt: Date;
  }[] = [];

  properties.forEach((property, index) => {
    // 20% of properties have no owner
    if (Math.random() < 0.2) return;

    // Pick 1 random owner
    const owner = faker.helpers.arrayElement(owners);

    const isCorporate = owner.name.includes("LLC") || owner.name.includes("Ltd.") || owner.name.includes("Inc.");

    propertyOwners.push({
    
      propertyId: property.id,
      ownerId: owner.id,
      ownerType: isCorporate ? "corporate" : "individual",
      createdAt: new Date(),
      updatedAt: new Date()
    });
  });

  await prisma.propertyOwner.createMany({ data: propertyOwners });
  console.log(`✅ Linked ${propertyOwners.length} properties with owners.`);
}

async function seedOwnersAndLinkToProperties() {
  await generateOwners();               // Step 1: Create Owners
  await mapOwnersToProperties();        // Step 2: Link Owners to Properties
}

// main()
seedOwnersAndLinkToProperties()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 