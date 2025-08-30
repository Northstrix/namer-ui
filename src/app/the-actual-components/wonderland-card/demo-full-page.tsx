"use client";

import React, { useState, useRef, useEffect } from "react";

import WonderlandCard from "@/app/the-actual-components/wonderland-card/WonderlandCard";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/context/app-context";

export default function WonderlandCardDemo() {
  const { toast } = useToast();
  const t = useTranslation();

  // Track blocking state and ignore hovers/unhovers during the block
  const blockUntilRef = useRef<number>(0);

  // Handler for card click event
  function handleClick() {
    toast({
      title: t("namer_ui"),
      description: t("wonderland_card_toast_click"),
    });

    // Set blockUntil timestamp to current time + 24ms to block hover/unhover events during this window
    blockUntilRef.current = performance.now() + 24;
  }

  // Check if current time is within block window
  function isBlocked() {
    return performance.now() < blockUntilRef.current;
  }

  // Handler for hover event: discard if blocked
  function handleHover() {
    if (isBlocked()) return;
    toast({
      title: t("namer_ui"),
      description: t("wonderland_card_toast_hover"),
    });
  }

  // Handler for release event (mouse up)
  function handleRelease() {
    toast({
      title: t("namer_ui"),
      description: t("wonderland_card_toast_release"),
    });
  }

  // Handler for unhover event: discard if blocked
  function handleUnhover() {
    if (isBlocked()) return;
    toast({
      title: t("namer_ui"),
      description: t("wonderland_card_toast_unhover"),
    });
  }

  return (
    <div
      id="wonderland-card-wrapper"
      className="flex flex-wrap gap-6 w-full p-9 items-center justify-center relative"
    >
      <WonderlandCard
        cardId="demo2"
        componentWidth="480px"
        aspectRatio="3/4"
        minTextSize={16}
        maxTextSize={28}
        manualLetterSpacing={1}
        imageSrc="https://raw.githubusercontent.com/Northstrix/wonderland-card/refs/heads/main/public/second-card-image.png"
        imageHeightPercentage={81}
        borderRadius="12px"
        borderRadiusHover="24px"
        borderRadiusActive="36px"
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
        onClick={handleClick}
        onHover={handleHover}
        onRelease={handleRelease}
        onUnhover={handleUnhover}
      />
    </div>
  );
}
