'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "ChronicleButton.tsx" file
import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton'

<div className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  {/* Original examples */}
  <ChronicleButton 
    text='Hover Me'
    onClick={() => console.log("The first button has been clicked")} 
  />
  <ChronicleButton 
    text='Blue (1.4em)'
    onClick={() => console.log('The blue button has been clicked')} 
    width="200px"
    hoverColor="#90BAFD"
    borderRadius="1.4em"
  />
  <ChronicleButton 
    text="Outlined (-6px)" 
    onClick={() => console.log("The outlined button has been clicked")} 
    hoverColor="#CC8DFD"
    width="200px"
    outlined={true}
    outlinePaddingAdjustment="6px"
  />
  <ChronicleButton
    text="Custom Padding"
    onClick={() => console.log("Custom Padding clicked")}
    width="auto"
    outlined={true}
    outlinePaddingAdjustment="0px"
    borderRadius="2.5em"
    outlineBorderWidth="3px"
    customBackground="#7c3aed"
    customForeground="#fff"
    outlinedButtonBackgroundOnHover="#ede9fe"
    hoverColor="#a21caf"
    fontSize="1.2em"
    fontFamily="Arial Black, Arial, sans-serif"
    padding="1.5em 2.5em"
    hoverForeground = "#222"
  />
  <ChronicleButton
    text="Oceanic"
    onClick={() => console.log("Oceanic clicked")}
    width="210px"
    borderRadius="2em"
    customBackground="#00a0d8"
    customForeground="#fff"
    hoverColor="#fff"
    hoverForeground="#0a0a0a"
    fontSize="1.1em"
    fontFamily="Verdana, Geneva, sans-serif"
    padding="1.3em 2em"
  />
</div>

// Note: The ChronicleButton component accepts the following props:
// - text: string (required) - The text to display on the button, serving as the primary label for user interaction.
// - onClick: (...args: any[]) => void (optional) - A callback function triggered when the button is clicked. 
//   Accepts any number of arguments, including the click event, for maximum flexibility.
// - hoverColor: string (optional) - The background color of the button on hover, providing visual feedback (default: '#a594fd').
// - hoverForeground: string (optional) - The text color of the button on hover, for enhanced contrast and interactivity (default: '#1a1a24').
// - width: string (optional) - Sets the width of the button for flexible layout control (default: '160px').
// - outlined: boolean (optional) - If true, renders the button in outlined style for secondary or alternative actions (default: false).
// - outlinePaddingAdjustment: string (optional) - Adjusts the vertical padding for outlined buttons, allowing precise spacing control (default: '2px').
// - borderRadius: string (optional) - Sets the border radius for the button, enabling rounded corners to match your UI (default: '8px').
// - fontFamily: string (optional) - Customizes the font family used in the button, ensuring typographic consistency.
// - outlinedButtonBackgroundOnHover: string (optional) - The background color of the button when hovered in outlined mode (default: 'transparent').
// - customBackground: string (optional) - The background color of the button in its default (non-hovered) state (default: '#f0f0f1').
// - customForeground: string (optional) - The text color of the button in its default (non-hovered) state (default: '#1a1a24').
// - fontSize: string (optional) - Sets the font size of the button text for better scalability (default: '1.025rem').
// - lineHeight: string (optional) - Controls the line height of the button text for vertical alignment (default: '1').
// - outlineBorderWidth: string (optional) - Sets the border width for outlined buttons, allowing for bold or subtle outlines (default: '1px').
// - padding: string (optional) - Allows full customization of the button's padding, overriding the default or outlined padding.
`,
code: [
  {
    filename: 'ChronicleButton.tsx',
    content: `"use client";
import React, { useEffect, useState } from "react";

