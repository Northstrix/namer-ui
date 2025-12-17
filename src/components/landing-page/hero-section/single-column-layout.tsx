"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import clsx from "clsx";
import { useTranslation } from "@/context/app-context";
import { useToast } from "@/hooks/use-toast";
import useIsRTL from "@/hooks/useIsRTL";
import { HeroCollage, HeroCardConfig } from "./hero-collage";
import ButtonSection from "./button-section";
import Spiral from "@/app/the-actual-components/spiral/Spiral";
import { FishyButton } from "@/app/the-actual-components/fishy-button/FishyButton";
import WonderlandCard from "@/app/the-actual-components/wonderland-card/WonderlandCard";
import { ShamayimToggleSwitch } from "@/app/the-actual-components/shamayim-toggle-switch/ShamayimToggleSwitch";
import SliderHeroSection from "@/app/the-actual-components/slider-hero-section/SliderHeroSection";
import MagicText from "@/app/the-actual-components/magic-text/MagicText";
import { IconFlareFilled, IconJewishStarFilled, IconBoltFilled } from "@tabler/icons-react";
import "animate.css";

/* Utility to detect RTL text */
const isRTLCheck = (text: string): boolean =>
  /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text || "");

/* Linear interpolation */
const lerp = (
  x: number,
  x1: number,
  x2: number,
  y1: number,
  y2: number
): number => {
  if (x <= x1) return y1;
  if (x >= x2) return y2;
  return y1 + ((y2 - y1) * (x - x1)) / (x2 - x1);
};

