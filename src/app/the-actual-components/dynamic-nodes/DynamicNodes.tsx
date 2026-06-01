"use client";

import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DynamicNodesDirection = "ltr" | "rtl";
type DynamicNodesLabelSide = "left" | "right";
type DynamicNodesPosUnit = "px" | "%";
type DynamicNodesPoint = { x: number; y: number; unit?: DynamicNodesPosUnit };

export interface DynamicNodeItem {
  dynamicNodeId: string;
  dynamicNodeText: string;
  dynamicNodeInitialX?: number;
  dynamicNodeInitialY?: number;
  dynamicNodeInitialXUnit?: DynamicNodesPosUnit;
  dynamicNodeInitialYUnit?: DynamicNodesPosUnit;
  dynamicNodeInitialPosition?: DynamicNodesPoint;
  dynamicNodeRadius?: number;
  dynamicNodeBorderRadius?: number | number[];
  dynamicNodeFillColor?: string;
  dynamicNodeGlowColor?: string;
  dynamicNodeGlowBlur?: number;
  dynamicNodeGlowAlpha?: number;
  dynamicNodeTextColor?: string;
  dynamicNodeFontFamily?: string;
  dynamicNodeFontSize?: number;
  dynamicNodeFontWeight?: number | string;
  dynamicNodeTextDirection?: DynamicNodesDirection;
  dynamicNodeLabelSide?: DynamicNodesLabelSide;
  dynamicNodeLabelGap?: number;
  dynamicNodeLabelOffsetX?: number;
  dynamicNodeLabelOffsetY?: number;
  dynamicNodeLabelPaddingX?: number;
  dynamicNodeVelocityX?: number;
  dynamicNodeVelocityY?: number;
  dynamicNodeVelocityUnit?: DynamicNodesPosUnit;
  dynamicNodeRandomizeMotion?: boolean;
  dynamicNodeMaxTextWidth?: number;
  dynamicNodeAutoTextScale?: boolean;
  dynamicNodeAutoTextFontSize?: number;
  dynamicNodeTextLayerEnabled?: boolean;
  dynamicNodeTextLayerColor?: string;
  dynamicNodeTextLayerFontSize?: number;
  dynamicNodeTextLayerFontWeight?: number | string;
  dynamicNodeTextLayerFontFamily?: string;
  dynamicNodeTextLayerOffsetX?: number;
  dynamicNodeTextLayerOffsetY?: number;
}

export interface DynamicNodeLink {
  dynamicLinkFromIds: string[];
  dynamicLinkToIds: string[];
  dynamicLinkColor?: string;
  dynamicLinkWidth?: number;
  dynamicLinkOpacity?: number;
  dynamicLinkDash?: number[];
  dynamicLinkCap?: CanvasLineCap;
  dynamicLinkJoin?: CanvasLineJoin;
}

export interface DynamicNodesProps {
  nodes: DynamicNodeItem[];
  links?: DynamicNodeLink[];
  className?: string;
  style?: CSSProperties;
  background?: string;
  borderColor?: string;
  canvasClassName?: string;
  defaultNodeColor?: string;
  defaultGlowColor?: string;
  defaultTextColor?: string;
  defaultFontFamily?: string;
  defaultFontSize?: number;
  defaultFontWeight?: number | string;
  defaultRadius?: number;
  defaultGlowBlur?: number;
  defaultGlowAlpha?: number;
  defaultLinkColor?: string;
  defaultLinkWidth?: number;
  defaultLinkOpacity?: number;
  defaultLinkDash?: number[];
  defaultLinkCap?: CanvasLineCap;
  defaultLinkJoin?: CanvasLineJoin;
  useRandomPositions?: boolean;
  useRandomSpeed?: boolean;
  clampPadding?: number;
  animationSpeedMultiplier?: number;
  showCanvas?: boolean;
  fadeMs?: number;
  height?: number | string;
  width?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  activateNodes?: boolean;
}

function roundRectPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number | number[]
) {
  const w = Math.abs(width);
  const h = Math.abs(height);
  const r = Math.min(w, h) / 2;

  if (typeof ctx.roundRect === "function") {
    const radii = Array.isArray(radius)
      ? radius.map((v) => Math.max(0, Math.min(v, r)))
      : Math.max(0, Math.min(radius, r));
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radii as any);
    return;
  }

  const rr = typeof radius === "number" ? radius : Math.max(...radius.map((v) => v || 0));
  const cr = Math.max(0, Math.min(rr, r));

  ctx.beginPath();
  ctx.moveTo(x + cr, y);
  ctx.lineTo(x + width - cr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + cr);
  ctx.lineTo(x + width, y + height - cr);
  ctx.quadraticCurveTo(x + width, y + height, x + width - cr, y + height);
  ctx.lineTo(x + cr, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - cr);
  ctx.lineTo(x, y + cr);
  ctx.quadraticCurveTo(x, y, x + cr, y);
  ctx.closePath();
}

class NodeSprite {
  id: string;
  text: string;
  x: number;
  y: number;
  radius: number;
  borderRadius?: number | number[];
  color: string;
  glowColor: string;
  glowBlur: number;
  glowAlpha: number;
  textColor: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: number | string;
  direction: DynamicNodesDirection;
  labelSide: DynamicNodesLabelSide;
  labelGap: number;
  labelOffsetX: number;
  labelOffsetY: number;
  labelPaddingX: number;
  speedX: number;
  speedY: number;
  opacity = 0;
  textWidth = 0;
  actualLeft = 0;
  actualRight = 0;
  actualAscent = 0;
  actualDescent = 0;
  maxTextWidth?: number;
  autoTextScale: boolean;
  autoTextFontSize: number;
  textLayerEnabled = false;
  textLayerColor = "#fff";
  textLayerFontSize = 0;
  textLayerFontWeight: number | string = 400;
  textLayerFontFamily = "Inter";
  textLayerOffsetX = 0;
  textLayerOffsetY = 0;

