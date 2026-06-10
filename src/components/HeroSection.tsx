import HeroGallery from "@/components/HeroGallery";
import NavArrowIcon from "@/components/NavArrowIcon";
import OpenMenuButton from "@/components/OpenMenuButton";
import { hero } from "@/lib/siteData";

export default function HeroSection() {
  return (
    <section className="relative bg-[var(--color-surface)] pb-6 pt-4 md:pb-10 md:pt-8">
      <div className="px-6 pb-4 pt-8 md:px-12 md:pt-12 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="type-hero-landing">{hero.headline}</h1>
          <p className="type-body mx-auto mt-6 max-w-lg text-[var(--color-text-muted)]">
            {hero.subhead}
          </p>
          <OpenMenuButton className="btn-hero mt-10">
            {hero.primaryCta.label}
            <NavArrowIcon />
          </OpenMenuButton>
        </div>
      </div>

      <HeroGallery />
    </section>
  );
}
