import { type ReactNode } from "react";

type LandingFrameProps = {
  children: ReactNode;
  panelClassName?: string;
};

export default function LandingFrame({
  children,
  panelClassName = "",
}: LandingFrameProps) {
  return (
    <div className="landing-frame">

      <div className="landing-dotted-wrap">
        <div className={`landing-panel ${panelClassName}`.trim()}>{children}</div>
      </div>
    </div>
  );
}
