'use client'

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
    setFontSize(`${newFontSize}px`);
  };

  if (!isClient) {
    return null;
  }

  const containerStyle: React.CSSProperties = {
    backgroundColor,
    width: customWidth || '100%',
    height: customHeight || 'calc(100vh - 100px)',
  };

  const textShadow = `-1px -1px 0 ${textShadowColor}, 1px -1px 0 ${textShadowColor}, -1px 1px 0 ${textShadowColor}, 1px 1px 0 ${textShadowColor}`;

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
              className={`text relative inline-block cursor-pointer leading-[1] m-0 font-bold text-center ${
                !loading ? "text-emerged" : ""
              }`}
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
                <div className="split-child" style={{ transitionDelay: `${delay}s` }}>
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
      <style jsx>{`
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
        ${backgroundHighlightEnabled ? `
          .text:hover {
            color: #181820 !important;
          }
          .text:hover > .text-effect {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%) !important;
            background-color: ${backgroundHighlightColor} !important;
          }
        ` : ''}
        .text-emerged .split-child {
          transform: translateY(0);
          opacity: 1;
        }
        .text-effect {
          transition: all cubic-bezier(.1,.5,.5,1) 0.4s;
        }
        ${backgroundHighlightEnabled ? `
          .text:hover .text-effect {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%) !important;
          }
        ` : ''}
      `}</style>
    </div>
  );
}

export default FancyHeroSection;