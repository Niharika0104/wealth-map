import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { SessionStrategy } from './strategies/session.strategy';
import { 
  UserService, 
  SessionService, 
  MfaService, 
  NotificationService, 
  PrismaService 
} from 'shared-prisma';

@Module({
  imports: [
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET') || 'super-secret', // Should use env var in production
        signOptions: { expiresIn: '1h' }, // 1 hour expiry
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    SessionStrategy,
    UserService,
    SessionService,
    MfaService,
    NotificationService,
    PrismaService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
