"use client";

import React, { useEffect, useMemo, useRef } from "react";

type EasingName = "out" | "in" | "inOut" | "outBack" | "bounce";
type ColorInput = string | string[];
type Direction = "ltr" | "rtl";
type SplitMode = "char" | "word" | "grapheme";

type ShiftingTextProps = {
  text?: string;
  className?: string;
  stageClassName?: string;
  direction?: Direction;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number | string;
  letterSpacing?: string;
  lineHeight?: string | number;
  backFontOpacity?: number;
  showBackFont?: boolean;
  showLive?: boolean;
  liveOnTop?: boolean;
  liveVisibleAtHome?: boolean;
  intensity?: number;
  amplitude?: number;
  centerOffset?: number;
  pace?: number;
  enter?: number;
  hold?: number;
  exit?: number;
  pause?: number;
  easingIn?: EasingName;
  easingOut?: EasingName;
  loop?: boolean;
  splitBy?: SplitMode;
  frontColor?: ColorInput;
  backColor?: ColorInput;
  frontShadow?: ColorInput;
  backShadow?: ColorInput;
  frontStroke?: ColorInput;
  backStroke?: ColorInput;
  frontStrokeWidth?: number;
  backStrokeWidth?: number;
  stageStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  ghostStyle?: React.CSSProperties;
  liveStyle?: React.CSSProperties;
};

const defaultProps = {
  text: "Namer UI",
  direction: "ltr" as Direction,
  fontFamily:
    "'Recursive', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontSize: "clamp(52px, 10vw, 116px)",
  fontWeight: 600,
  letterSpacing: "-0.02em",
  lineHeight: 1,
  backFontOpacity: 0.2,
  showBackFont: true,
  showLive: true,
  liveOnTop: true,
  liveVisibleAtHome: true,
  intensity: 0.64,
  amplitude: 32,
  centerOffset: 22,
  pace: 5,
  enter: 40,
  hold: 40,
  exit: 36,
  pause: 44,
  easingIn: "out" as EasingName,
  easingOut: "in" as EasingName,
  loop: true,
  splitBy: "grapheme" as SplitMode,
  frontColor: ["#fff", "#00a7fa"],
  backColor: ["#aaa"],
  frontShadow: "none",
  backShadow: "none",
  frontStroke: "transparent",
  backStroke: "transparent",
  frontStrokeWidth: 0,
  backStrokeWidth: 0,
} satisfies Required<
  Omit<
    ShiftingTextProps,
    | "className"
    | "stageClassName"
    | "stageStyle"
    | "textStyle"
    | "ghostStyle"
    | "liveStyle"
  >
>;

const ease = {
  out: (t: number) => 1 - (1 - t) ** 3,
  in: (t: number) => t ** 3,
  inOut: (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2),
  outBack: (t: number) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2;
  },
  bounce: (t: number) => {
    const n = 7.5625;
    const d = 2.75;
    if (t < 1 / d) return n * t * t;
    if (t < 2 / d) return n * (t -= 1.5 / d) * t + 0.75;
    if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + 0.9375;
    return n * (t -= 2.625 / d) * t + 0.984375;
  },
} as const;

const splitText = (text: string, splitBy: SplitMode): string[] => {
  if (splitBy === "word") return text.split(/(\s+)/).filter(Boolean);
  if (splitBy === "char") return Array.from(text);
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    return Array.from(seg.segment(text), (s) => s.segment);
  }
  return Array.from(text);
};

const cyc = (
  f: number,
  offset: number,
  enter: number,
  hold: number,
  exit: number,
  pause: number,
  eIn: (t: number) => number,
  eOut: (t: number) => number
) => {
  if (f < offset) return 0;
  const total = enter + hold + exit + pause;
  const t = (f - offset) % total;
  if (t < enter) return eIn(t / enter);
  if (t < enter + hold) return 1;
  if (t < enter + hold + exit) return 1 - eOut((t - enter - hold) / exit);
  return 0;
};

const normalizeColorSet = (
  value: ColorInput | undefined,
  fallback: string[]
) => {
  if (Array.isArray(value)) return value.length ? value : fallback;
  return value ? [value] : fallback;
};

const pick = (arr: string[], index: number) => arr[index % arr.length];

