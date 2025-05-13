import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { Request } from 'express';
import { SessionService } from 'shared-prisma';

@Injectable()
export class SessionStrategy extends PassportStrategy(Strategy, 'session') {
  constructor(private sessionService: SessionService) {
    super();
  }

  async validate(request: Request): Promise<any> {
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('Session token not found');
    }

    const session = await this.sessionService.validateSession(token);
    if (!session) {
      throw new UnauthorizedException('Invalid or expired session');
    }

    // Extend session expiry time
    await this.sessionService.extendSession(token);

    return { 
      id: session.user.id, 
      email: session.user.email,
      name: session.user.name,
      role: session.user.role,
      sessionToken: token,
    };
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    // Try to get token from Authorization header
    const authHeader = request.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      return authHeader.substring(7);
    }
    
    // Try to get token from cookie
    if (request.cookies && request.cookies.session_token) {
      return request.cookies.session_token;
    }
    
    // Try to get token from query parameter
    if (request.query && request.query.token) {
      return request.query.token as string;
    }
    
    return undefined;
  }
}
