'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "ProjectShowcase.tsx" file
import ProjectShowcase from '@/app/the-actual-components/project-showcase/ProjectShowcase'

<div className="bg-[#050505] p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  <div
    className="items-center justify-center relative flex"
    style={{
      maxWidth: "1536px",
    }}
  >
    <ProjectShowcase
      testimonials={[
        {
          name: "Plum Cave",
          quote:
            'A cloud backup solution that employs the "ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512" authenticated encryption scheme for data encryption and ML-KEM-1024 for quantum-resistant key exchange.',
          designation: "Next.js Project",
          src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/plum-cave.webp",
          link: "https://plum-cave.netlify.app/",
        },
        {
          name: "Namer UI",
          quote:
            "A comprehensive collection of modern, attractive, and unique reusable TypeScript components crafted specifically for Next.js.",
          designation: "Next.js Project",
          src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui.webp",
          link: "https://namer-ui.netlify.app/",
        },
        {
          name: "Namer UI For Vue",
          quote: "A collection of customizable, reusable TypeScript, vanilla CSS components for Vue 3.",
          designation: "Vue Project",
          src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui-for-vue.webp",
          link: "https://namer-ui-for-vue.netlify.app/",
        },
        {
          name: "React Cryptographic Toolkit",
          quote:
            "A web app that’s capable of encrypting user data, hashing strings, and calculating tags using the available HMAC algorithms. Please don’t judge me too harshly for it; this is the first React app I ever made.",
          designation: "React Project",
          src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/rct.webp",
          link: "https://northstrix.github.io/React-Cryptographic-Toolkit/",
        },
        {
          name: "PHA5E-Inspired Hero Section",
          quote:
            "An unorthodox, customizable component. I put it here just to demonstrate that I'm capable of creating an Angular app.",
          designation: "Angular Project",
          src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/pha5e-inspired-hero-section.webp",
          link: "https://pha5e-inspired-hero-section.netlify.app/",
        },
        {
          name: "Bootleg Website Localization Tool",
          quote:
            "A simple tool designed to localize websites created with the Bazium website builder, as well as their vanilla HTML/CSS/JS counterparts.",
          designation: "Vanilla HTML/CSS/JS Project",
          src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/bwlt.webp",
          link: "https://codepen.io/Northstrix/full/mydWRJB",
        },
        {
          name: "In-Browser-File-Encrypter",
          quote:
            "A browser-based tool that encrypts files locally without interacting with the server. It uses AES-256 for data encryption and HMAC-SHA512 for integrity verification.",
          designation: "Vanilla HTML/CSS/JS Project",
          src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/in-browser-file-encrypter.webp",
          link: "https://codepen.io/Northstrix/full/xxvXvJL",
        },
      ]}
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
      onItemClick={(link) => toast.info(\`Clicked link: \${link}\`)}
    />
  </div>
</div>
<div className="bg-[#f1f1f7] p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  <div
    className="items-center justify-center relative flex"
    style={{
      maxWidth: "1152px",
    }}
  >
    <ProjectShowcase
      testimonials={[
        {
          name: "פלאם קייב",
          quote:
            'פתרון גיבוי בענן המשתמש בסכימת הצפנה מאומתת "HMAC-SHA3-512 + CBC Serpent-256 + ChaCha20" להצפנת נתונים ו-ML-KEM-1024 לחילופי מפתחות עמידים לקוונטים.',
          designation: "פרויקט Next.js",
          src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/plum-cave-hebrew.webp",
          link: "https://plum-cave.netlify.app/",
        },
        {
          name: "נמר UI",
          quote:
            "אוסף מקיף של רכיבי TypeScript מודרניים, אטרקטיביים וייחודיים לשימוש חוזר המיועדים במיוחד ל-Next.js.",
          designation: "פרויקט Next.js",
          src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui.webp",
          link: "https://namer-ui.netlify.app/",
        },
        {
          name: "נמר UI ל-Vue",
          quote: "אוסף של רכיבי TypeScript ו-CSS ונילה, הניתנים להתאמה אישית ולשימוש חוזר עבור Vue 3.",
          designation: "פרויקט Vue",
          src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui-for-vue.webp",
          link: "https://namer-ui-for-vue.netlify.app/",
        },
        {
          name: "React קריפטוגרפיק טולקיט",
          quote:
            "אפליקציית אינטרנט המסוגלת להצפין נתוני משתמש, לבצע האש של מחרוזות ולחשב תגיות באמצעות אלגוריתמי HMAC הזמינים. אל תשפטו אותי בחומרה - זוהי האפליקציה הראשונה שיצרתי ב-React.",
          designation: "פרויקט React",
          src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/rct.webp",
          link: "https://northstrix.github.io/React-Cryptographic-Toolkit/",
        },
        {
          name: "מקטע גיבור בהשראת PHA5E",
          quote:
            "רכיב לא שגרתי וניתן להתאמה אישית. הוספתי אותו כאן כדי להדגים שאני מסוגל ליצור אפליקציית Angular.",
          designation: "פרויקט Angular",
          src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/pha5e-inspired-hero-section.webp",
          link: "https://pha5e-inspired-hero-section.netlify.app/",
        },
        {
          name: "בוטלג וובסייט לוקליזיישן טול",
          quote:
            "כלי פשוט שנועד לבצע לוקליזציה לאתרים שנוצרו עם בוני האתרים Bazium, כמו גם לגרסאות ה-vanilla HTML/CSS/JS שלהם.",
          designation: "פרויקט HTML/CSS/JS וונילה",
          src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/bwlt.webp",
          link: "https://codepen.io/Northstrix/full/mydWRJB",
        },
        {
          name: "מצפין קבצים בדפדפן",
          quote:
            "כלי מבוסס דפדפן המבצע הצפנת קבצים מקומית ללא אינטראקציה עם השרת. משתמש ב-AES-256 להצפנת נתונים וב-HMAC-SHA512 לאימות שלמות.",
          designation: "פרויקט HTML/CSS/JS וונילה",
          src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/in-browser-file-encrypter.webp",
          link: "https://codepen.io/Northstrix/full/xxvXvJL",
        },
      ]}
      colors={{
        name: "#0a0a0a",
        position: "#454545",
        testimony: "#171717",
      }}
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
      isRTL={true}
      buttonInscriptions={{
        previousButton: "הקודם",
        nextButton: "הבא",
        openWebAppButton: "פתח אפליקציה",
      }}
      halomotButtonGradient = "linear-gradient(to right, #603dec, #a123f4)"
      halomotButtonBackground = "#eee"
      halomotButtonTextColor = "#111"
      halomotButtonOuterBorderRadius = "16.2px"
      halomotButtonInnerBorderRadius = "15px"
      halomotButtonHoverTextColor = "#fff"
      onItemClick={(link) => toast.info(\`Clicked link: \${link}\`)}
    />
  </div>
</div>

// Note: The ProjectShowcase component accepts the following props:
// - testimonials: Testimonial[] (required) - An array of Testimonial objects.
//    - quote: string - The testimonial/project description.
//    - name: string - The name/title of the project or person.
//    - designation: string - The designation or category.
//    - src: string - The URL of the project's image.
//    - link: string (optional) - The URL to the project or external resource.
// - autoplay: boolean (optional) - Whether to autoplay the testimonials (default: false).
// - colors: object (optional) - Color options for the component.
//    - name: string (optional) - Color for the name text (default: "#fff").
//    - position: string (optional) - Color for the designation text (default: "gray-500").
//    - testimony: string (optional) - Color for the quote/description text (default: "gray-500").
// - fontSizes: object (optional) - Font size options for the component.
//    - name: string (optional) - Font size for the name text (default: "2xl").
//    - position: string (optional) - Font size for the designation text (default: "sm").
//    - testimony: string (optional) - Font size for the quote/description text (default: "lg").
// - spacing: object (optional) - Spacing options for the component.
//    - top: string (optional) - Top spacing (default: "20").
//    - bottom: string (optional) - Bottom spacing (default: "20").
//    - lineHeight: string (optional) - Line height for the quote (default: "1.5").
//    - nameTop: string (optional) - Top spacing for the name (default: "0").
//    - nameBottom: string (optional) - Bottom spacing for the name (default: "0.5em").
//    - positionTop: string (optional) - Top spacing for the designation (default: "0").
//    - positionBottom: string (optional) - Bottom spacing for the designation (default: "0.25em").
//    - testimonyTop: string (optional) - Top spacing for the quote (default: "1em").
//    - testimonyBottom: string (optional) - Bottom spacing for the quote (default: "1em").
// - desktopVersionBottomThreshold: number (optional) - Width threshold for desktop layout (default: 1024).
// - maxImageWidth: number (optional) - Maximum width for project images.
// - imageWidthPercentage: number (optional) - Percentage width for images relative to the component.
// - imageAspectRatio: number (optional) - Aspect ratio for images (default: 1.37).
// - isRTL: boolean (optional) - Whether to use right-to-left layout (default: false).
// - onItemClick: function (optional) - Callback when the "Open Web App" button is clicked.
// - outerRounding: string (optional) - Border radius for the image outer wrapper (default: "18.2px").
// - innerRounding: string (optional) - Border radius for the image inner wrapper (default: "18px").
// - outlineColor: string (optional) - Outline color for the image container (default: "#33313d").
// - hoverOutlineColor: string (optional) - Outline color on hover (default: "#403d4d").
// - buttonInscriptions: object (optional) - Button text options.
//    - previousButton: string - Text for the "Previous" button (default: "Previous").
//    - nextButton: string - Text for the "Next" button (default: "Next").
//    - openWebAppButton: string - Text for the "Open Web App" button (default: "Open Web App").
// - halomotButtonGradient: string (optional) - CSS gradient for Halomot buttons (default: "linear-gradient(to right, #a123f4, #603dec)").
// - halomotButtonBackground: string (optional) - Background color for Halomot buttons (default: "#111014").
// - halomotButtonTextColor: string (optional) - Text color for Halomot buttons (default: "#fff").
// - halomotButtonOuterBorderRadius: string (optional) - Outer border radius for Halomot buttons (default: "6.34px").
// - halomotButtonInnerBorderRadius: string (optional) - Inner border radius for Halomot buttons (default: "6px").
// - halomotButtonHoverTextColor: string (optional) - Text color for the Halomot button when hovered.
// - mobile: object (optional) - Mobile-specific styling options.
//    - fontSizes: object (optional) - Font size options for mobile devices.
//      - name: string (optional) - Font size for the name text on mobile.
//      - position: string (optional) - Font size for the designation text on mobile.
//      - testimony: string (optional) - Font size for the quote text on mobile.
//    - spacing: object (optional) - Spacing options for mobile devices.
//      - top: string (optional) - Top spacing for mobile.
//      - bottom: string (optional) - Bottom spacing for mobile.
//      - lineHeight: string (optional) - Line height for the quote on mobile.
//      - nameTop: string (optional) - Top spacing for the name on mobile.
//      - nameBottom: string (optional) - Bottom spacing for the name on mobile.
//      - positionTop: string (optional) - Top spacing for the designation on mobile.
//      - positionBottom: string (optional) - Bottom spacing for the designation on mobile.
//      - testimonyTop: string (optional) - Top spacing for the quote on mobile.
//      - testimonyBottom: string (optional) - Bottom spacing for the quote on mobile.
`,
code: [
  {
    filename: 'ProjectShowcase.tsx',
    content: `"use client";
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
      halomotButtonHoverTextColor?: string;
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
      halomotButtonHoverTextColor,
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
          className={\`w-full mx-auto antialiased font-sans py-\${currentSpacing.top} pb-\${currentSpacing.bottom}\`}
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
              gap: \`\${calculateGap(componentWidth)}px\`,
            }}
          >
            {isRTL && !isMobileView ? (
              <>
                <div className="w-full">
                  <div
                    className="relative"
                    style={{ paddingTop: \`\${(1 / imageAspectRatio) * 100}%\` }}
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
                      className={\`font-bold\`}
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
                    className={\`flex gap-4 \${isMobileView ? "pt-12" : "md:pt-0"} w-full\`}
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
                      {...(halomotButtonHoverTextColor ? { hoverTextColor: halomotButtonHoverTextColor } : {})}
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
                      {...(halomotButtonHoverTextColor ? { hoverTextColor: halomotButtonHoverTextColor } : {})}
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
                      {...(halomotButtonHoverTextColor ? { hoverTextColor: halomotButtonHoverTextColor } : {})}
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
                    style={{ paddingTop: \`\${(1 / imageAspectRatio) * 100}%\` }}
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
                      className={\`font-bold\`}
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
                      className={\`flex gap-4 \${isMobileView ? "pt-12" : "md:pt-0"} w-full\`}
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
                        {...(halomotButtonHoverTextColor ? { hoverTextColor: halomotButtonHoverTextColor } : {})}
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
                        {...(halomotButtonHoverTextColor ? { hoverTextColor: halomotButtonHoverTextColor } : {})}
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
                        {...(halomotButtonHoverTextColor ? { hoverTextColor: halomotButtonHoverTextColor } : {})}
                        href={testimonials[active].link} // Set the href attribute
                      />
                    </div>
                  ) : (
                    <div
                      className={\`flex gap-4 \${isMobileView ? "pt-12" : "md:pt-0"} w-full\`}
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
                        {...(halomotButtonHoverTextColor ? { hoverTextColor: halomotButtonHoverTextColor } : {})}
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
                        {...(halomotButtonHoverTextColor ? { hoverTextColor: halomotButtonHoverTextColor } : {})}
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
                        {...(halomotButtonHoverTextColor ? { hoverTextColor: halomotButtonHoverTextColor } : {})}
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
        <style jsx>{\`
          div:hover {
            background-color: \${hoverOutlineColor} !important;
          }
        \`}</style>
      </div>
    );
    
    export default ProjectShowcase;
`
  },
],
  dependencies: 'npm install framer-motion\nHalomot Button',
  credit: (
    <span>
      <a href="https://ui.aceternity.com/components/animated-testimonials" target="_blank" rel="noopener noreferrer" className="link">Animated Testimonials</a> by <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
    </span>
  ),
}

export { metadata }