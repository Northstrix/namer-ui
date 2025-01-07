"use client"
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
      textRef.current.innerHTML = chars.map(char => `<span>${char}</span>`).join('');
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

const animTextFlowKeys = keyframes`
  ${[...Array(20)].map((_, i) => `
    ${i * 5}% {
      color: hsl(${Math.floor(Math.random() * 365)}, 60%, 60%);
    }
  `).join('')}
`;

const Container = styled.div`
  color: #fefefe;
  font-family: 'Ubuntu', sans-serif;
  letter-spacing: 0.2em;
  line-height: 2;
  font-weight: 300;
  text-rendering: optimizeLegibility;
  text-align: center;
`;

const AnimatedText = styled.span<{ fontSize: string }>`
  display: block;
  font-size: ${props => props.fontSize};

  span {
    animation-name: ${animTextFlowKeys};
    animation-duration: 50s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
  }

  ${[...Array(100)].map((_, i) => `
    span:nth-of-type(${i + 1}) {
      animation-delay: ${(i * 0.2) - 20}s;
    }
  `).join('')}
`;

export default GradientText;