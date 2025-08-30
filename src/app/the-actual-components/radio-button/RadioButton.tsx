"use client";

import React, { useState } from "react";
import { LucideIcon } from "lucide-react";

interface RadioOption {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface RadioButtonProps {
  options: RadioOption[];
  onChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
  activeBg?: string;
  activeFg?: string;
  inactiveBg?: string;
  inactiveFg?: string;
  hoverBg?: string;
  gap?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
  iconSize?: number;
  iconStrokeWidth?: number;
  itemGap?: string;
  enableOutline?: boolean;
  outlineWidth?: string;
  outlineColor?: string;
  height?: string | null;
}

export default function RadioButton({
  options,
  onChange,
  value,
  defaultValue = options[0]?.value,
  activeBg = "#393643",
  activeFg = "#fff",
  inactiveBg = "none",
  inactiveFg = "#aaa",
  hoverBg = "#23222a",
  gap = "14px",
  borderRadius = "8px",
  padding = "0 20px",
  fontSize = "1rem",
  iconSize = 20,
  iconStrokeWidth = 2,
  itemGap = "8px",
  enableOutline = false,
  outlineWidth = "1px",
  outlineColor = "#403d4d",
  height = "40px",
}: RadioButtonProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hovered, setHovered] = useState<string | null>(null);
  const activeTab = value !== undefined ? value : internalValue;

  const handleChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const getButtonStyle = (optionValue: string): React.CSSProperties => {
    const isActive = activeTab === optionValue;
    const isHovered = hovered === optionValue;

    const style: React.CSSProperties = {
      display: "flex",
      alignItems: "center",
      gap: itemGap,
      padding,
      fontSize,
      border: enableOutline ? `${outlineWidth} solid ${outlineColor}` : "none",
      borderRadius,
      fontWeight: 500,
      cursor: "pointer",
      outline: "none",
      userSelect: "none" as React.CSSProperties["userSelect"],
      margin: 0,
      background: isActive ? activeBg : isHovered ? hoverBg : inactiveBg,
      color: isActive ? activeFg : inactiveFg,
      transition: "background 0.2s ease, color 0.2s ease",
    };
    if (height) style.height = height;
    return style;
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 0,
        marginTop: "18px",
        gap,
      }}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-label={option.label}
          onClick={() => handleChange(option.value)}
          onMouseEnter={() => setHovered(option.value)}
          onMouseLeave={() => setHovered(null)}
          style={getButtonStyle(option.value)}
        >
          <span style={{ display: "inline-flex" }}>
            <option.icon
              color={activeTab === option.value ? activeFg : inactiveFg}
              size={iconSize}
              strokeWidth={iconStrokeWidth}
            />
          </span>
          <span style={{ display: "inline-block", verticalAlign: "middle" }}>
            {option.label}
          </span>
        </button>
      ))}
    </div>
  );
}