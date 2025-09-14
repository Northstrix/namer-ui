"use client";
import { useRef } from "react";
import { SatelliteToast, type ToastNotification } from "@/app/the-actual-components/satellite-toast/SatelliteToast";
import RefinedChronicleButton from "@/app/the-actual-components/refined-chronicle-button/RefinedChronicleButton";
import { useTranslation } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";

export default function SatelliteToastFullPageDemo() {
  const toastRef = useRef<{ showNotification: (options: Omit<ToastNotification, "id">) => void }>(null);
  const t = useTranslation();
  const isRTL = useIsRTL();

  const showToast = () => {
    if (toastRef.current) {
      toastRef.current.showNotification({
        title: t("satellite_toast_toast_title"),
        content: t("satellite_toast_toast_content"),
        isRTL,
        accentColor: "hsl(var(--accent))",
        position: isRTL ? "bottom-left" : "bottom-right",
      });
    }
  };

  return (
    <div>
      <RefinedChronicleButton onClick={showToast}>
        {t("satellite_toast_show_toast_button_inscription")}
      </RefinedChronicleButton>
      <SatelliteToast ref={toastRef} />
    </div>
  );
}
