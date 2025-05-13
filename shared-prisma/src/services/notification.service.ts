import { prisma } from './prisma.service';
import { UserService } from './user.service';

export class NotificationService {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  /**
   * Create user registration notification
   * This will notify super admins about new user registrations
   */
  async createUserRegistrationNotification(newUserId: string) {
    // Get super admins to notify
    const superAdmins = await this.userService.getSuperAdminUsers();
    
    // Get new user details
    const newUser = await this.userService.findById(newUserId);
    
    if (!newUser) {
      throw new Error('User not found');
    }

    // Create a log entry for registration
    await prisma.logging.create({
      data: {
        user_id: newUserId,
        action_type: 'LOG_ACTION_REGISTER',
        details: `New user registered: ${newUser.name} (${newUser.email})`,
        ip_address: null,
        user_agent: null,
      },
    });

    // Here you would implement the actual notification logic
    // This could be emails, in-app notifications, etc.
    console.log(`Notify super admins about new user: ${newUser.email}`);
    return {
      message: 'Notification sent to super admins',
      notifiedUsers: superAdmins.map(admin => admin.id),
    };
  }

  /**
   * Create approval notification
   * Notifies a user that their account was approved
   */
  async createApprovalNotification(userId: string, approvedBy: string) {
    // Get user details
    const user = await this.userService.findById(userId);
    
    if (!user) {
      throw new Error('User not found');
    }

    // Create a log entry for approval
    await prisma.logging.create({
      data: {
        user_id: userId,
        action_type: 'LOG_ACTION_APPROVAL',
        details: `User approved by admin (${approvedBy})`,
        ip_address: null,
        user_agent: null,
      },
    });

    // Here you would implement the actual notification logic
    // This could be emails, in-app notifications, etc.
    console.log(`Notify user ${user.email} that their account was approved`);
    return {
      message: 'Approval notification sent to user',
      userId: userId,
    };
  }

  /**
   * Create role change notification
   */
  async createRoleChangeNotification(userId: string, oldRole: string, newRole: string, changedBy: string) {
    // Get user details
    const user = await this.userService.findById(userId);
    
    if (!user) {
      throw new Error('User not found');
    }

    // Create a log entry for role change
    await prisma.logging.create({
      data: {
        user_id: userId,
        action_type: 'LOG_ACTION_ROLE_CHANGE',
        details: `User role changed from ${oldRole} to ${newRole} by ${changedBy}`,
        ip_address: null,
        user_agent: null,
      },
    });

    // Here you would implement the actual notification logic
    console.log(`Notify user ${user.email} about role change from ${oldRole} to ${newRole}`);
    return {
      message: 'Role change notification sent to user',
      userId: userId,
    };
  }

  /**
   * Log user login
   */
  async logUserLogin(userId: string, ipAddress?: string, userAgent?: string) {
    return prisma.logging.create({
      data: {
        user_id: userId,
        action_type: 'LOG_ACTION_LOGIN',
        details: 'User login',
        ip_address: ipAddress,
        user_agent: userAgent,
      },
    });
  }

  /**
   * Log user logout
   */
  async logUserLogout(userId: string, ipAddress?: string, userAgent?: string) {
    return prisma.logging.create({
      data: {
        user_id: userId,
        action_type: 'LOG_ACTION_LOGOUT',
        details: 'User logout',
        ip_address: ipAddress,
        user_agent: userAgent,
      },
    });
  }
}
