import { NextRequest } from "next/server";
import prisma from 'lib/index'; // adjust import as needed

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId) {
    return new Response(JSON.stringify({ error: "userId is required" }), { status: 400 });
  }
  const bookmarks = await prisma.bookmark.findMany({
    where: { userId },
    select: { propertyId: true }
  });
  return new Response(JSON.stringify({ propertyIds: bookmarks.map(b => b.propertyId) }), { status: 200 });
}

export async function POST(req: NextRequest) {
  const { userId, propertyId } = await req.json();
  if (!userId || !propertyId) {
    return new Response(JSON.stringify({ error: "userId and propertyId are required" }), { status: 400 });
  }
  await prisma.bookmark.upsert({
    where: { userId_propertyId: { userId, propertyId } },
    update: {},
    create: { userId, propertyId }
  });
  // Return updated list
  const bookmarks = await prisma.bookmark.findMany({
    where: { userId },
    select: { propertyId: true }
  });
  return new Response(JSON.stringify({ propertyIds: bookmarks.map(b => b.propertyId) }), { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const { userId, propertyId } = await req.json();
  if (!userId || !propertyId) {
    return new Response(JSON.stringify({ error: "userId and propertyId are required" }), { status: 400 });
  }
  await prisma.bookmark.deleteMany({
    where: { userId, propertyId }
  });
  // Return updated list
  const bookmarks = await prisma.bookmark.findMany({
    where: { userId },
    select: { propertyId: true }
  });
  return new Response(JSON.stringify({ propertyIds: bookmarks.map(b => b.propertyId) }), { status: 200 });
}