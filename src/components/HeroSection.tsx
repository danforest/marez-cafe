import HeroGallery from "@/components/HeroGallery";
import NavArrowIcon from "@/components/NavArrowIcon";
import { hero } from "@/lib/siteData";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-[var(--color-surface)] pb-6 pt-4 md:pb-10 md:pt-8">
      <div className="px-6 pb-4 pt-8 md:px-12 md:pt-12 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="type-hero-landing">{hero.headline}</h1>
          <p className="mx-auto mt-5 max-w-sm text-center font-serif italic text-base font-normal tracking-[0.06em] text-[var(--color-text-muted)]"
             style={{ fontVariationSettings: "'opsz' 60, 'SOFT' 90" }}>
            Mediterranean warmth · North African heart
          </p>
          <Link href="/menu" className="btn-hero mt-10 inline-flex items-center gap-3">
            {hero.primaryCta.label}
            <NavArrowIcon />
          </Link>
        </div>
      </div>

      <HeroGallery />
    </section>
  );
}
