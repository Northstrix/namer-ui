"use client";

import React, { useState } from "react";
import { ShamayimToggleSwitch } from "@/app/the-actual-components/shamayim-toggle-switch/ShamayimToggleSwitch";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/context/app-context";

export default function DemoTogglePatterns() {
  const [topState, setTopState] = useState(false);
  const [bottomState, setBottomState] = useState(false);
  const { toast } = useToast();
  const t = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1em",
        minHeight: "300px",
        width: "100%",
        direction: "ltr",
        borderRadius: "0.5rem",
        backgroundImage: "linear-gradient(45deg, #47b6d1, #90e0ec)",
        fontSize: "2em",
        padding: "2em",
      }}
    >
      {/* First Row: LTR */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.875em" }}>
        <span style={{ color: "#E0F9FC" }}>Mobile Data</span>
        <ShamayimToggleSwitch
          defaultState={topState}
          onChange={(isOn) => {
            setTopState(isOn);
            toast({
              title: t("namer_ui"),
              description: isOn
                ? t("shamayim_toggle_switch_toast_top_on")
                : t("shamayim_toggle_switch_toast_top_off"),
            });
          }}
        />
      </div>

      {/* Second Row: RTL (mirrored switch) */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.875em" }}>
        <ShamayimToggleSwitch
          defaultState={bottomState}
          mirrored
          onChange={(isOn) => {
            setBottomState(isOn);
            toast({
              title: t("namer_ui"),
              description: isOn
                ? t("shamayim_toggle_switch_toast_bottom_on")
                : t("shamayim_toggle_switch_toast_bottom_off"),
            });
          }}
        />
        <span style={{ color: "#E0F9FC" }}>נתונים סלולריים</span>
      </div>
    </div>
  );
}
