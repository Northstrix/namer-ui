"use client";
import React from "react";
import { motion } from "framer-motion";

const SATELLITE_ICON = `<svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-satellite"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414z" /><path d="M6 10l-3 3l3 3l3 -3" /><path d="M10 6l3 -3l3 3l-3 3" /><path d="M12 12l1.5 1.5" /><path d="M14.5 17a2.5 2.5 0 0 0 2.5 -2.5" /><path d="M15 21a6 6 0 0 0 6 -6" /></svg>`;

const CLOSE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x" style="pointer-events:none;"> <path d="M18 6 6 18"/> <path d="m6 6 12 12"/> </svg>`;

const SatelliteOrbit = ({ isRTL, accentColor }: { isRTL: boolean; accentColor: string }) => {
  const containerWidth = 250;
  const containerHeight = 50;
  const scale = 0.24;

  // sizes
  const centralOrbSize = 100 * 1.5; // 150
  const satelliteSize = 50 * 1.5;   // 75

  // orbit positions
  const translateXVals = {
    oneStart: 20 * scale,
    twoStart: 80 * scale,
    threeStart: 180 * scale,
    fourStart: 160 * scale,
    translateYVals: {
      oneStart: 60 * scale,
      twoStart: -110 * scale,
      threeStart: -80 * scale,
      fourStart: 90 * scale,
    },
  };

  const commonWrapStyle: React.CSSProperties = {
    animation: `zindex 2000ms infinite ease-in-out`,
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    position: "absolute",
    transformOrigin: "center",
  };

  const wrapStyles: Record<string, React.CSSProperties> = {
    one: {
      ...commonWrapStyle,
      animationName: "translateOne, zindex",
      animationDuration: "1000ms, 2000ms",
      animationDelay: "0, -2000ms",
      transform: `translateX(${translateXVals.oneStart}px) translateY(${translateXVals.translateYVals.oneStart}px)`,
    },
    two: {
      ...commonWrapStyle,
      animationName: "translateTwo, zindex",
      animationDuration: "1000ms, 2000ms",
      animationDelay: "-1000ms, -2000ms",
      transform: `translateX(${translateXVals.twoStart}px) translateY(${translateXVals.translateYVals.twoStart}px)`,
    },
    three: {
      ...commonWrapStyle,
      animationName: "translateThree, zindex",
      animationDuration: "1000ms, 2000ms",
      animationDelay: "-1500ms, -2000ms",
      transform: `translateX(${translateXVals.threeStart}px) translateY(${translateXVals.translateYVals.threeStart}px)`,
    },
    four: {
      ...commonWrapStyle,
      animationName: "translateFour, zindex",
      animationDuration: "1000ms, 2000ms",
      animationDelay: "-2500ms, -2000ms",
      transform: `translateX(${translateXVals.fourStart}px) translateY(${translateXVals.translateYVals.fourStart}px)`,
    },
  };

  return (
    <div
      className="container"
      style={{
        position: "absolute",
        top: "50%",
        left: 0,
        right: -250,
        transform: `translateY(-50%) ${isRTL ? "scaleX(-1)" : ""} scale(${scale})`,
        transformOrigin: "left center",
        width: containerWidth,
        height: containerHeight,
        overflow: "visible",
        backgroundColor: "transparent",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Satellite orbit animation"
    >
      {/* Central orb */}
      <div
        className="ball me"
        style={{
          width: centralOrbSize,
          height: centralOrbSize,
          backgroundColor: accentColor,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(0, -50%)",
          borderRadius: "50%",
          boxShadow: `0 0 12px ${accentColor}80`,
          animation: "zIndexPulse 2s linear infinite",
          zIndex: 0,
        }}
      />

      {/* Satellites */}
      <div className="wrap four" style={wrapStyles.four}>
        <div className="ball" style={{ width: satelliteSize, height: satelliteSize }} />
      </div>

      <style>{`
        @keyframes zIndexPulse {
          0%   { z-index: 0; }
          49.9% { z-index: 0; }
          50%  { z-index: 2; }
          100% { z-index: 0; }
        }
        .container { width: ${containerWidth}px; height: ${containerHeight}px; position: relative; margin: 0; }
        .ball { box-shadow: -2.5px -2.5px 0 rgba(39, 39, 39, 0.1) inset; background-color: #fff; border-radius: 50%; animation: scale 1000ms infinite ease-in-out alternate; animation-delay: -500ms; transform-origin: center; transform: scale(1); }
        @keyframes translateOne { 0% { transform: translateX(20px) translateY(60px); } 100% { transform: translateX(160px) translateY(-40px); } }
        @keyframes translateTwo { 0% { transform: translateX(80px) translateY(-110px); } 100% { transform: translateX(120px) translateY(110px); } }
        @keyframes translateThree { 0% { transform: translateX(180px) translateY(-80px); } 100% { transform: translateX(-40px) translateY(140px); } }
        @keyframes translateFour { 0% { transform: translateX(160px) translateY(90px); } 100% { transform: translateX(-40px) translateY(-110px); } }
        @keyframes scale { 100% { transform: scale(1); } }
      `}</style>
    </div>
  );
};

interface GradientBarsProps {
  bars?: number;
  colors?: string[];
  borderRadius?: string;
}

const GradientBars = ({
  bars = 20,
  colors = ["#6b21a8", "transparent"],
  borderRadius = "12px",
}: GradientBarsProps) => {
  const gradientStyle = `linear-gradient(to top, ${colors.join(", ")})`;
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden"
      style={{ borderRadius }}
      aria-hidden="true"
    >
      <div className="flex h-full w-full">
        {Array.from({ length: bars }).map((_, index) => {
          const position = index / (bars - 1);
          const center = 0.5;
          const distance = Math.abs(position - center);
          const scale = 0.3 + 0.7 * Math.pow(distance * 2, 1.2);
          return (
            <motion.div
              key={`bg-bar-${index}`}
              className="flex-1 origin-bottom"
              style={{ background: gradientStyle }}
              animate={{
                scaleY: [scale, scale + 0.1, scale],
                opacity: [1, 0.95, 1],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 0.5,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

interface ToastCustomProps {
  title?: string;
  content?: string;
  isRTL?: boolean;
  bodyBorderRadius?: string;
  typeIconContainerBorderRadius?: string;
  closeIconBorderRadius?: string;
  accentColor?: string; // NEW optional prop
}

export default function ToastCustom({
  title = "Custom Toast",
  content = "With moving gradient bars and orbit animation",
  isRTL = false,
  bodyBorderRadius = "12px",
  typeIconContainerBorderRadius = "50%",
  closeIconBorderRadius = "50%",
  accentColor = "#6b21a8", // default purple
}: ToastCustomProps) {
  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="relative w-[380px] text-white"
      style={{
        ["--clr" as any]: accentColor,
        fontFamily: "inherit",
        position: "relative",
        zIndex: 0,
      }}
    >
      {/* Toast body */}
      <div
        style={{
          borderRadius: bodyBorderRadius,
          outline: "1px solid #333",
          padding: isRTL ? "1rem 6rem 1.5rem 2rem" : "1rem 2rem 1.5rem 6rem",
          backgroundColor: "rgba(0,0,0,0.65)",
          overflow: "visible",
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Background bars */}
        <GradientBars borderRadius={bodyBorderRadius} colors={[accentColor, "transparent"]} />

        {/* Orbit animation container */}
        <SatelliteOrbit isRTL={isRTL} accentColor={accentColor} />

        {/* Text container */}
        <div style={{ position: "relative", zIndex: 100, flex: "1" }}>
          <h3
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              margin: 0,
              paddingBottom: "0.25rem",
              textAlign: isRTL ? "right" : "left",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              margin: 0,
              textAlign: isRTL ? "right" : "left",
            }}
          >
            {content}
          </p>
        </div>

        {/* Timer bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "10%",
            right: "10%",
            width: "80%",
            height: "4px",
            background: "rgba(255,255,255,0.3)",
            borderRadius: "2px",
            overflow: "hidden",
            zIndex: 90,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "50%",
              background: "rgba(255,255,255,0.8)",
            }}
          />
        </div>
      </div>

      {/* Type icon container */}
      <div
        style={{
          position: "absolute",
          width: "3.5rem",
          height: "3.5rem",
          background: accentColor,
          top: "-1.75rem",
          [isRTL ? "right" : "left"]: "2rem",
          borderRadius: typeIconContainerBorderRadius,
          zIndex: 60,
          outline: "1px solid #333",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.6)",
          transform: isRTL ? "scaleX(-1)" : undefined,
        }}
        dangerouslySetInnerHTML={{ __html: SATELLITE_ICON }}
      />

      {/* Close button */}
      <button
        dangerouslySetInnerHTML={{ __html: CLOSE_SVG }}
        style={{
          position: "absolute",
          top: "0.4rem",
          [isRTL ? "left" : "right"]: "0.4rem",
          height: "34px",
          width: "34px",
          cursor: "pointer",
          borderRadius: closeIconBorderRadius,
          backgroundColor: "#fff",
          transform: "scale(0.7)",
          color: "#242424",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 65,
          outline: "1px solid #333",
        }}
        onClick={() => console.log("Toast closed")}
      />
    </div>
  );
}
