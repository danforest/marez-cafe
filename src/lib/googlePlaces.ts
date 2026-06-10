import { unstable_cache } from "next/cache";
import { testimonials, type Review } from "@/lib/siteData";

export const GOOGLE_PLACE_ID = "ChIJFfkPaUwLdkgRCqnl5EwgYAA";

export const GOOGLE_LOCATION_LABEL = "Marez Brasserie, Teddington";

export const GOOGLE_MAPS_URI =
  "https://www.google.com/maps/search/?api=1&query=Marez+Brasserie&query_place_id=ChIJFfkPaUwLdkgRCqnl5EwgYAA";

type GooglePlaceReview = {
  name?: string;
  rating?: number;
  text?: { text?: string } | string;
  authorAttribution?: { displayName?: string };
  publishTime?: string;
};

function reviewText(review: GooglePlaceReview): string {
  if (typeof review.text === "string") return review.text.trim();
  return review.text?.text?.trim() ?? "";
}

function reviewRating(review: GooglePlaceReview): number {
  const rating = review.rating;
  return typeof rating === "number" ? rating : Number(rating);
}

type GooglePlaceDetails = {
  displayName?: { text?: string };
  googleMapsUri?: string;
  rating?: number;
  userRatingCount?: number;
  reviews?: GooglePlaceReview[];
};

export type GoogleReviewsResult = {
  reviews: Review[];
  locationLabel: string;
  googleMapsUri?: string;
  source: "google" | "fallback";
};

export async function fetchGoogleReviewsUncached(): Promise<GoogleReviewsResult> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return {
      reviews: testimonials,
      locationLabel: GOOGLE_LOCATION_LABEL,
      googleMapsUri: GOOGLE_MAPS_URI,
      source: "fallback",
    };
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "displayName,reviews,rating,userRatingCount,googleMapsUri",
        },
        next: { revalidate: 86400 },
      },
    );

    if (!response.ok) {
      throw new Error(`Google Places API error: ${response.status}`);
    }

    const place = (await response.json()) as GooglePlaceDetails;

    const fiveStarReviews: Review[] = (place.reviews ?? [])
      .filter((review) => reviewRating(review) === 5 && reviewText(review))
      .map((review, index) => ({
        id: review.name ?? `google-review-${index}`,
        locationId: "teddington",
        quote: reviewText(review),
        author: review.authorAttribution?.displayName ?? "Google reviewer",
      }));

    if (fiveStarReviews.length === 0) {
      return {
        reviews: testimonials,
        locationLabel: GOOGLE_LOCATION_LABEL,
        googleMapsUri: place.googleMapsUri ?? GOOGLE_MAPS_URI,
        source: "fallback",
      };
    }

    return {
      reviews: fiveStarReviews,
      locationLabel:
        place.displayName?.text?.trim() ?? GOOGLE_LOCATION_LABEL,
      googleMapsUri: place.googleMapsUri,
      source: "google",
    };
  } catch {
    return {
      reviews: testimonials,
      locationLabel: GOOGLE_LOCATION_LABEL,
      googleMapsUri: GOOGLE_MAPS_URI,
      source: "fallback",
    };
  }
}

export const getGoogleReviews = unstable_cache(
  fetchGoogleReviewsUncached,
  ["google-reviews", GOOGLE_PLACE_ID],
  { revalidate: 86400 },
);
