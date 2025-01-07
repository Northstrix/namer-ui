'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "HeartsButton.tsx" file
import HeartsButton from '@/app/the-actual-components/hearts-button/HeartsButton'

<HeartsButton inscription="חארטס" onClick={() => {console.log('First HeartsButton clicked!');}}/>
<HeartsButton inscription="Hover me" onClick={() => {console.log('Second HeartsButton clicked!');}}/>
<HeartsButton inscription="Langzeitgedächtnis" padding="70px" onClick={() => {console.log('Third HeartsButton clicked!');}}/>

// Note: The HeartsButton component accepts the following props:
// - inscription: string (required) - The text to display on the button
// - padding: string (optional) - Custom padding for the button (default: '50px')
// - height: string (optional) - Custom height for the button (default: '75px')
// - onClick: () => void (optional) - Function to call when the button is clicked
`,
code: [
  {
    filename: 'HeartsButton.tsx',
    content: `import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface HeartsButtonProps {
  inscription: string;
  padding?: string;
  height?: string;
  onClick?: () => void;
}

const HeartsButton: React.FC<HeartsButtonProps> = ({ inscription, padding = '50px', height = '75px', onClick }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonRef.current && contentRef.current) {
      gsap.set(contentRef.current, { y: 0 });
    }
  }, []);

  const handleMouseEnter = () => {
    if (contentRef.current) {
      gsap.to(contentRef.current, { y: -17, duration: 0.3, ease: 'power2.out' });
    }
  };

  const handleMouseLeave = () => {
    if (contentRef.current) {
      gsap.to(contentRef.current, { y: 0, duration: 0.3, ease: 'power2.out' });
    }
  };

  return (
    <>
      <a
        ref={buttonRef}
        className="crushbtn"
        onClick={() => {
          console.log('Button clicked!');
          if (onClick) onClick();
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={contentRef}>
          {inscription}
        </div>
        <div className="heart1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
          </svg>
        </div>
        <div className="heart2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
          </svg>
        </div>
        <div className="heart3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
          </svg>
        </div>
      </a>
      <style jsx>{\`
        .crushbtn {
          font-size: 24px;
          line-height: 1;
          text-align: center;
          text-decoration: none;
          padding: 10px \${padding};
          border-radius: 10px;
          position: relative;
          background-color: #FCC8D1;
          color: #ff0000;
          border: none;
          text-shadow: 0 0 3px #ff0000;
          overflow: hidden;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: \${height};
          cursor: pointer;
          transition: all 0.7s ease;
        }
        .crushbtn:hover {
          color: red;
          box-shadow: 0 0 10px inset #ff0000;
          transform: scale(1.05);
        }
        .heart1 svg, .heart2 svg, .heart3 svg {
          position: absolute;
          opacity: 0;
          fill: #ff0000;
          stroke: none;
          transition: 0.4s;
          width: 30px;
          height: 30px;
        }
        .heart1 svg {
          left: 40%;
          top: 0;
          animation: move1 3s ease-in-out infinite alternate-reverse;
        }
        .heart2 svg {
          left: 10px;
          top: 10px;
          width: 20px;
          height: 20px;
          transform: rotate(-20deg);
          animation: move2 3s ease infinite alternate-reverse;
        }
        .heart3 svg {
          right: 10px;
          top: 10px;
          width: 25px;
          height: 25px;
          transform: rotate(20deg);
          z-index: -1;
          animation: move3 3s ease infinite alternate-reverse;
        }
        @keyframes move1 {
          0% { top: 30px; }
          50% { top: 60px; }
          100% { top: 32px; }
        }
        @keyframes move2 {
          0% { top: 0.3rem; }
          50% { top: 1.5rem; }
          100% { top: 0.3rem; }
        }
        @keyframes move3 {
          0% { top: 1.5rem; }
          50% { top: .6rem; }
          100% { top: 1.5rem; }
        }
        .crushbtn:hover .heart1 svg,
        .crushbtn:hover .heart2 svg,
        .crushbtn:hover .heart3 svg {
          opacity: 1;
          filter: drop-shadow(0 0 10px #ff0000);
        }
        .crushbtn:active {
          transform: scale(1);
        }
      \`}</style>
    </>
  );
};

export default HeartsButton;
`
  },
],
  dependencies: 'npm install gsap --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://codepen.io/uchihaclan/pen/NWOyRWy" target="_blank" rel="noopener noreferrer" className="link">BUTTONS</a> by <a href="https://codepen.io/uchihaclan" target="_blank" rel="noopener noreferrer" className="link">TAYLOR</a>
    </span>
  ),
}

export { metadata }