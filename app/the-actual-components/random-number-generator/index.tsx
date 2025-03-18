'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "RandomNumberGenerator.tsx" file
import RNG from '@/app/the-actual-components/random-number-generator/RandomNumberGenerator'

const [showRNG, setShowRNG] = useState(false);
const [showHebrewRNG, setShowHebrewRNG] = useState(false);

const handleRNGClose = (randomData: Uint8Array) => {
  setShowRNG(false);
  setShowHebrewRNG(false);
  console.log('Random Data:', randomData);
  const hexString = Array.from(randomData, (byte) => byte.toString(16).padStart(2, '0')).join('');
  console.log('Random Data (Hex):', hexString);
  const foldedRandomValue = xorHalvesRepeatedly(randomData, 7);
  const hexString1 = Array.from(foldedRandomValue, (byte) => byte.toString(16).padStart(2, '0')).join('');
  toast.info(\`Folded Random Value (Hex): \${hexString1}\`);
};

function xorHalvesRepeatedly(array: Uint8Array, repetitions: number): Uint8Array {
  let result = array;
  for (let i = 0; i < repetitions; i++) {
    result = xorHalves(result);
  }
  return result;
}

function xorHalves(array: Uint8Array): Uint8Array {
  const halfLength = Math.floor(array.length / 2);
  const result = new Uint8Array(halfLength);
  for (let i = 0; i < halfLength; i++) {
    result[i] = array[i] ^ array[i + halfLength];
  }
  return result;
}

<button onClick={() => setShowRNG(true)}>Show RNG</button>
{showRNG && (
  <RNG
    onClose={handleRNGClose}
    borderRadius="10px"
  />
)}

<button onClick={() => setShowHebrewRNG(true)}>Show RNG (RTL)</button>
{showHebrewRNG && (
  <RNG
    onClose={handleRNGClose}
    title="מחולל מספרים אקראיים"
    inscription="העבר את העכבר כדי להגדיל את האקראיות."
    buttonInscription="המשך"
    isRTL={true}
    borderRadius="10px"
  />
)}

// Note: The RNG component accepts the following props:
// - onClose: (randomData: Uint8Array) => void (required) - A callback function to handle the generated random data.
// - width: string (optional) - The width of the RNG component (default: "auto").
// - height: string (optional) - The height of the RNG component (default: "auto").
// - borderRadius: string (optional) - The border radius of the RNG component (default: "8px").
// - title: string (optional) - The title displayed at the top of the component (default: "Random Number Generator").
// - inscription: string (optional) - The instructional text displayed below the title (default: "Move your cursor to increase randomness.").
// - buttonInscription: string (optional) - The text displayed on the Continue button (default: "Continue").
// - isRTL: boolean (optional) - Whether the component should be rendered in Right-to-Left (RTL) mode (default: false).
`,
code: [
  {
    filename: 'RandomNumberGenerator.tsx',
    content: `"use client";
import React, { useState, useEffect, useRef } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Sparkles } from "lucide-react";
import { sha256, sha384, sha512, whirlpool } from "hash-wasm";

interface RNGProps {
  onClose: (randomData: Uint8Array) => void;
  width?: string;
  height?: string;
  borderRadius?: string;
  title?: string;
  inscription?: string;
  buttonInscription?: string;
  isRTL?: boolean;
}

const RNG: React.FC<RNGProps> = ({
  onClose,
  width = "auto",
  height = "auto",
  borderRadius = "8px",
  title = "Random Number Generator",
  inscription = "Move your cursor to increase randomness.",
  buttonInscription = "Continue",
  isRTL = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const data = useRef(new Uint8Array(4096));
  const [progress, setProgress] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeData = async () => {
      const randomValues = new Uint8Array(4096);
      window.crypto.getRandomValues(randomValues);
      data.current = randomValues;
      setIsInitialized(true);
    };
    initializeData();
  }, []);

  useEffect(() => {
    const handleMouseMove = async (e: MouseEvent) => {
      if (!isInitialized) return;

      const mousePositionString = \`\${e.clientX}\${e.clientY}\`;
      const randomValues = new Uint8Array(224); // 224 bytes for 224 characters
      window.crypto.getRandomValues(randomValues);

      // Convert random values to printable ASCII characters
      const randomString = Array.from(randomValues)
        .map((byte) => {
          // Ensure byte is within printable ASCII range (32 to 126)
          return String.fromCharCode((byte % 95) + 32);
        })
        .join("");

      const mixedString = Array.from(mousePositionString).reduce((acc, char) => {
        const randomIndex = Math.floor(
          (window.crypto.getRandomValues(new Uint8Array(1))[0] % acc.length)
        );
        acc.splice(randomIndex, 0, char);
        return acc;
      }, randomString.split("")).join("");

      //console.log("Mouse Position:", mousePositionString);
      //console.log("Random String:", randomString);
      //console.log("Mixed String:", mixedString);

      const hashFunctions = [
        { name: "SHA-256", hash: sha256 },
        { name: "SHA-384", hash: sha384 },
        { name: "SHA-512", hash: sha512 },
        { name: "Whirlpool", hash: whirlpool },
        { name: "Whirlpool", hash: whirlpool },
      ];

      // Select a random hash function
      const randomIndex = Math.floor(
        (window.crypto.getRandomValues(new Uint8Array(1))[0] % hashFunctions.length)
      );
      const hashFunction = hashFunctions[randomIndex];
      //console.log("Hash Function:", hashFunction.name);

      const hashOutput = await hashFunction.hash(mixedString);
      const hashArray = new Uint8Array(hashOutput.split("").map((c) => parseInt(c, 16)));
      //console.log("Hash Array:", hashArray);

      for (let i = 0; i < hashArray.length; i++) {
        const randomIndex = Math.floor(
          (window.crypto.getRandomValues(new Uint32Array(1))[0] % 4096)
        );
        data.current[randomIndex] ^= hashArray[i];
      }

      const distribution = new Array(256).fill(0);
      for (let i = 0; i < data.current.length; i++) {
        distribution[data.current[i]]++;
      }

      const randomnessScore = distribution.reduce(
        (acc, count) => acc + Math.abs(count - data.current.length / 256),
        0
      );
      const randomnessPercentage = 100 - (randomnessScore / (data.current.length * 256)) * 100;
      setProgress((prevProgress) => Math.min(prevProgress + 1.1, randomnessPercentage));
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isInitialized]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (progress >= 100 || !isInitialized) return;
      const randomValues = new Uint8Array(4096);
      window.crypto.getRandomValues(randomValues);
      for (let i = 0; i < randomValues.length; i++) {
        data.current[i] ^= randomValues[i];
      }
      //console.log("Random XOR Operation:", randomValues);

      const distribution = new Array(256).fill(0);
      for (let i = 0; i < data.current.length; i++) {
        distribution[data.current[i]]++;
      }

      const randomnessScore = distribution.reduce(
        (acc, count) => acc + Math.abs(count - data.current.length / 256),
        0
      );
      const randomnessPercentage = 100 - (randomnessScore / (data.current.length * 256)) * 100;
      setProgress((prevProgress) => Math.min(prevProgress + 1.9, randomnessPercentage));
    }, 400);
    return () => {
      clearInterval(intervalId);
    };
  }, [progress, isInitialized]);

  const handleContinue = () => {
    onClose(data.current);
  };

  const colors = [
    "#FF0000", // Red
    "#FF0A00", // Red-Orange 1
    "#FF1400", // Red-Orange 2
    "#FF1A00", // Brighter red-orange
    "#FF2200", // Red-Orange 3
    "#FF2800", // Red-Orange 4
    "#FF3300", // Bright red-orange
    "#FF3B00", // Red-Orange 5
    "#FF4500", // First orange shade
    "#FF4C00", // Orange 1
    "#FF5300", // Orange 2
    "#FF5C00", // Bright orange
    "#FF6500", // Orange 3
    "#FF6F00", // Orange
    "#FF7800", // Orange 4
    "#FF8400", // Brighter orange
    "#FF8F00", // Orange 5
    "#FF9900", // Lighter orange
    "#FFA500", // Orange-Yellow 1
    "#FFB300", // Orange-Yellow 2
    "#FFC000", // Orange-Yellow 3
    "#FFC800", // Orange-Yellow 4
    "#FFD200", // Yellow-Orange
    "#FFD800", // Yellow-Orange 2
    "#FFFF00", // Yellow
    "#99FF00", // Yellow-Green 1
    "#77FF00", // Yellow-Green 2
    "#55FF00", // Light green
    "#44FF00", // Light green
    "#33FF00", // Light green
    "#22FF00", // Green
    "#11FF00", // Green
    "#00FF00", // Green
  ];

  const getColor = (progress: number) => {
    const index = Math.floor((progress / 100) * (colors.length - 1));
    return colors[index];
  };

  return (
    <div
      className="file-processing-popup"
    >
      <style jsx>{\`
        .file-processing-popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(21, 20, 25, 0.7);
          backdrop-filter: blur(10px) saturate(90%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-background {
          background: #060507;
          border: 1px solid #292730;
        }
      \`}</style>
      <div
        className="modal-background"
        style={{
          width,
          height,
          borderRadius,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <GlowingEffect spread={64} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div
          className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6"
        >
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div
              style={{
                display: "flex",
                justifyContent: isRTL ? "flex-end" : "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {isRTL ? (
                <>
                  <h3
                    className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 text-balance text-white"
                  >
                    {title}
                  </h3>
                  <div style={{ transform: isRTL ? "scaleX(-1)" : "none" }} className="w-fit rounded-lg border border-gray-600 p-2">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-fit rounded-lg border border-gray-600 p-2">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <h3
                    className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 text-balance text-white"
                  >
                    {title}
                  </h3>
                </>
              )}
            </div>
            <h2
              className="font-sans text-sm/[1.125rem] text-neutral-400"
              style={{ direction: isRTL ? "rtl" : "ltr" }}
            >
              {inscription}
            </h2>
          </div>
          <div
            style={{
              width: "100%",
              height: "10px",
              backgroundColor: "#363636",
              borderRadius: "5px",
              overflow: "hidden",
              transform: isRTL ? "scaleX(-1)" : "none",
            }}
          >
            <div
              style={{
                width: \`\${progress}%\`,
                height: "100%",
                backgroundColor: getColor(progress),
                transition: "width 0.3s",
                borderRadius: "5px",
              }}
            />
          </div>
          <a
            style={{
              margin: "auto",
              padding: "1px",
              alignItems: "center",
              textAlign: "center",
              background: "none",
              border: "0",
              borderRadius: "6.4px",
              color: "#f7f7ff",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
              userSelect: "none",
              WebkitUserSelect: "none",
              whiteSpace: "nowrap",
              transition: "all 0.3s",
              width: "100%",
              backgroundImage: "linear-gradient(135deg, #4776cb, #a19fe5, #6cc606)",
              opacity: isInitialized ? 1 : 0.5,
              pointerEvents: isInitialized ? "auto" : "none",
            }}
            onClick={(e) => {
              e.preventDefault();
              handleContinue();
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span
              style={{
                background: isHovered ? "none" : "#151419",
                padding: "1rem",
                border: "0",
                borderRadius: "6px",
                width: "100%",
                height: "100%",
                transition: "300ms",
                color: isHovered ? "#fff" : "#fff",
              }}
            >
              {buttonInscription}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RNG;
`
  },
],
  dependencies: (
    <span>
      npm install hash-wasm --legacy-peer-deps
      <br />
      <a href="https://ui.aceternity.com/components/glowing-effect" target="_blank" rel="noopener noreferrer" className="link">Glowing Effect</a> from <a href="https://ui.aceternity.com" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
    </span>
  ),
  credit: (
    <span>
      <a href="https://codepen.io/uchihaclan/pen/NWOyRWy" target="_blank" rel="noopener noreferrer" className="link">BUTTONS</a> by <a href="https://codepen.io/uchihaclan" target="_blank" rel="noopener noreferrer" className="link">TAYLOR</a>
      <br />
      <a href="https://codepen.io/FlorinPop17/pen/yLyzmLZ" target="_blank" rel="noopener noreferrer" className="link">Custom Progress Bar</a> by <a href="https://codepen.io/FlorinPop17" target="_blank" rel="noopener noreferrer" className="link">Florin Pop</a>
      <br />
      <a href="https://codepen.io/ash_creator/pen/zYaPZLB" target="_blank" rel="noopener noreferrer" className="link">すりガラスなプロフィールカード</a> by <a href="https://codepen.io/ash_creator" target="_blank" rel="noopener noreferrer" className="link">あしざわ - Webクリエイター</a>
    </span>
  ),
}

export { metadata }