"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionButtonProps = {
  children: ReactNode;
  className?: string;
};

export default function MotionButton({
  children,
  className = "",
}: MotionButtonProps) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}