'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "GradientText.tsx" file
import GradientText from '@/app/the-actual-components/gradient-text/GradientText'

<div className="bg-[#050505] p-8 rounded-lg min-h-[300px] flex flex-col gap-6 items-center justify-center">
  <p style={{ textAlign: 'center', fontSize: '2em'}}>
    We don't see things as they are,{' '}
    <GradientText>we see them as we are.</GradientText>
  </p>
  <GradientText fontSize="1em">Anaïs Nin</GradientText>
</div>

// Note: The GradientText component accepts the following props:
// - children: ReactNode (required) - The content to be rendered inside the block.
// - fontSize: string (optional) - The font size for the text (e.g., '50px', '2em').
`,
code: [
  {
    filename: 'GradientText.tsx',
    content: `"use client";

import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

interface GradientTextProps {
  children: string;
  fontSize?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, fontSize }) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const chars = children.trim().split('');
      textRef.current.innerHTML = chars.map(char => \`<span>\${char}</span>\`).join('');
    }
  }, [children]);

  return (
    <AnimatedText fontSize={fontSize} ref={textRef}>
      {children}
    </AnimatedText>
  );
};

const animTextFlowKeys = keyframes\`
  \${[...Array(20)].map((_, i) => \`
    \${i * 5}% {
      color: hsl(\${Math.floor(Math.random() * 365)}, 60%, 60%);
    }
  \`).join('')}
\`;

const AnimatedText = styled.span<{ fontSize?: string }>\`
  display: inline; // Crucial:  Allows it to sit inline with other text
  font-size: \${props => props.fontSize || 'inherit'}; // Use inherit to respect parent
  white-space: pre; // preserves spaces

  span {
    animation-name: \${animTextFlowKeys};
    animation-duration: 50s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    display: inline-block; // Important for animation on each character
  }

  \${[...Array(100)].map((_, i) => \`
    span:nth-of-type(\${i + 1}) {
      animation-delay: \${(i * 0.2) - 20}s;
    }
  \`).join('')}
\`;

export default GradientText;
`
  },
],
  dependencies: 'npm install styled-components --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://codepen.io/hendrysadrak/pen/VLMOMJ" target="_blank" rel="noopener noreferrer" className="link">#webdev series - Colorful text animation #updated</a> by <a href="https://codepen.io/hendrysadrak" target="_blank" rel="noopener noreferrer" className="link">Hendry Sadrak</a>
    </span>
  ),
}

export { metadata }