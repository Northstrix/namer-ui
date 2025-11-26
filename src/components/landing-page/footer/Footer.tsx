"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { MultiColoredTextV1 } from "@/app/the-actual-components/multi-colored-text/MultiColoredText";
import { useApp } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";

const MIN_WIDTH = 100;
const MAX_WIDTH = 1536;
const MIN_FONT_SIZE_EM = 1.32;
const MAX_FONT_SIZE_EM = 19;

export default function Footer() {
  const { lang } = useApp(); // 'en', 'he', 'es'
  const isRTL = useIsRTL();

  const containerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(`${MAX_FONT_SIZE_EM}em`);
  const [rotation, setRotation] = useState(isRTL ? 225 : 135);

  // badge load state
  const [verifiedToolsLoaded, setVerifiedToolsLoaded] = useState(false);
  const [twelveToolsLoaded, setTwelveToolsLoaded] = useState(false);
  const [auraPlusPlusLoaded, setAuraPlusPlusLoaded] = useState(false);
  const [startupFameLoaded, setStartupFameLoaded] = useState(false);

  // badge URLs for this app (Namer UI)
  const verifiedToolsImg = "https://www.verifiedtools.info/badge.png";
  const verifiedToolsLink = "https://www.verifiedtools.info";

  const twelveToolsImg = "https://twelve.tools/badge0-dark.svg";
  const twelveToolsLink = "https://twelve.tools";

  const auraPlusPlusImg =
    "https://auraplusplus.com/images/badges/featured-on-light.svg";
  const auraPlusPlusLink = "https://auraplusplus.com/projects/namer-ui";

  const startupFameImg = "https://startupfa.me/badges/featured/dark.webp";
  const startupFameLink =
    "https://startupfa.me/s/namer-ui.vercel.app?utm_source=namer-ui.vercel.app";

  // responsive font size
  useEffect(() => {
    function updateFontSize() {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const clampedWidth = Math.min(Math.max(width, MIN_WIDTH), MAX_WIDTH);
      const normalizedScale =
        (clampedWidth - MIN_WIDTH) / (MAX_WIDTH - MIN_WIDTH);
      const fontSizeEm =
        MIN_FONT_SIZE_EM +
        normalizedScale * (MAX_FONT_SIZE_EM - MIN_FONT_SIZE_EM);
      setFontSize(`${fontSizeEm.toFixed(2)}em`);
    }
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  // rotation animation
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

  let inscription: JSX.Element;
  if (lang === "he") {
    inscription = (
      <span>
        נוצר על ידי {NameLink} באמצעות {NextLink} {"‏"}, {PerplexityLink} ו‑
        {FirebaseLink}
      </span>
    );
  } else if (lang === "es") {
    inscription = (
      <span>
        Hecho por {NameLink} usando {NextLink}, {PerplexityLink} y{" "}
        {FirebaseLink}
      </span>
    );
  } else {
    inscription = (
      <span>
        Made by {NameLink} using {NextLink}, {PerplexityLink}, and{" "}
        {FirebaseLink}
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

      {/* Badges block – now above MultiColoredText */}
      <div className="mt-4 mb-2 flex flex-col items-center gap-2">
        {/* Verified Tools */}
        <a
          href={verifiedToolsLoaded ? verifiedToolsLink : undefined}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            pointerEvents: verifiedToolsLoaded ? "auto" : "none",
          }}
        >
          <img
            src={verifiedToolsImg}
            alt={verifiedToolsLoaded ? "Verified on Verified Tools" : ""}
            loading="lazy"
            onLoad={() => setVerifiedToolsLoaded(true)}
            onError={() => setVerifiedToolsLoaded(false)}
            style={{
              opacity: verifiedToolsLoaded ? 1 : 0.01,
              height: verifiedToolsLoaded ? "62px" : "1px",
              width: "auto",
              borderRadius: 6,
              objectFit: "contain",
              transition: "opacity 0.2s ease-out",
            }}
          />
        </a>

        {/* Twelve Tools */}
        <a
          href={twelveToolsLoaded ? twelveToolsLink : undefined}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            pointerEvents: twelveToolsLoaded ? "auto" : "none",
          }}
        >
          <img
            src={twelveToolsImg}
            alt={twelveToolsLoaded ? "Featured on Twelve Tools" : ""}
            loading="lazy"
            onLoad={() => setTwelveToolsLoaded(true)}
            onError={() => setTwelveToolsLoaded(false)}
            style={{
              opacity: twelveToolsLoaded ? 1 : 0.01,
              height: twelveToolsLoaded ? "54px" : "1px",
              width: "auto",
              borderRadius: 6,
              objectFit: "contain",
              transition: "opacity 0.2s ease-out",
            }}
          />
        </a>

        {/* Aura++ badge with outline + hover */}
        <div
          aria-label="Aura++ badge"
          style={{
            borderRadius: "12px",
            background: "#111",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            display: "inline-block",
            userSelect: "none",
            maxWidth: "max-content",
            cursor: auraPlusPlusLoaded ? "pointer" : "default",
            minHeight: 54,
          }}
        >
          <a
            href={auraPlusPlusLoaded ? auraPlusPlusLink : undefined}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              pointerEvents: auraPlusPlusLoaded ? "auto" : "none",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src={auraPlusPlusImg}
              alt={auraPlusPlusLoaded ? "Featured on Aura++" : ""}
              loading="lazy"
              onLoad={() => setAuraPlusPlusLoaded(true)}
              onError={() => setAuraPlusPlusLoaded(false)}
              style={{
                opacity: auraPlusPlusLoaded ? 1 : 0.01,
                height: auraPlusPlusLoaded ? "54px" : "1px",
                width: "auto",
                borderRadius: "12px",
                objectFit: "contain",
                display: "block",
                transition: "opacity 0.2s ease-out",
              }}
            />
          </a>
        </div>

        {/* Startup Fame */}
        <a
          href={startupFameLoaded ? startupFameLink : undefined}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            pointerEvents: startupFameLoaded ? "auto" : "none",
          }}
        >
          <img
            src={startupFameImg}
            alt={
              startupFameLoaded ? "Namer UI - Featured on Startup Fame" : ""
            }
            width={171}
            height={54}
            loading="lazy"
            onLoad={() => setStartupFameLoaded(true)}
            onError={() => setStartupFameLoaded(false)}
            style={{
              opacity: startupFameLoaded ? 1 : 0.01,
              height: startupFameLoaded ? "54px" : "1px",
              width: "auto",
              borderRadius: 6,
              objectFit: "contain",
              transition: "opacity 0.2s ease-out",
            }}
          />
        </a>
      </div>

      {/* MultiColoredText now below badges */}
      <div className="w-full flex justify-center mb-4">
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
