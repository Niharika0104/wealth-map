import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user stats from the database
    const stats = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        _count: {
          select: {
            chats: true,
          },
        },
        chats: {
          take: 5,
          orderBy: {
            updatedAt: "desc",
          },
          select: {
            id: true,
            title: true,
            updatedAt: true,
            _count: {
              select: {
                messages: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json({ stats });
  } catch (error) {
    console.error("[USER_STATS]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
} 