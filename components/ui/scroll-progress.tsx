"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 inset-x-0 h-[2px] z-[60] origin-left pointer-events-none"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #8FA8FF, #B388FF, #3DDC84)",
      }}
    />
  );
}
