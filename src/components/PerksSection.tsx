import { Coffee, Shield, Wind, Wifi } from "lucide-react";
import LandingFrame from "@/components/LandingFrame";
import ScrollReveal from "@/components/ScrollReveal";

export default function PerksSection() {
  return (
    <section id="perks" className="bg-[var(--color-bg)] py-8 md:py-10">
      <div className="section-container">
        <ScrollReveal>
          <LandingFrame panelClassName="book-panel-frame">
            <div className="grid grid-cols-1 md:grid-cols-3">

              {/* Blue Light Discount */}
              <div className="perks-card border-b border-[var(--color-border)] md:border-b-0 md:border-r">
                <div className="perks-icon-wrap">
                  <Shield className="h-5 w-5" />
                </div>
                <p className="type-eyebrow mt-4 mb-2">Blue Light Card</p>
                <h3 className="type-heading-lg mb-3">Blue Light Discount – 15%</h3>
                <p className="type-body-sm">
                  NHS workers, emergency services, armed forces, and social care
                  professionals — show your Blue Light Card and enjoy 15% off your visit.
                </p>
              </div>

              {/* Work Away From Home */}
              <div className="perks-card border-b border-[var(--color-border)] md:border-b-0 md:border-r">
                <div className="perks-icon-wrap">
                  <Wifi className="h-5 w-5" />
                </div>
                <p className="type-eyebrow mt-4 mb-2">Workspace</p>
                <h3 className="type-heading-lg mb-3">Work Away From Home</h3>
                <ul className="flex flex-col gap-2.5">
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

              {/* Loyalty Card */}
              <div className="perks-card">
                <div className="perks-icon-wrap">
                  <Coffee className="h-5 w-5" />
                </div>
                <p className="type-eyebrow mt-4 mb-2">Loyalty</p>
                <h3 className="type-heading-lg mb-3">Takeaway Coffee — Grab Your Loyalty Card</h3>
                <p className="type-body-sm mb-3">
                  Collect stamps every time you grab a takeaway coffee. Fill your card
                  and the next one&apos;s on us.
                </p>
                <span className="inline-flex items-center rounded-full border border-[var(--color-border)] px-3 py-1 font-sans text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                  Coming soon digitally
                </span>
              </div>

            </div>
          </LandingFrame>
        </ScrollReveal>
      </div>
    </section>
  );
}
