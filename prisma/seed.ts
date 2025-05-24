import { PrismaClient } from '../src/generated/prisma';
import { faker } from "@faker-js/faker";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

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
    
    // Property permissions
    { name: 'property:*', category: 'property', description: 'Full property management' },
    { name: 'property:view', category: 'property', description: 'View properties' },
    { name: 'property:search', category: 'property', description: 'Search properties' },
    
    // Report permissions
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
      description: 'Super Administrator with full system access',
      isSystem: true,
      permissions: ['system:*', 'companies:*', 'users:*', 'property:*', 'reports:*'],
    },
    {
      name: 'COMPANY_ADMIN',
      description: 'Company Administrator with company-level access',
      isSystem: true,
      permissions: [
        'company:manage',
        'employees:*',
        'permissions:assign',
        'property:*',
        'reports:*',
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
      ownerType: isCorporate ? "corporate" : "individual",
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

main()
  .then(() => seedOwnersAndLinkToProperties())
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 