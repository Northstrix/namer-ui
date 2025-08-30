"use client";

import { useMemo } from "react";
import { CircularTestimonials } from "@/app/the-actual-components/circular-testimonials/CircularTestimonials";
import { useTranslation } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";

export default function CircularTestimonialsDemo() {
  const t = useTranslation();
  const isRTL = useIsRTL();

  // Dark version testimonials, IDs included
  const darkTestimonials = useMemo(
    () => [
      {
        id: "dark-testimonial-1",
        quote: t("circular_testimonial_1_quote"),
        name: t("circular_testimonial_1_name"),
        designation: t("circular_testimonial_1_designation"),
        src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop",
      },
      {
        id: "dark-testimonial-2",
        quote: t("circular_testimonial_2_quote"),
        name: t("circular_testimonial_2_name"),
        designation: t("circular_testimonial_2_designation"),
        src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop",
      },
      {
        id: "dark-testimonial-3",
        quote: t("circular_testimonial_3_quote"),
        name: t("circular_testimonial_3_name"),
        designation: t("circular_testimonial_3_designation"),
        src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop",
      },
    ],
    [t]
  );

  return (
    <div className="w-full">
      {/* Dark Testimonials */}
      <div className="p-8 md:p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
        <div
          className="items-center justify-center relative flex"
          style={{ maxWidth: "1024px" }}
        >
          <CircularTestimonials
            testimonials={darkTestimonials}
            autoplay={true}
            autoplayInterval={7000}
            colors={{
              name: "#fafafa",
              designation: "#aaa",
              testimony: "#fff",
              arrowBackground: "hsl(var(--accent))",
              arrowForeground: "#0a0a0a",
              arrowHoverBackground: "#fff",
            }}
            fontSizes={{
              name: "28px",
              designation: "20px",
              quote: "20px",
            }}
            isRTL={isRTL}
          />
        </div>
      </div>
    </div>
  );
}
