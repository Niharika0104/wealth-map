import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function assignRoles() {
  try {
    // Get the user
    const user = await prisma.user.findUnique({
      where: { id: 'ffeb3f65-3668-4aa5-ba54-36d6db20663d' },
      include: { roles: true }
    });

    if (!user) {
      console.error('User not found');
      return;
    }

    console.log('Current user roles:', user.roles.map(r => r.name));

    // Get the roles
    const superAdminRole = await prisma.role.findUnique({
      where: { name: 'super_admin' }
    });

    const companyAdminRole = await prisma.role.findUnique({
      where: { name: 'company_admin' }
    });

    if (!superAdminRole || !companyAdminRole) {
      console.error('Roles not found');
      return;
    }

    // Update user with both roles
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        roles: {
          connect: [
            { id: superAdminRole.id },
            { id: companyAdminRole.id }
          ]
        }
      },
      include: { roles: true }
    });

    console.log('Updated user roles:', updatedUser.roles.map(r => r.name));
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

assignRoles(); 