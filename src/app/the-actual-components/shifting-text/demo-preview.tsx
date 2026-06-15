"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import ShiftingText from "@/app/the-actual-components/shifting-text/ShiftingText";
import { useTranslation, useApp } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";

type Direction = "ltr" | "rtl";

function lerp(min: number, max: number, t: number) {
  return min + t * (max - min);
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function interpolate(
  width: number,
  minWidth: number,
  maxWidth: number,
  minValue: number,
  maxValue: number
) {
  if (width <= minWidth) return minValue;
  if (width >= maxWidth) return maxValue;
  const t = clamp01((width - minWidth) / (maxWidth - minWidth));
  return lerp(minValue, maxValue, t);
}

function getTopFontScale(width: number) {
  if (width <= 320) return 0.2;
  if (width <= 720) return interpolate(width, 320, 720, 0.194, 0.86);
  if (width <= 800) return interpolate(width, 720, 800, 0.87, 1);
  if (width <= 920) {
    const t = (width - 800) / 120;
    return 1 + 0.16 * Math.sin(t * Math.PI * 2);
  }
  return 1 + 0.16 * Math.sin((width - 920) / 120 * Math.PI * 2);
}

function getTopIntensity(width: number) {
  return interpolate(width, 320, 920, 0.18, 0.64);
}

export default function ShiftingTextDemo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const resizeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { lang } = useApp();
  const t = useTranslation();
  const isRTL = useIsRTL();

  const [rawWidth, setRawWidth] = useState(720);
  const [debouncedWidth, setDebouncedWidth] = useState(720);

  const measure = () => {
    if (wrapperRef.current) setRawWidth(wrapperRef.current.clientWidth);
  };

  useEffect(() => {
    measure();
    const observer = new ResizeObserver(() => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => {
        measure();
      }, 1200);
    });

    if (wrapperRef.current) observer.observe(wrapperRef.current);

    return () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setDebouncedWidth(rawWidth);
  }, [rawWidth]);

  const fontScale = useMemo(
    () => getTopFontScale(debouncedWidth),
    [debouncedWidth]
  );

  const topIntensity = useMemo(
    () => getTopIntensity(debouncedWidth),
    [debouncedWidth]
  );

  const topFontSize = useMemo(() => `${128 * fontScale}px`, [fontScale]);

  const text = t("namer_ui");
  const direction: Direction = isRTL ? "rtl" : "ltr";
  const remountKey = `${lang}-${direction}-${debouncedWidth}`;

  const defaultProps = {
    text: "Namer UI",
    direction: direction as Direction,
  };

  return (
    <div
      ref={wrapperRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: 0,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        key={remountKey}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <ShiftingText
          text={text || defaultProps.text}
          direction={direction}
          fontSize={topFontSize}
          fontWeight={isRTL ? 600 : 900}
          intensity={topIntensity}
          frontColor={["#00A7FA", "#3A3A3A"]}
          backColor={["#919191"]}
        />
      </div>
    </div>
  );
}