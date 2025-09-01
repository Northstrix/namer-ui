"use client";

import { useState, useEffect } from "react";
import TextSwap from "@/app/the-actual-components/text-swap/TextSwap";

export default function TextSwapPreview() {
  const [isClient, setIsClient] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Force re-render when component reenters viewport
  useEffect(() => {
    if (!isClient) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRenderKey((k) => k + 1);
          }
        });
      },
      { root: null, threshold: 0.1 }
    );

    const el = document.getElementById("textswap-demo-wrapper");
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    // Full-width, full-height wrapper
    <div className="flex items-center justify-center w-full h-screen bg-[#fff]">
      <div
        id="textswap-demo-wrapper"
        key={renderKey}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
        }}
      >
        {/* First (original, English) item */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "3rem",
              lineHeight: 1.1,
            }}
          >
            <TextSwap
              texts={[
                "Next.js",
                "Tailwind",
                "Framer Motion",
                "GSAP",
                "Namer UI",
              ]}
              mainClassName="px-3 py-2 bg-[#00a0d8] overflow-hidden py-1 md:py-2 justify-center rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              style={{
                boxShadow: "none",
                background: "#00a0d8",
                color: "#fff",
                fontWeight: 700,
                fontSize: "2.4rem",
                minHeight: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </div>
        </div>

        {/* Second (purple, Hebrew RTL) item */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            direction: "rtl",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "3rem",
              lineHeight: 1.1,
            }}
          >
            <TextSwap
              texts={["מדבר", "בלוברי לום", "פיתוח אתרים", "נמר"]}
              mainClassName="px-3 py-2 bg-[#7c3aed] overflow-hidden py-1 md:py-2 justify-center rounded-[32px]"
              staggerFrom="first"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "120%" }}
              staggerDuration={0.05}
              splitLevelClassName="translate-y-[-2.5px] font-['Segoe UI', 'Arial Hebrew', 'Tahoma', 'Helvetica Neue', sans-serif] overflow-hidden inline-flex items-center justify-center"
              transition={{
                type: "spring",
                damping: 18,
                stiffness: 180,
                mass: 0.8,
              }}
              rotationInterval={1800}
              style={{
                boxShadow: "none",
                background: "#7c3aed",
                color: "#111014",
                fontWeight: 700,
                fontSize: "2.4rem",
                minHeight: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "32px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
