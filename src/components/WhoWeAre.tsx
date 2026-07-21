import ScrollReveal from "@/components/ScrollReveal";
import { philosophy } from "@/lib/siteData";

export default function WhoWeAre() {
  return (
    <section id="philosophy" className="who-we-are-section bg-[var(--color-bg)] py-16 md:py-24">
      <div className="section-container">
        <ScrollReveal>
          <div className="who-we-are-content">
            <p className="type-eyebrow who-we-are-eyebrow">{philosophy.sectionTitle}</p>
            <h2 className="who-we-are-headline">{philosophy.headline}</h2>
            <p className="type-body who-we-are-intro">{philosophy.intro}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
