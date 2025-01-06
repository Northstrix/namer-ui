'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "HazeCard.tsx" file
import HazeCard from '@/app/the-actual-components/haze-card/HazeCard'

<HazeCard 
    borderColor="white" 
    borderRadius="25px" 
    borderWidth="4px"
    width="300px"
    height="330px"
>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <p style={{ color: 'white', fontSize: '16px' }}>The content goes here</p>
    </div>
</HazeCard>

// Note: The HazeCard component accepts the following props:
// - borderColor: string (required) - The color of the card's border.
// - borderRadius: string (required) - The radius of the card's corners (e.g., '25px').
// - borderWidth: string (required) - The width of the card's border (e.g., '4px').
// - width: string (required) - The width of the card (e.g., '300px').
// - height: string (required) - The height of the card (e.g., '330px').
// - children: React.ReactNode (optional) - Any child components or elements to be rendered inside the card.
`,
code: [
  {
    filename: 'HazeCard.tsx',
    content: `"use client";
import React from 'react';

interface HazeCardProps {
  borderColor: string;
  borderRadius: string; // e.g., '10px'
  borderWidth: string; // e.g., '2px'
  width: string; // e.g., '500px'
  height: string; // e.g., '500px'
  children: React.ReactNode; // Accepts child components
}

const HazeCard: React.FC<HazeCardProps> = ({
  borderColor,
  borderRadius,
  borderWidth,
  width,
  height,
  children
}) => {
  const smokeAnimation = \`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .c {
      border: 2px solid rgba(255,255,255,.1);
      border-radius: 400px;
      position: absolute;
      margin: auto;
    }
  \`;

  return (
    <div
        style={{
        backdropFilter: 'blur(10px)', // Blur effect
        textAlign: 'center',
        width: width,
        height: height,
        overflow: 'hidden',
        borderStyle: 'solid',
        borderColor,
        borderRadius,
        borderWidth,
        position: 'relative', // Changed to relative to stay within parent
        }}
    >
      {children}
      <style>{smokeAnimation}</style> {/* Injecting CSS for animation */}
      {/* Generate smoke effect circles */}
      {[...Array(60)].map((_, i) => (
        <div key={i} className="c" style={{
          width: \`\${i * 6}px\`,
          height: \`\${i}px\`,
          right: \`\${i * 10}px\`,
          bottom: \`\${i * 10}px\`,
          filter: \`blur(\${i / 3 + 8}px)\`,
          background: \`rgba(\${90 + (i * 3)}, \${33 + (i * 1)}, 205, \${1 - (i / 80)})\`,
          boxShadow: \`\${3}px \${0}px rgba(255,255,255,\${1 - (i / 40)}), \${6}px \${-5}px rgba(10, 0, 0,\${1 - (i / 40)})\`,
          animation: \`spin \${3}s \${i / 10}s linear infinite\`,
          transformOrigin: \`\${i * 4}px \${i * 2}px\`,
          zIndex: '-1',
        }} />
      ))}
    </div>
  );
};

export default HazeCard;
`
  },
],
  dependencies: '',
  credit: (
    <span>
      <a href="https://codepen.io/jcoulterdesign/pen/wGyNzL" target="_blank" rel="noopener noreferrer" className="link">Purple Haze - CSS Chrome smoke effect</a> by <a href="https://codepen.io/jcoulterdesign" target="_blank" rel="noopener noreferrer" className="link">Jamie Coulter</a>
    </span>
  ),
}

export { metadata }