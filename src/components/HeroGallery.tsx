"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import DishPhoto from "@/components/DishPhoto";
import { hero, showcaseSlides, type ShowcaseSlide } from "@/lib/siteData";

const AUTO_SCROLL_PX_PER_FRAME = 0.3;
const DRAG_THRESHOLD_PX = 6;

function wrapOffset(offset: number, halfWidth: number) {
  if (halfWidth <= 0) return 0;
  let wrapped = offset % halfWidth;
  if (wrapped < 0) wrapped += halfWidth;
  return wrapped;
}

function GallerySlide({
  slide,
  shouldBlockNavigation,
}: {
  slide: ShowcaseSlide;
  shouldBlockNavigation: () => boolean;
}) {
  return (
    <Link
      href={slide.href}
      draggable={false}
      onClick={(event) => {
        if (shouldBlockNavigation()) event.preventDefault();
      }}
      className="group relative w-[140px] shrink-0 overflow-hidden rounded-2xl sm:w-[160px] md:w-[180px] lg:w-[200px]"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <DishPhoto
          src={slide.image}
          alt={slide.name}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="200px"
          priority={
            slide.name === "Shakshuka" ||
            slide.name === "Spicy Scrambled Eggs"
          }
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3 pt-8">
          <span className="text-xs font-medium text-white md:text-sm">
            {slide.name}
          </span>
        </div>
      </div>
    </Link>
  );
}

function SlideStrip({
  slides,
  hidden = false,
  shouldBlockNavigation,
}: {
  slides: ShowcaseSlide[];
  hidden?: boolean;
  shouldBlockNavigation: () => boolean;
}) {
  return (
    <div
      className="flex shrink-0 gap-3 pr-3 md:gap-4 md:pr-4"
      aria-hidden={hidden || undefined}
    >
      {slides.map((slide) => (
        <GallerySlide
          key={slide.name}
          slide={slide}
          shouldBlockNavigation={shouldBlockNavigation}
        />
      ))}
    </div>
  );
}

export default function HeroGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const dragStartRef = useRef({ x: 0, offset: 0 });
  const didDragRef = useRef(false);
  const blockNavigationRef = useRef(false);
  const autoScrollEnabledRef = useRef(true);

  const [isDragging, setIsDragging] = useState(false);

  const shouldBlockNavigation = useCallback(
    () => blockNavigationRef.current,
    [],
  );

  const getHalfWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    return track.scrollWidth / 2;
  }, []);

  const applyOffset = useCallback(
    (nextOffset: number) => {
      const halfWidth = getHalfWidth();
      const wrapped = wrapOffset(nextOffset, halfWidth);
      offsetRef.current = wrapped;

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(-${wrapped}px, 0, 0)`;
      }
    },
    [getHalfWidth],
  );

  useEffect(() => {
    autoScrollEnabledRef.current = !window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    const tick = () => {
      if (
        autoScrollEnabledRef.current &&
        !isDraggingRef.current &&
        !isHoveredRef.current
      ) {
        applyOffset(offsetRef.current + AUTO_SCROLL_PX_PER_FRAME);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [applyOffset]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;

    isDraggingRef.current = true;
    didDragRef.current = false;
    dragStartRef.current = {
      x: event.clientX,
      offset: offsetRef.current,
    };

    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const deltaX = event.clientX - dragStartRef.current.x;
    if (Math.abs(deltaX) > DRAG_THRESHOLD_PX) {
      didDragRef.current = true;
    }

    applyOffset(dragStartRef.current.offset - deltaX);
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (didDragRef.current) {
      blockNavigationRef.current = true;
      window.setTimeout(() => {
        blockNavigationRef.current = false;
      }, 80);
    }
  };

  return (
    <div
      className="relative mt-6 md:mt-10"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      <aside
        className="pointer-events-none absolute right-4 top-[42%] z-30 flex h-32 w-32 -translate-y-1/2 -rotate-[25deg] items-center justify-center rounded-full bg-[var(--color-primary)] p-4 text-center shadow-lg sm:right-6 sm:h-36 sm:w-36 md:right-10 md:h-40 md:w-40 md:p-5 lg:right-14 lg:-translate-x-6 xl:right-16 xl:h-44 xl:w-44 xl:-translate-x-8"
        aria-label={hero.badgeText}
      >
        <p className="text-[0.6875rem] leading-snug text-white sm:text-xs md:text-[0.8125rem] xl:text-sm">
          {hero.badgeText}
        </p>
      </aside>

      <div className="overflow-hidden px-6 pb-2 md:px-10 lg:px-14">
        <div
          ref={trackRef}
          className={`hero-gallery-track flex w-max select-none ${isDragging ? "hero-gallery-track--dragging" : ""}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <SlideStrip
            slides={showcaseSlides}
            shouldBlockNavigation={shouldBlockNavigation}
          />
          <SlideStrip
            slides={showcaseSlides}
            hidden
            shouldBlockNavigation={shouldBlockNavigation}
          />
        </div>
      </div>
    </div>
  );
}
