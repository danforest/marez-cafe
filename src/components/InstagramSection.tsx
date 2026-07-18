import ScrollReveal from "@/components/ScrollReveal";

export default function InstagramSection() {
  return (
    <section id="instagram" className="bg-[var(--color-bg)] py-12 md:py-16">
      <div className="section-container">
        <ScrollReveal>
          <div className="instagram-header">
            <p className="type-eyebrow">Instagram</p>
            <h2 className="instagram-headline">See what we've been up to</h2>
            <a
              href="https://www.instagram.com/hello_marez/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-handle"
            >
              @hello_marez
            </a>
          </div>

          <div className="instagram-embed-area">
            {/* Paste your Behold.so embed snippet here */}
            <p className="instagram-placeholder">Instagram feed coming soon</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
