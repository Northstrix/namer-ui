'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "SpaceButton.tsx" file
import SpaceButton from '@/app/the-actual-components/space-button/SpaceButton'

<div style={{
  display: 'inline-flex',
  flexWrap: 'wrap',
  gap: '36px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '32px',
  backgroundColor: '#03010b',
  borderRadius: '8px',
  minHeight: '300px',
  width: '100%'
}}>
  <SpaceButton 
    inscription="Outer Space"
    variant="outer"
    onClick={() => console.log("The Outer Space button has been clicked")}
  />
  <SpaceButton 
    inscription="Inner Space (1px border)"
    borderWidth="1px"
    onClick={() => console.log("The Inner Space button has been clicked")}
  />
  <SpaceButton 
    inscription="Outer Space (1px, thin font)"
    isBold={false}
    variant="outer"
    onClick={() => console.log("The Outer Space thin font button has been clicked")}
  />
  <SpaceButton 
    inscription="5px Border"
    borderWidth="5px"
    onClick={() => console.log("The 5px Border button has been clicked")}
  />
  <SpaceButton 
    inscription="Hover any of these"
    borderRadius="2em"
    onClick={() => console.log("The Hover any of these button has been clicked")}
  />
  <SpaceButton 
    inscription="פונט גדול"
    fontSize="32px"
    variant="outer"
    onClick={() => console.log("The large font button has been clicked")}
  />
</div>

// Note: The SpaceButton component accepts the following props:
// - inscription: string (required) - Text displayed on the button.
// - borderRadius: string (optional) - Custom border radius for the button (default: '0.76em').
// - borderWidth: string (optional) - Border width for the button (default: '2px').
// - variant: 'outer' | 'inner' (optional) - Determines the button's visual style (default: 'inner').
// - isBold: boolean (optional) - Controls whether the text is bold (default: true).
// - fontSize: string (optional) - Sets the font size of the button text (default: '16px').
// - onClick: () => void (optional) - Callback function triggered when the button is clicked.
`,
code: [
  {
    filename: 'SpaceButton.tsx',
    content: `"use client"
import React from 'react';
import styles from './SpaceButton.module.css';

interface SpaceButtonProps {
  inscription: string;
  borderRadius?: string;
  borderWidth?: string;
  variant?: 'outer' | 'inner';
  isBold?: boolean;
  fontSize?: string;
  onClick?: () => void;
}

