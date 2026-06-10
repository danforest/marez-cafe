import ScrollReveal from "@/components/ScrollReveal";
import { SectionContainer } from "@/components/SectionLayout";
import { philosophyQuote } from "@/lib/siteData";

export default function PhilosophyBlurb() {
  return (
    <SectionContainer className="philosophy-quote-section py-20 md:py-28">
      <ScrollReveal>
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="type-quote">&ldquo;{philosophyQuote.quote}&rdquo;</p>
          <footer className="type-body-sm philosophy-quote-attribution mt-8">
            — {philosophyQuote.attribution}
          </footer>
        </blockquote>
      </ScrollReveal>
    </SectionContainer>
  );
}
