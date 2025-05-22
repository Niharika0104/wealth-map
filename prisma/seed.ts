import { PrismaClient } from '@prisma/client';

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

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 