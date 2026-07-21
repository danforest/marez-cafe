import LandingFrame from "@/components/LandingFrame";
import ScrollReveal from "@/components/ScrollReveal";

export default function BlueLightSection() {
  return (
    <section id="blue-light" className="bg-[var(--color-bg)] py-8 md:py-10">
      <div className="section-container">
        <ScrollReveal>
          <LandingFrame panelClassName="book-panel-frame">
            <div className="book-panel-content">
              <p className="type-eyebrow">Blue Light Card</p>
              <h2 className="book-panel-title">Blue Light Discount – 15%</h2>
              <p className="book-panel-intro join-panel-intro">
                We&apos;re proud to support the people who keep us safe and cared for. NHS workers,
                emergency services, armed forces, and social care professionals — show your Blue
                Light Card and enjoy 15% off your visit.
              </p>
            </div>
          </LandingFrame>
        </ScrollReveal>
      </div>
    </section>
  );
}