const SpaceButton: React.FC<SpaceButtonProps> = ({
  inscription,
  borderRadius = '0.76em',
  borderWidth = '2px',
  variant = 'inner',
  isBold = true,
  fontSize = '16px',
  onClick
}) => {
  const buttonStyle = {
    '--border-radius': borderRadius,
    '--border-width': borderWidth,
    fontWeight: isBold ? 'bold' : 'normal',
    fontFamily: '"Arial", "Alef", sans-serif',
    fontSize: fontSize
  } as React.CSSProperties;

  return (
    <button 
      className={\`\${styles.spaceButton} \${variant === 'outer' ? styles.variant : ''}\`} 
      style={buttonStyle}
      onClick={onClick}
    >
      {inscription}
    </button>
  );
};

export default SpaceButton;
`
  },
  {
    filename: 'SpaceButton.module.css',
    content: `@property --pos-x { syntax: '<percentage>'; initial-value: 11.14%; inherits: false; }
@property --pos-y { syntax: '<percentage>'; initial-value: 140%; inherits: false; }
@property --spread-x { syntax: '<percentage>'; initial-value: 150%; inherits: false; }
@property --spread-y { syntax: '<percentage>'; initial-value: 180.06%; inherits: false; }
@property --color-1 { syntax: '<color>'; initial-value: #000; inherits: false; }
@property --color-2 { syntax: '<color>'; initial-value: #08012c; inherits: false; }
@property --color-3 { syntax: '<color>'; initial-value: #4e1e40; inherits: false; }
@property --color-4 { syntax: '<color>'; initial-value: #70464e; inherits: false; }
@property --color-5 { syntax: '<color>'; initial-value: #88394c; inherits: false; }
@property --border-angle { syntax: '<angle>'; initial-value: 20deg; inherits: true; }
@property --border-color-1 { syntax: '<color>'; initial-value: hsla(340, 75%, 60%, 0.2); inherits: true; }
@property --border-color-2 { syntax: '<color>'; initial-value: hsla(340, 75%, 40%, 0.75); inherits: true; }
@property --stop-1 { syntax: '<percentage>'; initial-value: 37.35%; inherits: false; }
@property --stop-2 { syntax: '<percentage>'; initial-value: 61.36%; inherits: false; }
@property --stop-3 { syntax: '<percentage>'; initial-value: 78.42%; inherits: false; }
@property --stop-4 { syntax: '<percentage>'; initial-value: 89.52%; inherits: false; }
@property --stop-5 { syntax: '<percentage>'; initial-value: 100%; inherits: false; }

.spaceButton {
  border-radius: var(--border-radius);
  padding: 16px 36px;
  min-width: 132px;
  font-size: 16px;
  font-family: "Arial", "Alef", sans-serif;
  line-height: 19px;
  font: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: inherit;
  font-weight: 500;
  color: rgba(255 255 255 / 95%);
  border: none;
  position: relative;
  cursor: pointer;
  appearance: none;
  background: radial-gradient(
    var(--spread-x) var(--spread-y) at var(--pos-x) var(--pos-y),
    var(--color-1) var(--stop-1),
    var(--color-2) var(--stop-2),
    var(--color-3) var(--stop-3),
    var(--color-4) var(--stop-4),
    var(--color-5) var(--stop-5)
  );
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.95);
  outline: none;
  -webkit-tap-highlight-color: transparent;
  transition: --pos-x 0.5s, --pos-y 0.5s, --spread-x 0.5s, --spread-y 0.5s, 
              --color-1 0.5s, --color-2 0.5s, --color-3 0.5s, --color-4 0.5s, --color-5 0.5s, 
              --border-angle 0.5s, --border-color-1 0.5s, --border-color-2 0.5s, 
              --stop-1 0.5s, --stop-2 0.5s, --stop-3 0.5s, --stop-4 0.5s, --stop-5 0.5s;
}

.spaceButton::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: var(--border-width);
  background-image: linear-gradient(var(--border-angle), var(--border-color-1), var(--border-color-2));
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}

.spaceButton:hover {
  --pos-x: 0%;
  --pos-y: 91.51%;
  --spread-x: 120.24%;
  --spread-y: 103.18%;
  --color-1: #c96287;
  --color-2: #c66c64;
  --color-3: #cc7d23;
  --color-4: #37140a;
  --color-5: #000;
  --border-angle: 190deg;
  --border-color-1: hsla(340, 78%, 90%, 0.1);
  --border-color-2: hsla(340, 75%, 90%, 0.6);
  --stop-1: 0%;
  --stop-2: 8.8%;
  --stop-3: 21.44%;
  --stop-4: 71.34%;
  --stop-5: 85.76%;
}

.spaceButton.variant {
  --color-1: #000022;
  --color-2: #1f3f6d;
  --color-3: #469396;
  --color-4: #f1ffa5;
  --color-5: hsla(250, 80%, 2.5%, 1);
  --pos-x: 40%;
  --pos-y: 140%;
  --spread-x: 130%;
  --spread-y: 170.06%;
  --stop-1: 37.35%;
  --stop-2: 61.36%;
  --stop-3: 78.42%;
  --stop-4: 93.52%;
  --stop-5: 100%;
  --border-angle: 180deg;
  --border-color-1: hsla(320, 75%, 90%, 0.9);
  --border-color-2: hsla(320, 50%, 90%, 0.1);
}

.spaceButton.variant:hover {
  --pos-x: 0%;
  --pos-y: 120%;
  --spread-x: 110.24%;
  --spread-y: 110.2%;
  --color-1: #000020;
  --color-2: #f1ffa5;
  --color-3: #469396;
  --color-4: #1f3f6d;
  --stop-1: 0%;
  --stop-2: 10%;
  --stop-3: 35.44%;
  --stop-4: 71.34%;
  --stop-5: 150%;
  --border-angle: 190deg;
  --border-color-1: hsla(320, 75%, 90%, 0.1);
  --border-color-2: hsla(320, 50%, 90%, 0.35);
}
`
  },
],
  dependencies: `npm install @fontsource/alef --legacy-peer-deps
`,
  credit: (
    <span>
      <a href="https://codepen.io/aaroniker/pen/rNXRrKp" target="_blank" rel="noopener noreferrer" className="link">Gradient Hover</a> by <a href="https://codepen.io/aaroniker" target="_blank" rel="noopener noreferrer" className="link">Aaron Iker</a>
    </span>
  ),
}

export { metadata }