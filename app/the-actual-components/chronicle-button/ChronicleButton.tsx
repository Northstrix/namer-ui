"use client"
import React from 'react';
import styles from './ChronicleButton.module.css';

interface ChronicleButtonProps {
  text: string;
  onClick?: () => void;
  hoverColor?: string;
  width?: string;
  outlined?: boolean;
  outlinePaddingAdjustment?: string;
  borderRadius?: string; // New property for border radius
}

const ChronicleButton: React.FC<ChronicleButtonProps> = ({ 
  text, 
  onClick, 
  hoverColor = 'var(--chronicle-button-default-hover-color)', 
  width = '160px',
  outlined = false,
  outlinePaddingAdjustment = '2px',
  borderRadius = '0.76rem' // Default value for border radius
}) => {
  const buttonStyle = {
    '--hover-color': hoverColor,
    '--text-color': outlined ? 'var(--chronicle-button-background)' : 'var(--chronicle-button-negative-foreground',
    '--outline-padding-adjustment': outlinePaddingAdjustment,
    width: width,
    borderRadius: borderRadius, // Set the border radius directly in style
  } as React.CSSProperties;

  return (
    <button 
      className={`${styles.chronicleButton} ${outlined ? styles.outlined : ''}`}
      onClick={onClick}
      style={buttonStyle}
    >
      <span><em>{text}</em></span>
      <span><em>{text}</em></span>
    </button>
  );
};

export default ChronicleButton;
