import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { SectionContainer } from "@/components/SectionLayout";
import { promoBlocks } from "@/lib/siteData";

export default function PromoBlocks() {
  return (
    <SectionContainer id="promos" className="bg-[var(--color-surface)] py-24 md:py-28">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        {promoBlocks.map((block, i) => (
          <ScrollReveal key={block.id} delay={0.1 * i}>
            <article className="group overflow-hidden rounded-xl bg-[var(--color-cream)] shadow-sm">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="type-heading-lg">{block.title}</h3>
                <p className="type-body mt-4">{block.description}</p>
                <Link
                  href={block.cta.href}
                  className="type-label mt-7 inline-block rounded-full bg-[var(--color-terracotta)] px-7 py-3 text-white transition-opacity hover:opacity-90"
                >
                  {block.cta.label}
                </Link>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  );
}
