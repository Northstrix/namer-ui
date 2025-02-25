'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "AnimatedTestimonials.tsx" file
import AnimatedTestimonials from '@/app/the-actual-components/animated-testimonials/AnimatedTestimonials'

<div className="bg-[#f1f1f7] p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  <div
    className="items-center justify-center relative flex"
    style={{
      maxWidth: "1456px",
    }}
  >
    <AnimatedTestimonials
      testimonials={[
        {
          quote:
            "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
          name: "Tamar Mendelson",
          designation: "Restaurant Critic",
          src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
          name: "Joe Charlescraft",
          designation: "Frequent Visitor",
          src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
        },
        {
          quote:
            "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
          name: "Martina Edelweist",
          designation: "Satisfied Customer",
          src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
        },
      ]}
      colors={{
        name: "#0a0a0a",
        position: "#454545",
        testimony: "#171717",
        arrowBackground: "#141414",
        arrowForeground: "#f1f1f7",
        arrowHoverForeground: "#00A6FB",
      }}
      desktopVersionBottomThreshold={1024}
      fontSizes={{
        name: "28px",
        position: "20px",
        testimony: "20px",
      }}
      spacing={{
        nameTop: "0",
        nameBottom: "10px",
        positionTop: "0",
        positionBottom: "0.5em",
        testimonyTop: "1.24em",
        testimonyBottom: "1em",
        lineHeight: "1.56",
      }}
      imageAspectRatio={1.05}
    />
  </div>
</div>
<div className="bg-[#050505] p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  <div
    className="items-center justify-center relative flex"
    style={{
      maxWidth: "1024px",
    }}
  >
    <AnimatedTestimonials
      testimonials={[
        {
          quote:
            "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
          name: "Tamar Mendelson",
          designation: "Restaurant Critic",
          src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
          name: "Joe Charlescraft",
          designation: "Frequent Visitor",
          src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
        },
        {
          quote:
            "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
          name: "Martina Edelweist",
          designation: "Satisfied Customer",
          src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
        },
      ]}
      colors={{
        name: "#f7f7ff",
        position: "#e1e1e1",
        testimony: "#f1f1f7",
        arrowBackground: "#0582CA",
        arrowForeground: "#141414",
        arrowHoverForeground: "#f7f7ff",
      }}
      desktopVersionBottomThreshold={1024}
      fontSizes={{
        name: "28px",
        position: "20px",
        testimony: "20px",
      }}
      spacing={{
        nameTop: "0",
        nameBottom: "10px",
        positionTop: "0",
        positionBottom: "0.5em",
        testimonyTop: "1.24em",
        testimonyBottom: "1em",
        lineHeight: "1.56",
      }}
      imageAspectRatio={1.05}
    />
  </div>
</div>
<div className="bg-[#f1f1f7] p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  <div
    className="items-center justify-center relative flex"
    style={{
      maxWidth: "1200px",
    }}
  >
    <AnimatedTestimonials
      testimonials={[
        {
          quote:
            "הייתי מרותק מהאוכל — כל מנה מלאה בטעם! והייתי יכול לראות באמת שהם משתמשים במרכיבים של איכות גבוהה. הצוות היה ידידותי ותשומת לב, הולך עד הסוף. אני בהחלט אחזור ליותר!",
          name: "תמר מנדלסון",
          designation: "מבקר מסעדות",
          src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "מקום זה עלה על כל הציפיות! האווירה מזמינה, והצוות באמת הולך מעבר לכל גבול כדי להבטיח ביקור מדהים. אני בהחלט אמשיך לחזור לחוויית אכילה יוצאת דופן.",
          name: "ג'ו צ'רלסקראפט",
          designation: "מבקר תדיר",
          src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
        },
        {
          quote:
            "שיינין ים הוא פנינה מוסתרת! מהרגע שנכנסתי, ידעתי שאני בדרך למתנה. השירות המושלם והתשומת הלב הכללית לפרטים יצרו חוויה זכורה. אני ממליץ מאוד עליו!",
          name: "מרטינה אדלווייסט",
          designation: "לקוח מרוצה",
          src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
        },
      ]}
      colors={{
        name: "#0a0a0a",
        position: "#454545",
        testimony: "#171717",
        arrowBackground: "#141414",
        arrowForeground: "#f1f1f7",
        arrowHoverForeground: "#00A6FB",
      }}
      desktopVersionBottomThreshold={1024}
      fontSizes={{
        name: "32px",
        position: "21px",
        testimony: "21px",
      }}
      spacing={{
        nameTop: "0",
        nameBottom: "12px",
        positionTop: "0",
        positionBottom: "0.5em",
        testimonyTop: "1.24em",
        testimonyBottom: "1em",
        lineHeight: "1.56",
      }}
      imageAspectRatio={1.05}
      isRTL={true}
    />
  </div>
