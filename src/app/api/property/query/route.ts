import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { PrismaClient } from "@/generated/prisma";
import { PropertyAgent } from "@/lib/ai-agent/property-agent";

const prisma = new PrismaClient();
const propertyAgent = new PropertyAgent();

// List of general greetings and non-property queries
const generalGreetings = [
  "hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening",
  "how are you", "how's it going", "what's up", "howdy"
];

// Check if query is a general greeting
function isGeneralGreeting(query: string): boolean {
  const normalizedQuery = query.toLowerCase().trim();
  return generalGreetings.some(greeting => normalizedQuery.includes(greeting));
}

// Get response for general greetings
function getGeneralResponse(): string {
  const responses = [
    "Hello! I'm your property assistant. How can I help you with property information today?",
    "Hi there! I can help you find information about properties and their owners. What would you like to know?",
    "Greetings! I'm here to assist you with property-related queries. What can I help you with?",
    "Hello! I can help you explore property details, market trends, and owner information. What would you like to know?"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { query, chatId } = body;

    if (!query) {
      return new NextResponse("Missing query", { status: 400 });
    }

    // Create or get chat
    let chat;
    if (chatId) {
      chat = await prisma.chat.findUnique({
        where: { id: chatId },
      });
    }
    
    if (!chat) {
      chat = await prisma.chat.create({
        data: {
          userId: session.user.id,
          title: "New Chat",
        },
      });
    }

    // Save user message
    await prisma.chatMessage.create({
      data: {
        chatId: chat.id,
        role: "user",
        content: query,
      },
    });

    let aiResponse: string;

    // Handle general greetings separately
    if (isGeneralGreeting(query)) {
      aiResponse = getGeneralResponse();
    } else {
      // Use PropertyAgent for property-related queries
      aiResponse = await propertyAgent.processQuery({
        query,
        userId: session.user.id,
      });
    }

    // Save AI response
    await prisma.chatMessage.create({
      data: {
        chatId: chat.id,
        role: "assistant",
        content: aiResponse,
      },
    });

    // Update chat title if it's the first message
    const chatWithMessages = await prisma.chat.findUnique({
      where: { id: chat.id },
      include: { messages: true },
    });

    if (chatWithMessages && chatWithMessages.messages.length === 2) {
      await prisma.chat.update({
        where: { id: chat.id },
        data: {
          title: query.slice(0, 30) + (query.length > 30 ? "..." : ""),
        },
      });
    }

    return NextResponse.json({ response: aiResponse, chatId: chat.id });
  } catch (error) {
    console.error("[PROPERTY_QUERY]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 