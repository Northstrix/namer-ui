'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "HeroHighlight.tsx" file
import { Highlight } from "@/app/the-actual-components/hero-highlight/HeroHighlight"

<div className="bg-[#f1f1f7] p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
    <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-[#050505] max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
      Say hi to{" "}
      <Highlight
        gradientColors="#6c5ce7, #3498db" // Blue-purple gradient colors
        gradientAngle="-35deg" // Gradient angle
        padding={{
          top: "0.72rem",
          bottom: "0.41rem",
          left: "1rem",
          right: "1rem",
        }}
        initialHighlightDelay={2000} // Delay for highlight animation
        delayColorChange={5500} // Delay for text color change
        nextColor="#f1f1f7" // New text color after delay
        defaultColor="#050505" // Default text color
      >
        Namer UI
      </Highlight>
    </h1>
</div>

// Note: The Highlight component accepts the following props:
// - children: React.ReactNode (required) - The content to be highlighted.
// - className: string (optional) - Additional CSS class names for styling.
// - gradientColors: string (required) - A string defining the gradient colors (e.g., "#6c5ce7, #3498db").
// - gradientAngle: string (optional) - The direction of the gradient (default: "to right").
// - padding: { top?: string; bottom?: string; left?: string; right?: string; } (optional) - Custom padding for the highlighted text.
// - initialHighlightDelay: number (optional) - Delay in milliseconds before the highlight animation starts (default: 0).
// - delayColorChange: number (optional) - Delay in milliseconds before the text color changes (default: 4250).
// - nextColor: string (optional) - The new text color after the delay (default: "#050505").
// - defaultColor: string (optional) - The initial text color (default: "#f7f7ff").

`,
code: [
  {
    filename: 'lib/utils.ts',
    content: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
  },
  {
    filename: 'HeroHighlight.tsx',
    content: `"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
  gradientColors: string;
  gradientAngle?: string; // Optional gradient angle
  padding?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  initialHighlightDelay?: number; // Delay for highlight animation
  delayColorChange?: number; // Delay for text color change
  nextColor?: string; // New text color after delay
  defaultColor?: string; // Default text color
}

export const Highlight = ({
  children,
  className,
  gradientColors,
  gradientAngle = "to right", // Default gradient angle
  padding = {
    top: "0.5rem",
    bottom: "0.5rem",
    left: "1rem",
    right: "1rem",
  },
  initialHighlightDelay = 0, // Default delay for highlight animation
  delayColorChange = 4250, // Default delay for text color change
  nextColor = "#050505", // New text color after delay
  defaultColor = "#f7f7ff", // Default text color
}: HighlightProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true);
          }, 1000);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  return (
    <motion.span
      ref={ref}
      initial={{ backgroundSize: "0% 100%" }}
      animate={{
        backgroundSize: isVisible ? "100% 100%" : "0% 100%",
      }}
      transition={{ duration: 2, ease: "linear", delay: initialHighlightDelay / 1000 }}
      style={{
        backgroundImage: \`linear-gradient(\$\{gradientAngle\}, \$\{gradientColors\})\`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
        padding: \`\$\{padding.top\} \$\{padding.right\} \$\{padding.bottom\} \$\{padding.left\}\`,
      }}
      className={cn(
        \`relative inline-block rounded-lg\`,
        className
      )}
    >
      <TextColorChanger
        children={children}
        fontSize="60px"
        delayColorChange={delayColorChange}
        nextColor={nextColor}
        defaultColor={defaultColor}
      />
    </motion.span>
  );
};

interface TextColorChangerProps {
  children: React.ReactNode;
  fontSize?: string;
  delayColorChange?: number; // Delay for text color change
  nextColor?: string; // New text color after delay
  defaultColor?: string; // Default text color
}

export const TextColorChanger: React.FC<TextColorChangerProps> = ({
  children,
  fontSize,
  delayColorChange = 4250,
  nextColor = "#050505", // New text color after delay
  defaultColor = "#f7f7ff", // Default text color
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        if (textRef.current) {
          textRef.current.classList.add("animate");
        }
      }, delayColorChange);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, delayColorChange]);

  return (
    <AnimatedText fontSize={fontSize} ref={textRef} nextColor={nextColor} defaultColor={defaultColor}>
      {children}
    </AnimatedText>
  );
};

const AnimatedText = styled.span<{
  fontSize?: string;
  nextColor?: string;
  defaultColor?: string;
}>\`
  display: inline;
  font-size: \$\{props => props.fontSize || "inherit"\};
  white-space: pre;
  color: \$\{props => props.defaultColor || "#f7f7ff"\}; /* Set default text color explicitly */
  transition: color 1s ease-in-out;
  &.animate \{
    color: \$\{props => props.nextColor || "#050505"\}; /* Set new text color explicitly */
  \}
\`;
`
  },
],
  dependencies: 'npm install framer-motion\nnpm install styled-components --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://ui.aceternity.com/components/hero-highlight" target="_blank" rel="noopener noreferrer" className="link">Hero Highlight</a> by <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
    </span>
  ),
}

export { metadata }