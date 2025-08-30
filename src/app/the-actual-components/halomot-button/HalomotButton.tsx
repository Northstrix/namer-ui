"use client";
import React, { useState, useRef } from "react";

interface HalomotButtonProps {
  gradient?: string;
  inscription: string;
  onClick?: () => void;
  fillWidth?: boolean;
  fixedWidth?: string;
  href?: string;
  backgroundColor?: string;
  icon?: React.ReactElement;
  borderWidth?: string;
  padding?: string;
  outerBorderRadius?: string;
  innerBorderRadius?: string;
  textColor?: string;
  hoverTextColor?: string;
}

const HalomotButton: React.FC<HalomotButtonProps> = ({
  gradient = "linear-gradient(135deg, #4776cb, #a19fe5, #6cc606)",
  inscription,
  onClick,
  fillWidth = false,
  fixedWidth,
  href,
  backgroundColor = "#000",
  icon,
  borderWidth = "1px",
  padding,
  outerBorderRadius = "6.34px",
  innerBorderRadius = "6px",
  textColor = "#fff",
  hoverTextColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [delayedColor, setDelayedColor] = useState<string | undefined>(undefined);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const containerStyle: React.CSSProperties = fixedWidth
    ? { width: fixedWidth, display: "inline-block" }
    : {};

  const buttonStyle: React.CSSProperties = {
    margin: fillWidth || fixedWidth ? "0" : "auto",
    padding: borderWidth,
    background: gradient,
    border: "0",
    borderRadius: outerBorderRadius,
    color: textColor,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    userSelect: "none",
    WebkitUserSelect: "none",
    whiteSpace: "nowrap",
    transition: "all .3s",
    width: fillWidth || fixedWidth ? "100%" : "fit-content",
    flexDirection: "row",
    boxSizing: "border-box",
  };

  const spanStyle: React.CSSProperties = {
    background: isHovered ? "none" : backgroundColor,
    padding: padding ?? (fillWidth || fixedWidth ? "1rem 0" : "1rem 4rem"),
    border: "0",
    borderRadius: innerBorderRadius,
    width: "100%",
    height: "100%",
    transition: hoverTextColor
      ? "color 0.3s, background 300ms"
      : "background 300ms",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: delayedColor ? delayedColor : textColor,
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    fontSize: "1rem",
    gap: icon ? "0.5em" : 0,
    flexDirection: "row",
    boxSizing: "border-box",
    cursor: "pointer",
  };

  const iconStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    height: "1em",
    width: "1em",
    fontSize: "1.1em",
    verticalAlign: "middle",
    flexShrink: 0,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (hoverTextColor) {
      setDelayedColor(hoverTextColor);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setDelayedColor(undefined);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  const ButtonContent = (
    <span
      style={spanStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && React.cloneElement(icon, { style: iconStyle })}
      {inscription}
    </span>
  );

  const ButtonElement = href ? (
    <a href={href} style={buttonStyle} onClick={handleClick}>
      {ButtonContent}
    </a>
  ) : (
    <button type="button" style={buttonStyle} onClick={handleClick}>
      {ButtonContent}
    </button>
  );

  return fixedWidth ? (
    <div style={containerStyle}>{ButtonElement}</div>
  ) : (
    ButtonElement
  );
};

export default HalomotButton;