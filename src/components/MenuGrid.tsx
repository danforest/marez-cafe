"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { menuCategories, type MenuCategory } from "@/lib/siteData";

function MenuCard({
  item,
}: {
  item: MenuCategory["items"][number];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className={`absolute inset-0 flex flex-col justify-end bg-[var(--color-charcoal)]/80 p-4 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-sans text-xs uppercase tracking-wider text-white/70">
            Ingredients
          </p>
          <p className="mt-1 font-sans text-sm text-white">
            {item.ingredients.join(" · ")}
          </p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-serif text-lg text-[var(--color-charcoal)]">
            {item.name}
          </h4>
          <span className="shrink-0 font-sans text-sm font-medium text-[var(--color-terracotta)]">
            {item.price}
          </span>
        </div>
        <p className="mt-2 font-sans text-sm leading-relaxed text-[var(--color-charcoal)]/70">
          {item.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--color-cream)] px-2.5 py-0.5 font-sans text-xs text-[var(--color-olive)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const category = menuCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="menus" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-[var(--color-olive)]">
            Marez Menus
          </p>
          <h2 className="mt-2 font-serif text-4xl font-light text-[var(--color-charcoal)] md:text-5xl">
            Brunch, lunch and everything in between
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-[var(--color-charcoal)]/80">
            Whatever your Marez favourite, choose the menu that tickles your
            tastebuds.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={activeCategory === cat.id}
                className={`rounded-full px-5 py-2 font-sans text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-[var(--color-terracotta)] text-white"
                    : "border border-[var(--color-charcoal)]/20 text-[var(--color-charcoal)] hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-6">
          <p className="font-sans text-sm text-[var(--color-charcoal)]/60">
            {category.description} · {category.hours}
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item, i) => (
            <ScrollReveal key={item.name} delay={0.05 * i}>
              <MenuCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
