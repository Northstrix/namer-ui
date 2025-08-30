"use client";
import React from "react";
import Spiral from "@/app/the-actual-components/spiral/Spiral";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/context/app-context";

export default function SpiralDemo() {
  const { toast } = useToast();
  const t = useTranslation();

  const handleSpiralClick = (index: number) => {
    toast({
      title: t("namer_ui"),
      description: t(`spiral_toast_${index}`),
    });
  };

  // Outer wrapper filling full width and centering the inner container
  const outerContainerStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "2rem",
    boxSizing: "border-box",
  };

  // Inner container holding all spiral demos
  const innerContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    maxWidth: "900px",
  };

  const demoSectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const labelStyle: React.CSSProperties = {
    marginBottom: "0.5rem",
    fontSize: "1rem",
    fontWeight: 500,
  };

  const spiralWrapperStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "400px",
    cursor: "pointer",
  };

  const nestedWhiteContainerStyle: React.CSSProperties = {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={outerContainerStyle}>
      <div style={innerContainerStyle}>
        {/* First Spiral */}
        <div style={demoSectionStyle}>
          <div style={labelStyle}>{t("spiral_label_1")}</div>
          <div
            style={spiralWrapperStyle}
            onClick={() => handleSpiralClick(1)}
          >
            <Spiral
              spiralColor="71, 118, 203"
              defaultDistortion={0.6}
              hoverDistortion={1.4}
              clickDistortion={3.6}
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Second Spiral */}
        <div style={demoSectionStyle}>
          <div style={labelStyle}>{t("spiral_label_2")}</div>
          <div
            style={spiralWrapperStyle}
            onClick={() => handleSpiralClick(2)}
          >
            <Spiral
              spiralColor="161, 159, 229"
              defaultDistortion={0.4}
              hoverDistortion={0.7}
              clickDistortion={1.5}
              strokeWidth={3.7}
            />
          </div>
        </div>

        {/* Third Spiral */}
        <div style={demoSectionStyle}>
          <div style={labelStyle}>{t("spiral_label_3")}</div>
          <div
            style={spiralWrapperStyle}
            onClick={() => handleSpiralClick(3)}
          >
            <Spiral
              spiralColor="108, 198, 6"
              defaultDistortion={1.2}
              hoverDistortion={1.9}
              clickDistortion={5}
              strokeWidth={1.34}
            />
          </div>
        </div>

        {/* Fourth Spiral inside a nested white container */}
        <div style={demoSectionStyle}>
          <div style={labelStyle}>{t("spiral_label_4")}</div>
          <div style={nestedWhiteContainerStyle}>
            <div
              style={spiralWrapperStyle}
              onClick={() => handleSpiralClick(4)}
            >
              <Spiral
                spiralColor="10, 10, 10"
                defaultDistortion={0.5}
                hoverDistortion={1.0}
                clickDistortion={2.0}
                strokeWidth={2.5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
