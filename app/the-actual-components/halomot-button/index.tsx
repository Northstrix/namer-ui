'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "HalomotButton.tsx" file
import HalomotButton from '@/app/the-actual-components/halomot-button/HalomotButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

<div style={{
  display: 'flex',
  flexWrap: 'wrap', // Allows items to wrap to the next line
  gap: '36px', // Space between items
  justifyContent: 'center', // Center items horizontally
  padding: '32px', // Optional padding for the container
  backgroundColor: '#050505', // Background color of the container
  borderRadius: '8px', // Rounded corners for the container
  minHeight: '300px' // Minimum height for the container
}}>
  <HalomotButton 
    inscription="חלומות"
    onClick={() => toast.info("The 1st Halomot button has been clicked!")}
  />
  <HalomotButton 
    inscription="עוד אחד"
    borderWidth="3px"
    gradient = "linear-gradient(135deg, #a123f4, #603dec)"
    outerBorderRadius="12.56px"
    innerBorderRadius="12px"
    onClick={() => toast.info("The 2nd Halomot button has been clicked!")}
  />
  <div style={{ width: "52px" }}>
  <HalomotButton 
    inscription=""
    gradient = "linear-gradient(135deg, #a123f4, #603dec)"
    fillWidth={true}
    icon={<FontAwesomeIcon icon={faGithub} size="lg" />}
    onClick={() => toast.info("The 3rd Halomot button has been clicked!")}
  />
  </div>
  <HalomotButton 
    inscription="Custom padding"
    padding="46px 24px"
    onClick={() => toast.info("The 4th Halomot button has been clicked!")}
  />
</div>

// Note: The HalomotButton component accepts the following props:
// - inscription: string (required) - The text to display on the button.
// - onClick: () => void (required) - Function to call when the button is clicked.
// - gradient: string (optional) - CSS gradient string for the outer border/background (default: 'linear-gradient(135deg, #4776cb, #a19fe5, #6cc606)').
// - backgroundColor: string (optional) - Solid color for the inner button background (default: '#000').
// - borderWidth: string (optional) - Thickness of the gradient border, applied as padding to the outer element (default: '1px').
// - outerBorderRadius: string (optional) - Border radius for the outer (gradient) border (default: '6.34px').
// - innerBorderRadius: string (optional) - Border radius for the inner button (default: '6px').
// - padding: string (optional) - Custom padding for the inner button (e.g., '1rem 4rem'). If not set, uses '1rem 0' for fillWidth/fixedWidth, otherwise '1rem 4rem'.
// - icon: React.ReactElement (optional) - Icon to display at the start of the button text.
// - fillWidth: boolean (optional) - If true, the button stretches to fill its container's width.
// - fixedWidth: string (optional) - If set, the button will have a fixed width (e.g., '200px').
// - href: string (optional) - If set, adds a tooltip to the button using the title attribute, which appears in the browser's built-in tooltip when hovered.
`,
code: [
  {
    filename: 'HalomotButton.tsx',
    content: `"use client";
    import React, { useState } from "react";
    
    interface HalomotButtonProps {
      gradient?: string; // Gradient for the button border/background
      inscription: string; // Button text
      onClick: () => void;
      fillWidth?: boolean;
      fixedWidth?: string;
      href?: string;
      backgroundColor?: string; // Solid color for the inner button (not gradient)
      icon?: React.ReactElement;
      borderWidth?: string; // Controls the padding (thickness of the gradient border)
      padding?: string; // Custom padding for the inner button, e.g., "1rem 4rem"
      outerBorderRadius?: string; // Border radius for the gradient outer border
      innerBorderRadius?: string; // Border radius for the inner button
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
    }) => {
      const [isHovered, setIsHovered] = useState(false);
    
      // Container style for fixed width
      const containerStyle: React.CSSProperties = fixedWidth
        ? { width: fixedWidth, display: "inline-block" }
        : {};
    
      // Outer button style (gradient border)
      const buttonStyle: React.CSSProperties = {
        margin: fillWidth || fixedWidth ? "0" : "auto",
        padding: borderWidth,
        background: gradient,
        border: "0",
        borderRadius: outerBorderRadius,
        color: "#fff",
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
    
      // Inner span style (actual clickable area)
      const spanStyle: React.CSSProperties = {
        background: isHovered ? "none" : backgroundColor,
        padding: padding ?? (fillWidth || fixedWidth ? "1rem 0" : "1rem 4rem"),
        border: "0",
        borderRadius: innerBorderRadius,
        width: "100%",
        height: "100%",
        transition: "300ms",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        color: "#fff",
        whiteSpace: "nowrap",
        fontFamily: "inherit",
        fontSize: "1rem",
        gap: icon ? "0.5em" : 0,
        flexDirection: "row",
        boxSizing: "border-box",
        cursor: "pointer",
      };
    
      // Icon style
      const iconStyle: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        height: "1em",
        width: "1em",
        fontSize: "1.1em",
        verticalAlign: "middle",
        flexShrink: 0,
      };
    
      const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>
      ) => {
        e.preventDefault();
        onClick();
      };
    
      const ButtonContent = (
        <span
          style={spanStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
`
  },
],
  dependencies: '',
  credit: (
    <span>
      <a href="https://codepen.io/uchihaclan/pen/NWOyRWy" target="_blank" rel="noopener noreferrer" className="link">BUTTONS</a> by <a href="https://codepen.io/uchihaclan" target="_blank" rel="noopener noreferrer" className="link">TAYLOR</a>
    </span>
  ),
}

export { metadata }