"use client"
import React from 'react';
import styles from './SpaceButton.module.css';

interface SpaceButtonProps {
  inscription: string;
  borderRadius?: string;
  borderWidth?: string;
  variant?: 'outer' | 'inner';
  isBold?: boolean;
  fontSize?: string;
  onClick?: () => void;
}

const SpaceButton: React.FC<SpaceButtonProps> = ({
  inscription,
  borderRadius = '0.76em',
  borderWidth = '2px',
  variant = 'inner',
  isBold = true,
  fontSize = '16px',
  onClick
}) => {
  const buttonStyle = {
    '--border-radius': borderRadius,
    '--border-width': borderWidth,
    fontWeight: isBold ? 'bold' : 'normal',
    fontFamily: '"Arial", "Alef", sans-serif',
    fontSize: fontSize
  } as React.CSSProperties;

  return (
    <button 
      className={`${styles.spaceButton} ${variant === 'outer' ? styles.variant : ''}`} 
      style={buttonStyle}
      onClick={onClick}
    >
      {inscription}
    </button>
  );
};

export default SpaceButton;