"use client";

import React, { useRef, useState, useEffect } from "react";
import { MultiColoredTextV1 } from "./MultiColoredText"; // Adjust path as needed
import { useTranslation } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";

const MIN_WIDTH = 100;
const MAX_WIDTH = 1024;
const MIN_FONT_SIZE_EM = 0.5;
const MAX_FONT_SIZE_EM = 7.6;

export default function MultiColoredTextDemo() {
  const t = useTranslation();
  const isRTL = useIsRTL();
  const containerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(`${MAX_FONT_SIZE_EM}em`);

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    let initTimeout: NodeJS.Timeout;

    function updateFontSize() {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const clampedWidth = Math.min(Math.max(width, MIN_WIDTH), MAX_WIDTH);
      const normalizedScale = (clampedWidth - MIN_WIDTH) / (MAX_WIDTH - MIN_WIDTH);
      const fontSizeEm = MIN_FONT_SIZE_EM + normalizedScale * (MAX_FONT_SIZE_EM - MIN_FONT_SIZE_EM);
      setFontSize(`${fontSizeEm.toFixed(2)}em`);
    }

    updateFontSize();
    initTimeout = setTimeout(updateFontSize, 1000);

    function handleResize() {
      updateFontSize();
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateFontSize, 1000);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      clearTimeout(initTimeout);
    };
  }, []);

  const v1Colors = ["#4776cb", "#a19fe5", "#6cc606"];
  const rotation = isRTL ? "225deg" : "135deg";

  return (
    <div ref={containerRef} style={{ width: "100vw", height: "100vh", backgroundColor: "#f0f8ff", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div
        className="bg-[#f0f8ff] flex items-center justify-center"
        style={{ position: "relative", width: "auto", maxWidth: "100%" }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <MultiColoredTextV1
          inscription={t("namer_ui")}
          fontSize={fontSize}
          colors={v1Colors}
          separatorRotation={rotation}
          fontWeight={700}
        />
      </div>
    </div>
  );
}
