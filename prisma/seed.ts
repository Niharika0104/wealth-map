import { PrismaClient } from '../src/generated/prisma';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { faker } from "@faker-js/faker";
import { hash } from "bcryptjs";
import { fileURLToPath } from 'url';
import csvParser from 'csv-parser';
import xlsx from 'xlsx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prisma = new PrismaClient();

const propertyNames = [
  "Sapphire Estate", "Emerald Manor", "Golden Crest", "The Grand Haven", "Silver Oak Residence",
  "Maplewood Villa", "Crystal Ridge", "Hilltop Retreat", "Sunset Hills", "The Summit View",
  "Lakeside Grandeur", "Whispering Pines", "Royal Gardens", "Oceanview Heights", "Skyline Estate",
  "Cedarwood Court", "The Monarch Residence", "Prestige Point", "Aspen Retreat", "The Heritage Villa",
  "Velvet Ridge", "Diamond Bluff", "The Horizon Home", "Regal Crest", "Pinehill Estate",
  "Evergreen Lodge", "Windsor Villa", "Highland Vista", "Serenity Acres", "Majestic Meadows",
  "The Enclave", "Valleybrook Estate", "The Chateau", "Bluewater Residence", "Rosewood Heights",
  "The Arcadia", "Golden Leaf Estate", "Hillcrest View", "Tranquil Pines", "Amber Ridge",
  "Riverview Estate", "Royal Summit", "The Estates at Canyon Ridge", "Hidden Lake Retreat", "The Bridle Path",
  "Starlight Manor", "Crystal Springs", "The Gables", "Sunset Ridge", "Orchard Hill"
];

const landPlotImages = [
  "https://images.unsplash.com/photo-1671769194944-47293018a9d5?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1637555754372-54538a035312?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1626126588760-d758e9765992?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1720059777532-871793c58c18?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1635070865871-2ec2c447988d?w=900&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1664304252735-94a13543db2d?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1661153806020-a3df1c29653d?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1558455640-f9f216d0608a?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1730473313729-f330d7bbbbe9?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1557976571-4ba2bcf3d6d2?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1690106055723-eb407b044931?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1613560361120-25c33e26c40a?w=900&auto=format&fit=crop&q=60"
];
const bedroomImages = [
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
  "https://images.unsplash.com/photo-1568495248636-6432b97bd949",
  "https://images.unsplash.com/photo-1600210491305-7396500b5b31",
  "https://plus.unsplash.com/premium_photo-1670076505419-99468d952c61",
  "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4",
  "https://images.unsplash.com/photo-1595268396332-9af381e5935e",
  "https://plus.unsplash.com/premium_photo-1675615949743-6ec930d87410",
  "https://images.unsplash.com/photo-1617104678098-de229db51175",
  "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
  "https://images.unsplash.com/photo-1560184897-502a475f7a0d",
  "https://images.unsplash.com/photo-1616594136787-28732f588083",
  "https://images.unsplash.com/photo-1633944095397-878622ebc01c"
];

const kitchenImages = [
  "https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51",
  "https://images.unsplash.com/photo-1600684388091-627109f3cd60",
  "https://images.unsplash.com/photo-1556912173-3bb406ef7e77",
  "https://plus.unsplash.com/premium_photo-1661317296820-16fd638ee06f",
  "https://plus.unsplash.com/premium_photo-1670076720537-bde4646fa221",
  "https://images.unsplash.com/photo-1600493505423-474fea65ad9e",
  "https://plus.unsplash.com/premium_photo-1676320514043-d6642c9bbd73",
  "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7"
];

const livingRoom = [
  "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=2942&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1661962952618-031d218dd040?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1630699144035-c0f6311ec482?q=80&w=2940&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1674480165860-f60bcf6aa2f7?w=900&auto=format&fit=crop&q=60"
];

