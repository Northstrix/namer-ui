"use client";
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
        backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
        padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
      }}
      className={cn(
        `relative inline-block rounded-lg`,
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
}>`
  display: inline;
  font-size: ${props => props.fontSize || "inherit"};
  white-space: pre;
  color: ${props => props.defaultColor || "#f7f7ff"}; /* Set default text color explicitly */
  transition: color 1s ease-in-out;
  &.animate {
    color: ${props => props.nextColor || "#050505"}; /* Set new text color explicitly */
  }
`;