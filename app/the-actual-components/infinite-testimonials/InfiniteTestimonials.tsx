"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
  backgroundColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "#ffffff30",
  borderColor = "#262626",
  backgroundColor = "#171717",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(0.6);
  const handleMouseLeave = () => setOpacity(0);

  const backgroundStyle = backgroundColor.includes('gradient') 
    ? { backgroundImage: backgroundColor }
    : { backgroundColor };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-3xl border overflow-hidden p-8",
        className
      )}
      style={{
        ...backgroundStyle,
        borderColor,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

interface InfiniteTestimonialsProps {
  items: { quote: string; name: string; title: string }[];
  direction?: "left" | "right";
  cycleDuration?: string;
  pauseOnHover?: boolean;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
  backgroundColor?: string;
}

export const InfiniteTestimonials: React.FC<InfiniteTestimonialsProps> = ({
  items,
  direction = "left",
  cycleDuration = "80s",
  pauseOnHover = true,
  className,
  spotlightColor = "#ffffff30",
  borderColor = "#262626",
  backgroundColor = "#171717",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      setStart(true);
    }
  }

  const getDirection = () => {
    return direction === "left" ? "normal" : "reverse";
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-full overflow-hidden",
        className
      )}
      style={{
        maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll"
        )}
        style={{
          animation: `scroll ${cycleDuration} linear infinite`,
          animationDirection: getDirection(),
          animationPlayState: pauseOnHover ? "running" : "paused",
        }}
        onMouseEnter={() => {
          if (pauseOnHover && scrollerRef.current) {
            scrollerRef.current.style.animationPlayState = "paused";
          }
        }}
        onMouseLeave={() => {
          if (pauseOnHover && scrollerRef.current) {
            scrollerRef.current.style.animationPlayState = "running";
          }
        }}
      >
        {items.map((item, idx) => (
          <SpotlightCard
            key={`${item.name}-${idx}`}
            className="w-[350px] max-w-full relative rounded-2xl border flex-shrink-0 px-8 py-6 md:w-[450px] group overflow-hidden"
            spotlightColor={spotlightColor}
            borderColor={borderColor}
            backgroundColor={backgroundColor}
          >
            {/* Meteor Effect */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100">
              {Array.from({ length: 10 }).map((_, meteorIdx) => {
                const randomColor = Math.random() > 0.5 ? "#ffffff" : "#00A7E1";
                return (
                  <span
                    key={`meteor-${idx}-${meteorIdx}`}
                    className="absolute h-0.5 w-0.5 rounded-full rotate-[215deg] animate-meteor"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      backgroundColor: randomColor,
                    }}
                  ></span>
                );
              })}
            </div>
            {/* Card Content */}
            <blockquote className="relative z-20">
              <span className="text-[1.14rem] leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-[1.14rem] leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className="text-[1.14rem] leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </SpotlightCard>
        ))}
      </ul>
      <style jsx>{`
        @keyframes scroll {
          to { transform: translateX(-50%); }
        }
        @keyframes meteor {
          0% { transform: translate(0, 0) rotate(215deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate(calc(100% + 200px), calc(100% + 200px)) rotate(215deg); opacity: 0; }
        }
        .animate-meteor {
          animation: meteor 5s linear infinite;
        }
        .animate-meteor::before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 1px;
          background-image: linear-gradient(90deg, currentColor, transparent);
        }
      `}</style>
    </div>
  );
};

export default InfiniteTestimonials;
