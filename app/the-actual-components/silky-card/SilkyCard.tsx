"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Silk, { SilkProps } from "./Silk";

interface SilkyCardProps extends SilkProps {
  order?: number;
  isMobile?: boolean;
  align?: "flex-start" | "flex-end";
  textAlign?: "left" | "right";
  textDirection?: "ltr" | "rtl";
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
  children?: React.ReactNode;
  /** Outer container border-radius (external rounding) */
  outerBorderRadius?: string;
  /** Inner container border-radius (internal rounding) */
  innerBorderRadius?: string;
  /** Background color of the card (inner container background) */
  backgroundColor?: string;
  /** Outer border color simulated by container background */
  borderColor?: string;
  /** Outer border color when hovered (background of outer container) */
  borderColorHover?: string;
  /** Thickness of the simulated border using padding on outer container, default 1px */
  borderWidth?: string;
  /** CSS transition for the outer background color (default 'background-color 0.3s ease') */
  borderColorTransition?: string;
}

const SilkyCard: React.FC<SilkyCardProps> = ({
  // Silk animation props with defaults
  speed = 5,
  scale = 1,
  color = "#7B7481",
  noiseIntensity = 1.5,
  rotation = 0,
  isRTL = false,
  order = 0,
  isMobile = false,
  align = "flex-start",
  textAlign = "left",
  textDirection = "ltr",
  onClick,
  style = {},
  hoverStyle = {},
  children,
  outerBorderRadius = "18.2px",
  innerBorderRadius = "18px",
  backgroundColor = "var(--card-background)",
  borderColor = "#2e2e2e",
  borderColorHover = "#494949",
  borderWidth = "1px",
  borderColorTransition = "background-color 0.3s ease",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = isHovered;

  const handleCardClick = (e: React.MouseEvent) => {
    if (
      (e.target as HTMLElement).closest("button") ||
      (e.target as HTMLElement).closest('[role="button"]')
    ) {
      return;
    }
    if (onClick) onClick(e);
  };

  return (
    <motion.div
      style={{
        order,
        direction: textDirection,
        cursor: "pointer",
        minWidth: 0,
        flex: isMobile ? "unset" : "1 1 0%",
        borderRadius: outerBorderRadius,
        backgroundColor: isActive ? borderColorHover : borderColor,
        padding: borderWidth, // thickness of the simulated border
        boxSizing: "border-box",
        transition: borderColorTransition,
        ...style,
        ...(isActive ? hoverStyle : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div
        style={{
          borderRadius: innerBorderRadius,
          backgroundColor: backgroundColor,
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          position: "relative",
          overflow: "hidden",
          alignItems: align,
          textAlign,
          direction: textDirection,
        }}
      >
        {/* Silk overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            borderRadius: innerBorderRadius,
            overflow: "hidden",
            pointerEvents: "none",
            opacity: isActive ? 1 : 0,
            transition: "opacity 1s",
            background: "transparent",
          }}
        >
          <Silk
            speed={speed}
            scale={scale}
            color={color}
            noiseIntensity={noiseIntensity}
            rotation={rotation}
            isRTL={isRTL}
          />
        </div>
        {/* Content above Silk */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default SilkyCard;
