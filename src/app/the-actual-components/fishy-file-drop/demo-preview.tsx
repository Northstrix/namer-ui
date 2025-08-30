"use client";

import { useEffect, useRef, useState } from "react";
import { FishyFileDrop } from "@/app/the-actual-components/fishy-file-drop/FishyFileDrop";

export default function MyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.74); // default max

  const handleFilesSelected = (files: FileList | File[]) => {
    // Normalize to File[] for easier processing if needed
    const fileArray: File[] = Array.isArray(files) ? files : Array.from(files);
    console.log("Files selected:", fileArray);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;

        // Linear scaling between 100px → 520px
        let newScale = 0.2 + ((width - 100) / (520 - 100)) * (0.74 - 0.2);

        // Clamp between 0.2 and 0.74
        newScale = Math.max(0.2, Math.min(0.74, newScale));

        setScale(newScale);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center p-8"
      style={{ width: "100%", height: "100vh", backgroundColor: "#fff" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "324px",
          width: "324px",
          background: `
            repeating-conic-gradient(
              #eee 0deg 90deg,
              #fff 90deg 180deg
            )
            0 0 / 36px 36px,
            #f0f0f0
          `,
          borderRadius: "10px",
          transform: `scale(${scale})`,
          transformOrigin: "center", // scale from center
          transition: "transform 0.25s ease-out", // smooth scaling
        }}
      >
        <FishyFileDrop
          id="ffd-light-version"
          width="324px"
          height="324px"
          padding="16px"
          backgroundImageWidth="94px"
          backgroundImage="https://raw.githubusercontent.com/Northstrix/Lakhash/refs/heads/main/Lakhash/Source%20code/public/ChristmasTreesPattern.png"
          backgroundRepeat="repeat"
          borderWidth="2px"
          borderColor="#0092a0"
          borderRadius="8px"
          shadow="0 2px 15px rgba(255, 255, 255, 0.2), 0 2px 18px #0092a0, 0 3px 12px #00cbc9"
          innerBorderRadius="6px"
          waveColors={["#0092a0", "#00afb4", "#00cbc9", "#00e7de"]}
          bubbleColor="rgba(0,0,0,0.5)"
          textColor="#182226"
          textStroke="#fff"
          textEffectColor="#00e7de"
          textSize="33px"
          textHoverSize="39px"
          letterSpacing="4px"
          letterSpacingHover="9px"
          text="רחף עליי"
          fishColor="#151419"
          fontFamily="'Varela Round', sans-serif"
          onFilesSelected={handleFilesSelected}
        />
      </div>
    </div>
  );
}
