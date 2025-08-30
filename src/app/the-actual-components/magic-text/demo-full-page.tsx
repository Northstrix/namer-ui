"use client";

import React, { useRef, useState, useEffect } from "react";
import MagicText from "@/app/the-actual-components/magic-text/MagicText";
import { Sparkle, Flame } from "lucide-react";
import { useTranslation } from "@/context/app-context";

// RTL check regex
const isRTLCheck = (text: string): boolean =>
  /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text || "");

// Font scaling: 400px → 1em, 800px → 2.25em
function getFontSize(width: number): number {
  if (width <= 400) {
    return (width / 400) * 1.0;
  }
  if (width <= 800) {
    const t = (width - 400) / (800 - 400);
    return 1.0 + t * (2.25 - 1.0);
  }
  return 2.25;
}

// Icon scaling: 400px → 12px, 800px+ → 32px, below 400px → linear smaller
function getIconSize(width: number): number {
  if (width >= 800) return 32;
  if (width >= 400) {
    const t = (width - 400) / (800 - 400);
    return 12 + t * (32 - 12);
  }
  return (width / 400) * 12;
}

export default function MagicTextDemoResponsive() {
  const t = useTranslation();
  const currentLang = t("locale") || "en";

  const outerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(600);

  // Observe container width immediately (no debounce)
  useEffect(() => {
    function updateWidth() {
      if (outerRef.current) {
        setContainerWidth(outerRef.current.clientWidth);
      }
    }
    updateWidth();
    const resizeObserver = new ResizeObserver(() => updateWidth());
    if (outerRef.current) {
      resizeObserver.observe(outerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  const fontSizeEm = getFontSize(containerWidth);
  const iconSize = getIconSize(containerWidth);

  const rtlDetected =
    isRTLCheck(t("magic_text_sentence_prefix")) ||
    isRTLCheck(t("magic_text_word_heaven")) ||
    isRTLCheck(t("magic_text_word_hell"));

  const remountKey = `${currentLang}-${containerWidth}`;

  return (
    <div ref={outerRef} style={{ width: "100%" }}>
      <div
        key={remountKey}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          color: "#fff",
          fontSize: `${fontSizeEm}em`,
          textAlign: "center",
          direction: rtlDetected ? "rtl" : "ltr"
        }}
      >
        <div>
          {t("magic_text_sentence_prefix")}{" "}
          <MagicText
            sparkleIcon={<Sparkle size={iconSize} stroke="none" color="#ff7a00" />}
            mirrored={rtlDetected}
          >
            {t("magic_text_word_heaven")}
          </MagicText>{" "}
          {t("magic_text_sentence_mid")}{" "}
          <MagicText
            gradientColors={["#d5243f", "#8e2de2"]}
            starColors={["#ff7a00", "#ff944d"]}
            sparkleIcon={<Flame size={iconSize} stroke="none" color="#ff7a00" />}
            mirrored={rtlDetected}
          >
            {t("magic_text_word_hell")}
          </MagicText>
          .
        </div>
      </div>
    </div>
  );
}