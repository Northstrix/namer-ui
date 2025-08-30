"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

export interface Tag {
  name: string;
  textColor: string;
  backgroundColor: string;
  rounding?: number;
  alignment?: "left" | "center" | "right";
  tagHoverBrightness?: number;
  direction?: "ltr" | "rtl" | "auto";
}

export interface InflectedCardProps {
  id: string;
  image?: string;
  title: string;
  description: string;
  tags?: Tag[];
  parentBackgroundColor: string;

  onClick?: (target: string, id: string) => void;
  onHover?: (target: string, id: string, event: "enter" | "leave") => void;

  cardRounding?: number;

  fontSizes?: {
    title?: string;
    description?: string;
    tags?: string;
    price?: string;
  };
  colors?: {
    title?: string;
    description?: string;
  };

  // Margins
  titleMarginTop?: string;
  titleMarginBottom?: string;
  descriptionMarginBottom?: string;
  tagsMarginBottom?: string;

  buttonIcon: React.ReactElement;
  buttonIconSize?: number;
  buttonIconColor?: string;
  buttonIconHoverColor?: string;
  buttonBackgroundColor?: string;
  buttonBackgroundHoverColor?: string;

  imageHoverZoom?: number;
  mirrored?: boolean;

  titleAlignment?: "left" | "center" | "right";
  descriptionAlignment?: "left" | "center" | "right";
  tagsAlignment?: "left" | "center" | "right";

  maxWidth?: string;

  // Price handling
  price?: string;
  oldPrice?: string;
  swapPriceOrder?: boolean;
  priceTagTextColor?: string;
  oldPriceTextColor?: string;
  priceTagRounding?: string;
  priceTagBackgroundColor?: string;

  // Clamp lines
  titleLineClamp?: number;
  descriptionLineClamp?: number;

  // Image sizing
  imageContainerHeight?: string;
  useAspectRatio?: boolean;
  aspectRatio?: string;
  mediaNode?: React.ReactNode;
}

/* brighten/darken helper */
const adjustBrightness = (hex: string, amount: number) => {
  try {
    let col = hex.replace("#", "");
    if (col.length === 3) col = col.split("").map(c => c + c).join("");
    const num = parseInt(col, 16);
    let r = (num >> 16) + Math.round(255 * amount);
    let g = ((num >> 8) & 0x00ff) + Math.round(255 * amount);
    let b = (num & 0x0000ff) + Math.round(255 * amount);
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
    return `rgb(${r}, ${g}, ${b})`;
  } catch {
    return hex;
  }
};

