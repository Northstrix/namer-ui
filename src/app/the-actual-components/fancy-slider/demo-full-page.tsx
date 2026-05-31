import { FancySlider } from "@/app/the-actual-components/fancy-slider/FancySlider";
import React, { useState, useEffect } from "react";

import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/context/app-context";

export default function DemoFancySlider() {
  const { toast } = useToast();
  const t = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState(71);
  const [value2, setValue2] = useState(30);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    const checkDesktop = () => {
      const container = document.querySelector(".demo-fancy-slider-container");
      const containerWidth = container ? (container as HTMLElement).offsetWidth : window.innerWidth;
      setIsDesktop(containerWidth >= 640);
    };

    const timer = setTimeout(checkDesktop, 0);
    window.addEventListener("resize", checkDesktop);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkDesktop);
    };
  }, []);

  const handleChange = (v: number) => {
    const newValue = Number(v.toFixed(2));
    setValue(newValue);
    toast({
      title: t("namer_ui"),
      description: `${t("fancy_slider_slider_value")}: ${newValue}`,
    });
  };

  const handleChange2 = (v: number) => {
    const newValue = Number(v.toFixed(2));
    setValue2(newValue);
    toast({
      title: t("namer_ui"),
      description: `${t("fancy_slider_slider_value")}: ${newValue}`,
    });
  };

  if (!mounted) return null;

  return (
    <div className="w-full flex-col">
      {/* DEFAULT */}
      <main className="w-full bg-black flex justify-center overflow-x-hidden">
        <div className="demo-fancy-slider-container w-full flex flex-col">
          <div 
            className="relative overflow-hidden flex justify-center items-center py-[100px]"
            style={{ 
              height: isDesktop ? "auto" : "auto", 
              minHeight: isDesktop ? "min(100vh - 2px, 1078px)" : "unset"
            }}
          >
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
              <img
                src="/fancy-slider-background-image.webp"
                alt="Environment Backdrop"
                className="h-full w-auto min-w-max object-cover object-center"
                style={{ filter: 'blur(3.75px)' }}
              />
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  backgroundColor: "#000",
                  opacity: 0.25
                }}
              />
            </div>

            {/* Slider Container */}
            <div className="relative z-10 flex items-center justify-center">
              <FancySlider
                value={value}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </main>
      {/* RTL slider with shekel sign, white-blue-purple gradient */}
      <main className="w-full bg-black flex justify-center overflow-x-hidden">
        <div className="w-full flex flex-col">
          <div 
            className="relative overflow-hidden flex justify-center items-center py-[100px]"
            style={{ 
              height: isDesktop ? "auto" : "auto", 
              minHeight: isDesktop ? "min(100vh - 2px, 1078px)" : "unset"
            }}
          >
            <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
              <img
                src="/fancy-slider-background-image.webp"
                alt="Environment Backdrop"
                className="h-full w-auto min-w-max object-cover object-center"
                style={{ filter: 'blur(3.75px)' }}
              />
              <div className="absolute inset-0 transition-all duration-500" style={{ backgroundColor: "#000", opacity: 0.25 }} />
            </div>
            <div className="relative z-10 flex items-center justify-center">
              <FancySlider
                value={value2}
                onChange={handleChange2}
                config={{
                  min: 10,
                  max: 100,
                  step: 1,
                  density: 1.5,

                  paddingX: 36,
                  paddingY: 36,
                  bodyBorderRadius: "20px",
                  bodyBorderOpacity: 0.22,
                  bodyBackgroundColor: "#fff",
                  bodyOpacity: 0.1,
                  bodyBackdropBlur: 10.25,

                  trackBorderRadius: "8px",
                  trackWidth: 34,
                  trackHeight: 340,
                  trackUpperColor: "#ac25ff",
                  trackLowerColor: "#fff",
                  trackOpacity: 0.4,
                  trackBorderWidth: 1,
                  trackBorderOpacity: 0.14,
                  trackBorderColor: "#ffffff",
                  trackDeadzoneTop: 16,
                  trackDeadzoneBottom: 16,

                  knobBorderRadius: "14px",
                  knobSize: 30,
                  knobBlur: 6,
                  knobBackgroundColor: "##fff",
                  knobOpacity: 0.14,
                  knobBorderColor: "#ffffff",
                  knobBorderOpacity: 0.22,
                  knobBorderWidth: 1,
                  knobDotSize: 0,
                  knobHoverScale: 1.05,
                  knobActiveScale: 1.36,

                  mercuryMeltValue: 98,

                  scaleUnit: "₪",
                  scaleUnitPosition: "prefix",
                  scaleTickWidth: 22,
                  inactiveScaleColor: "#ffffffaa",
                  inactiveScaleOpacity: 0.5,
                  scaleFontSize: 11,
                  scaleFontWeight: "600",

                  fishScaleProximity: 92,
                  fishScaleMagnification: 0.2,
                  fishScaleLineMagnificationEnabled: false,

                  gradientColors: ["#fff", "#fff", "#25e5ff", "#ac25ff"],
                  gradientStops: [0, 0.5, 0.75, 1],

                  fishScaleTickTranslate: 20,

                  showScaleOnTheLeftSide: true,
                  swapScaleAndNumbers: true,
                  scaleSpacing: 16,
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}