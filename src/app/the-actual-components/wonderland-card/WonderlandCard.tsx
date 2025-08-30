"use client";
import React, { useRef, useEffect, useState } from "react";

/* ================================
   TRANQUILUXE (inline in same file)
   ================================ */
const vert = `#version 300 es
precision highp float;
in vec2 position;
out vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const frag = `#version 300 es
precision highp float;
uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
in vec2 vUv;
out vec4 fragColor;

float colormap_red(float x) {
  if (x < 0.0) { return 54.0 / 255.0; }
  else if (x < 20049.0 / 82979.0) { return (829.79 * x + 54.51) / 255.0; }
  else { return 1.0; }
}
float colormap_green(float x) {
  if (x < 20049.0 / 82979.0) { return 0.0; }
  else if (x < 327013.0 / 810990.0) {
    return (8546482679670.0 / 10875673217.0 * x -
            2064961390770.0 / 10875673217.0) / 255.0;
  } else if (x <= 1.0) {
    return (103806720.0 / 483977.0 * x +
            19607415.0 / 483977.0) / 255.0;
  } else { return 1.0; }
}
float colormap_blue(float x) {
  if (x < 0.0) { return 54.0 / 255.0; }
  else if (x < 7249.0 / 82979.0) { return (829.79 * x + 54.51) / 255.0; }
  else if (x < 20049.0 / 82979.0) { return 127.0 / 255.0; }
  else if (x < 327013.0 / 810990.0) {
    return (792.0224934136139 * x - 64.36479073560233) / 255.0;
  } else { return 1.0; }
}

vec4 colormap(float x) {
  return vec4(colormap_red(x), colormap_green(x), colormap_blue(x), 1.0);
}

float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
float noise(vec2 p){
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u*u*(3.0-2.0*u);
  float res = mix( mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
                   mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),
                   u.y);
  return res*res;
}

const mat2 mtx = mat2(0.80, 0.60, -0.60, 0.80);
float fbm(vec2 p) {
  float f = 0.0;
  float time = uTime * .25;
  f += 0.500000*noise(p + time);
  p = mtx*p*2.02;
  f += 0.031250*noise(p);
  p = mtx*p*2.01;
  f += 0.250000*noise(p);
  p = mtx*p*2.03;
  f += 0.125000*noise(p);
  p = mtx*p*2.01;
  f += 0.062500*noise(p);
  p = mtx*p*2.04;
  f += 0.015625*noise(p + sin(time));
  return f/0.96875;
}
float pattern(vec2 p) { return fbm(p + fbm(p + fbm(p))); }

