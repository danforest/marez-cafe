import { Coffee, Shield, Wifi, Wind } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { philosophy } from "@/lib/siteData";

export default function WhoWeAre() {
  return (
    <section id="philosophy" className="who-we-are-section bg-[var(--color-bg)] py-16 md:py-24">
      <div className="section-container">
        <ScrollReveal>
          <div className="who-we-are-split">

            {/* Left — intro text */}
            <div className="who-we-are-content">
              <p className="type-eyebrow who-we-are-eyebrow">{philosophy.sectionTitle}</p>
              <h2 className="who-we-are-headline">{philosophy.headline}</h2>
              <p className="type-body who-we-are-intro">{philosophy.intro}</p>
            </div>

            {/* Right — perks stacked */}
            <div className="flex flex-col gap-8">

              <div>
                <div className="perks-icon-wrap mb-3">
                  <Shield className="h-5 w-5" />
                </div>
                <p className="type-eyebrow mb-1">Blue Light Card</p>
                <h3 className="type-heading mb-2">Blue Light Discount – 15%</h3>
                <p className="type-body-sm">
                  NHS workers, emergency services, armed forces, and social care
                  professionals — show your Blue Light Card and enjoy 15% off your visit.
                </p>
              </div>

              <div>
                <div className="perks-icon-wrap mb-3">
                  <Wifi className="h-5 w-5" />
                </div>
                <p className="type-eyebrow mb-1">Workspace</p>
                <h3 className="type-heading mb-2">Work Away From Home</h3>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2.5 type-body-sm">
                    <Wifi className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                    Super Fast WiFi
                  </li>
                  <li className="flex items-center gap-2.5 type-body-sm">
                    <Wind className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                    Air Conditioning
                  </li>
                </ul>
              </div>

              <div>
                <div className="perks-icon-wrap mb-3">
                  <Coffee className="h-5 w-5" />
                </div>
                <p className="type-eyebrow mb-1">Loyalty</p>
                <h3 className="type-heading mb-2">Takeaway Coffee — Grab Your Loyalty Card</h3>
                <p className="type-body-sm mb-3">
                  Collect stamps every time you grab a takeaway coffee. Fill your card
                  and the next one&apos;s on us.
                </p>
                <span className="inline-flex items-center rounded-full border border-[var(--color-border)] px-3 py-1 font-sans text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                  Coming soon digitally
                </span>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
