const ITEMS = [
  "Mediterranean warmth · North African heart",
  "Teddington, London",
  "Order for Collection — 15% off",
  "Mediterranean warmth · North African heart",
  "Feel-Good Feasting",
  "Open Mon–Sat 8am–5pm · Sun 9am–4pm",
];

export default function ScrollingBanner() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div
      className="marquee-wrap overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-surface)] py-3"
      aria-hidden="true"
    >
      <div className="marquee-track flex gap-12">
        {repeated.map((text, i) => (
          <span
            key={i}
            className="type-eyebrow shrink-0 whitespace-nowrap tracking-widest"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