  constructor(
    cfg: DynamicNodeItem &
      Required<
        Pick<
          DynamicNodesProps,
          | "defaultNodeColor"
          | "defaultGlowColor"
          | "defaultTextColor"
          | "defaultFontFamily"
          | "defaultFontSize"
          | "defaultFontWeight"
          | "defaultRadius"
          | "defaultGlowBlur"
          | "defaultGlowAlpha"
        >
      >,
    bounds: { width: number; height: number },
    useRandomPositions: boolean,
    useRandomSpeed: boolean
  ) {
    this.id = cfg.dynamicNodeId;
    this.text = cfg.dynamicNodeText;
    this.radius = cfg.dynamicNodeRadius ?? cfg.defaultRadius;
    this.borderRadius = cfg.dynamicNodeBorderRadius;
    this.color = cfg.dynamicNodeFillColor ?? cfg.defaultNodeColor;
    this.glowColor = cfg.dynamicNodeGlowColor ?? this.color ?? cfg.defaultGlowColor;
    this.glowBlur = cfg.dynamicNodeGlowBlur ?? cfg.defaultGlowBlur;
    this.glowAlpha = cfg.dynamicNodeGlowAlpha ?? cfg.defaultGlowAlpha;
    this.textColor = cfg.dynamicNodeTextColor ?? cfg.defaultTextColor;
    this.fontFamily = cfg.dynamicNodeFontFamily ?? cfg.defaultFontFamily;
    this.fontSize = cfg.dynamicNodeFontSize ?? cfg.defaultFontSize;
    this.fontWeight = cfg.dynamicNodeFontWeight ?? cfg.defaultFontWeight;
    this.direction = cfg.dynamicNodeTextDirection ?? "ltr";
    this.labelSide = cfg.dynamicNodeLabelSide ?? (this.direction === "rtl" ? "left" : "right");
    this.labelGap = cfg.dynamicNodeLabelGap ?? 12;
    this.labelOffsetX = cfg.dynamicNodeLabelOffsetX ?? 0;
    this.labelOffsetY = cfg.dynamicNodeLabelOffsetY ?? 0;
    this.labelPaddingX = cfg.dynamicNodeLabelPaddingX ?? 0;
    this.speedX =
      cfg.dynamicNodeVelocityX ??
      (useRandomSpeed || cfg.dynamicNodeRandomizeMotion !== false ? (Math.random() - 0.5) * 1.5 : 0.5);
    this.speedY =
      cfg.dynamicNodeVelocityY ??
      (useRandomSpeed || cfg.dynamicNodeRandomizeMotion !== false ? (Math.random() - 0.5) * 1.5 : 0.5);
    this.maxTextWidth = cfg.dynamicNodeMaxTextWidth;
    this.autoTextScale = cfg.dynamicNodeAutoTextScale ?? false;
    this.autoTextFontSize = cfg.dynamicNodeAutoTextFontSize ?? this.fontSize;
    this.textLayerEnabled = cfg.dynamicNodeTextLayerEnabled ?? false;
    this.textLayerColor = cfg.dynamicNodeTextLayerColor ?? this.textColor;
    this.textLayerFontSize = cfg.dynamicNodeTextLayerFontSize ?? this.fontSize;
    this.textLayerFontWeight = cfg.dynamicNodeTextLayerFontWeight ?? this.fontWeight;
    this.textLayerFontFamily = cfg.dynamicNodeTextLayerFontFamily ?? this.fontFamily;
    this.textLayerOffsetX = cfg.dynamicNodeTextLayerOffsetX ?? 0;
    this.textLayerOffsetY = cfg.dynamicNodeTextLayerOffsetY ?? 0;

    const resolvePos = (v?: number, unit: DynamicNodesPosUnit = "px", total = 0, center = 0) =>
      v == null ? center : unit === "%" ? (v / 100) * total : v;

    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    if (cfg.dynamicNodeInitialPosition) {
      const p = cfg.dynamicNodeInitialPosition;
      const u = p.unit ?? "px";
      this.x = resolvePos(p.x, u, bounds.width, centerX);
      this.y = resolvePos(p.y, u, bounds.height, centerY);
    } else {
      this.x = resolvePos(cfg.dynamicNodeInitialX, cfg.dynamicNodeInitialXUnit ?? "px", bounds.width, centerX);
      this.y = resolvePos(cfg.dynamicNodeInitialY, cfg.dynamicNodeInitialYUnit ?? "px", bounds.height, centerY);
    }

    if (
      cfg.dynamicNodeInitialX == null &&
      !cfg.dynamicNodeInitialPosition &&
      (useRandomPositions || cfg.dynamicNodeRandomizeMotion !== false)
    ) {
      this.x = centerX + (Math.random() - 0.5) * bounds.width * 0.35;
      this.y = centerY + (Math.random() - 0.5) * bounds.height * 0.35;
    }
  }

  resolveTextSize(containerWidth: number) {
    const base = this.autoTextFontSize;
    const minW = 240;
    const maxW = 1200;
    const w = Math.max(minW, Math.min(maxW, containerWidth));
    const t = (w - minW) / (maxW - minW);
    const curved = Math.pow(t, 1.7);
    return Math.max(10, Math.round(base * (0.85 + 0.3 * curved)));
  }

  measure(ctx: CanvasRenderingContext2D, containerWidth: number) {
    const size = this.autoTextScale ? this.resolveTextSize(containerWidth) : this.fontSize;
    this.fontSize = size;
    ctx.font = `${this.fontWeight} ${size}px ${this.fontFamily}`;
    ctx.direction = this.direction;
    const metrics = ctx.measureText(this.text);
    this.textWidth = this.maxTextWidth ? Math.min(metrics.width, this.maxTextWidth) : metrics.width;
    this.actualLeft = Math.abs(metrics.actualBoundingBoxLeft || 0);
    this.actualRight = Math.abs(metrics.actualBoundingBoxRight || this.textWidth);
    this.actualAscent = Math.abs(metrics.actualBoundingBoxAscent || size * 0.8);
    this.actualDescent = Math.abs(metrics.actualBoundingBoxDescent || size * 0.2);
  }

  textVisualWidth() {
    return Math.max(this.textWidth, this.actualLeft + this.actualRight);
  }

  textVisualHeight() {
    return Math.max(this.actualAscent + this.actualDescent, this.fontSize * 1.35);
  }

