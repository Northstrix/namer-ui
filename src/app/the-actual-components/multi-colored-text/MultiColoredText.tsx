"use client";

import React from "react";

//////////////////////////
// Version 1: Array colors, with optional fontWeight prop
interface MultiColoredTextV1Props {
  inscription: string;
  fontSize: string;
  colors: string[];             // Array of colors
  separatorRotation: string;
  fontWeight?: number | string;
}

export const MultiColoredTextV1: React.FC<MultiColoredTextV1Props> = ({
  inscription,
  fontSize,
  colors,
  separatorRotation,
  fontWeight = 700,
}) => {
  if (colors.length === 0) {
    return <div style={{ fontSize }}>{inscription}</div>;
  }

  const step = 100 / colors.length;
  let stops = "";
  colors.forEach((color, i) => {
    const start = i * step;
    const end = start + step;
    stops += `${color} ${start}%, ${color} ${end}%`;
    if (i < colors.length - 1) stops += ", ";
  });

  const background = `linear-gradient(${separatorRotation}, ${stops})`;

  return (
    <>
      <style jsx>{`
        .multi-colored-text-container {
          position: relative;
          display: inline-block;
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          white-space: nowrap;
          user-select: none;
        }
        .multi-colored-text-base,
        .multi-colored-text-gradient {
          margin: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          cursor: inherit;
        }
        .multi-colored-text-base {
          color: black; /* fallback solid text */
          position: relative; /* relative to container */
          z-index: 0;
          background: none;
          -webkit-background-clip: unset;
          background-clip: unset;
        }
        .multi-colored-text-gradient {
          background: ${background};
          -webkit-background-clip: text;
          background-clip: text;
          z-index: 1;
          pointer-events: none;
        }
      `}</style>

      <div className="multi-colored-text-container" aria-label={inscription} role="text">
        <div className="multi-colored-text-base">{inscription}</div>
        <div className="multi-colored-text-gradient">{inscription}</div>
      </div>
    </>
  );
};

/////////////////////////////
// Version 2: 5 colors individually as optional props + fontWeight prop

interface MultiColoredTextV2Props {
  inscription: string;
  fontSize: string;
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
  quaternaryColor?: string;
  quinaryColor?: string;
  separatorRotation: string;
  fontWeight?: number | string;
}

export const MultiColoredTextV2: React.FC<MultiColoredTextV2Props> = ({
  inscription,
  fontSize,
  primaryColor = "#00aaff",  // Default colors
  secondaryColor = "#5c3fcd",
  tertiaryColor = "#3a3a3a",
  quaternaryColor = "#f9002f",
  quinaryColor = "#f1b211",
  separatorRotation,
  fontWeight = 700,
}) => {
  return (
    <div>
      <div className="w-full">
        <div className="container">
          <h1
            className={`text relative inline-block cursor-pointer leading-[1] m-0 font-bold text-center w-full`}
            style={{
              fontSize: `${fontSize}`,
              color: 'var(--foreground)',
              letterSpacing: '-.01em',
              fontWeight,
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

      <style jsx>{`
        .multi-color-text {
          font-weight: ${fontWeight};
          background: linear-gradient(${separatorRotation}, 
            ${primaryColor} 19%, 
            transparent 19%, transparent 20%, 
            ${secondaryColor} 20%, ${secondaryColor} 39%,
            transparent 39%, transparent 40%, 
            ${tertiaryColor} 40%, ${tertiaryColor} 59%,
            transparent 59%, transparent 60%, 
            ${quaternaryColor} 60%, ${quaternaryColor} 79%,
            transparent 79%, transparent 80%, 
            ${quinaryColor} 80%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};
