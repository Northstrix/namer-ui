"use client"
import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1c24;
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  animation: ${spin} 2s alternate infinite;
`;

const MetamorphicLoader: React.FC<MetamorphicLoaderProps> = ({ size, color = '#8f10f6', lighteningStep = 24 }) => {
  const circleSizes = Array.from({ length: 9 }, (_, i) => size - (i * lighteningStep));

  return (
    <CircleContainer size={size}>
      {circleSizes.map((circleSize, index) => (
        <Circle
          key={index}
          style={{
            backgroundColor: lightenColor(color, index * lighteningStep), // Lighten the color from outer to inner
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            animationDelay: `${(index + 1) * 0.1}s`,
          }}
        />
      ))}
    </CircleContainer>
  );
};

// Helper function to lighten a color
const lightenColor = (color: string, amount: number) => {
  if (!color) return '#000000'; // Default to black if color is undefined

  const rgb = color.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!rgb) return color;

  const r = parseInt(rgb[1], 16);
  const g = parseInt(rgb[2], 16);
  const b = parseInt(rgb[3], 16);

  const newR = Math.min(255, Math.max(0, r + amount));
  const newG = Math.min(255, Math.max(0, g + amount));
  const newB = Math.min(255, Math.max(0, b + amount));

  // Convert the new RGB values back to hexadecimal
  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
};

export default MetamorphicLoader;