import LandingFrame from "@/components/LandingFrame";
import ScrollReveal from "@/components/ScrollReveal";
import { cateringSection } from "@/lib/siteData";

export default function CateringSection() {
  return (
    <section id="catering" className="bg-[var(--color-bg)] py-6 md:py-8">
      <div className="section-container">
        <ScrollReveal>
          <LandingFrame>
            <div className="catering-panel">
              <h2 className="book-panel-title">{cateringSection.title}</h2>
              <p className="book-panel-text">{cateringSection.privateText}</p>
              <p className="book-panel-text">{cateringSection.offSiteText}</p>
              <a href={cateringSection.cta.href} className="btn-primary catering-cta">
                {cateringSection.cta.label}
              </a>
            </div>
          </LandingFrame>
        </ScrollReveal>
      </div>
    </section>
  );
}
