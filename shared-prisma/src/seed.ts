import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // ─── Constants: Roles ───────────────────────────────
  const roleCategory = await prisma.constants.create({
    data: {
      const_name: 'Roles',
      code: 'ROLES',
      description: 'Roles available in the system',
    },
  });

  const roles = ['SuperAdmin', 'Admin', 'Employee'];
  for (const role of roles) {
    await prisma.constants.create({
      data: {
        const_name: role,
        code: 'ROLES',
        description: `Role: ${role}`,
      },
    });
  }

  // ─── Constants: User Actions ─────────────────────────
  const userActions = ['user_login', 'user_logout', 'report_generate', 'file_export'];
  for (const action of userActions) {
    await prisma.constants.create({
      data: {
        const_name: action,
        code: 'USER_ACTION',
        description: `User action: ${action}`,
      },
    });
  }

  // ─── Constants: Asset Types ──────────────────────────
  const assetTypes = [
    { name: 'Real Estate', code: 'ASSET_TYPE' },
    { name: 'Equity Ownership', code: 'ASSET_TYPE' },
    { name: 'Royalties / IP', code: 'ASSET_TYPE' },
    { name: 'Business Ownership', code: 'ASSET_TYPE' },
    { name: 'Gold', code: 'COMMODITY' },
    { name: 'Silver', code: 'COMMODITY' },
  ];

  for (const asset of assetTypes) {
    await prisma.constants.create({
      data: {
        const_name: asset.name,
        code: asset.code,
        description: `Asset type: ${asset.name}`,
      },
    });
  }

  // ─── Companies ───────────────────────────────────────
  const company1 = await prisma.companies.create({
    data: {
      company_id: 'company-1',
      company_name: 'TechCorp Inc.',
      region: 'North America',
    },
  });

  const company2 = await prisma.companies.create({
    data: {
      company_id: 'company-2',
      company_name: 'FinSolve Ltd.',
      region: 'Europe',
    },
  });

  // ─── Users ───────────────────────────────────────────
  const users = await Promise.all([
    prisma.users.create({
      data: {
        user_id: 'user-1',
        name: 'Alice Johnson',
        phone_number: '1234567890',
        region: 'North America',
        role: 'SuperAdmin',
        email: 'alice@techcorp.com',
        password: 'hashed_pass_1',
        mfa_enabled: true,
      },
    }),
    prisma.users.create({
      data: {
        user_id: 'user-2',
        name: 'Bob Smith',
        phone_number: '9876543210',
        region: 'North America',
        role: 'Admin',
        email: 'bob@techcorp.com',
        password: 'hashed_pass_2',
        mfa_enabled: false,
      },
    }),
    prisma.users.create({
      data: {
        user_id: 'user-3',
        name: 'Charlie Lee',
        phone_number: '5551234567',
        region: 'North America',
        role: 'Employee',
        email: 'charlie@techcorp.com',
        password: 'hashed_pass_3',
        mfa_enabled: true,
      },
    }),
    prisma.users.create({
      data: {
        user_id: 'user-4',
        name: 'Diana Prince',
        phone_number: '4445556666',
        region: 'Europe',
        role: 'Admin',
        email: 'diana@finsolve.com',
        password: 'hashed_pass_4',
        mfa_enabled: true,
      },
    }),
    prisma.users.create({
      data: {
        user_id: 'user-5',
        name: 'Ethan Hunt',
        phone_number: '3332221111',
        region: 'Europe',
        role: 'Employee',
        email: 'ethan@finsolve.com',
        password: 'hashed_pass_5',
        mfa_enabled: false,
      },
    }),
  ]);

  // ─── Employees ───────────────────────────────────────
  await prisma.employees.createMany({
    data: [
      { user_id: 'user-1', company_id: 'company-1' },
      { user_id: 'user-2', company_id: 'company-1' },
      { user_id: 'user-3', company_id: 'company-1' },
      { user_id: 'user-4', company_id: 'company-2' },
      { user_id: 'user-5', company_id: 'company-2' },
    ],
  });
    // ─── Assets lands ──────────────────────────────────────────
    const assetSeeds = [
  { name: 'Sunnyvale Plot', type: 'Real Estate', isProperty: true,   quantity: 2.5,unit_of_measurement: 'acres', region: 'Texas' },
  { name: 'Green Acres', type: 'Real Estate', isProperty: true,   quantity: 2.5, unit_of_measurement: 'acres',region: 'Texas' },
  { name: 'Skyrise Tower', type: 'Real Estate', isProperty: true,unit_of_measurement: 'acres',quantity: 10,region: 'Texas' },
  { name: 'Beachfront Land', type: 'Real Estate', isProperty: true, unit_of_measurement: 'acres',quantity: 10,region: 'Texas' },
  { name: 'Farmhouse Estate', type: 'Real Estate', isProperty: true, region: 'Texas' },

  { name: 'Golden Shares', type: 'Equity Ownership', isProperty: false, unit_of_measurement: 'acres',region: 'Dallas' },
  { name: 'Tech IP Rights', type: 'Royalties / IP', isProperty: false,unit_of_measurement: 'acres', region: 'Dallas' },
  { name: 'Startup Equity', type: 'Equity Ownership', isProperty: false, region: 'Dallas' },
  { name: 'Retail Franchise', type: 'Business Ownership', isProperty: false, region: 'Dallas' },
  { name: 'Innovation Hub', type: 'Real Estate', isProperty: true, region: 'Dallas' },

  { name: 'Industrial Land', type: 'Real Estate', isProperty: true, region: 'Virginia' },
  { name: 'Vineyard Property', type: 'Real Estate', isProperty: true, region: 'Virginia' },

  { name: 'Gold Bullion', type: 'Gold', isProperty: false, region: 'California' },
  { name: 'Silver Vault', type: 'Silver', isProperty: false, region: 'Florida' },
  { name: 'Mining Field', type: 'Real Estate', isProperty: true, region: 'Nevada' },
  { name: 'Fashion License', type: 'Royalties / IP', isProperty: false, region: 'New York' },
  { name: 'AI Equity Holding', type: 'Equity Ownership', isProperty: false, region: 'Washington' },
  { name: 'Content IP', type: 'Royalties / IP', isProperty: false, region: 'Colorado' },
  { name: 'Jewelry Stock', type: 'Gold', isProperty: false, region: 'Oregon' },
  { name: 'Luxury Silverware', type: 'Silver', isProperty: false, region: 'Illinois' },
];


}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log('🌱 Seed data inserted successfully');
  })
  .catch(async (e) => {
    console.error('❌ Error inserting seed data:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
