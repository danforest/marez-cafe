import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MENU_CATEGORIES, MENU_DISCLAIMER, type MenuDataItem } from "@/lib/menuData";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return MENU_CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = MENU_CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.title} — Marez Café`,
    description: cat.description,
  };
}

function Badges({ item }: { item: MenuDataItem }) {
  if (!item.badges?.length) return null;
  return (
    <span className="ml-2 inline-flex gap-1">
      {item.badges.includes("v") && (
        <span className="menu-badge menu-badge-v">V</span>
      )}
      {item.badges.includes("df") && (
        <span className="menu-badge menu-badge-df">DF</span>
      )}
    </span>
  );
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = MENU_CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  return (
    <div className="menu-page-container">
      <div className="section-container py-12 md:py-16">
        <div className="mb-2">
          <Link
            href="/menu"
            className="type-eyebrow inline-flex items-center gap-1.5 transition-colors hover:text-[var(--color-accent)]"
          >
            ← All Menus
          </Link>
        </div>

        <header className="mb-10 mt-6 max-w-xl">
          <p className="type-eyebrow">Marez Café</p>
          <h1 className="type-display mt-2">{cat.title}</h1>
          <p className="type-body-sm mt-3">{cat.description}</p>
        </header>

        {cat.subsections.map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="type-eyebrow mb-1 border-b border-[var(--color-border)] pb-2 text-[var(--color-text)]">
              {section.title}
            </h2>
            <ul className="divide-y divide-[var(--color-border)]" role="list">
              {section.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/menu/${cat.slug}/${item.slug}`}
                    className="menu-item-row group"
                  >
                    <div className="min-w-0">
                      <p className="menu-item-name type-label font-semibold leading-snug transition-colors group-hover:text-[var(--color-accent)]">
                        {item.name}
                        <Badges item={item} />
                      </p>
                      {item.description && (
                        <p className="type-body-sm mt-0.5 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="type-label whitespace-nowrap font-semibold">
                        {item.price}
                      </span>
                      <span
                        className="ml-2 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {cat.footer && (
          <p className="type-body-sm mt-6 border-t border-[var(--color-border)] pt-4 text-[var(--color-text-muted)]">
            {cat.footer}
          </p>
        )}

        <footer className="mt-8 border-t border-[var(--color-border)] pt-6">
          <p className="type-body-sm max-w-2xl text-[var(--color-text-muted)]">
            {MENU_DISCLAIMER}
          </p>
        </footer>
      </div>
    </div>
  );
}
