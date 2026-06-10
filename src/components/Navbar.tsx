"use client";

import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavArrowIcon from "@/components/NavArrowIcon";
import { useMenuModal } from "@/components/MenuModalContext";
import { orderLinks, topNavigation } from "@/lib/siteData";

export default function Navbar() {
  const { openMenu } = useMenuModal();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <>
      <header className="nav-header">
        <nav className="flex items-center gap-3 px-4 py-3.5 sm:gap-4 md:px-10 md:py-4 lg:px-14">
          <Link
            href="/"
            className="logo-text shrink-0 text-base sm:text-lg"
            aria-label="Marez home"
          >
            <Image
              src="/assets/marez-logo.png?v=2"
              alt="Marez"
              width={120}
              height={36}
              unoptimized
              style={{ objectFit: "contain", objectPosition: "left center" }}
              priority
            />
          </Link>

          <ul className="flex min-w-0 flex-1 items-center justify-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide sm:gap-5 md:gap-8">
            {topNavigation.map((item) => (
              <li key={item.label} className="shrink-0">
                <Link href={item.href} className="type-label nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">
            <a
              href="https://www.instagram.com/hello_marez/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-button hidden p-1.5 sm:block"
              aria-label="Marez on Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="nav-icon-button hidden p-1.5 sm:block"
              aria-label="Search"
            >
              <Search className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button
              type="button"
              onClick={openMenu}
              className="btn-nav-menu px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-5"
            >
              Menu
              <NavArrowIcon className="!h-5 !w-5 sm:!h-6 sm:!w-6" />
            </button>
            <a
              href={orderLinks.deliveroo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav-order px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-5"
            >
              <span className="hidden min-[400px]:inline">Order Online</span>
              <span className="min-[400px]:hidden">Order</span>
              <NavArrowIcon className="!h-5 !w-5 sm:!h-6 sm:!w-6" />
            </a>
          </div>
        </nav>
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-[70] bg-[var(--color-text)]/40">
          <div className="mx-auto mt-24 max-w-xl px-6">
            <div className="rounded-lg bg-[var(--color-surface)] p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-[var(--color-text)]/40" />
                <input
                  type="search"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for a dish, location, or page"
                  className="type-body-sm flex-1 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {query && (
                <p className="type-body-sm mt-4">
                  No results for &ldquo;{query}&rdquo;. Try a different term.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
