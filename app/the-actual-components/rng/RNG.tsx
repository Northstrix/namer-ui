"use client";
import React, { useState, useEffect, useRef } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Sparkles } from "lucide-react";
import { sha256, sha384, sha512, whirlpool } from "hash-wasm";

interface RNGProps {
  onClose: (randomData: Uint8Array) => void;
  width?: string;
  height?: string;
  borderRadius?: string;
}

const RNG: React.FC<RNGProps> = ({
  onClose,
  width = "300px",
  height = "200px",
  borderRadius = "8px",
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

      const mousePositionString = `${e.clientX}${e.clientY}`;
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

  const isRTL = false; // Assuming LTR for now

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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width,
          height,
          borderRadius,
          backgroundColor: "#151419",
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
              <div className="w-fit rounded-lg border border-gray-600 p-2">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <h3
                className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 text-balance text-white"
              >
                Random Number Generator
              </h3>
            </div>
            <h2 className="font-sans text-sm/[1.125rem] text-neutral-400">
              Move your cursor to increase randomness.
            </h2>
          </div>
          <div
            style={{
              width: "100%",
              height: "10px",
              backgroundColor: "#363636",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
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
              Continue
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RNG;
