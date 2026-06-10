"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { SectionContainer, SectionHeader } from "@/components/SectionLayout";
import { mealsSection, showcaseSlides } from "@/lib/siteData";

const INTERVAL_MS = 5000;

export default function MealsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollToIndex = useCallback((nextIndex: number) => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;
    const slide = track.children[nextIndex] as HTMLElement;
    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  }, []);

  const goNext = useCallback(() => {
    setIndex((prev) => {
      const next = (prev + 1) % showcaseSlides.length;
      return next;
    });
  }, []);

  const goPrev = useCallback(() => {
    setIndex((prev) =>
      prev === 0 ? showcaseSlides.length - 1 : prev - 1,
    );
  }, []);

  useEffect(() => {
    scrollToIndex(index);
  }, [index, scrollToIndex]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  return (
    <SectionContainer id="meals" className="bg-[var(--color-surface)] py-20 md:py-28">
      <SectionHeader
        eyebrow={mealsSection.eyebrow}
        title={mealsSection.title}
        align="center"
      />

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {showcaseSlides.map((slide) => (
            <Link
              key={slide.name}
              href={slide.href}
              className="group w-[calc(100%/1.2)] shrink-0 snap-start md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.85rem)] xl:w-[calc(25%-0.95rem)]"
            >
              <article className="overflow-hidden rounded-lg bg-[var(--color-bg)] shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <p className="type-heading px-4 py-4 text-center normal-case md:px-5 md:py-5">
                  {slide.name}
                </p>
              </article>
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous dish"
          className="absolute left-2 top-[38%] z-10 -translate-y-1/2 rounded-full bg-[var(--color-surface)]/75 p-2.5 text-[var(--color-text)] shadow-sm backdrop-blur-sm transition-colors hover:bg-[var(--color-surface)] md:left-4"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next dish"
          className="absolute right-2 top-[38%] z-10 -translate-y-1/2 rounded-full bg-[var(--color-surface)]/75 p-2.5 text-[var(--color-text)] shadow-sm backdrop-blur-sm transition-colors hover:bg-[var(--color-surface)] md:right-4"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </SectionContainer>
  );
}
