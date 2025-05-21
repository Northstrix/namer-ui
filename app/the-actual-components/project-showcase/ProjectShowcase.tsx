"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import HalomotButton from "@/app/the-actual-components/halomot-button/HalomotButton";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  link?: string;
};

type ProjectShowcaseProps = {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: {
    name?: string;
    position?: string;
    testimony?: string;
  };
  fontSizes?: {
    name?: string;
    position?: string;
    testimony?: string;
  };
  spacing?: {
    top?: string;
    bottom?: string;
    lineHeight?: string;
    nameTop?: string;
    nameBottom?: string;
    positionTop?: string;
    positionBottom?: string;
    testimonyTop?: string;
    testimonyBottom?: string;
  };
  desktopVersionBottomThreshold?: number;
  maxImageWidth?: number;
  imageWidthPercentage?: number;
  mobile?: {
    fontSizes?: {
      name?: string;
      position?: string;
      testimony?: string;
    };
    spacing?: {
      top?: string;
      bottom?: string;
      lineHeight?: string;
      nameTop?: string;
      nameBottom?: string;
      positionTop?: string;
      positionBottom?: string;
      testimonyTop?: string;
      testimonyBottom?: string;
    };
  };
  imageAspectRatio?: number; // Added prop for image aspect ratio
  isRTL?: boolean; // Added prop for RTL support
  onItemClick?: (link: string) => void;
  outerRounding?: string; // Added prop for outer rounding
  innerRounding?: string; // Added prop for inner rounding
  outlineColor?: string; // Added prop for outline color
  hoverOutlineColor?: string; // Added prop for hover outline color
  buttonInscriptions?: {
    previousButton: string;
    nextButton: string;
    openWebAppButton: string;
  };
  halomotButtonGradient?: string;
  halomotButtonBackground?: string;
  halomotButtonTextColor?: string;
  halomotButtonOuterBorderRadius?: string; // Border radius for the gradient outer border
  halomotButtonInnerBorderRadius?: string; // Border radius for the inner button
};

