import { NextRequest } from "next/server";

// In-memory store for demo (replace with DB in production)
let bookmarks: Record<string, string[]> = {};

// GET: Get all bookmarked property IDs for a user (demo: userId from query)
export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId) {
    return new Response(JSON.stringify({ error: "userId is required" }), { status: 400 });
  }
  return new Response(JSON.stringify({ propertyIds: bookmarks[userId] || [] }), { status: 200 });
}

// POST: Add a property to bookmarks
export async function POST(req: NextRequest) {
  const { userId , propertyId } = await req.json();
  if (!propertyId) {
    return new Response(JSON.stringify({ error: "propertyId is required" }), { status: 400 });
  }
  bookmarks[userId] = Array.from(new Set([...(bookmarks[userId] || []), propertyId]));
  return new Response(JSON.stringify({ propertyIds: bookmarks[userId] }), { status: 200 });
}

// DELETE: Remove a property from bookmarks
export async function DELETE(req: NextRequest) {
  const { userId , propertyId } = await req.json();
  if (!propertyId) {
    return new Response(JSON.stringify({ error: "propertyId is required" }), { status: 400 });
  }
  bookmarks[userId] = (bookmarks[userId] || []).filter((id) => id !== propertyId);
  return new Response(JSON.stringify({ propertyIds: bookmarks[userId] }), { status: 200 });
}
