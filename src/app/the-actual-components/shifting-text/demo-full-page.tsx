"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import ShiftingText from "@/app/the-actual-components/shifting-text/ShiftingText";

function lerp(min: number, max: number, t: number) {
  return min + t * (max - min);
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function interpolate(width: number, minWidth: number, maxWidth: number, minValue: number, maxValue: number) {
  if (width <= minWidth) return minValue;
  if (width >= maxWidth) return maxValue;
  const t = clamp01((width - minWidth) / (maxWidth - minWidth));
  return lerp(minValue, maxValue, t);
}

function getTopFontSize(width: number) {
  return interpolate(width, 320, 720, 64 * 0.2, 128);
}

function getBottomFontSize(width: number) {
  return interpolate(width, 320, 720, 76 * 0.2, 76);
}

function getPaddingY(width: number) {
  return interpolate(width, 320, 720, 36 * 0.2, 64);
}

function getTopIntensity(width: number) {
  return interpolate(width, 320, 720, 0.64 * 0.28, 0.64);
}

function getBottomIntensity(width: number) {
  return interpolate(width, 320, 720, 0.98 * 0.28, 0.98);
}

export default function ShiftingTextDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [measuredWidth, setMeasuredWidth] = useState(720);
  const [debouncedWidth, setDebouncedWidth] = useState(720);

  const measure = () => {
    if (containerRef.current) {
      setMeasuredWidth(containerRef.current.clientWidth);
    }
  };

  useEffect(() => {
    measure();

    const observer = new ResizeObserver(() => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => {
        measure();
      }, 1200);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setDebouncedWidth(measuredWidth);
  }, [measuredWidth]);

  const topFontSize = useMemo(() => `${getTopFontSize(debouncedWidth)}px`, [debouncedWidth]);
  const bottomFontSize = useMemo(() => `${getBottomFontSize(debouncedWidth)}px`, [debouncedWidth]);
  const paddingY = useMemo(() => `${getPaddingY(debouncedWidth)}px`, [debouncedWidth]);
  const topIntensity = useMemo(() => getTopIntensity(debouncedWidth), [debouncedWidth]);
  const bottomIntensity = useMemo(() => getBottomIntensity(debouncedWidth), [debouncedWidth]);

  const remountKey = `shifting-${debouncedWidth}`;

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <div
        key={remountKey}
        className="flex flex-col items-center justify-center gap-40 w-full h-full"
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
        }}
      >
        <ShiftingText
          fontSize={topFontSize}
          intensity={topIntensity}
        />

        <ShiftingText
          text="נמר UI"
          direction="rtl"
          fontSize={bottomFontSize}
          intensity={bottomIntensity}
          amplitude={4}
          centerOffset={22}
          pace={16}
          enter={300}
          hold={70}
          exit={9}
          pause={90}
          liveVisibleAtHome={false}
          fontWeight={700}
          letterSpacing="0.2em"
          frontColor={["#5300FA", "#00A7FA", "#D000FA"]}
          backColor={["#291255", "#1D3B54", "#491854"]}
        />
      </div>
    </div>
  );
}