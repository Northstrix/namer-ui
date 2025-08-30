"use client";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import WonderlandCard from "@/app/the-actual-components/wonderland-card/WonderlandCard";

export default function WonderlandCardDemo() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(480); // store as number
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const cardAspectRatio = 3 / 4;        // width / height = 0.75
  const containerAspectRatio = 16 / 10; // width / height = 1.6

  // --- Width multiplier interpolation config ---
  const minW = 100;
  const minM = 0.5;
  const maxW = 564;
  const maxM = 0.76;

  // Calculate width multiplier only after mount; before that, no scaling (multiplier = 1)
  function getMultiplier(width: number) {
    if (!mounted) return 1;
    if (width <= minW) return minM;
    if (width >= maxW) return maxM;
    const t = (width - minW) / (maxW - minW);
    return minM + t * (maxM - minM);
  }

  useEffect(() => {
    setMounted(true);

    function updateCardSize() {
      if (!outerRef.current) return;

      const outerWidth = outerRef.current.clientWidth;
      const outerHeight = outerRef.current.clientHeight;

      // Normalize container to behave like a 16:10 box
      let effectiveWidth, effectiveHeight;
      if (outerWidth / outerHeight > containerAspectRatio) {
        effectiveHeight = outerHeight;
        effectiveWidth = outerHeight * containerAspectRatio;
      } else {
        effectiveWidth = outerWidth;
        effectiveHeight = outerWidth / containerAspectRatio;
      }

      // Fit 3:4 card optimally inside effective bounding box
      let baseWidth;
      if (effectiveWidth / effectiveHeight > cardAspectRatio) {
        baseWidth = effectiveHeight * cardAspectRatio;
      } else {
        baseWidth = effectiveWidth;
      }

      // Apply width multiplier
      const multiplier = getMultiplier(outerWidth);
      const newWidth = baseWidth * multiplier;

      setCardWidth(newWidth);
    }

    updateCardSize();

    // Observe size changes of outer container, not window, to handle cases where window.innerWidth doesn't change
    const resizeObserver = new ResizeObserver(() => {
      updateCardSize();
    });
    if (outerRef.current) {
      resizeObserver.observe(outerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [mounted]);

  // --- Font size scaling config ---
  const BASE_WIDTH = 480;
  const MIN_TEXT_SIZE_AT_BASE = 18;
  const MAX_TEXT_SIZE_AT_BASE = 26;

  const minTextMultiplier = 2.0; // tweak this to scale min text size
  const maxTextMultiplier = 1.3; // tweak this to scale max text size

  const scaleFactor = cardWidth / BASE_WIDTH;
  const minTextSize = Math.round(MIN_TEXT_SIZE_AT_BASE * scaleFactor * minTextMultiplier);
  const maxTextSize = Math.round(MAX_TEXT_SIZE_AT_BASE * scaleFactor * maxTextMultiplier);

  // --- Progressive padding scaling ---
  const PAD_BASE_TOP = 17;   // px (original at 480px)
  const PAD_BASE_LEFT = 19;  // px (original at 480px)
  const PAD_MIN_WIDTH = 100; // width where padding is only 20%
  const PAD_MAX_WIDTH = 480; // width where padding is 100%
  const PAD_MIN_FACTOR = 0.4;

  function getPaddingScale(width: number) {
    if (width <= PAD_MIN_WIDTH) return PAD_MIN_FACTOR;
    if (width >= PAD_MAX_WIDTH) return 1.0;
    const t = (width - PAD_MIN_WIDTH) / (PAD_MAX_WIDTH - PAD_MIN_WIDTH);
    return PAD_MIN_FACTOR + t * (1.0 - PAD_MIN_FACTOR);
  }

  const padScale = getPaddingScale(cardWidth);
  const textPaddingTop = `${PAD_BASE_TOP * padScale}px`;
  const textPaddingLeft = `${PAD_BASE_LEFT * padScale}px`;

  // onClick handler to navigate
  function handleCardClick() {
    router.push("/components/wonderland-card");
  }

  return (
    <div
      ref={outerRef}
      className="flex w-full h-full p-9 bg-[#fff] items-center justify-center relative"
    >
      <div style={{ width: `${cardWidth}px` }}>
        <WonderlandCard
          cardId="demo2"
          componentWidth={`${cardWidth}px`}
          aspectRatio="3/4"
          minTextSize={minTextSize}
          maxTextSize={maxTextSize}
          textPaddingTop={textPaddingTop}
          textPaddingLeft={textPaddingLeft}
          manualLetterSpacing={1}
          imageSrc="https://raw.githubusercontent.com/Northstrix/wonderland-card/refs/heads/main/public/second-card-image.png"
          imageHeightPercentage={81}
          borderRadius="8px"
          borderRadiusHover="8px"
          borderRadiusActive="8px"
          inscriptionFontWeight={500}
          tranquiluxeProps={{
            color: [1, 0.47, 0.07], // vivid orange (#ff7812)
            speed: 0.7,
          }}
          tranquiluxePropsActive={{
            color: [0.27, 0.78, 1], // light blue (#45c7ff)
            speed: 1.2,
          }}
          backgroundColor="#0a0a0a"
          textColor="#fff"
          textColorHover="#0a0a0a"
          textColorActive="#fff"
          outlineColor="#ccc"
          outlineHoverColor="#ccc"
          outlineActiveColor="#ccc"
          outlineWidth="1px"
          outlineWidthHover="1px"
          outlineWidthActive="1px"
          onClick={handleCardClick}
        />
      </div>
    </div>
  );
}
