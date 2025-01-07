"use client"
import React, { useRef, useEffect } from 'react';
import styles from './PricingCard.module.css';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  accentColor: string;
  onButtonClick: () => void;
  mirrored?: boolean;
  defaultBackgroundColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  width?: string;
  maxWidth?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  buttonText,
  accentColor,
  onButtonClick,
  mirrored = false,
  defaultBackgroundColor,
  borderColor,
  borderWidth,
  borderRadius,
  width,
  maxWidth
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const overlay = overlayRef.current;

    if (!card || !overlay) return;

    const applyOverlayMask = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      overlay.style.setProperty('--opacity', '1');
      overlay.style.setProperty('--x', `${x}px`);
      overlay.style.setProperty('--y', `${y}px`);
    };

    const resetOverlay = () => {
      overlay.style.setProperty('--opacity', '0');
    };

    card.addEventListener('mousemove', applyOverlayMask);
    card.addEventListener('mouseleave', resetOverlay);

    return () => {
      card.removeEventListener('mousemove', applyOverlayMask);
      card.removeEventListener('mouseleave', resetOverlay);
    };
  }, []);

  const wrapperStyle: React.CSSProperties = {
    ['--accent-color' as string]: accentColor,
    direction: mirrored ? 'rtl' : 'ltr',
    width: width || 'auto',
    maxWidth: maxWidth || '25rem',
  };

  const cardStyle: React.CSSProperties = {
    textAlign: mirrored ? 'right' : 'left',
    backgroundColor: defaultBackgroundColor || '#2b2b2b',
    borderColor: borderColor || '#eceff133',
    borderWidth: borderWidth || '1px',
    borderRadius: borderRadius || '15px',
  };

  const overlayCardStyle: React.CSSProperties = {
    borderWidth: borderWidth || '1px',
    borderRadius: borderRadius || '15px',
  };

  return (
    <div 
      className={styles.cardWrapper} 
      ref={cardRef} 
      style={wrapperStyle}
    >
      <div className={styles.card} style={cardStyle}>
        <h2 className={styles.cardHeading}>{title}</h2>
        <p className={styles.cardPrice}>{price}</p>
        <ul className={`${styles.cardBullets} ${styles.flow} ${mirrored ? styles.mirrored : ''}`}>
          {features.map((feature, index) => (
            <li key={index} className={feature === "" ? styles.emptyFeature : ''}>
              {feature}
            </li>
          ))}
        </ul>
        <button onClick={onButtonClick} className={styles.cta}>{buttonText}</button>
      </div>
      <div className={styles.overlay} ref={overlayRef}>
        <div className={styles.overlayCard} style={overlayCardStyle}>
          <button onClick={onButtonClick} className={styles.cta}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;