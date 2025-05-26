/**
 * This script fixes permission issues in the database
 * It ensures that:
 * 1. All users have at least one role
 * 2. All roles have appropriate permissions
 * 3. Members have correct role assignments
 */
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting permission repair...');
  
  // 1. Ensure all roles have correct permissions
  console.log('Checking role permissions...');
  
  // Get all roles
  const roles = await prisma.role.findMany({
    include: {
      permissions: true
    }
  });
  
  // Expected permissions by role
  const expectedPermissions = {
    'SUPER_ADMIN': [
      'system:*',
      'companies:*',
      'users:*',
      'property:*',
      'reports:*'
    ],
    'COMPANY_ADMIN': [
      'company:manage',
      'employees:*',
      'permissions:assign',
      'property:*',
      'reports:*',
      'property:view',
      'property:search',
      'reports:view'
    ],
    'EMPLOYEE': [
      'property:view',
      'property:search',
      'reports:view'
    ]
  };
  
  // Fix role permissions
  for (const role of roles) {
    const roleName = role.name as keyof typeof expectedPermissions;
    
    if (!expectedPermissions[roleName]) {
      console.log(`Unknown role: ${roleName}, skipping...`);
      continue;
    }
    
    const missingPermissions = expectedPermissions[roleName].filter(
      perm => !role.permissions.some(p => p.name === perm)
    );
    
    if (missingPermissions.length > 0) {
      console.log(`Role ${roleName} is missing permissions: ${missingPermissions.join(', ')}`);
      console.log('Fixing...');
      
      // Connect missing permissions
      await prisma.role.update({
        where: { id: role.id },
        data: {
          permissions: {
            connect: missingPermissions.map(name => ({ name }))
          }
        }
      });
      
      console.log(`Fixed permissions for role: ${roleName}`);
    } else {
      console.log(`Role ${roleName} has all required permissions`);
    }
  }
  
  // 2. Ensure all users have at least one role
  console.log('\nChecking user roles...');
  
  const usersWithoutRoles = await prisma.user.findMany({
    where: {
      roles: {
        none: {}
      }
    }
  });
  
  if (usersWithoutRoles.length > 0) {
    console.log(`Found ${usersWithoutRoles.length} users without any roles`);
    
    // Get the EMPLOYEE role
    const employeeRole = await prisma.role.findUnique({
      where: { name: 'EMPLOYEE' }
    });
    
    if (!employeeRole) {
      throw new Error('EMPLOYEE role not found');
    }
    
    // Assign EMPLOYEE role to all users without roles
    for (const user of usersWithoutRoles) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          roles: {
            connect: { id: employeeRole.id }
          },
          currentRole: 'EMPLOYEE'
        }
      });
      console.log(`Assigned EMPLOYEE role to user: ${user.email}`);
    }
  } else {
    console.log('All users have at least one role');
  }
  
  // 3. Ensure all members have correct roles
  console.log('\nChecking member roles...');
  
  const members = await prisma.member.findMany();
  
  for (const member of members) {
    const user = await prisma.user.findUnique({
      where: { id: member.userId },
      include: { roles: true }
    });
    
    if (!user) {
      console.log(`User not found for member: ${member.id}, skipping...`);
      continue;
    }
    
    // Check if member's role matches a role the user has
    const memberRole = member.role as string;
    const userHasRole = user.roles.some(role => role.name === memberRole);
    
    if (!userHasRole) {
      console.log(`Member ${member.id} has role ${memberRole} but user doesn't have this role`);
      console.log('Fixing...');
      
      // Get the role
      const role = await prisma.role.findUnique({
        where: { name: memberRole }
      });
      
      if (!role) {
        console.log(`Role ${memberRole} not found, skipping...`);
        continue;
      }
      
      // Connect role to user
      await prisma.user.update({
        where: { id: user.id },
        data: {
          roles: {
            connect: { id: role.id }
          }
        }
      });
      
      console.log(`Added role ${memberRole} to user ${user.email}`);
    }
  }
  
  console.log('\nPermission repair completed successfully!');
}

main()
  .catch(e => {
    console.error('Error fixing permissions:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
