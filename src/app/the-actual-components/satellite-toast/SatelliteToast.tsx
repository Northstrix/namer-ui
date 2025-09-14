"use client";
import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useMemo,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface ToastNotification {
  id?: string;
  title?: string;
  content?: string;
  isRTL?: boolean;
  accentColor?: string;
  backgroundColor?: string;
  bars?: number;
  disableBackgroundBars?: boolean;
  textColor?: string;
  titleFontSize?: string;
  titleFontColor?: string;
  titleFontWeight?: string;
  contentFontSize?: string;
  contentFontColor?: string;
  contentFontWeight?: string;
  bodyBorderRadius?: string;
  bodyBorderColor?: string;
  bodyBorderWidth?: string;
  typeIconContainerBorderRadius?: string;
  typeIconContainerBorderColor?: string;
  typeIconContainerBorderWidth?: string;
  typeIconColor?: string;
  iconYOffset?: string;
  iconXOffset?: string;
  closeIconBorderRadius?: string;
  closeIconBgColor?: string;
  closeIconFgColor?: string;
  closeIconHoverBgColor?: string;
  closeIconHoverFgColor?: string;
  closeIconOutlineColor?: string;
  closeIconOutlineWidth?: string;
  timerColor?: string;
  timerBgColor?: string;
  timerAnimationType?: "shrink" | "deplete";
  longevity?: number;
  animationDuration?: number;
  position?: ToastPosition;
  customIcon?: string;
  satelliteInFront?: boolean;
  satelliteColor?: string;
  showSatelliteAnimation?: boolean;
  paddingLTR?: string;
  paddingRTL?: string;
}

export interface SatelliteToastProps {
  maxWidth?: string;
  horizontalMarginAdjustment?: string;
  verticalGapAdjustment?: string;
  firstContainerVerticalStartMarginAdjustment?: string;
}

const CLOSE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>`;

const SATELLITE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3.707 6.293l2.586-2.586a1 1 0 011.414 0l5.586 5.586a1 1 0 010 1.414l-2.586 2.586a1 1 0 01-1.414 0l-5.586-5.586a1 1 0 010-1.414z"/><path d="M6 10l-3 3 3 3 3-3"/><path d="M10 6l3-3 3 3-3 3"/><path d="M12 12l1.5 1.5"/><path d="M14.5 17a2.5 2.5 0 012.5-2.5"/><path d="M15 21a6 6 0 006-6"/></svg>`;

