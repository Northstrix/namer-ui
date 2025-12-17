"use client";

import React, { useRef, useState, useEffect } from "react";
import HolographicCard from "./HolographicCard"; // Adjust path

export default function HolographicCardDemo() {
  const constraintRef = useRef<HTMLDivElement>(null);
  const [isWide, setIsWide] = useState(false);

  // Responsive Layout Check (1536px)
  useEffect(() => {
    const checkWidth = () => {
      setIsWide(window.innerWidth >= 1536);
    };
    
    // Initial check
    checkWidth();
    
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div 
      ref={constraintRef}
      className={`w-full px-6 py-12 flex gap-12 justify-center items-center overflow-hidden font-sans ${isWide ? 'flex-row' : 'flex-col'}`}
    >
      <div className="absolute inset-0 z-[-1] pointer-events-none"
      />
        <HolographicCard
          width={316}
          height={448}
          imageSrc="https://github.com/Northstrix/my-portfolio/blob/main/public/fourth-playground-card-image.jpg?raw=true"
          topText="旅"
          bottomText="創世"
        />
        <HolographicCard
          id="namer-ui-holographic-card-2"
          width={316}
          height={448}
          imageSrc="https://github.com/Northstrix/my-portfolio/blob/main/public/playground-card-image.webp?raw=true"
          topText="洪秀全"
          bottomText="洪秀全"
          topTextLetterSpacing="0.375rem"
          bottomTextLetterSpacing="0.375rem"
          maxImageWidthPct={0.64}
          topTextColor = "#8E5BEE"
          bottomTextColor = "#8E5BEE"
          electricColor = "#8E5BEE"
          hoverElectricColor = "#E95FF6"
          backgroundColor="#fff"
          patternSize={12.06}
          patternDotSize={1.75}
        />
        <HolographicCard
          id="namer-ui-holographic-card-3"
          width={316}
          height={448}
          imageSrc="https://github.com/Northstrix/my-portfolio/blob/main/public/third-playground-card-image.png?raw=true"
          topText="נמר"
          bottomText="I'm draggable!"
          topTextLetterSpacing="0.0175rem"
          bottomTextLetterSpacing="0.0175rem"
          textOverlayPadding = "1.125rem 1.375rem"
          maxImageWidthPct={0.54}
          topTextColor = "#5F73FB"
          bottomTextColor = "#5F73FB"
          electricColor = "#5F73FB"
          hoverElectricColor = "#5FA4FB"
          topTextVertical={false}
          bottomTextVertical={false}
          mirrorBottomText={false}
          enableDrag={true}
          isRTL
        />
    </div>
  );
}