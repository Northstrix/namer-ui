"use client";

import { useState } from "react";
import RadioButton from "@/app/the-actual-components/radio-button/RadioButton";
import { Home, Aperture } from "lucide-react";
import { useTranslation } from "@/context/app-context";

export default function RadioButtonPreview() {
  const t = useTranslation();
  const [activeTab, setActiveTab] = useState("home");

  const tabOptions = [
    { value: "home", label: t("radio_button_option_home") || "Home", icon: Home },
    { value: "photos", label: t("radio_button_option_photos") || "Photos", icon: Aperture }
  ];

  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#fff]">
      <div className="flex flex-col items-center justify-center gap-[12px] w-auto scale-[0.9]">
        <RadioButton
          options={tabOptions}
          onChange={(value: string) => setActiveTab(value)}
          defaultValue="home"
          activeBg="hsl(var(--background))"
          activeFg="hsl(var(--foreground))"
          inactiveBg="#5a5a5a"
          inactiveFg="hsl(var(--foreground))"
          hoverBg="hsl(var(--accent))"
          enableOutline={false}
          padding="0.8em 1.5em"
          borderRadius="6px"
          fontSize="1rem"
          iconSize={20}
        />
        <div
          style={{
            padding: "10px", // reduced padding
            minHeight: "32px",
            background: "#ccc",
            color: "hsl(var(--background))",
            fontSize: "1.05rem",
            fontWeight: 600,
            width: "100%",
            textAlign: "center",
            borderRadius: "6px" // updated border radius
          }}
        >
          <h3 style={{ margin: 0 }}>
            {t("radio_button_current_tab_label")}:{" "}
            {activeTab === "home" && t("radio_button_option_home")}
            {activeTab === "photos" && t("radio_button_option_photos")}
          </h3>
        </div>
      </div>
    </div>
  );
}
