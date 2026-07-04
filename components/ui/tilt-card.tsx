"use client";

import { useState } from "react";
import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export function TiltCard({
  children,
  className = "",
  glowColor = "#8FA8FF",
}: {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const [hovered, setHovered] = useState(false);

  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const rotateX = useSpring(rotateXValue, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(rotateYValue, { stiffness: 200, damping: 20 });

  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowBackground = useMotionTemplate`radial-gradient(220px circle at ${glowX}% ${glowY}%, ${glowColor}22, transparent 65%)`;

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateXValue.set((0.5 - py) * 14);
    rotateYValue.set((px - 0.5) * 14);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const handlePointerLeave = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
    setHovered(false);
  };

  return (
    <div
      style={{ perspective: 800 }}
      className="h-full"
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.015 }}
        className={"relative h-full " + className}
      >
        {children}
        <motion.div
          aria-hidden="true"
          style={{ background: glowBackground }}
          className={`absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </motion.div>
    </div>
  );
}
