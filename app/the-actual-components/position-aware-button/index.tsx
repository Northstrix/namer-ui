'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "PositionAwareButton.tsx" file
import PositionAwareButton from '@/app/the-actual-components/position-aware-button/PositionAwareButton';

// Usage Example
<PositionAwareButton 
  buttonText="Click Me!"
  onClick={() => console.log('First button clicked!')}
/>
<PositionAwareButton 
  buttonText="Click Me Too!"
  buttonWidth="220px"
  borderRadius="0.76em"
  buttonColor="#6A0DAD"
  onClick={() => console.log('Second button clicked!')}
/>

// Note: PositionAwareButton Component Usage
// - buttonText: string (required) - The text to display on the button.
// - buttonWidth: string (optional) - Custom width for the button (default: 'auto').
// - borderRadius: string (optional) - Custom border radius for the button (default: '2em').
// - buttonColor: string (optional) - Custom color for the button's background gradient (default: '#ff4500').
// - onClick: () => void (optional) - Function to call when the button is clicked.
`,
code: [
  {
    filename: 'PositionAwareButton.tsx',
    content: `import React, { useEffect, useRef } from 'react';

interface PositionAwareButtonProps {
  buttonText: string;
  buttonWidth?: string;
  borderRadius?: string;
  buttonColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PositionAwareButton: React.FC<PositionAwareButtonProps> = ({
  buttonText,
  buttonWidth = 'auto',
  borderRadius = '2em',
  buttonColor = '#ff4500',
  onClick
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const button = buttonRef.current;
      if (button) {
        const rect = button.getBoundingClientRect();
        button.style.setProperty('--x', \`\${e.clientX - rect.left}px\`);
        button.style.setProperty('--y', \`\${e.clientY - rect.top}px\`);
      }
    };

    const button = buttonRef.current;
    if (button) {
      button.addEventListener('mousemove', updatePosition);
      button.addEventListener('mouseenter', updatePosition);
      button.addEventListener('mouseleave', updatePosition);
    }

    return () => {
      if (button) {
        button.removeEventListener('mousemove', updatePosition);
        button.removeEventListener('mouseenter', updatePosition);
        button.removeEventListener('mouseleave', updatePosition);
      }
    };
  }, []);

  return (
    <button 
      ref={buttonRef} 
      onClick={onClick}
      style={{
        width: buttonWidth,
        borderRadius: borderRadius,
        '--button-color': buttonColor,
      } as React.CSSProperties}
    >
      {buttonText}
      <style jsx>{\`
        @property --r {
          syntax: '<length-percentage>';
          initial-value: 0px;
          inherits: false;
        }

        button {
          place-self: center;
          border: solid 2px #0001;
          padding: 0 1em;
          box-shadow: inset 1px 3px 1px #fff4;
          background: radial-gradient(
            circle at var(--x, 0%) var(--y, 0%), 
            black calc(var(--r) - 1px), 
            var(--button-color) var(--r)
          ) border-box;
          color: white;
          font: 1.5em/2.25 ubuntu, sans-serif;
          transition: --r 0.35s;
        }

        button:hover {
          --r: 100%;
        }
      \`}</style>
    </button>
  );
};

export default PositionAwareButton;
`
  },
],
  dependencies: '',
  credit: (
    <span>
      <a href="https://codepen.io/thebabydino/pen/PoxVZWg" target="_blank" rel="noopener noreferrer" className="link">Button hover effect</a> by <a href="https://codepen.io/thebabydino" target="_blank" rel="noopener noreferrer" className="link">Ana Tudor</a>
    </span>
  ),
}

export { metadata }