void main() {
  vec2 uv = vUv.xy * uResolution.xy / uResolution.x;
  float shade = pattern(uv);
  fragColor = vec4(colormap(shade).rgb * uColor, shade);
}`;

class Triangle {
  gl: WebGL2RenderingContext;
  vao: WebGLVertexArrayObject | null = null;
  constructor(gl: WebGL2RenderingContext) {
    this.gl = gl;
    const verts = new Float32Array([-1, -1, 3, -1, -1, 3]);
    this.vao = gl.createVertexArray();
    gl.bindVertexArray(this.vao);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
    const loc = 0;
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);
  }
  draw() {
    this.gl.bindVertexArray(this.vao);
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
    this.gl.bindVertexArray(null);
  }
}
function createShader(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Could not create shader");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) || "Shader compile error");
  }
  return shader;
}
function createProgram(gl: WebGL2RenderingContext, vertSrc: string, fragSrc: string) {
  const vertShader = createShader(gl, gl.VERTEX_SHADER, vertSrc);
  const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fragSrc);
  const program = gl.createProgram();
  if (!program) throw new Error("Could not create program");
  gl.attachShader(program, vertShader);
  gl.attachShader(program, fragShader);
  gl.bindAttribLocation(program, 0, "position");
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) || "Program link error");
  }
  return program;
}

interface TranquiluxeProps {
  color?: [number, number, number];
  className?: string;
  style?: React.CSSProperties;
}

export const Tranquiluxe: React.FC<TranquiluxeProps> = ({
  color = [0, 0.6275, 0.8471],
  className,
  style,
}) => {
  const ctnDom = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;
    const canvas = document.createElement("canvas");
    ctn.appendChild(canvas);
    const gl = canvas.getContext("webgl2");
    if (!gl) return;

    function resize() {
      canvas.width = ctn.offsetWidth;
      canvas.height = ctn.offsetHeight;
      if (!gl) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener("resize", resize);
    resize();

    const triangle = new Triangle(gl);
    const program = createProgram(gl, vert, frag);
    gl.useProgram(program);

    const uTimeLoc = gl.getUniformLocation(program, "uTime");
    const uColorLoc = gl.getUniformLocation(program, "uColor");
    const uResolutionLoc = gl.getUniformLocation(program, "uResolution");
    if (uColorLoc) gl.uniform3fv(uColorLoc, color);

    let running = true;
    function render(t: number) {
      if (!running) return;
      if (!gl) return;
      resize();
      gl.clearColor(1, 1, 1, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      if (uTimeLoc) gl.uniform1f(uTimeLoc, t * 0.001);
      if (uColorLoc) gl.uniform3fv(uColorLoc, color);
      if (uResolutionLoc)
        gl.uniform3f(
          uResolutionLoc,
          canvas.width,
          canvas.height,
          canvas.width / Math.max(1, canvas.height)
        );
      triangle.draw();
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      ctn.removeChild(canvas);
      const ext = gl.getExtension("WEBGL_lose_context");
      if (ext) ext.loseContext();
    };
  }, [color]);

  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        ...style,
      }}
      ref={ctnDom}
    />
  );
};

/* ================================
   WONDERLAND CARD TYPE 2
   ================================ */

interface TranquiluxeConfig {
  color?: [number, number, number];
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

interface WonderlandCardProps {
  cardId?: string;
  textArray?: string | string[];
  fontSize?: number;
  letterSpacing?: string;
  manualLetterSpacing?: number;
  minTextSize?: number;
  maxTextSize?: number;
  minCardWidth?: number;
  maxCardWidth?: number;
  componentWidth?: string;
  aspectRatio?: string;
  outlineColor?: string;
  outlineHoverColor?: string;
  outlineActiveColor?: string;
  outlineWidth?: string;
  outlineWidthHover?: string;
  outlineWidthActive?: string;
  borderRadius?: string;
  borderRadiusHover?: string;
  borderRadiusActive?: string;
  backgroundColor?: string;
  textColor?: string;
  textColorHover?: string;
  textColorActive?: string;
  textPaddingTop?: string;
  textPaddingLeft?: string;
  imageSrc: string;
  imageAlt?: string;
  imageHeightPercentage?: number;
  onClick?: () => void;
  onHover?: () => void;
  onUnhover?: () => void;
  onRelease?: () => void;
  tranquiluxeProps?: TranquiluxeConfig;
  tranquiluxePropsActive?: TranquiluxeConfig;
  inscriptionFontWeight?: React.CSSProperties["fontWeight"];
  fillParent?: boolean; // NEW
}

const transitionEffect =
  "background-color 0.5s cubic-bezier(.45,.03,.52,1.01), " +
  "outline-color 0.5s, color 0.5s, border-radius 0.5s, outline-width 0.5s";

const WonderlandCard: React.FC<WonderlandCardProps> = ({
  cardId = "wonderland-card-type2",
  textArray = ["啟蒙"],
  fontSize,
  letterSpacing = "0.24em",
  manualLetterSpacing,
  minTextSize = 18,
  maxTextSize = 26,
  minCardWidth = 200,
  maxCardWidth = 400,
  componentWidth = "340px",
  aspectRatio = "3/4",
  outlineColor = "#777",
  outlineHoverColor = "#6b140f",
  outlineActiveColor = "#fff",
  outlineWidth = "3px",
  outlineWidthHover = "3px",
  outlineWidthActive = "3px",
  borderRadius = "16px",
  borderRadiusHover = "28px",
  borderRadiusActive = "38px",
  backgroundColor = "#0a0a0a",
  textColor = "#fff",
  textColorHover = "#fff",
  textColorActive = "#0a0a0a",
  textPaddingTop = "17px",
  textPaddingLeft = "19px",
  imageSrc,
  imageAlt = "",
  imageHeightPercentage = 71,
  onHover,
  onUnhover,
  onClick,
  onRelease,
  tranquiluxeProps = { color: [1, 0.47, 0.07], speed: 0.7 },
  tranquiluxePropsActive = { color: [0, 0.6275, 0.8471], speed: 1.2 },
  inscriptionFontWeight = 900,
  fillParent = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setHovered] = useState(false);
  const [isActive, setActive] = useState(false);
  const [computedFontSize, setFontSize] = useState<number>(maxTextSize);

  useEffect(() => {
    if (fontSize) {
      setFontSize(fontSize);
      return;
    }
    const update = () => {
      if (!cardRef.current) return;
      const width = cardRef.current.offsetWidth;
      const clamped = Math.max(minCardWidth, Math.min(width, maxCardWidth));
      const ratio = (clamped - minCardWidth) / (maxCardWidth - minCardWidth);
      setFontSize(minTextSize + ratio * (maxTextSize - minTextSize));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [fontSize, minTextSize, maxTextSize, minCardWidth, maxCardWidth]);

  const currentOutlineColor =
    isActive ? outlineActiveColor : isHovered ? outlineHoverColor : outlineColor;
  const currentOutlineWidth =
    isActive ? outlineWidthActive : isHovered ? outlineWidthHover : outlineWidth;
  const currentBorderRadius =
    isActive ? borderRadiusActive : isHovered ? borderRadiusHover : borderRadius;
  const currentTextColor =
    isActive ? textColorActive : isHovered ? textColorHover : textColor;
  const currentTranquiluxeProps =
    isActive && tranquiluxePropsActive ? tranquiluxePropsActive : tranquiluxeProps;

  const isVertical = Array.isArray(textArray);
  const verticalLines = isVertical ? textArray : [];
  const horizontalLine = !isVertical ? (textArray as string) : "";
  const verticalSpacing =
    manualLetterSpacing !== undefined
      ? manualLetterSpacing
      : computedFontSize * 0.18;

  return (
    <div
      ref={cardRef}
      data-card-id={cardId}
      style={{
        position: "relative",
        width: fillParent ? "100%" : "100%",
        height: fillParent ? "100%" : "auto",
        maxWidth: fillParent ? "100%" : componentWidth,
        aspectRatio: fillParent ? "auto" : aspectRatio,
        borderRadius: currentBorderRadius,
        outline: `${currentOutlineWidth} solid ${currentOutlineColor}`,
        transition: transitionEffect,
        overflow: "hidden",
        backgroundColor,
        boxSizing: "border-box",
      }}
      onMouseEnter={() => {
        setHovered(true);
        onHover?.();
      }}
      onMouseLeave={() => {
        setHovered(false);
        setActive(false);
        onUnhover?.();
      }}
      onMouseDown={() => {
        setActive(true);
        onClick?.();
      }}
      onMouseUp={() => {
        setActive(false);
        onRelease?.();
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Tranquiluxe {...currentTranquiluxeProps} />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor,
          opacity: isHovered ? 0 : 1,
          pointerEvents: "none",
          transition: "opacity 0.7s cubic-bezier(.45,.03,.52,1.01)",
          zIndex: 1,
        }}
      />

      {/* Image */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          height: `${imageHeightPercentage}%`,
          width: "auto",
          aspectRatio: "1/1",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: currentBorderRadius,
            background: "none",
            border: "none",
            filter: "none",
            transition: "filter 0.45s cubic-bezier(.45,.03,.52,1.01)",
          }}
          draggable={false}
        />
      </div>

      {/* Text */}
      {isVertical ? (
        <>
          <div
            style={{
              position: "absolute",
              top: textPaddingTop,
              left: textPaddingLeft,
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              fontSize: `${computedFontSize}px`,
              fontWeight: inscriptionFontWeight,
              color: currentTextColor,
              fontFamily: "serif",
              userSelect: "none",
              gap: `${verticalSpacing}px`,
              letterSpacing,
              pointerEvents: "none",
              transition: "color 0.3s",
            }}
          >
            {verticalLines.map((line, idx) => (
              <div key={`vt-${idx}`}>{line}</div>
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: textPaddingTop,
              right: textPaddingLeft,
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              fontSize: `${computedFontSize}px`,
              fontWeight: inscriptionFontWeight,
              color: currentTextColor,
              fontFamily: "serif",
              userSelect: "none",
              gap: `${verticalSpacing}px`,
              letterSpacing,
              transform: "rotate(180deg)",
              pointerEvents: "none",
              transition: "color 0.3s",
            }}
          >
            {verticalLines.map((line, idx) => (
              <div key={`vb-${idx}`}>{line}</div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              position: "absolute",
              top: textPaddingTop,
              left: 0,
              right: 0,
              zIndex: 10,
              textAlign: "center",
              fontSize: `${computedFontSize}px`,
              fontWeight: inscriptionFontWeight,
              color: currentTextColor,
              fontFamily: "serif",
              userSelect: "none",
              letterSpacing,
              pointerEvents: "none",
              transition: "color 0.3s",
            }}
          >
            {horizontalLine}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: textPaddingTop,
              left: 0,
              right: 0,
              zIndex: 10,
              textAlign: "center",
              fontSize: `${computedFontSize}px`,
              fontWeight: inscriptionFontWeight,
              color: currentTextColor,
              fontFamily: "serif",
              userSelect: "none",
              letterSpacing,
              transform: "rotate(180deg)",
              pointerEvents: "none",
              transition: "color 0.3s",
            }}
          >
            {horizontalLine}
          </div>
        </>
      )}
    </div>
  );
};

export default WonderlandCard;