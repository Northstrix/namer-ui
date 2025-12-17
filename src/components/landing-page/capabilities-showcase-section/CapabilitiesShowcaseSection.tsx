"use client";
import React, { useEffect, useState, useMemo } from "react";
import { ArrowDown, ArrowRight, ArrowLeft } from "lucide-react";
import clsx from "clsx";
import { useToast } from "@/hooks/use-toast";
import { useTranslation, useApp } from "@/context/app-context";
import SliderHeroSection from "@/app/the-actual-components/slider-hero-section/SliderHeroSection";
import LimitedWidthWrapper from "../limited-width-wrapper";
import ToastDefault from "./ToastDefault";
import ToastCustom from "./ToastCustom";
import useIsRTL from "@/hooks/useIsRTL";
import Disclaimer from "./Disclaimer";
import PositionAwareButton from "./PositionAwareButton";
import { componentsMetadata } from "@/lib/component-meta";

// ===== Constants =====
const TITLE_MULTIPLIER_FIRST = 0.76;
const ITEM_MULTIPLIER_FIRST = 0.72;
const SPACING_MULTIPLIER_FIRST = 0.65;
const BASE_ARROW_SIZE = 60;
const TOAST_ARROW_RATIO = 0.5;

// Linear interpolation helper
const lerp = (x: number, x1: number, x2: number, y1: number, y2: number): number => {
  if (x <= x1) return y1;
  if (x >= x2) return y2;
  return y1 + ((y2 - y1) * (x - x1)) / (x2 - x1);
};

function getNonWideMultiplier(width: number): number {
  if (width <= 400) return 1.0;
  if (width <= 424) return 1.1;
  if (width <= 464) return 1.16;
  if (width <= 520) return 1.2;
  if (width <= 596) return 1.36;
  if (width <= 720) return 1.52;
  if (width <= 900) return 1.64;
  return 1.76;
}

