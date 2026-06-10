"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { promoModal } from "@/lib/siteData";

export default function PromoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(promoModal.storageKey);
    if (!seen) {
      const timer = setTimeout(() => setOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    sessionStorage.setItem(promoModal.storageKey, "true");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[var(--color-charcoal)]/60"
            onClick={close}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="promo-modal-title"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[var(--color-cream)] p-8 shadow-xl"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="type-body-sm absolute right-4 top-4 text-[var(--color-charcoal)]/50 hover:text-[var(--color-charcoal)]"
            >
              ✕
            </button>
            <h2
              id="promo-modal-title"
              className="type-display text-2xl md:text-3xl"
            >
              {promoModal.title}
            </h2>
            <p className="type-body-sm mt-4">
              {promoModal.description}
            </p>
            <Link
              href={promoModal.cta.href}
              onClick={close}
              className="mt-6 inline-block rounded-full bg-[var(--color-terracotta)] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {promoModal.cta.label}
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
