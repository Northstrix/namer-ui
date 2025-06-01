"use client";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
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
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

export function CircularTestimonials({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) {
  // Default colors
  const colorName = colors.name ?? "#000";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorTestimony = colors.testimony ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";

  // Default font sizes
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const designationRef = useRef<HTMLParagraphElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  const nameStyle = useMemo(
    () => ({ color: colorName, fontSize: fontSizeName }),
    [colorName, fontSizeName]
  );
  const designationStyle = useMemo(
    () => ({ color: colorDesignation, fontSize: fontSizeDesignation }),
    [colorDesignation, fontSizeDesignation]
  );
  const quoteStyle = useMemo(
    () => ({ color: colorTestimony, fontSize: fontSizeQuote }),
    [colorTestimony, fontSizeQuote]
  );

  const prevArrowStyle = useMemo(
    () => ({
      backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
    }),
    [hoverPrev, colorArrowBg, colorArrowHoverBg]
  );
  const nextArrowStyle = useMemo(
    () => ({
      backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
    }),
    [hoverNext, colorArrowBg, colorArrowHoverBg]
  );

  const calculateGap = useCallback((width: number) => {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
    return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
  }, []);

  const updateTestimonial = useCallback(
    (direction: number) => {
      setActiveIndex((prev) => (prev + direction + testimonialsLength) % testimonialsLength);
    },
    [testimonialsLength]
  );

  // GSAP animation for images
  const animateImages = useCallback(() => {
    if (!imageContainerRef.current) return;
    const containerWidth = imageContainerRef.current.offsetWidth;
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;

    testimonials.forEach((_, index) => {
      const img = imageContainerRef.current!.querySelector(
        `[data-index="${index}"]`
      ) as HTMLElement;
      if (!img) return;

      const offset = (index - activeIndex + testimonialsLength) % testimonialsLength;
      const zIndex = testimonialsLength - Math.abs(offset);
      const opacity = index === activeIndex ? 1 : 0.7;
      const scale = index === activeIndex ? 1 : 0.85;

      let translateX, translateY, rotateY;
      if (offset === 0) {
        translateX = "0%";
        translateY = "0%";
        rotateY = 0;
      } else if (offset === 1 || offset === -2) {
        translateX = "20%";
        translateY = `-${(maxStickUp / img.offsetHeight) * 100}%`;
        rotateY = -15;
      } else {
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
      });
    });
  }, [activeIndex, calculateGap, testimonials, testimonialsLength]);

  // GSAP animation for name and designation
  const animateNameAndDesignation = useCallback(() => {
    if (!nameRef.current || !designationRef.current) return;
    gsap.to([nameRef.current, designationRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        if (nameRef.current) nameRef.current.textContent = activeTestimonial.name;
        if (designationRef.current)
          designationRef.current.textContent = activeTestimonial.designation;
        gsap.to([nameRef.current, designationRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });
  }, [activeTestimonial]);

  // Handle next and prev with animation
  const handleNext = useCallback(() => {
    updateTestimonial(1);
    stopAutoplay();
  }, [updateTestimonial]);

  const handlePrev = useCallback(() => {
    updateTestimonial(-1);
    stopAutoplay();
  }, [updateTestimonial]);

  const stopAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, []);

  useEffect(() => {
    if (nameRef.current) nameRef.current.textContent = activeTestimonial.name;
    if (designationRef.current)
      designationRef.current.textContent = activeTestimonial.designation;

    // Animate images and name/designation
    animateImages();
    animateNameAndDesignation();

    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => updateTestimonial(1), 5000);
    }

    const handleResize = () => animateImages();
    window.addEventListener("resize", handleResize);

    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
      window.removeEventListener("resize", handleResize);
      gsap.killTweensOf(".testimonial-image");
    };
  }, [activeIndex, activeTestimonial, animateImages, animateNameAndDesignation, autoplay, updateTestimonial]);

  return (
    <div className="testimonial-container">
      <div className="testimonial-grid">
        <div className="image-container" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              className="testimonial-image"
              data-index={index}
              style={{
                opacity: index === activeIndex ? 1 : 0.7,
                zIndex: testimonialsLength - Math.abs(index - activeIndex),
              }}
            />
          ))}
        </div>
        <div className="testimonial-content">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="name" ref={nameRef} style={nameStyle}></h3>
            <p className="designation" ref={designationRef} style={designationStyle}></p>
            <motion.p className="quote" style={quoteStyle}>
              {activeTestimonial.quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="arrow-buttons">
            <button
              className="arrow-button prev-button"
              onClick={handlePrev}
              style={prevArrowStyle}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
            >
              <ArrowLeft size={44} color={colorArrowFg} />
            </button>
            <button
              className="arrow-button next-button"
              onClick={handleNext}
              style={nextArrowStyle}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
            >
              <ArrowRight size={44} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .testimonial-container {
          width: 100%;
          max-width: 56rem;
          padding: 2rem;
        }
        .testimonial-grid {
          display: grid;
          gap: 5rem;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 24rem;
          perspective: 1000px;
        }
        .testimonial-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: opacity 0.3s ease;
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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
          gap: 1.5rem;
          padding-top: 3rem;
        }
        .arrow-button {
          width: 2.7rem;
          height: 2.7rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s;
          border: none;
        }
        .word {
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
