"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { showcaseSlides } from "@/lib/siteData";

export default function ShowcaseCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % showcaseSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [paused]);

  const current = showcaseSlides[index];

  return (
    <section
      aria-label="Featured dishes"
      className="overflow-hidden bg-[var(--color-cream)] pb-12 pt-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="section-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex max-w-4xl flex-col items-center"
          >
            <Link href={current.href} className="group w-full">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl shadow-md">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>
              <p className="type-heading mt-6 text-2xl group-hover:text-[var(--color-accent)] transition-colors">{current.name}</p>
            </Link>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex justify-center gap-2">
          {showcaseSlides.map((slide, i) => (
            <button
              key={slide.name}
              type="button"
              aria-label={`Show ${slide.name}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-[var(--color-terracotta)]"
                  : "w-1.5 bg-[var(--color-charcoal)]/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
