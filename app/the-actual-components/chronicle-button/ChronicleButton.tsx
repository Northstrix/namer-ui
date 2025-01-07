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
  borderRadius?: string;
  fontFamily?: string;
  outlinedButtonBackgroundOnHover?: string;
  customBackground?: string;
  customForeground?: string;
}

const ChronicleButton: React.FC<ChronicleButtonProps> = ({ 
  text, 
  onClick, 
  hoverColor = 'var(--chronicle-button-default-hover-color)', 
  width = '160px',
  outlined = false,
  outlinePaddingAdjustment = '2px',
  borderRadius = '0.76rem',
  fontFamily,
  outlinedButtonBackgroundOnHover = 'transparent',
  customBackground = "#f0f0f1",
  customForeground = "#1a1a24",
}) => {
  const buttonStyle = {
    '--hover-color': hoverColor,
    '--text-color': outlined ? 'var(--chronicle-button-background)' : 'var(--chronicle-button-negative-foreground)',
    '--outline-padding-adjustment': outlinePaddingAdjustment,
    '--outlined-button-background-on-hover': outlinedButtonBackgroundOnHover,
    '--chronicle-button-background': customBackground || 'var(--chronicle-button-background)',
    '--chronicle-button-foreground': customForeground || 'var(--chronicle-button-foreground)',
    width: width,
    borderRadius: borderRadius,
    fontFamily: fontFamily,
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
