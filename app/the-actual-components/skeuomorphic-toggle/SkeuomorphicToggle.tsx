"use client"
import React from 'react';
import styles from './SkeuomorphicToggle.module.css';

interface ToggleProps {
  label: string;
  name: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onText?: string;
  offText?: string;
  hue?: number;
  hueSuccess?: number;
}

const SkeuomorphicToggle: React.FC<ToggleProps> = ({
  label,
  name,
  checked,
  onChange,
  onText = 'ON',
  offText = 'OFF',
  hue = 223,
  hueSuccess = 103,
}) => {
  const style = {
    '--hue': hue,
    '--hue-success': hueSuccess,
  } as React.CSSProperties;

  return (
    <label className={styles.setting} style={style}>
      <span className={styles.setting__label}>{label}</span>
      <span className={styles.switch}>
        <input
          className={styles.switch__input}
          type="checkbox"
          role="switch"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <span className={styles.switch__fill} aria-hidden="true">
          <span className={styles.switch__text}>{onText}</span>
          <span className={styles.switch__text}>{offText}</span>
        </span>
      </span>
    </label>
  );
};

export default SkeuomorphicToggle;