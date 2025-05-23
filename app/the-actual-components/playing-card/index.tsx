'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "ProjectCard.tsx" and "SecondProjectCard.tsx" files
import ProjectCard from '@/app/the-actual-components/project-card/ProjectCard'
import SecondPlayingCard from '@/app/the-actual-components/playing-card/SecondPlayingCard'

const [revealCanvasForPlayingCard, setRevealCanvasForPlayingCardForPlayingCard] = useState(false);

<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '18px',
    padding: '32px',
    backgroundColor: '#050505',
    borderRadius: '8px',
    minHeight: '300px',
  }}
>
  <div
    style={{
      fontSize: '20px',
      color: '#fff',
      marginBottom: '4px',
      textAlign: 'center',
      letterSpacing: '0.01em',
    }}
  >
    Click on the first card to show/hide dynamic background
  </div>
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '36px',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}
  >
    <PlayingCard
      componentWidth="412px"
      aspectRatio="3/4"
      outerRounding="18px"
      innerRounding="18px"
      backgroundColor="#FFF"
      foregroundColor="#000"
      imageHeightPercentage={70}
      imageSrc="https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/playground-card-image.webp"
      imageAlt=""
      outlineColor="#ddd"
      hoverOutlineColor="#aaa"
      textArray={["洪", "秀", "全"]}
      minWidth={200}
      maxWidth={400}
      minTextSize={16}
      maxTextSize={24}
      verticalPadding="20px"
      horizontalPadding="20px"
      manualLetterSpacing={-2}
      componentId="card-1"
      revealCanvas={revealCanvasForPlayingCard}
      onCardClicked={() => setRevealCanvasForPlayingCardForPlayingCard((prev) => !prev)}
      textColorTransitionDelay="1s"
      textColorTransitionDuration="2.4s"
    />
    <SecondPlayingCard
      componentWidth="412px"
      aspectRatio="3/4"
      outerRounding="18px"
      innerRounding="18px"
      backgroundColor="#FFF"
      imageHeightPercentage={62}
      imageSrc="https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/second-playground-card-image.webp"
      imageAlt=""
      outlineColor="#ddd"
      hoverOutlineColor="#3a3a3a"
      textArray={["半", "影"]}
      minWidth={200}
      maxWidth={400}
      minTextSize={16}
      maxTextSize={24}
      verticalPadding="20px"
      horizontalPadding="20px"
      manualLetterSpacing={1}
      componentId="card-2"
      onCardClicked={() => toast.info('The second card has been clicked')}
    />
  </div>
</div>

// Note: The PlayingCard component accepts the following props:
// - componentWidth: string (optional, default: "412px") - The maximum width of the card.
// - aspectRatio: string (optional, default: "9/16") - The aspect ratio of the card.
// - outerRounding: string (optional, default: "24px") - CSS border-radius for the card's outer border.
// - innerRounding: string (optional, default: "16px") - CSS border-radius for the card's inner container.
// - backgroundColor: string (optional, default: "#FFF") - The background color of the card in its normal state.
// - foregroundColor: string (optional, default: "#000") - The main text color for the card's content.
// - imageHeightPercentage: number (optional, default: 70) - The height of the image container as a percentage of the card's height.
// - imageSrc: string (required) - The URL or path to the card's image.
// - imageAlt: string (optional, default: "") - The alt text for the card's image.
// - outlineColor: string (optional, default: "#E879F9") - The color of the card's outline in its normal state.
// - hoverOutlineColor: string (optional, default: "#6366F1") - The outline color when the card is hovered.
// - textArray: string[] (required) - An array of strings to display as the card's main and mirrored text (vertical layout).
// - minWidth: number (required) - The minimum card width for dynamic text sizing.
// - maxWidth: number (required) - The maximum card width for dynamic text sizing.
// - minTextSize: number (required) - The minimum text size for dynamic resizing.
// - maxTextSize: number (required) - The maximum text size for dynamic resizing.
// - verticalPadding: string (optional, default: "20px") - The vertical padding for the card's content.
// - horizontalPadding: string (optional, default: "20px") - The horizontal padding for the card's content.
// - manualLetterSpacing: number (optional) - Manually set letter spacing (overrides automatic).
// - componentId: string (optional, default: "card-1") - Unique ID for the card (used for DOM queries).
// - onCardClicked: () => void (required) - Callback function invoked when the card is clicked.
// - revealCanvas: boolean (optional, default: false) - If true, shows a dynamic animated canvas background and sets card background to black.
// - textColorTransitionDelay: string (optional, default: "1s") - Delay before the text color transition starts.
// - textColorTransitionDuration: string (optional, default: "2s") - Duration of the text color transition.

