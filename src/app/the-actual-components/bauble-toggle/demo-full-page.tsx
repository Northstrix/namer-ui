"use client";

import { useState } from "react";
import BaubleToggle from '@/app/the-actual-components/bauble-toggle/BaubleToggle';
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";

export default function BaubleToggleDemo() {
  const isRTL = useIsRTL();
  const t = useTranslation();
  const { toast } = useToast();
  const [toggleState, setToggleState] = useState(true);

  const handleToggleChange = (isOn: boolean) => {
    setToggleState(isOn);
    toast({
      title: t("namer_ui"), // exact toast title as requested
      description: isOn ? t("bauble_toggle_toast_message_on") : t("bauble_toggle_toast_message_off"),
    });
  };

  // container styles
  const containerStyle: React.CSSProperties = {
    fontSize: "3em",
    gap: "1em",
    borderRadius: "0.5rem",
    color: "#fff",
    direction: "ltr",
  };

  // bauble container styles - always scale 5, plus scaleX(-1) if RTL
  const baubleWrapperStyle: React.CSSProperties = {
    width: "114px",
    height: "114px",
    overflow: "hidden",
    transformOrigin: "center",
    transform: isRTL ? "scale(5) scaleX(-1)" : "scale(5)",
    pointerEvents: "auto",
  };

  return (
    <div style={containerStyle} className="flex flex-col justify-center items-center">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3.25rem",
        }}
      >
        {isRTL ? (
          <>
            <div style={baubleWrapperStyle}>
              <BaubleToggle onToggleChange={handleToggleChange} initialState={toggleState} />
            </div>
            <span>{t("bauble_toggle_the_only")}</span>
          </>
        ) : (
          <>
            <span>{t("bauble_toggle_the_only")}</span>
            <div style={baubleWrapperStyle}>
              <BaubleToggle onToggleChange={handleToggleChange} initialState={toggleState} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}