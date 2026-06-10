"use client";

import Image from "next/image";
import { useState } from "react";
import { dishImageFallbacks } from "@/lib/dishImages";

type DishPhotoProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export default function DishPhoto({
  src,
  alt,
  priority = false,
  sizes = "200px",
  className = "object-cover",
}: DishPhotoProps) {
  const fallback = dishImageFallbacks[src];
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  if (failed && !fallback) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-[var(--color-bg)] p-3 text-center`}
        aria-label={alt}
      >
        <span className="text-xs text-[var(--color-text-muted)]">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => {
        if (fallback && currentSrc !== fallback) {
          setCurrentSrc(fallback);
          return;
        }
        setFailed(true);
      }}
    />
  );
}
