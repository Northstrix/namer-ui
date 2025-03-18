import React, { useState, useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

// Define a formatter for numbers
const Formatter = {
  number: (value: number) => Intl.NumberFormat("en-US").format(Math.round(value)),
  currency: (value: number) => Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Math.round(value)),
};

// Counter component
interface CounterProps {
  /**
   * A function to format the counter value. By default, it will format the
   * number with commas.
   */
  format?: (value: number) => string;
  /**
   * The target value of the counter.
   */
  targetValue: number;
  /**
   * The direction of the counter. If "up", the counter will start from 0 and
   * go up to the target value. If "down", the counter will start from the target
   * value and go down to 0.
   */
  direction?: "up" | "down";
  /**
   * The delay in milliseconds before the counter starts counting.
   */
  delay?: number;
}

function Counter({
  format = Formatter.number,
  targetValue,
  direction = "up",
  delay = 0,
}: CounterProps) {
  "use client"; // Ensure client-side rendering

  const ref = useRef<HTMLSpanElement>(null);
  const isGoingUp = direction === "up";
  const motionValue = useMotionValue(isGoingUp ? 0 : targetValue);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 80 });
  const isInView = useInView(ref, { margin: "0px", once: true });

  useEffect(() => {
    if (!isInView) {
      return;
    }
    const timer = setTimeout(() => {
      motionValue.set(isGoingUp ? targetValue : 0);
    }, delay);
    return () => clearTimeout(timer);
  }, [isInView, delay, isGoingUp, targetValue, motionValue]);

  useEffect(() => {
    springValue.on("change", (value) => {
      if (ref.current) {
        const roundedValue = Math.round(value);
        ref.current.textContent = format ? format(roundedValue) : String(roundedValue);
      }
    });
  }, [springValue, format]);

  return (
    <span ref={ref} />
  );
}

export default Counter;
