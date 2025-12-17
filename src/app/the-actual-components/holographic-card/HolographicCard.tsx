"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  animate,
} from "framer-motion";

// ==========================================
// ==== Math Helpers (Noise & Geometry) =====
// ==========================================
const random = (x: number) => (Math.sin(x * 12.9898) * 43758.5453) % 1;

const noise2D = (x: number, y: number) => {
  const i = Math.floor(x);
  const j = Math.floor(y);
  const fx = x - i;
  const fy = y - j;
  const a = random(i + j * 57);
  const b = random(i + 1 + j * 57);
  const c = random(i + (j + 1) * 57);
  const d = random(i + 1 + (j + 1) * 57);
  const ux = fx * fx * (3.0 - 2.0 * fx);
  const uy = fy * fy * (3.0 - 2.0 * fy);
  return (
    a * (1 - ux) * (1 - uy) +
    b * ux * (1 - uy) +
    c * (1 - ux) * uy +
    d * ux * uy
  );
};

const octavedNoise = (
  x: number,
  time: number,
  seed: number,
  cfg: {
    octaves: number;
    lacunarity: number;
    gain: number;
    amplitude: number;
    frequency: number;
  }
) => {
  let y = 0;
  let amplitude = cfg.amplitude;
  let frequency = cfg.frequency;
  for (let i = 0; i < cfg.octaves; i++) {
    let octaveAmplitude = amplitude;
    if (i === 0) octaveAmplitude *= 1.0;
    y +=
      octaveAmplitude *
      noise2D(frequency * x + seed * 100, time * frequency * 0.3);
    frequency *= cfg.lacunarity;
    amplitude *= cfg.gain;
  }
  return y;
};

// ==========================================
// ==== Component Interface =================
// ==========================================
export interface HolographicCardProps {
  id?: string;
  width?: number;
  height?: number;
  imageSrc: string;
  // -- New: Hover Image --
  hoverImageSrc?: string;
  hoverImageEase?: string; // e.g., "0.3s"

  // -- Content Strings --
  topText?: React.ReactNode;
  bottomText?: React.ReactNode;

  // -- Text Layout / Global --
  mirrorBottomText?: boolean;
  isRTL?: boolean;
  textOverlayPadding?: string;

  // -- Top Text Config --
  topTextVertical?: boolean;
  topTextWeight?: number | string;
  topTextFontSize?: string | number;
  topTextLetterSpacing?: string | number;
  topTextColor?: string;
  topTextClassName?: string;

  // -- Bottom Text Config --
  bottomTextVertical?: boolean;
  bottomTextWeight?: number | string;
  bottomTextFontSize?: string | number;
  bottomTextLetterSpacing?: string | number;
  bottomTextColor?: string;
  bottomTextClassName?: string;

  // -- Base Visuals --
  borderRadius?: number;
  electricBorderRadius?: number;
  backgroundColor?: string;
  imageOpacity?: number;
  maxImageWidthPct?: number;

  // -- Pattern Props --
  patternColor?: string;
  patternOpacity?: number;
  patternSize?: number;
  patternDotSize?: number;

  // -- Electric Border Props --
  enableElectric?: boolean;
  electricColor?: string;
  // -- New: Electric Hover Props --
  hoverElectricColor?: string;
  electricColorEase?: string; // e.g. "0.3s"
  
  electricWidth?: number;
  electricBlur?: number;
  electricSpeed?: number;
  electricFrequency?: number;
  electricAmplitude?: number;
  electricNoiseIntensity?: number;
  electricOffset?: number;

  // -- Hologram --
  enableHologram?: boolean;
  hologramOpacity?: number;
  holographicGradient?: string;

  // -- Interaction --
  enableTilt?: boolean;
  enableDrag?: boolean;
  dragConstraints?: React.RefObject<Element>;
  className?: string;
  style?: React.CSSProperties;
}

