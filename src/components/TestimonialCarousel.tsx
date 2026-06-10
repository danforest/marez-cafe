"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { Review } from "@/lib/siteData";

type TestimonialCarouselProps = {
  reviews: Review[];
  locationLabel?: string;
  manualOnly?: boolean;
};

export default function TestimonialCarousel({
  reviews,
  locationLabel = "Marez",
  manualOnly = false,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [reviews]);

  useEffect(() => {
    if (manualOnly || reviews.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [reviews.length, manualOnly]);

  if (reviews.length === 0) {
    return (
      <p className="type-body-sm py-12 text-center text-white/80">
        Be the first to leave a review at this location!
      </p>
    );
  }

  const current = reviews[index] ?? reviews[0];

  const prev = () =>
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <div className="relative">
      <blockquote
        key={current.id}
        className="testimonial-slide mx-auto max-w-3xl px-4 py-6 text-center md:px-12 md:py-8"
      >
        <p className="type-eyebrow testimonials-location-label">
          {locationLabel}
        </p>
        <p className="type-quote mt-4">&ldquo;{current.quote}&rdquo;</p>
        <footer className="type-body-sm mt-6">— {current.author}</footer>
      </blockquote>

      {reviews.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="testimonial-nav-button rounded-full border p-2 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {reviews.map((review, i) => (
              <button
                key={review.id}
                type="button"
                aria-label={`Go to review ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index
                    ? "bg-[var(--color-accent)]"
                    : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="testimonial-nav-button rounded-full border p-2 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
