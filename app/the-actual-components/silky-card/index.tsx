'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "SilkyCard.tsx" file
import SilkyCard from '@/app/the-actual-components/silky-card/SilkyCard'

<div className="bg-[#050505] p-8 rounded-[12px] min-h-[400px] flex flex-wrap gap-6 justify-center items-start">
  <div className="text-[#aaa] w-full mb-4 select-none text-center">Hover the cards to reveal the background</div>

  <div className="max-w-[400px] max-h-[320px] w-full h-[280px] flex-grow flex-shrink box-border min-w-[220px]">
    <SilkyCard
      order={0} isMobile={false} align="flex-start" textAlign="left" textDirection="ltr" isRTL={false}
      onClick={() => console.log("Clicked card 1")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-left whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 5\\nscale: 1\\ncolor: #7B7481\\nnoiseIntensity: 1.5\\nrotation: 0\\nisRTL: false\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-left">
        Silky Card #1
        <p className="font-normal text-sm mt-2">Default Silk animation</p>
      </div>
    </SilkyCard>
  </div>

  <div className="max-w-[400px] max-h-[320px] w-full h-[270px] flex-grow flex-shrink box-border min-w-[220px]">
    <SilkyCard
      order={1} isMobile={false} align="flex-start" textAlign="left" textDirection="ltr" isRTL={false}
      speed={10} scale={2} color="#4300FE" noiseIntensity={0} rotation={0.1}
      outerBorderRadius="8px" innerBorderRadius="40px" backgroundColor="#363664" borderColor="#fff" borderColorHover="#4300FE"
      borderWidth = "5px"
      onClick={() => console.log("Clicked card 2")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-left whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 10\\nscale: 2\\ncolor: #4300f3\\nnoiseIntensity: 0\\nrotation: 0.1\\nisRTL: false\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-left">
        Silky Card #2
        <p className="font-normal text-sm mt-2">Custom Silk params</p>
      </div>
    </SilkyCard>
  </div>

  <div className="max-w-[400px] max-h-[300px] w-full h-[300px] flex-grow flex-shrink box-border min-w-[220px]">
    <SilkyCard
      order={2} isMobile={false} align="flex-start" textAlign="left" textDirection="ltr" isRTL={true}
      speed={2} scale={0.5} color="#603dec" noiseIntensity={5} rotation={0.5}
      outerBorderRadius="6.34px" innerBorderRadius="6px" backgroundColor="#222230" borderColorHover="#2d2c3d"
      onClick={() => console.log("Clicked card 3")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-left whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 2\\nscale: 0.5\\ncolor: #603dec\\nnoiseIntensity: 5\\nrotation: 0.5\\nisRTL: true\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-left">
        Silky Card #3
        <p className="font-normal text-sm mt-2">Custom Silk params, isRTL true</p>
      </div>
    </SilkyCard>
  </div>

  <div className="max-w-[380px] max-h-[300px] w-full h-[270px] flex-grow flex-shrink box-border min-w-[190px]">
    <SilkyCard
      order={3} isMobile={false} align="flex-start" textAlign="left" textDirection="ltr" isRTL={false}
      speed={8} scale={1.5} color="#f12b30" noiseIntensity={1} rotation={0}
      outerBorderRadius="2.11px" innerBorderRadius="2px" backgroundColor="#2b1e1e" borderColorHover="#3a2c2c"
      onClick={() => console.log("Clicked card 4")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-left whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 8\\nscale: 1.5\\ncolor: #f12b30\\nnoiseIntensity: 1\\nrotation: 0\\nisRTL: false\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-left">
        Silky Card #4
        <p className="font-normal text-sm mt-2">Custom Silk params</p>
      </div>
    </SilkyCard>
  </div>

  <div className="max-w-[390px] max-h-[300px] w-full h-[290px] flex-grow flex-shrink box-border min-w-[200px]">
    <SilkyCard
      order={4} isMobile={false} align="flex-start" textAlign="left" textDirection="ltr" isRTL={true}
      speed={20} scale={0.24} color="#3662f4" noiseIntensity={12} rotation={-0.3} backgroundColor="#202330" borderColorHover="#2a2f44"
      onClick={() => console.log("Clicked card 5")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-left whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 20\\nscale: 0.24\\ncolor: #3662f4\\nnoiseIntensity: 12\\nrotation: -0.3\\nisRTL: true\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-left">
        Silky Card #5
        <p className="font-normal text-sm mt-2">Custom Silk params</p>
      </div>
    </SilkyCard>
  </div>

  <div className="max-w-[400px] max-h-[300px] w-full h-[280px] flex-grow flex-shrink box-border min-w-[180px]">
    <SilkyCard
      order={5} isMobile={false} align="flex-start" textAlign="left" textDirection="ltr" isRTL={true}
      speed={16} scale={1} color="#7B7481" noiseIntensity={0.8} rotation={0.2}
      outerBorderRadius="18px" innerBorderRadius="16px" backgroundColor="#2c2a2f" borderColorHover="#3e3c40"
      onClick={() => console.log("Clicked card 6")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-left whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 16\\nscale: 1\\ncolor: #7B7481\\nnoiseIntensity: 0.8\\nrotation: 0.2\\nisRTL: true\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-left">
        Silky Card #6
        <p className="font-normal text-sm mt-2">Custom Silk params</p>
      </div>
    </SilkyCard>
  </div>

  <div className="max-w-[400px] max-h-[300px] w-full h-[270px] flex-grow flex-shrink box-border min-w-[200px]">
    <SilkyCard
      order={6} isMobile={false} align="flex-start" textAlign="left" textDirection="ltr" isRTL={false}
      speed={3} scale={0.7} color="#ee33aa" noiseIntensity={2.2} rotation={-0.5}
      outerBorderRadius="42.8px" innerBorderRadius="42px" backgroundColor="#301b2f" borderColorHover="#4b2e4b"
      onClick={() => console.log("Clicked card 7")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-left whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 3\\nscale: 0.7\\ncolor: #ee33aa\\nnoiseIntensity: 2.2\\nrotation: -0.5\\nisRTL: false\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-left">
        Silky Card #7
        <p className="font-normal text-sm mt-2">Custom Silk params</p>
      </div>
    </SilkyCard>
  </div>

  <div className="max-w-[400px] max-h-[300px] w-full h-[290px] flex-grow flex-shrink box-border min-w-[210px]">
    <SilkyCard
      order={7} isMobile={false} align="flex-start" textAlign="left" textDirection="ltr" isRTL={true}
      speed={9} scale={1.3} color="#4400ff" noiseIntensity={1.1} rotation={0.4}
      outerBorderRadius="0px" innerBorderRadius="0px" backgroundColor="#261f44" borderColorHover="#3f3c6e"
      onClick={() => console.log("Clicked card 8")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-left whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 9\\nscale: 1.3\\ncolor: #4400ff\\nnoiseIntensity: 1.1\\nrotation: 0.4\\nisRTL: true\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-left">
        Silky Card #8
        <p className="font-normal text-sm mt-2">Custom Silk params</p>
      </div>
    </SilkyCard>
  </div>

  <div className="max-w-[400px] max-h-[300px] w-full h-[270px] flex-grow flex-shrink box-border min-w-[200px]">
    <SilkyCard
      order={8} isMobile={false} align="flex-start" textAlign="left" textDirection="ltr" isRTL={false}
      speed={3} scale={0.7} color="#ee33aa" noiseIntensity={2.2} rotation={-0.5} backgroundColor="#301b2f" borderColorHover="#4b2e4b"
      onClick={() => console.log("Clicked card 9")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-left whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 3\\nscale: 0.7\\ncolor: #ee33aa\\nnoiseIntensity: 2.2\\nrotation: -0.5\\nisRTL: false\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-left">   
        Silky Card #9
        <p className="font-normal text-sm mt-2">Custom Silk params</p>
      </div>
    </SilkyCard>
  </div>

  <div className="max-w-[400px] max-h-[300px] w-full h-[290px] flex-grow flex-shrink box-border min-w-[210px]">
    <SilkyCard
      order={9} isMobile={false} align="flex-start" textAlign="left" textDirection="ltr" isRTL={true}
      speed={9} scale={1.3} color="#4400ff" noiseIntensity={1.1} rotation={0.4} backgroundColor="#261f44" borderColorHover="#3f3c6e"
      onClick={() => console.log("Clicked card 10")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-left whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 9\\nscale: 1.3\\ncolor: #4400ff\\nnoiseIntensity: 1.1\\nrotation: 0.4\\nisRTL: true\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-left">   
        Silky Card #10
        <p className="font-normal text-sm mt-2">Custom Silk params</p>
      </div>
    </SilkyCard>
  </div>

  <div className="max-w-[380px] max-h-[280px] w-full h-[280px] flex-grow flex-shrink box-border min-w-[190px]">
    <SilkyCard
      order={10} isMobile={false} align="flex-end" textAlign="right" textDirection="ltr" isRTL={false}
      speed={14} scale={2.8} color="#0077cc" noiseIntensity={0.5} rotation={-0.6} backgroundColor="#172a42" borderColorHover="#23426a"
      onClick={() => console.log("Clicked card 11")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-right whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 14\\nscale: 2.8\\ncolor: #0077cc\\nnoiseIntensity: 0.5\\nrotation: -0.6\\nisRTL: false\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-right">   
        Silky Card #11
        <p className="font-normal text-sm mt-2">Custom Silk params</p>
      </div>
    </SilkyCard>
  </div>

  <div className="max-w-[380px] max-h-[300px] w-full h-[270px] flex-grow flex-shrink box-border min-w-[200px]">
    <SilkyCard
      order={11} isMobile={false} align="flex-start" textAlign="left" textDirection="ltr" isRTL={true}
      speed={3} scale={1.4} color="#81007f" noiseIntensity={1.8} rotation={0.2} backgroundColor="#351534" borderColorHover="#4d2a4d"
      onClick={() => console.log("Clicked card 12")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-left whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 3\\nscale: 1.4\\ncolor: #81007f\\nnoiseIntensity: 1.8\\nrotation: 0.2\\nisRTL: true\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-left">   
        Silky Card #12
        <p className="font-normal text-sm mt-2">Custom Silk params</p>
      </div>
    </SilkyCard>
  </div>

  <div className="max-w-[400px] max-h-[280px] w-full h-[280px] flex-grow flex-shrink box-border min-w-[200px]">
    <SilkyCard
      order={13} isMobile={false} textDirection="ltr" isRTL={false}
      speed={11} scale={0.7} color="#aaff00" noiseIntensity={1.3} rotation={0.2} backgroundColor="#293312" borderColorHover="#446626"
      onClick={() => console.log("Clicked card 14")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-center whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 11\\nscale: 0.7\\ncolor: #aaff00\\nnoiseIntensity: 1.3\\nrotation: 0.2\\nisRTL: false\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-center">
        Silky Card #14
        <p className="font-normal text-sm mt-2">Custom Silk params</p>
      </div>
    </SilkyCard>
  </div>

  <div className="max-w-[390px] max-h-[300px] w-full h-[280px] flex-grow flex-shrink box-border min-w-[210px]">
    <SilkyCard
      order={14} isMobile={false} align="flex-end" textAlign="right" textDirection="ltr" isRTL={false}
      speed={5} scale={1.1} color="#ff4400" noiseIntensity={1.9} rotation={0.3} backgroundColor="#422a1f" borderColorHover="#623f2b"
      onClick={() => console.log("Clicked card 15")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-right whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 5\\nscale: 1.1\\ncolor: #ff4400\\nnoiseIntensity: 1.9\\nrotation: 0.3\\nisRTL: false\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-right">
        Silky Card #15
        <p className="font-normal text-sm mt-2">Custom Silk params</p>
      </div>
    </SilkyCard>
  </div>

  <div className="max-w-[400px] max-h-[300px] w-full h-[270px] flex-grow flex-shrink box-border min-w-[210px]">
    <SilkyCard
      order={15} isMobile={false} align="flex-start" textAlign="left" textDirection="ltr" isRTL={true}
      speed={18} scale={1.6} color="#22aa66" noiseIntensity={2} rotation={-0.1} backgroundColor="#193222" borderColorHover="#2e4835"
      onClick={() => console.log("Clicked card 16")}
    >
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-mono font-bold text-sm select-none text-left whitespace-pre-wrap opacity-[0.85] mb-1.5">
        {\`speed: 18\\nscale: 1.6\\ncolor: #22aa66\\nnoiseIntensity: 2.0\\nrotation: -0.1\\nisRTL: true\`}
      </div>
      <div className="text-white p-4 flex flex-col justify-center flex-1 font-bold text-lg select-none text-left">
        Silky Card #16
        <p className="font-normal text-sm mt-2">Custom Silk params</p>
      </div>
    </SilkyCard>
  </div>
</div>

// Note: The SilkyCard component accepts the following props:
// - speed: number (optional) - Controls the speed of the Silk animation (default: 5).
// - scale: number (optional) - Controls the scale of the Silk animation (default: 1).
// - color: string (optional) - Sets the main color of the Silk animation (default: "#7B7481").
// - noiseIntensity: number (optional) - Controls noise intensity in the Silk animation (default: 1.5).
// - rotation: number (optional) - Rotation applied to the Silk animation (default: 0).
// - isRTL: boolean (optional) - Flag for right-to-left animation direction (default: false).
// - order: number (optional) - Flexbox order setting for layout positioning (default: 0).
// - isMobile: boolean (optional) - Adjusts flex behavior for mobile; controls flex property (default: false).
// - align: "flex-start" | "flex-end" (optional) - Aligns inner container content horizontally (default: "flex-start").
// - textAlign: "left" | "right" (optional) - Text alignment inside the card (default: "left").
// - textDirection: "ltr" | "rtl" (optional) - Text reading direction and container CSS direction (default: "ltr").
// - onClick: (e: React.MouseEvent) => void (optional) - Click event handler for the card, ignores clicks on buttons inside the card.
// - style: React.CSSProperties (optional) - Custom styles applied to the outer container (can override default styles).
// - hoverStyle: React.CSSProperties (optional) - Additional styles applied on hover to the outer container.
// - children: React.ReactNode (optional) - Inner contents of the card.
// - outerBorderRadius: string (optional) - Border radius of the outer container that simulates border rounding (default: "18.2px").
// - innerBorderRadius: string (optional) - Border radius of the inner content container (default: "18px").
// - backgroundColor: string (optional) - Background color of the inner content container (default: "var(--card-background)").
// - borderColor: string (optional) - Background color of the outer container simulating the border color (default: "#2e2e2e").
// - borderColorHover: string (optional) - Background color for outer container on hover simulating border color hover (default: "#494949").
// - borderWidth: string (optional) - Thickness of the simulated border, applied as padding on the outer container (default: "1px").
// - borderColorTransition: string (optional) - CSS transition property for the outer container's background color change (default: "background-color 0.3s ease").
`,
code: [
  {
    filename: 'SilkyCard.tsx',
    content: `"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Silk, { SilkProps } from "./Silk";

interface SilkyCardProps extends SilkProps {
  order?: number;
  isMobile?: boolean;
  align?: "flex-start" | "flex-end";
  textAlign?: "left" | "right";
  textDirection?: "ltr" | "rtl";
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
  children?: React.ReactNode;
  /** Outer container border-radius (external rounding) */
  outerBorderRadius?: string;
  /** Inner container border-radius (internal rounding) */
  innerBorderRadius?: string;
  /** Background color of the card (inner container background) */
  backgroundColor?: string;
  /** Outer border color simulated by container background */
  borderColor?: string;
  /** Outer border color when hovered (background of outer container) */
  borderColorHover?: string;
  /** Thickness of the simulated border using padding on outer container, default 1px */
  borderWidth?: string;
  /** CSS transition for the outer background color (default 'background-color 0.3s ease') */
  borderColorTransition?: string;
}

const SilkyCard: React.FC<SilkyCardProps> = ({
  // Silk animation props with defaults
  speed = 5,
  scale = 1,
  color = "#7B7481",
  noiseIntensity = 1.5,
  rotation = 0,
  isRTL = false,
  order = 0,
  isMobile = false,
  align = "flex-start",
  textAlign = "left",
  textDirection = "ltr",
  onClick,
  style = {},
  hoverStyle = {},
  children,
  outerBorderRadius = "18.2px",
  innerBorderRadius = "18px",
  backgroundColor = "var(--card-background)",
  borderColor = "#2e2e2e",
  borderColorHover = "#494949",
  borderWidth = "1px",
  borderColorTransition = "background-color 0.3s ease",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = isHovered;

  const handleCardClick = (e: React.MouseEvent) => {
    if (
      (e.target as HTMLElement).closest("button") ||
      (e.target as HTMLElement).closest('[role="button"]')
    ) {
      return;
    }
    if (onClick) onClick(e);
  };

  return (
    <motion.div
      style={{
        order,
        direction: textDirection,
        cursor: "pointer",
        minWidth: 0,
        flex: isMobile ? "unset" : "1 1 0%",
        borderRadius: outerBorderRadius,
        backgroundColor: isActive ? borderColorHover : borderColor,
        padding: borderWidth, // thickness of the simulated border
        boxSizing: "border-box",
        transition: borderColorTransition,
        ...style,
        ...(isActive ? hoverStyle : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div
        style={{
          borderRadius: innerBorderRadius,
          backgroundColor: backgroundColor,
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          position: "relative",
          overflow: "hidden",
          alignItems: align,
          textAlign,
          direction: textDirection,
        }}
      >
        {/* Silk overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            borderRadius: innerBorderRadius,
            overflow: "hidden",
            pointerEvents: "none",
            opacity: isActive ? 1 : 0,
            transition: "opacity 1s",
            background: "transparent",
          }}
        >
          <Silk
            speed={speed}
            scale={scale}
            color={color}
            noiseIntensity={noiseIntensity}
            rotation={rotation}
            isRTL={isRTL}
          />
        </div>
        {/* Content above Silk */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default SilkyCard;
`
  },
  {
    filename: 'Silk.tsx',
    content: `/* eslint-disable react/no-unknown-property */
// @ts-nocheck
// @ts-ignore
"use client"
import React, { forwardRef, useMemo, useRef, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree, RootState } from "@react-three/fiber";
import { Color, Mesh, ShaderMaterial } from "three";
import { IUniform } from "three";

type NormalizedRGB = [number, number, number];

const hexToNormalizedRGB = (hex: string): NormalizedRGB => {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  return [r, g, b];
};

interface UniformValue<T = number | Color> {
  value: T;
}

interface SilkUniforms {
  uSpeed: UniformValue<number>;
  uScale: UniformValue<number>;
  uNoiseIntensity: UniformValue<number>;
  uColor: UniformValue<Color>;
  uRotation: UniformValue<number>;
  uTime: UniformValue<number>;
  [uniform: string]: IUniform;
}

const vertexShader = \`
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
\`;

const fragmentShader = \`
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                    cos(3.0 * tex.x + 5.0 * tex.y) +
                                    0.02 * tOffset) +
                            sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
\`;

interface SilkPlaneProps {
  uniforms: SilkUniforms;
}

const SilkPlane = forwardRef<Mesh, SilkPlaneProps>(function SilkPlane(
  { uniforms },
  ref
) {
  const { viewport } = useThree();

  useLayoutEffect(() => {
    const mesh = ref as React.MutableRefObject<Mesh | null>;
    if (mesh.current) {
      mesh.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport]);

  useFrame((_state: RootState, delta: number) => {
    const mesh = ref as React.MutableRefObject<Mesh | null>;
    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial & {
        uniforms: SilkUniforms;
      };
      material.uniforms.uTime.value += 0.1 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
});
SilkPlane.displayName = "SilkPlane";

export interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
  isRTL?: boolean;
}

const Silk: React.FC<SilkProps> = ({
  speed = 5,
  scale = 1,
  color = "#7B7481",
  noiseIntensity = 1.5,
  rotation = 0,
  isRTL = false,
}) => {
  const meshRef = useRef<Mesh>(null);

  const uniforms = useMemo<SilkUniforms>(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 },
    }),
    [speed, scale, noiseIntensity, color, rotation]
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        // Mirror horizontally if isRTL, otherwise normal
        transform: isRTL ? "scaleX(-1)" : undefined,
        // Prevent child overflow and ensure correct stacking
        overflow: "hidden",
      }}
    >
      <Canvas dpr={[1, 2]} frameloop="always" style={{ width: "100%", height: "100%" }}>
        <SilkPlane ref={meshRef} uniforms={uniforms} />
      </Canvas>
    </div>
  );
};

export default Silk;
`
  },
],
  dependencies: 'npm install framer-motion --legacy-peer-deps\nnpm install @react-three/fiber three --legacy-peer-deps\nnpm install --save-dev @types/three --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://www.reactbits.dev/backgrounds/silk" target="_blank" rel="noopener noreferrer" className="link">Silk</a> by <a href="https://www.reactbits.dev/" target="_blank" rel="noopener noreferrer" className="link">React Bits</a>
      <br/>
      <a href="https://codepen.io/uchihaclan/pen/NWOyRWy" target="_blank" rel="noopener noreferrer" className="link">BUTTONS</a> by <a href="https://codepen.io/uchihaclan" target="_blank" rel="noopener noreferrer" className="link">TAYLOR</a>
    </span>
  ),
}

export { metadata }