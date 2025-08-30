"use client";

import React, { useRef, useState, useEffect } from "react";
import { MultiColoredTextV1, MultiColoredTextV2 } from "@/app/the-actual-components/multi-colored-text/MultiColoredText";
import { useTranslation } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";

const MIN_WIDTH = 100;
const MAX_WIDTH = 1024;
const MIN_FONT_SIZE_EM = 1;
const MAX_FONT_SIZE_EM = 8;

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

  // Colors for v1 demo - reversed for RTL
  const v1Colors = ["#4776cb", "#a19fe5", "#6cc606"];

  return (
    <div>
      {/* V1 Demo */}
      <div
        ref={containerRef}
        className="flex items-center justify-center w-full mb-8"
        style={{ position: "relative" }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <MultiColoredTextV1
          inscription={t("namer_ui")}
          fontSize={fontSize}
          colors={v1Colors}
          separatorRotation={isRTL ? "225deg" : "135deg"}
          fontWeight={700}
        />
      </div>

      {/* V2 Demo */}
      <div
        className="flex items-center justify-center"
        style={{
          position: "relative",
          backgroundColor: "#f0f8ff",
          padding: "40px",
          borderRadius: "8px",
        }}
      >
        <MultiColoredTextV2
          inscription="פלאם חארבור"
          fontSize="7em"
          primaryColor="#00aaff"
          secondaryColor="#5c3fcd"
          tertiaryColor="#3a3a3a"
          quaternaryColor="#f9002f"
          quinaryColor="#f1b211"
          separatorRotation="232deg"
          fontWeight={700}
        />
      </div>
    </div>
  );
}
