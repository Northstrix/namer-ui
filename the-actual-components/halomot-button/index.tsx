'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "HalomotButton.tsx" file
import HalomotButton from '@/app/the-actual-components/halomot-button/HalomotButton'

<HalomotButton 
  inscription="חלומות" 
  onClick={() => console.log("Halomot button has been clicked!")}
/>

// Note: The HalomotButton component accepts the following props:
// - inscription: string (required) - The text to display on the button
// - onClick: () => void (required) - Function to call when the button is clicked
`,
code: [
  {
    filename: 'HalomotButton.tsx',
    content: `"use client"
import React, { useState } from 'react';
import styles from './HalomotButton.module.css';

interface HalomotButtonProps {
  inscription: string;
  onClick: () => void;
}

const HalomotButton: React.FC<HalomotButtonProps> = ({ inscription, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      className={styles.halomotButton}
      onClick={(e) => { e.preventDefault(); onClick(); }}
    >
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={\`\${styles.halomotButtonSpan} \${isHovered ? styles.hovered : ''}\`}
      >
        {inscription}
      </span>
    </a>
  );
};

export default HalomotButton;
`
  },
  {
    filename: 'HalomotButton.module.css',
    content: `.halomotButton {
  margin: auto;
  padding: 3px;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(135deg, #4776cb, #a19fe5, #6cc606);
  border: 0;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
  transition: all .3s;
}

.halomotButtonSpan {
  background: #000;
  padding: 1rem 4rem;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.halomotButtonSpan.hovered {
  background: none;
  color: #fff;
}
`
  },
],
  dependencies: '',
  credit: (
    <span>
      <a href="https://codepen.io/uchihaclan/pen/NWOyRWy" target="_blank" rel="noopener noreferrer" className="link">BUTTONS</a> by <a href="https://codepen.io/uchihaclan" target="_blank" rel="noopener noreferrer" className="link">TAYLOR</a>
    </span>
  ),
}

export { metadata }