"use client";

import Image from "next/image";
import { footer } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="footer-pattern">
      <span id="order" className="sr-only" />
      <div className="section-container py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Image
            src="/assets/logo2.png"
            alt="Marez"
            width={80}
            height={40}
            style={{ objectFit: "contain" }}
          />
          <div className="flex flex-col gap-1 sm:items-end">
            <p className="text-[var(--color-text-muted)] text-xs">{footer.copyright}</p>
            <p className="text-[var(--color-text-muted)] text-xs">{footer.legal}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
