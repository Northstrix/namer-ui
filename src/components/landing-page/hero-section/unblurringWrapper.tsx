"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface UnblurringWrapperProps {
  children: ReactNode;
  delay?: number;      // reveal delay after render (default 1.5s)
  duration?: number;   // reveal animation duration (default 0.5s)
}

/**
 * Wraps children with an opacity 0 + blur state,
 * keeps them mounted immediately, then after `delay`
 * smoothly reveals them within `duration`.
 */
const UnblurringWrapper = ({
  children,
  delay = 1.5,
  duration = 0.32,
}: UnblurringWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ delay, duration, ease: "easeOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default UnblurringWrapper;
