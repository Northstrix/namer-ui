"use client"
import React, { useState } from 'react';
import styles from './HalomotButton.module.css';

interface HalomotButtonProps {
  inscription: string;
  onClick: () => void;
}

const HalomotButton: React.FC<HalomotButtonProps> = ({ inscription, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      className={styles.halomotButton}
      onClick={(e) => { e.preventDefault(); onClick(); }}
    >
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${styles.halomotButtonSpan} ${isHovered ? styles.hovered : ''}`}
      >
        {inscription}
      </span>
    </a>
  );
};

export default HalomotButton;