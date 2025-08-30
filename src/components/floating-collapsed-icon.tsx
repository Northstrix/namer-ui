"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  visible: boolean;
  onClick: () => void;
  isRTL: boolean;
}

export default function FloatingCollapsedIcon({ visible, onClick, isRTL }: Props) {
  const Icon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: isRTL ? "scaleX(-1)" : "none",
        transformOrigin: "center",
      }}
    >
      {/* LTR icon path */}
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20v-16" />
      <path d="M16 4v.01" />
      <path d="M12 4v.01" />
      <path d="M8 4v.01" />
      <path d="M4 4v.01" />
      <path d="M4 8v.01" />
      <path d="M4 12v.01" />
      <path d="M4 16v.01" />
      <path d="M16 20v.01" />
      <path d="M12 20v.01" />
      <path d="M8 20v.01" />
      <path d="M4 20v.01" />
      <path d="M15 12h-6" />
      <path d="M12 9v6" />
    </svg>
  );

  return (
    <motion.button
      initial={{ opacity: 0, y: -20, x: isRTL ? 20 : -20 }}
      animate={
        visible
          ? { opacity: 1, y: 0, x: 0, transition: { delay: 0.2, duration: 0.2, ease: "easeInOut" } }
          : { opacity: 0, y: -20, x: isRTL ? 20 : -20, transition: { duration: 0.2, ease: "easeInOut" } }
      }
      exit={{
        opacity: 0,
        y: -20,
        x: isRTL ? 20 : -20,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      aria-label="Show sidebar"
      onClick={onClick}
      style={{
        position: "fixed",
        top: 12,
        [isRTL ? "right" : "left"]: 12,
        zIndex: 100,
        borderRadius: "50%",
        border: "1px solid hsl(var(--border))",
        background: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
        padding: 8,
        width: 44,
        height: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "none",
        pointerEvents: visible ? "auto" : "none",
        transition: "background 0.3s, border 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "hsl(var(--muted))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "hsl(var(--background))";
      }}
    >
      <Icon />
    </motion.button>
  );
}
