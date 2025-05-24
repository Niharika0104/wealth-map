import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function DELETE(
  req: Request,
  { params }: { params: { chatId: string } }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const chat = await prisma.chat.findUnique({
      where: {
        id: params.chatId,
      },
    });

    if (!chat) {
      return new NextResponse("Chat not found", { status: 404 });
    }

    if (chat.userId !== session.user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await prisma.chat.delete({
      where: {
        id: params.chatId,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[CHAT_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 