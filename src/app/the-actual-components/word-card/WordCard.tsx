"use client";

import React, {
  useState,
  useId,
  memo,
  useRef,
  useCallback,
  useEffect,
  CSSProperties,
} from "react";
import { Volume2, BookOpen, Info, Dices } from "lucide-react";
import { cn } from "@/lib/utils";
import { animate } from "framer-motion";

/* =========================================================
   Internal GlowingEffect (YOUR WORKING VERSION - UNTOUCHED)
   ========================================================= */
interface InternalGlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
  gradient?: string;
  staticMode?: boolean;
  staticAngle?: number;
  borderRadius: string;
}

const InternalGlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = false,
    gradient,
    staticMode = false,
    staticAngle = 0,
    borderRadius,
  }: InternalGlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current || staticMode) return;
        if (animationFrameRef.current)
          cancelAnimationFrame(animationFrameRef.current);

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current!;
          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;
          if (e) lastPosition.current = { x: mouseX, y: mouseY };

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius =
            0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");
          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;
          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) =>
              element.style.setProperty("--start", String(value)),
          });
        });
      },
      [inactiveZone, proximity, movementDuration, staticMode]
    );

    useEffect(() => {
      if (disabled) return;

      const element = containerRef.current;
      if (!element) return;

      if (staticMode) {
        element.style.setProperty("--start", String(staticAngle));
        element.style.setProperty("--active", "1");
        return;
      }

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        if (animationFrameRef.current)
          cancelAnimationFrame(animationFrameRef.current);
        document.body.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("scroll", handleScroll);
      };
    }, [handleMove, disabled, staticMode, staticAngle]);

    const fallbackGradient = `
      radial-gradient(circle, #a663eb 10%, #a663eb00 20%),
      radial-gradient(circle at 40% 40%, #1aa6eb 5%, #1aa6eb00 15%),
      radial-gradient(circle at 60% 60%, #a663eb 10%, #a663eb00 20%),
      radial-gradient(circle at 40% 60%, #1aa6eb 10%, #1aa6eb00 20%),
      repeating-conic-gradient(
        from 236.84deg at 50% 50%,
        #a663eb 0%,
        #1aa6eb calc(25% / 5),
        #a663eb calc(50% / 5),
        #1aa6eb calc(75% / 5),
        #a663eb calc(100% / 5)
      )
    `;

    const finalGradient = gradient || fallbackGradient;

    return (
      <div
        ref={containerRef}
        style={
          {
            "--blur": `${blur}px`,
            "--spread": spread,
            "--start": staticMode ? staticAngle : "0",
            "--active": staticMode ? "1" : "0",
            "--glowingeffect-border-width": `${borderWidth}px`,
            "--repeating-conic-gradient-times": "5",
            "--gradient": finalGradient,
            borderRadius: borderRadius,
          } as CSSProperties
        }
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity z-[9999]",
          blur > 0 && "blur-[var(--blur)]",
          className,
          disabled && "hidden"
        )}
      >
        <div
          className={cn(
            "glow",
            "rounded-[inherit]",
            'after:content-[""] after:rounded-[inherit] after:absolute after:inset-0',
            "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
            "after:[background:var(--gradient)] after:[background-attachment:fixed]",
            "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
            "after:[mask-clip:padding-box,border-box]",
            "after:[mask-composite:intersect]",
            "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
          )}
        />
      </div>
    );
  }
);

InternalGlowingEffect.displayName = "InternalGlowingEffect";

/* =========================================================
   COMPLETE WordCardProps (ALL CUSTOMIZABLE)
   ========================================================= */
export interface WordCardProps {
  word: string;
  translations?: string[];
  definition?: string;
  note?: string;
  audioUrl?: string;
  cardId?: string;

  // SEPARATE ALIGNMENT CONTROL
  isCardRTL?: boolean; // Card container direction
  isWordRTL?: boolean; // Word text direction only

  // LAYOUT
  cardWidth?: string;
  cardPadding?: string;
  borderWidth?: string;
  borderRadius?: string;
  borderColor?: string;
  primaryColor?: string;
  cardBackground?: string;

