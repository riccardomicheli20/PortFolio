import { AnimatePresence, motion } from "motion/react";

export function Loader({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-black"
        >
          <span className="glitch" data-glitch="PORTFOLIO">
            PORTFOLIO
          </span>
          <span className="text-sm tracking-[0.3em] text-white/60">
            LOADING...
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
