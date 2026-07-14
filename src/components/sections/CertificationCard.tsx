import { useState } from "react";
import { useIsTouchDevice } from "../../hooks/useIsTouchDevice";

export function CertificationCard() {
  const isTouch = useIsTouchDevice();
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="ccard-card"
      onClick={isTouch ? () => setFlipped((v) => !v) : undefined}
    >
      <div className={`ccard-inner ${flipped ? "is-flipped" : ""}`}>
        <div className="ccard-back">
          <div className="ccard-circle ccard-circle-bottom" />
          <div className="ccard-circle ccard-circle-right" />
          <div className="ccard-back-content">
            <svg
              viewBox="0 0 40 40"
              className="h-9 w-9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="#34bfd0"
                strokeWidth="2"
              />
              <path
                d="M12 20.5 17 25.5 28 14.5"
                stroke="#34bfd0"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[13px] font-extrabold tracking-tight text-white">
                ANTHROPIC
              </span>
              <span className="text-[9px] uppercase tracking-[0.15em] text-white/50">
                Claude Code
              </span>
            </div>
          </div>
        </div>

        <div className="ccard-front">
          <div className="ccard-front-content">
            <span className="ccard-badge">Certificato</span>
            <div className="ccard-description">
              <p className="ccard-title">Claude Code in Action</p>
              <p className="ccard-subtitle">Riccardo Micheli</p>
              <p className="ccard-footer">Anthropic · Certificate of Completion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