  // TYPOGRAPHY: WORD
  wordWeight?: number | string;
  wordFontSize?: string;
  wordColor?: string;

  // TYPOGRAPHY: TRANSLATIONS
  translationLabelWeight?: number | string;
  translationLabelSize?: string;
  translationLabelColor?: string;
  translationTextWeight?: number | string;
  translationTextSize?: string;
  translationTextColor?: string;
  translationIconColor?: string;
  translationIconSize?: string;
  translationIconStrokeWidth?: number;

  // TYPOGRAPHY: DEFINITION
  definitionLabelWeight?: number | string;
  definitionLabelSize?: string;
  definitionLabelColor?: string;
  definitionTextWeight?: number | string;
  definitionTextSize?: string;
  definitionTextColor?: string;
  definitionIconColor?: string;
  definitionIconSize?: string;
  definitionIconStrokeWidth?: number;

  // TYPOGRAPHY: NOTE / INFO
  noteLabelWeight?: number | string;
  noteLabelSize?: string;
  noteLabelColor?: string;
  noteTextWeight?: number | string;
  noteTextSize?: string;
  noteTextColor?: string;
  infoBorderRadius?: string;
  infoBorderWidth?: string;
  infoBorderColor?: string;
  infoBackground?: string;
  infoPadding?: string;
  infoMarginTop?: string;

  // TYPOGRAPHY: LISTEN BUTTON
  listenLabelWeight?: number | string;
  listenLabelSize?: string;
  listenLabelColor?: string;
  listenIconColor?: string;

  // TYPOGRAPHY: TAG
  cardTagWeight?: number | string;

  // GLOW (syncs borderWidth)
  glowEnabled?: boolean;
  glowGradient?: string;
  glowBlur?: number;
  glowSpread?: number;
  glowProximity?: number;
  glowInactiveZone?: number;
  glowStaticMode?: boolean;
  glowStaticAngle?: number;

  // DECORATIVE
  lampEnabled?: boolean;
  lampTopColor?: string;
  lampTopWidth?: string;
  lampShadowColor?: string;
  dotOpacity?: number;
  dotColor?: string;
  dotSpacing?: string;
  separatorHeight?: string;
  separatorMargin?: string;
  accentColor?: string;

  // UI
  showCardTag?: boolean;
  cardTagLabel?: string;
  cardTagAlign?: "left" | "center" | "right";
  cardTagMarginTop?: string;
  cardTagMarginBottom?: string;
  cardTagBackground?: string;
  cardTagBorderColor?: string;
  cardTagBorderWidth?: string;
  cardTagTextColor?: string;
  cardTagIconColor?: string;
  cardTagIconSize?: string;
  cardTagTextSize?: string;
  cardTagRadius?: string;
  labelTranslationSingle?: string;
  labelTranslationMultiple?: string;
  labelDefinition?: string;
  labelNote?: string;
  labelListen?: string;
  labelClose?: string;
  translationSeparator?: string;

