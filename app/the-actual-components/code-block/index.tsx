'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "CodeBlock.tsx" file
import CodeBlock from '@/app/the-actual-components/code-block/CodeBlock'

  const sampleCodeForCodeBlock = \`try {
    Swal.fire({
      title: t('generating mlkem1024-key-pair'), // Use translation key for this message
      html: \`<p dir="\${isRTL ? 'rtl' : 'ltr'}">\${t('please_wait')}</p>\`, // Use translation key for this message
      color: "var(--foreground)",
      background: "var(--card-background)",
      width: 640,
      allowOutsideClick: false,
      customClass: {
        popup: "swal-custom-popup", // Custom class for styling
      },
      didOpen: () => {
          Swal.showLoading();
      }
  });
    const recipient = new MlKem1024();
    const [pkR, skR] = await recipient.generateKeyPair();
    //console.log("Generated Public Key:", pkR);
    //console.log("Generated Private Key:", skR);
    if (user) {        
      try {
        Swal.fire({
          title: t('uploading_mlkem_public_key_to_firebase'), // Use translation key for this message
          html: \`<p dir="\${isRTL ? 'rtl' : 'ltr'}">\${t('please_wait')}</p>\`, // Use translation key for this message
          color: "var(--foreground)",
          background: "var(--card-background)",
          width: 640,
          allowOutsideClick: false,
          customClass: {
            popup: "swal-custom-popup", // Custom class for styling
          },
          didOpen: () => {
              Swal.showLoading();
          }
      });
        // Convert public key to hex string
        const publicKey = btoa(String.fromCharCode(...pkR));
        
        // Create an object to store the public key
        const publicKeyData = {
          publicKey
        };
        
        // Create a document reference in Firestore with the new path
        const docRef = doc(collection(db, 'data'), \`\${user.email}/public/mlkem-public-key\`);
        
        // Store the public key data in Firestore
        await setDoc(docRef, publicKeyData);

      }
...
\`;

<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '18px',
    padding: '32px',
    backgroundColor: '#050505',
    borderRadius: '8px',
    minHeight: '300px',
  }}
>
  <div style={{ width: 'auto', margin: '0 auto' }}>
    <CodeBlock
      code={sampleCodeForCodeBlock}
      filename="ML-KEM.ts"
      rootPadding="12px 8px 20px 8px"
      borderWidth="1px"
      rootBorderRadius="8px"
    />
  </div>
</div>

// Note: The CodeBlock component accepts the following props:
// - code: string (required) - The code content to display in the code block.
// - filename: string (required) - The filename to display in the code block header.
// - codePadding?: string (optional) - Padding for the code area (default: "16px 16px 16px 64px").
// - lineNumberXShift?: string (optional) - Horizontal shift for the line numbers (default: "0px").
// - filenameColor?: string (optional) - Color of the filename text (default: "#fff").
// - backgroundColor?: string (optional) - Background color of the code block (default: "#17161c").
// - borderColor?: string (optional) - Border color of the code block (default: "#312f3b").
// - borderWidth?: string (optional) - Width of the border (default: "1px").
// - rootBorderRadius?: string (optional) - Border radius of the code block (default: "8px").
// - rootPadding?: string (optional) - Padding of the code block root (default: "10px 8px 20px 8px").
// - lineNumberColor?: string (optional) - Color of the line numbers (default: "#999").
// - codeTextColor?: string (optional) - Color of the code text (default: "#d4d4d4").
// - fontFamily?: string (optional) - Font family for the code, line numbers, and filename (default: "'Roboto Mono', monospace").
// - codeTextSize?: string (optional) - Font size for the code and line numbers (default: "1rem").
// - titleFontSize?: string (optional) - Font size for the filename/header text (default: "1.125rem").
// - codeLineHeight?: string (optional) - Line height for the code and line numbers (default: "1.5rem").
`,
code: [
  {
    filename: 'CodeBlock.tsx',
    content: `'use client'
import React, { useMemo } from 'react'

type CodeBlockProps = {
  code: string
  filename: string
  codePadding?: string // e.g. "18px 18px 0 62px"
  lineNumberXShift?: string // e.g. "6px"
  filenameColor?: string // e.g. "#fff"
  backgroundColor?: string // e.g. "#17161c"
  borderColor?: string // e.g. "#312f3b"
  borderWidth?: string // e.g. "1px"
  rootBorderRadius?: string // e.g. "8px"
  rootPadding?: string // e.g. "10px 8px 20px 8px"
  lineNumberColor?: string // e.g. "#999"
  codeTextColor?: string // e.g. "#d4d4d4"
  fontFamily?: string // e.g. "'Roboto Mono', monospace"
  codeTextSize?: string // e.g. "1rem" (applies to code and line numbers)
  titleFontSize?: string // e.g. "1.125rem"
  codeLineHeight?: string // e.g. "1.5rem"
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default function CodeBlock({
  code,
  filename,
  codePadding = '16px 16px 16px 64px',
  lineNumberXShift = '0px',
  filenameColor = '#fff',
  backgroundColor = '#17161c',
  borderColor = '#312f3b',
  borderWidth = '1px',
  rootBorderRadius = '8px',
  rootPadding = '10px 8px 20px 8px',
  lineNumberColor = '#999',
  codeTextColor = '#d4d4d4',
  fontFamily = "'Roboto Mono', monospace",
  codeTextSize = '1rem',
  titleFontSize = '1.125rem',
  codeLineHeight = '1.5rem',
}: CodeBlockProps) {
  const codeLines = useMemo(() => {
    const lines = code.split('\n')
    if (lines.length > 0 && lines[lines.length - 1].trim() === '') {
      lines.pop()
    }
    return lines
  }, [code])

  const plainCode = useMemo(() => {
    return codeLines.map(line => escapeHtml(line) || '&nbsp;').join('\n')
  }, [codeLines])

  return (
    <div
      className="codeblock-root"
      style={{
        background: backgroundColor,
        borderColor,
        borderRadius: rootBorderRadius,
        borderWidth,
        borderStyle: 'solid',
        padding: rootPadding,
        fontFamily,
      }}
    >
      {filename && (
        <div
          className="codeblock-header"
          style={{
            color: filenameColor,
            zIndex: 3,
            fontSize: titleFontSize,
          }}
        >
          <span
            className="codeblock-filename"
            style={{ color: filenameColor, fontSize: titleFontSize }}
          >
            {filename}
          </span>
        </div>
      )}
      <div className="codeblock-wrapper">
        <div
          className="codeblock-linenumbers-bg"
          style={{
            width: \`calc(\${lineNumberXShift} + 48px)\`,
            background: backgroundColor,
          }}
        />
        <div
          className="codeblock-linenumbers"
          aria-hidden="true"
          style={{
            color: lineNumberColor,
            transform: \`translateX(\${lineNumberXShift})\`,
            background: backgroundColor,
            zIndex: 2,
            fontSize: codeTextSize,
            lineHeight: codeLineHeight,
            fontFamily,
          }}
        >
          {codeLines.map((_, i) => (
            <span key={i} style={{ display: 'block' }}>
              {i + 1}
            </span>
          ))}
        </div>
        <div className="codeblock-scrollarea">
          <pre
            className="codeblock-pre"
            style={{
              background: backgroundColor,
              color: codeTextColor,
              padding: codePadding,
              marginRight: '16px',
              fontSize: codeTextSize,
              lineHeight: codeLineHeight,
              fontFamily,
            }}
          >
            <code dangerouslySetInnerHTML={{ __html: plainCode }} />
          </pre>
        </div>
      </div>
      <style jsx>{\`
        .codeblock-root {
          width: 100%;
          box-sizing: border-box;
          overflow-x: auto;
          overflow-y: hidden;
          max-width: 100%;
          position: relative;
        }
        .codeblock-header {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 8px 22px;
        }
        .codeblock-filename {
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .codeblock-wrapper {
          display: flex;
          position: relative;
          width: 100%;
        }
        .codeblock-linenumbers-bg {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          z-index: 1;
          pointer-events: none;
          user-select: none;
        }
        .codeblock-linenumbers {
          user-select: none;
          pointer-events: none;
          text-align: right;
          padding: 16px 12px 16px 0;
          min-width: 48px;
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          overflow: hidden;
        }
        .codeblock-scrollarea {
          width: 100%;
          overflow-x: hidden;
          overflow-y: hidden;
        }
        .codeblock-pre {
          margin: 0;
          border-radius: 0 0 10px 10px;
          overflow-x: hidden;
          overflow-y: hidden;
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
        }
        .codeblock-pre code {
          display: block;
          white-space: pre;
          position: relative;
        }
      \`}</style>
    </div>
  )
}
`
  },
],
  dependencies: '`npm install @fontsource/roboto-mono --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://ui.aceternity.com/components/code-block" target="_blank" rel="noopener noreferrer" className="link">Code Block</a> by <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
    </span>
  ),
}

export { metadata }