</div>

// Note: The AnimatedTestimonials component accepts the following props:
// - testimonials: Testimonial[] (required) - An array of Testimonial objects.
//    - quote: string - The testimonial quote.
//    - name: string - The name of the person giving the testimonial.
//    - designation: string - The designation or title of the person.
//    - src: string - The URL of the person's image.
// - autoplay: boolean (optional) - Whether to autoplay the testimonials (default: false).
// - colors: object (optional) - Color options for the component.
//    - name: string (optional) - Color for the name text (default: "black").
//    - position: string (optional) - Color for the position text (default: "gray-500").
//    - testimony: string (optional) - Color for the testimonial text (default: "gray-500").
//    - arrowBackground: string (optional) - Background color for the navigation arrows (default: "gray-100").
//    - arrowForeground: string (optional) - Foreground color for the navigation arrows (default: "black").
//    - arrowHoverForeground: string (optional) - Foreground color for the navigation arrows on hover (default: "white").
// - fontSizes: object (optional) - Font size options for the component.
//    - name: string (optional) - Font size for the name text (default: "2xl").
//    - position: string (optional) - Font size for the position text (default: "sm").
//    - testimony: string (optional) - Font size for the testimonial text (default: "lg").
// - spacing: object (optional) - Spacing options for the component.
//    - top: string (optional) - Top spacing for the component (default: "20").
//    - bottom: string (optional) - Bottom spacing for the component (default: "20").
//    - lineHeight: string (optional) - Line height for the testimonial text (default: "1.5").
//    - nameTop: string (optional) - Top spacing for the name text (default: "0").
//    - nameBottom: string (optional) - Bottom spacing for the name text (default: "0.5em").
//    - positionTop: string (optional) - Top spacing for the position text (default: "0").
//    - positionBottom: string (optional) - Bottom spacing for the position text (default: "0.25em").
//    - testimonyTop: string (optional) - Top spacing for the testimonial text (default: "1em").
//    - testimonyBottom: string (optional) - Bottom spacing for the testimonial text (default: "1em").
// - desktopVersionBottomThreshold: number (optional) - Threshold for switching to desktop layout (default: 1024).
// - mobile: object (optional) - Mobile-specific styling options.
//    - fontSizes: object (optional) - Font size options for mobile devices.
//      - name: string (optional) - Font size for the name text on mobile.
//      - position: string (optional) - Font size for the position text on mobile.
//      - testimony: string (optional) - Font size for the testimonial text on mobile.
//    - spacing: object (optional) - Spacing options for mobile devices.
//      - top: string (optional) - Top spacing for the component on mobile.
//      - bottom: string (optional) - Bottom spacing for the component on mobile.
//      - lineHeight: string (optional) - Line height for the testimonial text on mobile.
//      - nameTop: string (optional) - Top spacing for the name text on mobile.
//      - nameBottom: string (optional) - Bottom spacing for the name text on mobile.
//      - positionTop: string (optional) - Top spacing for the position text on mobile.
//      - positionBottom: string (optional) - Bottom spacing for the position text on mobile.
//      - testimonyTop: string (optional) - Top spacing for the testimonial text on mobile.
//      - testimonyBottom: string (optional) - Bottom spacing for the testimonial text on mobile.
// - maxImageWidth: number (optional) - Maximum width for the images.
// - imageWidthPercentage: number (optional) - Percentage of the component width for images.
// - imageAspectRatio: number (optional) - Aspect ratio for the images (default: 1).
// - isRTL: boolean (optional) - Whether to use right-to-left layout (default: false).
`,
code: [
  {
    filename: 'AnimatedTestimonials.tsx',
    content: `"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

