"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useSyncExternalStore } from "react";
import { announcement } from "@/lib/siteData";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function emitChange() {
  listeners.forEach((listener) => listener());
}

function getDismissed() {
  return localStorage.getItem(announcement.storageKey) === "true";
}

export default function AnnouncementBanner() {
  const dismissed = useSyncExternalStore(
    subscribe,
    getDismissed,
    () => false,
  );

  const dismiss = () => {
    localStorage.setItem(announcement.storageKey, "true");
    emitChange();
  };

  if (dismissed) return null;

  return (
    <div
      role="banner"
      aria-live="polite"
      className="relative bg-[var(--color-charcoal)] px-6 py-3 text-center text-sm text-[var(--color-cream)]"
    >
      <Link href={announcement.href} className="hover:underline">
        {announcement.text}
      </Link>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Close announcement banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded p-1 transition-colors hover:bg-white/10"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
