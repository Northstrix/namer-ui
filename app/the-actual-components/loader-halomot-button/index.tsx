'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "LoaderHalomotButton.tsx" file
import LoaderHalomotButton from '@/app/the-actual-components/loader-halomot-button/LoaderHalomotButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const [loadingEn, setLoadingEn] = useState(false);
const [loadingHe, setLoadingHe] = useState(false);

<div style={{
  display: 'flex',
  flexWrap: 'wrap',
  gap: '36px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '32px',
  backgroundColor: '#050505',
  borderRadius: '8px',
  minHeight: '300px'
}}>
  <div style={{ maxWidth: "360px", height: "52px", width: "100%" }}>
    <LoaderHalomotButton
      text="Load Data"
      onClick={() => {
        setLoadingEn(true);
        setTimeout(() => setLoadingEn(false), 5000);
      }}
      isLoading={loadingEn}
      fillWidth
    />
  </div>
  <div style={{ maxWidth: "360px", height: "52px", width: "100%" }}>
    <LoaderHalomotButton
      text="טען נתונים"
      loadingText="טוען…"
      onClick={() => {
        setLoadingHe(true);
        setTimeout(() => setLoadingHe(false), 5000);
      }}
      isLoading={loadingHe}
      icon={<FontAwesomeIcon icon={faGithub} size="lg" />}
      gradient="linear-gradient(135deg, #a123f4, #603dec)"
      bgColor="#050505"
      cubeFaceColor="#a123f4"
      cubeShadowColor="#333"
      cubeBorderColor="#333"
      outerBorderRadius="11.4px"
      innerBorderRadius="11px"
      fillWidth
      isRTL={true}
    />
  </div>
</div>

// Note: The LoaderHalomotButton component accepts the following props:
// - text: string (required) - The text to display on the button when not loading.
// - loadingText: string (optional) - The text to display on the button while loading (default: 'Loading...').
// - onClick: () => void (optional) - Function to call when the button is clicked.
// - gradient: string (optional) - CSS gradient string for the outer border/background (default: 'linear-gradient(135deg, #4776cb, #a19fe5, #6cc606)').
// - bgColor: string (optional) - Solid color for the inner button background (default: '#141414').
// - fillWidth: boolean (optional) - If true, the button stretches to fill its container's width.
// - isLoading: boolean (optional) - If true, shows the loading animation and disables the button.
// - isRTL: boolean (optional) - If true, aligns the loader and text for right-to-left languages and changes padding accordingly.
// - icon: React.ReactElement (optional) - Icon to display at the start of the button text.
// - cubeFaceColor: string (optional) - Color for the faces of the animated loader cube (default: '#a19fe5').
// - cubeShadowColor: string (optional) - Color for the shadow face of the animated loader cube (default: '#000').
// - cubeBorderColor: string (optional) - Border color for the faces of the animated loader cube (default: '#141414').
// - outerBorderRadius: string (optional) - Border radius for the outer (gradient) border (default: '6.34px').
// - innerBorderRadius: string (optional) - Border radius for the inner button (default: '6px').
`,
code: [
  {
    filename: 'LoaderHalomotButton.tsx',
    content: `"use client";
import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

interface LoaderHalomotButtonProps {
  gradient?: string;
  text: string;
  loadingText?: string;
  onClick?: () => void;
  fillWidth?: boolean;
  isLoading?: boolean;
  isRTL?: boolean;
  icon?: React.ReactElement;
  bgColor?: string;
  cubeFaceColor?: string;
  cubeShadowColor?: string;
  cubeBorderColor?: string;
  outerBorderRadius?: string;
  innerBorderRadius?: string;
}

