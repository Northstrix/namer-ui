'use client';

import React, { useEffect, useRef, useCallback, useMemo } from 'react';

interface HexagonTransitionProps {
  /** If true, increases the delay spread for a more dramatic wave */
  additionalTwist?: boolean;
  /** Canvas background color (behind tiles) */
  backgroundColor?: string;
  /** Final tile fill color after animation settles */
  finalTileColor?: string;
  /** Highlight colors used when tiles first appear */
  palette?: string[];
  /** Animation speed multiplier */
  speed?: number;
  /** Grid size: Higher number = smaller hexagons */
  hexDivisor?: number;
  /** CSS class for the container */
  className?: string;
}

// --- Math & Helper Functions ---
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;
const dist = (x1: number, y1: number, x2: number, y2: number) =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
const map = (
  value: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number
) => start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));

const easeInOutQuad = (t: number) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const randomItem = <T,>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
};

const lerpColor = (c1: string, c2: string, t: number) => {
  const color1 = hexToRgb(c1);
  const color2 = hexToRgb(c2);
  const r = Math.round(lerp(color1.r, color2.r, t));
  const g = Math.round(lerp(color1.g, color2.g, t));
  const b = Math.round(lerp(color1.b, color2.b, t));
  return `rgb(${r},${g},${b})`;
};

// --- Animation Classes ---
type ShapeStateSnapshot = {
  x: number;
  y: number;
  curW: number;
  curCorner: number;
  angle?: number;
  shift?: number;
  sweepAngle?: number;
};

class HexAnimation {
  x: number;
  y: number;
  w: number;
  a: number;
  timer: number;
  t1: number;
  t2: number;
  curW: number;
  curCorner: number;
  color1: string;
  color2: string;
  curColor: string;
  finished: boolean;
  baseColor: string;
  speed: number;
  lastSnapshot: ShapeStateSnapshot | null = null;
  isMoving: boolean = true;
  totalDurationEstimate: number;

  constructor(
    x: number,
    y: number,
    w: number,
    a: number,
    t: number,
    baseColor: string,
    palette: string[],
    speed: number
  ) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.a = a;
    this.timer = t;
    this.baseColor = baseColor;
    this.speed = speed;
    this.finished = false;

    this.t1 = randomInt(20, 80);
    this.t2 = this.t1 + randomInt(20, 80);
    this.totalDurationEstimate = (Math.abs(t) + this.t2) / speed;

    this.curW = 0;
    this.curCorner = this.w;
    this.color1 = randomItem(palette);
    this.color2 = baseColor;
    this.curColor = this.color1;
  }

  drawRoundPolygon(
    ctx: CanvasRenderingContext2D,
    points: { x: number; y: number }[],
    r: number
  ) {
    ctx.beginPath();
    for (let i = 0; i < points.length; i++) {
      const curr = points[i];
      const prev = points[(i - 1 + points.length) % points.length];
      const next = points[(i + 1) % points.length];
      const v1 = { x: prev.x - curr.x, y: prev.y - curr.y };
      const v2 = { x: next.x - curr.x, y: next.y - curr.y };
      const len1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
      const len2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
      const limit1 = Math.min(r, len1 * 0.5);
      const limit2 = Math.min(r, len2 * 0.5);
      const v1Scale = limit1 / len1;
      const v2Scale = limit2 / len2;
      const pStart = {
        x: curr.x + v1.x * v1Scale,
        y: curr.y + v1.y * v1Scale,
      };
      const pEnd = {
        x: curr.x + v2.x * v2Scale,
        y: curr.y + v2.y * v2Scale,
      };
      if (i === 0) ctx.moveTo(pStart.x, pStart.y);
      else ctx.lineTo(pStart.x, pStart.y);
      ctx.quadraticCurveTo(curr.x, curr.y, pEnd.x, pEnd.y);
    }
    ctx.closePath();
    ctx.fillStyle = this.curColor;
    ctx.fill();
  }

  drawHex(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    a: number,
    r: number
  ) {
    const numPoints = 6;
    const rad = w / 2;
    const points: { x: number; y: number }[] = [];
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2 + a;
      points.push({
        x: x + Math.cos(angle) * rad,
        y: y + Math.sin(angle) * rad,
      });
    }
    this.drawRoundPolygon(ctx, points, r);
  }

  snapshot(): ShapeStateSnapshot {
    return {
      x: this.x,
      y: this.y,
      curW: this.curW,
      curCorner: this.curCorner,
    };
  }

  equalSnapshot(a: ShapeStateSnapshot | null, b: ShapeStateSnapshot | null) {
    if (!a || !b) return false;
    const eps = 0.001;
    return (
      Math.abs(a.x - b.x) < eps &&
      Math.abs(a.y - b.y) < eps &&
      Math.abs(a.curW - b.curW) < eps &&
      Math.abs(a.curCorner - b.curCorner) < eps
    );
  }

  update() {
    const prev = this.snapshot();
    this.timer += this.speed;

    if (this.timer < 0) {
      this.isMoving = false;
      return;
    }

    if (this.timer < this.t1) {
      const n = map(this.timer, 0, this.t1, 0, 1);
      this.curW = lerp(0, this.w / 2, easeInOutQuad(n));
      this.curColor = lerpColor(this.color1, this.color2, easeInOutQuad(n));
    } else if (this.timer < this.t2) {
      const n = map(this.timer, this.t1, this.t2, 0, 1);
      this.curW = lerp(this.w / 2, this.w, easeInOutQuad(n));
      this.curCorner = lerp(this.w, 0, easeInOutQuad(n));
      this.curColor = lerpColor(this.color2, this.baseColor, easeInOutQuad(n));
    } else {
      this.curW = this.w;
      this.curCorner = 0;
      this.curColor = this.baseColor;
      this.finished = true;
    }

    const now = this.snapshot();
    this.isMoving = !this.equalSnapshot(prev, now);
    this.lastSnapshot = now;
  }

  run(ctx: CanvasRenderingContext2D) {
    this.update();
    if (this.curW > 0.1) {
      this.drawHex(ctx, this.x, this.y, this.curW, this.a, this.curCorner);
    }
  }
}

