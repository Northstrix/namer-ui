'use client'

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import ImageGrid from "@/app/components/ImageGrid";
import FancyNotification from '@/app/the-actual-components/fancy-notification/FancyNotification'

const text: string[] = [
  "STYLISH",
  "TYPESCRIPT",
  "COMPONENTS",
  "FOR YOUR APPS"
];

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [fontSize, setFontSize] = useState("7.9vw");
  const cursorRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const cursorAnimation: AnimationControls = useAnimation();
  const [loading, setLoading] = useState(true);
  const purpleBackgroundEnabled = true;


  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error'>('success');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationMessage1, setNotificationMessage1] = useState('');
  
  // Custom messages
  const customSuccessMessage = "Look at me!";
  
  const showSuccessNotification = () => {
    setNotificationStatus('success');
    setNotificationMessage("I'm levitating.");
    setNotificationMessage1('The halomot button works!');
    setIsNotificationVisible(true);
  };
  
  const handleNotificationClose = () => {
    setIsNotificationVisible(false);
  };

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
  };

  const adjustFontSize = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const smallestDimension = Math.min(windowWidth, windowHeight);
    const newFontSize = Math.max(19, smallestDimension * (144 / 1080));
    setFontSize(`${newFontSize}px`);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative min-h-[calc(100vh-100px)] w-full bg-[#242434] overflow-hidden flex flex-col justify-center items-center">      
      <FancyNotification
        type={notificationStatus}
        message={notificationMessage}
        message1={notificationMessage1}
        isVisible={isNotificationVisible}
        onClose={handleNotificationClose}
        successMessage={customSuccessMessage} // Pass custom success message
      />
      
      <div className="absolute inset-0 flex justify-center items-center">
      <ImageGrid 
        hoveredImage={hoveredImage} 
        setHoveredImage={setHoveredImage} 
        mousePosition={mousePosition} 
        setMousePosition={setMousePosition}
        showSuccessNotification={showSuccessNotification}  // Add this line
      />
      </div>
      <div ref={textContainerRef} className="container flex flex-col justify-center items-center relative z-20 py-10">
        {text.map((line, index) => {
          const delay = index * 0.2; // 0.2 seconds delay between each line
          return (
            <h1
              key={index}
              className={`text relative inline-block cursor-pointer leading-[1] m-0 font-bold text-center ${
                !loading ? "text-emerged" : ""
              }`}
              style={{
                fontSize: fontSize,
                color: hoveredImage !== null ? '#242434' : '#ffffff',
                letterSpacing: '-.01em',
                transition: 'color 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                textShadow: hoveredImage !== null ? '-1px -1px 0 #444454, 1px -1px 0 #444454, -1px 1px 0 #444454, 1px 1px 0 #444454' : 'none',
              }}
              onMouseEnter={() => hoveredImage === null && setHoveredLine(index)}
              onMouseLeave={() => setHoveredLine(null)}
            >
              <div className="split-parent">
                <div className="split-child" style={{ transitionDelay: `${delay}s` }}>
                  <span className="relative z-10 px-1 py-0.5">{line}</span>
                </div>
              </div>
              {hoveredImage === null && purpleBackgroundEnabled && (
                <span
                  className="text-effect absolute inset-0 z-0"
                  style={{
                    backgroundColor: '#4246ce',
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
        <motion.div
          ref={cursorRef}
          animate={cursorAnimation}
        />
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
        ${purpleBackgroundEnabled
          ? `
          .text:hover {
            color: #181820 !important;
          }
          .text:hover > .text-effect {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%) !important;
            background-color: #4246ce !important;
          }
          `
          : ''
        }
        .text-emerged .split-child {
          transform: translateY(0);
          opacity: 1;
        }
        .text-effect {
          transition: all cubic-bezier(.1,.5,.5,1) 0.4s;
        }
        ${purpleBackgroundEnabled
          ? `
          .text:hover .text-effect {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%) !important;
          }
          `
          : ''
        }
      `}</style>
    </div>
  );
}