export default function SingleColumnLayout() {
  const { toast } = useToast();
  const t = useTranslation();
  const isRTL = useIsRTL();
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [rerenderTick, setRerenderTick] = useState(0);

  // 🔑 new: track reload to force slider update
  const [sliderReloadTick, setSliderReloadTick] = useState(0);

  useEffect(() => {
    const checkScreen = () => {
      setWindowWidth(window.innerWidth);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    window.addEventListener("resize", () =>
      setRerenderTick((tick) => tick + 1)
    );
    setTimeout(() => setRerenderTick((tick) => tick + 1), 1000);
    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  // Translation & re-render triggers
  const stunningWord = t("hero_word_stunning");

  // 🔑 bump slider reload tick when translations change
  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderReloadTick((tick) => tick + 1);
    }, 0);
    return () => clearTimeout(timer);
  }, [
    t("hero_word_stunning"),
    t("hero_slider_hero_title"),
    t("hero_slider_hero_option_1"),
    t("hero_slider_hero_option_2"),
    t("hero_slider_hero_option_3"),
    t("hero_slider_hero_option_4"),
  ]);

  let sparkleIcon = <IconFlareFilled size={28} color="currentColor" />;
  if (isRTL) {
    sparkleIcon = <IconJewishStarFilled size={28} color="currentColor" />;
  } else if (
    stunningWord.toLowerCase().includes("impresionante") ||
    stunningWord.toLowerCase().includes("asombroso")
  ) {
    sparkleIcon = <IconBoltFilled size={28} color="currentColor" />;
  }

  const remountKey = `${stunningWord}-${windowWidth}-${sliderReloadTick}`;
  const sliderMainTitle = t("hero_slider_hero_title");
  const sliderOptions = [
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
  ];

  const desktopTitleAlign = isRTLCheck(sliderMainTitle) ? "right" : "left";

  // ---------------- Demo Elements ----------------
  const fishyDemo = (
    <div className="flex flex-col gap-12 w-full p-8 items-center justify-center bg-[#fff]">
      <div className="flex flex-wrap items-center justify-center gap-6 w-full">
        <FishyButton
          type="button"
          className="button--1"
          onClick={() =>
            toast({
              title: t("namer_ui"),
              description: t("fishy_button_toast_1"),
            })
          }
        >
          One
        </FishyButton>
        <FishyButton
          type="button"
          className="button--2"
          borderRadius="4px"
          fishSpeed="1.9s"
          onClick={() =>
            toast({
              title: t("namer_ui"),
              description: t("fishy_button_toast_2"),
            })
          }
        >
          Dos
        </FishyButton>
        <FishyButton
          type="button"
          className="button--3"
          onClick={() =>
            toast({
              title: t("namer_ui"),
              description: t("fishy_button_toast_3"),
            })
          }
        >
          שלוש
        </FishyButton>
      </div>
    </div>
  );

  const logoDemo = (
    <div className="flex items-center justify-center bg-white">
      <div
        style={{
          aspectRatio: "1 / 1",
          width: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
        }}
      >
        <img
          src="/logo.png"
          alt="App Logo"
          width={76}
          height={76}
          style={{ display: "block", objectFit: "contain" }}
        />
      </div>
    </div>
  );

  const wonderlandDemo = (
    <WonderlandCard
      cardId="demo2"
      componentWidth="480px"
      aspectRatio="3/4"
      minTextSize={16}
      maxTextSize={28}
      manualLetterSpacing={1}
      imageSrc="https://raw.githubusercontent.com/Northstrix/wonderland-card/refs/heads/main/public/second-card-image.png"
      imageHeightPercentage={81}
      borderRadius="20px"
      borderRadiusHover="20px"
      borderRadiusActive="20px"
      inscriptionFontWeight={500}
      tranquiluxeProps={{ color: [1, 0.47, 0.07], speed: 0.7 }}
      tranquiluxePropsActive={{ color: [0.27, 0.78, 1], speed: 1.2 }}
      backgroundColor="transparent"
      textColor="#fff"
      textColorHover="#0a0a0a"
      textColorActive="#fff"
      fillParent
    />
  );

  const spiralDemo = (
    <div className="flex items-center justify-center w-full h-full bg-[hsl(var(--accent))]">
      <div className="flex items-center justify-center max-w-[400px] aspect-square cursor-pointer">
        <Spiral
          spiralColor="250, 250, 250"
          defaultDistortion={1}
          hoverDistortion={4}
          clickDistortion={6}
          strokeWidth={3.14}
        />
      </div>
    </div>
  );

  const toggleDemo = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.125em",
        minHeight: "160px",
        width: "100%",
        borderRadius: "0.5rem",
        backgroundImage: "linear-gradient(45deg, #47b6d1, #90e0ec)",
        fontSize: "0.95em",
        padding: "1em",
        direction: "ltr",
        transform: "scale(1.4)",
      }}
    >
      {/* First */}
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "0.625em" }}
      >
        <span style={{ color: "#E0F9FC" }}>Mobile Data</span>
        <ShamayimToggleSwitch
          defaultState={true}
          onChange={(isOn) =>
            toast({
              title: t("namer_ui"),
              description: isOn
                ? t("shamayim_toggle_switch_toast_top_on")
                : t("shamayim_toggle_switch_toast_top_off"),
            })
          }
        />
      </div>
      {/* Second */}
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "0.625em" }}
      >
        <ShamayimToggleSwitch
          defaultState={true}
          mirrored
          onChange={(isOn) =>
            toast({
              title: t("namer_ui"),
              description: isOn
                ? t("shamayim_toggle_switch_toast_bottom_on")
                : t("shamayim_toggle_switch_toast_bottom_off"),
            })
          }
        />
        <span style={{ color: "#E0F9FC" }}>נתונים סלולריים</span>
      </div>
    </div>
  );

  // ---------------- HeroCards ----------------
  const heroCards = useMemo(() => {
    const fishyLeft = `${lerp(windowWidth, 1280, 1536, 46, 36.4).toFixed(2)}%`;

    const baseCards: HeroCardConfig[] = [
      {
        id: 1,
        element: fishyDemo,
        width: 200,
        height: 271,
        zIndex: 7,
        style: { left: fishyLeft, top: isRTL ? "28.4%" : "14%" },
        animationDuration: "9.2s",
        borderRadius: "12px",
      },
      {
        id: 2,
        element: spiralDemo,
        width: 220,
        height: 220,
        zIndex: 3,
        style: { right: isRTL ? "8%" : "13%", top: isRTL ? "39%" : "41%" },
        animationDuration: "2.3s",
        borderRadius: "50%",
      },
      {
        id: 3,
        element: wonderlandDemo,
        width: 300,
        height: 400,
        zIndex: 5,
        style: { left: "0%", bottom: "16%" },
        animationDuration: "7.2s",
        borderRadius: "20px",
      },
      {
        id: 4,
        element: toggleDemo,
        width: 320,
        height: 160,
        zIndex: 2,
        style: { right: "9%", top: "-10%" },
        animationDuration: "6.1s",
        borderRadius: "8px",
      },
      {
        id: 5,
        element: (
          <SliderHeroSection
            key={sliderReloadTick}
            title={sliderMainTitle}
            showcaseOptions={sliderOptions}
            onOptionClick={(option) =>
              toast({
                title: t("namer_ui"),
                description: `${t("slider_hero_toast_clicked")}: ${option}`,
              })
            }
            desktopVersionBottomThreshold={100}
            onOptionHover={() => {}}
            desktopTitleAlign={desktopTitleAlign}
            desktopFontSize="19px"
            mobileFontSize="19px"
            desktopShowcaseFontSize="13.6px"
            mobileShowcaseFontSize="13.6px"
            height="100%"
            desktopPadding={{ top: "5px", bottom: "13px", leftRight: "11px" }}
            mobilePadding={{ top: "8px", bottom: "8px", leftRight: "2px" }}
          />
        ),
        width: 334,
        height: 244,
        zIndex: 4,
        style: { right: "0%", bottom: "-10%" },
        animationDuration: "7.8s",
        outline: true,
      },
      {
        id: 6,
        element: logoDemo,
        width: 196,
        height: 196,
        zIndex: 0,
        style: { right: "0%", top: "13.6%" },
        animationDuration: "3.9s",
        borderRadius: "18.4px",
      },
    ];

    // Mirror for RTL
    if (isRTL) {
      baseCards.forEach((card) => {
        const { left, right, ...rest } = card.style;
        if (left !== undefined) {
          card.style = { ...rest, right: left };
        } else if (right !== undefined) {
          card.style = { ...rest, left: right };
        }
      });
    }

    return baseCards;
  }, [windowWidth, isRTL, sliderReloadTick, sliderMainTitle, sliderOptions, t]);

  // ---------------- Render ----------------
  return (
    <Suspense fallback={null}>
      <section
        className={clsx(
          "relative w-full overflow-x-hidden flex flex-col items-center text-center gap-[16px]"
        )}
      >
        {/* Text Section */}
        <div
          className={clsx(
            "flex flex-col items-center justify-center animate__animated",
            isRTL ? "animate__fadeInRight" : "animate__fadeInLeft"
          )}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <h1
            key={remountKey}
            className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mt-[24px]"
          >
            {t("hero_top_text_prefix")}{" "}
            <MagicText sparkleIcon={sparkleIcon} mirrored={isRTL}>
              {stunningWord}
            </MagicText>{" "}
            {t("hero_top_text_suffix")}
          </h1>

          <p className="mt-5 max-w-xl text-muted-foreground text-base md:text-lg mx-auto">
            {t("hero_subtext")}
          </p>

          <ButtonSection />
        </div>

        {/* Collage */}
        <div
          className={clsx(
            "relative w-full flex items-center justify-center animate__animated",
            isRTL ? "animate__fadeInLeft" : "animate__fadeInRight"
          )}
          style={{ height: "800px" }}
        >
        <HeroCollage
          cards={heroCards}
          outlineDisabled={false}
          isRTL={isRTL}
        />
        </div>
      </section>
    </Suspense>
  );
}
