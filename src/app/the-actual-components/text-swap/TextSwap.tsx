"use client";
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
      containerRef.current.style.width = `${
        measureRef.current.getBoundingClientRect().width + WIDTH_BUFFER
      }px`;
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
            height: fixedHeight ? `${fixedHeight}px` : undefined,
            minHeight: fixedHeight ? `${fixedHeight}px` : undefined,
            maxHeight: fixedHeight ? `${fixedHeight}px` : undefined,
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