'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "TextSwap.tsx" file
import TextSwap from '@/app/the-actual-components/text-swap/TextSwap'

<div style={{
  display: 'flex',
  flexWrap: 'wrap',
  gap: '36px',
  justifyContent: 'center',
  padding: '32px',
  backgroundColor: '#050505',
  borderRadius: '8px',
  minHeight: '300px'
}}>
  {/* First (original) item */}
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <div
      style={{
        fontWeight: 700,
        fontSize: "3rem",
        lineHeight: 1.1,
      }}
    >
      <TextSwap
        texts={[
          "Next.js",
          "Tailwind",
          "Framer Motion",
          "GSAP",
          "Namer UI",
        ]}
        mainClassName="px-3 py-2 bg-[#00a0d8] overflow-hidden py-1 md:py-2 justify-center rounded-lg"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
        style={{
          boxShadow: 'none',
          background: "#00a0d8",
          color: "#fff",
          fontWeight: 700,
          fontSize: "2.4rem",
          minHeight: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </div>
  </div>

  {/* Second (purple, Hebrew) item */}
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      direction: "rtl",
    }}
  >
    <div
      style={{
        fontWeight: 700,
        fontSize: "3rem",
        lineHeight: 1.1,
      }}
    >
      <TextSwap
        texts={[
          "מדבר",
          "בלוברי לום",
          "פיתוח אתרים",
          "נמר",
        ]}
        mainClassName="px-3 py-2 bg-[#7c3aed] overflow-hidden py-1 md:py-2 justify-center rounded-[32px]"
        staggerFrom="first"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "120%" }}
        staggerDuration={0.05}
        splitLevelClassName="overflow-hidden"
        transition={{ type: "spring", damping: 18, stiffness: 180, mass: 0.8 }}
        rotationInterval={1800}
        style={{
          boxShadow: 'none',
          background: "#7c3aed",
          color: "#111014",
          fontWeight: 700,
          fontSize: "2.4rem",
          minHeight: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "32px",
        }}
      />
    </div>
  </div>
</div>

