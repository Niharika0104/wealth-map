import { Controller, Post, Body, UseGuards, Req, Get, Param, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { 
  RegisterDto, 
  LoginDto, 
  MfaVerifyDto, 
  ChangeRoleDto, 
  ChangePasswordDto,
  SetupMfaDto,
  VerifyMfaSetupDto
} from './dto/auth.dto';
import { SessionGuard } from './guards/session.guard';
import { Roles } from './guards/roles.decorator';
import { RolesGuard } from './guards/roles.guard';
import { Request } from 'express';

// Extend the User interface from passport
declare global {
  namespace Express {
    // Extend the User interface instead of redefining Request.user
    interface User {
      id: string;
      sessionToken: string;
      [key: string]: any;
    }
  }
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @HttpCode(200)
  login(@Body() loginDto: LoginDto, @Req() req: Request) {
    const ip = req.ip;
    const userAgent = req.headers['user-agent'];
    return this.authService.login(loginDto, ip, userAgent);
  }

  @Post('verify-mfa')
  @HttpCode(200)
  verifyMfa(@Body() body: MfaVerifyDto & { userId: string }, @Req() req: Request) {
    const ip = req.ip;
    const userAgent = req.headers['user-agent'];
    return this.authService.verifyMfaAndLogin(body.userId, body, ip, userAgent);
  }

  @Post('logout')
  @UseGuards(SessionGuard)
  @HttpCode(200)
  logout(@Req() req: Request) {
    const user = req.user as any;
    const sessionToken = user.sessionToken;
    const id = user.id;
    const ip = req.ip;
    const userAgent = req.headers['user-agent'];
    return this.authService.logout(sessionToken, id, ip, userAgent);
  }

  @Get('me')
  @UseGuards(SessionGuard)
  getProfile(@Req() req: Request) {
    return req.user;
  }

  @Post('change-role')
  @UseGuards(SessionGuard, RolesGuard)
  @Roles('SUPERADMIN')
  changeRole(@Body() changeRoleDto: ChangeRoleDto, @Req() req: Request) {
    if (!req.user) {
      throw new Error('User not authenticated');
    }
    return this.authService.changeUserRole(changeRoleDto, req.user.id);
  }

  @Get('pending-users')
  @UseGuards(SessionGuard, RolesGuard)
  @Roles('SUPERADMIN')
  getPendingUsers() {
    return this.authService.getPendingUsers();
  }

  @Post('setup-mfa')
  @UseGuards(SessionGuard)
  setupMfa(@Body() setupMfaDto: SetupMfaDto, @Req() req: Request) {
    if (!req.user) {
      throw new Error('User not authenticated');
    }
    return this.authService.setupMfa(req.user.id, setupMfaDto.method);
  }

  @Post('verify-mfa-setup')
  @UseGuards(SessionGuard)
  verifyMfaSetup(@Body() verifyMfaSetupDto: VerifyMfaSetupDto, @Req() req: Request) {
    if (!req.user) {
      throw new Error('User not authenticated');
    }
    return this.authService.finalizeMfaSetup(
      req.user.id, 
      'MFA_METHOD_TOTP', 
      verifyMfaSetupDto.secret, 
      verifyMfaSetupDto.code
    );
  }

  @Post('disable-mfa')
  @UseGuards(SessionGuard)
  disableMfa(@Req() req: Request) {
    if (!req.user) {
      throw new Error('User not authenticated');
    }
    return this.authService.disableMfa(req.user.id);
  }

  @Post('change-password')
  @UseGuards(SessionGuard)
  changePassword(@Body() changePasswordDto: ChangePasswordDto, @Req() req: Request) {
    if (!req.user) {
      throw new Error('User not authenticated');
    }
    return this.authService.changePassword(req.user.id, changePasswordDto);
  }
}
