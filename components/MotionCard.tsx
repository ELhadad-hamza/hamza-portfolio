"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionCardProps = {
  children: ReactNode;
  className?: string;
};

export default function MotionCard({
  children,
  className = "",
}: MotionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}