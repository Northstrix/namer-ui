"use client"
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

interface ModernRetroButtonProps {
  onClick?: () => void;
  label: string;
}

const ModernRetroButton: React.FC<ModernRetroButtonProps> = ({ 
  onClick, 
  label, 
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [textColor, setTextColor] = useState('#f7f7ff');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered) {
      timer = setTimeout(() => {
        setTextColor('#111118');
      }, 1000);
    } else {
      setTextColor('#f7f7ff');
    }
    return () => clearTimeout(timer);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (buttonRef.current) {
      gsap.to(buttonRef.current.querySelectorAll("rect"), {
        duration: 0.8,
        ease: "elastic.out(1, 0.21)",
        x: "100%",
        stagger: 0.01,
        overwrite: true,
        onComplete: () => flickerEffect(),
      });
    }
  };

  const flickerEffect = () => {
    if (buttonRef.current) {
      const nodes = buttonRef.current.querySelectorAll("rect");
      gsap.fromTo(nodes, { fill: "#0c79f7" }, { 
        fill: "#76b3fa", 
        duration: 0.1, 
        ease: "elastic.out(12, 0.3)", 
        repeat: -1, 
        yoyo: true 
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (buttonRef.current) {
      gsap.to(buttonRef.current.querySelectorAll("rect"), {
        duration: 0.8,
        ease: "elastic.out(1, 0.3)",
        x: "-100%",
        stagger: 0.01,
        overwrite: true,
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      className="retro-button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <span style={{ color: textColor }}>{label}</span>
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <g className="left">
          {[...Array(25)].map((_, index) => (
            <rect key={index} x="-100%" y={index * 2} width="100%" height="2" />
          ))}
        </g>
      </svg>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap");

        .retro-button {
          cursor: pointer;
          display: flex;
          font-weight: 500;
          font-style: italic;
          align-items: center;
          justify-content: center;
          font-family: "IBM Plex Mono", monospace;
          height: 50px;
          padding: 0 30px;
          position: relative;
          background-color: transparent;
          border-radius: 15px;
          border: none;
          outline: none;
          transform: skew(-15deg); 
          overflow: hidden;
          transition: transform 350ms;
        }

        .retro-button::before {
          background-image: repeating-linear-gradient(0deg, #181a29, #181a29 1px, #202436 1px, #202436 2px);
          border-radius: 10px;
          box-shadow: 0 0 0 0 #0763f7;
          content: "";
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          overflow: hidden;
          transition: box-shadow 350ms, transform 350ms;
          width: 100%;
          z-index: -1;
        }

        .retro-button:hover::before {
          box-shadow: 0 0 20px 2px #0763f7; 
          transform: scale(1.05);
        }

        span {
          z-index: 1;
          transition: color 350ms;
        }

        svg {
          border-radius: 10px; 
          overflow: hidden; 
          position: absolute; 
        }

        rect {
          fill: #76b3fa; 
          shape-rendering: crispEdges; 
        }
      `}</style>
    </button>
  );
};

export default ModernRetroButton;