import Image from "next/image";
import LandingFrame from "@/components/LandingFrame";
import ScrollReveal from "@/components/ScrollReveal";
import { joinTeamSection } from "@/lib/siteData";

export default function JoinTeamSection() {
  return (
    <section id="join" className="bg-[var(--color-bg)] py-6 md:py-8">
      <div className="section-container">
        <ScrollReveal>
          <LandingFrame panelClassName="book-panel-frame">
            <div className="book-panel">
              <div className="book-panel-grid join-panel-grid">
                <div className="book-panel-media">
                  <Image
                    src={joinTeamSection.image}
                    fill
                    alt="Join the Marez team"
                    style={{ objectFit: "cover", objectPosition: "50% 50%" }}
                  />
                </div>

                <div className="book-panel-content">
                  <h2 className="book-panel-title">{joinTeamSection.title}</h2>
                  <p className="book-panel-intro join-panel-intro">
                    {joinTeamSection.intro}
                  </p>
                </div>
              </div>
            </div>
          </LandingFrame>
        </ScrollReveal>
      </div>
    </section>
  );
}
