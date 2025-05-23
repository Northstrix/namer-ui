"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface SecondPlayingCardProps {
  componentWidth?: string;
  aspectRatio?: string;
  outerRounding?: string;
  innerRounding?: string;
  backgroundColor?: string;
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
}

const SecondPlayingCard: React.FC<SecondPlayingCardProps> = ({
  componentWidth = "412px",
  aspectRatio = "3/4",
  outerRounding = "18px",
  innerRounding = "18px",
  backgroundColor = "#fff",
  imageHeightPercentage = 70,
  imageSrc,
  imageAlt = "",
  outlineColor = "#ddd",
  hoverOutlineColor = "#aaa",
  textArray,
  minWidth,
  maxWidth,
  minTextSize,
  maxTextSize,
  verticalPadding = "20px",
  horizontalPadding = "20px",
  manualLetterSpacing,
  componentId = "card-2",
  onCardClicked,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [textSize, setTextSize] = useState(maxTextSize);
  const [letterSpacing, setLetterSpacing] = useState(manualLetterSpacing ?? 0);
  const [isHovered, setIsHovered] = useState(false);

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
  }, [minWidth, maxWidth, minTextSize, maxTextSize]);

  useEffect(() => {
    if (manualLetterSpacing !== undefined) {
      setLetterSpacing(manualLetterSpacing);
      return;
    }
    const textElement = containerRef.current?.querySelector(
      `#${componentId}-text`
    );
    if (!textElement) return;
    const letterWidth = (textElement as HTMLElement).clientWidth / textArray.length;
    setLetterSpacing(letterWidth);
  }, [textArray, textSize, manualLetterSpacing, componentId]);

  // Color logic
  const cardBg = isHovered ? "#111014" : backgroundColor;
  const textColor = isHovered ? "#fff" : "#161616";
  const borderColor = isHovered ? hoverOutlineColor : outlineColor;

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
          background: borderColor,
          display: "inline-block",
          width: "100%",
          aspectRatio: aspectRatio,
          transition: "background 0.3s ease-in-out",
          cursor: "pointer",
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
            position: "relative",
            overflow: "hidden",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          {/* Main Text - Top Left */}
          <div
            id={`${componentId}-text`}
            style={{
              position: "absolute",
              top: verticalPadding,
              left: horizontalPadding,
              display: "flex",
              justifyContent: "flex-start",
              zIndex: 2,
              color: textColor,
              fontWeight: "bold",
              fontSize: `${textSize}px`,
              flexDirection: "row",
              transition: "color 0.3s ease-in-out",
            }}
          >
            {textArray.map((letter, index) => (
              <div
                key={`${componentId}-letter-${index}`}
                style={{
                  transform:
                    letterSpacing < 0 && index > 0
                      ? `translateX(${letterSpacing * index}px)`
                      : "none",
                  marginLeft: letterSpacing >= 0 ? `${Math.abs(letterSpacing)}px` : "0",
                  letterSpacing: `${letterSpacing}px`,
                }}
              >
                {letter}
              </div>
            ))}
          </div>
          {/* Mirrored Text - Bottom Right */}
          <div
            id={`${componentId}-mirror`}
            style={{
              position: "absolute",
              bottom: verticalPadding,
              right: horizontalPadding,
              display: "flex",
              justifyContent: "flex-start",
              zIndex: 2,
              color: textColor,
              fontWeight: "bold",
              fontSize: `${textSize}px`,
              flexDirection: "row",
              transform: "scale(-1)",
              transition: "color 0.3s ease-in-out",
            }}
          >
            {textArray.map((letter, index) => (
              <div
                key={`${componentId}-mirror-letter-${index}`}
                style={{
                  transform:
                    letterSpacing < 0 && index > 0
                      ? `translateX(${letterSpacing * index}px)`
                      : "none",
                  marginLeft: letterSpacing >= 0 ? `${Math.abs(letterSpacing)}px` : "0",
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

export default SecondPlayingCard;