const InflectedCard: React.FC<InflectedCardProps> = ({
  id,
  image,
  title,
  description,
  tags = [],
  parentBackgroundColor,
  onClick,
  onHover,

  cardRounding = 20,
  fontSizes = {},
  colors = {},

  titleMarginTop = "0",
  titleMarginBottom = "0.5rem",
  descriptionMarginBottom = "1.125rem",
  tagsMarginBottom = "0",

  buttonIcon,
  buttonIconSize = 24,
  buttonIconColor = "#fff",
  buttonIconHoverColor = "#fff",
  buttonBackgroundColor = "#282828",
  buttonBackgroundHoverColor = "#484848",

  imageHoverZoom = 1.1,
  mirrored = false,

  titleAlignment = "left",
  descriptionAlignment = "left",
  tagsAlignment = "left",

  maxWidth = "100%",

  price,
  oldPrice,
  swapPriceOrder = false,
  priceTagTextColor = "#ffffff",
  oldPriceTextColor = "#c1c1c7",
  priceTagRounding = "5px",
  priceTagBackgroundColor = "rgba(0,0,0,0.7)",

  titleLineClamp,
  descriptionLineClamp,

  imageContainerHeight = "18.75rem",
  useAspectRatio = false,
  aspectRatio = "16/9",
  mediaNode,
}) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [hoveredTagIndex, setHoveredTagIndex] = useState<number | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const isRTL = (text: string) =>
    /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);

  // Mirror adjustments
  const effectiveTagsAlignment = mirrored
    ? tagsAlignment === "left"
      ? "right"
      : tagsAlignment === "right"
        ? "left"
        : tagsAlignment
    : tagsAlignment;
  const tagsToRender = mirrored ? [...tags].reverse() : tags;

  const showPriceFirst = mirrored ? !swapPriceOrder : swapPriceOrder;

  return (
    <div
      className="inflected-card"
      style={
        {
          "--card-rounding": `${cardRounding}px`,
          maxWidth,
          "--parent-bg": parentBackgroundColor,
          direction:"ltr",
          transform: mirrored ? "scaleX(-1)" : "none",
        } as React.CSSProperties
      }
      onClick={() => onClick?.("card", id)}
      onMouseEnter={() => onHover?.("card", id, "enter")}
      onMouseLeave={() => onHover?.("card", id, "leave")}
    >
      <div
        className="inflected-cardInner"
        style={{
          aspectRatio: useAspectRatio ? aspectRatio : undefined,
          height: useAspectRatio ? undefined : imageContainerHeight,
        }}
      >
        <div className="inflected-box">
          {/* Image container */}
          <div
            className="inflected-imgBox"
            style={{
              borderRadius: cardRounding,
              aspectRatio: useAspectRatio ? aspectRatio : undefined,
              height: "100%",
              cursor: "pointer",
            }}
            ref={imageRef}
            onMouseEnter={() => {
              setIsImageHovered(true);
              onHover?.("image", id, "enter");
            }}
            onMouseLeave={() => {
              setIsImageHovered(false);
              onHover?.("image", id, "leave");
            }}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.("image", id);
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                transform: isImageHovered ? `scale(${imageHoverZoom})` : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            >
              {mediaNode ? (
                mediaNode
              ) : (
                <Image
                  src={image || ""}
                  alt={title}
                  fill
                  style={{
                    objectFit: "cover",
                    transform: mirrored ? "scaleX(-1)" : "none",
                  }}
                />
              )}
            </div>

            {/* Price tag (part of image) */}
            {price && (
              <div
                className="inflected-priceTag"
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  backgroundColor: priceTagBackgroundColor,
                  padding: "9px 15px",
                  borderRadius: priceTagRounding,
                  fontSize: fontSizes.price || "1rem",
                  transform: mirrored ? "scaleX(-1)" : "none",
                }}
              >
                {showPriceFirst ? (
                  <>
                    <span style={{ fontWeight: "bold", color: priceTagTextColor }}>
                      {price}
                    </span>
                    {oldPrice && (
                      <span
                        style={{
                          marginLeft: 8,
                          fontWeight: "bold",
                          color: oldPriceTextColor,
                          textDecoration: "line-through",
                        }}
                      >
                        {oldPrice}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    {oldPrice && (
                      <span
                        style={{
                          marginRight: 8,
                          fontWeight: "bold",
                          color: oldPriceTextColor,
                          textDecoration: "line-through",
                        }}
                      >
                        {oldPrice}
                      </span>
                    )}
                    <span style={{ fontWeight: "bold", color: priceTagTextColor }}>
                      {price}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Floating button */}
          <div
            className="inflected-icon"
            onMouseEnter={() => {
              setIsButtonHovered(true);
              onHover?.("button", id, "enter");
            }}
            onMouseLeave={() => {
              setIsButtonHovered(false);
              onHover?.("button", id, "leave");
            }}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.("button", id);
            }}
          >
            <div
              className="inflected-iconBox"
              style={
                {
                  "--button-bg": buttonBackgroundColor,
                  "--button-hover-bg": buttonBackgroundHoverColor,
                } as React.CSSProperties
              }
            >
              {/* wrapper span to animate icon color */}
              <span
                className="inflected-iconInner"
                style={{ color: isButtonHovered ? buttonIconHoverColor : buttonIconColor }}
              >
                {React.cloneElement(buttonIcon, {
                  size: buttonIconSize,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className="inflected-content"
        style={{ transform: mirrored ? "scaleX(-1)" : "none" }}
      >
        <h3
          style={{
            fontSize: fontSizes.title,
            color: colors.title || "#f7f7ff",
            fontWeight: "bold",
            direction: isRTL(title) ? "rtl" : "ltr",
            textAlign: titleAlignment,
            marginTop: titleMarginTop,
            marginBottom: titleMarginBottom,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical" as any,
            overflow: "hidden",
            WebkitLineClamp: titleLineClamp,
          }}
          onMouseEnter={() => onHover?.("title", id, "enter")}
          onMouseLeave={() => onHover?.("title", id, "leave")}
          onClick={(e) => {
            e.stopPropagation();
            onClick?.("title", id);
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: fontSizes.description,
            color: colors.description || "#c7c7cf",
            direction: isRTL(description) ? "rtl" : "ltr",
            textAlign: descriptionAlignment,
            marginBottom: descriptionMarginBottom,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical" as any,
            overflow: "hidden",
            WebkitLineClamp: descriptionLineClamp,
          }}
          onMouseEnter={() => onHover?.("description", id, "enter")}
          onMouseLeave={() => onHover?.("description", id, "leave")}
          onClick={(e) => {
            e.stopPropagation();
            onClick?.("description", id);
          }}
        >
          {description}
        </p>
        <ul
          style={{
            marginBottom: tagsMarginBottom,
            display: "flex",
            flexWrap: "wrap",
            gap: "0.625rem",
            justifyContent: effectiveTagsAlignment,
          }}
        >
          {tagsToRender.map((tag, idx) => {
            const isHovered = hoveredTagIndex === idx;
            const hoverAmt =
              tag.tagHoverBrightness !== undefined ? tag.tagHoverBrightness : -0.2;
            const bg = isHovered
              ? adjustBrightness(tag.backgroundColor, hoverAmt)
              : tag.backgroundColor;
            return (
              <li
                key={idx}
                dir={tag.direction || "auto"}
                style={{
                  background: bg,
                  color: tag.textColor,
                  borderRadius: `${tag.rounding || 5}px`,
                  fontWeight: 700,
                  fontSize: fontSizes.tags,
                  padding: "0.375rem 0.625rem",
                  cursor: "default",
                  transition: "all 0.25s ease-in-out",
                }}
                onMouseEnter={() => {
                  setHoveredTagIndex(idx);
                  onHover?.(`tag-${idx}`, id, "enter");
                }}
                onMouseLeave={() => {
                  setHoveredTagIndex(null);
                  onHover?.(`tag-${idx}`, id, "leave");
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.(`tag-${idx}`, id);
                }}
              >
                {tag.name}
              </li>
            );
          })}
        </ul>
      </div>

      <style jsx>{`
        .inflected-card {
          position: relative;
          border-radius: var(--card-rounding);
          overflow: hidden;
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
          height: 100%;
          position: relative;
        }
        .inflected-imgBox {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .inflected-icon {
          position: absolute;
          bottom: -0.375rem;
          right: -0.375rem;
          width: 6rem;
          height: 6rem;
          background: var(--parent-bg);
          border-top-left-radius: 50%;
        }
        .inflected-icon::before,
        .inflected-icon::after {
          position: absolute;
          content: "";
          background: transparent;
          width: 1.25rem;
          height: 1.25rem;
          border-bottom-right-radius: 1.25rem;
          box-shadow: 0.313rem 0.313rem 0 0.313rem var(--parent-bg);
        }
        .inflected-icon::before {
          bottom: 0.375rem;
          left: -1.25rem;
        }
        .inflected-icon::after {
          top: -1.25rem;
          right: 0.375rem;
        }
        .inflected-iconBox {
          position: absolute;
          inset: 0.625rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background-color 0.3s ease, transform 0.3s ease;
          cursor: pointer;
          background-color: var(--button-bg);
        }
        .inflected-iconBox:hover {
          background: var(--button-hover-bg);
          transform: scale(1.1);
        }
        .inflected-iconInner {
          display: flex;
          transition: color 0.3s ease;
        }
        .inflected-content {
          padding: 0.938rem 0.625rem;
        }
        .inflected-content ul {
          list-style: none;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default InflectedCard;