type AnimatedTestimonialsProps = {
    testimonials: Testimonial[];
    autoplay?: boolean;
    colors?: {
        name?: string;
        position?: string;
        testimony?: string;
        arrowBackground?: string;
        arrowForeground?: string;
        arrowHoverForeground?: string; // Added prop for hover color
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
};

export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false,
    colors = {
        name: "black",
        position: "gray-500",
        testimony: "gray-500",
        arrowBackground: "gray-100",
        arrowForeground: "black",
        arrowHoverForeground: "white", // Default hover color
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
    imageAspectRatio = 1, // Default image aspect ratio (1:1)
    isRTL = false, // Default value for RTL support
}: AnimatedTestimonialsProps) => {
    const [active, setActive] = useState(0);
    const [isMobileView, setIsMobileView] = useState(false);
    const [hoveredArrow, setHoveredArrow] = useState<"prev" | "next" | null>(null);
    const [componentWidth, setComponentWidth] = useState(0);
    const componentRef = useRef<HTMLDivElement>(null);

    // Use Mobile Config (with defaults)
    const currentFontSizes = isMobileView && mobile.fontSizes ? mobile.fontSizes : fontSizes;
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
            setIsMobileView(componentRef.current.offsetWidth < desktopVersionBottomThreshold);
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

    const arrowStyle = () => ({
        backgroundColor: colors.arrowBackground,
    });

    const iconArrowStyle = (arrowType: "prev" | "next") => ({
        color: hoveredArrow === arrowType ? colors.arrowHoverForeground : colors.arrowForeground,
        height: '49px',
        width: '49px',
    });

    const calculateGap = (width: number) => {
        const minWidth = 1024;
        const maxWidth = 1456;
        const minGap = 60;
        const maxGap = 86;

        if (width <= minWidth) return minGap;
        if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));

        return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
    };

    return (
        <div
            ref={componentRef}
            className={\`w-full mx-auto antialiased font-sans py-\${currentSpacing.top} pb-\${currentSpacing.bottom}\`}
            style={{ lineHeight: currentSpacing.lineHeight, backgroundColor: "transparent", direction: isRTL ? 'rtl' : 'ltr' }}
        >
            <div className="relative" style={{ display: 'grid', gridTemplateColumns: isMobileView ? '1fr' : (isRTL ? '1fr 1fr' : '1fr 1fr'), gap: \`\${calculateGap(componentWidth)}px\` }}>
                {isRTL && !isMobileView ? (
                    <>
                                            <div className="w-full">
                            <div className="relative" style={{ paddingTop: \`\${(1 / imageAspectRatio) * 100}%\` }}>
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
                                            <Image
                                                src={testimonial.src}
                                                alt={testimonial.name}
                                                layout="fill"
                                                objectFit="cover"
                                                draggable={false}
                                                className="h-full w-full rounded-3xl object-cover object-center"
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
                                <h3 className={\`font-bold\`} style={{
                                    fontSize: currentFontSizes.name,
                                    color: colors.name,
                                    marginTop: currentSpacing.nameTop,
                                    marginBottom: currentSpacing.nameBottom,
                                    textAlign: 'right',
                                }}>
                                    {testimonials[active].name}
                                </h3>
                                <p style={{
                                    fontSize: currentFontSizes.position,
                                    color: colors.position,
                                    marginTop: currentSpacing.positionTop,
                                    marginBottom: currentSpacing.positionBottom,
                                    textAlign: 'right',
                                }}>
                                    {testimonials[active].designation}
                                </p>
                                <motion.p style={{
                                    fontSize: currentFontSizes.testimony,
                                    color: colors.testimony,
                                    marginTop: currentSpacing.testimonyTop,
                                    marginBottom: currentSpacing.testimonyBottom,
                                    textAlign: 'right',
                                }}>
                                    {testimonials[active].quote.split(" ").map((word, index) => (
                                        <motion.span key={index} initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                                            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                                            className="inline-block">
                                            {word}&nbsp;
                                        </motion.span>
                                    ))}
                                </motion.p>
                            </motion.div>
                            <div className={\`flex gap-4 \${isMobileView ? 'pt-12' : 'md:pt-0'} w-full\`} style={{ justifyContent: 'flex-start' }}>
                                <button onClick={handlePrev}
                                    className="h-[32px] w-[32px] rounded-full flex items-center justify-center"
                                    style={arrowStyle()}
                                    onMouseEnter={() => setHoveredArrow("prev")}
                                    onMouseLeave={() => setHoveredArrow(null)}
                                >
                                    <IconArrowRight className="transition-transform duration-300" style={{
                                        ...iconArrowStyle("prev"),
                                        transform: hoveredArrow === "prev" ? 'rotate(-12deg)' : 'rotate(0deg)',
                                        transition: 'color 0.3s, transform 0.3s'
                                    }} />
                                </button>
                                <button onClick={handleNext}
                                    className="h-[32px] w-[32px] rounded-full flex items-center justify-center"
                                    style={arrowStyle()}
                                    onMouseEnter={() => setHoveredArrow("next")}
                                    onMouseLeave={() => setHoveredArrow(null)}
                                >
                                    <IconArrowLeft className="transition-transform duration-300" style={{
                                        ...iconArrowStyle("next"),
                                        transform: hoveredArrow === "next" ? 'rotate(12deg)' : 'rotate(0deg)',
                                        transition: 'color 0.3s, transform 0.3s'
                                    }} />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full">
                            <div className="relative" style={{ paddingTop: \`\${(1 / imageAspectRatio) * 100}%\` }}>
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
                                            <Image
                                                src={testimonial.src}
                                                alt={testimonial.name}
                                                layout="fill"
                                                objectFit="cover"
                                                draggable={false}
                                                className="h-full w-full rounded-3xl object-cover object-center"
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
                                <h3 className={\`font-bold\`} style={{
                                    fontSize: currentFontSizes.name,
                                    color: colors.name,
                                    marginTop: currentSpacing.nameTop,
                                    marginBottom: currentSpacing.nameBottom,
                                }}>
                                    {testimonials[active].name}
                                </h3>
                                <p style={{
                                    fontSize: currentFontSizes.position,
                                    color: colors.position,
                                    marginTop: currentSpacing.positionTop,
                                    marginBottom: currentSpacing.positionBottom,
                                }}>
                                    {testimonials[active].designation}
                                </p>
                                <motion.p style={{
                                    fontSize: currentFontSizes.testimony,
                                    color: colors.testimony,
                                    marginTop: currentSpacing.testimonyTop,
                                    marginBottom: currentSpacing.testimonyBottom,
                                }}>
                                    {testimonials[active].quote.split(" ").map((word, index) => (
                                        <motion.span key={index} initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                                            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                                            className="inline-block">
                                            {word}&nbsp;
                                        </motion.span>
                                    ))}
                                </motion.p>
                            </motion.div>
                            {isRTL ? (
                                <div className={\`flex gap-4 \${isMobileView ? 'pt-12' : 'md:pt-0'} w-full\`}>
                                    <button onClick={handlePrev}
                                    className="h-[32px] w-[32px] rounded-full flex items-center justify-center"
                                    style={arrowStyle()}
                                    onMouseEnter={() => setHoveredArrow("prev")}
                                    onMouseLeave={() => setHoveredArrow(null)}
                                    >
                                    <IconArrowRight className="transition-transform duration-300" style={{
                                        ...iconArrowStyle("prev"),
                                        transform: hoveredArrow === "prev" ? 'rotate(-12deg)' : 'rotate(0deg)',
                                        transition: 'color 0.3s, transform 0.3s'
                                    }} />
                                    </button>
                                    <button onClick={handleNext}
                                    className="h-[32px] w-[32px] rounded-full flex items-center justify-center"
                                    style={arrowStyle()}
                                    onMouseEnter={() => setHoveredArrow("next")}
                                    onMouseLeave={() => setHoveredArrow(null)}
                                    >
                                    <IconArrowLeft className="transition-transform duration-300" style={{
                                        ...iconArrowStyle("next"),
                                        transform: hoveredArrow === "next" ? 'rotate(12deg)' : 'rotate(0deg)',
                                        transition: 'color 0.3s, transform 0.3s'
                                    }} />
                                    </button>
                                </div>
                                ) : (
                                <div className={\`flex gap-4 \${isMobileView ? 'pt-12' : 'md:pt-0'} w-full\`}>
                                    <button onClick={handlePrev}
                                    className="h-[32px] w-[32px] rounded-full flex items-center justify-center"
                                    style={arrowStyle()}
                                    onMouseEnter={() => setHoveredArrow("prev")}
                                    onMouseLeave={() => setHoveredArrow(null)}
                                    >
                                    <IconArrowLeft className="transition-transform duration-300" style={{
                                        ...iconArrowStyle("prev"),
                                        transform: hoveredArrow === "prev" ? 'rotate(12deg)' : 'rotate(0deg)',
                                        transition: 'color 0.3s, transform 0.3s'
                                    }} />
                                    </button>
                                    <button onClick={handleNext}
                                    className="h-[32px] w-[32px] rounded-full flex items-center justify-center"
                                    style={arrowStyle()}
                                    onMouseEnter={() => setHoveredArrow("next")}
                                    onMouseLeave={() => setHoveredArrow(null)}
                                    >
                                    <IconArrowRight className="transition-transform duration-300" style={{
                                        ...iconArrowStyle("next"),
                                        transform: hoveredArrow === "next" ? 'rotate(-12deg)' : 'rotate(0deg)',
                                        transition: 'color 0.3s, transform 0.3s'
                                    }} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AnimatedTestimonials;
`
  },
],
  dependencies: 'npm install framer-motion\nnpm install @tabler/icons-react --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://ui.aceternity.com/components/animated-testimonials" target="_blank" rel="noopener noreferrer" className="link">Animated Testimonials</a> by <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
    </span>
  ),
}

export { metadata }