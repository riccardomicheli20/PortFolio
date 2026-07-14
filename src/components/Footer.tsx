export function Footer() {
  return (
    <div
      id="outro-footer"
      className="pointer-events-none fixed z-20 flex flex-row justify-between left-[16px] right-[16px] bottom-[24px] mix-blend-exclusion sm:right-auto sm:w-auto sm:justify-start sm:gap-[80px] sm:bottom-[32px]"
      style={{ opacity: 0 }}
    >
      <span className="text-[11px] uppercase tracking-[-0.02em] text-white sm:text-[13px]">
        PRMPT (R) 2026
      </span>
      <span className="text-[11px] uppercase tracking-[-0.02em] text-white sm:text-[13px]">
        PRIVACY POLICY
      </span>
    </div>
  );
}
