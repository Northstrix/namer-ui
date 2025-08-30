"use client";
import { useState, useEffect, useRef } from "react";
import BauhausFileCard from "@/app/the-actual-components/bauhaus-file-card/BauhausFileCard";

export default function BauhausFileCardPreview() {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!innerRef.current) return;
      const width = innerRef.current.offsetWidth; // measure inner’s real width

      if (width >= 564) {
        setScale(1);
      } else {
        const minW = 100;
        const maxW = 564;
        const minS = 0.14;
        const maxS = 0.94;
        const clampedW = Math.max(minW, Math.min(width, maxW));
        const newScale =
          minS + (maxS - minS) * ((clampedW - minW) / (maxW - minW));
        setScale(newScale);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    // Outer full background container (always white & full-screen)
    <div className="flex items-center justify-center w-full h-screen bg-white">
      {/* Inner scalable container (white, always centered) */}
      <div
        ref={innerRef}
        className="flex items-center justify-center bg-white"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center",
        }}
      >
        <BauhausFileCard
          id="file1"
          topInscription="Size: 5.96 MB"
          fileName="Downtown Dallas.png"
          subMainText="A high-quality image featuring the stunning skyline of Downtown Dallas, showcasing its modern architecture and vibrant city life."
          filledButtonInscription="View"
          outlinedButtonInscription="Download"
          onFilledButtonClick={(id) => {}}
          onOutlinedButtonClick={(id) => {}}
          onTitleClick={(id) => {}}
          onDescriptionClick={(id) => {}}
          onMoreOptionsClick={(id) => {}}
        />
      </div>
    </div>
  );
}
