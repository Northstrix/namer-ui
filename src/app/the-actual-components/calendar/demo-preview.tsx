"use client";

import React, { useRef, useState, useEffect } from "react";
import { Calendar } from "./Calendar";
import { useTranslation, useApp } from "@/context/app-context";

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

  // Localization
  const isRTL = lang === "he";
  const isSpanish = lang === "es";

  const spanishDayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const spanishMonthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Light theme with English calendar border radii
  const customLightTheme = {
    bgColor: "#ffffff",
    outlineColor: "#e1e1e1",
    outlineWidth: 1,
    outlineRadius: 8,
    padding: "16px",
    dayButtonWidth: 36,
    dayButtonHeight: 36,
    navButtonWidth: 28,
    navButtonHeight: 28,
    horizontalGap: 8,
    verticalGap: 8,
    headerSpacing: 12,
    dayButtonFontSize: "14px",
    weekLabelFontSize: "13px",
    monthYearFontSize: "16px",
    dayFontWeight: "500",
    weekLabelFontWeight: "600",
    monthYearFontWeight: "700",
    dayBorderWidth: 1,
    dayBorderRadius: 6,
    navBorderWidth: 1,
    navBorderRadius: 6,
    chevronIconSize: 16,
    chevronStrokeWidth: 2,
    transitionDuration: 0.3,
    dayButtondefaultBg: "transparent",
    dayButtondefaultText: "#0a0a0a",
    dayButtondefaultBorder: "#cccccc",
    dayButtonhoverBg: "#f3f3f3",
    dayButtonhoverText: "#000000",
    dayButtonhoverBorder: "#bdbdbd",
    dayButtonactiveBg: "#00A7FA",
    dayButtonactiveText: "#fafafa",
    dayButtonactiveBorder: "#73bfff",
    navButtondefaultBg: "#f5f5f5",
    navButtondefaultText: "#0a0a0a",
    navButtondefaultBorder: "#cccccc",
    navButtonhoverBg: "#e6e6e6",
    navButtonhoverText: "#0a0a0a",
    navButtonhoverBorder: "#bbbbbb",
    weekLabelColor: "#2d2d2d",
    monthYearColor: "#111111",
  };

  const calendarProps = isSpanish
    ? {
        isRTL: false,
        dayNames: spanishDayNames,
        monthNames: spanishMonthNames,
      }
    : {
        isRTL,
      };

  const weekLabelTrim = scale < 0.92 ? 2 : undefined;

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
          <Calendar {...calendarProps} custom={customLightTheme} weekLabelTrim={weekLabelTrim} selected={new Date()} />
        </div>
      </div>
    </div>
  );
}

