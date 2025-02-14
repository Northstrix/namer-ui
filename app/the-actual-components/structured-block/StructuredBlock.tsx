"use client";

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
}>`
  color: ${(props) => props.$textColor};
  font-size: ${(props) => props.$isMobileView ? props.$mobileFontSize : props.$desktopFontSize};
  padding: ${(props) => props.$isMobileView
    ? `${props.$mobilePadding.top} ${props.$mobilePadding.right} ${props.$mobilePadding.bottom} ${props.$mobilePadding.left}`
    : `${props.$desktopPadding.top} ${props.$desktopPadding.right} ${props.$desktopPadding.bottom} ${props.$desktopPadding.left}`};
  text-align: ${(props) => props.$isMobileView ? props.$mobileTextAlign : props.$desktopTextAlign};
  font-weight: ${(props) => (props.$isBold ? "bold" : "normal")};
  direction: ${(props) => props.$textDirection};
`;

export default StructuredBlock;