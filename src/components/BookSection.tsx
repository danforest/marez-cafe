import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { bookSection, orderLinks } from "@/lib/siteData";

export default function BookSection() {
  return (
    <section id="book" className="book-hero">
      <div className="book-hero-image">
        <Image
          src="/assets/granola.jpg"
          fill
          alt="Granola at Marez"
          style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          priority
        />
        <div className="book-hero-dim" />
      </div>

      <div className="book-hero-overlay">
        <ScrollReveal>
          <div className="book-hero-tile">
            <div className="book-panel-content">
              <h2 className="book-panel-title">{bookSection.title}</h2>

              <p className="book-panel-label">{bookSection.findingUsHeading}</p>
              <p className="book-panel-text">{bookSection.findingUsText}</p>
              <p className="book-panel-text">
                Dine in with us, order via{" "}
                <a
                  href={orderLinks.deliveroo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-panel-link"
                >
                  Deliveroo
                </a>
                , or call ahead and collect. Whatever works for you.
              </p>

              <p className="book-panel-label">{bookSection.hoursHeading}</p>
              <div className="book-panel-hours">
                <p className="book-panel-hours-line">{bookSection.hoursWeekday}</p>
                <p className="book-panel-hours-line">{bookSection.hoursSunday}</p>
                <p className="book-panel-hours-line">{bookSection.hoursNote}</p>
              </div>
            </div>

            <div className="book-hero-map">
              <iframe
                title="Marez location"
                src="https://www.google.com/maps?q=Marez+Brasserie,+Teddington,+UK&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
