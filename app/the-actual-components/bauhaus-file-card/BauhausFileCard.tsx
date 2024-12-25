"use client"
import React, { useEffect, useRef } from 'react';
import styles from './BauhausFileCard.module.css';
import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton'
import "@fontsource/roboto-mono/700.css";

interface FileType {
    color: string;
    type: string;
    extensions: string[];
}

const fileTypeClassification : FileType[] = [
    { color:'#2B579A', type:'Word Processing Document', extensions:['.doc', '.docx', '.docm', '.dot', '.dotx', '.dotm']},
    { color:'#2196F3', type:'Image', extensions:['.jpg', '.jpeg', '.jfif', '.pjpeg', '.pjp', '.png', '.gif', '.bmp', '.tiff', '.tif', '.webp', '.heif', '.heic', '.avif', '.eps']},
    { color:'#227447', type:'Spreadsheet', extensions:['.xls', '.xlsx', '.xlsm', '.xlsb', '.xlt', '.xltx', '.xltm', '.xla', '.xlam', '.xlw']},
    { color:'#A031EB', type:'Archive', extensions:['.zip','.rar','.7z','.tar','.gz','.bz2','.xz','.tar.gz','.tar.bz2','.tar.xz','.arc','.arj','.ace','.cab','.lz','.lzh']},
    { color:'#4332A2', type:'Binary File', extensions:['.bin']},
    { color:'#9525A5', type:'Java File', extensions:['.java','.class','.jar']},
    { color:'#D71064', type:'Presentation File ', extensions:['.ppt','.pptx','.pptm','.pps','.ppsx','.pot','.potx','.potm','.odp']},
    { color:'#D31A35', type:'PDF File ', extensions:['.pdf']},
    { color:'#E7013F', type:'Hypertext/Plaintext/Rich Text File ', extensions:['.html','.htm','.xhtml','.txt','.rtf']},
    { color:'#FEEA00', type:'JavaScript File ', extensions:['.js','.mjs','.cjs','.jsx','.es6','.es']},
    { color:'#FF5613', type:'TypeScript File ', extensions:['.ts','.tsx','.d.ts','.mts','.cts']},
    { color:'#29BF12', type:'Cascading Style Sheets ', extensions:['.css']},
    { color:'#06BE66', type:'Video File ', extensions:['.mp4','.mov','.wmv','.avi','.flv','.f4v','.mkv','.webm','.ogv','.ogg','.3gp','.m4v']},
    { color:'#41C3AA', type:'Audio File ', extensions:['.mp3','.wav','.aiff','.aac','.flac','.ogg','.m4a','.wma','.amr','.ape','.au','.ra','.rm']},
    { color:'#3D4785', type:'Unknown/Other', extensions:['']}
  ];

// Utility function to determine if text is RTL
const isRTLCheck = (text: string): boolean => {
    return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
};

const lightenColor = (hex: string, percent: number): string => {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');
    
    // Parse the r, g, b values
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
  
    // Determine if we're lightening or darkening
    const isLightening = percent >= 0;
    const adjustment = Math.abs(percent);
  
    if (isLightening) {
        // Lighten each color component
        r = Math.min(255, Math.floor(r + (255 - r) * adjustment));
        g = Math.min(255, Math.floor(g + (255 - g) * adjustment));
        b = Math.min(255, Math.floor(b + (255 - b) * adjustment));
    } else {
        // Darken each color component
        r = Math.max(0, Math.floor(r * (1 - adjustment)));
        g = Math.max(0, Math.floor(g * (1 - adjustment)));
        b = Math.max(0, Math.floor(b * (1 - adjustment)));
    }
  
    // Convert back to hex and return
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0')}`;
};

interface BauhausFileCard {
    id: string;
    containerBorderRadius?: string;
    backgroundColor?: string;
    separatorColor?: string;
    borderWidth?: string;
    topInscription: string;
    fileName: string;
    subMainText: string;
    filledButtonInscription?: string;
    outlinedButtonInscription?: string;
    onFilledButtonClick: (id: string) => void;
    onOutlinedButtonClick: (id: string) => void;
    onTitleClick: (id: string) => void;
    onDescriptionClick: (id: string) => void;
    onMoreOptionsClick: (id: string) => void;
    metadataIntegrity?: boolean;
    mirrored?: boolean;
    startingPatternPosition?: string;
    swapButtons?: boolean;
    buttonRounding?: string;
    fileSizeColor?: string;
    ligtenButtonColor?: number;
    chronicleButtonBackground?: string;
    chronicleButtonForeground?: string;
    descriptionColor?: string;
}

