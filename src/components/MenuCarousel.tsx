import DishPhoto from "@/components/DishPhoto";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { SectionContainer, SectionHeader } from "@/components/SectionLayout";
import { menuCategories } from "@/lib/siteData";

export default function MenuCarousel() {
  return (
    <SectionContainer id="menus" className="bg-[var(--color-bg)] py-20 md:py-28">
      <ScrollReveal>
        <SectionHeader eyebrow="Menus" title="Menu Categories" align="center">
          <p>
            Five menus, one kitchen. Fresh bakes, breakfast, lunch, kids and
            drinks, all day, every day.
          </p>
        </SectionHeader>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {menuCategories.map((cat) => (
            <article
              key={cat.id}
              id={`menus-${cat.id}`}
              className="group overflow-hidden rounded-lg bg-[var(--color-surface)] shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <DishPhoto
                  src={cat.image}
                  alt={cat.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
              <div className="p-5">
                <p className="type-eyebrow">{cat.hours}</p>
                <h3 className="type-heading mt-2">{cat.title}</h3>
                <p className="type-body-sm mt-2 line-clamp-2">{cat.description}</p>
                <Link
                  href={`#menus-${cat.id}`}
                  className="type-label mt-4 inline-flex text-[var(--color-accent)] underline-offset-4 hover:underline"
                >
                  {cat.ctaLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </SectionContainer>
  );
}
