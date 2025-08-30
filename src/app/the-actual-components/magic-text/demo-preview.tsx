"use client";

import React, { useRef, useState, useEffect } from "react";
import MagicText from "@/app/the-actual-components/magic-text/MagicText";
import { Flame, Sparkle } from "lucide-react";
import { useTranslation } from "@/context/app-context";

// RTL check regex
const isRTLCheck = (text: string): boolean =>
  /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text || "");

// --- Font size interpolation config ---
// 355px -> 0.75em, 524px -> 1.5em, 976px -> 1.6em
function getFontSize(width: number): number {
  if (width <= 355) return 0.75;
  if (width <= 524) {
    const t = (width - 355) / (524 - 355);
    return 0.75 + t * (1.5 - 0.75);
  }
  if (width <= 976) {
    const t = (width - 524) / (976 - 524);
    return 1.5 + t * (1.6 - 1.5);
  }
  return 1.6;
}

export default function MagicTextDemo() {
  const t = useTranslation();
  // If your context provides explicit locale code, use it instead of fallback
  const currentLang = t("locale") || "en";

  const outerRef = useRef<HTMLDivElement>(null);

  // --- Measured width and debounced width states ---
  const [rawWidth, setRawWidth] = useState(524);        // live measurement
  const [debouncedWidth, setDebouncedWidth] = useState(524); // for remount key

  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);

  // observe raw width
  useEffect(() => {
    const updateRawWidth = () => {
      if (outerRef.current) {
        setRawWidth(outerRef.current.clientWidth);
      }
    };

    updateRawWidth(); // init

    const resizeObserver = new ResizeObserver(() => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => {
        updateRawWidth(); // measure after 1s
      }, 1000);
    });

    if (outerRef.current) {
      resizeObserver.observe(outerRef.current);
    }

    return () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeObserver.disconnect();
    };
  }, []);

  // Whenever rawWidth updates (after debounce), update debouncedWidth state (used in remount key)
  useEffect(() => {
    setDebouncedWidth(rawWidth);
  }, [rawWidth]);

  // compute responsive font
  const fontSizeEm = getFontSize(rawWidth);

  // RTL detection
  const rtlDetected =
    isRTLCheck(t("magic_text_sentence_prefix")) ||
    isRTLCheck(t("magic_text_word_heaven")) ||
    isRTLCheck(t("magic_text_word_hell"));

  // 👇 Key includes currentLang (immediate updates), and debouncedWidth (after delay)
  const remountKey = `${currentLang}-${debouncedWidth}`;

  return (
    <div ref={outerRef} style={{ width: "100%", height: "100%" }}>
      <div
        key={remountKey}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          width: "100%",
          height: "100%",
          background: "#fff",
          color: "#0a0a0a",
          fontSize: `${fontSizeEm}em`,
          textAlign: "center",
          direction: rtlDetected ? "rtl" : "ltr"
        }}
      >
        <div>
          {t("magic_text_sentence_prefix")}{" "}
          <MagicText
            sparkleIcon={<Sparkle size={26} stroke="none" color="#ff7a00" />}
            mirrored={rtlDetected}
          >
            {t("magic_text_word_heaven")}
          </MagicText>{" "}
          {t("magic_text_sentence_mid")}{" "}
          <MagicText
            gradientColors={["#d5243f", "#8e2de2"]}
            starColors={["#ff7a00", "#ff944d"]}
            sparkleIcon={<Flame size={26} stroke="none" color="#ff7a00" />}
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
