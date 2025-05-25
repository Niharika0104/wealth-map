import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const session = await auth();
    console.log("[CHATS_GET] Session:", session);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
      const chats = await prisma.chat.findMany({
        where: {
          userId: session.user.id,
        },
        include: {
          messages: {
            orderBy: {
              createdAt: "asc",
            },
          },
        },
        orderBy: {
          updatedAt: "desc",
        },
      });
      console.log("[CHATS_GET] Found chats:", chats);
      return NextResponse.json({ chats });
    } catch (dbError: any) {
      console.error("[CHATS_GET] Database error:", dbError);
      return NextResponse.json({ error: "Database error", details: dbError?.message || "Unknown database error" }, { status: 500 });
    }
  } catch (error: any) {
    console.error("[CHATS_GET] Auth error:", error);
    return NextResponse.json({ error: "Authentication error", details: error?.message || "Unknown authentication error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title } = body;

    try {
      const chat = await prisma.chat.create({
        data: {
          title: title || "New Chat",
          userId: session.user.id,
        },
      });
      return NextResponse.json({ chat });
    } catch (dbError: any) {
      console.error("[CHATS_POST] Database error:", dbError);
      return NextResponse.json({ error: "Database error", details: dbError?.message || "Unknown database error" }, { status: 500 });
    }
  } catch (error: any) {
    console.error("[CHATS_POST] Error:", error);
    return NextResponse.json({ error: "Server error", details: error?.message || "Unknown server error" }, { status: 500 });
  }
} 