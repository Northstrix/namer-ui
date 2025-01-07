'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "PricingCard.tsx" file
import PricingCard from '@/app/the-actual-components/pricing-card/PricingCard'

<div className="bg-[#212121] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  <PricingCard
    title="Free Plan" // The name of the pricing plan
    price="$0/month" // The cost of the plan
    features={[ // Array of features included in the plan. Empty strings represent blank lines.
      "1 user",
      "Basic feature set",
      "500 MB storage",
      "Community support",
      "",
      ""
    ]}
    buttonText="Start for Free" // Text displayed on the call-to-action button
    accentColor="272, 100%, 50%" // Color used for accents and hover effects (in HSL format)
    onButtonClick={() => console.log('Free Plan clicked')} // Function called when the button is clicked
    borderWidth="7px" // (Optional) Width of the border for the card
    width="320px" // (Optional) Width of the card
  />
  <PricingCard
    title="תוכנית מתחילים" // The name of the pricing plan
    price="₪49.99/חודש" // The cost of the plan
    features={[ // Array of features included in the plan. Empty strings represent blank lines.
      "עד 5 משתמשים",
      "תכונות מתקדמות",
      "10 GB אחסון",
      "תמיכה בדוא\"ל",
      "גיבוי יומי",
      ""
    ]}
    buttonText="התחל עכשיו" // Text displayed on the call-to-action button
    accentColor="221, 100%, 50%" // Color used for accents and hover effects (in HSL format)
    onButtonClick={() => console.log('Starter Plan clicked')} // Function called when the button is clicked
    mirrored={true} // (Optional) Reverses text direction and alignment
    borderRadius="2.25em" // (Optional) Border radius of the card
    maxWidth="350px" // (Optional) Maximum width of the card
    defaultBackgroundColor="#363636" // (Optional) Background color of the card
    borderColor="#ffffff56" // (Optional) Border color of the card
  />
  <PricingCard
    title="Plan Pro" // The name of the pricing plan
    price="€99.99/mes" // The cost of the plan
    features={[ // Array of features included in the plan. Empty strings represent blank lines.
      "Usuarios ilimitados",
      "Todas las características",
      "100 GB de almacenamiento",
      "Soporte prioritario",
      "Integraciones API",
      "Análisis avanzados"
    ]}
    buttonText="Actualizar a Pro" // Text displayed on the call-to-action button
    accentColor="120, 100%, 25%" // Color used for accents and hover effects (in HSL format)
    onButtonClick={() => console.log('Pro Plan clicked')} // Function called when the button is clicked
    borderColor="#ffffff22" // (Optional) Border color of the card
  />
  <PricingCard
    title="Gschäfts-Plaan" // The name of the pricing plan
    price="CHF 199.99/Monet" // The cost of the plan
    features={[ // Array of features included in the plan. Empty strings represent blank lines.
      "Unändlich Benutzer",
      "Alli Funktione",
      "Unändliche Spycherplatz",
      "Persönliche Betreuig",
      "Massagschniderti Lösige",
      "Vor-Ort-Schulig"
    ]}
    buttonText="Kontaktiered üs" // Text displayed on the call-to-action button
    accentColor="0, 100%, 50%" // Color used for accents and hover effects (in HSL format)
    onButtonClick={() => console.log('Enterprise Plan clicked')} // Function called when the button is clicked
  />
</div>

// Note: The PricingCard component accepts the following props:
// - title: string (required) - The name of the pricing plan
// - price: string (required) - The cost of the plan
// - features: string[] (required) - Array of features. Empty strings create blank lines.
// - buttonText: string (required) - Text displayed on the call-to-action button
// - accentColor: string (required) - Color used for accents and hover effects (in HSL format)
// - onButtonClick: () => void (required) - Function called when the button is clicked
// - mirrored: boolean (optional) - Reverses text direction and alignment (default: false)
// - defaultBackgroundColor: string (optional) - Background color of the card (default: '#2b2b2b')
// - borderColor: string (optional) - Border color of the card (default: '#eceff133')
// - borderWidth: string (optional) - Width of the border for the card (default: '1px')
// - borderRadius: string (optional) - Border radius of the card (default: '15px')
// - width: string (optional) - Width of the card (default: 'auto')
// - maxWidth: string (optional) - Maximum width of the card (default: '25rem')
`,
code: [
  {
    filename: 'PricingCard.tsx',
    content: `"use client"
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
      overlay.style.setProperty('--x', \`\${x}px\`);
      overlay.style.setProperty('--y', \`\${y}px\`);
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
        <ul className={\`\${styles.cardBullets} \${styles.flow} \${mirrored ? styles.mirrored : ''}\`}>
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
`
  },
  {
    filename: 'PricingCard.module.css',
    content: `.cardWrapper {
  --hsl: var(--accent-color);
  font-size: 1.1rem;
  line-height: 1.2;
  color: #ddd;
  width: auto;
  max-width: 25rem;
  position: relative;
}

.card {
  --flow-space: 0.5em;
  padding: 1.5em 2em;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  align-items: start;
  gap: 1.25em;
  color: #eceff1;
  background-color: #2b2b2b;
  border: 1px solid #eceff133;
  border-radius: 15px;
}

.emptyFeature {
  visibility: hidden;
}

.cardBullets.mirrored li::before {
  float: right;
  margin-right: 0;
  margin-left: 1ch;
}

.cardWrapper {
  direction: ltr;
}

.cardHeading {
  font-size: 1.05em;
  font-weight: 600;
}

.cardPrice {
  font-size: 1.75em;
  font-weight: 700;
}

.cardBullets {
  line-height: 1.4;
  list-style: none;
}

.cardBullets li::before {
  display: inline-block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='16' title='check' fill='%23dddddd'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z' /%3E%3C/svg%3E");
  transform: translatey(0.25ch);
  margin-right: 1ch;
}

.flow > * + * {
  margin-top: var(--flow-space, 1.25em);
}

.cta {
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #0d0d0d;
  padding: 0.7em;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

.overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  user-select: none;
  opacity: var(--opacity, 0);
  mask: radial-gradient(
    25rem 25rem at var(--x) var(--y),
    #000 1%,
    transparent 50%
  );
  transition: 400ms mask ease;
  will-change: mask;
}

.overlayCard {
  height: 100%;
  background-color: hsla(var(--hsl), 0.15);
  border: 1px solid hsla(var(--hsl), 1);
  box-shadow: 0 0 0 1px inset hsl(var(--hsl));
  border-radius: 15px;
  display: flex;
  align-items: flex-end;
  padding: 1.5em 2em;
}

.overlay .cta {
  background-color: hsl(var(--hsl));
  box-shadow: 0 0 0 1px hsl(var(--hsl));
}

.card:hover {
  background: hsla(var(--hsl), 0.1);
}
`
  },
],
  dependencies: '',
  credit: (
    <span>
      <a href="https://codepen.io/inescodes/pen/PoxMyvX" target="_blank" rel="noopener noreferrer" className="link">glowy hover effect</a> by <a href="https://codepen.io/inescodes" target="_blank" rel="noopener noreferrer" className="link">Ines</a>
    </span>
  ),
}

export { metadata }