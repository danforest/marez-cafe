"use client";

import { useMenuModal } from "@/components/MenuModalContext";

type OpenMenuButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export default function OpenMenuButton({
  className,
  children,
}: OpenMenuButtonProps) {
  const { openMenu } = useMenuModal();

  return (
    <button type="button" onClick={openMenu} className={className}>
      {children}
    </button>
  );
}
