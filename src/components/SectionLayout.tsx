import { type ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function SectionContainer({
  children,
  id,
  className = "",
}: SectionContainerProps) {
  return (
    <section id={id} className={className}>
      <div className="section-container">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  align = "left",
  children,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "section-header-center" : "section-header";

  return (
    <header className={`${alignClass} ${className}`}>
      {eyebrow && <p className="type-eyebrow">{eyebrow}</p>}
      <h2 className="type-display">{title}</h2>
      {children && <div className="type-body section-intro">{children}</div>}
    </header>
  );
}
