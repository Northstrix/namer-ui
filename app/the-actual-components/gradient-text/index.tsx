'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "GradientText.tsx" file
import GradientText from '@/app/the-actual-components/gradient-text/GradientText'

<div className="bg-base-300 p-8 rounded-lg min-h-[300px] flex flex-col gap-6 items-center justify-center">
  <GradientText inscription="We don't see things as they are, we see them as we are." fontSize="2em" />
  <GradientText inscription="Anaïs Nin" fontSize="1em" />
</div>

// Note: The GradientText component accepts the following props:
// - inscription: string (required) - The text to display with multiple colors.
// - fontSize: string (required) - The font size for the text (e.g., '50px', '2em').
`,
code: [
  {
    filename: 'GradientText.tsx',
    content: `"use client"
import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

interface GradientTextProps {
  inscription: string;
  fontSize: string;
}

const GradientText: React.FC<GradientTextProps> = ({ inscription, fontSize }) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const chars = inscription.trim().split('');
      textRef.current.innerHTML = chars.map(char => \`<span>\${char}</span>\`).join('');
    }
  }, [inscription]);

  return (
    <Container>
      <AnimatedText ref={textRef} className="txt anim-text-flow" fontSize={fontSize}>
        {inscription}
      </AnimatedText>
    </Container>
  );
};

const animTextFlowKeys = keyframes\`
  \${[...Array(20)].map((_, i) => \`
    \${i * 5}% {
      color: hsl(\${Math.floor(Math.random() * 365)}, 60%, 60%);
    }
  \`).join('')}
\`;

const Container = styled.div\`
  color: #fefefe;
  font-family: 'Ubuntu', sans-serif;
  letter-spacing: 0.2em;
  line-height: 2;
  font-weight: 300;
  text-rendering: optimizeLegibility;
  text-align: center;
\`;

const AnimatedText = styled.span<{ fontSize: string }>\`
  display: block;
  font-size: \${props => props.fontSize};

  span {
    animation-name: \${animTextFlowKeys};
    animation-duration: 50s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
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