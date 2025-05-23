"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { CanvasRevealEffect } from "./CanvasReveal";

// Concise hook for dynamic text layout
function useDynamicTextLayout(
  containerRef: React.RefObject<HTMLDivElement>,
  textArray: string[],
  minWidth: number,
  maxWidth: number,
  minTextSize: number,
  maxTextSize: number,
  manualLetterSpacing: number | undefined,
  componentId: string
) {
  const [textSize, setTextSize] = useState(maxTextSize);
  const [letterSpacing, setLetterSpacing] = useState(manualLetterSpacing ?? 0);

  useEffect(() => {
    const updateTextSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const calculatedTextSize =
          ((maxTextSize - minTextSize) / (maxWidth - minWidth)) *
            (width - minWidth) +
          minTextSize;
        const cappedTextSize = Math.min(calculatedTextSize, maxTextSize);
        setTextSize(cappedTextSize);
      }
    };
    const handleResize = () => {
      setTimeout(updateTextSize, 500);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    updateTextSize();
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [minWidth, maxWidth, minTextSize, maxTextSize, containerRef]);

  useEffect(() => {
    if (manualLetterSpacing !== undefined) {
      setLetterSpacing(manualLetterSpacing);
      return;
    }
    const textElement = containerRef.current?.querySelector(
      `#${componentId}-text`
    );
    if (!textElement) return;
    const letterHeight = (textElement as HTMLElement).clientHeight / textArray.length;
    setLetterSpacing(letterHeight);
  }, [textArray, textSize, manualLetterSpacing, componentId, containerRef]);

  return { textSize, letterSpacing };
}

interface PlayingCardProps {
  componentWidth?: string;
  aspectRatio?: string;
  outerRounding?: string;
  innerRounding?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  imageHeightPercentage?: number;
  imageSrc: string;
  imageAlt?: string;
  outlineColor?: string;
  hoverOutlineColor?: string;
  textArray: string[];
  minWidth: number;
  maxWidth: number;
  minTextSize: number;
  maxTextSize: number;
  verticalPadding?: string;
  horizontalPadding?: string;
  manualLetterSpacing?: number;
  componentId?: string;
  onCardClicked: () => void;
  revealCanvas?: boolean;
  textColorTransitionDelay?: string;
  textColorTransitionDuration?: string;
}

const PlayingCard: React.FC<PlayingCardProps> = ({
  componentWidth = "412px",
  aspectRatio = "9/16",
  outerRounding = "24px",
  innerRounding = "16px",
  backgroundColor = "#FFF",
  foregroundColor = "#000",
  imageHeightPercentage = 70,
  imageSrc,
  imageAlt = "",
  outlineColor = "#E879F9",
  hoverOutlineColor = "#6366F1",
  textArray,
  minWidth,
  maxWidth,
  minTextSize,
  maxTextSize,
  verticalPadding = "20px",
  horizontalPadding = "20px",
  manualLetterSpacing,
  componentId = "card-1",
  onCardClicked,
  revealCanvas = false,
  textColorTransitionDelay = "1s",
  textColorTransitionDuration = "2s",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Use the concise hook for text layout
  const { textSize, letterSpacing } = useDynamicTextLayout(
    containerRef,
    textArray,
    minWidth,
    maxWidth,
    minTextSize,
    maxTextSize,
    manualLetterSpacing,
    componentId
  );

  // Style for text color transition
  const textTransition = `color ${textColorTransitionDuration} ease-in-out ${textColorTransitionDelay}`;

  // Border color logic for revealCanvas
  const borderColor = revealCanvas ? "#2f2f2f" : outlineColor;
  const borderHoverColor = revealCanvas ? "#3a3a3a" : hoverOutlineColor;
  // Card background logic for revealCanvas
  const cardBg = revealCanvas ? "#000" : backgroundColor;

  return (
    <div
      ref={containerRef}
      style={{
        maxWidth: componentWidth,
        width: "100%",
      }}
      data-component-id={componentId}
      onClick={onCardClicked}
    >
      <div
        style={{
          borderRadius: outerRounding,
          padding: "1px",
          background: isHovered ? borderHoverColor : borderColor,
          display: "inline-block",
          width: "100%",
          aspectRatio: aspectRatio,
          transition: "background 2s ease-in-out 0.7s",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            backgroundColor: cardBg,
            padding: `${verticalPadding} ${horizontalPadding}`,
            borderRadius: innerRounding,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            color: foregroundColor,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {revealCanvas && (
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="absolute inset-0"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={4}
              replaceBackground
            />
          )}
          {revealCanvas && (
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          )}
          {/* Main Text */}
          <div
            id={`${componentId}-text`}
            style={{
              position: "absolute",
              top: verticalPadding,
              left: horizontalPadding,
              display: "flex",
              flexDirection: "column",
              zIndex: 2,
              color: isHovered ? "#f12b30" : "#3662f4",
              fontWeight: "bold",
              fontSize: `${textSize}px`,
              transition: textTransition,
            }}
          >
            {textArray.map((letter, index) => (
              <div
                key={`${componentId}-letter-${index}`}
                style={{
                  transform:
                    letterSpacing < 0 && index > 0
                      ? `translateY(${letterSpacing * index}px)`
                      : "none",
                  marginBottom: letterSpacing >= 0 ? `${Math.abs(letterSpacing)}px` : "0",
                  letterSpacing: `${letterSpacing}px`,
                }}
              >
                {letter}
              </div>
            ))}
          </div>
          {/* Mirrored Text */}
          <div
            id={`${componentId}-mirror`}
            style={{
              position: "absolute",
              bottom: verticalPadding,
              right: horizontalPadding,
              display: "flex",
              flexDirection: "column",
              transform: "scale(-1)",
              zIndex: 2,
              color: isHovered ? "#f12b30" : "#3662f4",
              fontWeight: "bold",
              fontSize: `${textSize}px`,
              transition: textTransition,
            }}
          >
            {textArray.map((letter, index) => (
              <div
                key={`${componentId}-mirror-letter-${index}`}
                style={{
                  transform:
                    letterSpacing < 0 && index > 0
                      ? `translateY(${letterSpacing * index}px)`
                      : "none",
                  marginBottom: letterSpacing >= 0 ? `${Math.abs(letterSpacing)}px` : "0",
                  letterSpacing: `${letterSpacing}px`,
                }}
              >
                {letter}
              </div>
            ))}
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                height: `${imageHeightPercentage}%`,
                width: "auto",
                aspectRatio: "1/1",
              }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                priority
                sizes={`${componentWidth} ${aspectRatio.replace("/", " ")}`}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingCard;