export const ProjectShowcase = ({
  testimonials,
  autoplay = false,
  colors = {
    name: "#fff",
    position: "gray-500",
    testimony: "gray-500",
  },
  fontSizes = {
    name: "2xl",
    position: "sm",
    testimony: "lg",
  },
  spacing = {
    top: "20",
    bottom: "20",
    lineHeight: "1.5",
    nameTop: "0",
    nameBottom: "0.5em",
    positionTop: "0",
    positionBottom: "0.25em",
    testimonyTop: "1em",
    testimonyBottom: "1em",
  },
  desktopVersionBottomThreshold = 1024,
  mobile = {},
  imageAspectRatio = 1.37, // Default image aspect ratio
  isRTL = false, // Default value for RTL support
  onItemClick,
  outerRounding = "18.2px", // Default outer rounding
  innerRounding = "18px", // Default inner rounding
  outlineColor = "#33313d", // Default outline color
  hoverOutlineColor = "#403d4d", // Default hover outline color
  buttonInscriptions = {
    previousButton: "Previous",
    nextButton: "Next",
    openWebAppButton: "Open Web App",
  },
  halomotButtonGradient = "linear-gradient(to right, #a123f4, #603dec)",
  halomotButtonBackground = "#111014",
  halomotButtonTextColor = "#fff",
  halomotButtonOuterBorderRadius = "6.34px",
  halomotButtonInnerBorderRadius = "6px",
}: ProjectShowcaseProps) => {
  const [active, setActive] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [componentWidth, setComponentWidth] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);

  // Use Mobile Config (with defaults)
  const currentFontSizes =
    isMobileView && mobile.fontSizes ? mobile.fontSizes : fontSizes;
  const currentSpacing = {
    ...spacing,
    ...(isMobileView && mobile.spacing ? mobile.spacing : {}),
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const handleResize = useCallback(() => {
    if (componentRef.current) {
      setComponentWidth(componentRef.current.offsetWidth);
      setIsMobileView(
        componentRef.current.offsetWidth < desktopVersionBottomThreshold,
      );
    }
  }, [desktopVersionBottomThreshold]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);
    if (componentRef.current) {
      resizeObserver.observe(componentRef.current);
    }
    handleResize(); // Initial check
    return () => {
      if (componentRef.current) {
        resizeObserver.unobserve(componentRef.current);
      }
    };
  }, [handleResize]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const calculateGap = (width: number) => {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth)
      return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
    return (
      minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
    );
  };

  return (
    <div
      ref={componentRef}
      className={`w-full mx-auto antialiased font-sans py-${currentSpacing.top} pb-${currentSpacing.bottom}`}
      style={{
        lineHeight: currentSpacing.lineHeight,
        backgroundColor: "transparent",
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      <div
        className="relative"
        style={{
          display: "grid",
          gridTemplateColumns: isMobileView
            ? "1fr"
            : isRTL
              ? "1fr 1fr"
              : "1fr 1fr",
          gap: `${calculateGap(componentWidth)}px`,
        }}
      >
        {isRTL && !isMobileView ? (
          <>
            <div className="w-full">
              <div
                className="relative"
                style={{ paddingTop: `${(1 / imageAspectRatio) * 100}%` }}
              >
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index)
                          ? 999
                          : testimonials.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <ImageContainer
                        src={testimonial.src}
                        alt={testimonial.name}
                        outerRounding={outerRounding}
                        innerRounding={innerRounding}
                        outlineColor={outlineColor}
                        hoverOutlineColor={hoverOutlineColor}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex justify-between flex-col py-4 w-full">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <h3
                  className={`font-bold`}
                  style={{
                    fontSize: currentFontSizes.name,
                    color: colors.name,
                    marginTop: currentSpacing.nameTop,
                    marginBottom: currentSpacing.nameBottom,
                    textAlign: "right",
                  }}
                >
                  {testimonials[active].name}
                </h3>
                <p
                  style={{
                    fontSize: currentFontSizes.position,
                    color: colors.position,
                    marginTop: currentSpacing.positionTop,
                    marginBottom: currentSpacing.positionBottom,
                    textAlign: "right",
                  }}
                >
                  {testimonials[active].designation}
                </p>
                <motion.p
                  style={{
                    fontSize: currentFontSizes.testimony,
                    color: colors.testimony,
                    marginTop: currentSpacing.testimonyTop,
                    marginBottom: currentSpacing.testimonyBottom,
                    textAlign: "right",
                  }}
                >
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
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
              <div
                className={`flex gap-4 ${isMobileView ? "pt-12" : "md:pt-0"} w-full`}
                style={{ justifyContent: "flex-start" }}
              >
                <HalomotButton
                  inscription={buttonInscriptions.previousButton}
                  onClick={handlePrev}
                  fixedWidth="172px"
                  gradient={halomotButtonGradient}
                  backgroundColor={halomotButtonBackground}
                  textColor={halomotButtonTextColor}
                  innerBorderRadius={halomotButtonInnerBorderRadius}
                  outerBorderRadius={halomotButtonOuterBorderRadius}
                />
                <HalomotButton
                  inscription={buttonInscriptions.nextButton}
                  onClick={handleNext}
                  fixedWidth="172px"
                  gradient={halomotButtonGradient}
                  backgroundColor={halomotButtonBackground}
                  textColor={halomotButtonTextColor}
                  innerBorderRadius={halomotButtonInnerBorderRadius}
                  outerBorderRadius={halomotButtonOuterBorderRadius}
                />
                <HalomotButton
                  inscription={buttonInscriptions.openWebAppButton}
                  onClick={() =>
                    onItemClick && onItemClick(testimonials[active].link || "")
                  }
                  fillWidth
                  gradient={halomotButtonGradient}
                  backgroundColor={halomotButtonBackground}
                  textColor={halomotButtonTextColor}
                  innerBorderRadius={halomotButtonInnerBorderRadius}
                  outerBorderRadius={halomotButtonOuterBorderRadius}
                  href={testimonials[active].link} // Set the href attribute
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              <div
                className="relative"
                style={{ paddingTop: `${(1 / imageAspectRatio) * 100}%` }}
              >
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index)
                          ? 999
                          : testimonials.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <ImageContainer
                        src={testimonial.src}
                        alt={testimonial.name}
                        outerRounding={outerRounding}
                        innerRounding={innerRounding}
                        outlineColor={outlineColor}
                        hoverOutlineColor={hoverOutlineColor}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex justify-between flex-col py-4 w-full">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <h3
                  className={`font-bold`}
                  style={{
                    fontSize: currentFontSizes.name,
                    color: colors.name,
                    marginTop: currentSpacing.nameTop,
                    marginBottom: currentSpacing.nameBottom,
                  }}
                >
                  {testimonials[active].name}
                </h3>
                <p
                  style={{
                    fontSize: currentFontSizes.position,
                    color: colors.position,
                    marginTop: currentSpacing.positionTop,
                    marginBottom: currentSpacing.positionBottom,
                  }}
                >
                  {testimonials[active].designation}
                </p>
                <motion.p
                  style={{
                    fontSize: currentFontSizes.testimony,
                    color: colors.testimony,
                    marginTop: currentSpacing.testimonyTop,
                    marginBottom: currentSpacing.testimonyBottom,
                  }}
                >
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
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
              {isRTL ? (
                <div
                  className={`flex gap-4 ${isMobileView ? "pt-12" : "md:pt-0"} w-full`}
                >
                  <HalomotButton
                    inscription={buttonInscriptions.previousButton}
                    onClick={handlePrev}
                    fixedWidth="172px"
                    gradient={halomotButtonGradient}
                    backgroundColor={halomotButtonBackground}
                    textColor={halomotButtonTextColor}
                    innerBorderRadius={halomotButtonInnerBorderRadius}
                    outerBorderRadius={halomotButtonOuterBorderRadius}
                  />
                  <HalomotButton
                    inscription={buttonInscriptions.nextButton}
                    onClick={handleNext}
                    fixedWidth="172px"
                    gradient={halomotButtonGradient}
                    backgroundColor={halomotButtonBackground}
                    textColor={halomotButtonTextColor}
                    innerBorderRadius={halomotButtonInnerBorderRadius}
                    outerBorderRadius={halomotButtonOuterBorderRadius}
                  />
                  <HalomotButton
                    inscription={buttonInscriptions.openWebAppButton}
                    onClick={() =>
                      onItemClick &&
                      onItemClick(testimonials[active].link || "")
                    }
                    fillWidth
                    gradient={halomotButtonGradient}
                    backgroundColor={halomotButtonBackground}
                    textColor={halomotButtonTextColor}
                    innerBorderRadius={halomotButtonInnerBorderRadius}
                    outerBorderRadius={halomotButtonOuterBorderRadius}
                    href={testimonials[active].link} // Set the href attribute
                  />
                </div>
              ) : (
                <div
                  className={`flex gap-4 ${isMobileView ? "pt-12" : "md:pt-0"} w-full`}
                >
                  <HalomotButton
                    inscription={buttonInscriptions.previousButton}
                    onClick={handlePrev}
                    fixedWidth="172px"
                    gradient={halomotButtonGradient}
                    backgroundColor={halomotButtonBackground}
                    textColor={halomotButtonTextColor}
                    innerBorderRadius={halomotButtonInnerBorderRadius}
                    outerBorderRadius={halomotButtonOuterBorderRadius}
                  />
                  <HalomotButton
                    inscription={buttonInscriptions.nextButton}
                    onClick={handleNext}
                    fixedWidth="172px"
                    gradient={halomotButtonGradient}
                    backgroundColor={halomotButtonBackground}
                    textColor={halomotButtonTextColor}
                    innerBorderRadius={halomotButtonInnerBorderRadius}
                    outerBorderRadius={halomotButtonOuterBorderRadius}
                  />
                  <HalomotButton
                    inscription={buttonInscriptions.openWebAppButton}
                    onClick={() =>
                      onItemClick &&
                      onItemClick(testimonials[active].link || "")
                    }
                    fillWidth
                    gradient={halomotButtonGradient}
                    backgroundColor={halomotButtonBackground}
                    textColor={halomotButtonTextColor}
                    innerBorderRadius={halomotButtonInnerBorderRadius}
                    outerBorderRadius={halomotButtonOuterBorderRadius}
                    href={testimonials[active].link} // Set the href attribute
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

type ImageContainerProps = {
  src: string;
  alt: string;
  outerRounding: string;
  innerRounding: string;
  outlineColor: string;
  hoverOutlineColor: string;
};

const ImageContainer = ({
  src,
  alt,
  outerRounding,
  innerRounding,
  outlineColor,
  hoverOutlineColor,
}: ImageContainerProps) => (
  <div
    className="relative h-full w-full"
    style={{
      borderRadius: outerRounding,
      padding: "1px",
      backgroundColor: outlineColor,
      transition: "background-color 0.3s ease-in-out",
    }}
  >
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        borderRadius: innerRounding,
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        draggable={false}
        className="h-full w-full object-cover object-center"
      />
    </div>
    <style jsx>{`
      div:hover {
        background-color: ${hoverOutlineColor} !important;
      }
    `}</style>
  </div>
);

export default ProjectShowcase;