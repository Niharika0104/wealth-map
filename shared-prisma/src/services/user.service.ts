import { prisma } from './prisma.service';
import * as bcrypt from 'bcrypt';

export class UserService {
  /**
   * Create a new user
   */
  async createUser(userData: {
    name: string;
    email: string;
    password: string;
    region: string;
    role: string;
    phone_number?: string;
    image?: string;
  }) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    return prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
    });
  }

  /**
   * Find a user by email
   */
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  /**
   * Find a user by ID
   */
  async findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  /**
   * Update user role
   */
  async updateUserRole(userId: string, role: string, modifiedBy: string) {
    return prisma.user.update({
      where: { id: userId },
      data: {
        role,
        modified_by: modifiedBy,
        modified_date: new Date(),
      },
    });
  }

  /**
   * Enable MFA for a user
   */
  async enableMFA(userId: string, method: string, secret?: string) {
    return prisma.user.update({
      where: { id: userId },
      data: {
        mfa_enabled: true,
        mfa_method: method,
        mfa_secret: secret,
        modified_date: new Date(),
      },
    });
  }

  /**
   * Disable MFA for a user
   */
  async disableMFA(userId: string) {
    return prisma.user.update({
      where: { id: userId },
      data: {
        mfa_enabled: false,
        mfa_method: null,
        mfa_secret: null,
        modified_date: new Date(),
      },
    });
  }

  /**
   * Update user's last login timestamp
   */
  async updateLastLogin(userId: string) {
    return prisma.user.update({
      where: { id: userId },
      data: {
        last_login: new Date(),
      },
    });
  }

  /**
   * Set user's email as verified
   */
  async verifyEmail(userId: string) {
    return prisma.user.update({
      where: { id: userId },
      data: {
        email_verified: new Date(),
      },
    });
  }

  /**
   * Get all users with the "PENDING" role
   */
  async getPendingUsers() {
    return prisma.user.findMany({
      where: {
        role: 'USER_ROLE_PENDING',
      },
    });
  }

  /**
   * Get all admin users (for notifications)
   */
  async getSuperAdminUsers() {
    return prisma.user.findMany({
      where: {
        role: 'USER_ROLE_SUPERADMIN',
      },
    });
  }

  /**
   * Update user password
   */
  async updatePassword(userId: string, newPassword: string) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    return prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
        modified_date: new Date(),
      },
    });
  }

  /**
   * Check if password is valid
   */
  async validatePassword(plainPassword: string, hashedPassword: string) {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
