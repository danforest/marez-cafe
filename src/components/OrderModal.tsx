"use client";

import { ArrowLeft, X } from "lucide-react";
import { useEffect, useState } from "react";
import { orderLinks, siteConfig } from "@/lib/siteData";

type View = "choice" | "collection";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialView?: View;
};

export default function OrderModal({ isOpen, onClose, initialView = "choice" }: Props) {
  const [view, setView] = useState<View>(initialView);

  useEffect(() => {
    if (!isOpen) {
      setView(initialView);
      return;
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (view === "collection") setView("choice");
        else onClose();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, view, onClose, initialView]);

  if (!isOpen) return null;

  return (
    <div
      className="collection-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div
        className="collection-modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top-bar: back (collection view only) + close */}
        <div className="mb-5 flex items-center justify-between">
          {view === "collection" ? (
            <button
              type="button"
              onClick={() => setView("choice")}
              className="flex items-center gap-1.5 rounded-full p-1 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
              aria-label="Back to order options"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="type-eyebrow">Back</span>
            </button>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)]"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {view === "choice" ? (
          <>
            <p className="type-eyebrow mb-2">Order from Marez</p>
            <h2
              id="order-modal-title"
              className="type-heading mb-2 text-xl normal-case"
            >
              How would you like to order?
            </h2>
            <p className="type-body-sm mb-6 text-[var(--color-text-muted)]">
              Get it delivered to your door, or collect in-store and save 15%.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={orderLinks.deliveroo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                onClick={onClose}
              >
                Delivery via Deliveroo
              </a>
              <button
                type="button"
                onClick={() => setView("collection")}
                className="btn-outline w-full justify-center"
              >
                Click &amp; Collect, 15% off
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="type-eyebrow mb-2">Order for Collection</p>
            <h2
              id="order-modal-title"
              className="type-heading mb-3 text-xl normal-case"
            >
              15% off when you collect
            </h2>
            <p className="type-body-sm mb-5 text-[var(--color-text-muted)]">
              Skip the queue and save. Order ahead for collection and enjoy
              15% off your bill. Just give us a call and we&apos;ll have it
              ready for you.
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="btn-primary w-full justify-center"
            >
              Call to order: {siteConfig.phone}
            </a>
          </>
        )}
      </div>
    </div>
  );
}
