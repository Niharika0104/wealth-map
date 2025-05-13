import { prisma } from './prisma.service';
import * as crypto from 'crypto';

export class SessionService {
  /**
   * Create a new session
   */
  async createSession(userId: string, expiresIn: number = 3600) {
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + expiresIn * 1000);

    return prisma.session.create({
      data: {
        user_id: userId,
        session_token: token,
        expires: expiresAt,
      },
    });
  }

  /**
   * Validate a session token
   */
  async validateSession(token: string) {
    const session = await prisma.session.findUnique({
      where: { session_token: token },
      include: { user: true },
    });

    if (!session) {
      return null;
    }

    // Check if session is expired
    if (new Date() > session.expires) {
      await this.deleteSession(token);
      return null;
    }

    return session;
  }

  /**
   * Delete a session by token
   */
  async deleteSession(token: string) {
    return prisma.session.delete({
      where: { session_token: token },
    });
  }

  /**
   * Delete all sessions for a user
   */
  async deleteUserSessions(userId: string) {
    return prisma.session.deleteMany({
      where: { user_id: userId },
    });
  }

  /**
   * Get all active sessions for a user
   */
  async getUserSessions(userId: string) {
    return prisma.session.findMany({
      where: {
        user_id: userId,
        expires: { gt: new Date() },
      },
    });
  }

  /**
   * Extend session expiry time
   */
  async extendSession(token: string, expiresIn: number = 3600) {
    const expiresAt = new Date(Date.now() + expiresIn * 1000);

    return prisma.session.update({
      where: { session_token: token },
      data: {
        expires: expiresAt,
        updated_at: new Date(),
      },
    });
  }
}
