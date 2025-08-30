"use client";

import React, { useState, useRef, useEffect } from "react";
import { componentsMetadata } from "@/lib/component-meta";
import { useTranslation, useApp } from "@/context/app-context";
import InflectedCard from "@/components/InflectedCard";
import FallbackDemo from "@/components/fallback/FallbackDemo";
import useIsRTL from "@/hooks/useIsRTL";
import { CornerRightUp } from "lucide-react";
import { BentoGrid } from "@/components/BentoGrid";
import { useRouter } from "next/navigation";
import { useMetrics } from "@/hooks/useMetrics";

export default function ComponentsPage() {
  const t = useTranslation();
  const { lang } = useApp();
  const isRTL = useIsRTL();
  const router = useRouter();

  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { sendAnalyticsIncrement } = useMetrics();

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width) setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleImageError = (id: string) =>
    setImageErrorMap((prev) => ({ ...prev, [id]: true }));

  const getComponentUrl = (id: string) => {
    const langParam = lang === "en" ? "" : `?lang=${lang}`;
    return `/components/${id}${langParam}`;
  };

  // Event handlers updated to use sendAnalyticsIncrement instead of console.log

  const handleCardHover = (info: { part: string; extra?: any; isHovered: boolean }, id: string) => {
    if (info.part === "image" && info.isHovered) {
      sendAnalyticsIncrement(`${id}:image-card:hovered`);
    }
  };

  const handleCardClick = (info: { part: string; extra?: any }, id: string, url: string) => {
    if (
      window.event instanceof MouseEvent &&
      ((window.event as MouseEvent).metaKey ||
        (window.event as MouseEvent).ctrlKey ||
        (window.event as MouseEvent).button === 1)
    ) {
      return; // let browser handle new tab opening
    }

    if (info.part === "button") {
      sendAnalyticsIncrement(`${id}:button:clicked`);
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    // Navigate in the same tab for other parts
    router.push(url);
  };

  return (
    <div ref={containerRef} className="space-y-8 py-8 w-full">
      {/* HEADER */}
      <header>
        <h1 className="text-4xl font-bold tracking-tight">{t("component_index")}</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {t("component_index_description")}
        </p>
      </header>

      {/* COMPONENTS GRID */}
      <BentoGrid containerWidth={containerWidth} minCardWidth={480}>
        {componentsMetadata.map((meta) => {
          const slug = meta.id;
          const componentUrl = getComponentUrl(slug);
          const isImagePreview = !!meta.isPreviewImage;
          const imagePath = isImagePreview ? `/previews/${slug}.webp` : undefined;
          const imageFailed = imagePath && imageErrorMap[slug];
          const DemoComp = meta.demo;
          const hasDemo = typeof DemoComp === "function";

          let mediaNode: React.ReactNode = null;
          if (isImagePreview && !imageFailed) {
            mediaNode = (
              <img
                src={imagePath}
                alt={t(meta.title)}
                draggable={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: 16,
                }}
                onError={() => handleImageError(slug)}
              />
            );
          } else if (hasDemo) {
            mediaNode = (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={(e) => e.stopPropagation()} // prevent bubbling
              >
                <DemoComp />
              </div>
            );
          } else {
            mediaNode = <FallbackDemo />;
          }

          return (
            <InflectedCard
              key={slug}
              id={slug}
              title={t(meta.title)}
              description={t(meta.description)}
              parentBackgroundColor="#0a0a0a"
              cardRounding={16}
              fontSizes={{ title: "1.03rem", description: "0.95rem" }}
              margins={{ title: "0 0 0.24em 0", description: "0 0 0.3em 0" }}
              maxWidth="100%"
              mirrored={isRTL}
              titleAlignment="left"
              descriptionAlignment="left"
              tagsAlignment="left"
              buttonIcon={CornerRightUp}
              buttonIconSize={28}
              buttonIconColor="hsl(var(--foreground))"
              buttonIconHoverColor="hsl(var(--background))"
              buttonBackgroundColor="hsl(var(--accent))"
              buttonBackgroundHoverColor="hsl(var(--foreground))"
              imageHoverZoom={1.2}
              titleColor="hsl(var(--foreground))"
              descriptionColor="#e1e1e1"
              titleLineClamp={1}
              descriptionLineClamp={2}
              tags={[]}
              url={componentUrl}
              onClick={(info) => handleCardClick(info, slug, componentUrl)}
              onHover={(info) => handleCardHover(info, slug)}
              mediaNode={mediaNode}
            />
          );
        })}
      </BentoGrid>
    </div>
  );
}
