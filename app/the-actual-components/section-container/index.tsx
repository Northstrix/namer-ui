'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "SectionContainer.tsx" file
import SectionContainer from '@/app/the-actual-components/section-container/SectionContainer'

<SectionContainer 
  desktopPadding={{ left: "40px", right: "40px", top: "40px", bottom: "20px" }}
  mobilePadding={{ left: "20px", right: "20px", top: "20px", bottom: "20px" }}
>
  This text is left-aligned on desktop and centered on mobile.
</SectionContainer>

// Note: The SectionContainer component accepts the following props:
// - children: React.ReactNode (required) - The content to be rendered inside the container.
// - backgroundColor: string (optional) - Background color of the container (default: "transparent").
// - desktopPadding: object (optional) - Padding for desktop view (default: { left: "24px", right: "24px", top: "0px", bottom: "0px" }).
// - mobilePadding: object (optional) - Padding for mobile view (default: { left: "10px", right: "10px", top: "0px", bottom: "0px" }).
// - desktopVersionBottomThreshold: number (optional) - Width threshold for switching between desktop and mobile views (default: 768).
// - desktopContentAlign: "left" | "center" | "right" (optional) - Content alignment for desktop view (default: "left").
// - mobileContentAlign: "left" | "center" | "right" (optional) - Content alignment for mobile view (default: "center").
`,
code: [
  {
    filename: 'SectionContainer.tsx',
    content: `"use client";

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

interface SectionContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  desktopPadding?: { left: string; right: string; top: string; bottom: string };
  mobilePadding?: { left: string; right: string; top: string; bottom: string };
  desktopVersionBottomThreshold?: number;
  desktopContentAlign?: "left" | "center" | "right";
  mobileContentAlign?: "left" | "center" | "right";
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  backgroundColor = "transparent",
  desktopPadding = { left: "24px", right: "24px", top: "0px", bottom: "0px" },
  mobilePadding = { left: "10px", right: "10px", top: "0px", bottom: "0px" },
  desktopVersionBottomThreshold = 768,
  desktopContentAlign = "left",
  mobileContentAlign = "center",
}) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setIsMobileView(containerRef.current.offsetWidth < desktopVersionBottomThreshold);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    handleResize(); // Initial check

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [desktopVersionBottomThreshold]);

  return (
    <StyledContainer
      ref={containerRef}
      $isMobileView={isMobileView}
      $desktopPadding={desktopPadding}
      $mobilePadding={mobilePadding}
      $backgroundColor={backgroundColor}
      $desktopContentAlign={desktopContentAlign}
      $mobileContentAlign={mobileContentAlign}
    >
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{
  $isMobileView: boolean;
  $desktopPadding: { left: string; right: string; top: string; bottom: string };
  $mobilePadding: { left: string; right: string; top: string; bottom: string };
  $backgroundColor: string;
  $desktopContentAlign: "left" | "center" | "right";
  $mobileContentAlign: "left" | "center" | "right";
}>\`
  background-color: \${(props) => props.$backgroundColor};
  padding: \${(props) =>
    props.\$isMobileView
      ? \`\${props.$mobilePadding.top} \${props.$mobilePadding.right} \${props.$mobilePadding.bottom} \${props.$mobilePadding.left}\`
      : \`\${props.$desktopPadding.top} \${props.$desktopPadding.right} \${props.$desktopPadding.bottom} \${props.$desktopPadding.left}\`};
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: \${(props) => {
    const alignment = props.\$isMobileView ? props.\$mobileContentAlign : props.\$desktopContentAlign;
    switch (alignment) {
      case "center":
        return "center";
      case "right":
        return "flex-end";
      default:
        return "flex-start";
    }
  }};
\`;

export default SectionContainer;
`
  },
],
  dependencies: 'npm install styled-components --legacy-peer-deps',
  credit: (
    <span></span>
  ),
}

export { metadata }