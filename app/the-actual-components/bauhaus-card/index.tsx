'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "BauhausCard.tsx" file
import BauhausCard from '@/app/the-actual-components/bauhaus-card/BauhausCard'

<div className="bg-[#252533] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  <BauhausCard
      id="1"
      accentColor="#156ef6"
      topInscription="Uploaded on 12/31/2024"
      mainText="Financial Report.zip"
      subMainText="Downloading File..."
      progressBarInscription="Progress:"
      progress={75.98}
      progressValue="75.98%"
      filledButtonInscription="Share"
      outlinedButtonInscription="Bookmark"
      onFilledButtonClick={(id) => console.log(\`Filled button clicked for ID: \${id}\`)} 
      onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for ID: \${id}\`)} 
      onMoreOptionsClick={(id) => console.log(\`More options dots clicked for ID: \${id}\`)} 
      mirrored={false}
      swapButtons={false}
      ChronicleButtonHoverColor="#2c7cf7"
  />

  <BauhausCard
      id="2"
      accentColor="#24d200"
      topInscription="$4.99"
      mainText="Next.js Basics"
      subMainText="This course doesn't exist!"
      progressBarInscription="Spots left:"
      progress={20}
      progressValue="20/100"
      filledButtonInscription="Enroll"
      outlinedButtonInscription="Bookmark"
      onFilledButtonClick={(id) => console.log(\`Filled button clicked for ID: \${id}\`)} 
      onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for ID: \${id}\`)} 
      onMoreOptionsClick={(id) => console.log(\`More options dots clicked for ID: \${id}\`)} 
      mirrored={false}
      swapButtons={false}
      ChronicleButtonHoverColor="#29f000"
  />

  <BauhausCard
      id="3"
      borderRadius="2.25em"
      accentColor="#fc6800"
      borderWidth="3px"
      topInscription="1 de julio en Miami"
      mainText="Nombre de la conferencia"
      subMainText="Descripción de la conferencia."
      progressBarInscription="Plazas disponibles:"
      progress={10}
      progressValue="32"
      filledButtonInscription="Inscribirse"
      outlinedButtonInscription="Detalles"
      onFilledButtonClick={(id) => console.log(\`Filled button clicked for ID: \${id}\`)} 
      onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for ID: \${id}\`)} 
      onMoreOptionsClick={(id) => console.log(\`More options dots clicked for ID: \${id}\`)} 
      mirrored={false}
      swapButtons={false}
      ChronicleButtonHoverColor="#ff7717"
  />

  <BauhausCard
      id="4"
      borderRadius="1em"
      backgroundColor="#151419"
      separatorColor="#5b5452"
      accentColor="#8f10f6"
      borderWidth="4px"
      topInscription="דאלאס - תל אביב"
      mainText="מגיע בשעה 9:03 לפי"
      subMainText="שם שדה התעופה"
      progressBarInscription="מגיע בעוד:"
      progress={90}
      progressValue="30 דקות"
      filledButtonInscription="שתף"
      outlinedButtonInscription="עוד"
      onFilledButtonClick={(id) => console.log(\`Filled button clicked for ID: \${id}\`)} 
      onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for ID: \${id}\`)} 
      onMoreOptionsClick={(id) => console.log(\`More options dots clicked for ID: \${id}\`)} 
      mirrored={true}
      swapButtons={true}
      ChronicleButtonHoverColor="#a540f8"
  />
</div>

// Note: The BauhausCard component accepts the following props:
// - id: string (required) - A unique identifier for the card.
// - borderRadius: string (optional) - The border radius of the card (default: "2em").
// - backgroundColor: string (optional) - Background color for the card (default: "#151419").
// - separatorColor: string (optional) - Color for the internal separator line (default: "#2F2B2A").
// - accentColor: string (required) - Accent color used in the card design.
// - borderWidth: string (optional) - Border width of the card (default: "2px").
// - topInscription: string (required) - Text displayed at the top of the card.
// - mainText: string (required) - Main text content of the card.
// - subMainText: string (required) - Subtext content of the card.
// - progressBarInscription: string (required) - Text displayed alongside the progress bar.
// - progress: number (required) - Progress value as a percentage (0-100).
// - progressValue: string (required) - Text representation of the progress value.
// - filledButtonInscription: string (required) - Inscription for the filled button.
// - outlinedButtonInscription: string (required) - Inscription for the outlined button.
// - onFilledButtonClick: (id: string) => void (required) - Callback function when filled button is clicked.
// - onOutlinedButtonClick: (id: string) => void (required) - Callback function when outlined button is clicked.
// - onMoreOptionsClick: (id: string) => void (required) - Callback function when two dots are clicked.
// - mirrored: boolean (optional) - Whether to mirror layout for RTL languages (default: false).
// - swapButtons: boolean (optional) - Whether to swap positions of buttons (default: false).
// - ChronicleButtonHoverColor: string (optional) - Custom color for hover state of buttons.
`,
code: [
  {
    filename: 'BauhausCard.tsx',
    content: `"use client"
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
    return /[\\u0590-\\u05FF\\u0600-\\u06FF\\u0700-\\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
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
                          width: \`\${(progress / 100) * 100}%\`, 
                          backgroundColor: accentColor, height: '5px', borderRadius: '3.125rem'
                      }} 
                  />
              </div>
              <span style={{ direction: isRTL(progressValue) ? 'rtl' : 'ltr', textAlign: mirrored ? 'left' : 'right' }}>
                  {progressValue} {/* Displaying progress directly */}
              </span>
          </div>
      </div>
      <div className={styles['card-footer']} style={{ borderTop: \`0.063rem solid \${separatorColor}\` }}>
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
`
  },
  {
    filename: 'BauhausCard.module.css',
    content: `.card {
    position: relative;
    z-index: 555;
    max-width: 20rem;
    min-height: 20rem;
    width: 90%;
    display: grid;
    place-content: center;
    place-items: center;
    text-align: center;
    box-shadow: 1px 12px 25px rgb(0, 0, 0 / 78%);
    border-radius: 20px; /* Match the border-radius from your example */
  
    /* Border effect */
    border: var(--bauhaus-border-width) solid transparent; /* Use the new variable for border width */
    --rotation: 4.2rad;
    
    /* Background for the gradient border */
    background-image: 
      linear-gradient(var(--bauhaus-bg-color), var(--bauhaus-bg-color)), 
      linear-gradient(calc(var(--rotation)), var(--bauhaus-accent-color) 0, var(--bauhaus-bg-color) 30%, transparent 80%);

    background-origin: border-box; /* Ensures that the background applies to the border area */
    background-clip: padding-box, border-box; /* Clips the background correctly */
    --bauhaus-primary-color: #f0f0f1;
    color: var(--bauhaus-primary-color);
    --bauhaus-secondary-color: #ddd;
}

.card::before {
  position: absolute;
  content: "";
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 2.25rem;
  z-index: -1;
  border: 0.155rem solid transparent;
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}

.card-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8em 0.5em 0em 1.5em;
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    padding-top: 7px;
    padding-bottom: 7px;
}

.date {
  color: var(--bauhaus-secondary-color);
}

.size6 {
  width: 2.5rem;
  cursor: pointer;
}

.card-body {
  position: absolute;
  width: 100%;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.7em 1.25em 0.5em 1.5em;
}

.card-body h3 {

  font-size: 1.375rem;
  margin-top: -0.4em;
  margin-bottom: 0.188em;
  font-weight: 600;
}

.card-body p {
  color: var(--bauhaus-secondary-color);
  font-size: 1rem;
  letter-spacing: 0.031rem;
}

.progress {
  margin-top: 0.938rem;
}

.progress-bar {
  position: relative;
  width: 100%;
  background: #363636;
  height: 0.313rem;
  display: block;
  border-radius: 3.125rem;
}

.progress-bar:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  display: block;
  border-radius: 3.125rem;
}

.progress span:first-of-type {
  text-align: left;
  font-weight: 600;
  width: 100%;
  display: block;
  margin-bottom: 0.313rem;
}

.progress span {
  margin-top: 0.313rem;
  text-align: right;
  display: block;
}

.card-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
    align-items: center;
  padding: 0.7em 1.25em 0.5em 1.5em;
  border-bottom-left-radius: 2.25rem;
  border-bottom-right-radius: 2.25rem;
}

.card-footer ul {
  display: flex;
  align-items: center;
}

.card-footer li {
  list-style-type: none;
  display: flex;
  margin-right: -0.625rem;
}

.card-footer li img {
  border-radius: 50%;
  width: 1.875rem;
  height: 1.875rem;
  object-fit: cover;
}
`
  },
],
  dependencies: 'Chronicle button',
  credit: (
    <span>
      <a href="https://codepen.io/kristen17/pen/NPKrxBd" target="_blank" rel="noopener noreferrer" className="link">Course design cards #scss</a> by <a href="https://codepen.io/kristen17" target="_blank" rel="noopener noreferrer" className="link">Kristen</a>
      <br />
      <a href="https://codepen.io/Juxtoposed/pen/xxQNozB" target="_blank" rel="noopener noreferrer" className="link">Vercel app border hover effect</a> by <a href="https://codepen.io/Juxtoposed" target="_blank" rel="noopener noreferrer" className="link">Juxtoposed</a>
      <br />
      <a href="https://codepen.io/FlorinPop17/pen/yLyzmLZ" target="_blank" rel="noopener noreferrer" className="link">Custom Progress Bar</a> by <a href="https://codepen.io/FlorinPop17" target="_blank" rel="noopener noreferrer" className="link">Florin Pop</a>
    </span>
  ),
}

export { metadata }
