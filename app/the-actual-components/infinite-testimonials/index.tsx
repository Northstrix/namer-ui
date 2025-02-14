'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "InfiniteTestimonials.tsx" file
import InfiniteTestimonials from '@/app/the-actual-components/infinite-testimonials/InfiniteTestimonials'

<InfiniteTestimonials
  direction="left"
  cycleDuration="120s"
  pauseOnHover={true}
  items={[
    {
      quote: "I was so hesitant about buying a laptop that wasn't brand new, but Shakhor proved me wrong! The quality is outstanding, and I got it for a steal.",
      name: "Alice Anderson",
      title: "First-Time Refurb Buyer"
    },
    {
      quote: "I needed a reliable phone without breaking the bank, and Shakhor was the answer. The quality is fantastic, and the savings were huge!",
      name: "Ben Baker",
      title: "Budget Shopper"
    },
    {
      quote: "I keep coming back to Shakhor because the prices are unbeatable, and the products are always top-notch. Why pay more for new?",
      name: "Charlotte Carter",
      title: "Repeat Customer"
    },
    {
      quote: "Shakhor made it so easy to upgrade my tablet without emptying my wallet. The quality is excellent, and I'm thrilled with my purchase.",
      name: "David Davis",
      title: "Tech Upgrade Enthusiast"
    },
    {
      quote: "I got a smartwatch that looks and functions like new, all thanks to Shakhor's amazing prices and quality. Highly recommend!",
      name: "Ethan Evans",
      title: "Smart Shopper"
    },
    {
      quote: "I was blown away by the quality of the phone I purchased—it felt brand new! Plus, the price was incredible. Thanks, Shakhor!",
      name: "Fiona Foster",
      title: "Satisfied Customer"
    },
    {
      quote: "The Sony headphones I bought from Shakhor sound amazing and were priced lower than anywhere else. Incredible value!",
      name: "George Garcia",
      title: "Music Lover"
    },
    {
      quote: "Finding an affordable tablet with great battery life was a breeze on Shakhor's website. I couldn't be happier with my purchase.",
      name: "Hannah Hill",
      title: "Informed Buyer"
    },
    {
      quote: "Shakhor is my go-to place for electronics. The service is great, and the prices are unbeatable for the quality you get.",
      name: "Isaac Ingram",
      title: "Electronics Enthusiast"
    },
    {
      quote: "I was hesitant about buying a refurbished product, but the smartwatch I got from Shakhor changed my mind. It's been perfect for my runs, and I saved so much money!",
      name: "Jessica Johnson",
      title: "Fitness Fanatic"
    },
    {
      quote: "I was looking for a high-quality refurbished phone, and Shakhor delivered exactly what I needed. The device looks and functions like new, and the price was unbeatable. I couldn't be happier with my purchase!",
      name: "Kevin King",
      title: "Satisfied Buyer"
    },
    {
      quote: "There's no need to overpay for new electronics when Shakhor offers such great quality at such affordable prices. Highly recommend!",
      name: "Laura Lewis",
      title: "Smart Shopper"
    },
    {
      quote: "Shakhor helped me save money without sacrificing quality. I got an amazing laptop at a fraction of the cost of a new one!",
      name: "Michael Moore",
      title: "Budget-Friendly Buyer"
    },
    {
      quote: "Shakhor consistently offers great deals, so I often get smartwatches from there as gifts for my family members",
      name: "Nina Nelson",
      title: "Caring Family Member"
    },
    {
      quote: "The tablet I got from Shakhor is the great balance between budget and great experience when learning and studying!",
      name: "Oliver Owens",
      title: "Student Shopper"
    }
  ]}
/>

// Note: The InfiniteTestimonials component accepts the following props:
// - items: { quote: string; name: string; title: string }[] (required) - An array of testimonial items to be displayed.
// - direction: "left" | "right" (optional) - The direction of the scroll animation (default: 'left').
// - cycleDuration: string (optional) - The duration of one rotation cycle (default: '80s').
// - pauseOnHover: boolean (optional) - Whether to pause the animation when hovering over the testimonials (default: true).
// - className: string (optional) - Additional CSS classes to be applied to the container.
// - spotlightColor: string (optional) - The color of the spotlight effect (default: '#ffffff30').
// - borderColor: string (optional) - The color of the border around each testimonial card (default: '#262626').
// - backgroundColor: string (optional) - The background color or gradient for each testimonial card (default: '#171717').
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
    filename: 'InfiniteTestimonials.tsx',
    content: `"use client";

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
          background: \`radial-gradient(circle at \${position.x}px \${position.y}px, \${spotlightColor}, transparent 80%)\`,
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
          animation: \`scroll \${cycleDuration} linear infinite\`,
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
            key={\`\${item.name}-\${idx}\`}
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
                    key={\`meteor-\${idx}-\${meteorIdx}\`}
                    className="absolute h-0.5 w-0.5 rounded-full rotate-[215deg] animate-meteor"
                    style={{
                      top: \`\${Math.random() * 100}%\`,
                      left: \`\${Math.random() * 100}%\`,
                      animationDelay: \`\${Math.random() * 2}s\`,
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
      <style jsx>{\`
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
      \`}</style>
    </div>
  );
};

export default InfiniteTestimonials;
`
  },
],
  dependencies: 'npm i motion clsx tailwind-merge',
  credit: (
    <span>
      <a href="https://ui.aceternity.com/components/infinite-moving-cards" target="_blank" rel="noopener noreferrer" className="link">Infinite Moving Cards</a> by <a href="https://ui.aceternity.com" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
      <br />
      <a href="https://hextaui.com/docs/animation/spotlight-card" target="_blank" rel="noopener noreferrer" className="link">Spotlight Card</a> by <a href="https://hextaui.com" target="_blank" rel="noopener noreferrer" className="link">HextaUI</a>
      <br />
      <a href="https://ui.aceternity.com/components/meteors" target="_blank" rel="noopener noreferrer" className="link">Meteor Effect</a> by <a href="https://ui.aceternity.com" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
    </span>
  ),
}

export { metadata }