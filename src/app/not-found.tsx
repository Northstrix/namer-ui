"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);
  const [cardTop, setCardTop] = useState<number | null>(null);

  // Delay rendering for background effect
  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 0);
    return () => clearTimeout(t);
  }, []);

  // Function to recalc card position
  const recalcPosition = () => {
    if (typeof window === "undefined" || !cardRef.current) return;
    const viewportHeight = window.innerHeight;
    const cardHeight = cardRef.current.offsetHeight;
    const top = Math.max((viewportHeight - cardHeight) / 2, 20);
    setCardTop(top);
  };

  // Position recalc
  useEffect(() => {
    if (!showContent) return;
    recalcPosition();
    const timeout = setTimeout(() => recalcPosition(), 1000);
    window.addEventListener("resize", recalcPosition);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", recalcPosition);
    };
  }, [showContent]);

  // GSAP animations
  useEffect(() => {
    if (!showContent || !containerRef.current) return;
    const particles = containerRef.current.querySelectorAll<HTMLSpanElement>(".particle");
    const anims = ["float", "floatReverse", "float2", "floatReverse2"];
    particles.forEach((particle, i) => {
      const size = Math.floor(Math.random() * 20) + 10; // 10–30px
      particle.style.fontSize = `${size}px`;
      particle.style.filter = `blur(${(i + 1) * 0.02}px)`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      const anim = anims[Math.floor(Math.random() * anims.length)];
      const duration = Math.random() * 8 + 8; // 8–16s
      const delay = Math.random();
      let yTo = 0;
      if (anim === "float") yTo = 180;
      if (anim === "floatReverse") yTo = -180;
      if (anim === "float2") yTo = 28;
      if (anim === "floatReverse2") yTo = -28;
      gsap.fromTo(
        particle,
        { y: 0 },
        {
          y: yTo,
          duration,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay,
        }
      );
    });

    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }
  }, [showContent]);

  // Floating 404 numbers
  const particles: string[] = [];
  for (let i = 0; i < 60; i++) particles.push("4");
  for (let i = 0; i < 60; i++) particles.push("0");

  // Anchor click handler
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Respect middle-click, new tab, ctrl/cmd-click, right-click
    if (
      e.defaultPrevented ||
      e.button !== 0 || // only left click
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
      return;
    }
    e.preventDefault();
    router.push("/");
  };

  return (
    <Suspense fallback={null}>
      <main className="container" ref={containerRef}>
        {showContent && (
          <>
            {/* Floating numbers */}
            {particles.map((char, i) => (
              <span key={i} className="particle">
                {char}
              </span>
            ))}

            {/* Centered content */}
            <article
              className="content"
              ref={cardRef}
              style={{ top: cardTop !== null ? `${cardTop}px` : "50%" }}
            >
              <h1 className="title">404</h1>
              <p className="subtitle">Page Not Found</p>
              <a
                className="back-link"
                href="/"
                onClick={handleAnchorClick}
              >
                Return Home
              </a>
            </article>
          </>
        )}

        {/* Styles remain the same */}
        <style jsx>{`
          :root {
            --color: #8c8c8c;
            --bg-dark: #0a0a0a;
            --bg-card: rgba(10, 10, 10, 0.85);
            --outline-color: #262626;
          }
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            background: var(--bg-dark);
          }
          .container {
            position: relative;
            width: 100vw;
            height: 100vh;
            background: var(--bg-dark);
            color: var(--color);
            font-family: Arial, sans-serif;
            overflow: hidden;
          }
          /* Card */
          .content {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            background: var(--bg-card);
            text-align: center;
            border: 1px solid #262626;
            border-radius: 8px;
            padding: 36px 24px;
            z-index: 10;
            backdrop-filter: blur(6px);
            width: clamp(240px, 60vw, 512px);
            max-width: 90vw;
            max-height: 90vh;
            overflow: hidden;
          }
          .title {
            font-weight: bold;
            margin: 0 0 0.5rem;
            color: var(--color);
            font-size: clamp(
              1.857rem,
              calc(1.857rem + (4.4 - 1.857) * ((100vw - 100px) / (1000 - 100))),
              4.4rem
            );
          }
          .subtitle {
            margin: 0 0 1.5rem;
            color: var(--color);
            font-size: clamp(
              0.826rem,
              calc(0.826rem + (1.605 - 0.826) * ((100vw - 100px) / (1000 - 100))),
              1.605rem
            );
          }
          .back-link {
            display: inline-block;
            border-radius: 4px;
            color: #aaa;
            cursor: pointer;
            user-select: none;
            transition: color 0.25s ease;
            font-size: clamp(
              1rem,
              calc(1rem + (1.25 - 1rem) * ((100vw - 100px) / (1000 - 100))),
              1.25rem
            );
            text-decoration: underline;
          }
          .back-link:hover {
            color: var(--color);
          }
          /* Floating numbers */
          .particle {
            position: absolute;
            display: block;
            pointer-events: none;
            color: var(--color);
            user-select: none;
            z-index: 1;
          }
        `}</style>
      </main>
    </Suspense>
  );
}
