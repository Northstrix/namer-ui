'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "DutchCard.tsx" file
import DutchCard from '@/app/the-actual-components/dutch-card/DutchCard'

<DutchCard width="100%" height="300px" borderRadius="0.5em" background="#111118">
  <div className=" gap-10 flex items-center justify-center">
    <DutchCard width="300px" height="250px">
      <p>The content goes here</p>
    </DutchCard>
    <DutchCard width="200px" height="250px" reverse borderRadius="2.25em">
      <p>Od Ekhad?</p>
    </DutchCard>
  </div>
</DutchCard>

// Note: The DutchCard component accepts the following props:
// - width: string (optional) - Custom width for the card (default: '250px')
// - height: string (optional) - Custom height for the card (default: '200px')
// - reverse: boolean (optional) - Reverses the animation direction when true (default: false)
// - borderRadius: string (optional) - Custom border radius for the card (default: '12px')
// - background: string (optional) - Custom background color for the card's interior (default: '#212121')
`,
code: [
  {
    filename: 'DutchCard.tsx',
    content: `"use client"
import React, { ReactNode } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface DutchCardProps {
  children?: ReactNode;
  width?: string;
  height?: string;
  reverse?: boolean;
  borderRadius?: string;
  background?: string;
}

const rotateForward = keyframes\`
  100% {
    transform: translate(-50%, -50%) rotate(1turn);
  }
\`;

const rotateBackward = keyframes\`
  100% {
    transform: translate(-50%, -50%) rotate(-1turn);
  }
\`;

const forwardGradient = css\`
  conic-gradient(rgba(0,0,0,0), #156ef6, #FFFFFF, red, rgba(0,0,0,0) 25%)
\`;

const backwardGradient = css\`
  conic-gradient(rgba(0,0,0,0), red, #FFFFFF, #156ef6, rgba(0,0,0,0) 25%)
\`;

const CardContainer = styled.div<{ width: string; height: string; borderRadius: string }>\`
  position: relative;
  width: \${props => props.width};
  height: \${props => props.height};
  border-radius: \${props => props.borderRadius};
\`;

const AnimatedBorderBox = styled.div<{ width: string; height: string; reverse: boolean; borderRadius: string; background: string }>\`
  height: \${props => props.height};
  width: \${props => props.width};
  position: absolute;
  overflow: hidden;
  z-index: 0;
  border-radius: \${props => props.borderRadius};

  &:before {
    content: '';
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    position: absolute;
    width: 99999px;
    height: 99999px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: \${props => props.reverse ? backwardGradient : forwardGradient};
    animation: \${props => props.reverse ? rotateBackward : rotateForward} 4s linear infinite;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 5px;
    top: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    background: \${props => props.background};
    border-radius: calc(\${props => props.borderRadius} - 3px);
  }
\`;

const AnimatedBorderBoxGlow = styled(AnimatedBorderBox)\`
  filter: blur(20px);
\`;

const Content = styled.div\`
  position: relative;
  z-index: 1;
  padding: 20px;
  color: white;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
\`;

const DutchCard: React.FC<DutchCardProps> = ({ 
  children, 
  width = '250px', 
  height = '200px', 
  reverse = false,
  borderRadius = '12px',
  background = '#292A2E',
}) => {
  return (
    <CardContainer width={width} height={height} borderRadius={borderRadius}>
      <AnimatedBorderBoxGlow width={width} height={height} reverse={reverse} borderRadius={borderRadius} background={background} />
      <AnimatedBorderBox width={width} height={height} reverse={reverse} borderRadius={borderRadius} background={background} />
      <Content>{children}</Content>
    </CardContainer>
  );
};

export default DutchCard;
`
  },
],
  dependencies: 'npm install styled-components --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://codepen.io/sitestudioapp/pen/BaXzyLO" target="_blank" rel="noopener noreferrer" className="link">CSS Glow Border Animation</a> by <a href="https://codepen.io/sitestudioapp" target="_blank" rel="noopener noreferrer" className="link">Site Studio</a>
    </span>
  ),
}

export { metadata }