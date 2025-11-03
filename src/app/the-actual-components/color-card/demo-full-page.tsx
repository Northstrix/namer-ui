'use client';

import React from 'react';
import ColorCard from '@/app/the-actual-components/color-card/ColorCard';

export default function ColorCardDemo() {
  return (
    <div className="flex flex-wrap gap-8 justify-start">
      {/* 1. Default Card */}
      <div style={{ width: 360 }}>
        <ColorCard
          id="namer-ui-color-card-full-page-demo-card-1"
          hexColor="#00A7FA"
          onCopy={(color) =>
            console.log(`The copy button has been clicked for the card with ${color} color.`)
          }
          showPercentageTag
          percentageTagValue="Default"
        />
      </div>

      {/* 2. Hebrew RTL Card with ל, no badges */}
      <div style={{ width: 360 }}>
        <ColorCard
          id="namer-ui-color-card-full-page-demo-card-2"
          hexColor="#6C00FA"
          cardBg="#0a0a0a"
          cardBorderColor="#262626"
          cardBorderRadius={12}
          cardPaddingX="16px"
          cardPaddingY="16px"
          isRTL
          contrastRatioLabelText="יחס ניגודיות"
          letter="ל"
          letterFontSize="1.5rem"
          showPercentageTag
          percentageTagValue="גרסה בעברית"
          buttonIdleBg="#0A0A0A"
          buttonIdleIcon="#FAFAFA"
          buttonIdleOutlineColor="#262626"
          buttonIdleOutlineWidth={1}
          buttonHoverBg="#00A7FA"
          buttonHoverIcon="#0A0A0A"
          buttonHoverOutlineColor="#00A7FA"
          buttonHoverOutlineWidth={1}
          buttonSize={24}
          buttonIconSize={14}
          buttonBorderRadius={90}
          colorAreaBorderColor="#262626"
          showAABadge={false}
          showAAABadge={false}
          onCopy={(color) =>
            console.log(`The copy button has been clicked for the card with ${color} color.`)
          }
        />
      </div>

      {/* 3. Light Theme - Orange with badges styled as button and orange text */}
      <div style={{ width: 360 }}>
        <ColorCard
          id="namer-ui-color-card-full-page-demo-card-3"
          hexColor="#FA5300"
          cardBg="#FFFFFF"
          contrastRatioLabelText="Contrast Ratio"
          valueColor="#000000"
          contrastRatioLabelColor="#333333"
          letterColor="#FA5300"
          hexTextColor="#000000"
          buttonIdleBg="#FFFFFF"
          buttonIdleIcon="#FA5300"
          buttonIdleOutlineColor="#E5E5E5"
          buttonIdleOutlineWidth={1}
          buttonHoverBg="#FA5300"
          buttonHoverIcon="#FFFFFF"
          buttonHoverOutlineColor="#FA5300"
          buttonHoverOutlineWidth={1}
          cardBorderColor="#E5E5E5"
          colorAreaBorderColor="#E5E5E5"
          squareBorderColor="#E5E5E5"
          showPercentageTag
          percentageTagValue="Bright"
          percentageTagBg="rgba(250,83,0,0.15)"
          percentageTagTextColor="#FA5300"

          // True badge style - orange theme
          aaBadgeForegroundColor="#FA5300"
          aaBadgeBackgroundColor="#FFF4E6"
          aaBadgeBorderColor="#FA5300"

          aaaBadgeForegroundColor="#FA5300"
          aaaBadgeBackgroundColor="#FFF4E6"
          aaaBadgeBorderColor="#FA5300"

          // False badge style - for light mode: transparent background, gray border, gray label
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

      {/* 4. Subtle Gray, badges gray: true lighter, false darker */}
      <div style={{ width: 360 }}>
        <ColorCard
          id="namer-ui-color-card-full-page-demo-card-4"
          hexColor="#0CAD00"
          cardBg="#2E2E2E"
          cardBorderColor="#444444"
          colorAreaBorderColor="#444444"
          squareBorderColor="#444444"
          cardBorderRadius={0}
          colorAreaBorderRadius={0}
          squareBorderRadius={0}
          buttonIdleOutlineWidth={0}
          buttonHoverOutlineWidth={0}
          buttonBorderRadius={0}
          letterColor="#000000"
          aaBadgeForegroundColor="#ccc"
          aaBadgeBackgroundColor="rgba(255,255,255,0.15)"
          aaBadgeBorderColor="#999"
          aaBadgeFalseForegroundColor="#666"
          aaBadgeFalseBackgroundColor="rgba(0,0,0,0.3)"
          aaBadgeFalseBorderColor="#444"
          aaaBadgeForegroundColor="#ccc"
          aaaBadgeBackgroundColor="rgba(255,255,255,0.15)"
          aaaBadgeBorderColor="#999"
          aaaBadgeFalseForegroundColor="#666"
          aaaBadgeFalseBackgroundColor="rgba(0,0,0,0.3)"
          aaaBadgeFalseBorderColor="#444"
          badgesHorizontalGap={6}
          badgesPositionBottom="28px"
          badgesPositionRight="12px"
          badgesPositionLeft="12px"
          aaBadgeStyle={{ borderRadius: 0 }}
          aaaBadgeStyle={{ borderRadius: 0 }}
          onCopy={(color) =>
            console.log(`The copy button has been clicked for the card with ${color} color.`)
          }
        />
      </div>

      {/* 5. Light Purple Theme - Cantonese, no badges, copy button changes on card hover */}
      <div style={{ width: 480 }}>
        <ColorCard
          id="namer-ui-color-card-full-page-demo-card-5"
          hexColor="#9C27B0"
          cardBg="linear-gradient(135deg, #f9f4ff 0%, #f9f4ff 80%, #f0ccfa 84%, #eab8fb 85%, #d28aea 88%, #b13bdd 90%, #b13bdd 100%)"
          cardPaddingX="24px"
          cardPaddingY="24px"
          contrastRatioLabelText="對比比例"
          contrastRatioLabelColor="#541f93"
          valueColor="#3A0060"
          hexTextColor="#3A0060"
          buttonIdleBg="#0A0A0A"
          buttonIdleIcon="#FAFAFA"
          buttonHoverBg="#9C27B0"
          buttonHoverIcon="#FAFAFA"
          colorAreaHeight="16rem"
          buttonBorderRadius={10}
          cardBorderRadius={24}
          colorAreaBorderRadius={10}
          squareBorderRadius={10}
          cardBorderWidth={0}
          colorAreaBorderWidth={0}
          squareBorderWidth={0}
          buttonSize={32}
          copyButtonChangeOnCardHover={true}
          showAABadge={false}
          showAAABadge={false}
          showPercentageTag={true}
          percentageTagValue="深蘭花紫"
          percentageTagBg="#F9F4FF"
          percentageTagTextColor="#3A0060"
          percentageTagTextSize="1.125rem"
          percentageTagPaddingX="11px"
          percentageTagPaddingY="9px"
          percentageTagRadius={10}
          percentageTagOutlineWidth={0}
          percentageTagOffsetX="24px"
          percentageTagOffsetY="24px"
          onCopy={(color) =>
            console.log(`The copy button has been clicked for the card with ${color} color.`)
          }
        />
      </div>
    </div>
  );
}
