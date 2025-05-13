import { prisma } from './prisma.service';
import * as crypto from 'crypto';
import { authenticator } from 'otplib';
import * as qrcode from 'qrcode';

export class MfaService {
  /**
   * Generate a TOTP secret
   */
  generateTotpSecret() {
    return authenticator.generateSecret();
  }

  /**
   * Generate a QR code for TOTP
   */
  async generateQrCode(email: string, secret: string, appName: string = 'Wealth App') {
    const otpauth = authenticator.keyuri(email, appName, secret);
    return qrcode.toDataURL(otpauth);
  }

  /**
   * Verify TOTP token
   */
  verifyTotpToken(token: string, secret: string) {
    return authenticator.verify({ token, secret });
  }

  /**
   * Create a one-time code for verification
   */
  async createOneTimeCode(userId: string, type: string, expiresIn: number = 600) {
    const code = crypto.randomInt(100000, 999999).toString();
    const expiresAt = new Date(Date.now() + expiresIn * 1000);

    return prisma.oneTimeCode.create({
      data: {
        user_id: userId,
        code,
        type,
        expires: expiresAt,
      },
    });
  }

  /**
   * Verify one-time code
   */
  async verifyOneTimeCode(userId: string, code: string, type: string) {
    const otc = await prisma.oneTimeCode.findFirst({
      where: {
        user_id: userId,
        code,
        type,
        used: false,
        expires: { gt: new Date() },
      },
    });

    if (!otc) {
      return false;
    }

    // Mark as used
    await prisma.oneTimeCode.update({
      where: { id: otc.id },
      data: { used: true },
    });

    return true;
  }

  /**
   * Register a WebAuthn credential
   */
  async registerWebAuthnDevice(
    userId: string,
    data: {
      credential_id: string;
      public_key: string;
      counter: number;
      device_type: string;
      backed_up: boolean;
      transports?: string;
      friendly_name?: string;
    }
  ) {
    return prisma.webAuthnDevice.create({
      data: {
        user_id: userId,
        ...data,
      },
    });
  }

  /**
   * Get WebAuthn devices for a user
   */
  async getUserWebAuthnDevices(userId: string) {
    return prisma.webAuthnDevice.findMany({
      where: { user_id: userId },
    });
  }

  /**
   * Get a WebAuthn device by credential ID
   */
  async getWebAuthnDeviceByCredentialId(credentialId: string) {
    return prisma.webAuthnDevice.findUnique({
      where: { credential_id: credentialId },
    });
  }

  /**
   * Update WebAuthn device counter
   */
  async updateWebAuthnCounter(credentialId: string, newCounter: number) {
    return prisma.webAuthnDevice.update({
      where: { credential_id: credentialId },
      data: {
        counter: newCounter,
        last_used: new Date(),
      },
    });
  }

  /**
   * Delete a WebAuthn device
   */
  async deleteWebAuthnDevice(credentialId: string) {
    return prisma.webAuthnDevice.delete({
      where: { credential_id: credentialId },
    });
  }
}
