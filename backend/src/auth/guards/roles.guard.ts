import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    
    if (!requiredRoles) {
      return true;
    }
    
    const { user } = context.switchToHttp().getRequest();
    
    // User must be authenticated
    if (!user) {
      return false;
    }
    
    // Get role code from the full role name (e.g., USER_ROLE_ADMIN -> ADMIN)
    const roleCode = user.role.split('_').pop();
    
    return requiredRoles.some(role => roleCode === role);
  }
}
