"use client";

import { Suspense, useState, useEffect, useRef, type CSSProperties } from "react";
import TruncatingNavbar from "@/components/CustomizedTruncatingNavbar";
import LimitedWidthWrapper from "@/components/landing-page/limited-width-wrapper";
import SubmissionCard from "./submission-card";
import { useTranslation, useApp } from "@/context/app-context";
import { useMetrics } from "@/hooks/useMetrics";
import useIsRTL from "@/hooks/useIsRTL";
import UnblurringWrapper from "@/components/landing-page/hero-section/unblurringWrapper";
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
  {
    id: "nof",
    name: "showcase_item_2_title",
    description: "showcase_item_2_description",
    image: "/showcase/nof.webp",
    link: "https://nofpg.netlify.app/",
  },
  {
    id: "nof-go",
    name: "showcase_item_3_title",
    description: "showcase_item_3_description",
    image: "/showcase/nof-go.webp",
    link: "https://northstrix.github.io/nof-go/",
  },
  {
    id: "merucav",
    name: "showcase_item_4_title",
    description: "showcase_item_4_description",
    image: "/showcase/merucav.webp",
    link: "https://merucav.netlify.app/",
  },
  {
    id: "kerach",
    name: "showcase_item_5_title",
    description: "showcase_item_5_description",
    image: "/showcase/kerach.webp",
    link: "https://kerach.netlify.app/",
  },
  {
    id: "kerach-go",
    name: "showcase_item_6_title",
    description: "showcase_item_6_description",
    image: "/showcase/kerach-go.webp",
    link: "https://northstrix.github.io/kerach-go/",
  },
  {
    id: "kerach-tempo",
    name: "showcase_item_7_title",
    description: "showcase_item_7_description",
    image: "/showcase/kerach-tempo.webp",
    link: "https://kerach-tempo.netlify.app/",
  },
];

const ShowcaseCard: React.FC<{ item: ShowcaseItem; isRTL: boolean; t: (k: string, p?: any) => string }> = ({
  item,
  isRTL,
  t,
}) => {
  const { sendAnalyticsIncrement } = useMetrics();
  const name = t(item.name);
  const description = t(item.description);

  const handleCardClick = () => {
    sendAnalyticsIncrement(`showcase-card:${item.id}:clicked`);
  };

  return (
    <a
      href={item.link ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleCardClick}
      className="group block p-4 rounded-xl border border-hsl(var(--border)) overflow-hidden transition-all duration-200"
    >
      <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
        {item.image ? (
          <img
            src={item.image}
            alt={name}
            className="w-full h-full rounded-lg object-cover border border-hsl(var(--border))"
          />
        ) : (
          <div className="w-full h-full rounded-lg border border-hsl(var(--border)) bg-gray-200" />
        )}
      </div>
      <div
        className={`pt-4 transition duration-200 ${
          isRTL ? "group-hover:-translate-x-[6px]" : "group-hover:translate-x-[6px]"
        }`}
      >
        <h3 className="font-headline text-[22px] mb-2 font-semibold text-foreground">{name}</h3>
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const gridTemplateColumns = (): string => {
    const w = windowSize.width;
    if (w >= 1536) return "repeat(4, minmax(0, 1fr))";
    if (w >= 1196) return "repeat(3, minmax(0, 1fr))";
    if (w >= 800) return "repeat(2, minmax(0, 1fr))";
    return "repeat(1, minmax(0, 1fr))";
  };

  const getLinkWithLang = (href: string) => (lang === "en" ? href : `${href}?lang=${lang}`);

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
                onSearchStateChange={setIsSearchOpen}
                scrollContainerRef={scrollContainerRef}
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

          {/* Main Showcase Content */}
          <div style={innerContentStyle}>
            <LimitedWidthWrapper>
              <section
                className="space-y-8 py-8 w-full"
                aria-label="Showcase content"
                style={{ direction: isRTL ? "rtl" : "ltr", width: "100%", minHeight: "calc(100vh - 64px)" }}
              >
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
            </LimitedWidthWrapper>

            <div
              style={{
                height: 1,
                width: "100%",
                background: "hsl(var(--border))",
                borderTop: "1px solid hsl(var(--border))",
              }}
            />
            <Footer />
          </div>
        </div>
      </UnblurringWrapper>
    </Suspense>
  );
}
