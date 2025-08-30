"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { MultiColoredTextV1 } from "@/app/the-actual-components/multi-colored-text/MultiColoredText";
import { useApp } from "@/context/app-context"; // For lang detection
import useIsRTL from "@/hooks/useIsRTL";

// Responsive font sizing range
const MIN_WIDTH = 100;
const MAX_WIDTH = 1536;
const MIN_FONT_SIZE_EM = 1.32;
const MAX_FONT_SIZE_EM = 19;

export default function Footer() {
  const { lang } = useApp(); // Language code like 'en', 'he', 'es'
  const isRTL = useIsRTL();
  const containerRef = useRef<HTMLDivElement>(null);

  const [fontSize, setFontSize] = useState(`${MAX_FONT_SIZE_EM}em`);
  const [rotation, setRotation] = useState(isRTL ? 225 : 135);

  // Responsive font size effect
  useEffect(() => {
    function updateFontSize() {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const clampedWidth = Math.min(Math.max(width, MIN_WIDTH), MAX_WIDTH);
      const normalizedScale = (clampedWidth - MIN_WIDTH) / (MAX_WIDTH - MIN_WIDTH);
      const fontSizeEm =
        MIN_FONT_SIZE_EM + normalizedScale * (MAX_FONT_SIZE_EM - MIN_FONT_SIZE_EM);
      setFontSize(`${fontSizeEm.toFixed(2)}em`);
    }
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  // Rotation effect every 2 seconds
  useEffect(() => {
    let angle = isRTL ? 225 : 135;
    const interval = setInterval(() => {
      angle += isRTL ? -15 : 15;
      if (angle >= 360) angle -= 360;
      if (angle < 0) angle += 360;
      setRotation(angle);
    }, 2000);
    return () => clearInterval(interval);
  }, [isRTL]);

  // Links used in the inscription
  const NameLink = (
    <Link
      href="https://maxim-bortnikov.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      {lang === "he" ? "מקסים בורטניקוב" : "Maxim Bortnikov"}
    </Link>
  );
  const NextLink = (
    <Link
      href="https://nextjs.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      Next.js
    </Link>
  );
  const PerplexityLink = (
    <Link
      href="https://www.perplexity.ai"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      Perplexity
    </Link>
  );
  const FirebaseLink = (
    <Link
      href="https://firebase.studio/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      Firebase Studio
    </Link>
  );

  // Compose the inscription according to language with proper punctuation for Hebrew
  let inscription: JSX.Element;
  if (lang === "he") {
    inscription = (
      <span>
        נוצר על ידי {NameLink} באמצעות {NextLink} {"‏"}, {PerplexityLink} ו‑{FirebaseLink}
      </span>
    );
  } else if (lang === "es") {
    inscription = (
      <span>
        Hecho por {NameLink} usando {NextLink}, {PerplexityLink} y {FirebaseLink}
      </span>
    );
  } else {
    inscription = (
      <span>
        Made by {NameLink} using {NextLink}, {PerplexityLink}, and {FirebaseLink}
      </span>
    );
  }

  return (
    <footer
      className={clsx(
        "w-full px-6 py-6 text-foreground flex flex-col items-center",
        "bg-[hsl(var(--background))]"
      )}
    >
      {/* Top inscription */}
      <p
        className={clsx(
          "text-sm leading-relaxed",
          isRTL ? "text-right" : "text-center",
          "max-w-full"
        )}
        dir={isRTL ? "rtl" : "ltr"}
        style={{ wordBreak: "break-word" }}
      >
        {inscription}
      </p>

      {/* MultiColoredText below with margin */}
      <div className="w-full flex justify-center my-10">
        <div
          ref={containerRef}
          dir={isRTL ? "rtl" : "ltr"}
          className="overflow-hidden"
        >
          <MultiColoredTextV1
            inscription={
              lang === "he" ? "נמר UI" : lang === "es" ? "Namer UI" : "Namer UI"
            }
            fontSize={fontSize}
            colors={["#4776cb", "#a19fe5", "#6cc606"]}
            separatorRotation={`${rotation}deg`}
            fontWeight={700}
          />
        </div>
      </div>
    </footer>
  );
}
