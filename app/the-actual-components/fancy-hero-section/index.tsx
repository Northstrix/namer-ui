'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "FancyHeroSection.tsx" file
import FancyHeroSection from '@/app/the-actual-components/fancy-hero-section/FancyHeroSection'

<FancyHeroSection
  text={["A FANCY", "HERO SECTION", "FOR YOUR", "WEBSITE"]}
  customWidth="100%"
  customHeight="800px"
  customFontSize="6.9rem"
  onImageClick={(index) => toast.info(\`Clicked element \${index}\`)}
  customImageData={[
    {
      component: (
        <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white">
          Custom Component 1
        </div>
      ),
      title: "Blue",
      description: "This is a custom blue component"
    },
    {
      component: (
        <div className="w-full h-full text-[#242434] bg-green-500 flex items-center justify-center text-white">
          החיים מוזרים
        </div>
      ),
      title: "Yarok",
      description: "This is a custom green component"
    },
    {
      component: (
        <div className="w-full h-full bg-purple-500 flex items-center justify-center text-white">
          Custom Component 3
        </div>
      ),
      title: "Purple",
      description: "This is a custom purple component"
    }
  ]}
  framerSize={[336, 190]}
  textBottom="-58px"
  titleColor="#f0f0f0"
  titleSize="52px"
  descriptionColor="#eeeeee"
  descriptionSize="16px"
/>

// Note: The FancyHeroSection component accepts the following props:
// - text: string[] (required) - An array of strings to be displayed as the main text content of the hero section.
// - backgroundColor: string (optional) - Sets the background color of the hero section (default: '#242434').
// - textShadowColor: string (optional) - Defines the color of the text shadow effect (default: '#444454').
// - colorTransition: string (optional) - Specifies the CSS transition for color changes (default: 'color 0.3s ease').
// - textColor: string (optional) - Sets the primary text color (default: '#ffffff').
// - hoverTextColor: string (optional) - Defines the text color on hover (default: '#242434').
// - backgroundHighlightEnabled: boolean (optional) - Toggles the background highlight effect on text hover (default: true).
// - backgroundHighlightColor: string (optional) - Sets the color of the background highlight effect (default: '#4246ce').
// - customWidth: string (optional) - Specifies a custom width for the hero section.
// - customHeight: string (optional) - Specifies a custom height for the hero section.
// - customFontSize: string (optional) - Sets a custom font size for the main text.
// - onImageClick: (index: number) => void (optional) - Callback function triggered when an element is clicked.
// - customImageData: CustomImageData[] (required) - An array of custom component data objects for the image (component) grid.
// - framerSize: [number, number] (optional) - Specifies the size of the framer component [width, height] (default: [340, 248]).
// - textBottom: string (optional) - Sets the bottom position of the text in the image grid (default: '-95px').
// - titleColor: string (optional) - Defines the color of the title text in the image grid.
// - titleSize: string (optional) - Sets the font size of the title text in the image grid (default: '48px').
// - descriptionColor: string (optional) - Defines the color of the description text in the image grid.
// - descriptionSize: string (optional) - Sets the font size of the description text in the image grid (default: '14px').
// - frameOutlineColor: string (optional) - Sets the color of the frame outline (default: '#a1a1b2').
`,
code: [
  {
    filename: 'FancyHeroSection.tsx',
    content: `'use client'

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import ImageGrid from "./ImageGrid";

interface CustomImageData {
  component: React.ReactNode;
  title: string;
  description: string;
}

interface FancyHeroSectionProps {
  text: string[];
  backgroundColor?: string;
  textShadowColor?: string;
  colorTransition?: string;
  textColor?: string;
  hoverTextColor?: string;
  backgroundHighlightEnabled?: boolean;
  backgroundHighlightColor?: string;
  customWidth?: string;
  customHeight?: string;
  customFontSize?: string;
  onImageClick?: (index: number) => void;
  customImageData: CustomImageData[];
  framerSize?: [number, number];
  textBottom?: string;
  titleColor?: string;
  titleSize?: string;
  descriptionColor?: string;
  descriptionSize?: string;
  frameOutlineColor?: string;
}

const FancyHeroSection: React.FC<FancyHeroSectionProps> = ({
  text,
  backgroundColor = '#242434',
  textShadowColor = '#444454',
  colorTransition = 'color 0.3s ease',
  textColor = '#ffffff',
  hoverTextColor = '#242434',
  backgroundHighlightEnabled = true,
  backgroundHighlightColor = '#4246ce',
  customWidth,
  customHeight,
  customFontSize,
  onImageClick,
  customImageData,
  framerSize = [340, 248],
  textBottom = '-95px',
  titleColor,
  titleSize = '48px',
  descriptionColor,
  descriptionSize = '14px',
  frameOutlineColor = '#a1a1b2',
}) => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [fontSize, setFontSize] = useState(customFontSize || "7.9vw");
  const cursorRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const cursorAnimation: AnimationControls = useAnimation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      checkImageHover(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", adjustFontSize);
    adjustFontSize();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", adjustFontSize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 24);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isClient) {
      cursorAnimation.start({
        x: mousePosition.x - 25,
        y: mousePosition.y - 25,
        transition: { type: "spring", stiffness: 500, damping: 50 }
      });
    }
  }, [mousePosition, cursorAnimation, isClient]);

  const checkImageHover = (x: number, y: number) => {
    let hoveredIndex = null;
    imageRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          hoveredIndex = index;
        }
      }
    });
    setHoveredImage(hoveredIndex);
    /*
    if (onImageHover) {
      onImageHover(hoveredIndex);
    }
      */
  };

  const handleImageClick = (index: number) => {
    if (onImageClick) {
      onImageClick(index);
    }
  };

  const adjustFontSize = () => {
    if (customFontSize) return;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const smallestDimension = Math.min(windowWidth, windowHeight);
    const newFontSize = Math.max(19, smallestDimension * (144 / 1080));
    setFontSize(\`\${newFontSize}px\`);
  };

  if (!isClient) {
    return null;
  }

  const containerStyle: React.CSSProperties = {
    backgroundColor,
    width: customWidth || '100%',
    height: customHeight || 'calc(100vh - 100px)',
  };

  const textShadow = \`-1px -1px 0 \${textShadowColor}, 1px -1px 0 \${textShadowColor}, -1px 1px 0 \${textShadowColor}, 1px 1px 0 \${textShadowColor}\`;

  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center" style={containerStyle}>
      <div className="absolute inset-0 flex justify-center items-center">
        <ImageGrid
          hoveredImage={hoveredImage}
          setHoveredImage={setHoveredImage}
          mousePosition={mousePosition}
          setMousePosition={setMousePosition}
          onImageClick={handleImageClick}
          customImageData={customImageData}
          framerSize={framerSize}
          textBottom={textBottom}
          titleColor={titleColor}
          titleSize={titleSize}
          descriptionColor={descriptionColor}
          descriptionSize={descriptionSize}
          textColor={textColor}
          frameOutlineColor={frameOutlineColor}
        />
      </div>
      <div ref={textContainerRef} className="container flex flex-col justify-center items-center relative z-20 py-10">
        {text.map((line, index) => {
          const delay = index * 0.2;
          return (
            <h1
              key={index}
              className={\`text relative inline-block cursor-pointer leading-[1] m-0 font-bold text-center \${
                !loading ? "text-emerged" : ""
              }\`}
              style={{
                fontSize: fontSize,
                color: hoveredImage !== null ? hoverTextColor : textColor,
                letterSpacing: '-.01em',
                transition: colorTransition,
                position: 'relative',
                overflow: 'hidden',
                textShadow: hoveredImage !== null ? textShadow : 'none',
              }}
              onMouseEnter={() => hoveredImage === null && setHoveredLine(index)}
              onMouseLeave={() => setHoveredLine(null)}
            >
              <div className="split-parent">
                <div className="split-child" style={{ transitionDelay: \`\${delay}s\` }}>
                  <span className="relative z-10 px-1 py-0.5">{line}</span>
                </div>
              </div>
              {hoveredImage === null && backgroundHighlightEnabled && (
                <span
                  className="text-effect absolute inset-0 z-0"
                  style={{
                    backgroundColor: backgroundHighlightColor,
                    clipPath: hoveredLine === index ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)',
                    transformOrigin: 'center',
                    transition: 'all cubic-bezier(.1,.5,.5,1) 0.4s',
                    left: '-4px',
                    right: '-4px',
                    top: '-4px',
                    bottom: '-4px'
                  }}
                ></span>
              )}
            </h1>
          );
        })}
      </div>
      {isClient && (
        <motion.div ref={cursorRef} animate={cursorAnimation} />
      )}
      <style jsx>{\`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");
        .text {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
        }
        .split-parent {
          overflow: hidden;
          position: relative;
          z-index: 10;
        }
        .split-child {
          display: inline-block;
          transform: translateY(100%);
          opacity: 1;
          transition: transform 0.9s ease, opacity;
        }
        \${backgroundHighlightEnabled ? \`
          .text:hover {
            color: #181820 !important;
          }
          .text:hover > .text-effect {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%) !important;
            background-color: \${backgroundHighlightColor} !important;
          }
        \` : ''}
        .text-emerged .split-child {
          transform: translateY(0);
          opacity: 1;
        }
        .text-effect {
          transition: all cubic-bezier(.1,.5,.5,1) 0.4s;
        }
        \${backgroundHighlightEnabled ? \`
          .text:hover .text-effect {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%) !important;
          }
        \` : ''}
      \`}</style>
    </div>
  );
}

export default FancyHeroSection;
`
  },
  {
    filename: 'ImageGrid.tsx',
    content: `"use client"

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface CustomImageData {
  component: React.ReactNode;
  title: string;
  description: string;
}

interface ImageGridProps {
  hoveredImage: number | null;
  setHoveredImage: (index: number | null) => void;
  mousePosition: { x: number; y: number };
  setMousePosition: (position: { x: number; y: number }) => void;
  onImageClick?: (index: number) => void;
  customImageData: CustomImageData[];
  framerSize?: [number, number];
  textBottom?: string;
  titleColor?: string;
  titleSize?: string;
  descriptionColor?: string;
  descriptionSize?: string;
  textColor?: string;
  frameOutlineColor?: string;
}

const ImageGrid: React.FC<ImageGridProps> = ({
  hoveredImage,
  setHoveredImage,
  setMousePosition,
  onImageClick,
  customImageData,
  framerSize = [340, 248],
  textBottom = '-95px',
  titleColor,
  titleSize = '48px',
  descriptionColor,
  descriptionSize = '14px',
  textColor = '#ffffff',
  frameOutlineColor = '#a1a1b2',
}) => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [targetPositions, setTargetPositions] = useState<{ x: number; y: number }[]>(
    customImageData.map(() => ({ x: 0, y: 0 }))
  );
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const [width, height] = framerSize;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      checkImageHover(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [setMousePosition]);

  useEffect(() => {
    const animateImages = () => {
      containerRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.to(ref, {
            x: targetPositions[index].x,
            y: targetPositions[index].y,
            duration: 2,
            ease: "power2.out",
          });
        }
      });
    };
    animateImages();
  }, [targetPositions]);

  const checkImageHover = (x: number, y: number) => {
    let newHoveredIndex: number | null = null;
    containerRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          newHoveredIndex = index;
        }
      }
    });
    setHoveredImage(newHoveredIndex);
    updateTargetPositions(newHoveredIndex, x, y);
  };

  const updateTargetPositions = (hoveredIndex: number | null, cursorX: number, cursorY: number) => {
    const newTargetPositions = targetPositions.map((pos, index) => {
      if (index === hoveredIndex) {
        const containerRef = containerRefs.current[index];
        if (containerRef) {
          const rect = containerRef.getBoundingClientRect();
          const centerX = (rect.left + rect.right) / 2;
          const centerY = (rect.top + rect.bottom) / 2;
          const maxMoveX = Math.min(window.innerWidth / 4, 100);
          const maxMoveY = Math.min(window.innerHeight / 4, 100);
          let dx = (cursorX - centerX) * 0.5;
          let dy = (cursorY - centerY) * 0.5;
          if (Math.abs(dx) > maxMoveX) {
            dx = maxMoveX * Math.sign(dx) * (1 - Math.exp(-Math.abs(dx - maxMoveX) / 50));
          }
          if (Math.abs(dy) > maxMoveY) {
            dy = maxMoveY * Math.sign(dy) * (1 - Math.exp(-Math.abs(dy - maxMoveY) / 50));
          }
          return { x: dx, y: dy };
        }
      }
      return { x: 0, y: 0 };
    });
    setTargetPositions(newTargetPositions);
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    if (onImageClick) {
      onImageClick(index);
    }
  };

  interface FramerComponentProps {
    index: number;
    isSelected: boolean;
  }

  const FramerComponent: React.FC<FramerComponentProps> = ({ index}) => {
    const customImage = customImageData[index];
    return (
      <div className="relative bg-transparent flex items-center justify-center" style={{ width: \`\${width}px\`, height: \`\${height}px\` }}>
        {customImage.component}
      </div>
    );
  };

  interface ImageComponentProps {
    index: number;
    hoveredImage: number | null;
    setHoveredImage: (index: number | null) => void;
    isSelected: boolean;
    onClick: () => void;
  }

  const ImageComponent: React.FC<ImageComponentProps> = ({
    index,
    hoveredImage,
    setHoveredImage,
    isSelected,
    onClick,
  }) => (
    <div
      className="relative overflow-hidden cursor-pointer"
      style={{ width: \`\${width}px\`, height: \`\${height}px\` }}
      onMouseEnter={() => setHoveredImage(index)}
      onMouseLeave={() => setHoveredImage(null)}
      onClick={onClick}
    >
      {hoveredImage === null || hoveredImage === index ? (
        <FramerComponent key={index} index={index} isSelected={isSelected} />
      ) : (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative" style={{ width: \`\${width}px\`, height: \`\${height}px\` }}>
            {hoveredImage !== null && (
              <>
                {(() => {
                  const angle = Math.atan(height / width) * (180 / Math.PI);
                  return (
                    <>
                      <div className="absolute" style={{
                        width: \`\${Math.sqrt(width ** 2 + height ** 2)}px\`,
                        height: '1px',
                        backgroundColor: frameOutlineColor,
                        top: '0',
                        left: '0',
                        transform: \`rotate(\${angle}deg)\`,
                        transformOrigin: 'top left',
                        zIndex: '40'
                      }} />
                      <div 
  className="absolute top-0 left-0 right-0 bottom-0 border" 
  style={{ borderColor: frameOutlineColor }}
/>

                      <div className="absolute" style={{
                        width: \`\${Math.sqrt(width ** 2 + height ** 2)}px\`,
                        height: '1px',
                        backgroundColor: frameOutlineColor,
                        top: '0',
                        right: '0',
                        transform: \`rotate(-\${angle}deg)\`,
                        transformOrigin: 'top right',
                        zIndex: '40'
                      }} />
                    </>
                  );
                })()}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );

  interface TextComponentProps {
    index: number;
    hoveredImage: number | null;
  }

  const TextComponent: React.FC<TextComponentProps> = ({ index, hoveredImage }) => {
    const customImage = customImageData[index];
    return (
      <div className="absolute" style={{
        zIndex: 40,
        width: \`\${width}px\`,
        bottom: textBottom,
        left: '100%',
        opacity: hoveredImage === index ? 1 : 0,
        transition: 'opacity 0.3s ease',
        transform: 'translateX(-50%)',
        textAlign: 'left',
        color: textColor,
      }}>
        <h1 style={{ fontSize: titleSize, fontWeight: 'bold', color: titleColor || textColor }}>{customImage.title}</h1>
        <p style={{ fontSize: descriptionSize, color: descriptionColor || textColor }}>{customImage.description}</p>
      </div>
    );
  };

  return (
    <div>
      <style>
        {\`
        .circular-layout {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 600px;
          height: 600px;
        }
        .circular-item {
          position: absolute;
          width: \${width}px;
          height: \${height}px;
          transform: translate(-50%, -50%);
        }
        .circular-item:nth-child(1) { top: 30%; left: 2%; }
        .circular-item:nth-child(2) { top: 12%; left: 100%; }
        .circular-item:nth-child(3) { top: 80%; left: 44%; }
        \`}
      </style>
      <div className="circular-layout">
        {customImageData.map((_, index) => (
          <div
            key={index}
            ref={(el) => { containerRefs.current[index] = el; }}
            className="circular-item"
            style={{ zIndex: hoveredImage === null ? '10' : '30' }}
          >
            <ImageComponent
              index={index}
              hoveredImage={hoveredImage}
              setHoveredImage={setHoveredImage}
              isSelected={selectedImage === index}
              onClick={() => handleImageClick(index)}
            />
            <TextComponent index={index} hoveredImage={hoveredImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
`
  },
],
  dependencies: 'npm install framer-motion\nnpm install gsap --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://codepen.io/Juxtoposed/pen/mdQaNbG" target="_blank" rel="noopener noreferrer" className="link">Text scroll and hover effect with GSAP and clip</a> by <a href="https://codepen.io/Juxtoposed" target="_blank" rel="noopener noreferrer" className="link">Juxtoposed</a>
      <br />
      <a href="https://codepen.io/swatiparge/pen/LYVMEag" target="_blank" rel="noopener noreferrer" className="link">Text Reveal Animation</a> by <a href="https://codepen.io/swatiparge" target="_blank" rel="noopener noreferrer" className="link">Swati Parge</a>
      <br />
    </span>
  ),
}

export { metadata }