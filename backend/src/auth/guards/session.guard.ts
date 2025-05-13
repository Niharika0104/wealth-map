import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class SessionGuard extends AuthGuard('session') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
