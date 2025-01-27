'use client'


const metadata = {
  usage: `// Path to the "BauhausFileCard.tsx" file
import BauhausFileCard from '@/app/the-actual-components/bauhaus-file-card/BauhausFileCard'

<div className="bg-[#262630] p-8 rounded-lg min-h-[300px] gap-9 flex items-center justify-center">
  <BauhausFileCard
    id="file1"
    topInscription="Size: 5.96 MB"
    fileName="Downtown Dallas.png"
    subMainText="A high-quality image featuring the stunning skyline of Downtown Dallas, showcasing its modern architecture and vibrant city life."
    filledButtonInscription="View"
    outlinedButtonInscription="Download"
    onFilledButtonClick={(id) => console.log(\`Filled button clicked for \${id}\`)}
    onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for \${id}\`)}
    onTitleClick={(id) => console.log(\`Title clicked for \${id}\`)}
    onDescriptionClick={(id) => console.log(\`Description clicked for \${id}\`)}
    onMoreOptionsClick={(id) => console.log(\`More options clicked for \${id}\`)}
  />

  <BauhausFileCard
    id="file2"
    topInscription="Size: 15.5 MB"
    fileName="Important project.zip"
    subMainText="This small archive contains code, videos, and a presentation for a very important project."
    filledButtonInscription="Extract"
    outlinedButtonInscription="Info"
    onFilledButtonClick={(id) => console.log(\`Filled button clicked for \${id}\`)}
    onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for \${id}\`)}
    onTitleClick={(id) => console.log(\`Title clicked for \${id}\`)}
    onDescriptionClick={(id) => console.log(\`Description clicked for \${id}\`)}
    onMoreOptionsClick={(id) => console.log(\`More options clicked for \${id}\`)}
  />

  <BauhausFileCard
    id="file3"
    topInscription="Grössi: 71.2 KB"
    fileName="BauhausFileCard.tsx"
    subMainText="En Code für en Bauhaus-inspirierte Datei-Container mit interaktiven Elementen."
    filledButtonInscription="Uuslade"
    outlinedButtonInscription="Teile"
    containerBorderRadius="1.76em"
    buttonRounding="0.76em"
    onFilledButtonClick={(id) => console.log(\`Filled button clicked for \${id}\`)}
    onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for \${id}\`)}
    onTitleClick={(id) => console.log(\`Title clicked for \${id}\`)}
    onDescriptionClick={(id) => console.log(\`Description clicked for \${id}\`)}
    onMoreOptionsClick={(id) => console.log(\`More options clicked for \${id}\`)}
  />

  <BauhausFileCard
    id="file4"
    topInscription="Tamaño: 250 MB"
    fileName="App tutorial.mp4"
    subMainText="Video Tutorial - Este video proporciona una guía completa sobre el uso de la aplicación y sus características."
    filledButtonInscription="Descargar"
    outlinedButtonInscription="Detalles"
    backgroundColor="#f5f5f5"
    separatorColor="#d0d0d0"
    chronicleButtonBackground="#2a2a34"
    chronicleButtonForeground="#f5f5f5"
    descriptionColor="#333333"
    fileSizeColor="#555555"
    borderWidth="6px"
    ligtenButtonColor={-0.17}
    onFilledButtonClick={(id) => console.log(\`Filled button clicked for \${id}\`)}
    onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for \${id}\`)}
    onTitleClick={(id) => console.log(\`Title clicked for \${id}\`)}
    onDescriptionClick={(id) => console.log(\`Description clicked for \${id}\`)}
    onMoreOptionsClick={(id) => console.log(\`More options clicked for \${id}\`)}
  />

  <BauhausFileCard
    id="file5"
    topInscription="2.3 KB :גודל"
    fileName="bauhaus-file-card.js"
    subMainText="קופסה לאחסון בהשראת הבאוהאוס עם אלמנטים אינטראקטיביים."
    filledButtonInscription="פתח"
    outlinedButtonInscription="שתף"
    mirrored={true}
    swapButtons={true}
    borderWidth="4px"
    onFilledButtonClick={(id) => console.log(\`Filled button clicked for \${id}\`)}
    onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for \${id}\`)}
    onTitleClick={(id) => console.log(\`Title clicked for \${id}\`)}
    onDescriptionClick={(id) => console.log(\`Description clicked for \${id}\`)}
    onMoreOptionsClick={(id) => console.log(\`More options clicked for \${id}\`)}
  />

  <BauhausFileCard
    id="file6"
    topInscription="Size: 5.7 MB"
    fileName="Financial Report.pdf"
    subMainText="The integrity of this file is compromised."
    filledButtonInscription="View"
    outlinedButtonInscription="Delete"
    metadataIntegrity={false}
    onFilledButtonClick={(id) => console.log(\`Filled button clicked for \${id}\`)}
    onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for \${id}\`)}
    onTitleClick={(id) => console.log(\`Title clicked for \${id}\`)}
    onDescriptionClick={(id) => console.log(\`Description clicked for \${id}\`)}
    onMoreOptionsClick={(id) => console.log(\`More options clicked for \${id}\`)}
  />
</div>

// Note: The BauhausFileCard component accepts the following props:
// - id: string (required) - Unique identifier for the container.
// - containerBorderRadius: string (optional) - Custom border radius for the card (default: '2.25em').
// - backgroundColor: string (optional) - Background color for the card (default: '#151419').
// - separatorColor: string (optional) - Color for the internal separator line (default: '#2F2B2A').
// - borderWidth: string (optional) - Border width for the card (default: '2px').
// - topInscription: string (required) - Text displayed at the top of the card.
// - fileName: string (required) - Name of the file being represented by the card.
// - subMainText: string (required) - Additional descriptive text about the file.
// - filledButtonInscription: string (optional) - Inscription for the filled button (default: 'Not Set!').
// - outlinedButtonInscription: string (optional) - Inscription for the outlined button (default: 'Not Set!').
// - onFilledButtonClick: (id: string) => void (required) - Callback function triggered when the filled button is clicked.
// - onOutlinedButtonClick: (id: string) => void (required) - Callback function triggered when the outlined button is clicked.
// - onTitleClick: (id: string) => void (required) - Callback function triggered when the title is clicked.
// - onDescriptionClick: (id: string) => void (required) - Callback function triggered when the description is clicked.
// - onMoreOptionsClick: (id: string) => void (required) - Callback function triggered when the more options icon is clicked.
// - metadataIntegrity: boolean (optional) - Indicates whether metadata integrity is intact (default: true).
// - mirrored: boolean (optional) - Indicates whether to render in a mirrored layout, typically for RTL languages.
// - startingPatternPosition: string (optional) - Starting position for any background patterns; defaults based on mirrored state.
// - swapButtons: boolean (optional) - Flag to swap positions of filled and outlined buttons.
// - buttonRounding: string (optional) - Rounding for buttons (default: '1.76em').
// - fileSizeColor: string (optional) - Color for displaying file size (default: '#ddd').
// - ligtenButtonColor: number (optional) - Value to lighten button colors (default: 0.32).
// - chronicleButtonBackground: string (optional) - Background color for chronicle buttons (default: '#f0f0f1').
// - chronicleButtonForeground: string (optional) - Foreground color for chronicle buttons (default: '#1a1a24').
// - descriptionColor: string (optional) - Color for description text (default: '#f7f7ff').
`,
code: [
  {
    filename: 'BauhausFileCard.tsx',
    content: `"use client"
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
    return /[\\u0590-\\u05FF\\u0600-\\u06FF\\u0700-\\u074F]/.test(text); // Hebrew, Arabic, and Persian ranges in Unicode
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
    return \`#\${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0')}\`;
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
const isJavaScriptFile = /\.(js|mjs|cjs|jsx|es6|es)$/i.test(fileName);
const hoverColor = isJavaScriptFile ? '#151419' : 'white';
const displayedTitle = fileName.length > 27 ? fileName.slice(0, 24) + '...' : fileName;
const containerSize = "336px";
  
  // Remove 'px' and parse to float
  const parsedContainerSize = parseFloat(containerSize.replace('px', ''));
  const parsedBorderWidth = parseFloat(borderWidth.replace('px', ''));

  // Calculate background pattern size
  const backgroundPatternSize = \`\${(parsedContainerSize - (parsedBorderWidth * 2)) / 16}px\`;

  console.log('Calculated Background Pattern Size:', backgroundPatternSize);
const extension = fileName.split('.').pop() || '';
const fileType = fileTypeClassification.find(type => type.extensions.includes(\`.\${extension}\`));
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
    border: \`\${borderWidth} solid transparent\`,
    '--rotation': startingPatternPosition,
    backgroundImage: metadataIntegrity
      ? \`
        linear-gradient(45deg, \${backgroundColor} 25%, transparent 25%, transparent 75%, \${backgroundColor} 75%),
        linear-gradient(-45deg, \${backgroundColor} 25%, transparent 25%, transparent 75%, \${backgroundColor} 75%),
        linear-gradient(calc(var(--rotation)), \${accentColor} 0, \${backgroundColor} 29%, transparent 85%)
      \`
      : \`
        linear-gradient(45deg, \${backgroundColor} 25%, \${backgroundColor} 25%, \${backgroundColor} 75%, \${backgroundColor} 75%),
        linear-gradient(-45deg, \${backgroundColor} 25%, \${backgroundColor} 25%, \${backgroundColor} 75%, \${backgroundColor} 75%),
        linear-gradient(calc(var(--rotation)), #ff2026 0, #ff2026 100%, transparent 80%)
      \`,
    backgroundSize: metadataIntegrity
      ? \`\${backgroundPatternSize} \${backgroundPatternSize}, \${backgroundPatternSize} \${backgroundPatternSize}, 100% 100%\`
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
      <div className={styles['card-footer']} style={{ borderTop: \`0.063rem solid \${separatorColor}\` }}>
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
      <style jsx>{\`
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
          color: \${hoverColor} !important;
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
      \`}</style>
   </div>
);
};

export default BauhausFileCard;
`
  },
  {
    filename: 'BauhausFileCard.module.css',
    content: `.card::before {
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
      gap: 12px;
      padding-top: 7px;
      padding-bottom: 7px;
      transform: translateX(-2px);
  }
  
  .size6 {
    width: 2.5rem;
    cursor: pointer;
  }
  
  .card-body {
    width: 100%;
    display: block;
    padding: 0em 1.25em 0.5em 1.5em;
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
  dependencies: `npm install @fontsource/roboto-mono --legacy-peer-deps
npm install @fontsource/alef --legacy-peer-deps
Chronicle Button
  `,
  credit: (
    <span>
      <a href="https://codepen.io/Juxtoposed/pen/mdQaNbG" target="_blank" rel="noopener noreferrer" className="link">Text scroll and hover effect with GSAP and clip</a> by <a href="https://codepen.io/Juxtoposed" target="_blank" rel="noopener noreferrer" className="link">Juxtoposed</a>
      <br />
      <a href="https://codepen.io/Juxtoposed/pen/xxQNozB" target="_blank" rel="noopener noreferrer" className="link">Vercel app border hover effect</a> by <a href="https://codepen.io/Juxtoposed" target="_blank" rel="noopener noreferrer" className="link">Juxtoposed</a>
      <br />
      <a href="https://codepen.io/kristen17/pen/NPKrxBd" target="_blank" rel="noopener noreferrer" className="link">Course design cards #scss</a> by <a href="https://codepen.io/kristen17" target="_blank" rel="noopener noreferrer" className="link">Kristen</a>
    </span>
  ),
}

export { metadata }