  // SPACING
  wordMarginTop?: string;
  wordMarginBottom?: string;
  translationBlockMarginTop?: string;
  translationBlockMarginBottom?: string;
  definitionBlockMarginTop?: string;
  definitionBlockMarginBottom?: string;
  infoBlockMarginTop?: string;
}
export default function WordCard({
  word,
  translations = [],
  definition = "",
  note = "",
  audioUrl = "",
  cardId: providedId,

  // ALIGNMENT
  isCardRTL = false,
  isWordRTL = false,

  // LAYOUT
  cardWidth = "320px",
  cardPadding = "2rem",
  borderWidth = "1px",
  borderRadius = "1.5rem",
  borderColor = "#242424",
  primaryColor = "#00A7FA",
  cardBackground = "linear-gradient(180deg, rgba(20,20,20,0.92) 0%, rgba(10,10,10,0.96) 100%)",

  // TYPOGRAPHY
  wordWeight = 700,
  wordFontSize = "2.25rem",
  wordColor = "white",

  translationLabelWeight = 400,
  translationLabelSize = "0.625rem",
  translationLabelColor = "rgba(255,255,255,0.7)",
  translationTextWeight = 600,
  translationTextSize = "0.875rem",
  translationTextColor = "white",
  translationIconColor = "white",
  translationIconSize = "0.8rem",
  translationIconStrokeWidth = 2,

  definitionLabelWeight = 400,
  definitionLabelSize = "0.625rem",
  definitionLabelColor = "rgba(255,255,255,0.7)",
  definitionTextWeight = 400,
  definitionTextSize = "0.875rem",
  definitionTextColor = "rgba(255,255,255,0.6)",
  definitionIconColor = "white",
  definitionIconSize = "0.8rem",
  definitionIconStrokeWidth = 2,

  noteLabelWeight = 700,
  noteLabelSize = "0.75rem",
  noteLabelColor = "rgba(255,255,255,0.8)",
  noteTextWeight = 400,
  noteTextSize = "0.75rem",
  noteTextColor = "rgba(255,255,255,0.8)",
  infoBorderRadius = "1rem",
  infoBorderWidth = "1px",
  infoBorderColor,
  infoBackground,
  infoPadding = "1rem",
  infoMarginTop = "1rem",

  listenLabelWeight = 600,
  listenLabelSize = "0.75rem",
  listenLabelColor = "white",
  listenIconColor = primaryColor,

  cardTagWeight = 600,

  // GLOW
  glowEnabled = true,
  glowGradient,
  glowBlur = 0,
  glowSpread = 80,
  glowProximity = 64,
  glowInactiveZone = 0.01,
  glowStaticMode = false,
  glowStaticAngle = 0,

  // DECORATIVE
  lampEnabled = false,
  lampTopColor = "#ffffff",
  lampTopWidth = "70%",
  lampShadowColor = "#ffffff80",
  dotOpacity = 0.65,
  dotColor = "rgba(255,255,255,0.1)",
  dotSpacing = "clamp(1rem, 2.5vw, 1.3rem)",
  separatorHeight = "2px",
  separatorMargin = "2rem 0",
  accentColor = "#5a5a5a",

  // UI
  showCardTag = true,
  cardTagLabel = "Word",
  cardTagAlign = "left",
  cardTagMarginTop = "0",
  cardTagMarginBottom = "1.5rem",
  cardTagBackground = "rgba(255,255,255,0.05)",
  cardTagBorderColor = "rgba(255,255,255,0.1)",
  cardTagBorderWidth = "1px",
  cardTagTextColor = "rgba(255,255,255,0.7)",
  cardTagIconColor = primaryColor,
  cardTagIconSize = "0.75rem",
  cardTagTextSize = "0.55rem",
  cardTagRadius = "0.5rem",
  labelTranslationSingle = "Translation",
  labelTranslationMultiple = "Translations",
  labelDefinition = "Definition",
  labelNote = "Note",
  labelListen = "Listen",
  translationSeparator = ", ",

  // SPACING
  wordMarginTop = "0",
  wordMarginBottom = "1rem",
  translationBlockMarginTop = "0.5rem",
  translationBlockMarginBottom = "0.5rem",
  definitionBlockMarginTop = "0.5rem",
  definitionBlockMarginBottom = "0.5rem",
}: WordCardProps) {

  const [isPlaying, setIsPlaying] = useState(false);
  const internalId = useId().replace(/:/g, "");
  const cardId = providedId || `card-${internalId}`;
  const mainColor = primaryColor;

  const handlePlayAudio = () => {
    if (!audioUrl) return;
    setIsPlaying(true);
    const audio = new Audio(audioUrl);
    audio.play();
    audio.onended = () => setIsPlaying(false);
  };

  const translationLabel =
    translations.length === 1 ? labelTranslationSingle : labelTranslationMultiple;
  const renderedTranslations = translations.join(translationSeparator);
  const tagJustifyClass =
    cardTagAlign === "center"
      ? "justify-center"
      : cardTagAlign === "right"
      ? "justify-end"
      : "justify-start";

  return (
    <div
      id={cardId}
      className="word-card-root relative"
      style={{
        width: cardWidth,
      }}
      dir={isCardRTL ? "rtl" : "ltr"}
    >
      <style>{`
        #${cardId}.word-card-root {
          position: relative;
          height: auto;
          font-family: var(--font-body, system-ui, sans-serif);
        }
        #${cardId} .glass-container {
          position: relative;
          width: 100%;
          height: 100%;
          padding: ${cardPadding};
          overflow: hidden;
          background: ${cardBackground};
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          z-index: 10;
        }
        #${cardId} .chronicle-dots {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: radial-gradient(${dotColor} 1px, transparent 1px);
          background-size: ${dotSpacing} ${dotSpacing};
          opacity: ${dotOpacity};
          z-index: 1;
        }
        #${cardId} .lamp-effect-top {
          position: absolute;
          top: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: ${lampTopWidth};
          height: 1px;
          background: linear-gradient(90deg, transparent, ${lampTopColor}, transparent);
          box-shadow: 0 1px 4px 0px ${lampTopColor}, 0 2px 10px 2px ${lampShadowColor};
          z-index: 50;
        }
        #${cardId} .vertical-glow-separator {
          position: absolute;
          left: -1px;
          top: 65%;
          width: 1px;
          background: linear-gradient(
            transparent,
            transparent
          );
          opacity: 0;
          transition: top 600ms ease, opacity 600ms ease;
          z-index: 20;
        }
        #${cardId} .glass-container:hover .vertical-glow-separator {
          top: 25%;
          opacity: 0.65;
        }
        #${cardId} .lamp-effect {
          position: relative;
          width: 100%;
          height: ${separatorHeight};
          overflow: hidden;
          margin: ${separatorMargin};
        }
        #${cardId} .lamp-effect::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, ${accentColor}, transparent);
          opacity: 0.4;
          transition: opacity 0.4s ease, width 0.4s ease;
        }
        #${cardId} .glass-container:hover .lamp-effect::before {
          opacity: 0.85;
          width: 80%;
        }
        #${cardId} .word-title {
          font-size: ${wordFontSize};
          color: ${wordColor};
          text-align: center;
          margin-top: ${wordMarginTop};
          margin-bottom: ${wordMarginBottom};
          font-weight: ${wordWeight};
          font-family: var(--font-headline, system-ui, sans-serif);
        }
        #${cardId} .viewport-scroll::-webkit-scrollbar { width: 6px; }
        #${cardId} .viewport-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 3px;
        }
        #${cardId} .viewport-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
          border-radius: 3px;
          border: 1px solid rgba(0,0,0,0.3);
        }
        #${cardId} .viewport-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.5);
        }
      `}</style>

      {glowEnabled && (
        <InternalGlowingEffect
          spread={glowSpread}
          glow={true}
          proximity={glowProximity}
          inactiveZone={glowInactiveZone}
          blur={glowBlur}
          borderWidth={parseFloat(borderWidth) || 1}
          gradient={glowGradient}
          staticMode={glowStaticMode}
          staticAngle={glowStaticAngle}
          className="absolute inset-0 pointer-events-none"
          borderRadius={borderRadius}
        />
      )}

      <div
        className="glass-container"
        style={{
          borderWidth: borderWidth,
          borderColor: borderColor || mainColor,
          borderStyle: "solid",
          borderRadius: borderRadius,
        }}
      >
        {lampEnabled && <div className="lamp-effect-top" />}
        <div className="vertical-glow-separator" />
        <div className="chronicle-dots" />

        <div className="relative z-20 flex flex-col h-full">
          {showCardTag && (
            <div
              className={cn("flex items-center mb-2", tagJustifyClass)}
              style={{
                marginTop: cardTagMarginTop,
                marginBottom: cardTagMarginBottom,
              }}
            >
              <div
                className="flex items-center gap-2 px-2 py-1"
                style={{
                  background: cardTagBackground || "bg-white/5",
                  borderColor: cardTagBorderColor || "rgba(255,255,255,0.1)",
                  borderWidth: cardTagBorderWidth || "1px",
                  borderStyle: "solid",
                  borderRadius: cardTagRadius || "0.5rem",
                }}
              >
                <Dices
                  className="icon-dice"
                  style={{
                    color: cardTagIconColor || mainColor,
                    width: cardTagIconSize || "0.75rem",
                    height: cardTagIconSize || "0.75rem",
                    transform: isCardRTL ? "scaleX(-1)" : undefined,
                  }}
                />
                <span
                  style={{
                    fontWeight: cardTagWeight,
                    fontSize: cardTagTextSize || "0.55rem",
                    color: cardTagTextColor || "rgba(255,255,255,0.7)",
                    letterSpacing: "0.2em",
                  }}
                >
                  {cardTagLabel}
                </span>
              </div>
            </div>
          )}

          {/* Word + audio */}
          <div
            className="flex flex-col items-center"
            dir={isWordRTL ? "rtl" : "ltr"}
          >
            <h2 className="word-title">{word}</h2>

            {audioUrl && (
              <button
                onClick={handlePlayAudio}
                disabled={isPlaying}
                className="mt-4 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-white/10 transition-all"
                style={{
                  fontWeight: listenLabelWeight,
                  fontSize: listenLabelSize,
                  color: listenLabelColor,
                }}
              >
                <span>{labelListen}</span>
                <Volume2
                  className={cn("w-4 h-4", isPlaying && "animate-pulse")}
                  style={{ color: listenIconColor }}
                />
              </button>
            )}
          </div>

          <div className="lamp-effect" />

          {/* Scroll Area */}
          <div className="viewport-scroll overflow-y-auto pr-2 space-y-4 flex-1">
            {translations.length > 0 && (
              <div
                style={{
                  marginTop: translationBlockMarginTop,
                  marginBottom: translationBlockMarginBottom,
                }}
              >
                <div className="flex items-center gap-2 mb-2 opacity-70">
                  <BookOpen
                    style={{
                      color: translationIconColor,
                      width: translationIconSize,
                      height: translationIconSize,
                    }}
                    strokeWidth={translationIconStrokeWidth}
                  />
                  <span
                    className="tracking-widest"
                    style={{
                      fontWeight: translationLabelWeight,
                      fontSize: translationLabelSize,
                      color: translationLabelColor,
                    }}
                  >
                    {translationLabel}
                  </span>
                </div>
                <p
                  className="text-sm leading-snug"
                  style={{
                    fontWeight: translationTextWeight,
                    fontSize: translationTextSize,
                    color: translationTextColor,
                  }}
                >
                  {renderedTranslations}
                </p>
              </div>
            )}

            {definition && (
              <div
                style={{
                  marginTop: definitionBlockMarginTop,
                  marginBottom: definitionBlockMarginBottom,
                }}
              >
                <div className="flex items-center gap-2 mb-2 opacity-70">
                  <Info
                    style={{
                      color: definitionIconColor,
                      width: definitionIconSize,
                      height: definitionIconSize,
                    }}
                    strokeWidth={definitionIconStrokeWidth}
                  />
                  <span
                    className="tracking-widest"
                    style={{
                      fontWeight: definitionLabelWeight,
                      fontSize: definitionLabelSize,
                      color: definitionLabelColor,
                    }}
                  >
                    {labelDefinition}
                  </span>
                </div>
                <p
                  className="italic leading-relaxed"
                  style={{
                    fontWeight: definitionTextWeight,
                    fontSize: definitionTextSize,
                    color: definitionTextColor,
                  }}
                >
                  {definition}
                </p>
              </div>
            )}

            {note && (
              <div
                style={{
                  marginTop: infoMarginTop,
                  padding: infoPadding,
                  borderRadius: infoBorderRadius,
                  borderWidth: infoBorderWidth,
                  borderStyle: "solid",
                  borderColor: infoBorderColor || `${mainColor}30`,
                  backgroundColor: infoBackground || `${mainColor}10`,
                }}
              >
                <p
                  className="leading-normal"
                  style={{
                    fontWeight: noteTextWeight,
                    fontSize: noteTextSize,
                    color: noteTextColor,
                  }}
                >
                  <span
                    className={`tracking-tight font-semibold ${
                      isCardRTL ? "ml-1" : "mr-1"
                    }`}
                    style={{
                      fontWeight: noteLabelWeight,
                      fontSize: noteLabelSize,
                      color: noteLabelColor,
                    }}
                  >
                    {labelNote}:
                  </span>
                  {note}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
