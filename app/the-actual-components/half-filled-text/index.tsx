'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "HalfFilledText.tsx" file
import HalfFilledText from '@/app/the-actual-components/half-filled-text/HalfFilledText'

<HalfFilledText 
  inscription="חירות"
  fontSize="12em"
  fillColor="#c19bf5"
  outlineColor="#8338ec"
  outlineWidth="3px"
/>

// Note: The HalfFilledText component accepts the following props:
// - inscription: string (required) - The text to display with multiple colors.
// - fontSize: string (required) - The font size for the text (e.g., '240px', '12em').
// - fillColor: string (required) - The color to fill the lower part of the text.
// - outlineColor: string (required) - The color of the text outline.
// - outlineWidth: string (required) - The width of the text outline (e.g., '2px', '3px').
`,
code: [
  {
    filename: 'HalfFilledText.tsx',
    content: `"use client"
import React from 'react';

interface HalfFilledTextProps {
  inscription: string;
  fontSize: string;
  fillColor: string;
  outlineColor: string;
  outlineWidth: string;
}

const HalfFilledText: React.FC<HalfFilledTextProps> = ({
  inscription,
  fontSize,
  fillColor,
  outlineColor,
  outlineWidth
}) => {
  return (
    <section style={sectionStyle}>
      <div style={contentStyle}>
        <h2 style={{
          ...h2Style,
          fontSize,
          color: 'transparent',
          WebkitTextStroke: \`\${outlineWidth} \${outlineColor}\`
        }}>{inscription}</h2>
        <h2 style={{
          ...h2Style,
          fontSize,
          color: fillColor,
          animation: 'animate 4s ease-in-out infinite'
        }}>{inscription}</h2>
      </div>
      <style jsx>{\`
        @import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");
        
        @keyframes animate {
          0%, 100% {
            clip-path: polygon(
              0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%,
              84% 59%, 100% 52%, 100% 100%, 0% 100%
            );
          }
          50% {
            clip-path: polygon(
              0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%,
              84% 45%, 100% 46%, 100% 100%, 0% 100%
            );
          }
        }
      \`}</style>
    </section>
  );
};

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  background: '#000',
  alignItems: 'center',
  justifyContent: 'center',
};

const contentStyle: React.CSSProperties = {
  position: 'relative',
};

const h2Style: React.CSSProperties = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  fontFamily: '"Poppins", sans-serif',
};

export default HalfFilledText;
`
  },
],
  dependencies: '',
  credit: (
    <span>
      <a href="https://codepen.io/techgirldiaries/pen/LYWPJPN" target="_blank" rel="noopener noreferrer" className="link">tgd-waterwave-animation</a> by <a href="https://codepen.io/techgirldiaries" target="_blank" rel="noopener noreferrer" className="link">Oluwakemi</a>
    </span>
  ),
}

export { metadata }