const BauhausFileCard: React.FC<BauhausFileCard> = ({
    id,
    containerBorderRadius = "2.25em",
    backgroundColor = "#151419",
    separatorColor = "#2F2B2A",
    borderWidth = "2px",
    topInscription = "Not Set!",
    fileName = "Not Set!",
    subMainText = "Not Set!",
    filledButtonInscription = "Not Set!",
    outlinedButtonInscription = "Not Set!",
    onFilledButtonClick,
    onOutlinedButtonClick,
    onTitleClick,
    onDescriptionClick,
    onMoreOptionsClick,
    metadataIntegrity = true,
    mirrored,
    startingPatternPosition = mirrored ? "2.1rad" : "4.2rad",
    swapButtons = false,
    buttonRounding = "1.76em",
    fileSizeColor = "#ddd",
    ligtenButtonColor = 0.32,
    chronicleButtonBackground = "#f0f0f1",
    chronicleButtonForeground = "#1a1a24",
    descriptionColor = "#f7f7ff",
}) => {

const cardRef = useRef<HTMLDivElement>(null);
const isJavaScriptFile = /.(js|mjs|cjs|jsx|es6|es)$/i.test(fileName);
const hoverColor = isJavaScriptFile ? '#151419' : 'white';
const displayedTitle = fileName.length > 27 ? fileName.slice(0, 24) + '...' : fileName;
const containerSize = "336px";
  
  // Remove 'px' and parse to float
  const parsedContainerSize = parseFloat(containerSize.replace('px', ''));
  const parsedBorderWidth = parseFloat(borderWidth.replace('px', ''));

  // Calculate background pattern size
  const backgroundPatternSize = `${(parsedContainerSize - (parsedBorderWidth * 2)) / 16}px`;

  console.log('Calculated Background Pattern Size:', backgroundPatternSize);
const extension = fileName.split('.').pop() || '';
const fileType = fileTypeClassification.find(type => type.extensions.includes(`.${extension}`));
const accentColor = fileType ? fileType.color : '#3D4785';
const buttonFontFamily = mirrored 
? '"Arial", "Alef", sans-serif' 
: '"Roboto Mono", monospace';
const filledChronicleButtonHoverColor = lightenColor(accentColor, ligtenButtonColor);
const oulinedChronicleButtonHoverColor = lightenColor(accentColor, ligtenButtonColor);

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
    position: 'relative',
    zIndex: 555,
    width: containerSize,
    height: containerSize,
    display: 'grid',
    placeContent: 'center',
    placeItems: 'center',
    textAlign: 'center',
    boxShadow: '1px 12px 25px rgba(0, 0, 0, 0.78)',
    borderRadius: containerBorderRadius,
    border: `${borderWidth} solid transparent`,
    '--rotation': startingPatternPosition,
    backgroundImage: metadataIntegrity
      ? `
        linear-gradient(45deg, ${backgroundColor} 25%, transparent 25%, transparent 75%, ${backgroundColor} 75%),
        linear-gradient(-45deg, ${backgroundColor} 25%, transparent 25%, transparent 75%, ${backgroundColor} 75%),
        linear-gradient(calc(var(--rotation)), ${accentColor} 0, ${backgroundColor} 29%, transparent 85%)
      `
      : `
        linear-gradient(45deg, ${backgroundColor} 25%, ${backgroundColor} 25%, ${backgroundColor} 75%, ${backgroundColor} 75%),
        linear-gradient(-45deg, ${backgroundColor} 25%, ${backgroundColor} 25%, ${backgroundColor} 75%, ${backgroundColor} 75%),
        linear-gradient(calc(var(--rotation)), #ff2026 0, #ff2026 100%, transparent 80%)
      `,
    backgroundSize: metadataIntegrity
      ? `${backgroundPatternSize} ${backgroundPatternSize}, ${backgroundPatternSize} ${backgroundPatternSize}, 100% 100%`
      : '100% 100%, 100% 100%',
    backgroundOrigin: 'padding-box, padding-box, border-box',
    backgroundClip: 'padding-box, padding-box, border-box',
    backgroundColor: backgroundColor,
    '--bauhaus-primary-color': '#f0f0f1',
    color: 'var(--bauhaus-primary-color)',
    '--bauhaus-secondary-color': '#ddd',
    fontFamily: '"Roboto Mono", monospace',
    '--bauhaus-bg-color': backgroundColor,
    '--bauhaus-accent-color': accentColor,
    '--bauhaus-border-width': borderWidth,
  } as React.CSSProperties}
  ref={cardRef}
