/**
 * Dish photos in public/images/dishes/
 */
export const dishImages = {
  shakshukaMarez: "/images/dishes/shakshuka-marez.jpg",
  helenasBap: "/images/dishes/helenas-bap.jpg",
  acaiBowl: "/images/dishes/acai-bowl.jpg",
  crunchyNutFrenchToast: "/images/dishes/crunchy-nut-french-toast.jpg",
  ranchero: "/images/dishes/ranchero.jpg",
  spicyScrambledEggs: "/images/dishes/spicy-scrambled-eggs.jpg",
} as const;

/** Fallbacks only for dishes without a local file yet */
export const dishImageFallbacks: Partial<Record<string, string>> = {};
