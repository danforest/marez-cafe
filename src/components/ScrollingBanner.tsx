import { Fragment } from "react";

const ITEMS = [
  "Mediterranean warmth · North African heart",
  "Teddington, London",
  "Order for Collection — 15% off",
  "Feel-Good Feasting",
  "Open Mon–Sat 8am–5pm · Sun 9am–4pm",
];

export default function ScrollingBanner() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div
      className="marquee-band marquee-wrap overflow-hidden py-2 md:py-3"
      aria-hidden="true"
    >
      <div className="marquee-track flex items-center">
        {repeated.map((text, i) => (
          <Fragment key={i}>
            <span className="banner-item">{text}</span>
            <span className="banner-sep" aria-hidden="true">◆</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
