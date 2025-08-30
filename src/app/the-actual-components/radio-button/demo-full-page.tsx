"use client";

import { useState } from "react";
import RadioButton from "@/app/the-actual-components/radio-button/RadioButton";
import { Home, Settings, Aperture } from "lucide-react";
import { useTranslation } from "@/context/app-context";

export default function RadioButtonTabsDemo() {
  const t = useTranslation();
  const [activeTab, setActiveTab] = useState("home");

  const tabOptions = [
    { value: "home", label: t("radio_button_option_home") || "Home", icon: Home },
    { value: "photos", label: t("radio_button_option_photos") || "Photos", icon: Aperture },
    { value: "settings", label: t("radio_button_option_settings") || "Settings", icon: Settings },
  ];

  return (
    <div
      className="tab-switcher-demo"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "14px"
      }}
    >
      <div
        className="tab-switcher-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: "14px",
          width: "auto",
          maxWidth: "480px"
        }}
      >
        <RadioButton
          options={tabOptions}
          onChange={(value: string) => setActiveTab(value)}
          defaultValue="home"
          activeBg="hsl(var(--foreground))"
          activeFg="hsl(var(--background))"
          inactiveBg="hsl(var(--background))"
          inactiveFg="hsl(var(--foreground))"
          hoverBg="hsl(var(--accent))"
          enableOutline={true}
          outlineWidth="1px"
          outlineColor="hsl(var(--border))"
        />

        <div
          className="tab-switcher-content"
          style={{
            borderRadius: "10px",
            border: "1.5px solid hsl(var(--border))",
            padding: "16px",
            minHeight: "60px",
            color: "#fff",
            fontSize: "0.9rem",
            boxSizing: "border-box",
            width: "100%"
          }}
        >
          <h3>
            {t("radio_button_current_tab_label")}:{" "}
            {activeTab === "home" && t("radio_button_option_home")}
            {activeTab === "photos" && t("radio_button_option_photos")}
            {activeTab === "settings" && t("radio_button_option_settings")}
          </h3>
        </div>
      </div>
    </div>
  );
}
