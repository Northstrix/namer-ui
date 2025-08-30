
"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";

interface ModalOverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}

export function ModalOverlay({ children, onClose }: ModalOverlayProps) {
  useEffect(() => {
    // When the overlay mounts, disable scrolling on the body
    document.body.style.overflow = "hidden";

    // When the overlay unmounts, re-enable scrolling
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      style={{
        background: "rgba(21, 20, 25, 0.7)",
        backdropFilter: "blur(5px) saturate(94%)",
      }}
      onClick={onClose}
    >
      {children}
    </motion.div>
  );
}