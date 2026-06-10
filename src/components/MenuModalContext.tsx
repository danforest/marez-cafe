"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import MenuModal from "@/components/MenuModal";

type MenuModalContextValue = {
  openMenu: () => void;
  closeMenu: () => void;
};

const MenuModalContext = createContext<MenuModalContextValue | null>(null);

export function MenuModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <MenuModalContext.Provider value={{ openMenu, closeMenu }}>
      {children}
      <MenuModal isOpen={isOpen} onClose={closeMenu} />
    </MenuModalContext.Provider>
  );
}

export function useMenuModal() {
  const context = useContext(MenuModalContext);
  if (!context) {
    throw new Error("useMenuModal must be used within MenuModalProvider");
  }
  return context;
}

export function useMenuModalOptional() {
  return useContext(MenuModalContext);
}
