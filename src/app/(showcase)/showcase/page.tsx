"use client";

import React, { useState, useEffect, useRef } from "react";
import TruncatingNavbar from "@/components/CustomizedTruncatingNavbar";
import LimitedWidthWrapper from "@/components/landing-page/limited-width-wrapper";
import SubmissionCard from './submission-card';
import { useTranslation, useApp } from "@/context/app-context";
import { useMetrics } from "@/hooks/useMetrics";
import useIsRTL from "@/hooks/useIsRTL";
import Footer from "@/components/landing-page/footer/Footer";

export type ShowcaseItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
};

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "clandestine",
    name: "showcase_item_1_title",
    description: "showcase_item_1_description",
    image: "/showcase/clandestine.webp",
    link: "https://clandestine-beauty-salon-landing-page.netlify.app/",
  },
];

const ShowcaseCard: React.FC<{
  item: ShowcaseItem;
  isRTL: boolean;
  t: (k: string, p?: any) => string;
}> = ({ item, isRTL, t }) => {
  const name = t(item.name);
  const description = t(item.description);
  const { image, link } = item;
  const imageAspectRatio = 16 / 10;
  const { sendAnalyticsIncrement } = useMetrics();

  const handleCardClick = () => {
    sendAnalyticsIncrement(`showcase-card:${item.id}:clicked`);
  };
  return (
    <a href={link ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleCardClick}
      className="group block p-4 rounded-xl border border-hsl(var(--border)) overflow-hidden transition-all duration-200"
    >
      <div className="relative w-full" style={{ aspectRatio: imageAspectRatio }}>
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-lg object-cover border border-hsl(var(--border))"
          />
        ) : (
          <div className="w-full h-full rounded-lg border border-hsl(var(--border)) bg-gray-200" />
        )}
      </div>

      <div
        className={`pt-4 transition duration-200 ${
          isRTL ? 'group-hover:-translate-x-[6px]' : 'group-hover:translate-x-[6px]'
        }`}
      >
        <h3 className="font-headline text-[22px] mb-2 font-semibold text-foreground">
          {name}
        </h3>
        <p className="font-body text-base text-muted-foreground">{description}</p>
      </div>
    </a>
  );
};

export default function ShowcaseRoute() {
  const t = useTranslation();
  const { lang } = useApp();
  const isRTL = useIsRTL();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridTemplateColumns = (): string => {
    const w = windowSize.width;
    if (w >= 1536) return "repeat(4, minmax(0, 1fr))";
    if (w >= 1196) return "repeat(3, minmax(0, 1fr))";
    if (w >= 800) return "repeat(2, minmax(0, 1fr))";
    return "repeat(1, minmax(0, 1fr))";
  };

  const getLinkWithLang = (href: string) => (lang === "en" ? href : `${href}?lang=${lang}`);

  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 20, width: "100%" }} ref={scrollContainerRef}>
        <LimitedWidthWrapper expandToFull={false}>
          <TruncatingNavbar
            icon="/logo.png"
            appName={t("namer_ui")}
            routes={[
              { name: t("components"), link: getLinkWithLang("/components") },
              { name: t("vue-components"), link: "https://namer-ui-for-vue.netlify.app/", external: true },
              { name: t("showcase"), link: getLinkWithLang("/showcase") },
            ]}
            homeRoute={getLinkWithLang("/")}
            scrolledBg="hsl(var(--background))"
            mobileBg="hsl(var(--background))"
            outlineColor="hsl(var(--border))"
            navbarHoverOutline="var(--hovered-border)"
            placeholderText={t("search_placeholder_text")}
            shortcutKey="K"
          />
        </LimitedWidthWrapper>
      </div>
      <LimitedWidthWrapper expandToFull={false}>
        <div style={{ minHeight: "100vh" }}>
          <section className="space-y-8 py-8 w-full" aria-label="Showcase content" style={{ direction: isRTL ? "rtl" : "ltr", width: "100%" }}>
            <header>
              <h1 className="text-4xl font-bold tracking-tight">{t("showcase")}</h1>
              <p className="mt-2 text-lg text-muted-foreground">{t("showcase_index_description")}</p>
            </header>

            <div
              className="grid"
              style={{
                display: "grid",
                gap: 16,
                gridTemplateColumns: gridTemplateColumns(),
              }}
            >
              {showcaseItems.map((it, idx) => (
                <ShowcaseCard key={idx} item={it} isRTL={isRTL} t={t} />
              ))}
              <SubmissionCard isRTL={isRTL} link="https://blueberry-loom-form-loader.netlify.app/form/bWF4aW0uYm9ydC5kZXZlbEBnbWFpbC5jb20=/Far247Squ6?key=Im5uylqLi3BwlN909sLP1Y3vY6nRwMixa8D6BGpj6Uz5B4b9OO)YZSyKWvCGeX65a6Yfsc2ZdUAEWrue3FXDDg==" />
            </div>
          </section>
        </div>
      </LimitedWidthWrapper>

      <div style={{ height: 1, width: "100%", background: "hsl(var(--border))", borderTop: "1px solid hsl(var(--border))" }} />
      <Footer />
    </>
  );
}