// Note: The SecondPlayingCard component accepts the following props:
// - componentWidth: string (optional, default: "412px") - The maximum width of the card.
// - aspectRatio: string (optional, default: "3/4") - The aspect ratio of the card.
// - outerRounding: string (optional, default: "18px") - CSS border-radius for the card's outer border.
// - innerRounding: string (optional, default: "18px") - CSS border-radius for the card's inner container.
// - backgroundColor: string (optional, default: "#fff") - The background color of the card in its normal state.
// - imageHeightPercentage: number (optional, default: 70) - The height of the image container as a percentage of the card's height.
// - imageSrc: string (required) - The URL or path to the card's image.
// - imageAlt: string (optional, default: "") - The alt text for the card's image.
// - outlineColor: string (optional, default: "#ddd") - The color of the card's outline in its normal state.
// - hoverOutlineColor: string (optional, default: "#aaa") - The outline color when the card is hovered.
// - textArray: string[] (required) - An array of strings to display as the card's main and mirrored text (horizontal layout).
// - minWidth: number (required) - The minimum card width for dynamic text sizing.
// - maxWidth: number (required) - The maximum card width for dynamic text sizing.
// - minTextSize: number (required) - The minimum text size for dynamic resizing.
// - maxTextSize: number (required) - The maximum text size for dynamic resizing.
// - verticalPadding: string (optional, default: "20px") - The vertical padding for the card's content.
// - horizontalPadding: string (optional, default: "20px") - The horizontal padding for the card's content.
// - manualLetterSpacing: number (optional) - Manually set letter spacing (overrides automatic).
// - componentId: string (optional, default: "card-2") - Unique ID for the card (used for DOM queries).
// - onCardClicked: () => void (required) - Callback function invoked when the card is clicked.
`,
code: [
  {
    filename: 'lib/utils.ts',
    content: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
  },
  {
    filename: '@react-three-fiber.d.ts',
    content: `declare module '@react-three/fiber';
