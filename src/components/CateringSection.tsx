import Image from "next/image";
import LandingFrame from "@/components/LandingFrame";
import ScrollReveal from "@/components/ScrollReveal";
import { cateringSection, siteConfig } from "@/lib/siteData";

export default function CateringSection() {
  return (
    <section id="catering" className="bg-[var(--color-bg)] py-8 md:py-12">
      <div className="section-container">
        <ScrollReveal>
          <LandingFrame>
            <div className="catering-grid">
              <div className="catering-panel">
                <h2 className="book-panel-title">{cateringSection.title}</h2>
                <p className="book-panel-text">{cateringSection.leadText}</p>
                <p className="book-panel-text">{cateringSection.privateText}</p>
                <a href={`mailto:${siteConfig.email}`} className="btn-primary catering-cta">
                  Get in touch
                </a>
              </div>
              <div className="catering-image">
                <Image
                  src="/assets/catering.jpg"
                  alt="Catering order ready for collection"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </LandingFrame>
        </ScrollReveal>
      </div>
    </section>
  );
}