  groupBounds() {
    const textGap = this.labelGap + this.labelPaddingX + Math.abs(this.labelOffsetX);
    const textW = this.textVisualWidth();
    const textH = this.textVisualHeight();
    const circleLeft = this.x - this.radius;
    const circleRight = this.x + this.radius;
    const circleTop = this.y - this.radius;
    const circleBottom = this.y + this.radius;
    const textLeft =
      this.labelSide === "right"
        ? this.x + this.radius + textGap
        : this.x - this.radius - textGap - textW;
    const textRight = textLeft + textW;
    const textTop = this.y - textH / 2 + this.labelOffsetY;
    const textBottom = textTop + textH;

    return {
      left: Math.min(circleLeft, textLeft),
      right: Math.max(circleRight, textRight),
      top: Math.min(circleTop, textTop),
      bottom: Math.max(circleBottom, textBottom),
    };
  }

  update(
    bounds: { width: number; height: number },
    active: boolean,
    clampPadding: number,
    speedMultiplier: number
  ) {
    if (!active) {
      this.opacity = Math.max(this.opacity - 0.06, 0);
      return;
    }

    this.opacity = Math.min(this.opacity + 0.06, 1);
    this.x += this.speedX * speedMultiplier;
    this.y += this.speedY * speedMultiplier;

    const b = this.groupBounds();
    if (b.left <= clampPadding) {
      this.x += clampPadding - b.left;
      this.speedX = Math.abs(this.speedX);
    } else if (b.right >= bounds.width - clampPadding) {
      this.x -= b.right - (bounds.width - clampPadding);
      this.speedX = -Math.abs(this.speedX);
    }

    const b2 = this.groupBounds();
    if (b2.top <= clampPadding) {
      this.y += clampPadding - b2.top;
      this.speedY = Math.abs(this.speedY);
    } else if (b2.bottom >= bounds.height - clampPadding) {
      this.y -= b2.bottom - (bounds.height - clampPadding);
      this.speedY = -Math.abs(this.speedY);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.opacity <= 0) return;

    const labelX =
      this.labelSide === "right"
        ? this.x + this.radius + this.labelGap + this.labelOffsetX
        : this.x - this.radius - this.labelGap - this.labelOffsetX;

    const nodeSize = this.radius * 2;
    const nodeX = this.x - this.radius;
    const nodeY = this.y - this.radius;
    const nodeRadius = this.borderRadius ?? this.radius;

    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.shadowBlur = this.glowBlur;
    ctx.shadowColor = this.glowColor;

    roundRectPath(ctx, nodeX, nodeY, nodeSize, nodeSize, nodeRadius);
    ctx.fillStyle = this.color;
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.fillStyle = this.textColor;
    ctx.font = `${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
    ctx.textBaseline = "middle";
    ctx.direction = this.direction;
    ctx.textAlign = this.labelSide === "right" ? "left" : "right";
    ctx.fillText(
      this.text,
      labelX + this.labelPaddingX * (this.labelSide === "right" ? 1 : -1),
      this.y + this.labelOffsetY
    );

    if (this.textLayerEnabled) {
      ctx.fillStyle = this.textLayerColor;
      ctx.font = `${this.textLayerFontWeight} ${this.textLayerFontSize}px ${this.textLayerFontFamily}`;
      ctx.fillText(
        this.text,
        labelX + this.labelPaddingX * (this.labelSide === "right" ? 1 : -1) + this.textLayerOffsetX,
        this.y + this.labelOffsetY + this.textLayerOffsetY
      );
    }

    ctx.restore();
  }
}

export default function DynamicNodes({
  nodes,
  links = [],
  className,
  style,
  background = "transparent",
  borderColor = "transparent",
  canvasClassName,
  defaultNodeColor = "#146DE9",
  defaultGlowColor = "#146DE9",
  defaultTextColor = "#ffffff",
  defaultFontFamily = "Inter",
  defaultFontSize = 16,
  defaultFontWeight = 700,
  defaultRadius = 8,
  defaultGlowBlur = 12,
  defaultGlowAlpha = 1,
  defaultLinkColor = "rgba(255,255,255,0.25)",
  defaultLinkWidth = 1,
  defaultLinkOpacity = 1,
  defaultLinkDash = [4, 4],
  defaultLinkCap = "round",
  defaultLinkJoin = "round",
  useRandomPositions = true,
  useRandomSpeed = true,
  clampPadding = 0,
  animationSpeedMultiplier = 1,
  showCanvas = true,
  fadeMs = 700,
  height = 360,
  width = "100%",
  borderRadius = 0,
  borderWidth = 0,
  activateNodes = true,
}: DynamicNodesProps) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<NodeSprite[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const box = entry.borderBoxSize?.[0];
      setSize({
        width: box?.inlineSize ?? entry.contentRect.width,
        height: box?.blockSize ?? entry.contentRect.height,
      });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !showCanvas || size.width <= 0 || size.height <= 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = Math.floor(size.width * dpr);
    canvas.height = Math.floor(size.height * dpr);
    canvas.style.width = `${size.width}px`;
    canvas.style.height = `${size.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    nodesRef.current = nodes.map(
      (n) =>
        new NodeSprite(
          {
            ...n,
            defaultNodeColor,
            defaultGlowColor,
            defaultTextColor,
            defaultFontFamily,
            defaultFontSize,
            defaultFontWeight,
            defaultRadius,
            defaultGlowBlur,
            defaultGlowAlpha,
          } as any,
          { width: size.width, height: size.height },
          useRandomPositions,
          useRandomSpeed
        )
    );

    nodesRef.current.forEach((n) => n.measure(ctx, size.width));

    const animate = () => {
      ctx.clearRect(0, 0, size.width, size.height);
      ctx.save();
      roundRectPath(ctx, 0, 0, size.width, size.height, borderRadius);
      ctx.clip();

      if (background && background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, size.width, size.height);
      }

      const map = new Map<string, NodeSprite>();
      nodesRef.current.forEach((n) => map.set(n.id, n));

      for (const link of links) {
        const a = map.get(link.dynamicLinkFromIds[0]);
        const b = map.get(link.dynamicLinkToIds[0]);
        if (!a || !b || a.opacity <= 0 || b.opacity <= 0) continue;

        ctx.save();
        ctx.strokeStyle = link.dynamicLinkColor ?? defaultLinkColor;
        ctx.lineWidth = link.dynamicLinkWidth ?? defaultLinkWidth;
        ctx.globalAlpha = link.dynamicLinkOpacity ?? defaultLinkOpacity;
        ctx.lineCap = link.dynamicLinkCap ?? defaultLinkCap;
        ctx.lineJoin = link.dynamicLinkJoin ?? defaultLinkJoin;
        ctx.setLineDash(link.dynamicLinkDash ?? defaultLinkDash);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        ctx.restore();
      }

      nodesRef.current.forEach((node) => {
        node.measure(ctx, size.width);
        node.update({ width: size.width, height: size.height }, activateNodes, clampPadding, animationSpeedMultiplier);
        node.draw(ctx);
      });

      ctx.restore();
      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafRef.current);
  }, [
    nodes,
    links,
    size.width,
    size.height,
    showCanvas,
    background,
    borderRadius,
    defaultNodeColor,
    defaultGlowColor,
    defaultTextColor,
    defaultFontFamily,
    defaultFontSize,
    defaultFontWeight,
    defaultRadius,
    defaultGlowBlur,
    defaultGlowAlpha,
    defaultLinkColor,
    defaultLinkWidth,
    defaultLinkOpacity,
    defaultLinkDash,
    defaultLinkCap,
    defaultLinkJoin,
    useRandomPositions,
    useRandomSpeed,
    clampPadding,
    animationSpeedMultiplier,
    activateNodes,
  ]);

  return (
    <div
      ref={wrapRef}
      className={`dynamic-nodes-root ${className || ""}`}
      style={{
        width,
        height,
        position: "relative",
        overflow: "hidden",
        background,
        borderRadius,
        border: `${borderWidth}px solid ${borderColor}`,
        ...style,
      }}
    >
      <style>{`
        .dynamic-nodes-root, .dynamic-nodes-root * {
          box-sizing: border-box;
        }
        .dynamic-nodes-root canvas {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>

      <AnimatePresence>
        {showCanvas && (
          <motion.canvas
            ref={canvasRef}
            className={`dynamic-nodes-canvas ${canvasClassName || ""}`}
            style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeMs / 1000 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}