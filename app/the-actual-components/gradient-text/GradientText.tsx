"use client";

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
      textRef.current.innerHTML = chars.map(char => `<span>${char}</span>`).join('');
    }
  }, [children]);

  return (
    <AnimatedText fontSize={fontSize} ref={textRef}>
      {children}
    </AnimatedText>
  );
};

const animTextFlowKeys = keyframes`
  ${[...Array(20)].map((_, i) => `
    ${i * 5}% {
      color: hsl(${Math.floor(Math.random() * 365)}, 60%, 60%);
    }
  `).join('')}
`;

const AnimatedText = styled.span<{ fontSize?: string }>`
  display: inline; // Crucial:  Allows it to sit inline with other text
  font-size: ${props => props.fontSize || 'inherit'}; // Use inherit to respect parent
  white-space: pre; // preserves spaces

  span {
    animation-name: ${animTextFlowKeys};
    animation-duration: 50s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    display: inline-block; // Important for animation on each character
  }

  ${[...Array(100)].map((_, i) => `
    span:nth-of-type(${i + 1}) {
      animation-delay: ${(i * 0.2) - 20}s;
    }
  `).join('')}
`;

export default GradientText;