"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    border-radius: 50%;
    transform: rotate(0deg);
  }
  20% {
    border-radius: 50%;
    transform: rotate(0deg);
  }
  90% {
    border-radius: 5%;
    transform: rotate(90deg);
  }
  100% {
    border-radius: 5%;
    transform: rotate(90deg);
  }
`;

interface MetamorphicLoaderProps {
  size: number; // Size of the largest circle
  color?: string; // Base color for the circles (optional)
  lighteningStep?: number; // Step for lightening the color (optional)
}

const CircleContainer = styled.div<MetamorphicLoaderProps>`
  position: relative;          /* added to contain absolutely positioned children */
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  animation: ${spin} 2s alternate infinite;
`;

const MetamorphicLoader: React.FC<MetamorphicLoaderProps> = ({
  size,
  color = "#8f10f6",
  lighteningStep = 24,
}) => {
  const circleSizes = Array.from({ length: 9 }, (_, i) => size - i * lighteningStep);

  return (
    <CircleContainer size={size}>
      {circleSizes.map((circleSize, index) => (
        <Circle
          key={index}
          style={{
            backgroundColor: lightenColor(color, index * lighteningStep), // Lighten color from outer to inner
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            animationDelay: `${(index + 1) * 0.1}s`,
          }}
        />
      ))}
    </CircleContainer>
  );
};

// Helper function to lighten a hex color by a given amount
const lightenColor = (color: string, amount: number) => {
  if (!color) return "#000000"; // Default black

  const rgb = color.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!rgb) return color;

  const r = Math.min(255, Math.max(0, parseInt(rgb[1], 16) + amount));
  const g = Math.min(255, Math.max(0, parseInt(rgb[2], 16) + amount));
  const b = Math.min(255, Math.max(0, parseInt(rgb[3], 16) + amount));

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b
    .toString(16)
    .padStart(2, "0")}`;
};

export default MetamorphicLoader;