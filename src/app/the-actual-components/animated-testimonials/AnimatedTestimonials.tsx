"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import gsap from "gsap";

type Testimonial = { quote: string; name: string; designation: string; src: string };

type AnimatedTestimonialsProps = {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: { name?: string; position?: string; testimony?: string; arrowBackground?: string; arrowForeground?: string; arrowHoverForeground?: string };
  fontSizes?: { name?: string; position?: string; testimony?: string };
  spacing?: { top?: string; bottom?: string; lineHeight?: string; nameTop?: string; nameBottom?: string; positionTop?: string; positionBottom?: string; testimonyTop?: string; testimonyBottom?: string };
  desktopVersionBottomThreshold?: number;
  maxImageWidth?: number;
  imageWidthPercentage?: number;
  mobile?: { fontSizes?: { name?: string; position?: string; testimony?: string }; spacing?: { top?: string; bottom?: string; lineHeight?: string; nameTop?: string; nameBottom?: string; positionTop?: string; positionBottom?: string; testimonyTop?: string; testimonyBottom?: string } };
  imageAspectRatio?: number;
  isRTL?: boolean;
  arrowButtonSize?: number;
  arrowIconSize?: number;
  arrowGap?: number;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  colors = { name: "black", position: "gray-500", testimony: "gray-500", arrowBackground: "gray-100", arrowForeground: "black", arrowHoverForeground: "white" },
  fontSizes = { name: "2xl", position: "sm", testimony: "lg" },
  spacing = { top: "20", bottom: "20", lineHeight: "1.5", nameTop: "0", nameBottom: "0.5em", positionTop: "0", positionBottom: "0.25em", testimonyTop: "1em", testimonyBottom: "1em" },
  desktopVersionBottomThreshold = 1024,
  mobile = {},
  imageAspectRatio = 1,
  isRTL = false,
  arrowButtonSize = 44,
  arrowIconSize = 32,
  arrowGap = 12,
}: AnimatedTestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [isMobileView, setIsMobileView] = useState(false);
  const [hoveredArrow, setHoveredArrow] = useState<"prev" | "next" | null>(null);
  const [componentWidth, setComponentWidth] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  const componentRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const designationRef = useRef<HTMLParagraphElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentFontSizes = isMobileView && mobile.fontSizes ? mobile.fontSizes : fontSizes;
  const currentSpacing = { ...spacing, ...(isMobileView && mobile.spacing ? mobile.spacing : {}) };

  const activeTestimonial = useMemo(() => testimonials[activeIndex], [activeIndex, testimonials]);

  // Handlers
  const updateTestimonial = useCallback((dir: number) => {
    setDirection(dir);
    setActiveIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const handleNext = () => { updateTestimonial(1); stopAutoplay(); setUserInteracted(true); };
  const handlePrev = () => { updateTestimonial(-1); stopAutoplay(); setUserInteracted(true); };
  const isActive = (index: number) => index === activeIndex;

  const stopAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay && !userInteracted) {
      autoplayIntervalRef.current = setInterval(() => updateTestimonial(1), 5000);
    }
    return () => { if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current); };
  }, [autoplay, updateTestimonial, userInteracted]);

  // Resize
  const handleResize = useCallback(() => {
    if (componentRef.current) {
      setComponentWidth(componentRef.current.offsetWidth);
      setIsMobileView(componentRef.current.offsetWidth < desktopVersionBottomThreshold);
    }
  }, [desktopVersionBottomThreshold]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);
    if (componentRef.current) resizeObserver.observe(componentRef.current);
    handleResize();
    return () => { if (componentRef.current) resizeObserver.unobserve(componentRef.current); };
  }, [handleResize]);

  // Random rotation for images
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  // Arrows style
  const arrowStyle = () => ({ backgroundColor: colors.arrowBackground, width: `${arrowButtonSize}px`, height: `${arrowButtonSize}px` });
  const iconArrowStyle = (arrowType: "prev" | "next") => ({ color: hoveredArrow === arrowType ? colors.arrowHoverForeground : colors.arrowForeground, height: `${arrowIconSize}px`, width: `${arrowIconSize}px` });

  // Grid gap 
  const calculateGap = (width: number) => {
    const minWidth = 1024; const maxWidth = 1456; const minGap = 60; const maxGap = 86;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
    return minGap + ((maxGap - minGap) * (width - minWidth)) / (maxWidth - minWidth);
  };

  // Text animations like CircularTestimonials
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

  const animateNameAndDesignation = useCallback(() => {
    if (!nameRef.current || !designationRef.current) return;
    const nameChild = wrapLines(nameRef.current, activeTestimonial.name);
    const designationChild = wrapLines(designationRef.current, activeTestimonial.designation);
    // FIX for RTL: animation direction ONLY depends on user direction, not flipped
    const fromY = direction === 1 ? -100 : 100;
    gsap.fromTo(nameChild, { yPercent: fromY, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power4.out" });
    gsap.fromTo(designationChild, { yPercent: fromY, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.05 });
  }, [activeTestimonial, direction]);

  useEffect(() => { animateNameAndDesignation(); }, [activeTestimonial, animateNameAndDesignation]);

  return (
    <div ref={componentRef} className={`w-full mx-auto antialiased font-sans py-${currentSpacing.top} pb-${currentSpacing.bottom}`} style={{ lineHeight: currentSpacing.lineHeight, backgroundColor: "transparent", direction: isRTL ? "rtl" : "ltr" }}>
      <div className="relative" style={{ display: "grid", gridTemplateColumns: isMobileView ? "1fr" : isRTL ? "1fr 1fr" : "1fr 1fr", gap: `${calculateGap(componentWidth)}px` }}>
        {/* Image side with EXACT motion animation */}
        <div className="w-full">
          <div className="relative" style={{ paddingTop: `${(1 / imageAspectRatio) * 100}%` }}>
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img src={testimonial.src} alt={testimonial.name} draggable={false} className="h-full w-full rounded-3xl object-cover object-center" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {/* Text side */}
        <div className="flex justify-between flex-col py-4 w-full">
          <div>
            <h3 ref={nameRef} className="font-bold" style={{ fontSize: currentFontSizes.name, color: colors.name, marginTop: currentSpacing.nameTop, marginBottom: currentSpacing.nameBottom, textAlign: isRTL ? "right" : "left" }}></h3>
            <p ref={designationRef} style={{ fontSize: currentFontSizes.position, color: colors.position, marginTop: currentSpacing.positionTop, marginBottom: currentSpacing.positionBottom, textAlign: isRTL ? "right" : "left" }}></p>
            <motion.p key={activeIndex} style={{ fontSize: currentFontSizes.testimony, color: colors.testimony, marginTop: currentSpacing.testimonyTop, marginBottom: currentSpacing.testimonyBottom, textAlign: isRTL ? "right" : "left" }}>
              {activeTestimonial.quote.split(" ").map((word, index) => (
                <motion.span key={index} initial={{ filter: "blur(10px)", opacity: 0, y: 5 }} animate={{ filter: "blur(0px)", opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }} className="inline-block">{word}&nbsp;</motion.span>
              ))}
            </motion.p>
          </div>
          {/* Arrows */}
          <div className={`flex ${isMobileView ? "pt-12" : "md:pt-0"} w-full`} style={{ gap: `${arrowGap}px` }}>
            {isRTL ? (
              <>
                <button onClick={handlePrev} className="rounded-full flex items-center justify-center" style={arrowStyle()} onMouseEnter={() => setHoveredArrow("prev")} onMouseLeave={() => setHoveredArrow(null)}>
                  <IconArrowRight style={{ ...iconArrowStyle("prev"), transform: hoveredArrow === "prev" ? "rotate(-12deg)" : "rotate(0deg)", transition: "color 0.3s, transform 0.3s" }} />
                </button>
                <button onClick={handleNext} className="rounded-full flex items-center justify-center" style={arrowStyle()} onMouseEnter={() => setHoveredArrow("next")} onMouseLeave={() => setHoveredArrow(null)}>
                  <IconArrowLeft style={{ ...iconArrowStyle("next"), transform: hoveredArrow === "next" ? "rotate(12deg)" : "rotate(0deg)", transition: "color 0.3s, transform 0.3s" }} />
                </button>
              </>
            ) : (
              <>
                <button onClick={handlePrev} className="rounded-full flex items-center justify-center" style={arrowStyle()} onMouseEnter={() => setHoveredArrow("prev")} onMouseLeave={() => setHoveredArrow(null)}>
                  <IconArrowLeft style={{ ...iconArrowStyle("prev"), transform: hoveredArrow === "prev" ? "rotate(12deg)" : "rotate(0deg)", transition: "color 0.3s, transform 0.3s" }} />
                </button>
                <button onClick={handleNext} className="rounded-full flex items-center justify-center" style={arrowStyle()} onMouseEnter={() => setHoveredArrow("next")} onMouseLeave={() => setHoveredArrow(null)}>
                  <IconArrowRight style={{ ...iconArrowStyle("next"), transform: hoveredArrow === "next" ? "rotate(-12deg)" : "rotate(0deg)", transition: "color 0.3s, transform 0.3s" }} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .split-parent { overflow: hidden; }
        .split-child { display: inline-block; }
      `}</style>
    </div>
  );
};

export default AnimatedTestimonials;