class HexAnimation02 extends HexAnimation {
  rotationOffset: number;
  shift: number;
  sweepAngle: number;

  constructor(
    x: number,
    y: number,
    w: number,
    a: number,
    t: number,
    baseColor: string,
    palette: string[],
    speed: number
  ) {
    super(x, y, w, a, t, baseColor, palette, speed);
    this.rotationOffset = randomInt(0, 4) * (Math.PI / 2);
    this.shift = this.w * 2;
    this.sweepAngle = this.a;
    this.curCorner = 0;
  }

  snapshot(): ShapeStateSnapshot {
    return {
      ...super.snapshot(),
      shift: this.shift,
      sweepAngle: this.sweepAngle,
    };
  }

  equalSnapshot(a: ShapeStateSnapshot | null, b: ShapeStateSnapshot | null) {
    if (!a || !b) return false;
    const eps = 0.001;
    return (
      super.equalSnapshot(a, b) &&
      Math.abs((a.shift ?? 0) - (b.shift ?? 0)) < eps &&
      Math.abs((a.sweepAngle ?? 0) - (b.sweepAngle ?? 0)) < eps
    );
  }

  run(ctx: CanvasRenderingContext2D) {
    this.update();
    if (this.curW <= 0.1) return;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotationOffset);
    this.drawHex(
      ctx,
      this.shift,
      0,
      this.curW,
      this.sweepAngle + this.rotationOffset,
      this.curCorner
    );
    ctx.restore();
  }

  update() {
    const prev = this.snapshot();
    this.timer += this.speed;

    if (this.timer < 0) {
      this.isMoving = false;
      return;
    }

    if (this.timer < this.t1) {
      const n = map(this.timer, 0, this.t1, 0, 1);
      this.curW = lerp(0, this.w, Math.sqrt(n));
      this.sweepAngle = lerp(this.a, Math.PI, easeInOutQuad(n));
      this.curColor = lerpColor(this.color1, this.color2, easeInOutQuad(n));
    } else if (this.timer < this.t2) {
      const n = map(this.timer, this.t1, this.t2, 0, 1);
      this.shift = lerp(this.w * 2, 0, easeInOutQuad(n));
      this.curColor = lerpColor(this.color2, this.baseColor, easeInOutQuad(n));
    } else {
      this.finished = true;
      this.shift = 0;
      this.curColor = this.baseColor;
    }

    const now = this.snapshot();
    this.isMoving = !this.equalSnapshot(prev, now);
    this.lastSnapshot = now;
  }
}

class HexAnimation03 extends HexAnimation02 {
  angle0: number;
  angleTarget: number;

  constructor(
    x: number,
    y: number,
    w: number,
    a: number,
    t: number,
    baseColor: string,
    palette: string[],
    speed: number
  ) {
    super(x, y, w, a, t, baseColor, palette, speed);
    this.shift = 0;
    this.angle0 = this.rotationOffset;
    this.curCorner = this.w;
    this.angleTarget = randomItem([-1, 1]) * Math.PI;
  }

  snapshot(): ShapeStateSnapshot {
    return { ...super.snapshot(), sweepAngle: this.sweepAngle };
  }

