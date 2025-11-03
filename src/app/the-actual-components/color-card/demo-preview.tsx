'use client';

import React from "react";
import { useTranslation } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";
import ColorCard from "@/app/the-actual-components/color-card/ColorCard";

export default function SingleCardDemo() {
  const t = useTranslation();
  const isRTL = useIsRTL();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#fff", // outer white wrapper
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "72%", // inner wrapper width
          height: "auto",
          background: "#fff", // inner white wrapper
          paddingLeft: 16,
          paddingRight: 16,
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ColorCard
          id="white-themed-color-card-demo"
          hexColor="#00A7FA"
          colorAreaHeight="6rem"
          cardBg="#F9F9F9"
          contrastRatioLabelText={t("custom_slider_note_contrast_ratio")}
          valueColor="#000000"
          contrastRatioLabelColor="#333333"
          letterColor="#FFF"
          hexTextColor="#000000"
          buttonIdleBg="#F9F9F9"
          buttonIdleIcon="#00A7FA"
          buttonIdleOutlineColor="#E5E5E5"
          buttonIdleOutlineWidth={1}
          buttonHoverBg="#00A7FA"
          buttonHoverIcon="#FFFFFF"
          buttonHoverOutlineColor="#00A7FA"
          buttonHoverOutlineWidth={1}
          cardBorderColor="#E5E5E5"
          colorAreaBorderColor="#E5E5E5"
          squareBorderColor="#E5E5E5"
          isRTL={isRTL}

          // True badge style - light, blue
          aaBadgeForegroundColor="#00A7FA"
          aaBadgeBackgroundColor="#CDEEFF"
          aaBadgeBorderColor="#AFE4FF"

          aaaBadgeForegroundColor="#00A7FA"
          aaaBadgeBackgroundColor="#CDEEFF"
          aaaBadgeBorderColor="#AFE4FF"

          // False badge style - transparent, gray border matching card, label color text
          aaBadgeFalseForegroundColor="#333333"
          aaBadgeFalseBackgroundColor="transparent"
          aaBadgeFalseBorderColor="#E5E5E5"

          aaaBadgeFalseForegroundColor="#333333"
          aaaBadgeFalseBackgroundColor="transparent"
          aaaBadgeFalseBorderColor="#E5E5E5"

          badgesHorizontalGap={8}
          badgesPositionBottom="12px"
          badgesPositionRight="12px"
          badgesPositionLeft="12px"

          onCopy={(color) =>
            console.log(`The copy button has been clicked for the card with ${color} color.`)
          }
        />
      </div>
    </div>
  );
}
