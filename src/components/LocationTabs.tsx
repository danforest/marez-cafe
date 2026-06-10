"use client";

import { locations } from "@/lib/siteData";

type LocationTabsProps = {
  activeId: string;
  onChange: (id: string) => void;
};

export default function LocationTabs({
  activeId,
  onChange,
}: LocationTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      <button
        type="button"
        onClick={() => onChange("all")}
        aria-pressed={activeId === "all"}
        className={`type-label shrink-0 rounded-full px-5 py-2 transition-colors ${
          activeId === "all"
            ? "bg-[var(--color-charcoal)] text-[var(--color-cream)]"
            : "border border-[var(--color-charcoal)]/20 text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)]"
        }`}
      >
        All Locations
      </button>
      {locations.map((loc) => (
        <button
          key={loc.id}
          type="button"
          onClick={() => onChange(loc.id)}
          aria-pressed={activeId === loc.id}
          className={`type-label shrink-0 rounded-full px-5 py-2 transition-colors ${
            activeId === loc.id
              ? "bg-[var(--color-charcoal)] text-[var(--color-cream)]"
              : "border border-[var(--color-charcoal)]/20 text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)]"
          }`}
        >
          {loc.name.replace("Marez ", "")}
        </button>
      ))}
    </div>
  );
}
