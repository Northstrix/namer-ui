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

const mainVariant: Variants = {
  initial: { x: 0, y: 0, boxShadow: "0px 10px 50px rgba(0,0,0,0.1)" },
  animate: { x: 20, y: -20, boxShadow: "0px 10px 50px rgba(0,0,0,0.2)" },
};

const mainVariantRTL: Variants = {
  initial: { x: 0, y: 0, boxShadow: "0px 10px 50px rgba(0,0,0,0.1)" },
  animate: { x: -20, y: -20, boxShadow: "0px 10px 50px rgba(0,0,0,0.2)" },
};

const secondaryVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export interface PlusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}
interface PlusIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
}
const PlusIconDraw = forwardRef<PlusIconHandle, PlusIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, color = "#00a7fa", ...props }, ref) => {
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
        transition: { duration: 1, ease: "easeInOut", repeat: 0 },
      },
    };
    const lineVariants: Variants = {
      normal: { pathLength: 1, opacity: 1 },
      animate: {
        pathLength: [0, 1],
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeInOut",
          repeat: 0,
          repeatDelay: 0.4,
        },
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
          viewBox="0 0 24 21"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={controls}
          initial="normal"
          variants={plusVariants}
        >
          <motion.path d="M5 12h14" variants={lineVariants} />
          <motion.path d="M12 5v14" variants={lineVariants} />
        </motion.svg>
      </motion.div>
    );
  }
);
PlusIconDraw.displayName = "PlusIconDraw";

interface PlusIconRotateProps {
  size?: number;
  color?: string;
  durationMs?: number;
  isSpinningCW?: boolean;
}
const PlusIconRotate: React.FC<PlusIconRotateProps> = ({
  size = 42,
  color = "#00a7fa",
  durationMs = 400,
  isSpinningCW = false,
}) => {
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
      <style>
        {`
          @keyframes spinCW { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes spinCCW { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        `}
      </style>
    </svg>
  );
};

interface SubmitCardProps {
  id?: string;
  isRTL?: boolean;
  link: string;
  title: string;
  description: string;
  imageSrc?: string;
  useDrawIcon?: boolean;
  centerContent?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  innerAreaBgColor?: string;
  innerBorderColor?: string;
  squareBgColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  plusIconColor?: string;
  dashedBorderColor?: string;
  textHoverShift?: number;
  borderRadius?: string;
}

export default function SubmitCard({
  id,
  isRTL = false,
  link,
  title,
  description,
  imageSrc,
  useDrawIcon = false,
  centerContent = false,
  backgroundColor = "#0a0a0a",
  borderColor = "#262626",
  innerAreaBgColor = "#111111",
  innerBorderColor = "#333333",
  squareBgColor = "#ffffff",
  titleColor = "#ffffff",
  descriptionColor = "#aaaaaa",
  plusIconColor = "#00a7fa",
  dashedBorderColor = "#00a7fa",
  textHoverShift = 6,
  borderRadius = "8px",
}: SubmitCardProps) {
  const componentId = id ?? useId();
  const plusIconRef = useRef<PlusIconHandle>(null);
  const [hover, setHover] = useState(false);
  const [imageError, setImageError] = useState(false);

  const textDirection = isRTL ? "rtl" : "ltr";
  const baseTextAlign = centerContent ? "center" : isRTL ? "right" : "left";
  const showImage = imageSrc && !imageError;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      dir={textDirection}
      className="group block p-4 overflow-hidden transition-all duration-200"
      style={{
        borderRadius,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor,
        backgroundColor,
        textAlign: baseTextAlign,
        display: "flex",
        flexDirection: "column",
        justifyContent: centerContent ? "center" : "flex-start",
      }}
      initial="initial"
      whileHover="animate"
      onHoverStart={() => {
        setHover(true);
        plusIconRef.current?.startAnimation();
      }}
      onHoverEnd={() => {
        setHover(false);
        plusIconRef.current?.stopAnimation();
      }}
    >
      {/* Inner area container visually mirrored only for RTL */}
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <div
          className="w-full h-full relative grid place-items-center border overflow-hidden"
          style={{
            borderRadius,
            borderColor: innerBorderColor,
            backgroundColor: innerAreaBgColor,
          }}
        >
          {/* Image as background covering entire inner area if valid */}
          {showImage ? (
            <div
              aria-labelledby={componentId + "-title"}
              aria-describedby={componentId + "-desc"}
              className="w-full h-full rounded-lg"
              style={{
                backgroundColor: innerAreaBgColor,
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                borderRadius,
              }}
            />
          ) : imageSrc && imageError ? (
            // Broken image fallback: empty bordered box, no icon or square
            <div
              className="w-full h-full rounded-lg"
              style={{
                backgroundColor: innerAreaBgColor,
                borderRadius,
              }}
            />
          ) : (
            // No image: dashed border + animated plus icon container
            <div className="relative w-auto h-1/2 aspect-square">
              <motion.div
                variants={secondaryVariant}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="absolute inset-0 border border-dashed"
                style={{
                  borderColor: dashedBorderColor,
                  borderRadius: borderRadius,
                  opacity: 0,
                  pointerEvents: "none",
                }}
              />
              <motion.div
                layoutId={"file-upload-" + componentId}
                variants={isRTL ? mainVariantRTL : mainVariant}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 flex items-center justify-center h-full w-full mx-auto shadow-lg"
                style={{ backgroundColor: squareBgColor, borderRadius: borderRadius, }}
              >
                <div
                  style={{
                    transform: !showImage && isRTL ? "scaleX(-1)" : "none",
                  }}
                >
                  {useDrawIcon ? (
                    <PlusIconDraw
                      ref={plusIconRef}
                      size={42}
                      color={plusIconColor}
                    />
                  ) : (
                    <PlusIconRotate
                      size={42}
                      color={plusIconColor}
                      isSpinningCW={hover}
                    />
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Hidden img for error detection only */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          style={{ display: "none" }}
          onError={() => setImageError(true)}
          onLoad={() => setImageError(false)}
          key={componentId + "-img"}
        />
      )}

      {/* Text content */}
      <div
        className="pt-4 font-sans transition duration-200"
        style={{
          direction: textDirection,
          textAlign: baseTextAlign,
          transform: hover
            ? `translateX(${isRTL ? -textHoverShift : textHoverShift}px)`
            : "none",
        }}
        id={componentId + "-text"}
      >
        <h3
          id={componentId + "-title"}
          className="text-[22px] mb-2 font-semibold"
          style={{ color: titleColor }}
        >
          {title}
        </h3>
        <p
          id={componentId + "-desc"}
          className="text-base"
          style={{ color: descriptionColor }}
        >
          {description}
        </p>
      </div>
    </motion.a>
  );
}