// Note: The TextSwap component accepts the following props:
// - texts: string[] (required) - An array of strings to rotate through and animate.
// - as: ElementType (optional) - The HTML tag or React component to render as the root (default: "p").
// - rotationInterval: number (optional) - Time in milliseconds between automatic rotations (default: 2000).
// - initial: MotionProps["initial"] | MotionProps["initial"][] (optional) - Initial animation state(s) for Framer Motion.
// - animate: MotionProps["animate"] | MotionProps["animate"][] (optional) - Animate state(s) for Framer Motion.
// - exit: MotionProps["exit"] | MotionProps["exit"][] (optional) - Exit animation state(s) for Framer Motion.
// - animatePresenceMode: AnimatePresenceProps["mode"] (optional) - Mode for AnimatePresence (default: "wait").
// - animatePresenceInitial: boolean (optional) - Whether AnimatePresence should run initial animations (default: false).
// - staggerDuration: number (optional) - Delay in seconds between each animated character/word (default: 0).
// - staggerFrom: "first" | "last" | "center" | number | "random" (optional) - Where the stagger animation should start from (default: "first").
// - transition: Transition (optional) - Framer Motion transition object for the animation (default: { type: "spring", damping: 25, stiffness: 300 }).
// - loop: boolean (optional) - Whether the rotation should loop after reaching the end (default: true).
// - auto: boolean (optional) - Whether to automatically rotate through texts (default: true).
// - splitBy: "words" | "characters" | "lines" | string (optional) - How to split the text for animation (default: "characters").
// - onNext: (index: number) => void (optional) - Callback function triggered when the next text is shown, receiving the new index.
// - mainClassName: string (optional) - Additional className(s) for the outermost container.
// - splitLevelClassName: string (optional) - Additional className(s) for each split group (word/line/character).
// - elementLevelClassName: string (optional) - Additional className(s) for each animated element.
// - ref: React.Ref<TextRotateRef> (optional) - Ref exposing navigation methods: next, previous, jumpTo, reset.
// - style: React.CSSProperties (optional) - Inline styles for the root element.
`,
code: [
  {
    filename: 'lib/utils.ts',
    content: `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
  },
  {
    filename: 'TextSwap.tsx',
    content: `"use client";
import { ElementType, forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { AnimatePresence, AnimatePresenceProps, motion, MotionProps, Transition } from "framer-motion";
import gsap from "gsap";
import { cn } from "@/lib/utils";

// Split text into characters with support for Unicode and emojis
const splitIntoCharacters = (text: string): string[] => {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }
  return Array.from(text);
};

interface TextRotateProps {
  texts: string[];
  as?: ElementType;
  rotationInterval?: number;
  initial?: MotionProps["initial"] | MotionProps["initial"][];
  animate?: MotionProps["animate"] | MotionProps["animate"][];
  exit?: MotionProps["exit"] | MotionProps["exit"][];
  animatePresenceMode?: AnimatePresenceProps["mode"];
  animatePresenceInitial?: boolean;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | number | "random";
  transition?: Transition;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "words" | "characters" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
  style?: React.CSSProperties; 
}

export interface TextRotateRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

interface WordObject {
  characters: string[];
  needsSpace: boolean;
}

const WIDTH_BUFFER = 4;

type Step = "idle" | "exiting" | "resizing" | "entering";

const TextRotate = forwardRef<TextRotateRef, TextRotateProps>(
  (
    {
      texts,
      as = "p",
      transition = { type: "spring", damping: 25, stiffness: 300 },
      initial = { y: "100%", opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: "-120%", opacity: 0 },
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      rotationInterval = 2000,
      staggerDuration = 0,
      staggerFrom = "first",
      loop = true,
      auto = true,
      splitBy = "characters",
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...props
    },
    ref
  ) => {
    // State for sequencing
    const [step, setStep] = useState<Step>("idle");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [nextTextIndex, setNextTextIndex] = useState<number | null>(null);
    const [showText, setShowText] = useState(true);
    const [fixedHeight, setFixedHeight] = useState<number | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const measureRef = useRef<HTMLSpanElement>(null);
    const allMeasureRefs = useRef<Array<HTMLSpanElement | null>>([]);

    // Split text for animation
    const elements = useMemo(() => {
      const currentText =
        typeof nextTextIndex === "number" ? texts[nextTextIndex] : texts[currentTextIndex];
      if (splitBy === "characters") {
        const text = currentText.split(" ");
        return text.map((word, i) => ({
          characters: splitIntoCharacters(word),
          needsSpace: i !== text.length - 1,
        }));
      }
      return splitBy === "words"
        ? currentText.split(" ")
        : splitBy === "lines"
        ? currentText.split("\n")
        : currentText.split(splitBy);
    }, [texts, currentTextIndex, nextTextIndex, splitBy]);

    // Calculate stagger delay for each text segment
    const getStaggerDelay = useCallback(
      (index: number, totalChars: number) => {
        const total = totalChars;
        if (staggerFrom === "first") return index * staggerDuration;
        if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
        if (staggerFrom === "center") {
          const center = Math.floor(total / 2);
          return Math.abs(center - index) * staggerDuration;
        }
        if (staggerFrom === "random") {
          const randomIndex = Math.floor(Math.random() * total);
          return Math.abs(randomIndex - index) * staggerDuration;
        }
        return Math.abs((staggerFrom as number) - index) * staggerDuration;
      },
      [staggerFrom, staggerDuration]
    );

    // Get animation props for each text segment
    const getAnimationProps = useCallback(
      (index: number) => {
        const getProp = (
          prop:
            | MotionProps["initial"]
            | MotionProps["initial"][]
            | MotionProps["animate"]
            | MotionProps["animate"][]
            | MotionProps["exit"]
            | MotionProps["exit"][]
        ) => (Array.isArray(prop) ? prop[index % prop.length] : prop);
        return {
          initial: getProp(initial) as MotionProps["initial"],
          animate: getProp(animate) as MotionProps["animate"],
          exit: getProp(exit) as MotionProps["exit"],
        };
      },
      [initial, animate, exit]
    );

    // Navigation methods (trigger sequence)
    const goToIndex = useCallback(
      (targetIndex: number) => {
        if (targetIndex === currentTextIndex || step !== "idle") return;
        setNextTextIndex(targetIndex);
        setStep("exiting");
        setShowText(false); // triggers AnimatePresence exit
      },
      [currentTextIndex, step]
    );

    const next = useCallback(() => {
      const nextIndex =
        currentTextIndex === texts.length - 1
          ? loop
            ? 0
            : currentTextIndex
          : currentTextIndex + 1;
      goToIndex(nextIndex);
    }, [currentTextIndex, texts.length, loop, goToIndex]);

    const previous = useCallback(() => {
      const prevIndex =
        currentTextIndex === 0
          ? loop
            ? texts.length - 1
            : currentTextIndex
          : currentTextIndex - 1;
      goToIndex(prevIndex);
    }, [currentTextIndex, texts.length, loop, goToIndex]);

    const jumpTo = useCallback(
      (index: number) => {
        const validIndex = Math.max(0, Math.min(index, texts.length - 1));
        goToIndex(validIndex);
      },
      [texts.length, goToIndex]
    );

    const reset = useCallback(() => {
      goToIndex(0);
    }, [goToIndex]);

    // Expose all navigation functions via ref
    useImperativeHandle(
      ref,
      () => ({
        next,
        previous,
        jumpTo,
        reset,
      }),
      [next, previous, jumpTo, reset]
    );

    // Auto-rotate text (only when idle)
    useEffect(() => {
      if (!auto || step !== "idle") return;
      const intervalId = setInterval(() => {
        next();
      }, rotationInterval);
      return () => clearInterval(intervalId);
    }, [auto, rotationInterval, next, step]);

    // On mount, measure all possible text heights and set fixedHeight
    useEffect(() => {
      if (!allMeasureRefs.current.length) return;
      let maxHeight = 0;
      allMeasureRefs.current.forEach((ref) => {
        if (ref) {
          const h = ref.getBoundingClientRect().height;
          if (h > maxHeight) maxHeight = h;
        }
      });
      setFixedHeight(maxHeight);
    }, [texts, mainClassName, splitBy]);

    // When AnimatePresence exit finishes, animate width
    const handleTextExitComplete = useCallback(() => {
      setStep("resizing");
      requestAnimationFrame(() => {
        if (!containerRef.current || !measureRef.current) return;
        const targetWidth = measureRef.current.getBoundingClientRect().width + WIDTH_BUFFER;
        gsap.to(containerRef.current, {
          width: targetWidth,
          duration: 0.2,
          ease: "power1.inOut",
          onComplete: () => {
            setStep("entering");
            setCurrentTextIndex(nextTextIndex!);
            setNextTextIndex(null);
            setShowText(true);
          },
        });
      });
    }, [nextTextIndex]);

    // On mount, set initial width
    useEffect(() => {
      if (!containerRef.current || !measureRef.current) return;
      containerRef.current.style.width = \`\${
        measureRef.current.getBoundingClientRect().width + WIDTH_BUFFER
      }px\`;
    }, []);

    // After text enter, go back to idle
    useEffect(() => {
      if (step === "entering" && showText) {
        const timeout = setTimeout(() => {
          setStep("idle");
          if (typeof onNext === "function") onNext(currentTextIndex);
        }, 250);
        return () => clearTimeout(timeout);
      }
    }, [step, showText, currentTextIndex, onNext]);

    // Custom motion component to render the text as a custom HTML tag provided via prop
    const MotionComponent = useMemo(() => motion(as ?? "p"), [as]);

    return (
      <>
        {/* Hidden spans for height measurement (once, on mount) */}
        <span
          style={{
            position: "absolute",
            left: -9999,
            top: 0,
            opacity: 0,
            pointerEvents: "none",
            whiteSpace: "pre",
            font: "inherit",
            fontSize: "inherit",
            fontWeight: "inherit",
            fontFamily: "inherit",
            padding: "inherit",
            margin: "inherit",
            boxSizing: "border-box",
            visibility: "hidden",
            height: "auto",
          }}
        >
          {texts.map((t, i) => (
            <span
                ref={(el) => {
                  allMeasureRefs.current[i] = el;
                }}
              key={i}
              className={mainClassName}
            >
              {t}
            </span>
          ))}
        </span>
        <div
          ref={containerRef}
          style={{
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            verticalAlign: "middle",
            width: "auto",
            height: fixedHeight ? \`\${fixedHeight}px\` : undefined,
            minHeight: fixedHeight ? \`\${fixedHeight}px\` : undefined,
            maxHeight: fixedHeight ? \`\${fixedHeight}px\` : undefined,
          }}
          className={cn("relative", mainClassName)}
        >
          {/* Hidden span for measuring width */}
          <span
            ref={measureRef}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              opacity: 0,
              pointerEvents: "none",
              whiteSpace: "pre",
              font: "inherit",
              fontSize: "inherit",
              fontWeight: "inherit",
              fontFamily: "inherit",
              padding: "inherit",
              margin: "inherit",
              boxSizing: "border-box",
              visibility: "hidden",
              height: 0,
            }}
            className={mainClassName}
          >
            {typeof nextTextIndex === "number" && step === "resizing"
              ? texts[nextTextIndex]
              : texts[currentTextIndex]}
          </span>
          <MotionComponent
            className={cn("flex whitespace-nowrap w-full", mainClassName)}
            transition={transition}
            layout
            {...props}
          >
            <span className="sr-only">{texts[currentTextIndex]}</span>
            <AnimatePresence
              mode={animatePresenceMode}
              initial={animatePresenceInitial}
              onExitComplete={handleTextExitComplete}
            >
              {showText && (
                <motion.span
                  key={
                    typeof nextTextIndex === "number" && step === "entering"
                      ? nextTextIndex
                      : currentTextIndex
                  }
                  className={cn(
                    "flex whitespace-nowrap",
                    splitBy === "lines" && "flex-col w-full"
                  )}
                  aria-hidden
                  layout
                >
                  {(splitBy === "characters"
                    ? (elements as WordObject[])
                    : (elements as string[]).map((el, i) => ({
                        characters: [el],
                        needsSpace: i !== (elements as string[]).length - 1,
                      }))
                  ).map((wordObj, wordIndex, array) => {
                    const previousCharsCount = array
                      .slice(0, wordIndex)
                      .reduce((sum, word) => sum + word.characters.length, 0);
                    return (
                      <span
                        key={wordIndex}
                        className={cn("inline-flex whitespace-nowrap", splitLevelClassName)}
                      >
                        {wordObj.characters.map((char, charIndex) => {
                          const totalIndex = previousCharsCount + charIndex;
                          const animationProps = getAnimationProps(totalIndex);
                          return (
                            <span key={totalIndex} className={cn(elementLevelClassName)}>
                              <motion.span
                                {...animationProps}
                                key={charIndex}
                                transition={{
                                  ...transition,
                                  delay: getStaggerDelay(
                                    previousCharsCount + charIndex,
                                    array.reduce(
                                      (sum, word) => sum + word.characters.length,
                                      0
                                    )
                                  ),
                                }}
                                className={"inline-block"}
                              >
                                {char}
                              </motion.span>
                            </span>
                          );
                        })}
                        {wordObj.needsSpace && (
                          <span className="whitespace-pre"> </span>
                        )}
                      </span>
                    );
                  })}
                </motion.span>
              )}
            </AnimatePresence>
          </MotionComponent>
        </div>
      </>
    );
  }
);

TextRotate.displayName = "TextRotate";
export default TextRotate;
`
  },
],
  dependencies: 'npm install gsap --legacy-peer-deps\nnpm install framer-motion',
  credit: (
    <span>
      <a href="https://www.fancycomponents.dev/docs/components/text/text-rotate" target="_blank" rel="noopener noreferrer" className="link">Text Rotate</a> by <a href="https://www.fancycomponents.dev/" target="_blank" rel="noopener noreferrer" className="link">Fancy Components</a>
    </span>
  ),
}

export { metadata }