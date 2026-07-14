import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { scrollToSection } from "./sections/ui";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const MENU_ITEMS = [
  { label: "Formazione", index: 1 },
  { label: "Competenze", index: 2 },
  { label: "Esperienze", index: 3 },
];

export function HeaderNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
      className="pointer-events-none fixed right-[16px] top-[16px] z-[5] flex flex-col items-end sm:right-[32px] sm:top-[32px]"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
        aria-expanded={open}
        className="pointer-events-auto flex h-[30px] w-[24px] items-center justify-center mix-blend-exclusion sm:w-[30px]"
      >
        <svg
          viewBox="0 0 40 40"
          className="h-[24px] w-[24px] sm:h-[30px] sm:w-[30px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 14H40" stroke="white" strokeWidth="2.5" />
          <path d="M0 26H40" stroke="white" strokeWidth="2.5" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="pointer-events-auto mt-3 flex flex-col items-end gap-2"
          >
            {MENU_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                className="nav-menu-btn"
                onClick={() => {
                  scrollToSection(item.index);
                  setOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
