import { NextRequest } from "next/server";
import prisma from 'lib/index';
import { getTrendingScore } from '@/Models/models';

export async function GET(req: NextRequest) {
  try {
    const properties = await prisma.property.findMany({
      select: {
        id: true,
        name: true,
        address: true,
        city: true,
        state: true,
        price: true,
        createdAt: true,
        views: { select: { id: true } },
        Bookmarks: { select: { id: true } },
      },
    });
const rawScores = properties.map((property) => {
  const viewsCount = property.views.length || 0;
  const bookmarksCount = property.Bookmarks.length || 0;
  const score = Number(getTrendingScore({
    views: viewsCount,
    bookmarks: bookmarksCount,
    createdAt: property.createdAt,
  })) || 0; // fallback to 0 if NaN/undefined/null
  return {
    ...property,
    viewsCount,
    bookmarksCount,
    score,
  };
});

    // Normalize and return only the minimal fields
    const scores = rawScores.map((p) => p.score);
    const max = Math.max(...scores);
    const min = Math.min(...scores);

    const normalized = rawScores.map((property) => {
      const trendingScore =
        max === min
          ? 100
          : ((property.score - min) / (max - min)) * (200 - 1) + 1;
      return {
        id: property.id,
        name: property.name,
        address: property.address,
        city: property.city,
        state: property.state,
        price: property.price,
        trendingScore: Math.round(trendingScore),
        viewsCount: property.viewsCount,
        bookmarksCount: property.bookmarksCount,
      };
    });

    const sorted = normalized.sort(
      (a, b) => b.trendingScore - a.trendingScore
    );

    return new Response(JSON.stringify(sorted), { status: 200 });
  } catch (error) {
    console.error("Error fetching trending properties:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}