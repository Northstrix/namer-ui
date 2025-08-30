"use client";

import {
  Suspense,
  useState,
  useEffect,
  useRef,
  type CSSProperties,
} from "react";
import TruncatingNavbar from "@/components/CustomizedTruncatingNavbar";
import LimitedWidthWrapper from "@/components/landing-page/limited-width-wrapper";
import { useTranslation, useApp } from "@/context/app-context";
import clsx from "clsx";
import useIsRTL from "@/hooks/useIsRTL";
import TwoColumnLayout from "@/components/landing-page/hero-section/two-column-layout";
import SingleColumnLayout from "@/components/landing-page/hero-section/single-column-layout";
import UnblurringWrapper from "@/components/landing-page/hero-section/unblurringWrapper";
import { motion, AnimatePresence } from "framer-motion";
import CapabilitiesShowcaseSection from "@/components/landing-page/capabilities-showcase-section/CapabilitiesShowcaseSection";
import Footer from "@/components/landing-page/footer/Footer"

export default function LandingPage() {
  const t = useTranslation();
  const { lang } = useApp();
  const isRTL = useIsRTL();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>(
    {
      width: 0,
      height: 0,
    }
  );

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Disable native scrolling on body and html to prevent double scrollbars
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const getLinkWithLang = (href: string) =>
    lang === "en" ? href : `${href}?lang=${lang}`;

  const shouldShowTwoColumn = windowSize.width >= 1280 && windowSize.height >= 800;

  // ✅ Fixed styles with proper typing
  const scrollContainerStyle: CSSProperties = {
    height: "100vh",
    width: "100vw",
    overflowY: "auto",
    overflowX: "hidden",
    direction: isRTL ? "rtl" : "ltr",
    display: "flex",
    flexDirection: "column",
    scrollbarGutter: "stable",
  };

  const innerContentStyle: CSSProperties = {
    direction: isRTL ? "rtl" : "ltr",
    flexGrow: 1,
    width: "100%",
  };

  return (
    <Suspense fallback={null}>
      <UnblurringWrapper delay={1.5} duration={0.5}>
        <div style={scrollContainerStyle} ref={scrollContainerRef}>
          {/* Sticky Header */}
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 20,
              width: "100%",
            }}
          >
            <LimitedWidthWrapper expandToFull={isSearchOpen}>
              <TruncatingNavbar
                icon="/logo.png"
                appName={t("namer_ui")}
                routes={[
                  { name: t("components"), link: getLinkWithLang("/components") },
                  {
                    name: t("vue-components"),
                    link: "https://namer-ui-for-vue.netlify.app/",
                    external: true,
                  },
                ]}
                homeRoute={getLinkWithLang("/")}
                scrolledBg="hsl(var(--background))"
                mobileBg="hsl(var(--background))"
                outlineColor="hsl(var(--border))"
                navbarHoverOutline="var(--hovered-border)"
                placeholderText={t("search_placeholder_text")}
                shortcutKey="K"
                onSearchStateChange={setIsSearchOpen}
                scrollContainerRef={scrollContainerRef} // Pass scroll container ref
                buttonBg="hsl(var(--background))"
                buttonOutline="hsl(var(--border))"
                buttonHoverBg="hsl(var(--accent))"
                keyAreaBg="hsl(var(--background))"
                keyAreaOutline="hsl(var(--border))"
                keyAreaHoverOutline="var(--hovered-border)"
                keyAreaHoverBg="hsl(var(--background))"
                buttonIconGap={28}
                buttonHoverOutline="hsl(var(--accent))"
              />
            </LimitedWidthWrapper>
          </div>

          {/* Inner Content */}
          <div style={innerContentStyle} className={clsx(isRTL && "rtl-content")}>
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  key="blur-overlay"
                  initial={{ backdropFilter: "blur(0px)", opacity: 0 }}
                  animate={{ backdropFilter: "blur(6px)", opacity: 1 }}
                  exit={{ backdropFilter: "blur(0px)", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="fixed inset-0 z-10 bg-black/40"
                />
              )}
            </AnimatePresence>

            {shouldShowTwoColumn ? (
              <TwoColumnLayout scrollContainerRef={scrollContainerRef} />
            ) : (
              <LimitedWidthWrapper>
                <SingleColumnLayout />
              </LimitedWidthWrapper>
            )}

            <CapabilitiesShowcaseSection/>
            <Footer/>
          </div>
        </div>
      </UnblurringWrapper>
    </Suspense>
  );
}
