"use client";
import React, { useState } from "react";

interface ChronicleButtonProps {
  text: string;
  onClick?: (...args: any[]) => void;
  hoverColor?: string;
  hoverForeground?: string;
  width?: string;
  outlined?: boolean;
  outlinePaddingAdjustment?: string;
  borderRadius?: string;
  fontFamily?: string;
  outlinedButtonBackgroundOnHover?: string;
  customBackground?: string;
  customForeground?: string;
  fontSize?: string;
  lineHeight?: string;
  outlineBorderWidth?: string;
  padding?: string;
}

const ChronicleButton: React.FC<ChronicleButtonProps> = ({
  text,
  onClick,
  hoverColor = "#a594fd",
  hoverForeground,
  width = "160px",
  outlined = false,
  outlinePaddingAdjustment = "2px",
  borderRadius = "8px",
  fontFamily,
  outlinedButtonBackgroundOnHover = "transparent",
  customBackground = "#f0f0f1",
  customForeground = "#1a1a24",
  fontSize = "1.025rem",
  lineHeight = "1",
  outlineBorderWidth = "1px",
  padding,
}) => {
  // hover state (for outlined pseudo-element color swap)
  const [hovered, setHovered] = useState(false);

  // button base styles
  const buttonStyle: React.CSSProperties = {
    width,
    borderRadius,
    fontFamily,
    background: outlined ? "transparent" : customBackground,
    color: outlined ? customBackground : customForeground,
    padding: padding
      ? padding
      : outlined
      ? `calc(1rem - ${outlinePaddingAdjustment}) 1.232rem`
      : "1rem 1.232rem",
    border: outlined ? `${outlineBorderWidth} solid ${customBackground}` : "none",
    transition:
      "background 0.3s ease-in-out, color 0.3s ease-in-out, border 0.3s ease-in-out, padding 0.3s ease-in-out",
    position: "relative",
    ...(outlined && hovered
      ? { ["--chronicle-outlined-hover-bg" as any]: outlinedButtonBackgroundOnHover }
      : { ["--chronicle-outlined-hover-bg" as any]: "transparent" }),
  };

  const emStyle: React.CSSProperties = {
    fontSize,
    lineHeight,
    fontWeight: 700,
    color: outlined
      ? hovered
        ? hoverForeground || hoverColor
        : customBackground
      : undefined,
  };

  // hover handlers
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setHovered(true);
    const btn = e.currentTarget;
    if (outlined) {
      btn.style.borderColor = hoverColor;
      btn.style.color = hoverForeground || hoverColor;
    } else {
      btn.style.background = hoverColor;
      btn.style.color = hoverForeground || customForeground;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setHovered(false);
    const btn = e.currentTarget;
    btn.style.background = outlined ? "transparent" : customBackground;
    btn.style.color = outlined ? customBackground : customForeground;
    if (outlined) {
      btn.style.borderColor = customBackground;
    }
  };

  return (
    <>
      <button
        className={`chronicleButton${outlined ? " outlined" : ""}${
          outlined && hovered ? " chronicle-hovered" : ""
        }`}
        onClick={onClick}
        style={buttonStyle}
        type="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {outlined ? (
          // OUTLINED: simple single span text
          <span>
            <em style={emStyle}>{text}</em>
          </span>
        ) : (
          // DEFAULT: flipping text animation (two stacked spans)
          <>
            <span className="chronicle-fade chronicle-fade-in">
              <em style={emStyle}>{text}</em>
            </span>
            <span>
              <em style={emStyle}>{text}</em>
            </span>
          </>
        )}
      </button>

      {/* 🔥 Styles embedded at render time (prevents flicker) */}
      <style jsx>{`
        .chronicleButton {
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          line-height: 1;
          padding: 1rem 1.232rem;
          cursor: pointer;
          border: none;
          font-weight: 700;
          background: #f0f0f1;
          color: #1a1a24;
          transition: background 0.3s ease-in-out, color 0.3s ease-in-out,
            border 0.3s ease-in-out, padding 0.3s ease-in-out;
          will-change: background, color, border, padding;
          position: relative;
        }

        .chronicleButton span {
          position: relative;
          display: block;
          perspective: 108px;
        }

        .chronicleButton .chronicle-fade {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .chronicleButton .chronicle-fade-in {
          opacity: 1;
        }

        .chronicleButton span:nth-of-type(2) {
          position: absolute;
        }

        .chronicleButton em {
          font-style: normal;
          display: inline-block;
          font-size: 1.025rem;
          line-height: 1;
          will-change: transform, opacity, color;
          transition: color 0.3s ease-in-out,
            transform 0.55s cubic-bezier(0.645, 0.045, 0.355, 1),
            opacity 0.35s linear 0.2s;
        }

        .chronicleButton span:nth-of-type(1) em {
          transform-origin: top;
        }

        .chronicleButton span:nth-of-type(2) em {
          opacity: 0;
          transform: rotateX(-90deg) scaleX(0.9) translate3d(0, 10px, 0);
          transform-origin: bottom;
        }

        .chronicleButton:hover span:nth-of-type(1) em {
          opacity: 0;
          transform: rotateX(90deg) scaleX(0.9) translate3d(0, -10px, 0);
        }

        .chronicleButton:hover span:nth-of-type(2) em {
          opacity: 1;
          transform: rotateX(0deg) scaleX(1) translateZ(0);
          transition: color 0.3s ease-in-out,
            transform 0.75s cubic-bezier(0.645, 0.045, 0.355, 1),
            opacity 0.35s linear 0.3s;
        }

        /* --- OUTLINED VARIANT --- */
        .chronicleButton.outlined {
          background: transparent;
          transition: border 0.3s ease-in-out, color 0.3s ease-in-out,
            background-color 0.3s ease-in-out, padding 0.3s ease-in-out;
          will-change: border, color, background, padding;
          position: relative;
          z-index: 0;
        }

        .chronicleButton.outlined em {
          transition: color 0.3s ease-in-out;
          position: relative;
          z-index: 1;
        }

        .chronicleButton.outlined::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: transparent;
          z-index: 0;
          transition: background 0.3s ease-in-out;
          pointer-events: none;
        }

        .chronicleButton.outlined.chronicle-hovered::before {
          background: var(--chronicle-outlined-hover-bg, transparent);
        }

        /* Disable flip animation for outlined */
        .chronicleButton.outlined span,
        .chronicleButton.outlined span:nth-of-type(2),
        .chronicleButton.outlined span:nth-of-type(1) em,
        .chronicleButton.outlined span:nth-of-type(2) em {
          transform: none !important;
          opacity: 1 !important;
          transition: color 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default ChronicleButton;