// Inline CSS for animation and structure
const styles = \`
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
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out, border 0.3s ease-in-out, padding 0.3s ease-in-out;
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
  will-change: transform, opacity, color, transition;
  transition: color 0.3s ease-in-out, transform 0.55s cubic-bezier(.645,.045,.355,1), opacity 0.35s linear 0.2s;
}
.chronicleButton span:nth-of-type(1) em {
  transform-origin: top;
}
.chronicleButton span:nth-of-type(2) em {
  opacity: 0;
  transform: rotateX(-90deg) scaleX(.9) translate3d(0,10px,0);
  transform-origin: bottom;
}
.chronicleButton:hover span:nth-of-type(1) em {
  opacity: 0;
  transform: rotateX(90deg) scaleX(.9) translate3d(0,-10px,0);
}
.chronicleButton:hover span:nth-of-type(2) em {
  opacity: 1;
  transform: rotateX(0deg) scaleX(1) translateZ(0);
  transition: color 0.3s ease-in-out, transform 0.75s cubic-bezier(.645,.045,.355,1), opacity 0.35s linear 0.3s;
}
.chronicleButton.outlined {
  background: transparent;
  transition: border 0.3s ease-in-out, color 0.3s ease-in-out, background-color 0.3s ease-in-out, padding 0.3s ease-in-out;
  will-change: border, color, background, padding;
  position: relative;
  z-index: 0;
}
.chronicleButton.outlined em {
  transition: color 0.3s ease-in-out;
  position: relative;
  z-index: 1;
}
/* Outlined hover background via pseudo-element */
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
/* --- Disable flip animation for outlined variant --- */
.chronicleButton.outlined span, .chronicleButton.outlined span:nth-of-type(2), .chronicleButton.outlined span:nth-of-type(1) em, .chronicleButton.outlined span:nth-of-type(2) em {
  /* Remove flip/opacity transitions for outlined */
  transform: none !important;
  opacity: 1 !important;
  transition: color 0.3s ease-in-out;
}
\`;

interface ChronicleButtonProps {
  text: string;
  onClick?: (...args: any[]) => void; // <--- accepts any number of arguments
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
  // Inject styles once
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!document.getElementById("chronicle-button-style")) {
      const style = document.createElement("style");
      style.id = "chronicle-button-style";
      style.innerHTML = styles;
      document.head.appendChild(style);
    }
  }, []);

  // Fade-in state for text
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Hover state for outlined button (to toggle class for pseudo-element)
  const [hovered, setHovered] = useState(false);

  // Dynamic style for the button
  const buttonStyle: React.CSSProperties = {
    width,
    borderRadius,
    fontFamily,
    background: outlined ? "transparent" : customBackground,
    color: outlined ? customBackground : customForeground,
    padding: padding
      ? padding
      : outlined
      ? \`calc(1rem - \${outlinePaddingAdjustment}) 0\`
      : "1rem 1.232rem",
    border: outlined ? \`\${outlineBorderWidth} solid \${customBackground}\` : "none",
    transition:
      "background 0.3s ease-in-out, color 0.3s ease-in-out, border 0.3s ease-in-out, padding 0.3s ease-in-out",
    position: "relative",
    ...(outlined && hovered
      ? { ["--chronicle-outlined-hover-bg" as any]: outlinedButtonBackgroundOnHover }
      : { ["--chronicle-outlined-hover-bg" as any]: "transparent" }),
  };

  // Dynamic style for <em>
  // For outlined: color always matches border color (hover or not)
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

  // Dynamic hover
  const handleMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setHovered(true);
    const btn = e.currentTarget;
    if (outlined) {
      btn.style.borderColor = hoverColor;
      btn.style.color = hoverForeground ? hoverForeground : hoverColor;
    } else {
      btn.style.background = hoverColor;
      btn.style.color = hoverForeground || customForeground;
    }
  };
  const handleMouseLeave = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setHovered(false);
    const btn = e.currentTarget;
    btn.style.background = outlined ? "transparent" : customBackground;
    btn.style.color = outlined ? customBackground : customForeground;
    if (outlined) {
      btn.style.borderColor = customBackground;
    }
  };

  // --- Accept any onClick signature ---
  function handleClick(...args: any[]) {
    if (onClick) onClick(...args);
  }

  return (
    <button
      className={
        \`chronicleButton\${outlined ? " outlined" : ""}\` +
        (outlined && hovered ? " chronicle-hovered" : "")
      }
      onClick={handleClick}
      style={buttonStyle}
      type="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {outlined ? (
        // OUTLINED: Only one span, no flip animation, just text
        mounted && (
          <span>
            <em style={emStyle}>{text}</em>
          </span>
        )
      ) : (
        // DEFAULT: Both spans for flip animation
        mounted && (
          <>
            <span className="chronicle-fade chronicle-fade-in">
              <em style={emStyle}>{text}</em>
            </span>
            <span>
              <em style={emStyle}>{text}</em>
            </span>
          </>
        )
      )}
    </button>
  );
};

export default ChronicleButton;
`
  },
],
  dependencies: '',
  credit: (
    <span>
      <a href="https://codepen.io/Haaguitos/pen/OJrVZdJ" target="_blank" rel="noopener noreferrer" className="link">Chronicle Button</a> by <a href="https://codepen.io/Haaguitos" target="_blank" rel="noopener noreferrer" className="link">Haaguitos</a>
    </span>
  ),
}

export { metadata }