"use client";

import React, { useRef, useEffect, useState } from "react";
import BentoGrid from "@/app/the-actual-components/bento-grid/BentoGrid";

export default function BentoGridPreview() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      if (!outerRef.current) return;
      const outerWidth = outerRef.current.clientWidth;

      // Wonderland-style interpolation
      const minW = 100;
      const maxW = 564;
      const minM = 0.5;
      const maxM = 0.76;

      if (outerWidth <= minW) {
        setScale(minM);
      } else if (outerWidth >= maxW) {
        setScale(maxM);
      } else {
        const t = (outerWidth - minW) / (maxW - minW);
        setScale(minM + t * (maxM - minM));
      }
    }

    updateScale();
    const resizeObserver = new ResizeObserver(updateScale);
    if (outerRef.current) resizeObserver.observe(outerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={outerRef}
      className="flex w-full h-full bg-white items-center justify-center"
      style={{ overflow: "hidden" }}
    >
      <div
        style={{
          width: "100%",                  // ✅ always 100%
          transform: `scale(${scale})`,   // ✅ only scale manipulated
          transformOrigin: "center",      // tweak: "top left" if you prefer
          willChange: "transform",
        }}
      >
        <BentoGrid
          mainAspect="9/16"
          leftColRatio={0.32}
          rightCol1={0.6}
          rightCol2={0.4}
          topRowRatio={0.65}
          bottomRowRatio={0.35}
          gap="14px"
          gridHeight="264px"
          cellBackground="#17161c"
          cellBorderColor="#33313d"
          cellBorderRadius="32px"
          cellBorderWidth="5px"
          cellPadding="8px"
          mainCellBorderColor="#7b1fa2"
          mainCellBorderRadius="32px"
          topCenterCellBackground="#060507"
          topRightCellBackground="#111014"
          bottomCellBackground="#4776cb"
          bottomCellBorderRadius="4px"
          bottomCellBorderWidth="0px"
          main={
            <div style={{ width: "100%", textAlign: "center" }}>
              <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Left (Main)
              </div>
            </div>
          }
          topCenter={
            <div style={{ width: "100%", textAlign: "center" }}>
              <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Top Center
              </div>
            </div>
          }
          topRight={
            <div style={{ width: "100%", textAlign: "center" }}>
              <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Top Right
              </div>
            </div>
          }
          bottom={
            <div style={{ width: "100%", textAlign: "center" }}>
              <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Bottom Right
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
