import { NextResponse } from "next/server";
import { fetchGoogleReviewsUncached } from "@/lib/googlePlaces";

export const dynamic = "force-dynamic";

export async function GET() {
  const result = await fetchGoogleReviewsUncached();
  return NextResponse.json(result);
}
