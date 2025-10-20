"use client";

import React, { useRef, useState, useEffect } from "react";
import SubmitCard from "@/app/the-actual-components/submit-card/SubmitCard";
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

export default function CalendarDemo() {
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
            <SubmitCard
              link="https://blueberry-loom-form-loader.netlify.app/form/bWF4aW0uYm9ydC5kZXZlbEBnbWFpbC5jb20=/Far247Squ6?key=Im5uylqLi3BwlN909sLP1Y3vY6nRwMixa8D6BGpj6Uz5B4b9OO)YZSyKWvCGeX65a6Yfsc2ZdUAEWrue3FXDDg=="
              title={t("submit_card_note_preview_title")}
              description={t("submit_card_note_preview_description")}
              backgroundColor="#f9f9f9"
              borderColor="#cccccc"
              innerBorderColor="#d5d5d5"
              innerAreaBgColor="#e1e1e1"
              squareBgColor="#222222"
              plusIconColor="#00a7fa"
              dashedBorderColor="#d500ff"
              titleColor="#222222"
              descriptionColor="#555555"
              isRTL={isRTL}
              useDrawIcon
            />
          </div>
        </div>
      </div>
    </div>
  );
}

