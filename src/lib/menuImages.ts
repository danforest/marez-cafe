import type { MenuBoardId } from "@/lib/menuBoards";

export const menuImages = {
  brunch: "/images/menus/brunch.jpg",
  lunch: "/images/menus/lunch.jpg",
  glutenFreeVegan: "/images/menus/gluten-free-vegan.jpg",
  drinks: "/images/menus/drinks.jpg",
  kids: "/images/menus/kids.jpg",
} as const satisfies Record<MenuBoardId, string>;
