"use client";

import { useMemo } from "react";
import AnimatedTestimonials from "@/app/the-actual-components/animated-testimonials/AnimatedTestimonials";
import { useTranslation } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";

export default function AnimatedTestimonialsDemo() {
  const t = useTranslation();
  const isRTL = useIsRTL();

  const animatedTestimonials = useMemo(
    () => [
      {
        id: "animated-testimonial-1",
        quote: t("animated_testimonial_1_quote"),
        name: t("animated_testimonial_1_name"),
        designation: t("animated_testimonial_1_designation"),
        src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop",
      },
      {
        id: "animated-testimonial-2",
        quote: t("animated_testimonial_2_quote"),
        name: t("animated_testimonial_2_name"),
        designation: t("animated_testimonial_2_designation"),
        src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop",
      },
      {
        id: "animated-testimonial-3",
        quote: t("animated_testimonial_3_quote"),
        name: t("animated_testimonial_3_name"),
        designation: t("animated_testimonial_3_designation"),
        src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop",
      },
    ],
    [t]
  );

  return (
    <div className="w-full">
      <div className="p-8 md:p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
        <div
          className="items-center justify-center relative flex"
          style={{ maxWidth: "1024px" }}
        >
          <AnimatedTestimonials
            testimonials={animatedTestimonials}
            autoplay={true}
            colors={{
              name: "#fafafa",
              position: "#aaa",
              testimony: "#fff",
              arrowBackground: "hsl(var(--accent))",
              arrowForeground: "#0a0a0a",
              arrowHoverForeground: "#fff",
            }}
            fontSizes={{
              name: "28px",
              position: "20px",
              testimony: "20px",
            }}
            spacing={{
              nameTop: "0",
              nameBottom: "10px",
              positionTop: "0",
              positionBottom: "0.5em",
              testimonyTop: "1.24em",
              testimonyBottom: "1em",
              lineHeight: "1.56",
            }}
            imageAspectRatio={1.05}
            arrowButtonSize={48}
            arrowIconSize={32}
            arrowGap={14}
            isRTL={isRTL}
          />
        </div>
      </div>
    </div>
  );
}
