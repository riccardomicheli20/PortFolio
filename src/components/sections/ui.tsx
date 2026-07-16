import type { ReactNode } from "react";

export const ACCENT = "#34bfd0";

export function scrollToSection(index: number) {
  window.scrollTo({
    top: (index + 1) * window.innerHeight,
    behavior: "smooth",
  });
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="nav-menu-btn mb-4 inline-block" style={{ cursor: "default" }}>
      {children}
    </span>
  );
}

export function SectionShell({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative flex h-screen w-full flex-col justify-start overflow-hidden bg-black px-5 pb-6 pt-14 sm:px-12 sm:pb-6 sm:pt-28 lg:px-24 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
          style={{ background: `${ACCENT}14` }}
        />
      </div>
      <div
        className="mx-auto max-h-[calc(100vh-80px)] w-full max-w-6xl overflow-y-auto pb-6 sm:max-h-[calc(100vh-136px)] lg:max-h-[calc(100vh-152px)]"
        style={{
          WebkitOverflowScrolling: "touch",
          minHeight: 0,
          contain: "layout",
        }}
      >
        {children}
      </div>
    </section>
  );
}