// ==========================================
// ==== Component Implementation ============
// ==========================================
const HolographicCard: React.FC<HolographicCardProps> = ({
  id = 'namer-ui-holographic-card',
  width = 320,
  height = 480,
  imageSrc,
  hoverImageSrc,
  hoverImageEase = "0.3s",
  // Content
  topText,
  bottomText,
  // Layout
  mirrorBottomText = true,
  isRTL = false,
  textOverlayPadding = "1.375rem 1.325rem",
  // Top Text Defaults
  topTextVertical = true,
  topTextWeight = 700,
  topTextFontSize = "1.5rem",
  topTextLetterSpacing = "0.1em",
  topTextColor = "#fff",
  topTextClassName = "",
  // Bottom Text Defaults
  bottomTextVertical = true,
  bottomTextWeight = 700,
  bottomTextFontSize = "1.5rem",
  bottomTextLetterSpacing = "0.1em",
  bottomTextColor = "#fff",
  bottomTextClassName = "",
  // Base Visuals
  borderRadius = 24,
  electricBorderRadius,
  backgroundColor = "#000",
  imageOpacity = 0.9,
  maxImageWidthPct = 1,
  // Pattern
  patternColor = "#000",
  patternOpacity = 0.15,
  patternSize = 3,
  patternDotSize = 1,
  // Electric Border
  enableElectric = true,
  electricColor = "#FBE75F",
  hoverElectricColor,
  electricColorEase = "0.3s",
  electricWidth = 4,
  electricBlur = 15,
  electricSpeed = 5.2,
  electricFrequency = 12.5,
  electricAmplitude = 0.016,
  electricNoiseIntensity = 60,
  electricOffset = 0,
  // Hologram / Interaction
  enableHologram = true,
  hologramOpacity = 0.4,
  holographicGradient = "linear-gradient(135deg, transparent 35%, rgba(255,0,128,0.4) 45%, rgba(0,255,255,0.4) 55%, transparent 65%)",
  enableTilt = true,
  enableDrag = false,
  dragConstraints,
  className = "",
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Fallback for radius
  const finalElectricRadius = electricBorderRadius ?? borderRadius;

  // === Tilt Logic ===
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(
    mouseY,
    [-0.5, 0.5],
    enableTilt ? [12, -12] : [0, 0]
  );
  const rotateY = useTransform(
    mouseX,
    [-0.5, 0.5],
    enableTilt ? [-12, 12] : [0, 0]
  );

  // Hologram gradients
  const bgX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);
  const shineX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  // Track Color State for Canvas
  const electricColorValue = useMotionValue(electricColor);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !enableTilt) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleDragStart = () => {
    if (typeof document !== "undefined")
      document.body.style.cursor = "grabbing";
  };

  const handleDragEnd = () => {
    if (typeof document !== "undefined")
      document.body.style.cursor = "default";
  };

  // === Color Transition Effect ===
  useEffect(() => {
    // Parse duration from string "0.3s" -> 0.3
    const durationSec = parseFloat(electricColorEase) || 0.3;
    const targetColor =
      isHovered && hoverElectricColor ? hoverElectricColor : electricColor;

    animate(electricColorValue, targetColor, { duration: durationSec });
  }, [isHovered, hoverElectricColor, electricColor, electricColorEase, electricColorValue]);

  // === Electric Border Animation ===
  useEffect(() => {
    if (!enableElectric) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let time = 0;
    let lastFrame = 0;

    const noiseCfg = {
      octaves: 8,
      lacunarity: 1.2,
      gain: 0.5,
      amplitude: electricAmplitude,
      frequency: electricFrequency,
    };

    const displacementRange = electricNoiseIntensity;

    // Resize canvas: Card Size + Chaos Padding
    canvas.width = width + displacementRange * 3;
    canvas.height = height + displacementRange * 3;

    const draw = (currentTime: number) => {
      const dt = (currentTime - lastFrame) / 1000;
      lastFrame = currentTime;
      time += dt * electricSpeed;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get current interpolated color from MotionValue
      const currentColor = electricColorValue.get();

      ctx.strokeStyle = currentColor;
      ctx.lineWidth = electricWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowBlur = electricBlur;
      ctx.shadowColor = currentColor;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const w = width + electricOffset * 2;
      const h = height + electricOffset * 2;

      const left = cx - w / 2;
      const top = cy - h / 2;
      const r = Math.max(0, finalElectricRadius);

      const straightW = w - 2 * r;
      const straightH = h - 2 * r;
      const cornerArc = (Math.PI * r) / 2;
      const perimeter = 2 * straightW + 2 * straightH + 4 * cornerArc;
      const steps = Math.floor(perimeter / 2);

      const getPoint = (t: number) => {
        const total = perimeter;
        const d = t * total;
        let acc = 0;

        // Top Edge
        if (d <= acc + straightW) return { x: left + r + d, y: top };
        acc += straightW;

        // Top Right Corner
        if (d <= acc + cornerArc) {
          const p = (d - acc) / cornerArc;
          const angle = -Math.PI / 2 + p * (Math.PI / 2);
          return {
            x: left + w - r + r * Math.cos(angle),
            y: top + r + r * Math.sin(angle),
          };
        }
        acc += cornerArc;

        // Right Edge
        if (d <= acc + straightH) return { x: left + w, y: top + r + (d - acc) };
        acc += straightH;

        // Bottom Right Corner
        if (d <= acc + cornerArc) {
          const p = (d - acc) / cornerArc;
          const angle = 0 + p * (Math.PI / 2);
          return {
            x: left + w - r + r * Math.cos(angle),
            y: top + h - r + r * Math.sin(angle),
          };
        }
        acc += cornerArc;

        // Bottom Edge
        if (d <= acc + straightW) return { x: left + w - r - (d - acc), y: top + h };
        acc += straightW;

        // Bottom Left Corner
        if (d <= acc + cornerArc) {
          const p = (d - acc) / cornerArc;
          const angle = Math.PI / 2 + p * (Math.PI / 2);
          return {
            x: left + r + r * Math.cos(angle),
            y: top + h - r + r * Math.sin(angle),
          };
        }
        acc += cornerArc;

        // Left Edge
        if (d <= acc + straightH) return { x: left, y: top + h - r - (d - acc) };
        acc += straightH;

        // Top Left Corner
        const p = (d - acc) / cornerArc;
        const angle = Math.PI + p * (Math.PI / 2);
        return {
          x: left + r + r * Math.cos(angle),
          y: top + r + r * Math.sin(angle),
        };
      };

      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const p = getPoint(t);
        const nX = octavedNoise(t * 10, time, 0, noiseCfg);
        const nY = octavedNoise(t * 10, time, 1, noiseCfg);

        const dx = p.x + nX * electricNoiseIntensity;
        const dy = p.y + nY * electricNoiseIntensity;

        if (i === 0) ctx.moveTo(dx, dy);
        else ctx.lineTo(dx, dy);
      }
      ctx.closePath();
      ctx.stroke();

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animationId);
  }, [
    width,
    height,
    enableElectric,
    electricWidth,
    electricBlur,
    electricSpeed,
    electricFrequency,
    electricAmplitude,
    electricNoiseIntensity,
    electricOffset,
    finalElectricRadius,
    electricColorValue
  ]);

  // === Alignment Logic ===
  const bottomJustify =
    isRTL !== mirrorBottomText ? "flex-start" : "flex-end";

  // === Scoped IDs ===
  const wrapperClass = `holo-card-wrapper-${id}`;
  const cardBodyClass = `holo-card-body-${id}`;
  const patternClass = `holo-pattern-${id}`;

  return (
    <>
      <style>{`
        .${wrapperClass} {
          position: relative;
          width: ${width}px;
          height: ${height}px;
          perspective: 1200px;
          font-family: inherit;
          user-select: none;
          cursor: ${enableDrag ? "grab" : "default"};
        }
        .${cardBodyClass} {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background-color: ${backgroundColor};
          border-radius: ${borderRadius}px;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.8);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .${patternClass} {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          opacity: ${patternOpacity};
          background-image: radial-gradient(circle, ${patternColor} ${patternDotSize}px, transparent ${patternDotSize}px);
          background-size: ${patternSize}px ${patternSize}px;
        }
      `}</style>

      <motion.div
        drag={enableDrag}
        dragConstraints={dragConstraints}
        dragElastic={0.1}
        whileHover={enableDrag ? { scale: 1.02, cursor: "grab" } : undefined}
        whileTap={enableDrag ? { cursor: "grabbing" } : undefined}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className={`${wrapperClass} ${className}`}
        style={style}
      >
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsHovered(true)}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            width: "100%",
            height: "100%",
          }}
          className="relative"
        >
          {/* Electric Border Canvas */}
          {enableElectric && (
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
              style={{
                width: width + electricNoiseIntensity * 3,
                height: height + electricNoiseIntensity * 3,
                // Fix for iOS Z-Index issues: push it physically forward in 3D space
                transform: "translate(-50%, -50%) translateZ(1px)", 
              }}
            >
              <canvas ref={canvasRef} className="w-full h-full block" />
            </div>
          )}

          {/* CARD BODY */}
          <div className={cardBodyClass}>
            {/* Pattern */}
            <div className={patternClass} />

            {/* Background Image 1 (Base) */}
            <div
              className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
              style={{ opacity: imageOpacity }}
            >
              <img
                src={imageSrc}
                alt=""
                draggable={false}
                className="object-cover w-full h-full"
                style={{
                  width: `${maxImageWidthPct * 100}%`,
                  height: "auto",
                  maxHeight: "100%",
                }}
              />
            </div>

            {/* Background Image 2 (Hover Reveal) */}
            {hoverImageSrc && (
              <div
                className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
                style={{
                  opacity: isHovered ? imageOpacity : 0,
                  transition: `opacity ${hoverImageEase} ease`,
                }}
              >
                <img
                  src={hoverImageSrc}
                  alt=""
                  draggable={false}
                  className="object-cover w-full h-full"
                  style={{
                    width: `${maxImageWidthPct * 100}%`,
                    height: "auto",
                    maxHeight: "100%",
                  }}
                />
              </div>
            )}

            {/* Hologram Overlay */}
            {enableHologram && (
              <motion.div
                className="absolute inset-0 z-20 pointer-events-none mix-blend-color-dodge"
                style={{
                  background: holographicGradient,
                  backgroundSize: "200% 200%",
                  backgroundPositionX: bgX,
                  backgroundPositionY: bgY,
                  opacity: hologramOpacity,
                }}
              />
            )}

            {/* TEXT CONTENT */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              {/* --- TOP TEXT --- */}
              {topText && (
                <div
                  className={topTextClassName}
                  style={{
                    position: "absolute",
                    top: 0,
                    // Top Text always aligns based on RTL setting
                    [isRTL ? "right" : "left"]: 0,
                    padding: textOverlayPadding,
                    // Style
                    color: isHovered && hoverElectricColor ? hoverElectricColor : (isHovered ? electricColor : topTextColor),
                    fontWeight: topTextWeight,
                    fontSize: topTextFontSize,
                    letterSpacing: topTextLetterSpacing,
                    // Vertical Flow Logic
                    writingMode: topTextVertical
                      ? "vertical-rl"
                      : "horizontal-tb",
                    textOrientation: topTextVertical ? "mixed" : undefined,
                    textShadow: isHovered
                      ? `0 0 15px ${hoverElectricColor || electricColor}`
                      : "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  {topText}
                </div>
              )}

              {/* --- BOTTOM TEXT --- */}
              {bottomText && (
                <div
                  className={bottomTextClassName}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: textOverlayPadding,
                    // Container Layout
                    display: "flex",
                    justifyContent: bottomJustify,
                    // Transform for mirroring
                    transform: mirrorBottomText ? "scale(-1, -1)" : "none",
                  }}
                >
                  <div
                    style={{
                      // Style
                      color: isHovered && hoverElectricColor ? hoverElectricColor : (isHovered ? electricColor : bottomTextColor),
                      fontWeight: bottomTextWeight,
                      fontSize: bottomTextFontSize,
                      letterSpacing: bottomTextLetterSpacing,
                      // Vertical Flow Logic
                      writingMode: bottomTextVertical
                        ? "vertical-rl"
                        : "horizontal-tb",
                      textOrientation: bottomTextVertical ? "mixed" : undefined,
                      textShadow: isHovered
                        ? `0 0 15px ${hoverElectricColor || electricColor}`
                        : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {bottomText}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* GLARE */}
          <motion.div
            className="absolute inset-0 z-40 pointer-events-none"
            style={{
              borderRadius,
              background: useMotionTemplate`radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.2) 0%, transparent 60%)`,
              mixBlendMode: "overlay",
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HolographicCard;