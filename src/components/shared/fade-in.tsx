"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  distance?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  distance = 32, // Slightly increased distance for a more deliberate slide
}: FadeInProps) {
  const directionOffset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        // High-stiffness, well-damped spring for organic fluidity
        type: "spring",
        stiffness: 80,
        damping: 18,
        mass: 0.8,
        restDelta: 0.001,
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