async function main() {
  // Create permissions
  const permissions = [
    // System permissions (Super Admin only)
    { name: 'system:*', category: 'system', description: 'Full system access' },
    
    // Company permissions (Company Admin and Super Admin)
    { name: 'companies:*', category: 'companies', description: 'Full company management' },
    { name: 'company:manage', category: 'companies', description: 'Manage company settings' },
    
    // User permissions (Company Admin and Super Admin)
    { name: 'users:*', category: 'users', description: 'Full user management' },
    { name: 'employees:*', category: 'users', description: 'Full employee management' },
    { name: 'permissions:assign', category: 'users', description: 'Assign permissions to users' },
    
    // Property permissions (All roles)
    { name: 'property:*', category: 'property', description: 'Full property management' },
    { name: 'property:view', category: 'property', description: 'View properties' },
    { name: 'property:search', category: 'property', description: 'Search properties' },
    
    // Report permissions (All roles)
    { name: 'reports:*', category: 'reports', description: 'Full report management' },
    { name: 'reports:create', category: 'reports', description: 'Create reports' },
    { name: 'reports:share', category: 'reports', description: 'Share reports' },
    { name: 'reports:view', category: 'reports', description: 'View reports' },
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
      name: 'SUPER_ADMIN',
      description: 'Super Administrator with system-level access only',
      isSystem: true,
      permissions: [
        'system:*',
        'companies:*',
        'users:*',
      ],
    },
    {
      name: 'COMPANY_ADMIN',
      description: 'Company Administrator with full company access',
      isSystem: true,
      permissions: [
        // Company management
        'company:manage',
        'employees:*',
        'permissions:assign',
        // Property access
        'property:*',
        // Report access
        'reports:*',
        // Employee permissions (inherited)
        'property:view',
        'property:search',
        'reports:view',
      ],
    },
    {
      name: 'EMPLOYEE',
      description: 'Basic employee with limited access',
      isSystem: true,
      permissions: [
        'property:view',
        'property:search',
        'reports:view',
      ],
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

  // Create a super admin user
  const superAdminPassword = await hash('admin123', 12);
  const superAdmin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      id: faker.string.uuid(),
      name: 'Super Admin',
      email: 'admin@example.com',
      password: superAdminPassword,
      emailVerified: true,
      currentRole: 'SUPER_ADMIN',
      roles: {
        connect: [{ name: 'SUPER_ADMIN' }],
      },
    },
  });

  // Create account for super admin
  await prisma.account.upsert({
    where: { id: faker.string.uuid() },
    update: {},
    create: {
      id: faker.string.uuid(),
      accountId: superAdmin.id,
      providerId: 'credentials',
      userId: superAdmin.id,
      password: superAdminPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  // Create a company
  const company = await prisma.organization.create({
    data: {
      id: faker.string.uuid(),
      name: 'Example Company',
      status: 'active',
      metadata: JSON.stringify({
        billingEmail: 'billing@example.com',
        address: '123 Business St, City, Country',
        phone: '+1234567890',
      }),
      createdAt: new Date(),
    },
  });

  // Create a company admin user
  const companyAdminPassword = await hash('company123', 12);
  const companyAdmin = await prisma.user.upsert({
    where: { email: 'company@example.com' },
    update: {},
    create: {
      id: faker.string.uuid(),
      name: 'Company Admin',
      email: 'company@example.com',
      password: companyAdminPassword,
      emailVerified: true,
      currentRole: 'COMPANY_ADMIN',
      roles: {
        connect: [{ name: 'COMPANY_ADMIN' }],
      },
    },
  });

  // Create account for company admin
  await prisma.account.upsert({
    where: { id: faker.string.uuid() },
    update: {},
    create: {
      id: faker.string.uuid(),
      accountId: companyAdmin.id,
      providerId: 'credentials',
      userId: companyAdmin.id,
      password: companyAdminPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  // Create member record for company admin
  await prisma.member.create({
    data: {
      id: faker.string.uuid(),
      organizationId: company.id,
      userId: companyAdmin.id,
      role: 'COMPANY_ADMIN',
      createdAt: new Date(),
    },
  });

  // Create an employee user
  const employeePassword = await hash('employee123', 12);
  const employee = await prisma.user.upsert({
    where: { email: 'employee@example.com' },
    update: {},
    create: {
      id: faker.string.uuid(),
      name: 'Employee User',
      email: 'employee@example.com',
      password: employeePassword,
      emailVerified: true,
      currentRole: 'EMPLOYEE',
      roles: {
        connect: [{ name: 'EMPLOYEE' }],
      },
    },
  });

  // Create account for employee
  await prisma.account.upsert({
    where: { id: faker.string.uuid() },
    update: {},
    create: {
      id: faker.string.uuid(),
      accountId: employee.id,
      providerId: 'credentials',
      userId: employee.id,
      password: employeePassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  // Create member record for employee
  await prisma.member.create({
    data: {
      id: faker.string.uuid(),
      organizationId: company.id,
      userId: employee.id,
      role: 'EMPLOYEE',
      createdAt: new Date(),
    },
  });

  console.log('✅ Seed data created successfully');
}

async function generateOwners() {
  const corporateSuffixes = ["LLC", "Ltd.", "Inc.", "Corporation", "Holdings"];

  const ownersData = Array.from({ length: 50 }, () => {
    const isCorporate = Math.random() < 0.4;

    const name = isCorporate
      ? `${faker.company.name()} ${faker.helpers.arrayElement(corporateSuffixes)}`
      : `${faker.person.firstName()} ${faker.person.lastName()}`;

    return {
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
  });

  await prisma.owner.createMany({ data: ownersData });
  console.log("✅ 50 owners inserted.");
}

async function mapOwnersToProperties() {
  type Owner = { id: string; name: string };
  type Property = { id: string };
  type PropertyOwner = {
    propertyId: string;
    ownerId: string;
    ownerType: string;
    createdAt: Date;
    updatedAt: Date;
  };

  const owners = await prisma.owner.findMany() as Owner[];
  const properties = await prisma.property.findMany() as Property[];

  const propertyOwners = properties.flatMap((property: Property) => {
    // 20% of properties have no owner
    if (Math.random() < 0.2) return [];

    // Pick 1 random owner
    const owner = faker.helpers.arrayElement(owners) as Owner;
    const isCorporate = owner.name.includes("LLC") || owner.name.includes("Ltd.") || owner.name.includes("Inc.");

    return [{
      propertyId: property.id,
      ownerId: owner.id,
      ownerType: isCorporate ? "Entity" : "Individual",
      createdAt: new Date(),
      updatedAt: new Date()
    }] as PropertyOwner[];
  });

  await prisma.propertyOwner.createMany({ data: propertyOwners });
  console.log(`✅ Linked ${propertyOwners.length} properties with owners.`);
}

async function seedOwnersAndLinkToProperties() {
  await generateOwners();               // Step 1: Create Owners
  await mapOwnersToProperties();        // Step 2: Link Owners to Properties
}

async function seedUsers() {
  const usersData = Array.from({ length: 50 }, (_, i) => ({
    id: `user-${i + 1}`,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    emailVerified: true,
    image: faker.image.avatar(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  for (const user of usersData) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: user,
      create: user,
    });
  }
  console.log('✅ 50 users inserted.');
}

async function seedBookMarksAndViews() {
  const users = await prisma.user.findMany();
  const properties = await prisma.property.findMany();

  for (const property of properties) {
    // --- Seed Views ---
    const viewCount = faker.number.int({ min: 30, max: Math.min(50, users.length) });
    const viewUserSample = faker.helpers.arrayElements(users, viewCount);
    for (const user of viewUserSample) {
      await prisma.view.create({
        data: {
          userId: user.id,
          propertyId: property.id,
        },
      });
    }

    // --- Seed Bookmarks ---
    const bookmarkCount = faker.number.int({ min: 25, max: Math.min(40, users.length) });
    const bookmarkUserSample = faker.helpers.arrayElements(users, bookmarkCount);
    for (const user of bookmarkUserSample) {
      await prisma.bookmark.create({
        data: {
          userId: user.id,
          propertyId: property.id,
        },
      });
    }
  }
  console.log(`✅ Seeded random views (30-50) and bookmarks (25-40) for all properties.`);
}

// main()
async function seedBookmarksAndViews() {
  await seedUsers();
  await seedBookMarksAndViews();
}

function getRandomFromArray(arr: any[]): any {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomName(): string {
  return getRandomFromArray(propertyNames);
}

function getRandomDate(): Date {
  const start = new Date('2023-01-01');
  const end = new Date('2025-12-31');
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function readCSV(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const results: any[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', data => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}
async function importData(): Promise<void> {
  const filePath = path.join(__dirname, 'realtor-data.csv');
  const results = await readCSV(filePath);

  // Fetch all existing addresses to avoid duplicates
  const existingProperties = await prisma.property.findMany({
    select: { address: true }
  });
  const existingAddresses = new Set(existingProperties.map(p => p.address));
  const processed = (results as any[])
    .filter((r: any) => r.price && r.street && r.city && r.state && r.zip_code)
    .map((r: any) => {
      const houseSize = parseFloat(r.house_size);
      const acreLot = parseFloat(r.acre_lot);
      const bed = parseInt(r.bed);
      const bath = parseInt(r.bath);
      const price = parseFloat(r.price);

      // Determine property type
      let propertyType = null;
      if ((!houseSize || houseSize === 0) && acreLot && acreLot > 0) {
        propertyType = "Land";
      } else if ((acreLot === 0 || !acreLot) && houseSize && houseSize > 0 && bed >= 1 && bath >= 1) {
        propertyType = "House";
      }

      if (!propertyType || (propertyType === "house" && (bed < 1 || bath < 1))) return null;

      // Ensure all required fields are valid
      const street = r.street?.trim();
      const city = r.city?.trim();
      const state = r.state?.trim();
      const zip = r.zip_code?.trim();
      const country = r.country?.trim() || "USA"; // default fallback

      if (!street || !city || !state || !zip || !country || isNaN(price)) return null;

      const baseImages = r.images ? (() => {
        try {
          const parsed = JSON.parse(r.images);
          return Array.isArray(parsed) ? parsed : [];
        } catch {
          return [];
        }
      })() : [];

      // Add fallback images
      if (propertyType === "land") {
        baseImages.push(getRandomFromArray(landPlotImages));
      } else {
        baseImages.push(getRandomFromArray(livingRoom));
        baseImages.push(getRandomFromArray(bedroomImages));
        baseImages.push(getRandomFromArray(kitchenImages));
      }

      const sizeSqFt = propertyType === "house" ? houseSize : (acreLot * 43560);
      if (!sizeSqFt || isNaN(sizeSqFt)) return null;

      const priceInMillions = (price / 1_000_000).toFixed(1);
      const address = `${street}, ${city}, ${state}, ${zip}`;
      if (existingAddresses.has(address)) return null;

      const dateAdded = getRandomDate();
      if (!dateAdded || isNaN(new Date(dateAdded).getTime())) return null;

      return {
        address,
        name: getRandomName(),
        propertyType,
        sizeSqFt,
        price,
        beds: bed,
        baths: bath,
        description: `This property is located at ${street}, ${city}, ${state}. The property spans ${Math.round(sizeSqFt)} square feet and is currently valued at $${priceInMillions}M. This is a prime real estate opportunity with excellent investment potential.`,
        images: baseImages,
        dateAdded,
        city,
        state,
        country,
        zipCode: zip,
        confidenceScore: parseFloat(r.confidence_score) || undefined
      };
    })
    .filter((item: any) => item !== null);

  // Only insert 100 records at once
  const toInsert = processed.slice(0, 100);

  if (toInsert.length === 0) {
    console.log("No new records to insert.");
    return;
  }

  // Batch insert
  const inserted = await prisma.property.createMany({
    data: toInsert.map((item: any) => ({
      address: item.address,
      name: item.name,
      description: item.description,
      city: item.city,
      state: item.state,
      country: item.country,
      zipCode: item.zipCode,
      price: item.price,
      images: item.images, // pass as array
      area: item.sizeSqFt, // renamed to match model
      bed: item.beds,
      bath: item.baths,
      type: item.propertyType,
      confidenceScore: item.confidenceScore,
      createdAt: item.dateAdded
    })),
    skipDuplicates: true
  });

  console.log(`${inserted.count} new properties inserted.`);
}
async function loadAddressesFromCSV(filePath: string): Promise<any[]> {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.xls' || ext === '.xlsx') {
    // Use xlsx to parse Excel files
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows: any[] = xlsx.utils.sheet_to_json(sheet);
    // Normalize fields
    return rows.map((row: any) => ({
      street: row.street || row.Street || '',
      city: row.city || row.City || '',
      state: row.state || row.State || '',
      zipCode: row.zipCode || row.ZipCode || row.zip || row.Zip || '',
    }));
  } else {
    // Fallback to csv-parser for .csv
    return new Promise((resolve, reject) => {
      const addresses: any[] = [];
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (row: any) => {
          addresses.push({
            street: row.street || row.Street || '',
            city: row.city || row.City || '',
            state: row.state || row.State || '',
            zipCode: row.zipCode || row.ZipCode || row.zip || row.Zip || '',
          });
        })
        .on('end', () => resolve(addresses))
        .on('error', (err: any) => reject(err));
    });
  }
}

async function updatePropertiesWithRealAddresses(addresses: any[]): Promise<void> {
  // Get existing properties - limit 100 for example
  const properties = await prisma.property.findMany({ take: 100 });

  for (let i = 0; i < properties.length; i++) {
    const property = properties[i];
    const address = addresses[i];

    if (!address) break; // no more addresses

    // Compose full address string for the DB (as per your schema)
    const fullAddress = `${address.street}, ${address.city}, ${address.state}, ${address.zipCode}`;

    // Update the property in DB with new address fields
    await prisma.property.update({
      where: { id: property.id },
      data: {
        address: fullAddress,
        city: address.city,
        state: address.state,
        zipCode: address.zipCode,
      },
    });

    console.log(`Updated property ${property.id} with address: ${fullAddress}`);
  }
}

const createProperties= async (): Promise<void> => {
 
  try {
     await importData();
    const addresses = await loadAddressesFromCSV('./list_of_real_usa_addresses.csv');
    console.log(`Loaded ${addresses.length} addresses`);

    await updatePropertiesWithRealAddresses(addresses);

    console.log('🍀 Properties updated successfully!');
  } catch (error) {
    console.error('Error:', error);
  } 
}

createProperties()
   .then(() => seedOwnersAndLinkToProperties())
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 
