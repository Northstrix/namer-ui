"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowHoverBackground?: string;
  arrowForeground?: string; // normal foreground
  arrowForegroundHover?: string; // hover foreground
}

interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  autoplayInterval?: number;
  colors?: Colors;
  fontSizes?: FontSizes;
  isRTL?: boolean;
  gap?: string;
  imageWidth?: string;
  imageBorderRadius?: string;
  imageAspectRatio?: string;
  imageContainerTranslateX?: string;
  testimonialTextTranslateY?: string;
  arrowContainerTranslateY?: string;
  imageContainerBorderEnabled?: boolean;
  imageContainerBorderColor?: string;
  imageContainerBorderHoverColor?: string;
  imageContainerBorderWidth?: string;
  imageContainerPerspective?: string;
  arrowBorderRadius?: string;
  arrowIconSize?: number;
  arrowBorderEnabled?: boolean;
  arrowBorderColor?: string;
  arrowBorderHoverColor?: string;
  arrowBorderWidth?: string;
  arrowButtonWidth?: string;
  arrowButtonHeight?: string;
  arrowIconStrokeWidth?: number;
}

export function CircularTestimonials({
  testimonials,
  autoplay = true,
  autoplayInterval = 5000,
  colors = {},
  fontSizes = {},
  isRTL = false,
  gap = "4.7rem",
  imageWidth = "77%",
  imageBorderRadius = "1.5rem",
  imageAspectRatio = "1 / 1",
  imageContainerTranslateX = "76px",
  testimonialTextTranslateY = "56px",
  arrowContainerTranslateY = "99px",
  imageContainerBorderEnabled = false,
  imageContainerBorderColor = "#262626",
  imageContainerBorderHoverColor = "#444",
  imageContainerBorderWidth = "1px",
  imageContainerPerspective = "1000px",
  arrowBorderRadius = "50%",
  arrowIconSize = 26,
  arrowBorderEnabled = false,
  arrowBorderColor = "#262626",
  arrowBorderHoverColor = "#00A7FA",
  arrowBorderWidth = "1px",
  arrowButtonWidth = "44px",
  arrowButtonHeight = "44px",
  arrowIconStrokeWidth = 2,
}: CircularTestimonialsProps) {
  // Colors & Fonts
  const colorName = colors.name ?? "#000";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorTestimony = colors.testimony ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
  const colorArrowFg = colors.arrowForeground ?? "#fafafa";
  const colorArrowFgHover = colors.arrowForegroundHover ?? "#000";

  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  // Autoplay active state controls interval toggle
  const [isAutoplayActive, setIsAutoplayActive] = useState(autoplay);

  // Refs
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const designationRef = useRef<HTMLParagraphElement>(null);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Derived data
  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  // Styles
  const nameStyle = useMemo(() => ({ color: colorName, fontSize: fontSizeName }), [colorName, fontSizeName]);
  const designationStyle = useMemo(() => ({ color: colorDesignation, fontSize: fontSizeDesignation }), [colorDesignation, fontSizeDesignation]);
  const quoteStyle = useMemo(() => ({ color: colorTestimony, fontSize: fontSizeQuote }), [colorTestimony, fontSizeQuote]);
  const [hoveredImages, setHoveredImages] = useState<boolean[]>(
    new Array(testimonials.length).fill(false)
  );

  const commonArrowStyles = {
    borderStyle: arrowBorderEnabled ? "solid" : "none",
    borderWidth: arrowBorderEnabled ? arrowBorderWidth : undefined,
    borderColor: arrowBorderEnabled ? (hoverPrev ? arrowBorderHoverColor : arrowBorderColor) : undefined,
    transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
    width: arrowButtonWidth,
    height: arrowButtonHeight,
    borderRadius: arrowBorderRadius,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const prevArrowStyle = useMemo(() => ({
    ...commonArrowStyles,
    backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
    borderColor: arrowBorderEnabled ? (hoverPrev ? arrowBorderHoverColor : arrowBorderColor) : undefined,
  }), [hoverPrev, colorArrowBg, colorArrowHoverBg, arrowBorderEnabled, arrowBorderColor, arrowBorderHoverColor, arrowBorderWidth, arrowButtonWidth, arrowButtonHeight]);

  const nextArrowStyle = useMemo(() => ({
    ...commonArrowStyles,
    backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
    borderColor: arrowBorderEnabled ? (hoverNext ? arrowBorderHoverColor : arrowBorderColor) : undefined,
  }), [hoverNext, colorArrowBg, colorArrowHoverBg, arrowBorderEnabled, arrowBorderColor, arrowBorderHoverColor, arrowBorderWidth, arrowButtonWidth, arrowButtonHeight]);

  // Compute gap base on width to keep layout consistent
  const calculateGap = useCallback((width: number) => {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
    return minGap + ((maxGap - minGap) * (width - minWidth)) / (maxWidth - minWidth);
  }, []);

  // Update active testimonial index & direction
  const updateTestimonial = useCallback((dir: number) => {
    setDirection(dir);
    setActiveIndex(prev => (prev + dir + testimonialsLength) % testimonialsLength);
  }, [testimonialsLength]);

  // Animate Images with GSAP
  const animateImages = useCallback(() => {
    if (!imageContainerRef.current) return;

    const containerWidth = imageContainerRef.current.offsetWidth;
    const gapValue = calculateGap(containerWidth);
    const maxStickUp = gapValue * 0.8;

    testimonials.forEach((_, index) => {
      const img = imageContainerRef.current!.querySelector(`[data-index="${index}"]`) as HTMLElement;
      if (!img) return;

      let offset = index - activeIndex;
      if (isRTL) offset = -offset;
      if (offset > testimonialsLength / 2) offset -= testimonialsLength;
      if (offset < -testimonialsLength / 2) offset += testimonialsLength;

      const zIndex = testimonialsLength - Math.abs(offset);
      const opacity = offset === 0 ? 1 : 0.7;
      const scale = offset === 0 ? 1 : 0.85;

      let translateX = "0%";
      let translateY = "0%";
      let rotateY = 0;

      if (offset > 0) {
        translateX = "20%";
        translateY = `-${(maxStickUp / img.offsetHeight) * 100}%`;
        rotateY = -15;
      } else if (offset < 0) {
        translateX = "-20%";
        translateY = `-${(maxStickUp / img.offsetHeight) * 100}%`;
        rotateY = 15;
      }

      gsap.to(img, {
        zIndex,
        opacity,
        scale,
        x: translateX,
        y: translateY,
        rotateY,
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  }, [activeIndex, calculateGap, testimonials, testimonialsLength, isRTL]);

  // Helper: wrap lines for animation effect
  const wrapLines = (element: HTMLElement, text: string) => {
    element.innerHTML = "";
    const parent = document.createElement("div");
    parent.classList.add("split-parent");
    const child = document.createElement("div");
    child.classList.add("split-child");
    child.textContent = text;
    parent.appendChild(child);
    element.appendChild(parent);
    return child;
  };

  // Animate name and designation on testimonial change
  const animateNameAndDesignation = useCallback(() => {
    if (!nameRef.current || !designationRef.current) return;

    const nameChild = wrapLines(nameRef.current, activeTestimonial.name);
    const designationChild = wrapLines(designationRef.current, activeTestimonial.designation);

    const fromY = direction === 1 ? -100 : 100;

    gsap.fromTo(nameChild, { yPercent: fromY, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power4.out" });
    gsap.fromTo(designationChild, { yPercent: fromY, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.05 });
  }, [activeTestimonial, direction]);

  // Stop autoplay helper
  const stopAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
    setIsAutoplayActive(false);
  }, []);

  // Navigation handlers, stop autoplay on manual action
  const handleNext = useCallback(() => {
    updateTestimonial(1);
    stopAutoplay();
  }, [updateTestimonial, stopAutoplay]);

  const handlePrev = useCallback(() => {
    updateTestimonial(-1);
    stopAutoplay();
  }, [updateTestimonial, stopAutoplay]);

  // Animate on active index changes
  useEffect(() => {
    animateImages();
    animateNameAndDesignation();
  }, [activeIndex, animateImages, animateNameAndDesignation]);

  // Manage autoplay timer and window resize animations
  useEffect(() => {
    if (isAutoplayActive) {
      autoplayIntervalRef.current = setInterval(() => {
        // Use handleNext so autoplay animations are same as manual clicks
        updateTestimonial(1);
      }, autoplayInterval);
    }

    const handleResize = () => {
      animateImages();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
        autoplayIntervalRef.current = null;
      }
      window.removeEventListener("resize", handleResize);
      gsap.killTweensOf("[data-index]");
    };
  }, [isAutoplayActive, autoplayInterval, updateTestimonial, animateImages]);

  // Calculate container translateX based on RTL setting
  const imageContainerTransform = useMemo(() => {
    const match = imageContainerTranslateX.match(/-?\d+(\.\d+)?/);
    if (!match) return imageContainerTranslateX;
    const num = parseFloat(match[0]);
    const unit = imageContainerTranslateX.replace(match[0], "");
    const final = isRTL ? -num : num;
    return `${final}${unit}`;
  }, [isRTL, imageContainerTranslateX]);

  const handleImageMouseEnter = (index: number) => {
    setHoveredImages(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const handleImageMouseLeave = (index: number) => {
    setHoveredImages(prev => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  return (
    <div style={{ direction: isRTL ? "rtl" : "ltr" }}>
      <div className="testimonial-container">
        <div className="testimonial-grid">
          <div className="image-container" ref={imageContainerRef} style={{ transform: `translateX(${imageContainerTransform})` }}>
            {testimonials.map((testimonial, index) => {
              const isHovered = hoveredImages[index];
              const borderActive = imageContainerBorderEnabled;
              const borderColor = borderActive
                ? isHovered
                  ? imageContainerBorderHoverColor
                  : imageContainerBorderColor
                : "transparent";

              return (
                <img
                  key={testimonial.id}
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="testimonial-image"
                  data-index={index}
                  onMouseEnter={() => handleImageMouseEnter(index)}
                  onMouseLeave={() => handleImageMouseLeave(index)}
                  style={{
                    opacity: index === activeIndex ? 1 : 0.7,
                    zIndex: testimonialsLength - Math.abs(index - activeIndex),
                    borderStyle: borderActive ? "solid" : "none",
                    borderWidth: borderActive ? imageContainerBorderWidth : undefined,
                    borderColor,
                    transition: "border-color 0.3s ease, opacity 0.3s ease",
                  }}
                  loading="lazy"
                  decoding="async"
                />
              );
            })}
          </div>
          <div className="testimonial-content" style={{ transform: `translateY(${testimonialTextTranslateY})` }}>
            <div>
              <h3 className="name" ref={nameRef} style={nameStyle}></h3>
              <p className="designation" ref={designationRef} style={designationStyle}></p>
              <motion.p key={activeTestimonial.id} className="quote" style={quoteStyle}>
                {activeTestimonial.quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </div>
            <div className="arrow-buttons" style={{ top: arrowContainerTranslateY, position: "absolute" }}>
              {isRTL ? (
                <>
                  <button
                    className="arrow-button prev-button"
                    onClick={handlePrev}
                    style={prevArrowStyle}
                    onMouseEnter={() => setHoverPrev(true)}
                    onMouseLeave={() => setHoverPrev(false)}
                  >
                    <ArrowRight
                      size={arrowIconSize}
                      color={hoverPrev ? colorArrowFgHover : colorArrowFg}
                      strokeWidth={arrowIconStrokeWidth}
                    />
                  </button>

                  <button
                    className="arrow-button next-button"
                    onClick={handleNext}
                    style={nextArrowStyle}
                    onMouseEnter={() => setHoverNext(true)}
                    onMouseLeave={() => setHoverNext(false)}
                  >
                    <ArrowLeft
                      size={arrowIconSize}
                      color={hoverNext ? colorArrowFgHover : colorArrowFg}
                      strokeWidth={arrowIconStrokeWidth}
                    />
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="arrow-button prev-button"
                    onClick={handlePrev}
                    style={prevArrowStyle}
                    onMouseEnter={() => setHoverPrev(true)}
                    onMouseLeave={() => setHoverPrev(false)}
                  >
                    <ArrowLeft
                      size={arrowIconSize}
                      color={hoverPrev ? colorArrowFgHover : colorArrowFg}
                      strokeWidth={arrowIconStrokeWidth}
                    />
                  </button>

                  <button
                    className="arrow-button next-button"
                    onClick={handleNext}
                    style={nextArrowStyle}
                    onMouseEnter={() => setHoverNext(true)}
                    onMouseLeave={() => setHoverNext(false)}
                  >
                    <ArrowRight
                      size={arrowIconSize}
                      color={hoverNext ? colorArrowFgHover : colorArrowFg}
                      strokeWidth={arrowIconStrokeWidth}
                    />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .testimonial-container {
          width: 100%;
          min-height: 336px;
        }
        .testimonial-grid {
          display: grid;
          gap: ${gap};
        }
        .image-container {
          position: relative;
          perspective: ${imageContainerPerspective};
        }
        .testimonial-image {
          position: absolute;
          width: ${imageWidth};
          height: auto;
          aspect-ratio: ${imageAspectRatio};
          object-fit: cover;
          border-radius: ${imageBorderRadius};
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: opacity 0.3s ease;
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }
        .name {
          font-weight: bold;
          margin-bottom: 0.25rem;
        }
        .designation {
          margin-bottom: 2rem;
        }
        .quote {
          line-height: 1.75;
        }
        .arrow-buttons {
          display: flex;
          gap: 16px;
          padding-top: 3rem;
        }
        .arrow-button {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
          border: none;
        }
        .split-parent {
          overflow: hidden;
        }
        .split-child {
          display: inline-block;
        }
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr 1fr;
          }
          .arrow-buttons {
            padding-top: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default CircularTestimonials;