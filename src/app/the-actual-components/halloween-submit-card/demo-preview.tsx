"use client";

import React, { useRef, useState, useEffect } from "react";
import HalloweenSubmitCard from "@/app/the-actual-components/halloween-submit-card/HalloweenSubmitCard";
import { useTranslation, useApp } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";

// Linear interpolation function
function lerp(min: number, max: number, t: number) {
  return min + t * (max - min);
}

// Scale interpolation config:
// 100px -> 0.2 scale
// 540px -> 1 scale
function getScale(height: number): number {
  if (height <= 100) return 0.24;
  if (height >= 540) return 1;
  // normalized t between 100 and 540
  const t = (height - 100) / (540 - 100);
  return lerp(0.24, 1, t);
}

export default function HalloweenSubmitCardDemo() {
  const { lang } = useApp();
  const t = useTranslation();
  const isRTL = useIsRTL();
  const outerRef = useRef<HTMLDivElement>(null);
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);

  const [rawHeight, setRawHeight] = useState(540);
  const [debouncedHeight, setDebouncedHeight] = useState(540);

  const updateRawHeight = () => {
    if (outerRef.current) {
      setRawHeight(outerRef.current.clientHeight);
    }
  };

  useEffect(() => {
    updateRawHeight();
    const resizeObserver = new ResizeObserver(() => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => {
        updateRawHeight();
      }, 1200); // 1.2s debounce
    });
    if (outerRef.current) {
      resizeObserver.observe(outerRef.current);
    }
    return () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setDebouncedHeight(rawHeight);
  }, [rawHeight]);

  const scale = getScale(debouncedHeight);
  const key = `${lang}-${debouncedHeight}`;

  return (
    <div ref={outerRef} style={{ width: "100%", height: "100%" }}>
      <div
        key={key}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
          color: "#0a0a0a",
        }}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <div style={{ maxWidth: 364 }}>
            <HalloweenSubmitCard
              link="https://blueberry-loom-form-loader.netlify.app/form/bWF4aW0uYm9ydC5kZXZlbEBnbWFpbC5jb20=/Far247Squ6?key=Im5uylqLi3BwlN909sLP1Y3vY6nRwMixa8D6BGpj6Uz5B4b9OO)YZSyKWvCGeX65a6Yfsc2ZdUAEWrue3FXDDg=="
              title={t("submit_card_note_preview_title")}
              description={t("submit_card_note_preview_description")}
              accent="#00A7FA"
              accentAdjacentColor="#0091E2"
              accentGlow="rgba(0, 167, 250, 0.85)"
              secondInteractiveColor="#66C9FF"
              cardBg="#E1F3FF"
              innerBg="#F4FAFF"
              innerBorderColor="rgba(0, 167, 250, 0.4)"
              textTitle="#0C2E4A"
              textDesc="#1172A5"
              bodyGlow="rgba(0, 167, 250, 0.25)"
              squareGlow="rgba(0, 140, 230, 0.4)"
              squareBgColor="#001B3C"
              isRTL={isRTL}
              enableGlow
              initialRotation={isRTL ? 3.7 : 1.4}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

