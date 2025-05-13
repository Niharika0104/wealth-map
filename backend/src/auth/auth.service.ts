import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService, SessionService, MfaService, NotificationService } from 'shared-prisma';
import { RegisterDto, LoginDto, MfaVerifyDto, ChangeRoleDto, ChangePasswordDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
    private readonly mfaService: MfaService,
    private readonly notificationService: NotificationService,
  ) {}

  /**
   * Register a new user
   */
  async register(registerDto: RegisterDto) {
    // Check if user with email already exists
    const existingUser = await this.userService.findByEmail(registerDto.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // Create new user with 'PENDING' role
    const user = await this.userService.createUser({
      ...registerDto,
      role: 'USER_ROLE_PENDING', // Users start with PENDING role until approved
    });

    // Notify super admins about new registration
    await this.notificationService.createUserRegistrationNotification(user.id);

    return {
      message: 'Registration successful. Your account is pending approval.',
      userId: user.id,
    };
  }

  /**
   * Login user
   */
  async login(loginDto: LoginDto, ip?: string, userAgent?: string) {
    // Find user by email
    const user = await this.userService.findByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await this.userService.validatePassword(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check if user is approved
    if (user.role === 'USER_ROLE_PENDING') {
      throw new UnauthorizedException('Your account is pending approval');
    }

    // Check if MFA is enabled
    if (user.mfa_enabled) {
      return {
        message: 'MFA verification required',
        userId: user.id,
        mfaRequired: true,
        mfaMethod: user.mfa_method,
      };
    }

    // Create session (1 hour expiry)
    const session = await this.sessionService.createSession(user.id, 3600);

    // Update last login timestamp
    await this.userService.updateLastLogin(user.id);

    // Log login activity
    await this.notificationService.logUserLogin(user.id, ip, userAgent);

    return {
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: session.session_token,
      expiresAt: session.expires,
    };
  }

  /**
   * Verify MFA during login
   */
  async verifyMfaAndLogin(userId: string, mfaDto: MfaVerifyDto, ip?: string, userAgent?: string) {
    const user = await this.userService.findById(userId);
    if (!user || !user.mfa_enabled) {
      throw new UnauthorizedException('Invalid user or MFA not enabled');
    }

    let isVerified = false;

    // Verify based on MFA method
    switch (user.mfa_method) {
      case 'MFA_METHOD_TOTP':
        if (!user.mfa_secret) {
          throw new BadRequestException('MFA secret not set');
        }
        isVerified = this.mfaService.verifyTotpToken(mfaDto.code, user.mfa_secret);
        break;
      case 'MFA_METHOD_EMAIL':
      case 'MFA_METHOD_SMS':
        // Verify one-time code
        isVerified = await this.mfaService.verifyOneTimeCode(userId, mfaDto.code, user.mfa_method);
        break;
      default:
        throw new BadRequestException('Unsupported MFA method');
    }

    if (!isVerified) {
      throw new UnauthorizedException('Invalid MFA code');
    }

    // Create session (1 hour expiry)
    const session = await this.sessionService.createSession(user.id, 3600);

    // Update last login timestamp
    await this.userService.updateLastLogin(user.id);

    // Log login activity
    await this.notificationService.logUserLogin(user.id, ip, userAgent);

    return {
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: session.session_token,
      expiresAt: session.expires,
    };
  }

  /**
   * Logout user
   */
  async logout(token: string, userId: string, ip?: string, userAgent?: string) {
    // Delete session
    await this.sessionService.deleteSession(token);

    // Log logout activity
    await this.notificationService.logUserLogout(userId, ip, userAgent);

    return { message: 'Logout successful' };
  }

  /**
   * Change user role (Super Admin only)
   */
  async changeUserRole(changeRoleDto: ChangeRoleDto, adminId: string) {
    const user = await this.userService.findById(changeRoleDto.userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const oldRole = user.role;
    await this.userService.updateUserRole(
      changeRoleDto.userId,
      changeRoleDto.role,
      adminId,
    );

    // Create notification for role change
    await this.notificationService.createRoleChangeNotification(
      changeRoleDto.userId,
      oldRole,
      changeRoleDto.role,
      adminId,
    );

    // If changing from PENDING to another role, send approval notification
    if (oldRole === 'USER_ROLE_PENDING') {
      await this.notificationService.createApprovalNotification(
        changeRoleDto.userId,
        adminId,
      );
    }

    return { message: 'User role updated successfully' };
  }

  /**
   * Get pending users (Admin only)
   */
  async getPendingUsers() {
    return this.userService.getPendingUsers();
  }

  /**
   * Setup MFA for a user
   */
  async setupMfa(userId: string, method: string) {
    const user = await this.userService.findById(userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    let secret;
    let otcInfo;
    let qrCodeUrl;

    switch (method) {
      case 'MFA_METHOD_TOTP':
        // Generate TOTP secret
        secret = this.mfaService.generateTotpSecret();
        qrCodeUrl = await this.mfaService.generateQrCode(user.email, secret);
        return {
          message: 'TOTP setup initiated',
          secret,
          qrCodeUrl,
        };

      case 'MFA_METHOD_EMAIL':
        // Create a one-time code and send to email
        otcInfo = await this.mfaService.createOneTimeCode(userId, 'MFA_METHOD_EMAIL');
        // TODO: Send the code via email
        return { message: 'Email verification code sent' };

      case 'MFA_METHOD_SMS':
        // Create a one-time code and send to phone
        otcInfo = await this.mfaService.createOneTimeCode(userId, 'MFA_METHOD_SMS');
        // TODO: Send the code via SMS
        return { message: 'SMS verification code sent' };

      default:
        throw new BadRequestException('Unsupported MFA method');
    }
  }

  /**
   * Finalize MFA setup after verification
   */
  async finalizeMfaSetup(userId: string, method: string, secret?: string, code?: string) {
    const user = await this.userService.findById(userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    let isVerified = false;

    switch (method) {
      case 'MFA_METHOD_TOTP':
        if (!secret || !code) {
          throw new BadRequestException('Secret and code are required');
        }
        // Verify the provided TOTP code
        isVerified = this.mfaService.verifyTotpToken(code, secret);
        break;

      case 'MFA_METHOD_EMAIL':
      case 'MFA_METHOD_SMS':
        if (!code) {
          throw new BadRequestException('Code is required');
        }
        // Verify the OTC
        isVerified = await this.mfaService.verifyOneTimeCode(userId, code, method);
        break;

      default:
        throw new BadRequestException('Unsupported MFA method');
    }

    if (!isVerified) {
      throw new UnauthorizedException('Invalid verification code');
    }

    // Enable MFA for the user
    await this.userService.enableMFA(userId, method, method === 'MFA_METHOD_TOTP' ? secret : undefined);

    return { message: 'MFA setup completed successfully' };
  }

  /**
   * Disable MFA for a user
   */
  async disableMfa(userId: string) {
    await this.userService.disableMFA(userId);
    return { message: 'MFA disabled successfully' };
  }

  /**
   * Change user password
   */
  async changePassword(userId: string, changePasswordDto: ChangePasswordDto) {
    const user = await this.userService.findById(userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    // Verify current password
    const isPasswordValid = await this.userService.validatePassword(
      changePasswordDto.currentPassword,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    // Update password
    await this.userService.updatePassword(userId, changePasswordDto.newPassword);

    // Invalidate all existing sessions
    await this.sessionService.deleteUserSessions(userId);

    return { message: 'Password changed successfully' };
  }
}
