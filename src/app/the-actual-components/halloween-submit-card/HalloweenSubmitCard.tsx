"use client";

import {
  motion,
  Variants,
  useAnimation,
  useReducedMotion,
} from "framer-motion";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
  useId,
  CSSProperties,
} from "react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Plus Icons (identical visual fidelity)
// ---------------------------------------------------------------------------
export interface PlusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PlusIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
}

const PlusIconDraw = forwardRef<PlusIconHandle, PlusIconProps>(
  (
    { onMouseEnter, onMouseLeave, className, size = 42, color = "#ff7518", ...props },
    ref
  ) => {
    const controls = useAnimation();
    const reduced = useReducedMotion();
    const isControlled = useRef(false);

    useImperativeHandle(ref, () => {
      isControlled.current = true;
      return {
        startAnimation: () =>
          reduced ? controls.start("normal") : controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleEnter = useCallback(() => {
      if (reduced) return;
      if (!isControlled.current) controls.start("animate");
      else onMouseEnter?.(undefined as any);
    }, [controls, reduced, onMouseEnter]);

    const handleLeave = useCallback(() => {
      if (!isControlled.current) controls.start("normal");
      else onMouseLeave?.(undefined as any);
    }, [controls, onMouseLeave]);

    const plusVariants: Variants = {
      normal: { scale: 1, rotate: 0 },
      animate: {
        scale: [1, 1.2, 0.85, 1],
        rotate: [0, 10, -10, 0],
        transition: { duration: 1, ease: "easeInOut" },
      },
    };

    const lineVariants: Variants = {
      normal: { pathLength: 1, opacity: 1 },
      animate: {
        pathLength: [0, 1],
        transition: { duration: 0.6, ease: "easeInOut" },
      },
    };

    return (
      <motion.div
        className={cn("inline-flex items-center justify-center", className)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        {...props}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={controls}
          initial="normal"
          variants={plusVariants}
          className="draw-icon"
        >
          <motion.path d="M5 12h14" variants={lineVariants} />
          <motion.path d="M12 5v14" variants={lineVariants} />
        </motion.svg>
      </motion.div>
    );
  }
);
PlusIconDraw.displayName = "PlusIconDraw";

export const PlusIconRotate: React.FC<{
  size?: number;
  color?: string;
  durationMs?: number;
  isSpinningCW?: boolean;
}> = ({ size = 42, color = "#ff7518", durationMs = 400, isSpinningCW = false }) => {
  const spin: CSSProperties = {
    animation: `${isSpinningCW ? "spinCW" : "spinCCW"} ${
      durationMs / 1000
    }s ease-in-out 1`,
    transformOrigin: "center",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={spin}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
      <style>{`
        @keyframes spinCW { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinCCW { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      `}</style>
    </svg>
  );
};

// ---------------------------------------------------------------------------
// Enhanced Halloween Card
// ---------------------------------------------------------------------------
interface HalloweenSubmitCardProps {
  id?: string;
  isRTL?: boolean;
  link: string;
  title: string;
  description: string;
  imageSrc?: string;
  useDrawIcon?: boolean;

  accent?: string;
  accentAdjacentColor?: string;
  accentGlow?: string;
  secondInteractiveColor?: string;
  cardBg?: string;
  innerBg?: string;
  textTitle?: string;
  textDesc?: string;

  enableGlow?: boolean;
  innerBorderColor?: string;
  squareBgColor?: string;
  bodyGlow?: string;
  squareGlow?: string;

  initialRotation?: number;
  gradientStops?: { start?: number; mid?: number; end?: number };
  centerText?: boolean;
}

export default function HalloweenSubmitCard({
  id,
  isRTL = false,
  link,
  title,
  description,
  imageSrc,
  useDrawIcon = false,

  accent = "#ff7518",
  accentAdjacentColor = "#b13d00",
  accentGlow = "rgba(255,117,24,0.9)",
  secondInteractiveColor = "#5f1907",
  cardBg = "#0a0501",
  innerBg = "#110903",
  textTitle = "#fffbe6",
  textDesc = "#ffa94d",

  enableGlow = true,
  innerBorderColor = "rgba(255,117,24,0.5)",
  squareBgColor = "#fdf5d4",
  bodyGlow = "rgba(255,130,0,0.3)",
  squareGlow = "rgba(255,117,24,0.5)",

  initialRotation = 2.5,
  gradientStops = { start: 0, mid: 50, end: 90 },
  centerText = false,
}: HalloweenSubmitCardProps) {
  const componentId = id ?? useId();
  const plusIconRef = useRef<PlusIconHandle>(null);
  const [hover, setHover] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [angle, setAngle] = useState(initialRotation);

  const showImage = !!imageSrc && !imageError;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setAngle(Math.atan2(-x, y));
  };

  // ---------------------------------------------------------------
  // Fixed gradient background: both layers are transparent-safe
  // Uses alpha channel instead of solid cardBg to prevent black overlay
  // ---------------------------------------------------------------
  const gradient = `linear-gradient(to bottom, ${cardBg}CC, ${cardBg}CC), 
    linear-gradient(${angle}rad, 
    ${accent} ${gradientStops.start}%, 
    ${accentAdjacentColor} ${gradientStops.mid}%, 
    ${secondInteractiveColor} ${gradientStops.end}%)`;
  
  const baseShadow = enableGlow
    ? `0 0 0 1px rgba(255,255,255,0.08), 0 0 20px ${bodyGlow}, 0 0 40px ${bodyGlow}`
    : `0 0 0 1px rgba(255,255,255,0.08)`;

  const hoverShadow = enableGlow
    ? `0 0 35px ${accentGlow}, 0 0 80px ${accentGlow}, inset 0 0 20px ${accentGlow}`
    : baseShadow;

  const cardShadow = hover ? hoverShadow : baseShadow;
  const textAlign = centerText ? "center" : isRTL ? "right" : "left";

  return (
    <motion.a
      id={componentId}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      dir={isRTL ? "rtl" : "ltr"}
      className="group block transition-all duration-400"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setHover(true);
        plusIconRef.current?.startAnimation();
      }}
      onMouseLeave={() => {
        setHover(false);
        plusIconRef.current?.stopAnimation();
      }}
      style={{
        width: 360,
        display: "flex",
        flexDirection: "column",
        padding: 16,
        borderRadius: "16px",
        backgroundImage: gradient,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box,border-box",
        boxShadow: cardShadow,
        border: "2px solid transparent",
        transition: "box-shadow .45s ease, transform .45s ease",
        cursor: "pointer",
        backgroundColor: "transparent",
      }}
    >
      <div
        className={cn("relative w-full grid place-items-center overflow-hidden")}
        style={{
          aspectRatio: "16/10",
          borderRadius: "16px",
          backgroundColor: innerBg,
          border: `2px solid ${innerBorderColor}`,
          transform: isRTL ? "scaleX(-1)" : "none",
          transition: "all 0.5s ease",
        }}
      >
        {showImage ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
            style={{ borderRadius: "16px" }}
            onError={() => setImageError(true)}
          />
        ) : (
          <>
            <div
              className="absolute h-1/2 aspect-square border-dashed transition-opacity"
              style={{
                border: `2px dashed ${accent}`,
                borderRadius: "16px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                opacity: hover ? 1 : 0,
                transition: "opacity .5s ease",
              }}
            ></div>
            <div
              className="absolute"
              style={{
                height: "50%",
                aspectRatio: "1/1",
                top: "50%",
                left: "50%",
                transform: hover
                  ? "translate(calc(-50% + 15px), calc(-50% - 15px))"
                  : "translate(-50%,-50%)",
                backgroundColor: squareBgColor,
                border: `1px solid ${innerBorderColor}`,
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform .5s ease, box-shadow .5s ease",
                boxShadow: enableGlow
                  ? hover
                    ? `0 0 40px ${squareGlow}`
                    : `0 0 20px ${squareGlow}`
                  : "none",
              }}
            >
              {useDrawIcon ? (
                <PlusIconDraw ref={plusIconRef} color={accent} />
              ) : (
                <PlusIconRotate color={accent} isSpinningCW={hover} />
              )}
            </div>
          </>
        )}
      </div>

      <div
        className="pt-4 font-sans transition-transform duration-300"
        style={{
          textAlign,
          transform: hover ? `translateX(${isRTL ? -6 : 6}px)` : "none",
        }}
      >
        <h3
          className="text-[22px] mb-2 font-semibold"
          style={{
            color: textTitle,
            textShadow: `0 0 8px ${accent}`,
          }}
        >
          {title}
        </h3>
        <p
          className="text-base"
          style={{
            color: textDesc,
            textAlign,
          }}
        >
          {description}
        </p>
      </div>
    </motion.a>
  );
}
