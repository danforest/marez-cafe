import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { SectionContainer, SectionHeader } from "@/components/SectionLayout";
import { locations, siteConfig } from "@/lib/siteData";

export default function LocationsGrid() {
  return (
    <SectionContainer id="locations" className="bg-[var(--color-surface)] py-20 md:py-28">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Locations"
          title="Find your local Marez"
          align="center"
        >
          <p>
            Eight high street cafés across South West London, each with its
            own personality, local team and loyal regulars.
          </p>
        </SectionHeader>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p
          id="book"
          className="type-body-sm mx-auto mb-10 max-w-2xl text-center text-[var(--color-text)]/70"
        >
          {siteConfig.bookingNote}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc) => (
            <Link
              key={loc.id}
              href={`#locations-${loc.id}`}
              className="group overflow-hidden rounded-lg bg-[var(--color-bg)] shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="type-heading text-base normal-case">
                  {loc.name.replace("Marez ", "")}
                </h3>
                <p className="type-body-sm mt-1">{loc.address}</p>
                <span className="type-label mt-3 inline-block text-[var(--color-accent)]">
                  View location →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </ScrollReveal>
    </SectionContainer>
  );
}
