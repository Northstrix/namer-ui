"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface HeroCardConfig {
  id: string | number;
  element: React.ReactNode;
  width: number | string;
  height: number | string;
  style: React.CSSProperties;
  zIndex?: number;
  borderRadius?: string | number;
  animationDuration?: string;
  outline?: boolean;
  outlineColor?: string;
}

interface HeroCollageProps extends React.HTMLAttributes<HTMLDivElement> {
  cards: HeroCardConfig[];
  outlineDisabled?: boolean; // Default true means outline off globally unless per-card override
  isRTL?: boolean; // RTL flag for translation direction
  defaultOutlineColor?: string; // Global default outline color
}

const animationStyle = `
@keyframes float-up {
  0%   { transform: translateY(0px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
  50%  { transform: translateY(-15px); box-shadow: 0 35px 60px -15px rgba(0,0,0,0.3); }
  100% { transform: translateY(0px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
}
`;

const HeroCollage = React.forwardRef<HTMLDivElement, HeroCollageProps>(
  (
    {
      className,
      cards,
      outlineDisabled = true,
      isRTL = false,
      defaultOutlineColor = "var(--hovered-border)",
      ...props
    },
    ref
  ) => {
    // Determine translateX based on isRTL
    const translateXValue = isRTL ? 10 : -10;

    return (
      <>
        <style>{animationStyle}</style>
        <section
          ref={ref}
          className={cn("relative w-full font-sans overflow-visible", className)}
          {...props}
        >
          <div className="relative flex items-center justify-center min-h-[500px] w-full">
            <div className="relative w-full max-w-6xl min-h-[600px]">
              {cards.map((card, idx) => {
                // Card's outline active if global outlineDisabled is false and card.outline is true
                const cardOutlineActive = !outlineDisabled && !!card.outline;

                return (
                  <div
                    key={card.id || idx}
                    style={{
                      position: "absolute",
                      zIndex: card.zIndex || 1,
                      ...card.style,
                      // Translate only outlined cards
                      transform: cardOutlineActive
                        ? `translateX(${translateXValue}px)`
                        : undefined,
                    }}
                  >
                    <div
                      className="shadow-2xl overflow-hidden bg-[#111]"
                      style={{
                        width: card.width,
                        height: card.height,
                        borderRadius: card.borderRadius || "8px",
                        animation: `float-up ${card.animationDuration || "6s"} ease-in-out infinite`,
                        willChange: "transform",
                        // Outline color priority: card outlineColor > global defaultOutlineColor
                        outline: cardOutlineActive
                          ? `10px solid ${card.outlineColor || defaultOutlineColor}`
                          : undefined,
                      }}
                    >
                      {card.element}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
);

HeroCollage.displayName = "HeroCollage";
export { HeroCollage };