`
  },
  {
    filename: 'PlayingCard.tsx',
    content: `"use client";
    import React, { useRef, useEffect, useState } from "react";
    import Image from "next/image";
    import { CanvasRevealEffect } from "./CanvasReveal";
    
    // Concise hook for dynamic text layout
    function useDynamicTextLayout(
      containerRef: React.RefObject<HTMLDivElement>,
      textArray: string[],
      minWidth: number,
      maxWidth: number,
      minTextSize: number,
      maxTextSize: number,
      manualLetterSpacing: number | undefined,
      componentId: string
    ) {
      const [textSize, setTextSize] = useState(maxTextSize);
      const [letterSpacing, setLetterSpacing] = useState(manualLetterSpacing ?? 0);
    
      useEffect(() => {
        const updateTextSize = () => {
          if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            const calculatedTextSize =
              ((maxTextSize - minTextSize) / (maxWidth - minWidth)) *
                (width - minWidth) +
              minTextSize;
            const cappedTextSize = Math.min(calculatedTextSize, maxTextSize);
            setTextSize(cappedTextSize);
          }
        };
        const handleResize = () => {
          setTimeout(updateTextSize, 500);
        };
        const resizeObserver = new ResizeObserver(handleResize);
        if (containerRef.current) {
          resizeObserver.observe(containerRef.current);
        }
        updateTextSize();
        return () => {
          if (containerRef.current) {
            resizeObserver.unobserve(containerRef.current);
          }
        };
      }, [minWidth, maxWidth, minTextSize, maxTextSize, containerRef]);
    
      useEffect(() => {
        if (manualLetterSpacing !== undefined) {
          setLetterSpacing(manualLetterSpacing);
          return;
        }
        const textElement = containerRef.current?.querySelector(
          \`#\${componentId}-text\`
        );
        if (!textElement) return;
        const letterHeight = (textElement as HTMLElement).clientHeight / textArray.length;
        setLetterSpacing(letterHeight);
      }, [textArray, textSize, manualLetterSpacing, componentId, containerRef]);
    
      return { textSize, letterSpacing };
    }
    
    interface PlayingCardProps {
      componentWidth?: string;
      aspectRatio?: string;
      outerRounding?: string;
      innerRounding?: string;
      backgroundColor?: string;
      foregroundColor?: string;
      imageHeightPercentage?: number;
      imageSrc: string;
      imageAlt?: string;
      outlineColor?: string;
      hoverOutlineColor?: string;
      textArray: string[];
      minWidth: number;
      maxWidth: number;
      minTextSize: number;
      maxTextSize: number;
      verticalPadding?: string;
      horizontalPadding?: string;
      manualLetterSpacing?: number;
      componentId?: string;
      onCardClicked: () => void;
      revealCanvas?: boolean;
      textColorTransitionDelay?: string;
      textColorTransitionDuration?: string;
    }
    
    const PlayingCard: React.FC<PlayingCardProps> = ({
      componentWidth = "412px",
      aspectRatio = "9/16",
      outerRounding = "24px",
      innerRounding = "16px",
      backgroundColor = "#FFF",
      foregroundColor = "#000",
      imageHeightPercentage = 70,
      imageSrc,
      imageAlt = "",
      outlineColor = "#E879F9",
      hoverOutlineColor = "#6366F1",
      textArray,
      minWidth,
      maxWidth,
      minTextSize,
      maxTextSize,
      verticalPadding = "20px",
      horizontalPadding = "20px",
      manualLetterSpacing,
      componentId = "card-1",
      onCardClicked,
      revealCanvas = false,
      textColorTransitionDelay = "1s",
      textColorTransitionDuration = "2s",
    }) => {
      const containerRef = useRef<HTMLDivElement>(null);
      const [isHovered, setIsHovered] = useState(false);
    
      // Use the concise hook for text layout
      const { textSize, letterSpacing } = useDynamicTextLayout(
        containerRef,
        textArray,
        minWidth,
        maxWidth,
        minTextSize,
        maxTextSize,
        manualLetterSpacing,
        componentId
      );
    
      // Style for text color transition
      const textTransition = \`color \${textColorTransitionDuration} ease-in-out \${textColorTransitionDelay}\`;
    
      // Border color logic for revealCanvas
      const borderColor = revealCanvas ? "#2f2f2f" : outlineColor;
      const borderHoverColor = revealCanvas ? "#3a3a3a" : hoverOutlineColor;
      // Card background logic for revealCanvas
      const cardBg = revealCanvas ? "#000" : backgroundColor;
    
      return (
        <div
          ref={containerRef}
          style={{
            maxWidth: componentWidth,
            width: "100%",
          }}
          data-component-id={componentId}
          onClick={onCardClicked}
        >
          <div
            style={{
              borderRadius: outerRounding,
              padding: "1px",
              background: isHovered ? borderHoverColor : borderColor,
              display: "inline-block",
              width: "100%",
              aspectRatio: aspectRatio,
              transition: "background 2s ease-in-out 0.7s",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              style={{
                backgroundColor: cardBg,
                padding: \`\${verticalPadding} \${horizontalPadding}\`,
                borderRadius: innerRounding,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                color: foregroundColor,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {revealCanvas && (
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="absolute inset-0"
                  colors={[
                    [236, 72, 153],
                    [232, 121, 249],
                  ]}
                  dotSize={4}
                  replaceBackground
                />
              )}
              {revealCanvas && (
                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
              )}
              {/* Main Text */}
              <div
                id={\`\${componentId}-text\`}
                style={{
                  position: "absolute",
                  top: verticalPadding,
                  left: horizontalPadding,
                  display: "flex",
                  flexDirection: "column",
                  zIndex: 2,
                  color: isHovered ? "#f12b30" : "#3662f4",
                  fontWeight: "bold",
                  fontSize: \`\${textSize}px\`,
                  transition: textTransition,
                }}
              >
                {textArray.map((letter, index) => (
                  <div
                    key={\`\${componentId}-letter-\${index}\`}
                    style={{
                      transform:
                        letterSpacing < 0 && index > 0
                          ? \`translateY(\${letterSpacing * index}px)\`
                          : "none",
                      marginBottom: letterSpacing >= 0 ? \`\${Math.abs(letterSpacing)}px\` : "0",
                      letterSpacing: \`\${letterSpacing}px\`,
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              {/* Mirrored Text */}
              <div
                id={\`\${componentId}-mirror\`}
                style={{
                  position: "absolute",
                  bottom: verticalPadding,
                  right: horizontalPadding,
                  display: "flex",
                  flexDirection: "column",
                  transform: "scale(-1)",
                  zIndex: 2,
                  color: isHovered ? "#f12b30" : "#3662f4",
                  fontWeight: "bold",
                  fontSize: \`\${textSize}px\`,
                  transition: textTransition,
                }}
              >
                {textArray.map((letter, index) => (
                  <div
                    key={\`\${componentId}-mirror-letter-\${index}\`}
                    style={{
                      transform:
                        letterSpacing < 0 && index > 0
                          ? \`translateY(\${letterSpacing * index}px)\`
                          : "none",
                      marginBottom: letterSpacing >= 0 ? \`\${Math.abs(letterSpacing)}px\` : "0",
                      letterSpacing: \`\${letterSpacing}px\`,
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: \`\${imageHeightPercentage}%\`,
                    width: "auto",
                    aspectRatio: "1/1",
                  }}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    priority
                    sizes={\`\${componentWidth} \${aspectRatio.replace("/", " ")}\`}
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default PlayingCard;
`
  },
  {
    filename: 'SecondPlayingCard.tsx',
    content: `"use client";
    import React, { useRef, useEffect, useState } from "react";
    import Image from "next/image";
    
    interface SecondPlayingCardProps {
      componentWidth?: string;
      aspectRatio?: string;
      outerRounding?: string;
      innerRounding?: string;
      backgroundColor?: string;
      imageHeightPercentage?: number;
      imageSrc: string;
      imageAlt?: string;
      outlineColor?: string;
      hoverOutlineColor?: string;
      textArray: string[];
      minWidth: number;
      maxWidth: number;
      minTextSize: number;
      maxTextSize: number;
      verticalPadding?: string;
      horizontalPadding?: string;
      manualLetterSpacing?: number;
      componentId?: string;
      onCardClicked: () => void;
    }
    
    const SecondPlayingCard: React.FC<SecondPlayingCardProps> = ({
      componentWidth = "412px",
      aspectRatio = "3/4",
      outerRounding = "18px",
      innerRounding = "18px",
      backgroundColor = "#fff",
      imageHeightPercentage = 70,
      imageSrc,
      imageAlt = "",
      outlineColor = "#ddd",
      hoverOutlineColor = "#aaa",
      textArray,
      minWidth,
      maxWidth,
      minTextSize,
      maxTextSize,
      verticalPadding = "20px",
      horizontalPadding = "20px",
      manualLetterSpacing,
      componentId = "card-2",
      onCardClicked,
    }) => {
      const containerRef = useRef<HTMLDivElement>(null);
      const [textSize, setTextSize] = useState(maxTextSize);
      const [letterSpacing, setLetterSpacing] = useState(manualLetterSpacing ?? 0);
      const [isHovered, setIsHovered] = useState(false);
    
      useEffect(() => {
        const updateTextSize = () => {
          if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            const calculatedTextSize =
              ((maxTextSize - minTextSize) / (maxWidth - minWidth)) *
                (width - minWidth) +
              minTextSize;
            const cappedTextSize = Math.min(calculatedTextSize, maxTextSize);
            setTextSize(cappedTextSize);
          }
        };
        const handleResize = () => {
          setTimeout(updateTextSize, 500);
        };
        const resizeObserver = new ResizeObserver(handleResize);
        if (containerRef.current) {
          resizeObserver.observe(containerRef.current);
        }
        updateTextSize();
        return () => {
          if (containerRef.current) {
            resizeObserver.unobserve(containerRef.current);
          }
        };
      }, [minWidth, maxWidth, minTextSize, maxTextSize]);
    
      useEffect(() => {
        if (manualLetterSpacing !== undefined) {
          setLetterSpacing(manualLetterSpacing);
          return;
        }
        const textElement = containerRef.current?.querySelector(
          \`#\${componentId}-text\`
        );
        if (!textElement) return;
        const letterWidth = (textElement as HTMLElement).clientWidth / textArray.length;
        setLetterSpacing(letterWidth);
      }, [textArray, textSize, manualLetterSpacing, componentId]);
    
      // Color logic
      const cardBg = isHovered ? "#111014" : backgroundColor;
      const textColor = isHovered ? "#fff" : "#161616";
      const borderColor = isHovered ? hoverOutlineColor : outlineColor;
    
      return (
        <div
          ref={containerRef}
          style={{
            maxWidth: componentWidth,
            width: "100%",
          }}
          data-component-id={componentId}
          onClick={onCardClicked}
        >
          <div
            style={{
              borderRadius: outerRounding,
              padding: "1px",
              background: borderColor,
              display: "inline-block",
              width: "100%",
              aspectRatio: aspectRatio,
              transition: "background 0.3s ease-in-out",
              cursor: "pointer",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              style={{
                backgroundColor: cardBg,
                padding: \`\${verticalPadding} \${horizontalPadding}\`,
                borderRadius: innerRounding,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              {/* Main Text - Top Left */}
              <div
                id={\`\${componentId}-text\`}
                style={{
                  position: "absolute",
                  top: verticalPadding,
                  left: horizontalPadding,
                  display: "flex",
                  justifyContent: "flex-start",
                  zIndex: 2,
                  color: textColor,
                  fontWeight: "bold",
                  fontSize: \`\${textSize}px\`,
                  flexDirection: "row",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                {textArray.map((letter, index) => (
                  <div
                    key={\`\${componentId}-letter-\${index}\`}
                    style={{
                      transform:
                        letterSpacing < 0 && index > 0
                          ? \`translateX(\${letterSpacing * index}px)\`
                          : "none",
                      marginLeft: letterSpacing >= 0 ? \`\${Math.abs(letterSpacing)}px\` : "0",
                      letterSpacing: \`\${letterSpacing}px\`,
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              {/* Mirrored Text - Bottom Right */}
              <div
                id={\`\${componentId}-mirror\`}
                style={{
                  position: "absolute",
                  bottom: verticalPadding,
                  right: horizontalPadding,
                  display: "flex",
                  justifyContent: "flex-start",
                  zIndex: 2,
                  color: textColor,
                  fontWeight: "bold",
                  fontSize: \`\${textSize}px\`,
                  flexDirection: "row",
                  transform: "scale(-1)",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                {textArray.map((letter, index) => (
                  <div
                    key={\`\${componentId}-mirror-letter-\${index}\`}
                    style={{
                      transform:
                        letterSpacing < 0 && index > 0
                          ? \`translateX(\${letterSpacing * index}px)\`
                          : "none",
                      marginLeft: letterSpacing >= 0 ? \`\${Math.abs(letterSpacing)}px\` : "0",
                      letterSpacing: \`\${letterSpacing}px\`,
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: \`\${imageHeightPercentage}%\`,
                    width: "auto",
                    aspectRatio: "1/1",
                  }}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    priority
                    sizes={\`\${componentWidth} \${aspectRatio.replace("/", " ")}\`}
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default SecondPlayingCard;
`
  },
],
  dependencies: 'npm i motion clsx tailwind-merge\nnpm install @react-three/fiber three --legacy-peer-deps\nnpm install --save-dev @types/three --legacy-peer-deps',
  credit: (
    <span>
      <a href="https://ui.aceternity.com/components/canvas-reveal-effect" target="_blank" rel="noopener noreferrer" className="link">Canvas Reveal Effect</a> by <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
    </span>
  ),
}

export { metadata }