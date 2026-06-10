"use client";

import { useState } from "react";
import LocationTabs from "@/components/LocationTabs";
import ScrollReveal from "@/components/ScrollReveal";
import { SectionContainer, SectionHeader } from "@/components/SectionLayout";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { locations, siteConfig, testimonials } from "@/lib/siteData";

export default function LocationsSection() {
  const [activeLocation, setActiveLocation] = useState("all");

  const filteredReviews =
    activeLocation === "all"
      ? testimonials
      : testimonials.filter((review) => review.locationId === activeLocation);

  const locationLabel =
    activeLocation === "all"
      ? "Marez"
      : (locations.find((loc) => loc.id === activeLocation)?.name ?? "Marez");

  return (
    <SectionContainer id="locations" className="bg-[var(--color-cream)] py-24 md:py-28">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Locations"
          title="We're a collection of high street cafés"
        >
          <p>
            Each with its own{" "}
            <strong className="font-semibold text-[var(--color-charcoal)]">
              personality
            </strong>
            ,{" "}
            <strong className="font-semibold text-[var(--color-charcoal)]">
              local team
            </strong>{" "}
            &amp;{" "}
            <strong className="font-semibold text-[var(--color-charcoal)]">
              loyal regulars
            </strong>
            .
          </p>
          <ul className="mt-5 space-y-2">
            <li>Warm service</li>
            <li>Honest food</li>
            <li>
              And that feeling you get when you&apos;ve found{" "}
              <strong className="font-semibold text-[var(--color-charcoal)]">
                &ldquo;your place&rdquo;
              </strong>
            </li>
          </ul>
        </SectionHeader>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <LocationTabs activeId={activeLocation} onChange={setActiveLocation} />
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="mt-8">
        <TestimonialCarousel
          key={activeLocation}
          reviews={filteredReviews}
          locationLabel={locationLabel}
        />
      </ScrollReveal>

      <ScrollReveal
        id="order"
        delay={0.2}
        className="section-block border-t border-[var(--color-charcoal)]/10 pt-12 text-center"
      >
        <p className="type-body-sm mx-auto max-w-2xl">{siteConfig.bookingNote}</p>
        <p className="type-body-sm mx-auto mt-3 max-w-2xl">
          {siteConfig.hours.weekday} · {siteConfig.hours.sunday}
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-xs text-[var(--color-charcoal)]/45">
          {siteConfig.hours.note}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {locations.map((loc) => (
            <span
              key={loc.id}
              className="type-label rounded-full border border-[var(--color-charcoal)]/15 px-4 py-2 text-[var(--color-charcoal)]/70"
            >
              {loc.name.replace("Marez ", "")}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </SectionContainer>
  );
}
