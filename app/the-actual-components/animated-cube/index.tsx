'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "AnimatedCube.tsx" file
import AnimatedCube from '@/app/the-actual-components/animated-cube/AnimatedCube'

<div style={{ minHeight: '300px', padding: 40, background: "#050505", display: "flex", justifyContent: "center" }}>
  <AnimatedCube
    size={37.5}
    scale={2}
    faceColor="#7dd3fc"
    shadowColor="#0e7490"
    borderColor="#0ea5e9"
    animationDuration={3}
  />
</div>

// Note: The AnimatedCube component accepts the following props:
// - size: number (optional) - The width/height of each cube face in pixels (default: 80).
// - scale: number (optional) - The overall scale multiplier for the cube (default: 1).
// - faceColor: string (optional) - The color of the cube faces (default: '#a19fe5').
// - shadowColor: string (optional) - The color of the cube's shadow face (default: '#000').
// - borderColor: string (optional) - The border color for the cube faces (default: '#222').
// - animationDuration: number (optional) - The duration of the cube's rotation/bounce animation in seconds (default: 2).
`,
code: [
  {
    filename: 'AnimatedCube.tsx',
    content: `"use client";
import React from "react";
import styled, { keyframes, css } from "styled-components";

interface AnimatedCubeProps {
  size?: number; // Cube side in px (default: 80)
  scale?: number; // Cube scale (default: 1)
  faceColor?: string; // Color for faces (default: #a19fe5)
  shadowColor?: string; // Color for shadow face (default: #000)
  borderColor?: string; // Border color for faces (default: #222)
  animationDuration?: number; // Duration in seconds (default: 2)
}

const rotation = keyframes\`
  0% { transform: rotateX(45deg) rotateY(0) rotateZ(45deg); }
  50% { transform: rotateX(45deg) rotateY(0) rotateZ(405deg); }
  100% { transform: rotateX(45deg) rotateY(0) rotateZ(45deg); }
\`;

const bouncing = keyframes\`
  0% { transform: translateY(-40px); }
  45% { transform: translateY(40px); }
  100% { transform: translateY(-40px); }
\`;

const bouncingShadow = keyframes\`
  0% { transform: translateZ(-80px) scale(1.3); opacity: 0.05; }
  45% { transform: translateZ(0); opacity: 0.3; }
  100% { transform: translateZ(-80px) scale(1.3); opacity: 0.05; }
\`;

const Scene = styled.div<{ scale: number }>\`
  position: relative;
  z-index: 2;
  height: \${({ scale }) => 80 * scale}px;
  width: \${({ scale }) => 80 * scale}px;
  display: grid;
  place-items: center;
  perspective: 800px;
\`;

const CubeWrapper = styled.div<{ animationDuration: number }>\`
  transform-style: preserve-3d;
  animation: \${bouncing} \${({ animationDuration }) => animationDuration}s infinite;
\`;

const Cube = styled.div<{ animationDuration: number }>\`
  transform-style: preserve-3d;
  transform: rotateX(45deg) rotateZ(45deg);
  animation: \${rotation} \${({ animationDuration }) => animationDuration}s infinite;
\`;

const CubeFaces = styled.div<{ size: number }>\`
  transform-style: preserve-3d;
  height: \${({ size }) => size}px;
  width: \${({ size }) => size}px;
  position: relative;
  transform-origin: 0 0;
  transform: translateX(0) translateY(0) translateZ(-\${({ size }) => size / 2}px);
\`;

const CubeFace = styled.div<{
  size: number;
  faceColor: string;
  borderColor: string;
  shadowColor: string;
  isShadow?: boolean;
  animationDuration: number;
}>\`
  position: absolute;
  inset: 0;
  width: \${({ size }) => size}px;
  height: \${({ size }) => size}px;
  background: \${({ faceColor, isShadow, shadowColor }) =>
    isShadow ? shadowColor : faceColor};
  border: solid 1px \${({ borderColor }) => borderColor};

  &.shadow {
    transform: \${({ size }) => \`translateZ(-\${size}px)\`};
    animation: \${bouncingShadow} \${({ animationDuration }) => animationDuration}s infinite;
  }
  &.top { transform: \${({ size }) => \`translateZ(\${size}px)\`}; }
  &.front { transform-origin: 0 50%; transform: rotateY(-90deg); }
  &.back { transform-origin: 0 50%; transform: rotateY(-90deg) translateZ(-\${({ size }) => size}px); }
  &.right { transform-origin: 50% 0; transform: rotateX(-90deg) translateY(-\${({ size }) => size}px); }
  &.left { transform-origin: 50% 0; transform: rotateX(-90deg) translateY(-\${({ size }) => size}px) translateZ(\${({ size }) => size}px); }
\`;

const AnimatedCube: React.FC<AnimatedCubeProps> = ({
  size = 80,
  scale = 1,
  faceColor = "#a19fe5",
  shadowColor = "#000",
  borderColor = "#222",
  animationDuration = 2,
}) => (
  <Scene scale={scale} style={{ transform: \`scale(\${scale})\` }}>
    <CubeWrapper animationDuration={animationDuration}>
      <Cube animationDuration={animationDuration}>
        <CubeFaces size={size}>
          <CubeFace
            className="shadow"
            size={size}
            faceColor={faceColor}
            borderColor={borderColor}
            shadowColor={shadowColor}
            isShadow
            animationDuration={animationDuration}
          />
          <CubeFace
            className="top"
            size={size}
            faceColor={faceColor}
            borderColor={borderColor}
            shadowColor={shadowColor}
            animationDuration={animationDuration}
          />
          <CubeFace
            className="front"
            size={size}
            faceColor={faceColor}
            borderColor={borderColor}
            shadowColor={shadowColor}
            animationDuration={animationDuration}
          />
          <CubeFace
            className="back"
            size={size}
            faceColor={faceColor}
            borderColor={borderColor}
            shadowColor={shadowColor}
            animationDuration={animationDuration}
          />
          <CubeFace
            className="right"
            size={size}
            faceColor={faceColor}
            borderColor={borderColor}
            shadowColor={shadowColor}
            animationDuration={animationDuration}
          />
          <CubeFace
            className="left"
            size={size}
            faceColor={faceColor}
            borderColor={borderColor}
            shadowColor={shadowColor}
            animationDuration={animationDuration}
          />
        </CubeFaces>
      </Cube>
    </CubeWrapper>
  </Scene>
);

export default AnimatedCube;
`
  },
],
  dependencies: '',
  credit: (
    <span>
      <a href="https://codepen.io/haja-ran/pen/xxWRKNm" target="_blank" rel="noopener noreferrer" className="link">Bouncing Cube Loader</a> by <a href="https://codepen.io/haja-ran" target="_blank" rel="noopener noreferrer" className="link">Haja Randriakoto</a>
    </span>
  ),
}

export { metadata }