"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  id,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div id={id} ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      ref={ref}
      className={className}
      initial={{ opacity: 1, y: 20 }}
      animate={{ opacity: 1, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
