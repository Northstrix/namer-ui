"use client";
import { useState, useEffect, ReactNode } from "react";

export default function LimitedWidthWrapper({
  children,
  expandToFull = false,
}: {
  children: ReactNode;
  expandToFull?: boolean;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="mx-auto w-full"
      style={{
        maxWidth: expandToFull ? "100%" : "1536px",
        paddingLeft: isMobile ? "10px" : "24px",
        paddingRight: isMobile ? "10px" : "24px",
        transition: "max-width 0.5s ease-in-out",
      }}
    >
      {children}
    </div>
  );
}
