import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { auth } from "@/lib/auth";
import { Resend } from 'resend';
import { generateSecret, totp } from 'speakeasy';
import QRCode from 'qrcode';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

// Enable 2FA
export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const secret = generateSecret();
    const otpauth = secret.otpauth_url;

    // Generate QR code
    const qrCode = await QRCode.toDataURL(otpauth || '');

    // Store secret temporarily
    await prisma.twoFactor.create({
      data: {
        id: crypto.randomUUID(),
        secret: secret.base32,
        backupCodes: JSON.stringify(generateBackupCodes()),
        userId: session.user.id,
      },
    });

    return NextResponse.json({ qrCode, secret: secret.base32 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to setup 2FA" }, { status: 500 });
  }
}

// Verify 2FA
export async function PUT(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { token } = await req.json();
    const twoFactor = await prisma.twoFactor.findFirst({
      where: { userId: session.user.id },
    });

    if (!twoFactor) {
      return NextResponse.json({ error: "2FA not setup" }, { status: 400 });
    }

    const verified = totp.verify({
      secret: twoFactor.secret,
      encoding: 'base32',
      token,
    });

    if (!verified) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    // Enable 2FA for user
    await prisma.user.update({
      where: { id: session.user.id },
      data: { twoFactorEnabled: true },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to verify 2FA" }, { status: 500 });
  }
}

// Verify 2FA during login
export async function PATCH(req: Request) {
  try {
    const { userId, token } = await req.json();
    const twoFactor = await prisma.twoFactor.findFirst({
      where: { userId },
    });

    if (!twoFactor) {
      return NextResponse.json({ error: "2FA not setup" }, { status: 400 });
    }

    const verified = totp.verify({
      secret: twoFactor.secret,
      encoding: 'base32',
      token,
    });

    if (!verified) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to verify 2FA" }, { status: 500 });
  }
}

function generateBackupCodes() {
  const codes = [];
  for (let i = 0; i < 8; i++) {
    codes.push(crypto.randomUUID().slice(0, 8));
  }
  return codes;
}
