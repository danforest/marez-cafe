import Link from "next/link";
import type { Metadata } from "next";
import { MENU_CATEGORIES, MENU_DISCLAIMER } from "@/lib/menuData";

export const metadata: Metadata = {
  title: "Menu — Marez Café",
  description:
    "Breakfast & Brunch, Lunch, Drinks, Kids, Vegan and Gluten-Free menus at Marez Café, Teddington.",
};

export default function MenuLandingPage() {
  return (
    <div className="menu-page-container">
      <div className="section-container py-12 md:py-16">
        <div className="mb-2">
          <Link
            href="/"
            className="type-eyebrow inline-flex items-center gap-1.5 transition-colors hover:text-[var(--color-accent)]"
          >
            ← Back
          </Link>
        </div>

        <header className="mb-10 mt-6 max-w-xl">
          <p className="type-eyebrow">Marez Café</p>
          <h1 className="type-display mt-2">Our Menus</h1>
          <p className="type-body-sm mt-3 max-w-md">
            Everything available all day. Vegan and gluten-free options available —
            see the dedicated menus or ask your server.
          </p>
        </header>

        <nav aria-label="Menu categories">
          <ul className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
            {MENU_CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/menu/${cat.slug}`}
                  className="menu-category-row group"
                >
                  <div>
                    <h2 className="type-heading normal-case text-xl font-semibold uppercase-none group-hover:text-[var(--color-accent)] transition-colors">
                      {cat.title}
                    </h2>
                    <p className="type-body-sm mt-0.5">{cat.description}</p>
                  </div>
                  <span
                    className="shrink-0 text-xl text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="mt-12 border-t border-[var(--color-border)] pt-6">
          <p className="type-body-sm max-w-2xl text-[var(--color-text-muted)]">
            {MENU_DISCLAIMER}
          </p>
        </footer>
      </div>
    </div>
  );
}
