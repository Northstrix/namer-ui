"use client";
import React, { useEffect, useRef } from "react";

interface PositionAwareButtonProps {
  children?: React.ReactNode;
  buttonWidth?: string;
  borderRadius?: string;
  buttonColor?: string; // main fill
  filamentColor?: string; // center glow
  glossColor?: string; // glossy highlight
  fontSize?: string;
  fontWeight?: string | number;
  foregroundColor?: string; // text/icon color
  fontFamily?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  href?: string; // 🔑 Optional href
}

const PositionAwareButton: React.FC<PositionAwareButtonProps> = ({
  children,
  buttonWidth = "auto",
  borderRadius = "var(--radius)",
  buttonColor = "hsl(var(--foreground))", // default fill
  filamentColor = "hsl(var(--accent))",
  glossColor = "none",
  fontSize,
  fontWeight = "600",
  foregroundColor = "hsl(var(--background))",
  fontFamily,
  onClick,
  href, // new prop
}) => {
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const button = buttonRef.current;
      if (button) {
        const rect = button.getBoundingClientRect();
        const relativeX = e.clientX - rect.left;
        const relativeY = e.clientY - rect.top;
        button.style.setProperty("--x", `${relativeX}px`);
        button.style.setProperty("--y", `${relativeY}px`);
      }
    };
    const button = buttonRef.current;
    if (button) {
      button.addEventListener("mousemove", updatePosition);
      button.addEventListener("mouseenter", updatePosition);
      button.addEventListener("mouseleave", updatePosition);
    }
    return () => {
      if (button) {
        button.removeEventListener("mousemove", updatePosition);
        button.removeEventListener("mouseenter", updatePosition);
        button.removeEventListener("mouseleave", updatePosition);
      }
    };
  }, []);

  // Common style object
  const style: React.CSSProperties = {
    width: buttonWidth,
    borderRadius,
    ["--button-color" as any]: buttonColor,
    ["--filament-color" as any]: filamentColor,
    ["--gloss-color" as any]: glossColor,
    fontSize,
    fontWeight,
    color: foregroundColor,
    fontFamily: fontFamily || undefined,
  };

  // If href → render anchor styled as a button
  if (href) {
    return (
      <a
        ref={buttonRef as any}
        href={href}
        role="button"
        onClick={onClick}
        style={style}
        className="position-aware-button"
      >
        <span className="button-content">{children}</span>
        <style jsx>{`
          @property --r {
            syntax: "<length-percentage>";
            initial-value: 0px;
            inherits: false;
          }
          .position-aware-button {
            place-self: center;
            border: solid 2px #0001;
            padding: 0.5em 1em;
            box-shadow: inset 1px 3px 1px var(--gloss-color);
            background: radial-gradient(
              circle at var(--x, 0%) var(--y, 0%),
              var(--filament-color) calc(var(--r) - 1px),
              var(--button-color) var(--r)
            )
              border-box;
            transition: --r 0.35s;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5em;
            text-decoration: none;
          }
          .position-aware-button:hover {
            --r: 100%;
          }
          .button-content {
            display: inline-block;
          }
        `}</style>
      </a>
    );
  }

  // Otherwise, regular <button>
  return (
    <button ref={buttonRef as any} onClick={onClick} style={style}>
      <span className="button-content">{children}</span>
      <style jsx>{`
        @property --r {
          syntax: "<length-percentage>";
          initial-value: 0px;
          inherits: false;
        }
        button {
          place-self: center;
          border: solid 2px #0001;
          padding: 0.5em 1em;
          box-shadow: inset 1px 3px 1px var(--gloss-color);
          background: radial-gradient(
            circle at var(--x, 0%) var(--y, 0%),
            var(--filament-color) calc(var(--r) - 1px),
            var(--button-color) var(--r)
          )
            border-box;
          transition: --r 0.35s;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5em;
        }
        button:hover {
          --r: 100%;
        }
        .button-content {
          display: inline-block;
        }
      `}</style>
    </button>
  );
};

export default PositionAwareButton;
