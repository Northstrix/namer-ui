"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Fade in after 1.6s
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1600);

    // Hide on first scroll
    const onScroll = () => {
      setHidden(true);
      window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`mouse ${
          visible && !hidden
            ? "fade-in"
            : hidden
            ? "fade-out"
            : ""
        }`}
      />
      <style jsx>{`
        .mouse {
          width: 18px;
          height: 30px;
          border: 2px solid var(--scroll-element-foreground);
          border-radius: 12px;
          position: relative;
          display: inline-block;
          opacity: 0;
        }
        .mouse::before {
          content: '';
          width: 3px;
          height: 6px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--scroll-element-foreground);
          border-radius: 50%;
          opacity: 1;
          animation: wheel 2s infinite;
        }
        .fade-in {
          animation: fadeIn 4s ease-in-out forwards;
          animation-delay: 0s; /* triggered by React state after 1.6s */
        }
        .fade-out {
          animation: fadeOut 1s ease-in-out forwards;
        }
        @keyframes wheel {
          to {
            opacity: 0;
            top: 18px;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>
    </>
  );
}
