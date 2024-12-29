"use client"

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
      <div className="relative bg-transparent flex items-center justify-center" style={{ width: `${width}px`, height: `${height}px` }}>
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
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseEnter={() => setHoveredImage(index)}
      onMouseLeave={() => setHoveredImage(null)}
      onClick={onClick}
    >
      {hoveredImage === null || hoveredImage === index ? (
        <FramerComponent key={index} index={index} isSelected={isSelected} />
      ) : (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
            {hoveredImage !== null && (
              <>
                {(() => {
                  const angle = Math.atan(height / width) * (180 / Math.PI);
                  return (
                    <>
                      <div className="absolute" style={{
                        width: `${Math.sqrt(width ** 2 + height ** 2)}px`,
                        height: '1px',
                        backgroundColor: '#9191a1',
                        top: '0',
                        left: '0',
                        transform: `rotate(${angle}deg)`,
                        transformOrigin: 'top left',
                        zIndex: '40'
                      }} />
                      <div className="absolute top-0 left-0 right-0 bottom-0 border border-[#9191a1]" />
                      <div className="absolute" style={{
                        width: `${Math.sqrt(width ** 2 + height ** 2)}px`,
                        height: '1px',
                        backgroundColor: '#9191a1',
                        top: '0',
                        right: '0',
                        transform: `rotate(-${angle}deg)`,
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
        width: `${width}px`,
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
        {`
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
          width: ${width}px;
          height: ${height}px;
          transform: translate(-50%, -50%);
        }
        .circular-item:nth-child(1) { top: 30%; left: 2%; }
        .circular-item:nth-child(2) { top: 12%; left: 100%; }
        .circular-item:nth-child(3) { top: 80%; left: 44%; }
        `}
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