const SatelliteOrbit = ({
  isRTL,
  accentColor,
  satelliteInFront = true,
  satelliteColor,
}: {
  isRTL: boolean;
  accentColor: string;
  satelliteInFront?: boolean;
  satelliteColor: string;
}) => {
  const keyframes = `
    @keyframes orbitAnim {
      0% { transform: translateX(160px) translateY(90px) scale(1.2); }
      100% { transform: translateX(-40px) translateY(-110px) scale(1); }
    }
  `;
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: 0,
        right: -250,
        transform: `translateY(-50%) ${isRTL ? "scaleX(-1)" : ""} scale(0.24)`,
        transformOrigin: "left center",
        width: 250,
        height: 50,
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
      aria-label="Satellite orbit animation"
    >
      <style>{keyframes}</style>
      <div
        style={{
          width: 150,
          height: 150,
          backgroundColor: accentColor,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(0, -50%)",
          borderRadius: "50%",
          boxShadow: `0 0 12px ${accentColor}80`,
          zIndex: satelliteInFront ? 0 : 2,
        }}
      />
      <div
        style={{
          animation: "orbitAnim 1000ms infinite ease-in-out alternate -2500ms",
          position: "absolute",
          transformOrigin: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 75,
            height: 75,
            boxShadow: "-2.5px -2.5px 0 rgba(39,39,39,0.1) inset",
            backgroundColor: satelliteColor,
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
};

interface BackgroundBarsProps {
  bars?: number;            // Number of bars, from notification props
  accentColor: string;      // Always from notification.accentColor
  borderRadius: string;     // Match notification.bodyBorderRadius
  disabled?: boolean;       // if true, both colors transparent
}

const BackgroundBars = ({
  bars = 20,
  accentColor,
  borderRadius = "0px",
  disabled = false,
}: BackgroundBarsProps) => {
  // If disabled, both colors are fully transparent
  const colors = disabled ? ["transparent", "transparent"] : [accentColor, "transparent"];
  const gradientStyle = `linear-gradient(to top, ${colors.join(", ")})`;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        borderRadius,
        height: "100%",
        width: "100%",
      }}
      aria-hidden="true"
    >
      <div style={{ display: "flex", height: "100%", width: "100%" }}>
        {Array.from({ length: bars }).map((_, index) => {
          const position = index / (bars - 1);
          const center = 0.5;
          const distance = Math.abs(position - center);
          const scale = 0.3 + 0.7 * Math.pow(distance * 2, 1.2);

          return (
            <motion.div
              key={`bg-bar-${index}`}
              style={{
                flex: 1,
                background: gradientStyle,
                transformOrigin: "bottom",
              }}
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

const createTimerAnimations = (uid: number, mode: "shrink" | "deplete") => {
  const style = document.createElement("style");
  if (mode === "shrink") {
    style.textContent = `
      @keyframes timerShrink-${uid} {
        from { transform: scaleX(1); }
        to { transform: scaleX(0); }
      }
    `;
  }
  if (mode === "deplete") {
    style.textContent = `
      @keyframes timerDeplete-${uid} {
        from { transform: scaleX(1); }
        to { transform: scaleX(0); }
      }
    `;
  }
  document.head.appendChild(style);
};

const Notification = ({ notification, onClose }: { notification: ToastNotification; onClose: () => void }) => {
  const {
    title,
    content,
    isRTL = false,
    accentColor = "#6750A4",
    backgroundColor = "#0a0a0a",
    bars = 20,
    disableBackgroundBars = false,
    titleFontSize = "1.1rem",
    titleFontColor = "#fff",
    titleFontWeight = 700,
    contentFontSize = "0.9rem",
    contentFontColor = "#e5e5e5",
    contentFontWeight = 400,
    bodyBorderRadius = "12px",
    bodyBorderColor = "#2a2a2a",
    bodyBorderWidth = "1px",
    typeIconContainerBorderRadius = "50%",
    typeIconContainerBorderColor = "#2a2a2a",
    typeIconContainerBorderWidth = "1px",
    typeIconColor = "#fff",
    iconYOffset = "0px",
    iconXOffset = "0px",
    closeIconBorderRadius = "50%",
    closeIconBgColor = "#fff",
    closeIconFgColor = "#242424",
    closeIconHoverBgColor = "#ccc",
    closeIconHoverFgColor = "#000",
    closeIconOutlineColor = "#2a2a2a",
    closeIconOutlineWidth = "1px",
    timerColor = "#fff",
    timerBgColor = "rgba(255,255,255,0.3)",
    timerAnimationType = "shrink",
    longevity = 5000,
    animationDuration = 600,
    customIcon,
    satelliteInFront = true,
    satelliteColor = "#fff",
    showSatelliteAnimation = true,
    paddingLTR = "1.375rem 3rem 1.375rem 96px",
    paddingRTL = "1.375rem 96px 1.375rem 3rem",
  } = notification;

  const [isVisible, setIsVisible] = useState(true);
  const notifRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const remainingRef = useRef(longevity);
  const startTimeRef = useRef(Date.now());
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const effectiveBgColor = backgroundColor;
  const effectiveBodyBorder = bodyBorderColor;
  const effectiveIconBorder = typeIconContainerBorderColor;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, animationDuration);
  };

  useEffect(() => {
    const uid = Date.now();

    if (timerAnimationType === "shrink") {
      if (!leftRef.current || !rightRef.current) return;
      createTimerAnimations(uid, "shrink");
      leftRef.current.style.animation = `timerShrink-${uid} ${longevity}ms linear forwards`;
      rightRef.current.style.animation = `timerShrink-${uid} ${longevity}ms linear forwards`;
    }

    if (timerAnimationType === "deplete") {
      if (!leftRef.current) return;
      createTimerAnimations(uid, "deplete");
      leftRef.current.style.animation = `timerDeplete-${uid} ${longevity}ms linear forwards`;
    }

    startTimeRef.current = Date.now();
    timeoutRef.current = setTimeout(handleClose, longevity);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [longevity, timerAnimationType, isRTL]);

  const pauseTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const elapsed = Date.now() - startTimeRef.current;
    remainingRef.current -= elapsed;

    // Crucial: NEVER remove animation style here, just pause it
    if (leftRef.current) leftRef.current.style.animationPlayState = "paused";
    if (rightRef.current) rightRef.current.style.animationPlayState = "paused";
  };

  const resumeTimer = () => {
    if (remainingRef.current > 0) {
      startTimeRef.current = Date.now();
      timeoutRef.current = setTimeout(handleClose, remainingRef.current);
      // Just resume animation-play-state running on refs
      if (leftRef.current) leftRef.current.style.animationPlayState = "running";
      if (rightRef.current) rightRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div
      ref={notifRef}
      dir={isRTL ? "rtl" : "ltr"}
      className={`toast-wrapper ${isVisible ? "animate-slide-in" : "animate-slide-out"}`}
      style={{
        zIndex: 1100,
        ["--anim-longevity" as any]: `${animationDuration}ms`,
        ["--anim-translateX" as any]: isRTL ? "-150%" : "150%",
        ["--anim-bounceX" as any]: isRTL ? "12%" : "-12%",
        position: "relative",
        pointerEvents: "auto",
      }}
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
    >
      <style>{`
        @keyframes slideInWithBounce {
          0% { transform: translateX(var(--anim-translateX)); opacity: 0; }
          60% { transform: translateX(var(--anim-bounceX)); opacity: 1; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutWithBounce {
          0% { transform: translateX(0); opacity: 1; }
          40% { transform: translateX(var(--anim-bounceX)); opacity: 1; }
          100% { transform: translateX(var(--anim-translateX)); opacity: 0; }
        }
        .animate-slide-in { animation: slideInWithBounce var(--anim-longevity) ease forwards; }
        .animate-slide-out { animation: slideOutWithBounce var(--anim-longevity) ease forwards; }
      `}</style>

      <div
        className="toast-body"
        style={{
          borderRadius: bodyBorderRadius,
          outline: `${bodyBorderWidth} solid ${effectiveBodyBorder}`,
          padding: isRTL ? paddingRTL : paddingLTR,
          backgroundColor: effectiveBgColor,
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          zIndex: 10,
        }}
      >
        <BackgroundBars
          bars={bars}
          accentColor={accentColor}
          borderRadius={bodyBorderRadius}
          disabled={disableBackgroundBars}
        />
        {showSatelliteAnimation && <SatelliteOrbit isRTL={isRTL} accentColor={accentColor} satelliteInFront={satelliteInFront} satelliteColor={satelliteColor} />}

        <div style={{ flex: 1, zIndex: 20 }}>
          <h3
            style={{
              fontSize: titleFontSize,
              color: titleFontColor,
              fontWeight: titleFontWeight,
              margin: 0,
              paddingBottom: "0.25rem",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: contentFontSize,
              color: contentFontColor,
              fontWeight: contentFontWeight,
              margin: 0,
            }}
          >
            {content}
          </p>
        </div>
        <div
          className="toast-timer"
          style={{
            position: "absolute",
            bottom: 0,
            left: "10%",
            right: "10%",
            width: "80%",
            height: "4px",
            background: timerBgColor,
            borderRadius: "2px",
            overflow: "hidden",
            zIndex: 15,
          }}
        >
          {timerAnimationType === "shrink" ? (
            <>
              {/* two halves for SHRINK */}
              <div
                ref={leftRef}
                className="timer-left"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "50%",
                  height: "100%",
                  background: timerColor,
                  transformOrigin: "right",
                }}
              />
              <div
                ref={rightRef}
                className="timer-right"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "50%",
                  height: "100%",
                  background: timerColor,
                  transformOrigin: "left",
                }}
              />
            </>
          ) : (
            <>
              {/* full bar for DEPLETE */}
              <div
                ref={leftRef}
                className="timer-deplete"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "100%",
                  background: timerColor,
                  transformOrigin: isRTL ? "right" : "left", // control direction
                }}
              />
            </>
          )}
        </div>
      </div>

      <div
        className="toast-icon"
        dangerouslySetInnerHTML={{ __html: customIcon || SATELLITE_ICON }}
        style={{
          position: "absolute",
          width: "3.5rem",
          height: "3.5rem",
          background: accentColor,
          top: "-1.75rem",
          [isRTL ? "right" : "left"]: "2rem",
          borderRadius: typeIconContainerBorderRadius,
          outline: `${typeIconContainerBorderWidth} solid ${effectiveIconBorder}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.6)",
          color: typeIconColor || "#fff",
          zIndex: 60,
          userSelect: "none",
          pointerEvents: "none",
          transform: `translate(${iconXOffset}, ${iconYOffset}) ${isRTL ? "scaleX(-1)" : ""}`,
        }}
      />

      <button
        dangerouslySetInnerHTML={{ __html: CLOSE_SVG }}
        onClick={handleClose}
        aria-label="Close notification"
        style={{
          position: "absolute",
          top: "0.4rem",
          [isRTL ? "left" : "right"]: "0.4rem",
          height: "34px",
          width: "34px",
          cursor: "pointer",
          borderRadius: closeIconBorderRadius,
          backgroundColor: closeIconBgColor,
          color: closeIconFgColor,
          transform: "scale(0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          outline: `${closeIconOutlineWidth} solid ${closeIconOutlineColor}`,
          zIndex: 1000,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = closeIconHoverBgColor!;
          e.currentTarget.style.color = closeIconHoverFgColor!;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = closeIconBgColor!;
          e.currentTarget.style.color = closeIconFgColor!;
        }}
      />
    </div>
  );
};

export const SatelliteToast = forwardRef<{ showNotification: (options: Omit<ToastNotification, "id">) => void }, SatelliteToastProps>(
  ({ maxWidth = "334px", horizontalMarginAdjustment = "13px", verticalGapAdjustment = "51px", firstContainerVerticalStartMarginAdjustment = "8px" }, ref) => {
    const [notifications, setNotifications] = useState<ToastNotification[]>([]);
    const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

    useEffect(() => {
      const node = document.createElement("div");
      node.setAttribute("id", "satellite-toast-portal");
      document.body.appendChild(node);
      setPortalNode(node);
      return () => { document.body.removeChild(node); };
    }, []);

    useImperativeHandle(ref, () => ({
      showNotification: (options) => {
        const newNotification: ToastNotification = { ...options, id: new Date().toISOString() + Math.random() };
        setNotifications((prev) => newNotification.position?.startsWith("top") ? [newNotification, ...prev] : [...prev, newNotification]);
      },
    }));

    const removeNotification = useCallback((id: string) => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, []);

    const grouped = useMemo(() => {
      return notifications.reduce((acc, n) => {
        const pos = n.position || "bottom-right";
        if (!acc[pos]) acc[pos] = [];
        acc[pos].push(n);
        return acc;
      }, {} as Record<ToastPosition, ToastNotification[]>);
    }, [notifications]);

    if (!portalNode) return null;

    const getPosStyles = (pos: ToastPosition): React.CSSProperties => {
      let styles: React.CSSProperties = {
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        zIndex: 2000,
        pointerEvents: "none",
        maxWidth,
        rowGap: verticalGapAdjustment,
        marginLeft: horizontalMarginAdjustment,
        marginRight: horizontalMarginAdjustment,
      };
      if (pos.includes("top")) styles.top = `calc(${horizontalMarginAdjustment} + ${firstContainerVerticalStartMarginAdjustment})`;
      if (pos.includes("bottom")) styles.bottom = `calc(${horizontalMarginAdjustment} + ${firstContainerVerticalStartMarginAdjustment})`;
      if (pos.includes("left")) styles.left = horizontalMarginAdjustment;
      if (pos.includes("right")) styles.right = horizontalMarginAdjustment;
      return styles;
    };

    return createPortal(
      <>
        {Object.entries(grouped).map(([pos, arr]) => (
          <div key={pos} style={getPosStyles(pos as ToastPosition)}>
            {arr.map((n) => <Notification key={n.id} notification={n} onClose={() => removeNotification(n.id!)} />)}
          </div>
        ))}
      </>,
      portalNode
    );
  }
);

SatelliteToast.displayName = "SatelliteToast";