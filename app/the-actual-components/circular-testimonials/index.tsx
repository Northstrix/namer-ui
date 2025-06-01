'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "CircularTestimonials.tsx" file
import CircularTestimonials from '@/app/the-actual-components/circular-testimonials/CircularTestimonials'

<div className="bg-[#050505] rounded-lg flex flex-col items-center justify-center relative gap-8 py-8">
  <p className="text-[#F7F7FF] text-m max-w-[1080px] text-center mt-4 px-4">
    Disclaimer: The testimonials and restaurant name presented here are entirely fictional and created for demonstrational purposes only. Shining Yam is not a real establishment or enterprise. These fictional testimonials are designed to showcase the functionality of the Animated Testimonials component and do not represent real customer experiences or opinions. Any resemblance to actual persons, living or dead, or actual businesses is purely coincidental. This demonstration is intended solely for illustrative purposes in a web development context.
  </p>
</div>
<div className="bg-[#f1f1f7] p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  <div className="items-center justify-center relative flex" style={{ maxWidth: "1456px" }}>
    <CircularTestimonials
      testimonials={[
        {
          quote: "I was impressed by the food! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive. I'll definitely be back for more!",
          name: "Tamar Mendelson",
          designation: "Restaurant Critic",
          src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote: "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond. I'll keep returning for more exceptional dining experience.",
          name: "Joe Charlescraft",
          designation: "Frequent Visitor",
          src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
        },
        {
          quote: "Shining Yam is a hidden gem! The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
          name: "Martina Edelweist",
          designation: "Satisfied Customer",
          src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
        },
      ]}
      autoplay={true}
      colors={{
        name: "#0a0a0a",
        designation: "#454545",
        testimony: "#171717",
        arrowBackground: "#141414",
        arrowForeground: "#f1f1f7",
        arrowHoverBackground: "#00A6FB",
      }}
      fontSizes={{
        name: "28px",
        designation: "20px",
        quote: "20px",
      }}
    />
  </div>
</div>
<div className="bg-[#050505] p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
  <div className="items-center justify-center relative flex" style={{ maxWidth: "1024px" }}>
    <CircularTestimonials
      testimonials={[
        {
          quote: "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
          name: "Tamar Mendelson",
          designation: "Restaurant Critic",
          src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote: "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
          name: "Joe Charlescraft",
          designation: "Frequent Visitor",
          src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
        },
        {
          quote: "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
          name: "Martina Edelweist",
          designation: "Satisfied Customer",
          src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
        },
      ]}
      autoplay={true}
      colors={{
        name: "#f7f7ff",
        designation: "#e1e1e1",
        testimony: "#f1f1f7",
        arrowBackground: "#0582CA",
        arrowForeground: "#141414",
        arrowHoverBackground: "#f7f7ff",
      }}
      fontSizes={{
        name: "28px",
        designation: "20px",
        quote: "20px",
      }}
    />
  </div>
</div>

// Note: The CircularTestimonials component currently accepts the following props:
// - testimonials: Testimonial[] (required) - An array of Testimonial objects.
//    - quote: string - The testimonial quote.
//    - name: string - The name of the person giving the testimonial.
//    - designation: string - The designation or title of the person.
//    - src: string - The URL of the person's image.
// - autoplay: boolean (optional) - Whether to autoplay the testimonials (default: true).
// - colors: object (optional) - Color options for the component.
//    - name: string (optional) - Color for the name text (default: "#000").
//    - designation: string (optional) - Color for the position text (default: "#6b7280").
//    - testimony: string (optional) - Color for the testimonial text (default: "#4b5563").
//    - arrowBackground: string (optional) - Background color for the navigation arrows (default: "#141414").
//    - arrowForeground: string (optional) - Foreground color for the navigation arrows (default: "#f1f1f7").
//    - arrowHoverBackground: string (optional) - Background color for the navigation arrows on hover (default: "#00a6fb").
// - fontSizes: object (optional) - Font size options for the component.
//    - name: string (optional) - Font size for the name text (default: "1.5rem").
//    - designation: string (optional) - Font size for the position text (default: "0.925rem").
//    - quote: string (optional) - Font size for the testimonial text (default: "1.125rem").
//
// (The following props are NOT currently supported by this component, but are included for reference and possible future expansion)
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
//
`,
code: [
  {
    filename: 'CircularTestimonials.tsx',
    content: `"use client";
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
        \`[data-index="\${index}"]\`
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
        translateY = \`-\${(maxStickUp / img.offsetHeight) * 100}%\`;
        rotateY = -15;
      } else {
        translateX = "-20%";
        translateY = \`-\${(maxStickUp / img.offsetHeight) * 100}%\`;
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
      <style jsx>{\`
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
      \`}</style>
    </div>
  );
}

export default CircularTestimonials;
`
  },
],
  dependencies: 'npm install framer-motion gsap @lucide/react --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://ui.aceternity.com/components/animated-testimonials" target="_blank" rel="noopener noreferrer" className="link">Animated Testimonials</a> by <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
      <br />
      Used photos:
      <br />
      Photo by <a href="https://unsplash.com/@ilyapavlov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Ilya Pavlov</a> on <a href="https://unsplash.com/photos/woman-standing-beside-lights-xE87C_OvVO4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
      <br />
      Photo by <a href="https://unsplash.com/@bavepictures?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Bave Pictures</a> on <a href="https://unsplash.com/photos/man-in-gray-crew-neck-t-shirt-standing-beside-white-wall-MbYgpI1D-cA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
      <br />
      Photo by <a href="https://unsplash.com/@seteph?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Allef Vinicius</a> on <a href="https://unsplash.com/photos/closed-eye-woman-wearing-brown-hat-YbzfTr0pwLE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="link">Unsplash</a>
    </span>
  ),
}

export { metadata }