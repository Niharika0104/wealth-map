import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create role constants
  const roles = [
    {
      const_name: 'USER_ROLE_SUPERADMIN',
      code: 'SUPERADMIN',
      category: 'USER_ROLE',
      description: 'Super administrator with full system access',
    },
    {
      const_name: 'USER_ROLE_ADMIN',
      code: 'ADMIN',
      category: 'USER_ROLE',
      description: 'Administrator with management permissions',
    },
    {
      const_name: 'USER_ROLE_USER',
      code: 'USER',
      category: 'USER_ROLE',
      description: 'Regular user with limited permissions',
    },
    {
      const_name: 'USER_ROLE_EMPLOYEE',
      code: 'EMPLOYEE',
      category: 'USER_ROLE',
      description: 'Employee user assigned to a company',
    },
    {
      const_name: 'USER_ROLE_PENDING',
      code: 'PENDING',
      category: 'USER_ROLE',
      description: 'Pending user waiting for approval',
    },
  ];

  // Create log action constants
  const logActions = [
    {
      const_name: 'LOG_ACTION_LOGIN',
      code: 'LOGIN',
      category: 'LOG_ACTION',
      description: 'User login activity',
    },
    {
      const_name: 'LOG_ACTION_LOGOUT',
      code: 'LOGOUT',
      category: 'LOG_ACTION',
      description: 'User logout activity',
    },
    {
      const_name: 'LOG_ACTION_REGISTER',
      code: 'REGISTER',
      category: 'LOG_ACTION',
      description: 'User registration',
    },
    {
      const_name: 'LOG_ACTION_UPDATE_PROFILE',
      code: 'UPDATE_PROFILE',
      category: 'LOG_ACTION',
      description: 'User profile update',
    },
    {
      const_name: 'LOG_ACTION_CHANGE_PASSWORD',
      code: 'CHANGE_PASSWORD',
      category: 'LOG_ACTION',
      description: 'User password change',
    },
    {
      const_name: 'LOG_ACTION_ROLE_CHANGE',
      code: 'ROLE_CHANGE',
      category: 'LOG_ACTION',
      description: 'User role change',
    },
    {
      const_name: 'LOG_ACTION_MFA_SETUP',
      code: 'MFA_SETUP',
      category: 'LOG_ACTION',
      description: 'MFA setup or update',
    },
    {
      const_name: 'LOG_ACTION_APPROVAL',
      code: 'APPROVAL',
      category: 'LOG_ACTION',
      description: 'User approval by admin',
    },
  ];

  // Create notification types
  const notificationTypes = [
    {
      const_name: 'NOTIFICATION_USER_REGISTRATION',
      code: 'USER_REGISTRATION',
      category: 'NOTIFICATION',
      description: 'New user registration notification',
    },
    {
      const_name: 'NOTIFICATION_ROLE_CHANGE',
      code: 'ROLE_CHANGE',
      category: 'NOTIFICATION',
      description: 'User role change notification',
    },
    {
      const_name: 'NOTIFICATION_ACCOUNT_APPROVAL',
      code: 'ACCOUNT_APPROVAL',
      category: 'NOTIFICATION',
      description: 'Account approval notification',
    },
  ];

  // Create MFA method constants
  const mfaMethods = [
    {
      const_name: 'MFA_METHOD_TOTP',
      code: 'TOTP',
      category: 'MFA_METHOD',
      description: 'Time-based One-Time Password',
    },
    {
      const_name: 'MFA_METHOD_SMS',
      code: 'SMS',
      category: 'MFA_METHOD',
      description: 'SMS-based verification',
    },
    {
      const_name: 'MFA_METHOD_EMAIL',
      code: 'EMAIL',
      category: 'MFA_METHOD',
      description: 'Email-based verification',
    },
    {
      const_name: 'MFA_METHOD_WEBAUTHN',
      code: 'WEBAUTHN',
      category: 'MFA_METHOD',
      description: 'WebAuthn/FIDO2 security key',
    },
  ];

  // Combine all constants
  const allConstants = [...roles, ...logActions, ...notificationTypes, ...mfaMethods];

  // Insert all constants
  for (const constant of allConstants) {
    await prisma.constants.upsert({
      where: { const_name: constant.const_name },
      update: constant,
      create: constant,
    });
  }

  // Create a default super admin user
  const superAdminExists = await prisma.user.findFirst({
    where: { role: { code: 'SUPERADMIN' } },
  });

  if (!superAdminExists) {
    await prisma.user.create({
      data: {
        name: 'Super Admin',
        email: 'superadmin@example.com',
        password: '$2b$10$GmMyA9CudFBvHhcXK.5uPuYG5z2EFJyK9ElPwUaE/AQ5qTXl.JeYm', // bcrypt hash for 'Admin@123'
        region: 'Global',
        role: 'USER_ROLE_SUPERADMIN',
        email_verified: new Date(),
      },
    });
  }

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
