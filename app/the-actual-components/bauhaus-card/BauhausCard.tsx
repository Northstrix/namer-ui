"use client"
import React, { useEffect, useRef } from 'react';
import styles from './BauhausCard.module.css';
import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton';
import "@fontsource/roboto-mono/700.css";

interface BauhausCard {
    id: string;
    borderRadius?: string;
    backgroundColor?: string; // Background color for the card
    separatorColor?: string; // Color for the internal separator line
    accentColor: string; // New prop for accent color
    borderWidth?: string; // New prop for border width
    topInscription: string;
    mainText: string;
    subMainText: string;
    progressBarInscription: string;
    progress: number;
    progressValue: string;
    filledButtonInscription?: string; // New property for filled button inscription
    outlinedButtonInscription?: string; // New property for outlined button inscription
    onFilledButtonClick: (id: string) => void; // Renamed from onGetTag
    onOutlinedButtonClick: (id: string) => void; // Renamed from onShowAllOptions
    onMoreOptionsClick: (id: string) => void; // New prop for More Options click handler
    mirrored?: boolean;
    swapButtons?: boolean;
    ChronicleButtonHoverColor?: string; // New prop for button hover color
}

// Utility function to determine if text is RTL
const isRTL = (text: string): boolean => {
    return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
};

const BauhausCard: React.FC<BauhausCard> = ({
    id,
    borderRadius = "2em",
    backgroundColor = "#151419", // Default value if not provided
    separatorColor = "#2F2B2A",
    accentColor,
    borderWidth = "2px", // Default border width
    topInscription = "Not Set!",
    swapButtons = false,
    mainText = "Not Set!",
    subMainText = "Not Set!",
    progressBarInscription = "Not Set!",
    progress = 0,
    progressValue = "Not Set!",
    filledButtonInscription = "Not Set!", // Default inscription
    outlinedButtonInscription = "Not Set!", // Default inscription
    onFilledButtonClick, // Updated prop name
    onOutlinedButtonClick, // Updated prop name
    onMoreOptionsClick, // New prop for More Options click handler
    mirrored = false,
    ChronicleButtonHoverColor = 'var(--chronicle-button-default-hover-color)', // Default hover color
}) => {

const cardRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const card = cardRef.current;

  const handleMouseMove = (e: MouseEvent) => {
      if (card) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          const angle = Math.atan2(-x, y);
          card.style.setProperty("--rotation", angle + "rad");
      }
  };

  if (card) {
      card.addEventListener("mousemove", handleMouseMove);
  }

  return () => {
      if (card) {
          card.removeEventListener("mousemove", handleMouseMove);
      }
  };
}, []);

return (
  <div
      className={styles.card}
      style={{
          borderRadius,
          backgroundColor, // This sets the inner background color
          '--bauhaus-bg-color': backgroundColor, // Set CSS variable for gradient color
          '--bauhaus-accent-color': accentColor, // Set CSS variable for accent color
          '--bauhaus-border-width': borderWidth, // Set CSS variable for border width
      } as React.CSSProperties} // Type assertion here
      ref={cardRef}
  >
      <div style={{
                transform: mirrored ? 'scaleX(-1)' : 'none'
              }}
              className={styles['card-header']}>
          <div className={styles.date} style={{
                transform: mirrored ? 'scaleX(-1)' : 'none',
                direction: isRTL(topInscription) ? 'rtl' : 'ltr' }}>
              {topInscription}
          </div>
          <div 
              className={styles.moreOptions} 
              onClick={() => onMoreOptionsClick(id)} 
              style={{ cursor: 'pointer' }} 
          >
              <svg viewBox="0 0 24 24" fill="var(--bauhaus-primary-color)" className={styles.size6}>
                  <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5" clipRule="evenodd" />
              </svg>
          </div>
      </div>
      <div className={styles['card-body']}>
          <h3 style={{ direction: isRTL(mainText) ? 'rtl' : 'ltr' }}>{mainText}</h3>
          <p style={{ direction: isRTL(subMainText) ? 'rtl' : 'ltr' }}>{subMainText}</p>
          <div className={styles.progress}>
              <span style={{ direction: isRTL(progressBarInscription) ? 'rtl' : 'ltr', textAlign: mirrored ? 'right' : 'left' }}>{progressBarInscription}</span>
              <div style={{
                        transform: mirrored ? 'scaleX(-1)' : 'none'
                      }}
                      className={styles['progress-bar']}>
                  <div 
                      className={styles['progress-bar-after']} 
                      style={{
                          width: `${(progress / 100) * 100}%`, 
                          backgroundColor: accentColor, height: '5px', borderRadius: '3.125rem'
                      }} 
                  />
              </div>
              <span style={{ direction: isRTL(progressValue) ? 'rtl' : 'ltr', textAlign: mirrored ? 'left' : 'right' }}>
                  {progressValue} {/* Displaying progress directly */}
              </span>
          </div>
      </div>
      <div className={styles['card-footer']} style={{ borderTop: `0.063rem solid ${separatorColor}` }}>
        <div className={styles['button-container']}>
            {swapButtons ? (
                <>
                    <ChronicleButton 
                        text={outlinedButtonInscription} 
                        outlined={true} 
                        width="124px" 
                        onClick={() => onOutlinedButtonClick(id)} 
                        borderRadius={borderRadius} 
                        hoverColor={ChronicleButtonHoverColor} 
                    />
                    <ChronicleButton 
                        text={filledButtonInscription} 
                        width="124px" 
                        onClick={() => onFilledButtonClick(id)} 
                        borderRadius={borderRadius} 
                        hoverColor={ChronicleButtonHoverColor} 
                    />
                </>
            ) : (
                <>
                    <ChronicleButton 
                        text={filledButtonInscription} 
                        width="124px" 
                        onClick={() => onFilledButtonClick(id)} 
                        borderRadius={borderRadius} 
                        hoverColor={ChronicleButtonHoverColor} 
                    />
                    <ChronicleButton 
                        text={outlinedButtonInscription} 
                        outlined={true} 
                        width="124px" 
                        onClick={() => onOutlinedButtonClick(id)} 
                        borderRadius={borderRadius} 
                        hoverColor={ChronicleButtonHoverColor} 
                    />
                </>
            )}
        </div>
      </div>
   </div>
);
};

export default BauhausCard;