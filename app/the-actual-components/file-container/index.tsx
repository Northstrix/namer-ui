'use client'


const metadata = {
  usage: `// Path to the "FileContainer.tsx" file
import FileContainer from '@/app/the-actual-components/file-container/FileContainer'

{/* Basic usage example */}
<FileContainer 
  id="1" // Unique identifier for the container
  title="Miami_skyline_at_night.jpg" // Title of the file
  fileSize="Size: 4.51 MB" // Size of the file displayed to the user
  description="A stunning photograph of the Miami skyline illuminated at night, showcasing the vibrant city lights and reflections on the water." // Description of the file's content
  onFilledButtonClick={(id) => console.log(\`Filled button clicked for file (ID: N\${id})\`)} // Updated inscription for filled button
  onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for file (ID: N\${id})\`)} // Updated inscription for outlined button
  onTitleClick={(id) => console.log(\`Title clicked for file (ID: N\${id})\`)} // Function called when the title is clicked
  onDescriptionClick={(id) => console.log(\`Description clicked for file (ID: N\${id})\`)} // Function called when the description is clicked
  filledButtonInscription="Download" // Required text for filled button inscription
  outlinedButtonInscription="Properties" // Required text for outlined button inscription
/>

{/* Second container for a zip archive, fully in Hebrew with swapped buttons */}
<FileContainer 
  id="2" // Unique identifier for the container
  title="קובץ_דחוס_חשוב.zip" // "Important Compressed File"
  fileSize="גודל: 100.12 MB" // "Size:" in Hebrew
  description="קובץ דחוס המכיל מסמכים חשובים שצריך לעבור עליהם לפני הפגישה, כולל דוחות ומצגות." // "A compressed file containing important documents to review before the meeting, including reports and presentations."
  onFilledButtonClick={(id) => console.log(\`Filled button clicked for file (ID: N\${id})\`)} // Updated inscription for filled button
  onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for file (ID: N\${id})\`)} // Updated inscription for outlined button
  onTitleClick={(id) => console.log(\`Title clicked for file (ID: N\${id})\`)} // Function called when the title is clicked
  onDescriptionClick={(id) => console.log(\`Description clicked for file (ID: N\${id})\`)} // Function called when the description is clicked
  metadataIntegrity={true} // Indicates if metadata integrity is maintained (optional)
  filledButtonInscription="הורדה" // "Download" in Hebrew (required)
  outlinedButtonInscription="שתף" // "Share" in Hebrew (required)
  swapButtons={true} // Optional, defaults to false; determines if buttons should be swapped
  borderWidth={3} // Width of the border (optional)
/>

{/* Third container for a TypeScript file */}
<FileContainer 
  id="3" // Unique identifier for the container
  title="FileContainer.tsx" // Title of the TypeScript file
  fileSize="Size: 15.3 KB" // Size of the TypeScript file displayed to the user
  description="This TypeScript file contains essential components and logic for rendering the FileContainer component in your application." // Description of its content
  onFilledButtonClick={(id) => console.log(\`Filled button clicked for file (ID: N\${id})\`)} // Updated inscription for filled button
  onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for file (ID: N\${id})\`)} // Updated inscription for outlined button
  onTitleClick={(id) => console.log(\`Title clicked for file (ID: N\${id})\`)} // Function called when the title is clicked
  onDescriptionClick={(id) => console.log(\`Description clicked for file (ID: N\${id})\`)} // Function called when the description is clicked
  metadataIntegrity={false} // Indicates if metadata integrity is maintained (optional)
  filledButtonInscription="Send" // Required text for filled button inscription
  outlinedButtonInscription="More" // Required text for outlined button inscription
  borderWidth={1} // Width of the border (optional)
/>

{/* Fourth container for a JavaScript definition file */}
<FileContainer 
  id="4" // Unique identifier for the container
  title="app_logic.js" // Title of the JavaScript file
  fileSize="Size: 45.7 KB" // Size of the JavaScript file displayed to the user
  description="This JavaScript file contains essential application logic that is crucial for the functionality of the web application. Ensure all functions are properly defined." // Description of its content
  onFilledButtonClick={(id) => console.log(\`Filled button clicked for file (ID: N\${id})\`)} // Updated inscription for filled button
  onOutlinedButtonClick={(id) => console.log(\`Outlined button clicked for file (ID: N\${id})\`)} // Updated inscription for outlined button
  onTitleClick={(id) => console.log(\`Title clicked for file (ID: N\${id})\`)} // Function called when the title is clicked
  onDescriptionClick={(id) => console.log(\`Description clicked for file (ID: N\${id})\`)} // Function called when the description is clicked
  filledButtonInscription="Download" // Required text for filled button inscription
  outlinedButtonInscription="Properties" // Required text for outlined button inscription
  borderWidth={4} // Width of the border (optional)
/>

// Note: The FileContainer component accepts the following props:
// - id: string (required) - Unique identifier for the container
// - title: string (required) - The title of the file
// - fileSize: string (required) - The size of the file
// - description: string (required) - A brief description of the file
// - onFilledButtonClick: (id: string) => void (optional) - Function to call when filled button is clicked
// - onOutlinedButtonClick: (id: string) => void (optional) - Function to call when outlined button is clicked
// - onTitleClick: (id: string) => void (optional) - Function to call when title is clicked
// - onDescriptionClick: (id: string) => void (optional) - Function to call when description is clicked
// - metadataIntegrity?: boolean (optional, default: true) - Indicates if metadata integrity is maintained
// - swapButtons?: boolean (optional, default: false) - Determines if buttons should be swapped
// - filledButtonInscription?: string (required) - Text for filled button inscription 
// - outlinedButtonInscription?: string (required) - Text for outlined button inscription 
// - borderWidth?: number (optional, default: 2) - Width of the border
`,
code: [
  {
    filename: 'FileContainer.tsx',
    content: `"use client";

import React, { useRef, useEffect, useState } from 'react';
import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton';
import "@fontsource/roboto-mono/700.css";

interface FileContainerProps {
  id: string;
  title: string;
  fileSize: string;
  description: string;
  onFilledButtonClick: (id: string) => void; // Renamed from onGetTag
  onOutlinedButtonClick: (id: string) => void; // Renamed from onShowAllOptions
  onTitleClick: (id: string) => void;
  onDescriptionClick: (id: string) => void;
  metadataIntegrity?: boolean;
  swapButtons?: boolean;
  filledButtonInscription?: string; // New property for filled button inscription
  outlinedButtonInscription?: string; // New property for outlined button inscription
  borderWidth?: number; // New property for border width
}

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

const FileContainer: React.FC<FileContainerProps> = ({
  id,
  title,
  fileSize,
  description,
  onFilledButtonClick, // Updated prop name
  onOutlinedButtonClick, // Updated prop name
  onTitleClick,
  onDescriptionClick,
  metadataIntegrity = true,
  swapButtons = false,
  filledButtonInscription = "Not Set!", // Default inscription
  outlinedButtonInscription = "Not Set!", // Default inscription
  borderWidth = 2, // Default value for borderWidth
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inputDir, setInputDir] = useState<'ltr' | 'rtl'>('ltr');
  const checkRTL = (text: string) => /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);
  const fileExtension = title.split('.').pop()?.toLowerCase() || '';
  const fileType = fileTypeClassification.find(type => type.extensions.includes(\`.\${fileExtension}\`)) || fileTypeClassification[fileTypeClassification.length - 1];
  const color = fileType.color;
  const isJavaScriptFile = ['js', 'mjs', 'cjs', 'jsx', 'es6', 'es'].includes(fileExtension);
  const hoverColor = isJavaScriptFile ? '#242424' : 'white';
  const displayedTitle = title.length > 27 ? title.slice(0, 24) + '...' : title;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const angle = Math.atan2(-x, y);
      container.style.setProperty("--file-container-rotation", \`\${angle}rad\`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const backgroundGradient = metadataIntegrity
    ? \`linear-gradient(var(--file-container-rotation), var(--file-container-default-color), var(--file-container-default-color) 20%, var(--file-container-second-color) 80%, var(--file-container-second-color))\`
    : \`linear-gradient(var(--file-container-rotation), var(--file-container-error-color), var(--file-container-error-color))\`;

  useEffect(() => {
    setInputDir(checkRTL(title) || checkRTL(description) ? 'rtl' : 'ltr');
  }, [title, description]);

  return (
    <div 
      className="file-container" 
      ref={containerRef} 
      style={{ '--border-width': \`\${borderWidth}px\` } as React.CSSProperties} // Cast to React.CSSProperties
    >
      <div className="inner-container">
        <div className="content">
          <h1 className="text" style={{ direction: inputDir }} onClick={() => onTitleClick(id)}>
            <span className="title" title={title}>{displayedTitle}</span>
            <span className="text-effect" style={{ backgroundColor: color }}></span>
          </h1>
          <p className="filesize" style={{ direction: inputDir }}>{fileSize}</p>
          <p className="description" style={{ direction: inputDir }} onClick={() => onDescriptionClick(id)}>{description}</p>
          <div className="button-container">
            {swapButtons ? (
              <>
                <ChronicleButton text={outlinedButtonInscription} outlined={true} width="136px" onClick={() => onOutlinedButtonClick(id)} />
                <ChronicleButton text={filledButtonInscription} width="136px" onClick={() => onFilledButtonClick(id)} />
              </>
            ) : (
              <>
                <ChronicleButton text={filledButtonInscription} width="136px" onClick={() => onFilledButtonClick(id)} />
                <ChronicleButton text={outlinedButtonInscription} outlined={true} width="136px" onClick={() => onOutlinedButtonClick(id)} />
              </>
            )}
          </div>
        </div>
      </div>
     <style jsx>{\`
        .file-container {
          --file-container-rotation: 2.5rad;
          --file-container-default-color: #834cd0;
          --file-container-second-color: #f0f0f1;
          --file-container-error-color: #ff2026;
          --file-container-foreground: #f0f0f1;
          --file-container-border-radius: 0.76rem;
          --file-container-form-background: #020207;

          width: 352px; /* Default width */
          height: 352px; /* Default height */
          border: var(--border-width) solid transparent; /* Change this line */
          border-radius: var(--file-container-border-radius);
          background-image: linear-gradient(var(--file-container-form-background), var(--file-container-form-background)), \${backgroundGradient};
          background-origin: border-box;
          background-clip: padding-box, border-box;
          position: relative;
          overflow: hidden;
          font-family: 'Roboto Mono', monospace;
          padding: 14px;
        }

        .inner-container {
          width: calc(324px - var(--border-width) * 2); /* Change this line */
          height: calc(324px - var(--border-width) * 2); /* Change this line */
          border-radius: var(--file-container-border-radius);
          overflow: hidden;
        }
        .content {
          position: relative;
          z-index: 20;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 20px 16px;
        }
        .content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(230, 230, 230, 0.3) 25%, transparent 25%, transparent 75%, rgba(240, 240, 240, 0.3) 75%), linear-gradient(-45deg, rgba(240, 240, 240, 0.3) 25%, transparent 25%, transparent 75%, rgba(230, 230, 230, 0.3) 75%);
          background-size: calc((324px - var(--border-width) * 2)/16) calc((324px - var(--border-width) * 2)/16);
          opacity: 0.5;
          z-index: -1;
        }
        .text {
          font-size: 20px;
          font-weight: bold;
          letter-spacing: -.01em;
          line-height: normal;
          margin-bottom: -1px;
          width: auto;
          color: \${color};
          transition: color 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
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
          color: var(--file-container-foreground);
          padding-top: 16px;
        }
        .description {
          font-size: 17px;
          color: var(--file-container-foreground);
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          cursor: pointer;
          padding-top: 8px;
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

export default FileContainer;
`
  },
],
  dependencies: `npm install @fontsource/roboto-mono --legacy-peer-deps
Chronicle button
  `,
  credit: (
    <span>
      <a href="https://codepen.io/Juxtoposed/pen/mdQaNbG" target="_blank" rel="noopener noreferrer" className="link">Text scroll and hover effect with GSAP and clip</a> by <a href="https://codepen.io/Juxtoposed" target="_blank" rel="noopener noreferrer" className="link">Juxtoposed</a>
      <br />
      <a href="https://codepen.io/Juxtoposed/pen/xxQNozB" target="_blank" rel="noopener noreferrer" className="link">Vercel app border hover effect</a> by <a href="https://codepen.io/Juxtoposed" target="_blank" rel="noopener noreferrer" className="link">Juxtoposed</a>
      <br />
    </span>
  ),
}

export { metadata }