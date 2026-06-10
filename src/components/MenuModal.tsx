"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { useEffect, useState } from "react";
import MenuBoardView from "@/components/MenuBoardView";
import { menuBoards, type MenuBoardId } from "@/lib/menuBoards";

const menuOptions: { id: MenuBoardId; label: string }[] = [
  { id: "brunch", label: "Brunch" },
  { id: "lunch", label: "Lunch" },
  { id: "kids", label: "Kids" },
  { id: "glutenFreeVegan", label: "Gluten Free / Vegan" },
  { id: "drinks", label: "Drinks" },
];

type MenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MenuModal({ isOpen, onClose }: MenuModalProps) {
  const [activeMenu, setActiveMenu] = useState<MenuBoardId | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setActiveMenu(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeMenu) setActiveMenu(null);
        else onClose();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, activeMenu, onClose]);

  const activeOption = menuOptions.find((o) => o.id === activeMenu);
  const activeBoard = activeMenu ? menuBoards[activeMenu] : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[var(--color-text)]/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-modal-title"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.25 }}
            className={`fixed left-1/2 top-1/2 z-[101] flex max-h-[min(92vh,900px)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-[var(--color-surface)] shadow-2xl ${
              activeMenu
                ? "w-[calc(100%-1.5rem)] max-w-4xl"
                : "w-[calc(100%-2rem)] max-w-md"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-[var(--color-border)] px-5 py-4 md:px-6">
              <div className="flex items-center gap-3">
                {activeMenu && (
                  <button
                    type="button"
                    onClick={() => setActiveMenu(null)}
                    className="rounded-full p-1.5 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)]"
                    aria-label="Back to menu list"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                )}
                <h2
                  id="menu-modal-title"
                  className="type-heading text-base normal-case md:text-lg"
                >
                  {activeOption ? activeOption.label : "Our Menus"}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-1.5 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)]"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {!activeMenu ? (
              <ul className="space-y-2 overflow-y-auto p-4 md:p-6">
                {menuOptions.map((option) => (
                  <li key={option.id}>
                    <button
                      type="button"
                      onClick={() => setActiveMenu(option.id)}
                      className="type-label flex w-full items-center justify-between rounded-xl border border-[var(--color-border)] px-5 py-4 text-left text-base transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-bg)]"
                    >
                      {option.label}
                      <span className="text-[var(--color-text-muted)]">→</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              activeBoard && (
                <div className="overflow-y-auto">
                  <MenuBoardView board={activeBoard} />
                </div>
              )
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
