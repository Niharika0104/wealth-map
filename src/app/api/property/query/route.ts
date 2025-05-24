import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { propertyAgent } from "@/lib/ai-agent/property-agent";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { query } = await req.json();
    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    const response = await propertyAgent.processQuery({
      query,
      userId: session.user.id,
    });

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error processing property query:", error);
    return NextResponse.json(
      { error: "Failed to process property query" },
      { status: 500 }
    );
  }
} 