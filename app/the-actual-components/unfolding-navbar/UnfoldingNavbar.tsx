"use client"
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
          className={`${styles.UnfoldingNavbarSpan} ${isHovered ? styles.hovered : ''}`}
        >
          <div id="wrapper">
            <header style={{ 
              width: `${width}`, 
              padding: `0 ${padding}px`, 
              display: 'flex', 
              border: `${borderWidth}px solid var(--color-dark)`, 
              borderRadius: `${borderRadius}px`
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

            <style jsx>{`
              #wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .iconDiv {
                position: relative; /* Ensure positioning context for tooltip */
                height: 36px;
                width: 36px;
                margin-top: ${topShift}px;
                margin-bottom: auto;
                margin-left: 4px;
                border-radius: 8px;
                color: ${foregroundColor};
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
                background-color: ${hoveredColor};
                color: ${foregroundColor};
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
                  width: ${rolloutWidth}; /* Expanded width on hover */
                  background-color: var(--color-mid);
                  color: ${hoveredColor};
              }

              .iconDiv:focus-visible {
                outline: ${borderWidth}px solid var(--color-mid);
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
            `}</style>
          </div>
        </span>
      </a>
    );
};

export default UnfoldingNavbar;
