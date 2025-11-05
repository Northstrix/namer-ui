"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import { CircularTestimonials } from "@/app/the-actual-components/circular-testimonials/CircularTestimonials";
import { useTranslation } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";

function LimitedWidthWrapper({
  children,
  padding = 24,
  outlined = true,
}: {
  children: React.ReactNode;
  padding?: number;
  outlined?: boolean;
}) {

  return (
    <div
      className="mx-auto relative"
      style={{
        width: "100%",
        maxWidth: `1400px`,
        paddingLeft: `${padding}px`,
        paddingRight: `${padding}px`,
        outline: outlined ? "1px solid #262626" : "none",
        borderRadius: "8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
      }}
    >
      {children}
    </div>
  );
}

export default function CircularTestimonialsDemo() {
  const t = useTranslation();
  const isRTL = useIsRTL();

  const measureRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const lerp = (
    x: number,
    x0: number,
    x1: number,
    y0: number,
    y1: number
  ): number => y0 + ((x - x0) * (y1 - y0)) / (x1 - x0);

  const WIDTH_MAX = 1352;
  const WIDTH_MIN = 1174;
  const STYLES_MAX = {
    gap: 4.9,
    imageWidth: 77.3,
    imageContainerTranslateX: 76,
    testimonialTextTranslateY: 56,
    arrowContainerTranslateY: 325,
    mb: 156,
  };
  const STYLES_MIN = {
    gap: 4.4,
    imageWidth: 78,
    imageContainerTranslateX: 64,
    testimonialTextTranslateY: 19,
    arrowContainerTranslateY: 349,
    mb: 94,
  };

  const dynamicStyles = {
    gap: `${lerp(
      containerWidth,
      WIDTH_MIN,
      WIDTH_MAX,
      STYLES_MIN.gap,
      STYLES_MAX.gap
    ).toFixed(2)}rem`,
    imageWidth: `${lerp(
      containerWidth,
      WIDTH_MIN,
      WIDTH_MAX,
      STYLES_MIN.imageWidth,
      STYLES_MAX.imageWidth
    ).toFixed(2)}%`,
    imageContainerTranslateX: `${lerp(
      containerWidth,
      WIDTH_MIN,
      WIDTH_MAX,
      STYLES_MIN.imageContainerTranslateX,
      STYLES_MAX.imageContainerTranslateX
    ).toFixed(2)}px`,
    testimonialTextTranslateY: `${lerp(
      containerWidth,
      WIDTH_MIN,
      WIDTH_MAX,
      STYLES_MIN.testimonialTextTranslateY,
      STYLES_MAX.testimonialTextTranslateY
    ).toFixed(2)}px`,
    arrowContainerTranslateY: `${lerp(
      containerWidth,
      WIDTH_MIN,
      WIDTH_MAX,
      STYLES_MIN.arrowContainerTranslateY,
      STYLES_MAX.arrowContainerTranslateY
    ).toFixed(2)}px`,
    mb: `${lerp(
      containerWidth,
      WIDTH_MIN,
      WIDTH_MAX,
      STYLES_MIN.mb,
      STYLES_MAX.mb
    ).toFixed(2)}px`,
  };

  const darkTestimonials = useMemo(
    () => [
      {
        id: "dark-testimonial-1",
        quote: t("circular_testimonial_1_quote"),
        name: t("circular_testimonial_1_name"),
        designation: t("circular_testimonial_1_designation"),
        src: "/fictious-avatars/naomi-bright.webp",
      },
      {
        id: "dark-testimonial-2",
        quote: t("circular_testimonial_2_quote"),
        name: t("circular_testimonial_2_name"),
        designation: t("circular_testimonial_2_designation"),
        src: "/fictious-avatars/talia-lewin.webp",
      },
      {
        id: "dark-testimonial-3",
        quote: t("circular_testimonial_3_quote"),
        name: t("circular_testimonial_3_name"),
        designation: t("circular_testimonial_3_designation"),
        src: "/fictious-avatars/hannah-miller.webp",
      },
    ],
    [t]
  );

  // Track size of the testimonial container using ResizeObserver
  useEffect(() => {
    if (!measureRef.current) return;
    const element = measureRef.current;

    const updateWidth = () => {
      const newWidth = element.getBoundingClientRect().width || 0;
      setContainerWidth(newWidth);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center py-16"
      style={{ backgroundColor: "transparent" }}
    >
      <div
        className="text-sm text-gray-400 mb-8"
        style={{
          textAlign: "left",
          width: "100%",
          maxWidth: "1400px",
          padding: 0,
          direction: 'ltr',
        }}
      >
        <p>Wrapper width: {containerWidth > 0 ? containerWidth + 48 : 1400}px</p>
        <p>Wrapper padding: 24px</p>
        <p>Testimonial container width: {Math.round(containerWidth)}px</p>
        <p>Gap: {parseFloat(dynamicStyles.gap).toFixed(2)}rem</p>
        <p>Image width: {parseFloat(dynamicStyles.imageWidth).toFixed(2)}%</p>
        <p>
          Image container X translate:{" "}
          {parseFloat(dynamicStyles.imageContainerTranslateX).toFixed(2)}px
        </p>
        <p>
          Text container Y translate:{" "}
          {parseFloat(dynamicStyles.testimonialTextTranslateY).toFixed(2)}px
        </p>
        <p>
          Arrow container Y translate:{" "}
          {parseFloat(dynamicStyles.arrowContainerTranslateY).toFixed(2)}px
        </p>
        <p>Margin bottom: {parseFloat(dynamicStyles.mb).toFixed(2)}px</p>
          {containerWidth >= 1174 ? (<></>) : (
            <p style={{ color: "#ccc", fontSize: "16px", marginTop: "24px" }}>
              This demo isn't optimized for the testimonial container width below 1174px!
            </p>
          )}
      </div>

      <LimitedWidthWrapper
        padding={24}
        outlined={true}
      >
        <div
          ref={measureRef}
          className="flex flex-wrap justify-center pt-[40px] pb-6 items-center relative"
          style={{
            marginBottom: dynamicStyles.mb,
            backgroundColor: "transparent",
            width: "100%",
          }}
        >
          <CircularTestimonials
            testimonials={darkTestimonials}
            autoplay
            autoplayInterval={7000}
            gap={dynamicStyles.gap}
            imageWidth={dynamicStyles.imageWidth}
            imageContainerTranslateX={dynamicStyles.imageContainerTranslateX}
            testimonialTextTranslateY={dynamicStyles.testimonialTextTranslateY}
            arrowContainerTranslateY={dynamicStyles.arrowContainerTranslateY}
            colors={{
              name: "#fafafa",
              designation: "#aaa",
              testimony: "#fff",
              arrowBackground: "hsl(var(--accent))",
              arrowForeground: "#0a0a0a",
              arrowHoverBackground: "#fff",
            }}
            fontSizes={{
              name: "22px",
              designation: "15.25px",
              quote: "17.675px",
            }}
            isRTL={isRTL}
          />
        </div>
      </LimitedWidthWrapper>
    </div>
  );
}
