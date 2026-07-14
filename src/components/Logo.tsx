import { motion } from "motion/react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0 }}
      className="pointer-events-none fixed left-[16px] top-[16px] z-50 w-[124px] mix-blend-exclusion sm:left-[32px] sm:top-[32px] sm:w-[266px] lg:w-[355px]"
    >
      <svg
        viewBox="0 0 430 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <text
          x="0"
          y="92"
          fontFamily="'Inter Tight', sans-serif"
          fontWeight="600"
          fontSize="82"
          letterSpacing="-4"
          fill="white"
        >
          Portfolio
        </text>
      </svg>
    </motion.div>
  );
}
