import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'shared-prisma';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET') || 'super-secret', // Should use env var in production
    });
  }

  async validate(payload: { sub: string; email: string }) {
    const user = await this.userService.findById(payload.sub);
    
    if (!user) {
      return null;
    }
    
    return { 
      id: user.id, 
      email: user.email,
      name: user.name,
      role: user.role
    };
  }
}
