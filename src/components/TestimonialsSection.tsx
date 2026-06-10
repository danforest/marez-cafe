import ScrollReveal from "@/components/ScrollReveal";
import { SectionContainer, SectionHeader } from "@/components/SectionLayout";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { getGoogleReviews } from "@/lib/googlePlaces";

export default async function TestimonialsSection() {
  const { reviews, locationLabel, googleMapsUri, source } =
    await getGoogleReviews();

  return (
    <SectionContainer className="testimonials-section py-20 md:py-28">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Reviews"
          title="What our regulars say"
          align="center"
        />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <TestimonialCarousel
          reviews={reviews}
          locationLabel={locationLabel}
          manualOnly
        />
        {googleMapsUri ? (
          <p className="type-body-sm testimonials-section-link mt-8 text-center">
            <a
              href={googleMapsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:underline"
            >
              {source === "google" ? "Reviews from Google" : "View reviews on Google"}
            </a>
          </p>
        ) : null}
      </ScrollReveal>
    </SectionContainer>
  );
}
