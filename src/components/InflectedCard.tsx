"use client";
import React, { useState, useRef } from "react";

export interface InflectedCardProps {
  id: string;
  title: string;
  description: string;
  parentBackgroundColor: string;
  url?: string;
  onClick?: (info: { part: string; extra?: any }, id: string) => void;
  onHover?: (info: { part: string; extra?: any; isHovered: boolean }, id: string) => void;
  cardRounding?: number;
  fontSizes?: { title?: string; description?: string; tags?: string; price?: string };
  margins?: { title?: string; description?: string; tags?: string };
  buttonIcon: React.ElementType<{ size?: number; color?: string }>;
  buttonIconSize?: number;
  buttonIconColor?: string;
  buttonIconHoverColor?: string;
  buttonBackgroundColor?: string;
  buttonBackgroundHoverColor?: string;
  imageHoverZoom?: number;
  titleColor?: string;
  descriptionColor?: string;
  mirrored?: boolean;
  titleAlignment?: "left" | "center" | "right";
  descriptionAlignment?: "left" | "center" | "right";
  maxWidth?: string;
  titleLineClamp?: number;
  descriptionLineClamp?: number;
  tagHoverBrightness?: number;
  imageContainerAspectRatio?: string;
  mediaNode?: React.ReactNode;
}

