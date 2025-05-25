import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { query, chatId } = body;

    if (!query || !chatId) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Save user message
    await prisma.chatMessage.create({
      data: {
        chatId,
        role: "user",
        content: query,
      },
    });

    // TODO: Implement actual AI response generation
    const aiResponse = "This is a mock response. AI integration coming soon.";

    // Save AI response
    await prisma.chatMessage.create({
      data: {
        chatId,
        role: "assistant",
        content: aiResponse,
      },
    });

    // Update chat title if it's the first message
    const chat = await prisma.chat.findUnique({
      where: { id: chatId },
      include: { messages: true },
    });

    if (chat && chat.messages.length === 2) {
      await prisma.chat.update({
        where: { id: chatId },
        data: {
          title: query.slice(0, 30) + (query.length > 30 ? "..." : ""),
        },
      });
    }

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("[PROPERTY_QUERY]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 