  update() {
    const prev = this.snapshot();
    this.timer += this.speed;

    if (this.timer < 0) {
      this.isMoving = false;
      return;
    }

    if (this.timer < this.t1) {
      const n = map(this.timer, 0, this.t1, 0, 1);
      this.curW = lerp(0, this.w / 2, easeInOutQuad(n));
      this.curColor = lerpColor(this.color1, this.color2, easeInOutQuad(n));
      this.shift = lerp(0, this.w, easeInOutQuad(n));
    } else if (this.timer < this.t2) {
      const n = map(this.timer, this.t1, this.t2, 0, 1);
      this.shift = lerp(this.w, 0, easeInOutQuad(n));
      this.rotationOffset =
        this.angle0 + lerp(0, this.angleTarget, easeInOutQuad(n));
      this.curColor = lerpColor(this.color2, this.baseColor, easeInOutQuad(n));
      this.curW = lerp(this.w / 2, this.w, easeInOutQuad(n));
      this.curCorner = lerp(this.w, 0, easeInOutQuad(n));
      this.sweepAngle = lerp(this.a, -this.angleTarget, easeInOutQuad(n));
    } else {
      this.shift = 0;
      this.curW = this.w;
      this.curCorner = 0;
      this.curColor = this.baseColor;
      this.finished = true;
    }

    const now = this.snapshot();
    this.isMoving = !this.equalSnapshot(prev, now);
    this.lastSnapshot = now;
  }
}

class HexAnimation04 extends HexAnimation {
  shift: number;
  oosk: number;
  angle: number;
  angleTarget: number;

  constructor(
    x: number,
    y: number,
    w: number,
    a: number,
    t: number,
    baseColor: string,
    palette: string[],
    speed: number
  ) {
    super(x, y, w, a, t, baseColor, palette, speed);
    this.shift = 0;
    this.oosk = 0;
    this.angle = 0;
    this.angleTarget = randomItem([-1, 1]) * Math.PI;
  }

  snapshot(): ShapeStateSnapshot {
    return { ...super.snapshot(), angle: this.angle, shift: this.shift };
  }

  equalSnapshot(a: ShapeStateSnapshot | null, b: ShapeStateSnapshot | null) {
    if (!a || !b) return false;
    const eps = 0.001;
    return (
      super.equalSnapshot(a, b) &&
      Math.abs((a.angle ?? 0) - (b.angle ?? 0)) < eps &&
      Math.abs((a.shift ?? 0) - (b.shift ?? 0)) < eps
    );
  }

  run(ctx: CanvasRenderingContext2D) {
    this.update();
    if (this.curW <= 0.1) return;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = this.curColor;
    for (let i = 0; i < 6; i++) {
      const r = (this.w / 2) * this.oosk;
      ctx.beginPath();
      ctx.moveTo(this.shift, this.shift);
      ctx.lineTo(this.shift + r * Math.cos(0), this.shift + r * Math.sin(0));
      ctx.lineTo(
        this.shift + r * Math.cos((Math.PI * 2) / 6),
        this.shift + r * Math.sin((Math.PI * 2) / 6)
      );
      ctx.closePath();
      ctx.fill();
      ctx.rotate((Math.PI * 2) / 6);
    }
    ctx.restore();
  }

  update() {
    const prev = this.snapshot();
    this.timer += this.speed;

    if (this.timer < 0) {
      this.isMoving = false;
      return;
    }

    if (this.timer < this.t1) {
      const n = map(this.timer, 0, this.t1, 0, 1);
      this.shift = lerp(0, this.w / 4, easeInOutQuad(n));
      this.curColor = lerpColor(this.color1, this.color2, easeInOutQuad(n));
      this.oosk = lerp(0, 0.5, easeInOutQuad(n));
      this.angle = lerp(0, this.angleTarget, easeInOutQuad(n));
    } else if (this.timer < this.t2) {
      const n = map(this.timer, this.t1, this.t2, 0, 1);
      this.shift = lerp(this.w / 4, 0, easeInOutQuad(n));
      this.curColor = lerpColor(this.color2, this.baseColor, easeInOutQuad(n));
      this.oosk = lerp(0.5, 1, easeInOutQuad(n));
    } else {
      this.finished = true;
      this.shift = 0;
      this.oosk = 1;
      this.curColor = this.baseColor;
    }

    const now = this.snapshot();
    this.isMoving = !this.equalSnapshot(prev, now);
    this.lastSnapshot = now;
  }
}

