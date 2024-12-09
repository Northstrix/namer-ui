"use client"
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import FishyButton from '@/app/the-actual-components/fishy-button/FishyButton'
import MagicButton from '@/app/the-actual-components/magic-button/MagicButton'
import { ShamayimToggleSwitch } from '@/app/the-actual-components/shamayim-toggle-switch/ShamayimToggleSwitch';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ImageGridProps {
  hoveredImage: number | null;
  setHoveredImage: (index: number | null) => void;
  mousePosition: { x: number; y: number };
  setMousePosition: (position: { x: number; y: number }) => void;
  showSuccessNotification: () => void;
}

interface ImageData {
  src: string;
  title: string;
  description: string;
}

const imageData: ImageData[] = [
  { src: "magic-button", title: "Magic Button", description: "Click it for a fancy notification to appear." },
  { src: 'fishy-button', title: 'Fishy Button', description: 'A sleek button with floating fish appearing on hover.' },
  { src: "toggles", title: "Toggle Switch", description: "A celestial-themed toggle switch." },
];

const ImageGrid: React.FC<ImageGridProps> = ({
  hoveredImage,
  setHoveredImage,
  setMousePosition,
  showSuccessNotification,
}) => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [targetPositions, setTargetPositions] = useState<{ x: number; y: number }[]>(
    imageData.map(() => ({ x: 0, y: 0 }))
  );

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

          // Increase movement range
          const maxMoveX = Math.min(window.innerWidth / 4, 100);
          const maxMoveY = Math.min(window.innerHeight / 4, 100);

          let dx = (cursorX - centerX) * 0.5; // Increase movement speed
          let dy = (cursorY - centerY) * 0.5;

          // Add bouncing effect
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

  interface FramerComponentProps {
    index: number;
  }

  const FramerComponent: React.FC<FramerComponentProps> = ({ index }) => {
    const image = imageData[index];
    const filename = image.src.split('/').pop(); // Extracts the filename from src

    if (image.src === 'fishy-button') {
      return (
        <div className="relative w-[348px] h-[248px] bg-[#080810] flex flex-col items-center justify-center space-y-5">
          <FishyButton 
            type="button" 
            className="button--2"
            onClick={() => toast.info("The \"Create\" button has been clicked")} 
          >
            Create
          </FishyButton>
          <FishyButton 
            type="button" 
            className="button--3"
            onClick={() => toast.info("The \"Cancel\" button has been clicked")} 
          >
            Cancel
          </FishyButton>
        </div>
      );
    }
  
    if (image.src === 'magic-button') {
      return (
        <div className="relative w-[348px] h-[248px] bg-[#080810] flex items-center justify-center">
          <MagicButton 
            onButtonClick={showSuccessNotification}
            inscription="Magic Button"
            fontSize="1.34rem"
          />
        </div>
      );
    }
  
    if (image.src === 'toggles') {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1em',
          minHeight: '300px',
          backgroundImage: 'linear-gradient(45deg, #47b6d1, #90e0ec)',
          fontSize: '1.41em',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
            <span style={{ color: '#E0F9FC' }}>Mobile Data</span>
            <ShamayimToggleSwitch 
              defaultState={false} 
              onChange={(isOn) => toast.info(`Top switch is now ${isOn ? 'ON' : 'OFF'}`)} 
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
            <ShamayimToggleSwitch 
              defaultState={false} 
              mirrored 
              onChange={(isOn) => toast.info(`Bottom switch is now ${isOn ? 'ON' : 'OFF'}`)} 
            />
            <span style={{ color: '#E0F9FC' }}>נתונים סלולריים</span>
          </div>
        </div>
      );
    }
  
    return (
      <div className="relative w-[348px] h-[248px] bg-[#080810] flex items-center justify-center text-white text-lg font-semibold">
        {filename}
      </div>
    );
  };
  
  interface ImageComponentProps {
    image: {
      src: string;
      title: string;
      description: string;
    };
    index: number;
    hoveredImage: number | null; // Allow null for hover state
    setHoveredImage: (index: number | null) => void; // Function to set hover state
  }
  
  const ImageComponent: React.FC<ImageComponentProps> = ({ index, hoveredImage, setHoveredImage }) => (
    <div
      className="relative overflow-hidden"
      style={{
        width: '340px',
        height: '248px',
      }}
      onMouseEnter={() => setHoveredImage(index)} // Set hover state on mouse enter
      onMouseLeave={() => setHoveredImage(null)} // Reset hover state on mouse leave
    >
      {hoveredImage === null || hoveredImage === index ? (
        <>
        <FramerComponent key={index} index={index} />
       </>
      ) : (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative" style={{ width: '340px', height: '248px' }}>
            {hoveredImage !== null && (
              <>
                {(() => {
                  const width = 340;
                  const height = 248;
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
    image: {
      title: string;
      description: string;
    };
    index: number;
    hoveredImage: number | null; // Allow null for hover state
  }
  
  const TextComponent: React.FC<TextComponentProps> = ({ image, index, hoveredImage }) => (
    <div 
      className="absolute text-white"
      style={{ 
        zIndex: 40,
        width: '340px',
        bottom: '-95px', // Raised position
        left: '100%',
        opacity: hoveredImage === index ? 1 : 0,
        transition: 'opacity 0.3s ease',
        transform: 'translateX(-50%)',
        textAlign: 'left'
      }}
    >
      <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>{image.title}</h1>
      <p className="text-sm">{image.description}</p>
    </div>
  );

  return (
    <div>
      <style>
        {`
          .circular-layout {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 600px; /* Adjust as needed */
            height: 600px; /* Adjust as needed */
          }

          .circular-item {
            position: absolute;
            width: 340px; /* Size of the item */
            height: 210px; /* Size of the item */
            transform: translate(-50%, -50%);
          }

          .circular-item:nth-child(1) {
            top: 30%;
            left: 2%;
          }

          .circular-item:nth-child(2) {
            top: 12%;
            left: 100%;
          }

          .circular-item:nth-child(3) {
            top: 80%;
            left: 44%;
          }
        `}
      </style>

      <div className="circular-layout">
        {imageData.map((image, index) => {
          // Hardcoded links for each image
          return (
            <div 
              key={index}
              ref={(el) => {
                containerRefs.current[index] = el;
              }}
              className="circular-item"
              style={{
                zIndex: hoveredImage === null ? '10' : '30'
              }}
            >
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredImage(index)} // Optional hover state management
              >
                <ImageComponent 
                  image={image} 
                  index={index} 
                  hoveredImage={hoveredImage} 
                  setHoveredImage={setHoveredImage} 
                />
              </a>
              <TextComponent 
                image={image} 
                index={index} 
                hoveredImage={hoveredImage} 
              />
            </div>
          );
        })}
      </div>
      <ToastContainer
        position="bottom-right" // Position of the container
        autoClose={5000}        // Duration for all toasts in this container
        hideProgressBar={false} // Show progress bar for all toasts
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ImageGrid;