export default function ShiftingText(props: ShiftingTextProps) {
  const p = { ...defaultProps, ...props };
  const chars = useMemo(() => splitText(p.text, p.splitBy), [p.text, p.splitBy]);
  const refs = useRef<Array<HTMLSpanElement | null>>([]);
  const frame = useRef(0);

  const frontColors = useMemo(
    () => normalizeColorSet(p.frontColor, defaultProps.frontColor),
    [p.frontColor]
  );
  const backColors = useMemo(
    () => normalizeColorSet(p.backColor, defaultProps.backColor),
    [p.backColor]
  );
  const frontShadows = useMemo(
    () => normalizeColorSet(p.frontShadow, defaultProps.frontShadow),
    [p.frontShadow]
  );
  const backShadows = useMemo(
    () => normalizeColorSet(p.backShadow, defaultProps.backShadow),
    [p.backShadow]
  );
  const frontStrokes = useMemo(
    () => normalizeColorSet(p.frontStroke, defaultProps.frontStroke),
    [p.frontStroke]
  );
  const backStrokes = useMemo(
    () => normalizeColorSet(p.backStroke, defaultProps.backStroke),
    [p.backStroke]
  );

  useEffect(() => {
    let raf = 0;

    const tick = () => {
      const N = chars.length;
      const center = (N - 1) / 2;
      const eIn = ease[p.easingIn];
      const eOut = ease[p.easingOut];

      chars.forEach((_, i) => {
        const el = refs.current[i];
        if (!el) return;

        const phase = cyc(
          frame.current,
          i * p.pace,
          p.enter,
          p.hold,
          p.exit,
          p.pause,
          eIn,
          eOut
        );

        const dist =
          (Math.abs(i - center) * p.amplitude + p.centerOffset) * p.intensity;
        const dir = i % 2 === 0 ? -1 : 1;

        el.style.transform = `translateY(${dir * dist * phase}px)`;

        const visible = p.liveVisibleAtHome ? 1 : phase;
        el.style.opacity = `${visible}`;
      });

      frame.current += 1;
      if (p.loop) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [
    chars,
    p.easingIn,
    p.easingOut,
    p.pace,
    p.enter,
    p.hold,
    p.exit,
    p.pause,
    p.amplitude,
    p.centerOffset,
    p.intensity,
    p.loop,
    p.liveVisibleAtHome,
  ]);

  const lineHeightValue =
    typeof p.lineHeight === "number" ? String(p.lineHeight) : p.lineHeight;
  const liveZ = p.liveOnTop ? 2 : 0;
  const ghostZ = p.liveOnTop ? 1 : 2;

  return (
    <div
      dir={p.direction}
      className={p.stageClassName ?? ""}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        direction: p.direction,
        ...p.stageStyle,
      }}
    >
      <div
        dir={p.direction}
        className={p.className ?? ""}
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: p.fontFamily,
          fontSize: p.fontSize,
          fontWeight: p.fontWeight,
          letterSpacing: p.letterSpacing,
          lineHeight: lineHeightValue,
          direction: p.direction,
          ...p.textStyle,
        }}
      >
        {p.showBackFont && (
          <div
            aria-hidden="true"
            style={{
              position: "relative",
              zIndex: ghostZ,
              display: "flex",
              opacity: p.backFontOpacity,
              userSelect: "none",
              pointerEvents: "none",
              direction: p.direction,
              ...p.ghostStyle,
            }}
          >
            {chars.map((ch, i) => (
              <span
                key={`ghost-${i}`}
                style={{
                  display: "inline-block",
                  whiteSpace: "pre",
                  color: pick(backColors, i),
                  textShadow: pick(backShadows, i),
                  WebkitTextStroke: `${p.backStrokeWidth}px ${pick(backStrokes, i)}`,
                }}
              >
                {ch === " " ? "\u00a0" : ch}
              </span>
            ))}
          </div>
        )}

        {p.showLive && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: liveZ,
              display: "flex",
              pointerEvents: "none",
              direction: p.direction,
              ...p.liveStyle,
            }}
          >
            {chars.map((ch, i) => (
              <span
                key={`live-${i}`}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                style={{
                  display: "inline-block",
                  whiteSpace: "pre",
                  willChange: "transform, opacity",
                  opacity: p.liveVisibleAtHome ? 1 : 0,
                  transform: "translateY(0px)",
                  color: pick(frontColors, i),
                  textShadow: pick(frontShadows, i),
                  WebkitTextStroke: `${p.frontStrokeWidth}px ${pick(frontStrokes, i)}`,
                }}
              >
                {ch === " " ? "\u00a0" : ch}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}