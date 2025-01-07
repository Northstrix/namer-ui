'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "MultiColoredText.tsx" file
import MultiColoredText from '@/app/the-actual-components/multi-colored-text/MultiColoredText'

<div className="bg-[#f0f8ff] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
  <MultiColoredText
    inscription="פלאם חארבור"
    fontSize="7em"
    primaryColor="#00aaff"
    secondaryColor="#5c3fcd"
    tertiaryColor="#3a3a3a"
    quaternaryColor="#f9002f"
    quinaryColor="#f1b211"
    separatorRotation="232deg"
  />
</div>

// Note: The MultiColoredText component accepts the following props:
// - inscription: string (required) - The text to display with multiple colors.
// - fontSize: string (required) - The font size for the text (e.g., '50px', '7em').
// - primaryColor: string (required) - The first color in the gradient.
// - secondaryColor: string (required) - The second color in the gradient.
// - tertiaryColor: string (required) - The third color in the gradient.
// - quaternaryColor: string (required) - The fourth color in the gradient.
// - quinaryColor: string (required) - The fifth color in the gradient.
// - separatorRotation: string (required) - The rotation angle for the gradient.
`,
code: [
  {
    filename: 'MultiColoredText.tsx',
    content: `"use client";

interface MultiColoredTextProps {
  inscription: string;
  fontSize: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  quaternaryColor: string;
  quinaryColor: string;
  separatorRotation: string;
}

const MultiColoredText: React.FC<MultiColoredTextProps> = ({
  inscription,
  fontSize,
  primaryColor,
  secondaryColor,
  tertiaryColor,
  quaternaryColor,
  quinaryColor,
  separatorRotation,
}) => {
  return (
    <div>
      <div className="w-full">
        <div className="container">
          <h1
            className={\`text relative inline-block cursor-pointer leading-[1] m-0 font-bold text-center w-ful\`}
            style={{
              fontSize: \`\${fontSize}\`,
              color: 'var(--foreground)',
              letterSpacing: '-.01em',
            }}
          >
            <div className="split-parent">
              <div className="split-child">
                <div className="multi-color-text">{inscription}</div>
              </div>
            </div>
          </h1>
        </div>
      </div>
      
      <style jsx>{\`
        .multi-color-text {
          font-weight: 700;
          background: linear-gradient(\${separatorRotation}, 
            \${primaryColor} 19%, 
            transparent 19%, transparent 20%, 
            \${secondaryColor} 20%, \${secondaryColor} 39%,
            transparent 39%, transparent 40%, 
            \${tertiaryColor} 40%, \${tertiaryColor} 59%,
            transparent 59%, transparent 60%, 
            \${quaternaryColor} 60%, \${quaternaryColor} 79%,
            transparent 79%, transparent 80%, 
            \${quinaryColor} 80%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          display: inline-block;
        }
      \`}</style>
    </div>
  );
};

export default MultiColoredText;

`
  },
],
  dependencies: '',
  credit: (
    <span>
      <a href="https://codepen.io/TajShireen/pen/YzZmbep" target="_blank" rel="noopener noreferrer" className="link">Multi Colored Text with CSS</a> by <a href="https://codepen.io/TajShireen" target="_blank" rel="noopener noreferrer" className="link">Shireen Taj</a>
    </span>
  ),
}

export { metadata }