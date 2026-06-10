import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { philosophy } from "@/lib/siteData";

const cards = [
  { src: "/assets/dog.jpg", label: "RELAX" },
  { src: "/assets/fan-eat.jpg", label: "EAT" },
  { src: "/assets/fan-connect.jpg", label: "CONNECT" },
];

export default function WhoWeAre() {
  return (
    <section id="philosophy" className="who-we-are-section bg-[var(--color-bg)] py-16 md:py-24">
      <div className="section-container">
        <ScrollReveal>
          <div className="who-we-are-split">
            <div className="who-we-are-content">
              <p className="type-eyebrow who-we-are-eyebrow">{philosophy.sectionTitle}</p>
              <h2 className="who-we-are-headline">{philosophy.headline}</h2>
              <p className="type-body who-we-are-intro">{philosophy.intro}</p>
            </div>

            <div className="fan-stack" aria-hidden="true">
              {cards.map((card, i) => (
                <div key={card.label} className={`fan-card fan-card-${i + 1}`}>
                  <Image
                    src={card.src}
                    alt={card.label}
                    fill
                    sizes="220px"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="fan-card-label">{card.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
