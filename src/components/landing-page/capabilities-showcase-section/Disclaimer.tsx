"use client";

import { Alert } from "@/app/the-actual-components/alert/alert";
import { AlertTriangle } from "lucide-react";
import { useTranslation } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

/**
 * Scales value based on current window width,
 * At >=600px -> 100%, at 320px -> 50%, in between -> linear scale
 */
function useResponsiveScale(
  minWidth = 320,
  maxWidth = 600,
  minScale = 0.5,
  maxScale = 1
) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w >= maxWidth) {
        setScale(maxScale);
      } else if (w <= minWidth) {
        setScale(minScale);
      } else {
        const ratio = (w - minWidth) / (maxWidth - minWidth);
        setScale(minScale + (maxScale - minScale) * ratio);
      }
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [minWidth, maxWidth, minScale, maxScale]);

  return scale;
}

interface DisclaimerProps {
  isMobile?: boolean;
}

export default function Disclaimer({ isMobile = false }: DisclaimerProps) {
  const t = useTranslation();
  const isRTL = useIsRTL();
  const scale = useResponsiveScale();

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <Alert
        isRTL={isRTL}
        isMobile={isMobile} // ✅ pass mobile down to Alert
        icon={
          <AlertTriangle
            className={cn("h-4 w-4")}
            style={{
              transform: isRTL ? "rotateY(180deg)" : undefined,
              width: `${16 * scale}px`,
              height: `${16 * scale}px`,
            }}
          />
        }
        title={t("disclaimer")}
        description={
          <span className="text-foreground/90">{t("slider_hero_disclaimer")}</span>
        }
        backgroundColor="#181818"
        borderColor="hsl(var(--border))"
        titleColor="hsl(var(--foreground))"
        titleFontSize={`${20 * scale}px`}
        descriptionFontSize={`${14 * scale}px`}
      />
    </div>
  );
}