>

      <div style={{
                transform: mirrored ? 'scaleX(-1)' : 'none'
              }}
              className={styles['card-header']}>
          <div className={styles.date} style={{
                transform: mirrored ? 'scaleX(-1)' : 'none',
                color: fileSizeColor,
                fontFamily: mirrored ? '"Arial", "Alef", sans-serif' : '"Roboto Mono", monospace' }}>
                    {topInscription}
          </div>
          
          <div 
              className={styles.moreOptions} 
          >
              <svg viewBox="0 0 24 24" fill={descriptionColor} onClick={() => onMoreOptionsClick(id)} className={styles.size6}>
                  {
                  <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5" clipRule="evenodd" />
                  }
              </svg>
          </div>
      </div>
      <div className={styles['card-body']}>
      <h1 
        style={{ 
            direction: isRTLCheck(displayedTitle) ? 'rtl' : 'ltr', 
            color: accentColor,
            fontFamily: isRTLCheck(displayedTitle) ? '"Arial", "Alef", sans-serif' : '"Roboto Mono", monospace'
        }}
        className="text"
        onClick={() => onTitleClick(id)}
        >
        <span className="title" title={displayedTitle}>{displayedTitle}</span>
        <span className="text-effect" style={{ backgroundColor: accentColor }}></span>
      </h1>

      <p 
        style={{ 
          direction: isRTLCheck(subMainText) ? 'rtl' : 'ltr',
          color: descriptionColor,
          fontFamily: isRTLCheck(subMainText) ? '"Arial", "Alef", sans-serif' : '"Roboto Mono", monospace'
        }} 
        className="description" 
        onClick={() => onDescriptionClick(id)}
      >
        {subMainText}
      </p>
      </div>
      <div className={styles['card-footer']} style={{ borderTop: `0.063rem solid ${separatorColor}` }}>
        <div className={styles['button-container']}>
            {swapButtons ? (
                <>
                    <ChronicleButton 
                        text={outlinedButtonInscription} 
                        outlined={true} 
                        width="136px" 
                        onClick={() => onOutlinedButtonClick(id)} 
                        hoverColor={oulinedChronicleButtonHoverColor} 
                        outlinedButtonBackgroundOnHover={backgroundColor}
                        fontFamily={buttonFontFamily}
                        borderRadius={buttonRounding}
                        customBackground={chronicleButtonBackground}
                        customForeground={chronicleButtonForeground}
                    />
                    <ChronicleButton 
                        text={filledButtonInscription} 
                        width="136px" 
                        onClick={() => onFilledButtonClick(id)} 
                        hoverColor={filledChronicleButtonHoverColor}
                        fontFamily={buttonFontFamily}
                        borderRadius={buttonRounding}
                        customBackground={chronicleButtonBackground}
                        customForeground={chronicleButtonForeground}
                    />
                </>
            ) : (
                <>
                    <ChronicleButton 
                        text={filledButtonInscription} 
                        width="136px" 
                        onClick={() => onFilledButtonClick(id)} 
                        hoverColor={filledChronicleButtonHoverColor}
                        fontFamily={buttonFontFamily}
                        borderRadius={buttonRounding}
                        customBackground={chronicleButtonBackground}
                        customForeground={chronicleButtonForeground}
                    />
                    <ChronicleButton 
                        text={outlinedButtonInscription} 
                        outlined={true} 
                        width="136px" 
                        onClick={() => onOutlinedButtonClick(id)} 
                        hoverColor={oulinedChronicleButtonHoverColor} 
                        outlinedButtonBackgroundOnHover={backgroundColor}
                        fontFamily={buttonFontFamily}
                        borderRadius={buttonRounding}
                        customBackground={chronicleButtonBackground}
                        customForeground={chronicleButtonForeground}
                    />
                </>
            )}
        </div>
      </div>
      <style jsx>{`
        .text {
          font-size: 20px;
          font-weight: bold;
          letter-spacing: -.01em;
          line-height: normal;
          margin-bottom: -1px;
          width: auto;
          transition: color 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transform: translateY(-23px);
        }
        .text:hover {
          color: ${hoverColor} !important;
        }
        .title {
          position: relative;
          z-index: 10;
          font-size: 17.6px;
          padding: 2px 4px;
        }
        .text-effect {
          clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
          transform-origin: center;
          transition: all cubic-bezier(.1,.5,.5,1) 0.4s;
          position: absolute;
          left: -4px;
          right: -4px;
          top: -4px;
          bottom: -4px;
          z-index: 0;
        }
        .text:hover > .text-effect {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }
        .filesize {
          font-size: 16px;
          color: white;
          padding-top: 16px;
        }
        .description {
          font-size: 17px;
          color: white;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          cursor: pointer;
          transform: translateY(-4px);
        }
        .button-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          padding-top: 16px;
        }
      `}</style>
   </div>
);
};

export default BauhausFileCard;