export default function InflectedCard({
  id,
  title,
  description,
  parentBackgroundColor,
  url,
  onClick,
  onHover,
  cardRounding = 20,
  fontSizes = {},
  margins = {},
  buttonIcon: ButtonIcon,
  buttonIconSize = 24,
  buttonIconColor = "#fff",
  buttonIconHoverColor = "#fff",
  buttonBackgroundColor = "#282828",
  buttonBackgroundHoverColor = "#484848",
  imageHoverZoom = 1.1,
  titleColor = "#f7f7ff",
  descriptionColor = "#c7c7cf",
  mirrored = false,
  titleAlignment = "left",
  descriptionAlignment = "left",
  maxWidth = "100%",
  titleLineClamp,
  descriptionLineClamp,
  tagHoverBrightness = 0.8,
  imageContainerAspectRatio = "16 / 10",
  mediaNode
}: InflectedCardProps) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const mirrorStyle: React.CSSProperties = mirrored ? { transform: "scaleX(-1)" } : {};
  const reverseMirrorStyle: React.CSSProperties = mirrored ? { transform: "scaleX(-1)" } : {};

  const isRTL = (text: string) =>
    /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);

  const autoTitleAlign = isRTL(title) ? "right" : titleAlignment;
  const autoDescriptionAlign = isRTL(description) ? "right" : descriptionAlignment;

  const handleMouseEnter = (part: string, extra?: any) => {
    onHover?.({ part, extra, isHovered: true }, id);
  };
  const handleMouseLeave = (part: string, extra?: any) => {
    onHover?.({ part, extra, isHovered: false }, id);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.({ part: "card" }, id);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick?.({ part: "button" }, id);
  };

  return (
    <a
      href={url || "#"}
      className="inflected-card-link"
      style={{ maxWidth }}
      onClick={handleCardClick}
    >
      <div
        className="inflected-card"
        style={
          {
            "--card-rounding": `${cardRounding}px`,
            "--tag-brightness": `brightness(${Math.min(
              Math.max(tagHoverBrightness, 0.1),
              1.9
            ).toFixed(2)})`,
            ...mirrorStyle
          } as React.CSSProperties
        }
      >
        <div
          className="inflected-cardInner"
          style={{ "--parent-bg": parentBackgroundColor } as React.CSSProperties}
        >
          <div className="inflected-box">
            <div
              className="inflected-imgBox"
              style={
                {
                  borderRadius: `${cardRounding}px`,
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                  aspectRatio: imageContainerAspectRatio,
                  ...reverseMirrorStyle
                } as React.CSSProperties
              }
              ref={imageContainerRef}
              onMouseEnter={() => {
                setIsImageHovered(true);
                handleMouseEnter("image");
              }}
              onMouseLeave={() => {
                setIsImageHovered(false);
                handleMouseLeave("image");
              }}
            >
              {/* Media with click capture that stops children */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  transform: isImageHovered
                    ? `scale(${imageHoverZoom})`
                    : "scale(1)",
                  transition: "transform 0.3s ease",
                  willChange: "transform"
                }}
                onClickCapture={(e) => {
                  // Capture so it never reaches child interactive element
                  e.preventDefault();
                  e.stopPropagation();
                  onClick?.({ part: "card" }, id);
                }}
              >
                {mediaNode}
              </div>
            </div>

            <div className="inflected-icon">
              <div
                className="inflected-iconBox"
                style={
                  {
                    "--button-bg": buttonBackgroundColor,
                    "--button-hover-bg": buttonBackgroundHoverColor
                  } as React.CSSProperties
                }
                onMouseEnter={() => {
                  setIsButtonHovered(true);
                  handleMouseEnter("button");
                }}
                onMouseLeave={() => {
                  setIsButtonHovered(false);
                  handleMouseLeave("button");
                }}
                onClick={handleButtonClick}
              >
                {ButtonIcon && (
                  <ButtonIcon
                    size={buttonIconSize}
                    color={
                      isButtonHovered ? buttonIconHoverColor : buttonIconColor
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="inflected-content" style={reverseMirrorStyle}>
          <h3
            style={{
              fontSize: fontSizes.title,
              color: titleColor,
              margin: margins.title,
              fontWeight: "bold",
              direction: isRTL(title) ? "rtl" : "ltr",
              textAlign: autoTitleAlign,
              ...(titleLineClamp
                ? {
                    display: "-webkit-box",
                    WebkitLineClamp: titleLineClamp,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }
                : {})
            }}
            onMouseEnter={() => handleMouseEnter("title")}
            onMouseLeave={() => handleMouseLeave("title")}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: fontSizes.description,
              color: descriptionColor,
              margin: margins.description,
              direction: isRTL(description) ? "rtl" : "ltr",
              textAlign: autoDescriptionAlign,
              ...(descriptionLineClamp
                ? {
                    display: "-webkit-box",
                    WebkitLineClamp: descriptionLineClamp,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }
                : {})
            }}
            onMouseEnter={() => handleMouseEnter("description")}
            onMouseLeave={() => handleMouseLeave("description")}
          >
            {description}
          </p>
        </div>
      </div>

      <style jsx>{`
        .inflected-card-link {
          display: block;
          text-decoration: none;
          cursor: pointer;
          color: inherit;
          position: relative;
        }
        .inflected-card {
          position: relative;
          border-radius: var(--card-rounding);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .inflected-cardInner {
          position: relative;
          width: 100%;
          background: var(--parent-bg);
          border-radius: var(--card-rounding);
          border-bottom-right-radius: 0;
          overflow: hidden;
        }
        .inflected-box {
          width: 100%;
          position: relative;
        }
        .inflected-imgBox {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .inflected-icon {
          position: absolute;
          bottom: -6px;
          right: -6px;
          width: 96px;
          height: 96px;
          background: var(--parent-bg);
          border-top-left-radius: 50%;
          transition: all 0.3s ease;
        }
        .inflected-icon::before,
        .inflected-icon::after {
          position: absolute;
          content: "";
          background: transparent;
          width: 20px;
          height: 20px;
          border-bottom-right-radius: 20px;
          box-shadow: 5px 5px 0 5px var(--parent-bg);
        }
        .inflected-icon::before {
          bottom: 6px;
          left: -20px;
        }
        .inflected-icon::after {
          top: -20px;
          right: 6px;
        }
        .inflected-iconBox {
          position: absolute;
          inset: 10px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          cursor: pointer;
          background-color: var(--button-bg);
        }
        .inflected-iconBox:hover {
          background: var(--button-hover-bg);
          transform: scale(1.1);
        }
        .inflected-content {
          padding: 15px 10px;
        }
        .inflected-content h3,
        .inflected-content p {
          transition: color 0.3s ease;
        }
      `}</style>
    </a>
  );
}
