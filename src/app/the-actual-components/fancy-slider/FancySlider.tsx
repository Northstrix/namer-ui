"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { cn } from "@/lib/utils";

// ============== Config Types (fully flat, *Alpha → *Opacity) ==============

export interface SliderConfig {
  min: number;
  max: number;
  step: number;
  density: number;

  // Body Geometry
  paddingX: number;
  paddingY: number;
  bodyBorderRadius: number | string;
  bodyBorderWidth: number;
  bodyBorderColor: string;
  bodyBorderOpacity: number;
  bodyBackgroundColor: string;
  bodyOpacity: number;
  bodyBackdropBlur: number;

  // Track Geometry
  trackBorderRadius: number | string;
  trackWidth: number;
  trackHeight: number;
  trackUpperColor: string;
  trackLowerColor: string;
  trackOpacity: number;
  trackBorderWidth: number;
  trackBorderOpacity: number;
  trackBorderColor: string;
  trackDeadzoneTop: number;
  trackDeadzoneBottom: number;

  // Knob Geometry
  knobBorderRadius: number | string;
  knobSize: number;
  knobBlur: number;
  knobBackgroundColor: string;
  knobOpacity: number;
  knobBorderColor: string;
  knobBorderOpacity: number;
  knobBorderWidth: number;
  knobDotSize: number;
  knobDotBorderRadius: number | string;
  knobHoverScale: number;
  knobActiveScale: number;

  // Physics & Visuals
  mercuryMeltValue: number;
  liquidGlowOpacity: number;

  // Scale Readout
  showScale: boolean;
  scaleUnit: string;
  scaleUnitPosition: "prefix" | "suffix";
  unitVerticalAlign: "top" | "center" | "bottom";
  scaleTickWidth: number;
  scaleTickHeight: number;
  inactiveScaleColor: string;
  inactiveScaleOpacity: number;

  // Scale Typography
  scaleFontSize: number;
  scaleFontWeight: string | number;

  // Physics tuning
  fishScaleProximity: number;
  fishScaleMagnification: number;
  fishScaleLineMagnificationEnabled: boolean;

  // Color Proximity & Overrides
  useColorOverrides: boolean;
  textOverrideColor: string;
  unitOverrideColor: string;
  lineOverrideColor: string;

  // Color Engine
  gradientColors: string[];
  gradientStops: number[];

  // Granular Fish Scale Controls
  fishScaleGlowColor: string;
  fishScaleGlowOpacity: number;
  fishScaleLineThicknessActive: number;
  fishScaleLineThicknessInactive: number;
  fishScaleTickScaleBoost: number;
  fishScaleTickTranslate: number;

  // RTL & Scale Position
  showScaleOnTheLeftSide: boolean;
  swapScaleAndNumbers?: boolean;
  scaleSpacing: number;
  scaleTranslateX?: number;
}

export interface FancySliderProps {
  config?: Partial<SliderConfig>;
  value: number;
  onChange: (val: number) => void;
}

// ============== Utilities ==============

const hexToRgb = (hex: string): [number, number, number] => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const expanded = hex.replace(
    shorthandRegex,
    (_, r, g, b) => r + r + g + g + b + b
  );
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(expanded);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [255, 255, 255];
};

const rgbToHex = (r: number, g: number, b: number) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

const normalizeValue = (value: number, min: number, max: number, step: number) => {
  const clamped = clamp(value, min, max);
  const stepped = Math.round(clamped / step) * step;
  return Number(clamp(stepped, min, max).toFixed(2));
};

const lerpColor = (start: string, end: string, t: number): string => {
  const s = hexToRgb(start);
  const e = hexToRgb(end);
  const r = Math.round(s[0] + (e[0] - s[0]) * t);
  const g = Math.round(s[1] + (e[1] - s[1]) * t);
  const b = Math.round(s[2] + (e[2] - s[2]) * t);
  return rgbToHex(r, g, b);
};

