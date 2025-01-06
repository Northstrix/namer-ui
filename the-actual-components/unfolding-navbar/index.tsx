'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "UnfoldingNavbar.tsx" file
import UnfoldingNavbar from '@/app/the-actual-components/unfolding-navbar/UnfoldingNavbar'

import { IconHome, IconFile, IconPencil, IconLogout } from '@tabler/icons-react';

<UnfoldingNavbar
  items={[
    { icon: <IconHome size={36} />, label: 'Home' },
    { icon: <IconFile size={36} />, label: 'Files' },
    { icon: <IconPencil size={36} />, label: 'Drafts' },
    { icon: <IconLogout size={36} />, label: 'Log Out' },
  ]}
  rolloutWidth="124px"
  onItemClick={(label) => console.log(\`Clicked on \${label}\`)}
/>

// Note: The UnfoldingNavbar component accepts the following props:
// - items: NavItem[] (required) - An array of objects representing the items in the navbar, each containing an icon (React node) and a label (string).
// - borderWidth: number (optional) - Width of the border around the navbar in pixels (default: 1).
// - rolloutWidth: string (optional) - Width of each navbar item when hovered over (default: "160px").
// - width: string (optional) - Total width of the navbar in pixels or percentage (default: "343px").
// - foregroundColor: string (optional) - Color for inactive icons and text (default: "#f0f0f1").
// - hoveredColor: string (optional) - Color for icons when hovered over (default: "#050505").
// - topShift: number (optional) - Vertical offset for icons in pixels (default: 24).
// - onItemClick: (label: string) => void (optional) - Callback function triggered when an item is clicked, receiving the label of the clicked item.
`,
code: [
  {
    filename: 'UnfoldingNavbar.tsx',
    content: `"use client"
import React, { useState } from 'react';
import styles from './UnfoldingNavbar.module.css';

type NavItem = {
  icon: React.ReactNode;
  label: string;
};

type UnfoldingNavbarProps = {
  items: NavItem[];
  borderWidth?: number;
  rolloutWidth?: string;
  width?: string;
  foregroundColor?: string;
  hoveredColor?: string;
  topShift?: number;
  onItemClick?: (label: string) => void; // Callback prop
};

const UnfoldingNavbar: React.FC<UnfoldingNavbarProps> = ({
  items,
  borderWidth = 1,
  rolloutWidth = "160px",
  width = "343px",
  foregroundColor = "#f0f0f1",
  hoveredColor = "#050505",
  topShift = 24,
  onItemClick, // Destructure the callback prop
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const borderRadius = 16;
    const padding = 12;

    const handleClick = (label: string) => {
      if (onItemClick) {
        onItemClick(label); // Call the callback with the item label
      }
    };

    return (
      <a
        className={styles.UnfoldingNavbar}
        onClick={(e) => { e.preventDefault(); }}
      >
        <span
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={\`\${styles.UnfoldingNavbarSpan} \${isHovered ? styles.hovered : ''}\`}
        >
          <div id="wrapper">
            <header style={{ 
              width: \`\${width}\`, 
              padding: \`0 \${padding}px\`, 
              display: 'flex', 
              border: \`\${borderWidth}px solid var(--color-dark)\`, 
              borderRadius: \`\${borderRadius}px\`
            }}>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="iconDiv"
                  data-tooltip={item.label}
                  tabIndex={0}
                  onClick={() => handleClick(item.label)} // Handle click event
                >
                  <div className="iconSVG">{item.icon}</div>
                </div>
              ))}
              <div className="spacer"></div>
              <div className="divider"></div>
            </header>

            <style jsx>{\`
              #wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .iconDiv {
                position: relative; /* Ensure positioning context for tooltip */
                height: 36px;
                width: 36px;
                margin-top: \${topShift}px;
                margin-bottom: auto;
                margin-left: 4px;
                border-radius: 8px;
                color: \${foregroundColor};
                display: inline-flex;
                align-items: center;
                white-space: nowrap;
                overflow: hidden;
                cursor: pointer;
                transition: 
                    width 300ms ease-in-out, 
                    background-color 300ms linear 200ms, 
                    color 300ms ease-in-out; /* Adjusted duration for consistency */
              }

              .iconDiv[data-tooltip]:hover::after {
                content: attr(data-tooltip); /* Use data-tooltip attribute */
                position: absolute;
                background-color: \${hoveredColor};
                color: \${foregroundColor};
                padding: 5px;
                border-radius: 5px;
                white-space: nowrap; /* Prevent text from wrapping */
                z-index: 1000; /* Ensure it appears above other elements */
                left: 50%; /* Center it horizontally */
                transform: translateX(-50%); /* Centering adjustment */
              }

              .iconSVG {
                height: 36px;
                aspect-ratio: 1 / 1;
              }

              .iconDiv:hover,
              .iconDiv:focus-visible {
                  width: \${rolloutWidth}; /* Expanded width on hover */
                  background-color: var(--color-mid);
                  color: \${hoveredColor};
              }

              .iconDiv:focus-visible {
                outline: \${borderWidth}px solid var(--color-mid);
                outline-offset: 4px;
              }

              .iconDiv::after {
                content: attr(tooltip);
                margin-left: 12px; /* Spacing for tooltip */
                animation: fadeIn 600ms linear forwards;
              }

              .spacer {
                flex-grow: 1; /* Spacer to push icons to the left */
              }

              .divider {
                height: 36px; /* Divider height */
                width: 1px; /* Divider width */
                margin: 24px 18px; /* Margin around divider */
                background-color: var(--color-dark);
              }

              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
            \`}</style>
          </div>
        </span>
      </a>
    );
};

export default UnfoldingNavbar;
`
  },
  {
    filename: 'UnfoldingNavbar.module.css',
    content: `.UnfoldingNavbar {
  margin: auto;
  padding: 3px;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(135deg, #4776cb, #a19fe5, #6cc606);
  border: 0;
  border-radius: 10px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
  transition: all .3s;
}

.UnfoldingNavbarSpan {
  background: #050505;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.UnfoldingNavbarSpan.hovered {
  background: none;
  color: #fff;
}

.iconDiv {
  position: relative; /* Ensure positioning context for tooltip */
}

.iconDiv[data-tooltip]:hover::after {
  content: attr(data-tooltip); /* Use data-tooltip attribute */
  position: absolute;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 4px;
  white-space: nowrap; /* Prevent text from wrapping */
  z-index: 1000; /* Ensure it appears above other elements */
  top: -30px; /* Adjust based on where you want the tooltip */
  left: 50%; /* Center it horizontally */
  transform: translateX(-50%); /* Centering adjustment */
}
`
  },
],
  dependencies: 'npm install @tabler/icons-react --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://codepen.io/Adir-SL/pen/VwXGPmy" target="_blank" rel="noopener noreferrer" className="link">Custom Tooltip</a> by <a href="https://codepen.io/Adir-SL" target="_blank" rel="noopener noreferrer" className="link">Adir</a>
      <br />
      <a href="https://codepen.io/uchihaclan/pen/NWOyRWy" target="_blank" rel="noopener noreferrer" className="link">BUTTONS</a> by <a href="https://codepen.io/uchihaclan" target="_blank" rel="noopener noreferrer" className="link">TAYLOR</a>
    </span>
  ),
}

export { metadata }