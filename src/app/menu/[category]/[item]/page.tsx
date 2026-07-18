import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MENU_CATEGORIES, MENU_DISCLAIMER, type MenuDataItem } from "@/lib/menuData";

type Props = { params: Promise<{ category: string; item: string }> };

export async function generateStaticParams() {
  return MENU_CATEGORIES.flatMap((cat) =>
    cat.subsections.flatMap((sub) =>
      sub.items.map((item) => ({ category: cat.slug, item: item.slug }))
    )
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, item: itemSlug } = await params;
  const cat = MENU_CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};
  const item = cat.subsections.flatMap((s) => s.items).find((i) => i.slug === itemSlug);
  if (!item) return {};
  return {
    title: `${item.name} — Marez Café`,
    description: item.description || `${item.name} at Marez Café`,
  };
}

function Badges({ item }: { item: MenuDataItem }) {
  if (!item.badges?.length) return null;
  return (
    <span className="inline-flex gap-2">
      {item.badges.includes("v") && (
        <span className="menu-badge menu-badge-v text-xs px-2 py-0.5">Vegetarian</span>
      )}
      {item.badges.includes("df") && (
        <span className="menu-badge menu-badge-df text-xs px-2 py-0.5">Dairy-Free</span>
      )}
    </span>
  );
}

export default async function ItemPage({ params }: Props) {
  const { category, item: itemSlug } = await params;
  const cat = MENU_CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();
  const item = cat.subsections.flatMap((s) => s.items).find((i) => i.slug === itemSlug);
  if (!item) notFound();

  return (
    <div className="menu-page-container">
      <div className="section-container max-w-2xl py-12 md:py-16">
        <div className="mb-2">
          <Link
            href={`/menu/${cat.slug}`}
            className="type-eyebrow inline-flex items-center gap-1.5 transition-colors hover:text-[var(--color-accent)]"
          >
            ← {cat.title}
          </Link>
        </div>

        {/* TODO: swap src for real food photo at same aspect ratio (16:9, e.g. 800×450) */}
        <div className="mt-6 flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)]">
          <p className="type-body-sm text-[var(--color-text-muted)]">Image Coming Soon</p>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h1 className="type-display text-2xl leading-tight md:text-3xl">{item.name}</h1>
            <p className="type-label text-xl font-bold">{item.price}</p>
          </div>

          {item.badges?.length ? (
            <div className="mt-3">
              <Badges item={item} />
            </div>
          ) : null}

          {item.description && (
            <p className="type-body mt-4 leading-relaxed">{item.description}</p>
          )}
        </div>

        <div className="mt-8 rounded-xl border border-[var(--color-border)] p-5">
          <h2 className="type-eyebrow mb-2">Allergens</h2>
          <p className="type-body-sm text-[var(--color-text-muted)]">Coming soon</p>
        </div>

        <footer className="mt-10 border-t border-[var(--color-border)] pt-6">
          <p className="type-body-sm max-w-xl text-[var(--color-text-muted)]">
            {MENU_DISCLAIMER}
          </p>
        </footer>
      </div>
    </div>
  );
}
