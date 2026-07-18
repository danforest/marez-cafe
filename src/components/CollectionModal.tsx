"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { siteConfig } from "@/lib/siteData";

type CollectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CollectionModal({ isOpen, onClose }: CollectionModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="collection-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="collection-modal-title"
    >
      <div
        className="collection-modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)]"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="type-eyebrow mb-3">Order for Collection</p>
        <h2
          id="collection-modal-title"
          className="type-heading mb-4 text-xl normal-case"
        >
          15% off when you collect
        </h2>

        <p className="type-body-sm mb-5 text-[var(--color-text-muted)]">
          Skip the queue and save — order ahead for collection and enjoy 15% off
          your bill. Just give us a call and we'll have it ready for you.
        </p>

        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="btn-primary w-full justify-center"
        >
          Call to order — {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