export default function CapabilitiesShowcaseSection() {
  const [wideTall, setWideTall] = useState(false);
  const [isShortHeight, setIsShortHeight] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [arrowSize, setArrowSize] = useState(BASE_ARROW_SIZE);
  const [visibleToasts, setVisibleToasts] = useState(3);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [windowHeight, setWindowHeight] = useState(900);

  const { toast } = useToast();
  const t = useTranslation();
  const isRTL = useIsRTL();
  const { lang } = useApp();

  const desktopTitleAlign = useMemo(() => (isRTL ? "right" : "left"), [isRTL]);
  const mobileTitleAlign = "center";

  const recalc = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    setWindowWidth(w);
    setWindowHeight(h);
    setWideTall(w >= 1280 && h >= 800);
    setIsShortHeight(h < 912);
    setIsSmallScreen(w < 932);
    setScaleFactor(lerp(w, 320, 1536, 1, 2));
    setArrowSize(lerp(w, 1280, 1536, BASE_ARROW_SIZE * 0.8, BASE_ARROW_SIZE * 1.1));
    if (w < 932) {
      setVisibleToasts(3);
    } else {
      setVisibleToasts(w < 1396 ? 2 : 3);
    }
  };

  useEffect(() => {
    recalc();
    setTimeout(recalc, 1000);
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  let langMultiplier = lang === "es" ? 0.9 : 1;
  let layoutMultiplier = wideTall ? 1 : getNonWideMultiplier(windowWidth);
  const effectiveScale = scaleFactor * langMultiplier * layoutMultiplier;

  let yShift: number | undefined = undefined;
  if (wideTall && !isShortHeight) {
    yShift = lerp(windowHeight, 944, 1080, -56, 8);
  }

  let toastMargin: number | undefined = undefined;
  if (wideTall && !isShortHeight) {
    toastMargin = lerp(windowHeight, 1000, 1080, 64, 112);
  }

  // Fonts for sliders
  const secondFonts = {
    desktopFontSize: 19 * effectiveScale,
    mobileFontSize: 19 * effectiveScale,
    desktopShowcaseFontSize: 13.6 * effectiveScale,
    mobileShowcaseFontSize: 13.6 * effectiveScale,
    desktopPadding: { top: 5 * effectiveScale, bottom: 13 * effectiveScale, leftRight: 11 * effectiveScale },
    mobilePadding: { top: 8 * effectiveScale, bottom: 8 * effectiveScale, leftRight: 2 * effectiveScale },
  };

  const sliderTwoProps = {
    textColor: "#ffffff",
    height: "100%",
    desktopFontSize: `${secondFonts.desktopFontSize}px`,
    mobileFontSize: `${secondFonts.mobileFontSize}px`,
    desktopShowcaseFontSize: `${secondFonts.desktopShowcaseFontSize}px`,
    mobileShowcaseFontSize: `${secondFonts.mobileShowcaseFontSize}px`,
    desktopPadding: {
      top: `${secondFonts.desktopPadding.top}px`,
      bottom: `${secondFonts.desktopPadding.bottom}px`,
      leftRight: `${secondFonts.desktopPadding.leftRight}px`,
    },
    mobilePadding: {
      top: `${secondFonts.mobilePadding.top}px`,
      bottom: `${secondFonts.mobilePadding.bottom}px`,
      leftRight: `${secondFonts.mobilePadding.leftRight}px`,
    },
    desktopTitleAlign,
    mobileTitleAlign,
  };

  const sliderOneProps = {
    textColor: "#ffffff",
    height: "100%",
    desktopFontSize: `${secondFonts.desktopFontSize * TITLE_MULTIPLIER_FIRST}px`,
    mobileFontSize: `${secondFonts.mobileFontSize * TITLE_MULTIPLIER_FIRST}px`,
    desktopShowcaseFontSize: `${secondFonts.desktopShowcaseFontSize * ITEM_MULTIPLIER_FIRST}px`,
    mobileShowcaseFontSize: `${secondFonts.mobileShowcaseFontSize * ITEM_MULTIPLIER_FIRST}px`,
    desktopPadding: {
      top: `${secondFonts.desktopPadding.top * SPACING_MULTIPLIER_FIRST}px`,
      bottom: `${secondFonts.desktopPadding.bottom * SPACING_MULTIPLIER_FIRST}px`,
      leftRight: `${secondFonts.desktopPadding.leftRight * SPACING_MULTIPLIER_FIRST}px`,
    },
    mobilePadding: {
      top: `${secondFonts.mobilePadding.top * SPACING_MULTIPLIER_FIRST}px`,
      bottom: `${secondFonts.mobilePadding.bottom * SPACING_MULTIPLIER_FIRST}px`,
      leftRight: `${secondFonts.mobilePadding.leftRight * SPACING_MULTIPLIER_FIRST}px`,
    },
    desktopTitleAlign,
    mobileTitleAlign,
  };

  // Count + Explore button
  const componentCount = componentsMetadata.length || 0;
  const exploreLabelRaw = t("capabilities_showcase_explore_label"); // "Explore {{componentCount}} components"
  const exploreLabel = exploreLabelRaw.replace("{{componentCount}}", String(componentCount));
  const exploreButton = (
    <PositionAwareButton
      href="/components"
    >
      {exploreLabel}
    </PositionAwareButton>
  );

  // Toasts
  const defaultToast = (
    <ToastDefault title="Default Toast" content="This is the default toast styling." />
  );
  const hebrewToast = (
    <ToastCustom
      isRTL
      title="אוסקר ווילד"
      content="החיים מחקים את האמנות יותר מאשר האמנות מחקה את החיים."
    />
  );
  const artToast = (
    <ToastCustom
      accentColor="hsl(var(--accent))"
      title="Louise Bourgeois"
      content="Art is a guaranty of sanity."
    />
  );
  const toastItems = [defaultToast, hebrewToast, artToast].slice(0, visibleToasts);

  return (
    <>
      {/* Disclaimer */}
      <div className="w-full pt-[24px] md:pt-[52px] bg-[var(--lightened-background)]">
        <LimitedWidthWrapper><Disclaimer isMobile={!wideTall} /></LimitedWidthWrapper>
      </div>

      {/* Main Section */}
      <section
        className={clsx("w-full bg-[var(--lightened-background)] text-foreground", wideTall ? "flex flex-col" : "")}
        style={{ height: wideTall ? "100vh" : undefined, maxHeight: wideTall ? "1080px" : undefined }}
      >
        <LimitedWidthWrapper>
          <div className="flex flex-col justify-center flex-grow">
            
            {/* Title Row */}
            <div className={clsx("mb-12 w-full", wideTall ? "flex flex-row gap-8 items-start" : "text-center flex flex-col")}>
              <div className={clsx(wideTall ? "flex-1 mt-[98px] max-w-[50%] text-left" : "mt-[32px] w-full text-center")}>
                <h2 className={clsx("text-4xl md:text-5xl font-bold tracking-tight md:mb-[30px]",
                  wideTall ? (isRTL ? "text-right" : "text-left") : "text-center")}>
                  {t("capabilities_showcase_title")}
                </h2>
                <p className={clsx("mt-4 text-lg text-muted-foreground",
                  wideTall ? (isRTL ? "text-right" : "text-left") : "text-center")}>
                  {t("capabilities_showcase_subtext")}
                </p>
              </div>

              {/* Case A: wideTall + isShortHeight → Toast */}
              {wideTall && isShortHeight && (
                <div className="flex-1 flex items-center justify-center mt-[98px]">
                  {isRTL ? artToast : hebrewToast}
                </div>
              )}

              {/* Case B: wideTall + !isShortHeight → Explore button */}
              {wideTall && !isShortHeight && (
                <div className="flex-1 flex items-center justify-end mt-[140px]">
                  {exploreButton}
                </div>
              )}
            </div>

            {/* Sliders */}
            <div style={yShift !== undefined ? { transform: `translateY(${yShift}px)` } : undefined}
              className="flex flex-col items-center justify-center">
              <div className={clsx("flex items-center justify-center gap-10 w-full", wideTall ? "flex-row" : "flex-col")}>
                
                {/* Slider One */}
                <div className="flex-1 bg-[#0a0a0a] min-w-0 w-full"
                  style={{ border: "1px solid hsl(var(--border))", borderRadius: "8px", aspectRatio: "16/9", overflow: "hidden" }}>
                  <SliderHeroSection {...sliderOneProps}
                    title={t("slider_hero_main_title")}
                    showcaseOptions={[
                      { text: t("slider_hero_option_1"), imageUrl: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1920&auto=format&fit=crop" },
                      { text: t("slider_hero_option_2"), imageUrl: "https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=1920&auto=format&fit=crop" },
                      { text: t("slider_hero_option_3"), imageUrl: "https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=1920&auto=format&fit=crop" }
                    ]}
                    onOptionClick={(option) =>
                      toast({ title: t("namer_ui"), description: `${t("slider_hero_toast_clicked")}: ${option}.` })} />
                </div>

                {wideTall ? (
                  isRTL ? <ArrowLeft className="text-muted-foreground flex-shrink-0" style={{ width: arrowSize, height: arrowSize }} />
                         : <ArrowRight className="text-muted-foreground flex-shrink-0" style={{ width: arrowSize, height: arrowSize }} />
                ) : (
                  <ArrowDown className="text-muted-foreground flex-shrink-0" style={{ width: arrowSize, height: arrowSize }} />
                )}

                {/* Slider Two */}
                <div className="flex-1 bg-[#111] min-w-0 w-full"
                  style={{ border: "1px solid hsl(var(--border))", borderRadius: "24px", aspectRatio: "1272/930", overflow: "hidden" }}>
                  <SliderHeroSection {...sliderTwoProps}
                    activeOptionColor="#8b30d6" imageChangeInterval={5000}
                    title={t("hero_slider_hero_title")}
                    showcaseOptions={[
                      {
                        text: t("hero_slider_hero_option_1"),
                        imageUrl:
                          "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/blueberry-loom.webp",
                      },
                      {
                        text: t("hero_slider_hero_option_2"),
                        imageUrl:
                          "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui-for-vue.webp",
                      },
                      {
                        text: t("hero_slider_hero_option_3"),
                        imageUrl:
                          "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/nof.webp",
                      },
                      {
                        text: t("hero_slider_hero_option_4"),
                        imageUrl:
                          "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/merucav.webp",
                      },
                    ]}
                    onOptionClick={(option) =>
                      toast({ title: t("namer_ui"), description: `${t("slider_hero_toast_clicked")}: ${option}.` })} />
                </div>
              </div>

              {/* Toasts Row */}
              {((!wideTall) || (wideTall && !isShortHeight)) && (
                <div className={clsx("w-full flex",
                    !wideTall && "mb-[36px]",
                    isSmallScreen
                      ? "flex-col mt-14 items-center gap-[48px]"
                      : wideTall
                      ? "justify-between items-center gap-4"
                      : "justify-between mt-16 flex-wrap items-center gap-6")}
                  style={toastMargin !== undefined ? { marginTop: `${toastMargin}px` } : undefined}>
                  {toastItems.map((toastEl, idx) => (
                    <React.Fragment key={idx}>
                      {toastEl}
                      {!isSmallScreen && idx < toastItems.length - 1 &&
                        (isRTL
                          ? <ArrowLeft className="text-muted-foreground flex-shrink-0"
                              style={{ width: arrowSize * TOAST_ARROW_RATIO, height: arrowSize * TOAST_ARROW_RATIO }} />
                          : <ArrowRight className="text-muted-foreground flex-shrink-0"
                              style={{ width: arrowSize * TOAST_ARROW_RATIO, height: arrowSize * TOAST_ARROW_RATIO }} />)}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          </div>
        </LimitedWidthWrapper>
      </section>

      {/* Bottom Button only for Case A (short-wideTall) or non-wideTall */}
      {((wideTall && isShortHeight) || !wideTall) && (
        <div className="w-full bg-[var(--lightened-background)] pb-[36px]">
          <LimitedWidthWrapper>
            <div className="flex justify-center">{exploreButton}</div>
          </LimitedWidthWrapper>
        </div>
      )}
    </>
  );
}