// --- Main Component ---
const HexagonTransition: React.FC<HexagonTransitionProps> = ({
  additionalTwist = false,
  backgroundColor = '#fafafa',
  finalTileColor = '#0a0a0a',
  palette = ["#4776cb", "#a19fe5", "#6cc606"],
  speed = 1.375,
  hexDivisor = 16,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const shapesRef = useRef<any[]>([]);
  const finishedRef = useRef<boolean>(false);
  const screenDims = useRef({ w: 0, h: 0 });
  const settleCounterRef = useRef<number>(0);
  const startedRef = useRef<boolean>(false);
  const framesElapsedRef = useRef<number>(0);
  const maxFramesEstimateRef = useRef<number>(1000);

  // 1. Stabilize the palette prop. 
  // If the parent passes a new inline array (['#fff',...]), this check prevents re-init.
  const serializedPalette = JSON.stringify(palette);
  const stablePalette = useMemo(() => palette, [serializedPalette]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const computedWidth = rect.width;
    const computedHeight = rect.height;
    screenDims.current = { w: computedWidth, h: computedHeight };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = computedWidth * dpr;
    canvas.height = computedHeight * dpr;
    canvas.style.width = `${computedWidth}px`;
    canvas.style.height = `${computedHeight}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    const centerX = computedWidth / 2;
    const centerY = computedHeight / 2;
    const hexSize = Math.min(computedWidth, computedHeight) / hexDivisor;
    const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

    shapesRef.current = [];
    finishedRef.current = false;
    settleCounterRef.current = 0;
    startedRef.current = false;
    framesElapsedRef.current = 0;

    let y = 0;
    let yCounter = 0;
    let maxDuration = 0;

    while (y <= computedHeight + hexSize) {
      let x = 0;
      while (x <= computedWidth + hexSize) {
        let xPos = x;
        if (yCounter % 2 !== 0) xPos = x + hexSize * 0.75;

        const dst = dist(xPos, y, centerX, centerY);
        
        // FIX: The original logic was (additionalTwist ? 200 : 200) - now it actually differs
        const twistFactor = additionalTwist ? 600 : 200;
        const t = -Math.floor(map(dst, 0, maxDist, 0, twistFactor));

        const motionType = randomInt(1, 5);
        let shape: HexAnimation;

        if (motionType === 1)
          shape = new HexAnimation(
            xPos,
            y,
            hexSize,
            0,
            t,
            finalTileColor,
            stablePalette,
            speed
          );
        else if (motionType === 2)
          shape = new HexAnimation02(
            xPos,
            y,
            hexSize,
            0,
            t,
            finalTileColor,
            stablePalette,
            speed
          );
        else if (motionType === 3)
          shape = new HexAnimation03(
            xPos,
            y,
            hexSize,
            0,
            t,
            finalTileColor,
            stablePalette,
            speed
          );
        else
          shape = new HexAnimation04(
            xPos,
            y,
            hexSize,
            0,
            t,
            finalTileColor,
            stablePalette,
            speed
          );

        if (shape.totalDurationEstimate > maxDuration) {
          maxDuration = shape.totalDurationEstimate;
        }
        shapesRef.current.push(shape);

        x += hexSize * 1.5;
      }
      y += (hexSize * Math.sqrt(3)) / 4;
      yCounter++;
    }

    maxFramesEstimateRef.current = maxDuration * 1.2 + 20;
  }, [
    additionalTwist,
    finalTileColor,
    stablePalette,
    speed,
    hexDivisor,
  ]);

  useEffect(() => {
    // We only want the ResizeObserver to trigger if dimensions actually change.
    // However, the initial init() is handled below.
    const resizeObserver = new ResizeObserver((entries) => {
        // Optional: Debounce here if needed, but usually fine for this use case
        init(); 
    });

    if (containerRef.current) resizeObserver.observe(containerRef.current);

    // Initial setup
    init();

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const animate = () => {
      if (!ctx || !canvas) return;

      framesElapsedRef.current++;

      // Use the prop directly here
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, screenDims.current.w, screenDims.current.h);

      let allFinished = true;
      let anyMoving = false;

      for (const s of shapesRef.current) {
        s.run(ctx);
        if (!s.finished) allFinished = false;
        if (s.isMoving) anyMoving = true;
      }

      if (!startedRef.current && anyMoving) {
        startedRef.current = true;
      }

      if (startedRef.current) {
        if (allFinished && !anyMoving) {
          settleCounterRef.current += 1;
        } else {
          settleCounterRef.current = 0;
        }

        if (!finishedRef.current && settleCounterRef.current >= 20) {
          finishedRef.current = true;
          return;
        }
      }

      if (
        !finishedRef.current &&
        framesElapsedRef.current > maxFramesEstimateRef.current
      ) {
        finishedRef.current = true;
        return;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
    };
  }, [init, backgroundColor]); // Dependencies correct: init changes if props change

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        flexShrink: 0,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      />
    </div>
  );
};

export default HexagonTransition;