const getColorAtValue = (
  value: number,
  min: number,
  max: number,
  colors: string[],
  stops: number[]
): string => {
  if (!colors.length) return "#ffffff";
  if (colors.length === 1) return colors[0];

  const norm = clamp((value - min) / (max - min || 1), 0, 1);

  for (let i = 0; i < stops.length - 1; i++) {
    const s0 = stops[i];
    const s1 = stops[i + 1];
    if (norm >= s0 && norm <= s1) {
      const p = s1 === s0 ? 0 : (norm - s0) / (s1 - s0);
      return lerpColor(colors[i], colors[i + 1], p);
    }
  }
  return colors[colors.length - 1];
};

const parseToRgba = (colorStr: string, opacity: number): string => {
  if (colorStr.startsWith("#")) {
    const [r, g, b] = hexToRgb(colorStr);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return colorStr;
};

const buildBackdropStyle = (
  supportsBackdropFilter: boolean,
  colorHex: string,
  opacity: number,
  blurStrength: number,
  borderColor: string,
  borderOpacity: number,
  borderWidth: number
): CSSProperties => {
  const background = parseToRgba(colorHex, opacity);
  const borderRgba = parseToRgba(borderColor, borderOpacity);

  if (supportsBackdropFilter) {
    return {
      background,
      backgroundClip: "padding-box",
      backdropFilter: `blur(${blurStrength}px) saturate(260%) brightness(1.25)`,
      WebkitBackdropFilter: `blur(${blurStrength}px) saturate(260%) brightness(1.25)`,
      borderColor: borderRgba,
      borderWidth: `${borderWidth}px`,
      borderStyle: "solid",
    };
  }

  return {
    background: parseToRgba(colorHex, Math.min(0.95, opacity * 1.5)),
    backgroundClip: "padding-box",
    borderColor: parseToRgba(borderColor, Math.min(0.95, borderOpacity * 1.5)),
    borderWidth: `${borderWidth}px`,
    borderStyle: "solid",
  };
};

// ============== Default Config ==============

const DEFAULT_CONFIG: SliderConfig = {
  min: 20,
  max: 110,
  step: 0.01,
  density: 2.5,

  paddingX: 45,
  paddingY: 46,
  bodyBorderRadius: "999px",
  bodyBorderWidth: 1,
  bodyBorderColor: "#ffffff",
  bodyBorderOpacity: 0.14,
  bodyBackgroundColor: "#0a0a0a",
  bodyOpacity: 0.36,
  bodyBackdropBlur: 7.64,

  trackBorderRadius: "99px",
  trackWidth: 42,
  trackHeight: 428,
  trackUpperColor: "#ffffff",
  trackLowerColor: "#000000",
  trackOpacity: 0.22,
  trackBorderWidth: 1,
  trackBorderOpacity: 0.14,
  trackBorderColor: "#ffffff",
  trackDeadzoneTop: 21.25,
  trackDeadzoneBottom: 21.25,

  knobBorderRadius: "99px",
  knobSize: 36,
  knobBlur: 12,
  knobBackgroundColor: "#0a0a0a",
  knobOpacity: 0.32,
  knobBorderColor: "#ffffff",
  knobBorderOpacity: 0.14,
  knobBorderWidth: 1,
  knobDotSize: 10,
  knobDotBorderRadius: 50,
  knobHoverScale: 1.1,
  knobActiveScale: 1.2,

  mercuryMeltValue: 36,
  liquidGlowOpacity: 0.5,

  showScale: true,
  scaleUnit: "° F",
  scaleUnitPosition: "suffix",
  unitVerticalAlign: "center",
  scaleTickWidth: 20,
  scaleTickHeight: 1.5,
  inactiveScaleColor: "#ffffff66",
  inactiveScaleOpacity: 0.4,
  scaleFontSize: 12,
  scaleFontWeight: "700",

  fishScaleProximity: 70,
  fishScaleMagnification: 0.4,
  fishScaleLineMagnificationEnabled: true,

  useColorOverrides: false,
  textOverrideColor: "#ffffff",
  unitOverrideColor: "#ffffff",
  lineOverrideColor: "#ffffff",

  gradientColors: ["#00eaff", "#0099ff", "#00ff73", "#ffdd00", "#ff8800", "#ff0044"],
  gradientStops: [0, 0.25, 0.5, 0.7, 0.85, 1],

  fishScaleGlowColor: "#00B9FA",
  fishScaleGlowOpacity: 0.55,
  fishScaleLineThicknessActive: 2.0,
  fishScaleLineThicknessInactive: 1.5,
  fishScaleTickScaleBoost: 0.6,
  fishScaleTickTranslate: 8,

  showScaleOnTheLeftSide: false,
  swapScaleAndNumbers: false,
  scaleSpacing: 48,
  scaleTranslateX: 0,
};

// ============== Knob Component ==============

const Knob: React.FC<{
  uniqueId: string;
  size: number;
  radius: number | string;
  blur: number;
  glassColor: string;
  glassOpacity: number;
  borderColor: string;
  borderOpacity: number;
  borderWidth: number;
  dotSize: number;
  dotRadius: number | string;
  hoverScale: number;
  activeScale: number;
  isHovered: boolean;
  isDragging: boolean;
  activeColor: string;
  supportsBackdropFilter: boolean;
}> = ({
  uniqueId,
  size,
  radius,
  blur,
  glassColor,
  glassOpacity,
  borderColor,
  borderOpacity,
  borderWidth,
  dotSize,
  dotRadius,
  hoverScale,
  activeScale,
  isHovered,
  isDragging,
  activeColor,
  supportsBackdropFilter,
}) => {
  const knobStyle = useMemo(
    () =>
      buildBackdropStyle(
        supportsBackdropFilter,
        glassColor,
        glassOpacity,
        blur,
        borderColor,
        borderOpacity,
        borderWidth
      ),
    [supportsBackdropFilter, glassColor, glassOpacity, blur, borderColor, borderOpacity, borderWidth]
  );

  const scale = isDragging ? activeScale : isHovered ? hoverScale : 1;

  return (
    <div
      dir="ltr"
      className={cn(
        `${uniqueId}-knob`,
        "rounded-full w-full h-full flex items-center justify-center pointer-events-none aspect-square"
      )}
      style={{
        ...knobStyle,
        transition: "all 0.3s ease",
        borderRadius: radius,
        boxShadow: "none",
        transform: `scale(${scale})`,
      }}
    >
      {dotSize > 0 && (
        <div
          style={{
            backgroundColor: activeColor,
            width: dotSize,
            height: dotSize,
            borderRadius: dotRadius,
          }}
        />
      )}
    </div>
  );
};

// ============== Invisible Drag Track ==============

const InvisibleDragTrack: React.FC<{
  uniqueId: string;
  width: number;
  height: number;
  top: number;
  left: number;
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({
  uniqueId,
  width,
  height,
  top,
  left,
  onPointerDown,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      onPointerDown={onPointerDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(`${uniqueId}-drag-track`, "absolute rounded-full pointer-events-auto")}
      style={{
        left,
        top,
        width,
        height,
        cursor: "ns-resize",
        opacity: 0,
        zIndex: 60,
        borderRadius: 9999,
      }}
    />
  );
};

// ============== Main Component ==============

export const FancySlider: React.FC<FancySliderProps> = ({
  config,
  value,
  onChange,
}) => {
  const merged = useMemo<SliderConfig>(
    () => ({ ...DEFAULT_CONFIG, ...config }),
    [config]
  );

  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dragSpeed, setDragSpeed] = useState(0);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastY = useRef<number>(0);
  const lastTime = useRef<number>(0);
  const idRef = useRef<string>("");

  if (!idRef.current) {
    idRef.current = `lux-${Math.random().toString(36).slice(2, 9)}`;
  }
  const uniqueId = idRef.current;

  useEffect(() => {
    setMounted(true);
  }, []);

  const supportsBackdropFilter = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.CSS?.supports?.("backdrop-filter", "blur(24px)") ||
      window.CSS?.supports?.("-webkit-backdrop-filter", "blur(24px)")
    );
  }, []);

  const activeColor = useMemo(
    () =>
      getColorAtValue(
        value,
        merged.min,
        merged.max,
        merged.gradientColors,
        merged.gradientStops
      ),
    [value, merged]
  );

  const activeTrackHeight =
    merged.trackHeight - merged.trackDeadzoneTop - merged.trackDeadzoneBottom;

  const fillPercentage =
    ((clamp(value, merged.min, merged.max) - merged.min) /
      (merged.max - merged.min || 1)) *
    100;

  const bodyWidth = merged.trackWidth + merged.paddingX * 2;
  const bodyHeight = merged.trackHeight + merged.paddingY * 2;

  const knobTopRelative =
    merged.trackDeadzoneTop +
    (1 - fillPercentage / 100) * activeTrackHeight;

  const bodyStyle = useMemo(
    () =>
      buildBackdropStyle(
        supportsBackdropFilter,
        merged.bodyBackgroundColor,
        merged.bodyOpacity,
        merged.bodyBackdropBlur,
        merged.bodyBorderColor,
        merged.bodyBorderOpacity,
        merged.bodyBorderWidth
      ),
    [supportsBackdropFilter, merged]
  );

  const trackBgStyle = useMemo(() => {
    const background = `linear-gradient(
      180deg,
      ${parseToRgba(merged.trackUpperColor, merged.trackOpacity)},
      ${parseToRgba(merged.trackLowerColor, merged.trackOpacity)}
    )`;
    return { background };
  }, [merged]);

  const trackGlassStyle = useMemo(
    () =>
      buildBackdropStyle(
        supportsBackdropFilter,
        "transparent",
        0,
        0,
        parseToRgba(merged.trackBorderColor, merged.trackBorderOpacity),
        merged.trackBorderOpacity,
        merged.trackBorderWidth
      ),
    [supportsBackdropFilter, merged]
  );

  const knobTop = merged.paddingY + knobTopRelative;
  const knobWidth = merged.knobSize * 2;
  const invisibleTrackLeft =
    merged.paddingX +
    merged.trackWidth / 2 -
    knobWidth / 2;
  const invisibleTrackTop = merged.paddingY + knobTopRelative - merged.knobSize;

  const calculateValue = useCallback(
    (clientY: number) => {
      if (!trackRef.current) {
        return normalizeValue(value, merged.min, merged.max, merged.step);
      }
      const rect = trackRef.current.getBoundingClientRect();
      const relativeY = clientY - rect.top;
      const percentage = 1 -
        clamp(
          (relativeY - merged.trackDeadzoneTop) / activeTrackHeight,
          0,
          1
        );
      const rawValue = merged.min + percentage * (merged.max - merged.min);
      return normalizeValue(rawValue, merged.min, merged.max, merged.step);
    },
    [value, merged, activeTrackHeight]
  );

  const updateDrag = useCallback(
    (clientY: number) => {
      const now = Date.now();
      const deltaY = Math.abs(clientY - lastY.current);
      const deltaTime = now - lastTime.current;
      const speed = deltaTime > 0 ? deltaY / deltaTime : 0;

      setDragSpeed((prev) => prev * 0.8 + speed * 0.2);
      lastY.current = clientY;
      lastTime.current = now;

      onChange(calculateValue(clientY));
    },
    [calculateValue, onChange]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(true);
      lastY.current = e.clientY;
      lastTime.current = Date.now();
      onChange(calculateValue(e.clientY));
    },
    [calculateValue, onChange]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        onChange(
          normalizeValue(value + 1, merged.min, merged.max, merged.step)
        );
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        onChange(
          normalizeValue(value - 1, merged.min, merged.max, merged.step)
        );
      }
    },
    [value, merged, onChange]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (!isDragging) return;
    const move = (e: PointerEvent) => updateDrag(e.clientY);
    const end = () => {
      setIsDragging(false);
      setDragSpeed(0);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
    };
  }, [isDragging, updateDrag]);

  const tickCount = Math.max(2, Math.floor(merged.density * 12) + 1);

  if (!mounted) {
    return (
      <div
        style={{ width: bodyWidth, height: bodyHeight }}
        className="bg-white/5 animate-pulse rounded-3xl"
      />
    );
  }

  return (
    <div
      dir="ltr"
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center justify-center select-none outline-none",
        `${uniqueId}-container`
      )}
      style={{
        "--active-color": activeColor,
        "--liquid-glow": merged.liquidGlowOpacity,
        "--fish-glow-color": merged.fishScaleGlowColor,
        "--fish-glow-opacity": merged.fishScaleGlowOpacity,
      } as CSSProperties}
    >
      <style>{`
        .${uniqueId}-container {
          position: relative;
          overflow: visible;
        }

        @keyframes ${uniqueId}-pulseElectric {
          0% {
            opacity: 0.15;
            transform: scaleY(1);
          }
          100% {
            opacity: 0.35;
            transform: scaleY(1.05);
          }
        }

        .${uniqueId}-plasma-filter {
          position: absolute;
          width: 0;
          height: 0;
          pointer-events: none;
        }

        .${uniqueId}-body {
          position: relative;
          cursor: ns-resize;
          display: flex;
          align-items: center;
          justify-content: center;
          touch-action: none;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          overflow: visible;
          z-index: 5;
        }

        .${uniqueId}-track-wrapper {
          position: relative;
          z-index: 10;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .${uniqueId}-track-bg-layer {
          position: absolute;
          inset: 0;
          background-clip: padding-box;
          border-radius: inherit;
          z-index: 1;
        }

        .${uniqueId}-liquid-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background-clip: padding-box;
          z-index: 5;
          border-radius: inherit;
        }

        .${uniqueId}-mercury {
          position: absolute;
          bottom: 0;
          left: -45%;
          width: 190%;
          mix-blend-mode: screen;
          transition: height 0.12s linear, background-color 0.3s ease;
          filter: url(#${uniqueId}-turbulent-displace);
          box-shadow: 0 0 45px var(--active-color), 0 0 90px var(--active-color);
          opacity: 0.95;
        }

        .${uniqueId}-mercury::before,
        .${uniqueId}-mercury::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          filter: blur(6px);
          background: radial-gradient(
            circle at 50% 50%,
            rgba(255, 255, 255, 0.3),
            transparent 90%
          );
          mix-blend-mode: color-dodge;
          opacity: 0.25;
          animation: ${uniqueId}-pulseElectric 3s infinite ease-in-out alternate;
        }

        .${uniqueId}-mercury::after {
          filter: blur(16px);
          opacity: 0.18;
          animation-delay: 1.5s;
        }

        .${uniqueId}-scale {
          position: absolute;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 192px;
          overflow: visible;
        }

        .${uniqueId}-scale-tick {
          display: flex;
          align-items: center;
          gap: 12px;
          will-change: transform, opacity;
          transition: transform 0.2s cubic-bezier(0.2, 0, 0.2, 1),
                      opacity 0.2s ease;
          overflow: visible;
        }

        .${uniqueId}-label-text {
          transition: color 0.3s ease;
          display: flex;
          white-space: pre;
          line-height: 1;
        }

        .${uniqueId}-knob {
          transform: translateZ(0);
          box-shadow: none !important;
        }

        .${uniqueId}-drag-track {
          cursor: ns-resize;
        }
      `}</style>

      <svg
        className={`${uniqueId}-plasma-filter`}
        x="-200%"
        y="-200%"
        width="500%"
        height="500%"
      >
        <defs>
          <filter
            id={`${uniqueId}-turbulent-displace`}
            colorInterpolationFilters="sRGB"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise1"
              seed="1"
            />
            <feOffset
              in="noise1"
              dx="0"
              dy="0"
              result="offsetNoise1"
            >
              <animate
                attributeName="dy"
                values="700; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise2"
              seed="1"
            />
            <feOffset
              in="noise2"
              dx="0"
              dy="0"
              result="offsetNoise2"
            >
              <animate
                attributeName="dy"
                values="0; -700"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise3"
              seed="2"
            />
            <feOffset
              in="noise3"
              dx="0"
              dy="0"
              result="offsetNoise3"
            >
              <animate
                attributeName="dx"
                values="490; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise4"
              seed="2"
            />
            <feOffset
              in="noise4"
              dx="0"
              dy="0"
              result="offsetNoise4"
            >
              <animate
                attributeName="dx"
                values="0; -490"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feComposite
              in="offsetNoise1"
              in2="offsetNoise2"
              result="part1"
            />
            <feComposite
              in="offsetNoise3"
              in2="offsetNoise4"
              result="part2"
            />
            <feBlend
              in="part1"
              in2="part2"
              mode="color-dodge"
              result="combinedNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale={merged.mercuryMeltValue + dragSpeed * 20}
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      <div
        onPointerDown={handlePointerDown}
        className={`${uniqueId}-body`}
        style={{
          ...bodyStyle,
          width: bodyWidth,
          height: bodyHeight,
          borderRadius: merged.bodyBorderRadius,
          boxShadow: isDragging
            ? "0 30px 60px rgba(0, 0, 0, 0.65)"
            : "0 15px 35px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          ref={trackRef}
          className={`${uniqueId}-track-wrapper`}
          style={{
            ...trackGlassStyle,
            width: merged.trackWidth,
            height: merged.trackHeight,
            borderRadius: merged.trackBorderRadius,
          }}
        >
          <div
            className={`${uniqueId}-track-bg-layer`}
            style={{
              ...trackBgStyle,
              borderRadius: merged.trackBorderRadius,
            }}
          />

          <div className={`${uniqueId}-liquid-container`}>
            <div
              className={`${uniqueId}-mercury`}
              style={{
                height: `calc(${fillPercentage / 100} * ${activeTrackHeight}px)`,
                bottom: `${merged.trackDeadzoneBottom}px`,
                backgroundColor: activeColor,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Visible Knob on top of the track */}
      <div
        className="absolute pointer-events-none z-50"
        style={{
          left: "50%",
          top: knobTop,
          width: `${merged.knobSize * 2}px`,
          height: `${merged.knobSize * 2}px`,
          transform: `translate(-50%, -50%)`,
          transition: isDragging
            ? "none"
            : "top 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
      >
        <Knob
          uniqueId={uniqueId}
          size={merged.knobSize}
          radius={merged.knobBorderRadius}
          blur={merged.knobBlur}
          glassColor={merged.knobBackgroundColor}
          glassOpacity={merged.knobOpacity}
          borderColor={merged.knobBorderColor}
          borderOpacity={merged.knobBorderOpacity}
          borderWidth={merged.knobBorderWidth}
          dotSize={merged.knobDotSize}
          dotRadius={merged.knobDotBorderRadius}
          hoverScale={merged.knobHoverScale}
          activeScale={merged.knobActiveScale}
          isHovered={isHovered}
          isDragging={isDragging}
          activeColor={activeColor}
          supportsBackdropFilter={supportsBackdropFilter}
        />
      </div>

      {/* Invisible Drag Track: handles hover and drag, triggers knob hover state */}
      <InvisibleDragTrack
        uniqueId={uniqueId}
        width={knobWidth}
        height={merged.trackHeight}
        top={invisibleTrackTop}
        left={invisibleTrackLeft}
        onPointerDown={handlePointerDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      {/* Scale */}
      {merged.showScale && (
        <div
          className={`${uniqueId}-scale`}
          style={{
            top: `${merged.paddingY + merged.trackDeadzoneTop}px`,
            height: `${activeTrackHeight}px`,
            left: merged.showScaleOnTheLeftSide ? "auto" : "100%",
            right: merged.showScaleOnTheLeftSide ? "100%" : "auto",
            marginLeft: merged.showScaleOnTheLeftSide ? 0 : merged.scaleSpacing,
            marginRight: merged.showScaleOnTheLeftSide ? merged.scaleSpacing : 0,
            alignItems: merged.showScaleOnTheLeftSide ? "flex-end" : "flex-start",
            transform: `translateX(${merged.scaleTranslateX ?? 0}px)`,
          }}
        >
          {Array.from({ length: tickCount }).map((_, i, arr) => {
            const range = merged.max - merged.min;
            const tickValueRaw = merged.max - (i * (range / (arr.length - 1)));
            const tickValueStr = tickValueRaw.toFixed(0);
            const tickY = (i / (arr.length - 1)) * activeTrackHeight;
            const knobYPos = (1 - fillPercentage / 100) * activeTrackHeight;
            const dist = Math.abs(knobYPos - tickY);
            const isFish = true;
            const proximity = isFish
              ? Math.max(0, 1 - dist / merged.fishScaleProximity)
              : 0;
            const isMajor = i % 2 === 0;

            const lineThickness =
              isFish && merged.fishScaleLineMagnificationEnabled
                ? merged.fishScaleLineThicknessInactive +
                  proximity *
                    (merged.fishScaleLineThicknessActive -
                      merged.fishScaleLineThicknessInactive)
                : merged.scaleTickHeight;

            const tickTransform = isFish
              ? `scale(${1 +
                  proximity *
                    (isMajor
                      ? 1 + merged.fishScaleMagnification
                      : 1 + merged.fishScaleMagnification * 0.5)}) translateX(${proximity *
                  (merged.showScaleOnTheLeftSide
                    ? -merged.fishScaleTickTranslate
                    : merged.fishScaleTickTranslate)}px)`
              : "none";

            const textColor = merged.useColorOverrides
              ? merged.textOverrideColor
              : proximity > 0.4
              ? activeColor
              : merged.inactiveScaleColor;

            const lineColor = merged.useColorOverrides
              ? merged.lineOverrideColor
              : proximity > 0.4
              ? activeColor
              : merged.inactiveScaleColor;

            const alignmentClass =
              merged.unitVerticalAlign === "top"
                ? "items-start"
                : merged.unitVerticalAlign === "bottom"
                ? "items-end"
                : "items-center";

            const labelContent = isMajor
              ? merged.scaleUnitPosition === "prefix"
                ? `${merged.scaleUnit}${tickValueStr}`
                : `${tickValueStr}${merged.scaleUnit}`
              : "";

            return (
              <div
                key={i}
                className={`${uniqueId}-scale-tick`}
                style={{
                  transform: tickTransform,
                  opacity: isFish
                    ? merged.inactiveScaleOpacity +
                      proximity * (1 - merged.inactiveScaleOpacity)
                    : 0.6,
                }}
              >
                {!merged.showScaleOnTheLeftSide && (
                  <>
                    {merged.swapScaleAndNumbers ? (
                      <>
                        {/* Numbers first, then tick */}
                        {isMajor && (
                          <span
                            className={cn(
                              `${uniqueId}-label-text`,
                              alignmentClass
                            )}
                            style={{
                              fontSize: `${merged.scaleFontSize}px`,
                              fontWeight: merged.scaleFontWeight,
                              color: textColor,
                              textShadow:
                                proximity > 0.4 && !merged.useColorOverrides
                                  ? `0 0 10px ${activeColor}55`
                                  : "none",
                            }}
                          >
                            {labelContent}
                          </span>
                        )}
                        <div
                          className="rounded-full transition-all duration-300"
                          style={{
                            width: `${merged.scaleTickWidth *
                              (isMajor ? 1 : 0.6)}px`,
                            height: `${lineThickness}px`,
                            backgroundColor: lineColor,
                            boxShadow:
                              proximity > 0.4 && !merged.useColorOverrides
                                ? `0 0 12px var(--active-color)`
                                : "none",
                          }}
                        />
                      </>
                    ) : (
                      <>
                        {/* Tick first, then numbers (default) */}
                        <div
                          className="rounded-full transition-all duration-300"
                          style={{
                            width: `${merged.scaleTickWidth *
                              (isMajor ? 1 : 0.6)}px`,
                            height: `${lineThickness}px`,
                            backgroundColor: lineColor,
                            boxShadow:
                              proximity > 0.4 && !merged.useColorOverrides
                                ? `0 0 12px var(--active-color)`
                                : "none",
                          }}
                        />
                        {isMajor && (
                          <span
                            className={cn(
                              `${uniqueId}-label-text`,
                              alignmentClass
                            )}
                            style={{
                              fontSize: `${merged.scaleFontSize}px`,
                              fontWeight: merged.scaleFontWeight,
                              color: textColor,
                              textShadow:
                                proximity > 0.4 && !merged.useColorOverrides
                                  ? `0 0 10px ${activeColor}55`
                                  : "none",
                            }}
                          >
                            {labelContent}
                          </span>
                        )}
                      </>
                    )}
                  </>
                )}

                {merged.showScaleOnTheLeftSide && (
                  <>
                    {merged.swapScaleAndNumbers ? (
                      <>
                        {/* Numbers first (RTL), then tick */}
                        {isMajor && (
                          <span
                            className={cn(
                              `${uniqueId}-label-text`,
                              alignmentClass
                            )}
                            style={{
                              fontSize: `${merged.scaleFontSize}px`,
                              fontWeight: merged.scaleFontWeight,
                              color: textColor,
                              textShadow:
                                proximity > 0.4 && !merged.useColorOverrides
                                  ? `0 0 10px ${activeColor}55`
                                  : "none",
                            }}
                          >
                            {labelContent}
                          </span>
                        )}
                        <div
                          className="rounded-full transition-all duration-300"
                          style={{
                            width: `${merged.scaleTickWidth *
                              (isMajor ? 1 : 0.6)}px`,
                            height: `${lineThickness}px`,
                            backgroundColor: lineColor,
                            boxShadow:
                              proximity > 0.4 && !merged.useColorOverrides
                                ? `0 0 12px var(--active-color)`
                                : "none",
                          }}
                        />
                      </>
                    ) : (
                      <>
                        {/* Tick first (RTL), then numbers */}
                        <div
                          className="rounded-full transition-all duration-300"
                          style={{
                            width: `${merged.scaleTickWidth *
                              (isMajor ? 1 : 0.6)}px`,
                            height: `${lineThickness}px`,
                            backgroundColor: lineColor,
                            boxShadow:
                              proximity > 0.4 && !merged.useColorOverrides
                                ? `0 0 12px var(--active-color)`
                                : "none",
                          }}
                        />
                        {isMajor && (
                          <span
                            className={cn(
                              `${uniqueId}-label-text`,
                              alignmentClass
                            )}
                            style={{
                              fontSize: `${merged.scaleFontSize}px`,
                              fontWeight: merged.scaleFontWeight,
                              color: textColor,
                              textShadow:
                                proximity > 0.4 && !merged.useColorOverrides
                                  ? `0 0 10px ${activeColor}55`
                                  : "none",
                            }}
                          >
                            {labelContent}
                          </span>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};