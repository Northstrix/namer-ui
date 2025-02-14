'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "StructuredBlock.tsx" file
import StructuredBlock from '@/app/the-actual-components/structured-block/StructuredBlock'

<div style={{
  display: 'flex',
  flexDirection: 'column', // Stack elements vertically
  gap: '0px', // Remove gap between items
  justifyContent: 'flex-start', // Align items to the top
  alignItems: 'stretch', // Make items take full width
  backgroundColor: '#050505', // Background color of the container
  borderRadius: '8px', // Rounded corners for the container
  minHeight: '300px' // Minimum height for the container
}}>
  <StructuredBlock>
    Section Header
  </StructuredBlock>
  <StructuredBlock
    textColor="#f7f7ff"
    desktopPadding={{
      left: "24px",
      right: "24px",
      top: "0px",
      bottom: "0px",
    }}
    mobilePadding={{
      left: "10px",
      right: "10px",
      top: "0px",
      bottom: "0px",
    }}
    desktopFontSize="1.32rem"
    mobileFontSize="1.14rem"
  >
    It can <GradientText>wrap</GradientText> other elements
  </StructuredBlock>
  <StructuredBlock
    desktopTextAlign="right"
    mobileTextAlign="right"
    textDirection="rtl"
  >
    טקסט מיושר ל<GradientText>ימין</GradientText>.
  </StructuredBlock>
</div>

// Note: The StructuredBlock component accepts the following props:
// - children: ReactNode (required) - The content to be rendered inside the block.
// - textColor: string (optional) - Color of the text (default: '#FFFFFF').
// - desktopPadding: object (optional) - Padding for desktop view (default: { left: "24px", right: "24px", top: "50px", bottom: "30px" }).
// - mobilePadding: object (optional) - Padding for mobile view (default: { left: "10px", right: "10px", top: "41px", bottom: "20px" }).
// - desktopFontSize: string (optional) - Font size for desktop view (default: '62px').
// - mobileFontSize: string (optional) - Font size for mobile view (default: '33px').
// - desktopVersionBottomThreshold: number (optional) - Threshold width for switching to mobile view (default: 768). Used only when overrideInternalCheck is false.
// - desktopTextAlign: "left" | "center" | "right" (optional) - Text alignment for desktop view (default: 'left').
// - mobileTextAlign: "left" | "center" | "right" (optional) - Text alignment for mobile view (default: 'center').
// - isBold: boolean (optional) - Whether the text should be bold (default: false).
// - textDirection: "ltr" | "rtl" (optional) - Text direction, left-to-right or right-to-left (default: 'ltr').
// - overrideInternalCheck: boolean (optional) - If true, uses externalMobileViewValue instead of internal width check (default: false).
// - externalMobileViewValue: boolean (optional) - Determines mobile/desktop view when overrideInternalCheck is true (default: false).
`,
code: [
  {
    filename: 'StructuredBlock.tsx',
    content: `"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import styled from "styled-components";

interface StructuredBlockProps {
  children: ReactNode;
  textColor?: string;
  desktopPadding?: { left: string; right: string; top: string; bottom: string; };
  mobilePadding?: { left: string; right: string; top: string; bottom: string; };
  desktopFontSize?: string;
  mobileFontSize?: string;
  desktopVersionBottomThreshold?: number;
  desktopTextAlign?: "left" | "center" | "right";
  mobileTextAlign?: "left" | "center" | "right";
  isBold?: boolean;
  textDirection?: "ltr" | "rtl";
  overrideInternalCheck?: boolean;
  externalMobileViewValue?: boolean;
}

const StructuredBlock: React.FC<StructuredBlockProps> = ({
  children,
  textColor = "#FFFFFF",
  desktopPadding = { left: "24px", right: "24px", top: "50px", bottom: "30px" },
  mobilePadding = { left: "10px", right: "10px", top: "41px", bottom: "20px" },
  desktopFontSize = "62px",
  mobileFontSize = "33px",
  desktopVersionBottomThreshold = 768,
  desktopTextAlign = "left",
  mobileTextAlign = "center",
  isBold = false,
  textDirection = "ltr",
  overrideInternalCheck = false,
  externalMobileViewValue = false,
}) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (overrideInternalCheck) {
        setIsMobileView(externalMobileViewValue);
      } else if (containerRef.current) {
        setIsMobileView(containerRef.current.offsetWidth < desktopVersionBottomThreshold);
      }
    };

    // Create a ResizeObserver
    const resizeObserver = new ResizeObserver(handleResize);

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Initial check
    handleResize();

    // Cleanup
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [desktopVersionBottomThreshold, overrideInternalCheck, externalMobileViewValue]);

  return (
    <BlockContainer
      ref={containerRef}
      $isMobileView={isMobileView}
      $desktopPadding={desktopPadding}
      $mobilePadding={mobilePadding}
      $desktopFontSize={desktopFontSize}
      $mobileFontSize={mobileFontSize}
      $textColor={textColor}
      $desktopTextAlign={desktopTextAlign}
      $mobileTextAlign={mobileTextAlign}
      $isBold={isBold}
      $textDirection={textDirection}
    >
      {children}
    </BlockContainer>
  );
};

const BlockContainer = styled.div<{
  $isMobileView: boolean;
  $desktopPadding: { left: string; right: string; top: string; bottom: string };
  $mobilePadding: { left: string; right: string; top: string; bottom: string };
  $desktopFontSize: string;
  $mobileFontSize: string;
  $textColor: string;
  $desktopTextAlign: "left" | "center" | "right";
  $mobileTextAlign: "left" | "center" | "right";
  $isBold: boolean;
  $textDirection: "ltr" | "rtl";
}>\`
  color: \${(props) => props.\$textColor};
  font-size: \${(props) => props.\$isMobileView ? props.\$mobileFontSize : props.\$desktopFontSize};
  padding: \${(props) => props.\$isMobileView
    ? \`\${props.$mobilePadding.top} \${props.$mobilePadding.right} \${props.$mobilePadding.bottom} \${props.$mobilePadding.left}\`
    : \`\${props.$desktopPadding.top} \${props.$desktopPadding.right} \${props.$desktopPadding.bottom} \${props.$desktopPadding.left}\`};
  text-align: \${(props) => props.\$isMobileView ? props.\$mobileTextAlign : props.\$desktopTextAlign};
  font-weight: \${(props) => (props.\$isBold ? "bold" : "normal")};
  direction: \${(props) => props.\$textDirection};
\`;

export default StructuredBlock;
`
  },
],
  dependencies: 'npm install styled-components --legacy-peer-deps',
  credit: (
    <span></span>
  ),
}

export { metadata }