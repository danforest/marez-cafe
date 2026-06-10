import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { coffee, philosophy } from "@/lib/siteData";

export default function PhilosophySplit() {
  return (
    <section id="philosophy" className="bg-[var(--color-cream)] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-serif text-4xl font-light text-[var(--color-charcoal)] md:text-5xl">
            {philosophy.headline}
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-[var(--color-charcoal)]/80">
            {philosophy.storyText}
          </p>
        </ScrollReveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-[var(--color-terracotta)]">
                  {philosophy.foodTitle}
                </h3>
                <p className="mt-3 font-sans leading-relaxed text-[var(--color-charcoal)]/80">
                  {philosophy.foodText}
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[var(--color-olive)]">
                  {philosophy.hospitalityTitle}
                </h3>
                <p className="mt-3 font-sans leading-relaxed text-[var(--color-charcoal)]/80">
                  {philosophy.hospitalityText}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-md">
              <Image
                src={philosophy.image}
                alt="Coffee and brunch at Marez"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15} className="mt-20">
          <div className="rounded-lg border border-[var(--color-charcoal)]/10 bg-white p-8 md:flex md:items-center md:gap-8">
            <div className="relative mb-6 h-32 w-32 shrink-0 overflow-hidden rounded-lg md:mb-0">
              <Image
                src={coffee.image}
                alt={`${coffee.roaster} coffee`}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            <div>
              <p className="font-sans text-sm uppercase tracking-wider text-[var(--color-olive)]">
                Our Coffee
              </p>
              <h3 className="mt-1 font-serif text-2xl text-[var(--color-charcoal)]">
                {coffee.blend} by {coffee.roaster}
              </h3>
              <p className="mt-2 font-sans text-sm text-[var(--color-charcoal)]/70">
                {coffee.origin}
              </p>
              <p className="mt-3 font-sans leading-relaxed text-[var(--color-charcoal)]/80">
                {coffee.description}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
