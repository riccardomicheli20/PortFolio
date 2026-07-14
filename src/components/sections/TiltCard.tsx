import { useState, type ReactNode } from "react";
import { useIsTouchDevice } from "../../hooks/useIsTouchDevice";

export function TiltCard({
  title,
  tag,
  badgeTop,
  badgeMain,
  children,
}: {
  title: string;
  tag?: string;
  badgeTop?: string;
  badgeMain?: string;
  children?: ReactNode;
}) {
  const isTouch = useIsTouchDevice();
  const [active, setActive] = useState(false);

  return (
    <div className="tc-parent">
      <div
        className={`tc-card ${active ? "is-active" : ""}`}
        onClick={isTouch ? () => setActive((v) => !v) : undefined}
      >
        <div className="tc-content-box">
          <span className="tc-card-title">{title}</span>
          {children && <div className="tc-card-content">{children}</div>}
          {tag && <span className="tc-tag">{tag}</span>}
        </div>
        {badgeMain && (
          <div className="tc-date-box">
            {badgeTop && <span className="tc-month">{badgeTop}</span>}
            <span className="tc-date">{badgeMain}</span>
          </div>
        )}
      </div>
    </div>
  );
}
