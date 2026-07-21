"use client";

import Script from "next/script";
import ScrollReveal from "@/components/ScrollReveal";

export default function InstagramSection() {
  return (
    <section id="instagram" className="bg-[var(--color-bg)] py-12 md:py-16">
      <Script
        src="https://w.behold.so/widget.js"
        type="module"
        strategy="lazyOnload"
      />
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
            {/* @ts-expect-error custom element from Behold.so */}
            <behold-widget feed-id="mCfA7yUO59Nu1cefKhDl" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