const rotation = keyframes\`
  0% { transform: rotateX(45deg) rotateY(0) rotateZ(45deg); }
  50% { transform: rotateX(45deg) rotateY(0) rotateZ(405deg); }
  100% { transform: rotateX(45deg) rotateY(0) rotateZ(45deg); }
\`;

const bouncing = keyframes\`
  0% { transform: translateY(-40px); }
  45% { transform: translateY(40px); }
  100% { transform: translateY(-40px); }
\`;

const bouncingShadow = keyframes\`
  0% { transform: translateZ(-80px) scale(1.3); opacity: 0.05; }
  45% { transform: translateZ(0); opacity: 0.3; }
  100% { transform: translateZ(-80px) scale(1.3); opacity: 0.05; }
\`;

const Scene = styled.div\`
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  perspective: 800px;
\`;

const CubeWrapper = styled.div\`
  transform-style: preserve-3d;
  animation: \${bouncing} 2s infinite;
  transform: scale(0.25);
\`;

const Cube = styled.div\`
  transform-style: preserve-3d;
  transform: rotateX(45deg) rotateZ(45deg);
  animation: \${rotation} 2s infinite;
\`;

const CubeFaces = styled.div\`
  transform-style: preserve-3d;
  height: 80px;
  width: 80px;
  position: relative;
  transform-origin: 0 0;
  transform: translateX(0) translateY(0) translateZ(-40px);
\`;

const CubeFace = styled.div<{
  $faceColor: string;
  $borderColor: string;
  $shadowColor: string;
  $isShadow?: boolean;
}>\`
  position: absolute;
  inset: 0;
  background: \${({ $faceColor, $isShadow, $shadowColor }) =>
    $isShadow ? $shadowColor : $faceColor};
  border: solid 1px \${({ $borderColor }) => $borderColor};

  &.shadow {
    transform: translateZ(-80px);
    animation: \${bouncingShadow} 2s infinite;
  }
  &.top { transform: translateZ(80px); }
  &.front { transform-origin: 0 50%; transform: rotateY(-90deg); }
  &.back { transform-origin: 0 50%; transform: rotateY(-90deg) translateZ(-80px); }
  &.right { transform-origin: 50% 0; transform: rotateX(-90deg) translateY(-80px); }
  &.left { transform-origin: 50% 0; transform: rotateX(-90deg) translateY(-80px) translateZ(80px); }
\`;

const LoaderContainer = styled.div<{ isRTL: boolean }>\`
  display: flex;
  align-items: center;
  padding: 0 8px;
  \${(props) =>
    props.isRTL
      ? css\`
          flex-direction: row;
        \`
      : css\`
          flex-direction: row-reverse;
        \`}
\`;

const Overlay = styled.div\`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  cursor: not-allowed;
\`;

const TextSpan = styled.span<{ isRTL: boolean }>\`
  color: #fff;
  font-weight: bold;
  transform: translateX(\${(props) => (props.isRTL ? "14px" : "-14px")});
\`;

const OuterWrapper = styled.div<{ gradient: string; borderRadius: string }>\`
  background-image: \${({ gradient }) => gradient};
  border-radius: \${({ borderRadius }) => borderRadius};
  padding: 1px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
\`;

const LoaderHalomotButton: React.FC<LoaderHalomotButtonProps> = ({
  gradient = "linear-gradient(135deg, #4776cb, #a19fe5, #6cc606)",
  text,
  loadingText = "Loading...",
  onClick,
  fillWidth = false,
  isLoading = false,
  isRTL = false,
  icon,
  bgColor = "#141414",
  cubeFaceColor = "#a19fe5",
  cubeShadowColor = "#000",
  cubeBorderColor = "#141414",
  outerBorderRadius = "6.34px",
  innerBorderRadius = "6px",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Padding logic for RTL/LTR
  const padding = fillWidth
    ? "1rem 0"
    : isRTL
    ? "1rem 2.2rem 1rem 2.2rem"
    : "1rem 2.2rem";

  const buttonStyle: React.CSSProperties = {
    border: "0",
    borderRadius: innerBorderRadius,
    color: "#fff",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    userSelect: "none",
    WebkitUserSelect: "none",
    whiteSpace: "nowrap",
    transition: "all .3s",
    width: "100%",
    height: "100%",
    background: isHovered ? "none" : bgColor,
    cursor: isLoading ? "not-allowed" : "pointer",
    pointerEvents: isLoading ? "none" : "auto",
    position: "relative",
    flexDirection: "row",
    direction: isRTL ? "rtl" : "ltr",
    padding,
    fontFamily: "inherit",
    fontSize: "1rem",
    gap: icon ? "0.5em" : 0,
    boxSizing: "border-box",
  };

  const iconStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    height: "1em",
    width: "1em",
    fontSize: "1.1em",
    verticalAlign: "middle",
    flexShrink: 0,
  };

  return (
    <OuterWrapper gradient={gradient} borderRadius={outerBorderRadius}>
      <button
        style={buttonStyle}
        onClick={(e) => {
          e.preventDefault();
          if (!isLoading && onClick) onClick();
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={isLoading}
        type="button"
      >
        {isLoading ? (
          <>
            <span style={{ opacity: 0 }}>{text}</span>
            <Overlay>
              <LoaderContainer isRTL={isRTL}>
                {isRTL && (
                  <Scene style={{ transform: "scale(0.21)" }}>
                    <CubeWrapper>
                      <Cube>
                        <CubeFaces>
                          <CubeFace className="shadow" $faceColor={cubeFaceColor} $borderColor={cubeBorderColor} $shadowColor={cubeShadowColor} $isShadow />
                          <CubeFace className="bottom" $faceColor={cubeFaceColor} $borderColor={cubeBorderColor} $shadowColor={cubeShadowColor} />
                          <CubeFace className="top" $faceColor={cubeFaceColor} $borderColor={cubeBorderColor} $shadowColor={cubeShadowColor} />
                          <CubeFace className="left" $faceColor={cubeFaceColor} $borderColor={cubeBorderColor} $shadowColor={cubeShadowColor} />
                          <CubeFace className="right" $faceColor={cubeFaceColor} $borderColor={cubeBorderColor} $shadowColor={cubeShadowColor} />
                          <CubeFace className="back" $faceColor={cubeFaceColor} $borderColor={cubeBorderColor} $shadowColor={cubeShadowColor} />
                          <CubeFace className="front" $faceColor={cubeFaceColor} $borderColor={cubeBorderColor} $shadowColor={cubeShadowColor} />
                        </CubeFaces>
                      </Cube>
                    </CubeWrapper>
                  </Scene>
                )}
                <TextSpan isRTL={isRTL}>{loadingText}</TextSpan>
                {!isRTL && (
                  <Scene style={{ transform: "scale(0.21)" }}>
                    <CubeWrapper>
                      <Cube>
                        <CubeFaces>
                          <CubeFace className="shadow" $faceColor={cubeFaceColor} $borderColor={cubeBorderColor} $shadowColor={cubeShadowColor} $isShadow />
                          <CubeFace className="bottom" $faceColor={cubeFaceColor} $borderColor={cubeBorderColor} $shadowColor={cubeShadowColor} />
                          <CubeFace className="top" $faceColor={cubeFaceColor} $borderColor={cubeBorderColor} $shadowColor={cubeShadowColor} />
                          <CubeFace className="left" $faceColor={cubeFaceColor} $borderColor={cubeBorderColor} $shadowColor={cubeShadowColor} />
                          <CubeFace className="right" $faceColor={cubeFaceColor} $borderColor={cubeBorderColor} $shadowColor={cubeShadowColor} />
                          <CubeFace className="back" $faceColor={cubeFaceColor} $borderColor={cubeBorderColor} $shadowColor={cubeShadowColor} />
                          <CubeFace className="front" $faceColor={cubeFaceColor} $borderColor={cubeBorderColor} $shadowColor={cubeShadowColor} />
                        </CubeFaces>
                      </Cube>
                    </CubeWrapper>
                  </Scene>
                )}
              </LoaderContainer>
            </Overlay>
          </>
        ) : (
          <>
            {icon && React.cloneElement(icon, { style: iconStyle })}
            {text}
          </>
        )}
      </button>
    </OuterWrapper>
  );
};

export default LoaderHalomotButton;
`
  },
],
  dependencies: '',
  credit: (
    <span>
      <a href="https://codepen.io/uchihaclan/pen/NWOyRWy" target="_blank" rel="noopener noreferrer" className="link">BUTTONS</a> by <a href="https://codepen.io/uchihaclan" target="_blank" rel="noopener noreferrer" className="link">TAYLOR</a>
      <br/>
      <a href="https://codepen.io/haja-ran/pen/xxWRKNm" target="_blank" rel="noopener noreferrer" className="link">Bouncing Cube Loader</a> by <a href="https://codepen.io/haja-ran" target="_blank" rel="noopener noreferrer" className="link">Haja Randriakoto</a>
    </span>
  ),
}

export { metadata }