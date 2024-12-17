'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "ChronicleButton.tsx" file
import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton'

{/* Basic usage example */}
<ChronicleButton 
  text='Hover Me'
  onClick={() => console.log('The first button has been clicked')} 
/>

{/* Custom width, rounding, and hover color example */}
<ChronicleButton 
  text='Blue (1.4em)' // Button text
  onClick={() => console.log('The blue button has been clicked')} 
  width="200px" // Custom width
  hoverColor="#90BAFD" // Custom hover color: a vibrant blue
  borderRadius="1.4em" // Custom border radius
/>

{/* Outlined button with custom hover color and reduced height */}
<ChronicleButton 
  text="Outlined (-6px)" 
  onClick={() => console.log('The outlined button has been clicked')} 
  hoverColor="#CC8DFD" // A soft purple hover color
  width="200px"
  outlined={true} // Enables outlined style (default is false)
  outlinePaddingAdjustment="6px" // Reduces button height by 4px vertically
/>

// Note: The ChronicleButton component accepts the following props:
// - text: string (required) - The text to display on the button
// - onClick: () => void (optional) - Function to call when the button is clicked
// - hoverColor: string (optional) - Custom color for hover state (default: #a594fd)
// - width: string (optional) - Custom width for the button (default: 160px)
// - outlined: boolean (optional) - Whether to use an outlined style (default: false)
// - outlinePaddingAdjustment: string (optional) - Reduces vertical padding for outlined buttons
// - borderRadius: string (optional) - Custom border radius for the button (default: '0.76rem')
`,
code: [
  {
    filename: 'ChronicleButton.tsx',
    content: `"use client"
import React from 'react';
import styles from './ChronicleButton.module.css';

interface ChronicleButtonProps {
  text: string;
  onClick?: () => void;
  hoverColor?: string;
  width?: string;
  outlined?: boolean;
  outlinePaddingAdjustment?: string;
  borderRadius?: string; // New property for border radius
}

const ChronicleButton: React.FC<ChronicleButtonProps> = ({ 
  text, 
  onClick, 
  hoverColor = 'var(--chronicle-button-default-hover-color)', 
  width = '160px',
  outlined = false,
  outlinePaddingAdjustment = '2px',
  borderRadius = '0.76rem' // Default value for border radius
}) => {
  const buttonStyle = {
    '--hover-color': hoverColor,
    '--text-color': outlined ? 'var(--chronicle-button-background)' : 'var(--chronicle-button-negative-foreground',
    '--outline-padding-adjustment': outlinePaddingAdjustment,
    width: width,
    borderRadius: borderRadius, // Set the border radius directly in style
  } as React.CSSProperties;

  return (
    <button 
      className={\`\${styles.chronicleButton} \${outlined ? styles.outlined : ''}\`}
      onClick={onClick}
      style={buttonStyle}
    >
      <span><em>{text}</em></span>
      <span><em>{text}</em></span>
    </button>
  );
};

export default ChronicleButton;
`
  },
  {
    filename: 'ChronicleButton.module.css',
    content: `.chronicleButton {
  --chronicle-button-background: #f0f0f1;
  --chronicle-button-negative-foreground: #1a1a24;
  --chronicle-button-default-hover-color: #a594fd;

  border-radius: var(--chronicle-button-border-radius, 0.76rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  line-height: 1;
  padding: 1rem 1.232rem;
  cursor: pointer;
  border: none;
  font-weight: 700;
  background: var(--chronicle-button-background);
  transition: background .4s linear, color .4s linear;
  will-change: background, color;
}

.chronicleButton:hover {
  background: var(--hover-color);
}

.chronicleButton span {
  position: relative;
  display: block;
  perspective: 108px;
}

.chronicleButton span:nth-of-type(2) {
  position: absolute;
}

.chronicleButton em {
  font-style: normal;
  display: inline-block;
  font-size: 1.025rem;
  color: var(--chronicle-button-negative-foreground);
  will-change: transform, opacity, transition;
  transition: transform .55s cubic-bezier(.645,.045,.355,1), opacity .35s linear .2s;
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
  transition: transform .75s cubic-bezier(.645,.045,.355,1), opacity .35s linear .3s;
}

.chronicleButton.outlined {
  background: transparent;
  border: 2px solid var(--chronicle-button-background);
  padding: calc(1rem - var(--outline-padding-adjustment)) 0;
  transition: border .4s linear, color .4s linear;
  will-change: border, color;
}

.chronicleButton.outlined em {
  color: var(--text-color);
  transition: color .4s linear;
}

.chronicleButton.outlined:hover {
  background: transparent;
  border-color: var(--hover-color);
}

.chronicleButton.outlined span:nth-of-type(1) em,
.chronicleButton.outlined span:nth-of-type(2) em {
  transition: color .4s linear;
}

.chronicleButton.outlined:hover span:nth-of-type(1) em,
.chronicleButton.outlined:hover span:nth-of-type(2) em {
  color: var(--hover-color);
}
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